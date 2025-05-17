import os
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from solana.rpc.async_api import AsyncClient
from solana.keypair import Keypair
from solana.publickey import PublicKey
from solana.transaction import Transaction
import asyncpg
from typing import Optional, List
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext

# Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
SOLANA_RPC_URL = os.getenv("SOLANA_RPC_URL", "https://api.devnet.solana.com")
PROGRAM_ID = os.getenv("PROGRAM_ID", "YOUR_PROGRAM_ID_HERE")

app = FastAPI()

# Security
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Models
class User(BaseModel):
    username: str
    email: str
    wallet_address: str
    disabled: bool = False

class UserInDB(User):
    hashed_password: str

class Property(BaseModel):
    id: int
    name: str
    description: str
    location: str
    total_supply: int
    token_mint: str
    owner_wallet: str
    valuation: float
    is_active: bool
    created_at: datetime

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

# Database connection
async def get_db():
    return await asyncpg.connect(
        user=os.getenv("DB_USER", "postgres"),
        password=os.getenv("DB_PASSWORD", "postgres"),
        database=os.getenv("DB_NAME", "realestate"),
        host=os.getenv("DB_HOST", "localhost")
    )

# Auth utilities
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

async def authenticate_user(db, username: str, password: str):
    user = await db.fetchrow("SELECT * FROM users WHERE username = $1", username)
    if not user or not verify_password(password, user["hashed_password"]):
        return False
    return UserInDB(**user)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Property endpoints
@app.post("/properties/", response_model=Property)
async def create_property(
    property_data: dict,
    current_user: User = Depends(oauth2_scheme)
):
    """Create new property and initialize token mint"""
    db = await get_db()
    try:
        # Initialize Solana client
        solana_client = AsyncClient(SOLANA_RPC_URL)
        
        # 1. Create property in database
        property_id = await db.fetchval(
            """INSERT INTO properties 
            (name, description, location, total_supply, owner_wallet, valuation) 
            VALUES ($1, $2, $3, $4, $5, $6) 
            RETURNING id""",
            property_data["name"],
            property_data["description"],
            property_data["location"],
            property_data["total_supply"],
            current_user.wallet_address,
            property_data["valuation"]
        )
        
        # 2. Call Rust program to initialize token mint (simplified)
        # In reality, this would involve building and sending a transaction
        token_mint = str(Keypair().public_key)
        
        # 3. Update property with token mint
        await db.execute(
            "UPDATE properties SET token_mint = $1 WHERE id = $2",
            token_mint, property_id
        )
        
        return await db.fetchrow(
            "SELECT * FROM properties WHERE id = $1", property_id
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        await db.close()
        await solana_client.close()

@app.get("/properties/", response_model=List[Property])
async def list_properties():
    """List all available properties"""
    db = await get_db()
    try:
        return await db.fetch("SELECT * FROM properties WHERE is_active = true")
    finally:
        await db.close()

# Add more endpoints for property management, token transfers, etc.