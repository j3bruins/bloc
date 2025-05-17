import { Connection, PublicKey, Transaction } from '@solana/web3.js';

const SOLANA_NETWORK = 'devnet';
const SOLANA_ENDPOINT = `https://api.${SOLANA_NETWORK}.solana.com`;

export const connection = new Connection(SOLANA_ENDPOINT);

export const SOL_TO_LAMPORTS = 1000000000; // 1 SOL = 1 billion lamports

export const formatSOL = (amount: number) => {
  return `${amount.toLocaleString()} SOL`;
};

export const lamportsToSOL = (lamports: number) => {
  return lamports / SOL_TO_LAMPORTS;
};

export const SOLToLamports = (sol: number) => {
  return sol * SOL_TO_LAMPORTS;
};