import React from 'react';
import { Building2, Coins, Globe, Hammer, Ban as Bank, Receipt, Wallet, Banknote, Lock, Timer, Sparkles, Clock, Coins as TokenIcon, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatSOL } from './utils/solana';

function App() {
  // Calculate funding progress
  const targetAmount = 277777;
  const raisedAmount = 10;
  const progressPercentage = (raisedAmount / targetAmount) * 100;

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

        {/* Featured Project */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-25"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 text-glow">Featured Development</h2>
            <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-[400px]">
                  <img 
                    src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
                    alt="Los Angeles Development"
                    className="absolute inset-0 w-full h-full object-cover rounded-l-xl"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#f0d06e] text-black text-sm px-3 py-1 rounded-full">Featured</span>
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Los Angeles</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Sunset Boulevard Residences</h3>
                  <p className="text-gray-300 mb-6">
                    Luxury apartment development in the heart of Los Angeles. This ground-up development features sustainable design, 
                    smart home technology, and premium amenities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Target Raise</span>
                      <span className="text-[#f0d06e]">{formatSOL(targetAmount)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Raised</span>
                      <span className="text-[#f0d06e]">{formatSOL(raisedAmount)}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-[#f0d06e] h-2 rounded-full" 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-[#f0d06e]">{progressPercentage.toFixed(2)}%</span>
                    </div>
                    <button className="w-full bg-[#f0d06e] text-black px-4 py-3 rounded-lg hover:bg-[#e0c15e] transition-colors flex items-center justify-center gap-2">
                      Invest Now <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
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
              AI-Powered Real Estate Intelligence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl text-center">
                <Sparkles className="h-12 w-12 text-[#f0d06e] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Smart Deal Matching</h3>
                <p className="text-gray-300">
                  Our AI agents analyze your investment preferences and match you with the perfect properties.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl text-center">
                <Timer className="h-12 w-12 text-[#f0d06e] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Automated Due Diligence</h3>
                <p className="text-gray-300">
                  AI-powered analysis of property documents, market data, and risk factors for faster decision making.
                </p>
              </div>
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md p-8 rounded-xl text-center">
                <BookOpen className="h-12 w-12 text-[#f0d06e] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Smart Underwriting</h3>
                <p className="text-gray-300">
                  Advanced AI algorithms assess property values, market conditions, and risk factors for optimal underwriting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f0d06e] py-20 relative overflow-hidden">
          <div className="absolute top-20 right-[20%] w-60 h-60 floating-cube bg-black/10 opacity-30"></div>
          <div className="absolute bottom-40 left-[25%] w-48 h-48 floating-cube-delayed bg-black/10 opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-black mb-6">
              Ready to Transform Real Estate Investment?
            </h2>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl">
              Join the future of property investment and unlock new possibilities in the world of tokenized real estate.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-black text-[#f0d06e] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors">
                Start Investing
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-[#f0d06e] transition-colors">
                List Your Property
              </button>
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