import React from 'react';
import coin from '../images/coin.png';

const CreditsShowcase = () => {
  return (
    <div className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider">CREDITS SYSTEM</span>
          <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
            Enhance Your Gaming
            <span className="block text-blue-400 mt-2">With Premium Credits</span>
          </h2>
        </div>

        {/* Main Showcase */}
        <div className="relative mb-16">
          {/* Background Effects */}
          <div className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          
          {/* Showcase Container */}
          <div className="relative bg-gray-900/50 p-2 rounded-2xl backdrop-blur-sm border border-gray-800">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src={coin} 
                alt="Credits Store Preview" 
                className="w-full h-full object-cover brightness-90 hover:brightness-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Purchase credits to unlock exclusive features and enhance your gaming experience. 
            Get access to premium content and special perks.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-gray-300 font-medium">Instant Delivery</div>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="text-gray-300 font-medium">Secure Payments</div>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-gray-300 font-medium">24/7 Support</div>
            </div>
          </div>

          <button className="relative overflow-hidden group bg-gradient-to-br from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl hover:shadow-[0_0_30px_-5px] hover:shadow-blue-500/50 transition-all duration-300 font-semibold text-lg">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        {/* Shine Effect */}
        <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform group-hover:left-full transition-all duration-700 ease-out" />
        
        {/* Multiple Border Effects */}
        <div className="absolute inset-0 border border-blue-400 rounded-xl opacity-0 group-hover:opacity-50 scale-105 group-hover:scale-110 transition-all duration-300" />
        <div className="absolute inset-0 border-2 border-white/20 rounded-xl opacity-0 group-hover:opacity-20 scale-100 group-hover:scale-105 transition-all duration-500" />
        
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-blue-600 rounded-xl opacity-0 group-hover:opacity-20 group-hover:blur-md transition-all duration-300" />
        
        {/* Button Content */}
        <span className="relative flex items-center justify-center gap-3 z-10">
        <span className="transform group-hover:-translate-x-1 transition-transform duration-300">Visit Store</span>
        <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        </span>

        {/* Hover Ring */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-30 blur-md transform scale-105 group-hover:scale-110 transition-all duration-500" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default CreditsShowcase;