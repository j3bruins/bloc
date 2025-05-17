import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';

function Blog() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-[#f0d06e]" />
            <span className="font-bold text-xl text-white">The Bloc</span>
          </div>
          <div className="flex space-x-6">
            <button className="text-gray-300 hover:text-[#f0d06e] transition-colors">How it Works</button>
            <button className="text-gray-300 hover:text-[#f0d06e] transition-colors">Assets</button>
            <button className="text-gray-300 hover:text-[#f0d06e] transition-colors">About</button>
            <button className="bg-[#f0d06e] text-black px-4 py-2 rounded-lg hover:bg-[#e0c15e] transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Blog Hero Section */}
        <section className="relative overflow-hidden hero-gradient py-20">
          <div className="absolute inset-0 grid-background"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-6 text-glow">Latest Insights</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert analysis and insights on tokenized real estate and digital investment
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                  alt="Commercial Real Estate" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">Industry Trends</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">The Future of Commercial Real Estate: Tokenization Revolution</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span>Mar 15, 2024</span>
                    <span>8 min read</span>
                  </div>
                  <p className="text-gray-300 mb-4">Explore how blockchain technology is transforming commercial real estate investment through tokenization...</p>
                  <button className="text-[#f0d06e] hover:text-[#e0c15e] transition-colors flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80" 
                  alt="Crypto Finance" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">Crypto Finance</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">10 Advantages of Raising Capital Through Cryptocurrency</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span>Mar 12, 2024</span>
                    <span>12 min read</span>
                  </div>
                  <p className="text-gray-300 mb-4">Discover why more real estate developers are turning to crypto capital raising...</p>
                  <button className="text-[#f0d06e] hover:text-[#e0c15e] transition-colors flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" 
                  alt="Tax Strategy" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Tax Strategy</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Understanding Opportunity Zones in Tokenized Real Estate</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span>Mar 10, 2024</span>
                    <span>10 min read</span>
                  </div>
                  <p className="text-gray-300 mb-4">A comprehensive guide to leveraging Opportunity Zones for tax-advantaged real estate investments...</p>
                  <button className="text-[#f0d06e] hover:text-[#e0c15e] transition-colors flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Additional Blog Posts */}
              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
                  alt="Technology" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">Technology</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Contracts in Real Estate: A Game-Changer</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span>Mar 8, 2024</span>
                    <span>7 min read</span>
                  </div>
                  <p className="text-gray-300 mb-4">How smart contracts are revolutionizing property transactions...</p>
                  <button className="text-[#f0d06e] hover:text-[#e0c15e] transition-colors flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80" 
                  alt="Market Analysis" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">Market Analysis</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Global Investment Trends in Tokenized Real Estate</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span>Mar 5, 2024</span>
                    <span>9 min read</span>
                  </div>
                  <p className="text-gray-300 mb-4">Analysis of emerging trends in cross-border real estate investment...</p>
                  <button className="text-[#f0d06e] hover:text-[#e0c15e] transition-colors flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="hover-card animated-border bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
                  alt="Compliance" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Compliance</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Regulatory Compliance in Digital Real Estate Investment</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span>Mar 3, 2024</span>
                    <span>11 min read</span>
                  </div>
                  <p className="text-gray-300 mb-4">Navigate the regulatory landscape of tokenized real estate investment...</p>
                  <button className="text-[#f0d06e] hover:text-[#e0c15e] transition-colors flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}

export default Blog;