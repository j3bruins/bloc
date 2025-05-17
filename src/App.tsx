import React from 'react';
import { Building2, Coins, Globe, Hammer, Ban as Bank, Receipt, Wallet, Banknote, Lock, Timer, Sparkles, Clock, Coins as TokenIcon, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
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
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient min-h-[80vh] flex items-center">
          <div className="absolute inset-0 grid-background opacity-40"></div>
          
          {/* Enhanced floating elements */}
          <div className="absolute top-20 right-[10%] w-64 h-64 floating-cube opacity-50 hero-cube"></div>
          <div className="absolute bottom-40 left-[15%] w-48 h-48 floating-cube-delayed opacity-40 hero-cube"></div>
          <div className="absolute top-40 left-[20%] w-32 h-32 floating-cube-reverse opacity-30 hero-cube"></div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-1/4 right-1/3 w-24 h-24 floating-cube opacity-20 hero-cube"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 floating-cube-delayed-more opacity-25 hero-cube"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f0d06e]/20 to-transparent blur-xl opacity-50"></div>
                <div className="relative">
                  <h1 className="text-6xl font-bold text-white mb-6 text-glow transform transition-transform hover:scale-105">
                    THE <span className="text-[#f0d06e]">BLOC</span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    The Bloc connects crypto investors with commercial real estate owners and developers through our revolutionary blockchain platform.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <button className="bg-[#f0d06e] text-black px-8 py-3 rounded-lg hover:bg-[#e0c15e] transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(240,208,110,0.3)]">
                      Get Started
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

        {/* Platform Features */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute top-40 right-[25%] w-80 h-80 floating-cube opacity-30"></div>
          <div className="absolute bottom-20 left-[30%] w-64 h-64 floating-cube-delayed-more opacity-20"></div>
          
          <div className="absolute inset-0 grid-background opacity-25"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-4 text-glow">
              Real Estate Blockchain Platform
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Revolutionizing commercial real estate investment through blockchain technology and innovative financial solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <Coins className="h-12 w-12 text-[#f0d06e] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Liquidity Access</h3>
                <p className="text-gray-300">
                  Connect with crypto investors to fund commercial projects including apartment buildings, 
                  hotels, and shopping centers through our multi-chain platform.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <Globe className="h-12 w-12 text-[#f0d06e] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Democratized Ownership</h3>
                <p className="text-gray-300">
                  Own fractions of premium commercial real estate through secure tokenization, 
                  making high-value properties accessible to all investors.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <Building2 className="h-12 w-12 text-[#f0d06e] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Developer Capital</h3>
                <p className="text-gray-300">
                  Connect with verified commercial developers and fund new construction projects 
                  through our crypto fund management platform.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <Bank className="h-12 w-12 text-[#f0d06e] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Tax-Optimized Investing</h3>
                <p className="text-gray-300">
                  Access opportunity zone funds and properties to mitigate capital gains taxes 
                  while investing in real estate development.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <Hammer className="h-12 w-12 text-[#f0d06e] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Global Property Solutions</h3>
                <p className="text-gray-300">
                  Purchase ready-built modular properties that can be shipped worldwide, 
                  revolutionizing global real estate development.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <Receipt className="h-12 w-12 text-[#f0d06e] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Smart Contract Payments</h3>
                <p className="text-gray-300">
                  Automated payment systems through NFT-backed property deeds ensure consistent 
                  and reliable transaction processing.
                </p>
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
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                  alt="Office Building" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">Commercial</span>
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Available</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Downtown Office Complex</h3>
                  <p className="text-gray-300 mb-4">Modern office space in prime location</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#f0d06e] font-semibold">$25M</span>
                    <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80" 
                  alt="Retail Space" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">Retail</span>
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Available</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Luxury Mall Complex</h3>
                  <p className="text-gray-300 mb-4">High-end retail space with premium foot traffic</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#f0d06e] font-semibold">$40M</span>
                    <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" 
                  alt="Apartment Complex" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">Residential</span>
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Available</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Urban Living Apartments</h3>
                  <p className="text-gray-300 mb-4">Modern apartment complex in city center</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#f0d06e] font-semibold">$35M</span>
                    <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" 
                  alt="Office Space" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Auction</span>
                    <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">24h Left</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Tech Hub Offices</h3>
                  <p className="text-gray-300 mb-4">Premium office space in tech district</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Current Bid</p>
                      <span className="text-[#f0d06e] font-semibold">$18.5M</span>
                    </div>
                    <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
                  alt="Hotel Property" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Auction</span>
                    <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">48h Left</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Boutique Hotel</h3>
                  <p className="text-gray-300 mb-4">Luxury hotel in tourist district</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Current Bid</p>
                      <span className="text-[#f0d06e] font-semibold">$22M</span>
                    </div>
                    <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&q=80" 
                  alt="Industrial Space" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Auction</span>
                    <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">72h Left</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Industrial Complex</h3>
                  <p className="text-gray-300 mb-4">Modern warehouse with office space</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Current Bid</p>
                      <span className="text-[#f0d06e] font-semibold">$15M</span>
                    </div>
                    <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80" 
                  alt="Luxury Apartments" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full">Tokenized</span>
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">85% Funded</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sky View Residences</h3>
                  <p className="text-gray-300 mb-4">Luxury apartment complex with ocean views</p>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Token Price</span>
                      <span className="text-[#f0d06e]">$100</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Min Investment</span>
                      <span className="text-[#f0d06e]">$1,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Expected Yield</span>
                      <span className="text-[#f0d06e]">8.5% APY</span>
                    </div>
                    <button className="w-full bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                      Invest Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" 
                  alt="Office Tower" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full">Tokenized</span>
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">92% Funded</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation Tower</h3>
                  <p className="text-gray-300 mb-4">Grade A office building in business district</p>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Token Price</span>
                      <span className="text-[#f0d06e]">$250</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Min Investment</span>
                      <span className="text-[#f0d06e]">$2,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Expected Yield</span>
                      <span className="text-[#f0d06e]">7.2% APY</span>
                    </div>
                    <button className="w-full bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                      Invest Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80" 
                  alt="Shopping Center" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full">Tokenized</span>
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">78% Funded</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Metro Mall</h3>
                  <p className="text-gray-300 mb-4">Premium shopping center in urban area</p>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Token Price</span>
                      <span className="text-[#f0d06e]">$150</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Min Investment</span>
                      <span className="text-[#f0d06e]">$1,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Expected Yield</span>
                      <span className="text-[#f0d06e]">9.1% APY</span>
                    </div>
                    <button className="w-full bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                      Invest Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DeFi Features */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute top-40 right-[25%] w-80 h-80 floating-cube opacity-30"></div>
          <div className="absolute bottom-20 left-[30%] w-64 h-64 floating-cube-delayed-more opacity-20"></div>
          
          <div className="absolute inset-0 grid-background opacity-25"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 text-glow">
              Advanced DeFi Integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl text-center">
                <Wallet className="h-12 w-12 text-[#f0d06e] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Crypto Loans</h3>
                <p className="text-gray-300">
                  Access property-backed loans through our network of crypto loan providers.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl text-center">
                <Banknote className="h-12 w-12 text-[#f0d06e] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Liquidity Pools</h3>
                <p className="text-gray-300">
                  Participate in real estate liquidity pools and earn yields on your investments.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl text-center">
                <Lock className="h-12 w-12 text-[#f0d06e] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Staking Rewards</h3>
                <p className="text-gray-300">
                  Stake your property tokens to earn additional rewards and participate in governance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Integration */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute top-40 right-[25%] w-80 h-80 floating-cube opacity-30"></div>
          <div className="absolute bottom-20 left-[30%] w-64 h-64 floating-cube-delayed-more opacity-20"></div>
          <div className="absolute inset-0 grid-background opacity-25"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 text-glow">
              AI-Powered Property Analysis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl text-center">
                <Sparkles className="h-12 w-12 text-[#f0d06e] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Smart Valuation</h3>
                <p className="text-gray-300">
                  AI-driven property valuation using market data and predictive analytics.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl text-center">
                <Clock className="h-12 w-12 text-[#f0d06e] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Market Timing</h3>
                <p className="text-gray-300">
                  Optimal investment timing suggestions based on market trends and conditions.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl text-center">
                <TokenIcon className="h-12 w-12 text-[#f0d06e] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Token Analytics</h3>
                <p className="text-gray-300">
                  Advanced analytics for property token performance and market dynamics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute top-40 right-[25%] w-80 h-80 floating-cube opacity-30"></div>
          <div className="absolute bottom-20 left-[30%] w-64 h-64 floating-cube-delayed-more opacity-20"></div>
          <div className="absolute inset-0 grid-background opacity-25"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 text-glow">
              Educational Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link to="/blog" className="hover-card animated-border bg-black/60 backdrop-blur-md p-6 rounded-xl group">
                <BookOpen className="h-8 w-8 text-[#f0d06e] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Blockchain Basics</h3>
                <p className="text-gray-300 text-sm mb-4">Learn the fundamentals of blockchain technology in real estate.</p>
                <div className="flex items-center text-[#f0d06e] group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
              
              <Link to="/blog" className="hover-card animated-border bg-black/60 backdrop-blur-md p-6 rounded-xl group">
                <BookOpen className="h-8 w-8 text-[#f0d06e] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Investment Guides</h3>
                <p className="text-gray-300 text-sm mb-4">Comprehensive guides on property investment strategies.</p>
                <div className="flex items-center text-[#f0d06e] group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
              
              <Link to="/blog" className="hover-card animated-border bg-black/60 backdrop-blur-md p-6 rounded-xl group">
                <BookOpen className="h-8 w-8 text-[#f0d06e] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Market Reports</h3>
                <p className="text-gray-300 text-sm mb-4">In-depth analysis of real estate market trends.</p>
                <div className="flex items-center text-[#f0d06e] group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
              
              <Link to="/blog" className="hover-card animated-border bg-black/60 backdrop-blur-md p-6 rounded-xl group">
                <BookOpen className="h-8 w-8 text-[#f0d06e] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
                <p className="text-gray-300 text-sm mb-4">Real-world examples of successful property investments.</p>
                <div className="flex items-center text-[#f0d06e] group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-[#f0d06e]" />
                <span className="font-bold text-xl text-white">The Bloc</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing real estate investment through blockchain technology.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-[#f0d06e]">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-[#f0d06e]">About</Link></li>
                <li><Link to="/properties" className="text-gray-400 hover:text-[#f0d06e]">Properties</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-[#f0d06e]">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-400 hover:text-[#f0d06e]">Help Center</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-[#f0d06e]">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-[#f0d06e]">Privacy Policy</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-[#f0d06e]">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest properties and features.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
                />
                <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 The Bloc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;