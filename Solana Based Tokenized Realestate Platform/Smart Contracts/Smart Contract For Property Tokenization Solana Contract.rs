use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
    system_instruction,
    sysvar::{clock::Clock, Sysvar},
};
use spl_token::{
    instruction::{initialize_mint, mint_to},
    state::Mint,
};

// Program state structure
#[derive(Debug)]
pub struct PropertyToken {
    pub mint: Pubkey,
    pub owner: Pubkey,
    pub total_supply: u64,
    pub valuation: u64,
    pub is_active: bool,
}

// Instruction enum
pub enum PropertyInstruction {
    /// Initialize a new property token
    /// Accounts expected:
    /// 0. [signer] Initializer account
    /// 1. [writable] Mint account
    /// 2. [] Token program
    InitializeProperty {
        name: String,
        total_supply: u64,
        valuation: u64,
    },
    /// Mint tokens to an account
    MintTokens {
        amount: u64,
    },
    /// Disable property token
    DisableProperty,
}

impl PropertyInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&tag, rest) = input.split_first().ok_or(ProgramError::InvalidInstructionData)?;
        match tag {
            0 => {
                let (name, rest) = rest.split_at(32);
                let name = String::from_utf8(name.to_vec()).map_err(|_| ProgramError::InvalidInstructionData)?;
                let total_supply = rest
                    .get(..8)
                    .and_then(|slice| slice.try_into().ok())
                    .map(u64::from_le_bytes)
                    .ok_or(ProgramError::InvalidInstructionData)?;
                let valuation = rest
                    .get(8..16)
                    .and_then(|slice| slice.try_into().ok())
                    .map(u64::from_le_bytes)
                    .ok_or(ProgramError::InvalidInstructionData)?;
                Ok(PropertyInstruction::InitializeProperty {
                    name,
                    total_supply,
                    valuation,
                })
            }
            1 => {
                let amount = rest
                    .get(..8)
                    .and_then(|slice| slice.try_into().ok())
                    .map(u64::from_le_bytes)
                    .ok_or(ProgramError::InvalidInstructionData)?;
                Ok(PropertyInstruction::MintTokens { amount })
            }
            2 => Ok(PropertyInstruction::DisableProperty),
            _ => Err(ProgramError::InvalidInstructionData),
        }
    }
}

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let instruction = PropertyInstruction::unpack(instruction_data)?;

    match instruction {
        PropertyInstruction::InitializeProperty {
            name,
            total_supply,
            valuation,
        } => {
            msg!("Initializing property token: {}", name);
            initialize_property(program_id, accounts, total_supply, valuation)
        }
        PropertyInstruction::MintTokens { amount } => {
            msg!("Minting tokens: {}", amount);
            mint_tokens(program_id, accounts, amount)
        }
        PropertyInstruction::DisableProperty => {
            msg!("Disabling property");
            disable_property(program_id, accounts)
        }
    }
}

fn initialize_property(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    total_supply: u64,
    valuation: u64,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let initializer = next_account_info(account_info_iter)?;
    let mint_account = next_account_info(account_info_iter)?;
    let token_program = next_account_info(account_info_iter)?;

    // Initialize mint
    let init_mint_ix = initialize_mint(
        token_program.key,
        mint_account.key,
        initializer.key,
        None,
        0, // Decimals - real estate tokens are typically non-divisible
    )?;

    solana_program::program::invoke(
        &init_mint_ix,
        &[mint_account.clone(), token_program.clone()],
    )?;

    // Store property data in mint account
    let mut mint_data = mint_account.try_borrow_mut_data()?;
    let property_token = PropertyToken {
        mint: *mint_account.key,
        owner: *initializer.key,
        total_supply,
        valuation,
        is_active: true,
    };

    // Serialize property data into mint account
    // Note: In production, you'd use a proper serialization method
    // and separate account for property data
    let serialized = bincode::serialize(&property_token).unwrap();
    mint_data[..serialized.len()].copy_from_slice(&serialized);

    Ok(())
}

// Additional functions for mint_tokens and disable_property would follow