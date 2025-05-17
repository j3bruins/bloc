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
      </main>
    </div>
  );
}

export default App;