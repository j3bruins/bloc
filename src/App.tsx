import React from 'react';
import { Building2, Coins, Globe, Hammer, Ban as Bank, Receipt, Wallet, Banknote, Lock, Timer, Sparkles, Clock, Coins as TokenIcon, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatSOL } from './utils/solana';

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
              Connect Wallet
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Featured Development Section */}
        <section className="relative overflow-hidden hero-gradient min-h-[90vh] flex items-center">
          <div className="absolute inset-0 grid-background opacity-40"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f0d06e]/20 to-transparent blur-xl opacity-50"></div>
                <div className="relative">
                  <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-sm font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20 mb-4">
                    Featured Development
                  </span>
                  <h1 className="text-6xl font-bold text-white mb-6 text-glow">
                    Los Angeles Luxury Apartments
                  </h1>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#f0d06e] text-2xl font-bold">{formatSOL(277777)} Target Raise</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-300">Ground-up Development</span>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    Premium multi-family development in prime Los Angeles location featuring sustainable design, 
                    smart home technology, and luxury amenities. Early-stage investment opportunity with 
                    significant growth potential.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-[#f0d06e] font-semibold mb-2">Location</h3>
                      <p className="text-gray-300">Los Angeles, CA</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-[#f0d06e] font-semibold mb-2">Property Type</h3>
                      <p className="text-gray-300">Multi-family Residential</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-[#f0d06e] font-semibold mb-2">Units</h3>
                      <p className="text-gray-300">156 Luxury Apartments</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-[#f0d06e] font-semibold mb-2">Min Investment</h3>
                      <p className="text-gray-300">{formatSOL(10)} SOL</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-[#f0d06e] text-black px-8 py-3 rounded-lg hover:bg-[#e0c15e] transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(240,208,110,0.3)]">
                      Invest Now
                    </button>
                    <button className="border border-[#f0d06e] text-[#f0d06e] px-8 py-3 rounded-lg hover:bg-[#f0d06e]/10 transition-all transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="relative transform transition-all hover:scale-105 hover:rotate-2 duration-500">
                  <img
                    src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
                    alt="Los Angeles Luxury Apartments"
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_100px_rgba(240,208,110,0.2)] pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Progress */}
        <section className="py-12 bg-black/80 backdrop-blur-md border-y border-[#f0d06e]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-2">Investment Progress</h2>
                <p className="text-gray-300">Join 156 other investors in this opportunity</p>
              </div>
              <div className="flex-1 max-w-2xl">
                <div className="bg-black/60 rounded-full h-4 overflow-hidden">
                  <div className="bg-[#f0d06e] h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[#f0d06e]">{formatSOL(125000)} Raised</span>
                  <span className="text-gray-300">Target: {formatSOL(277777)}</span>
                </div>
              </div>
              <div className="text-center bg-black/40 px-6 py-4 rounded-lg">
                <p className="text-gray-300 text-sm">Time Remaining</p>
                <p className="text-2xl font-bold text-white">21 Days</p>
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-25"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 text-glow">Property Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <Building2 className="h-12 w-12 text-[#f0d06e] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Premium Location</h3>
                <p className="text-gray-300">
                  Located in a prime Los Angeles neighborhood with excellent access to entertainment, 
                  dining, and transportation.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <Coins className="h-12 w-12 text-[#f0d06e] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Strong Returns</h3>
                <p className="text-gray-300">
                  Projected annual yield of 12.5% with significant upside potential from property appreciation.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <Globe className="h-12 w-12 text-[#f0d06e] mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Sustainable Design</h3>
                <p className="text-gray-300">
                  LEED-certified building with solar panels, green spaces, and energy-efficient systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Details */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-25"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 text-glow">Investment Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-white">Token Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Token Price</span>
                    <span className="text-[#f0d06e] font-semibold">{formatSOL(10)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Tokens</span>
                    <span className="text-[#f0d06e] font-semibold">27,777</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Minimum Investment</span>
                    <span className="text-[#f0d06e] font-semibold">{formatSOL(10)}</span>
                  </div>
                </div>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-white">Returns Structure</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Target IRR</span>
                    <span className="text-[#f0d06e] font-semibold">18.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cash Yield</span>
                    <span className="text-[#f0d06e] font-semibold">12.5% Annual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Investment Term</span>
                    <span className="text-[#f0d06e] font-semibold">36 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="h-8 w-8 text-[#f0d06e]" />
                  <span className="font-bold text-xl text-white">The Bloc</span>
                </div>
                <p>Transforming real estate investment through blockchain technology.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Investment Options</h4>
                <ul className="space-y-2">
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Commercial Properties</li>
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Opportunity Zones</li>
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Development Projects</li>
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Modular Properties</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Platform</h4>
                <ul className="space-y-2">
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">How It Works</li>
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Marketplace</li>
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Developer Portal</li>
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">DeFi Integration</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Documentation</li>
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Legal Framework</li>
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Security</li>
                  <li className="hover:text-[#f0d06e] cursor-pointer transition-colors">Support</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p>&copy; 2024 The Bloc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;