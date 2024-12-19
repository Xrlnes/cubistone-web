import React, { useState } from 'react';
import { ShoppingCart, LogIn, ShoppingBag } from 'lucide-react';
import LoginModal from './LoginModal';

const StoreBar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-950/50 backdrop-blur-md py-4 mt-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1a237e] to-blue-900 rounded-xl p-6 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-20" />
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}
            />
            
            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-blue-300" />
                </div>
                <span className="font-extrabold text-2xl tracking-wide text-white">
                  CREDIT STORE
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-white px-4 py-2.5 rounded-lg transition-all duration-300 group">
                  <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Cart (0)</span>
                </button>

                <button 
                  onClick={() => setLoginOpen(true)}
                  className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-white px-6 py-2.5 rounded-lg transition-all duration-300 group"
                >
                  <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Login with Username</span>
                </button>
              </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setLoginOpen(false)}
      />
    </>
  );
};

export default StoreBar;