import React, { useState } from 'react';
import { Building2, Coins, Globe, Hammer, Ban as Bank, Receipt, Wallet, Banknote, Lock, Timer, Sparkles, Clock, Coins as TokenIcon, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatSOL } from './utils/solana';

function App() {
  // Featured properties data with SOL prices
  const featuredProperties = [
    {
      id: 1,
      title: "Downtown Office Complex",
      description: "Modern office space in prime location",
      type: "Commercial",
      status: "Available",
      price: 1200, // Price in SOL
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Luxury Mall Complex",
      description: "High-end retail space with premium foot traffic",
      type: "Retail",
      status: "Available",
      price: 2000, // Price in SOL
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Urban Living Apartments",
      description: "Modern apartment complex in city center",
      type: "Residential",
      status: "Available",
      price: 1500, // Price in SOL
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
    }
  ];

  // Auction properties data with SOL prices
  const auctionProperties = [
    {
      id: 1,
      title: "Tech Hub Offices",
      description: "Premium office space in tech district",
      currentBid: 850, // Current bid in SOL
      timeLeft: "24h",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Boutique Hotel",
      description: "Luxury hotel in tourist district",
      currentBid: 1100, // Current bid in SOL
      timeLeft: "48h",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Industrial Complex",
      description: "Modern warehouse with office space",
      currentBid: 750, // Current bid in SOL
      timeLeft: "72h",
      image: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&q=80"
    }
  ];

  // Tokenized properties data with SOL prices
  const tokenizedProperties = [
    {
      id: 1,
      title: "Sky View Residences",
      description: "Luxury apartment complex with ocean views",
      tokenPrice: 5, // Token price in SOL
      minInvestment: 50, // Minimum investment in SOL
      expectedYield: 8.5,
      fundedPercentage: 85,
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Innovation Tower",
      description: "Grade A office building in business district",
      tokenPrice: 10, // Token price in SOL
      minInvestment: 100, // Minimum investment in SOL
      expectedYield: 7.2,
      fundedPercentage: 92,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Metro Mall",
      description: "Premium shopping center in urban area",
      tokenPrice: 7.5, // Token price in SOL
      minInvestment: 75, // Minimum investment in SOL
      expectedYield: 9.1,
      fundedPercentage: 78,
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Building2 className="h-8 w-8 text-[#f0d06e]" />
            <span className="font-bold text-xl text-white">The Bloc</span>
          </Link>
          <div className="flex space-x-6">
            <button className="text-gray-300 hover:text-[#f0d06e] transition-colors">How it Works</button>
            <button className="text-gray-300 hover:text-[#f0d06e] transition-colors">Assets</button>
            <Link to="/blog" className="text-gray-300 hover:text-[#f0d06e] transition-colors">
              Insights
            </Link>
            <button className="text-gray-300 hover:text-[#f0d06e] transition-colors">About</button>
            <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
              Connect Wallet
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient min-h-[80vh] flex items-center">
          <div className="absolute inset-0 grid-background opacity-40"></div>
          
          <div className="absolute top-20 right-[10%] w-64 h-64 floating-cube opacity-50 hero-cube"></div>
          <div className="absolute bottom-40 left-[15%] w-48 h-48 floating-cube-delayed opacity-40 hero-cube"></div>
          <div className="absolute top-40 left-[20%] w-32 h-32 floating-cube-reverse opacity-30 hero-cube"></div>
          
          <div className="absolute top-1/4 right-1/3 w-24 h-24 floating-cube opacity-20 hero-cube"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 floating-cube-delayed-more opacity-25 hero-cube"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f0d06e]/20 to-transparent blur-xl opacity-50"></div>
                <div className="relative">
                  <h1 className="text-6xl font-bold text-white mb-6 text-glow">
                    THE <span className="text-[#f0d06e]">BLOC</span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Invest in premium real estate using Solana. Fractional ownership, instant liquidity, and automated returns.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <button className="bg-[#f0d06e] text-black px-8 py-3 rounded-lg hover:bg-[#e0c15e] transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(240,208,110,0.3)]">
                      Connect Wallet
                    </button>
                    <button className="border border-[#f0d06e] text-[#f0d06e] px-8 py-3 rounded-lg hover:bg-[#f0d06e]/10 transition-all transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="relative transform transition-all hover:scale-105 hover:rotate-2 duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                    alt="Modern building"
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_100px_rgba(240,208,110,0.2)] pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute top-40 right-[25%] w-80 h-80 floating-cube opacity-30"></div>
          <div className="absolute bottom-20 left-[30%] w-64 h-64 floating-cube-delayed-more opacity-20"></div>
          <div className="absolute inset-0 grid-background opacity-25"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 text-glow">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProperties.map(property => (
                <div key={property.id} className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">{property.type}</span>
                      <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">{property.status}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{property.title}</h3>
                    <p className="text-gray-300 mb-4">{property.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#f0d06e] font-semibold">{formatSOL(property.price)}</span>
                      <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Properties on Auction */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute top-40 right-[25%] w-80 h-80 floating-cube opacity-30"></div>
          <div className="absolute bottom-20 left-[30%] w-64 h-64 floating-cube-delayed-more opacity-20"></div>
          <div className="absolute inset-0 grid-background opacity-25"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 text-glow">Properties on Auction</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {auctionProperties.map(property => (
                <div key={property.id} className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Auction</span>
                      <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">{property.timeLeft} Left</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{property.title}</h3>
                    <p className="text-gray-300 mb-4">{property.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">Current Bid</p>
                        <span className="text-[#f0d06e] font-semibold">{formatSOL(property.currentBid)}</span>
                      </div>
                      <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                        Place Bid
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tokenized Properties */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute top-40 right-[25%] w-80 h-80 floating-cube opacity-30"></div>
          <div className="absolute bottom-20 left-[30%] w-64 h-64 floating-cube-delayed-more opacity-20"></div>
          <div className="absolute inset-0 grid-background opacity-25"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 text-glow">Tokenized Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tokenizedProperties.map(property => (
                <div key={property.id} className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full">Tokenized</span>
                      <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">{property.fundedPercentage}% Funded</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{property.title}</h3>
                    <p className="text-gray-300 mb-4">{property.description}</p>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Token Price</span>
                        <span className="text-[#f0d06e]">{formatSOL(property.tokenPrice)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Min Investment</span>
                        <span className="text-[#f0d06e]">{formatSOL(property.minInvestment)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Expected Yield</span>
                        <span className="text-[#f0d06e]">{property.expectedYield}% APY</span>
                      </div>
                      <button className="w-full bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                        Invest Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        
      </main>
    </div>
  );
}

export default App;