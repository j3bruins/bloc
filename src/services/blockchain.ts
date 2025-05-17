import { PublicKey } from '@solana/web3.js';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export interface Property {
  id: number;
  title: string;
  description: string;
  location: string;
  total_value: number;
  tokenized_value: number;
  bitcoin_reserve_percentage: number;
  mint_address: string;
  created_at: string;
}

export interface InvestRequest {
  recipient_wallet: string;
  token_amount: number;
}

export const blockchainService = {
  async registerUser(email: string, walletAddress: string, password: string) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, wallet_address: walletAddress, password }),
    });
    
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    
    return response.json();
  },

  async login(email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    return response.json();
  },

  async createProperty(property: Omit<Property, 'id' | 'mint_address' | 'created_at'>, token: string) {
    const response = await fetch(`${API_URL}/properties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(property),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create property');
    }
    
    return response.json();
  },

  async invest(propertyId: number, request: InvestRequest, token: string) {
    const response = await fetch(`${API_URL}/properties/${propertyId}/invest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(request),
    });
    
    if (!response.ok) {
      throw new Error('Investment failed');
    }
    
    return response.json();
  },
};