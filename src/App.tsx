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
        {/* Original Hero Section */}
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
                  <h1 className="text-6xl font-bold text-white mb-6 text-glow">
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

        {/* Featured Development Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-25"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-sm font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20">
                Featured Development
              </span>
              <h2 className="text-4xl font-bold text-white mt-4 mb-2 text-glow">Los Angeles Luxury Apartments</h2>
              <p className="text-xl text-gray-300">Ground-up Development Opportunity</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
                  alt="Los Angeles Luxury Apartments"
                  className="rounded-lg shadow-2xl hover-card"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#f0d06e] text-2xl font-bold">{formatSOL(277777)} Target</span>
                    <span className="text-white bg-[#f0d06e]/20 px-4 py-2 rounded-full">45% Funded</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
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
                    <p className="text-gray-300">{formatSOL(10)}</p>
                  </div>
                </div>

                <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-4">Investment Progress</h3>
                  <div className="bg-black/60 rounded-full h-4 overflow-hidden mb-4">
                    <div className="bg-[#f0d06e] h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#f0d06e]">{formatSOL(125000)} Raised</span>
                    <span className="text-gray-300">Target: {formatSOL(277777)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Project Highlights</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-[#f0d06e]">•</span> LEED-certified sustainable design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#f0d06e]">•</span> Prime location near entertainment district
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#f0d06e]">•</span> Smart home technology integration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#f0d06e]">•</span> 12.5% projected annual yield
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-[#f0d06e] text-black px-8 py-3 rounded-lg hover:bg-[#e0c15e] transition-all transform hover:scale-105">
                    Invest Now
                  </button>
                  <button className="flex-1 border border-[#f0d06e] text-[#f0d06e] px-8 py-3 rounded-lg hover:bg-[#f0d06e]/10 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        [Previous Platform Features Section Content...]

        {/* Featured Properties */}
        [Previous Featured Properties Section Content...]

        {/* Properties on Auction */}
        [Previous Properties on Auction Section Content...]

        {/* Tokenized Properties */}
        [Previous Tokenized Properties Section Content...]

        {/* DeFi Features */}
        [Previous DeFi Features Section Content...]

        {/* AI Integration */}
        [Previous AI Integration Section Content...]

        {/* CTA Section */}
        [Previous CTA Section Content...]

        {/* Footer */}
        [Previous Footer Content...]
      </main>
    </div>
  );
}

export default App;