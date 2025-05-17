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
        {/* Previous sections remain unchanged until AI Integration */}
        
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