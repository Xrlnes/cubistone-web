import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-[#1a237e] to-[#1a237e] text-white overflow-hidden pt-60 pb-20">
      {/* Animated Orbital Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] left-1/2 -translate-x-1/2 rounded-full border border-blue-500/20 animate-slow-spin"></div>
        <div className="absolute w-[600px] h-[600px] left-1/2 -translate-x-1/2 rounded-full border border-blue-500/20 animate-reverse-spin"></div>
      </div>

      {/* Glowing Orbs */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl animate-pulse opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)',
            width: '400px',
            height: '400px',
            left: `${i * 30}%`,
            top: `${Math.random() * 50}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 relative pt-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-32">
          {/* Left Column - Brand */}
          <div className="space-y-12 transform hover:scale-105 transition-all duration-500">
            <h3 className="text-6xl font-bold text-white">
              CubiStone
            </h3>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-lg">
              Building extraordinary experiences, connecting players worldwide, 
              and creating unforgettable memories in every block.
            </p>
            {/* Social Icons */}
            <div className="flex gap-12 pt-8">
              {['Discord', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 
                           hover:-translate-y-2 hover:text-blue-400 text-xl relative group"
                >
                  {social}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-400 
                                 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 gap-20">
            {/* Explore Section */}
            <div className="space-y-10 transform hover:scale-105 transition-all duration-500">
              <h4 className="text-4xl font-bold text-blue-300">Explore</h4>
              <ul className="space-y-6">
                {['Features', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-2xl text-gray-400 hover:text-white 
                                         transition-all duration-300 block hover:translate-x-2 
                                         relative group">
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 
                                     bg-gradient-to-r from-blue-500 to-purple-500 
                                     transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div className="space-y-10 transform hover:scale-105 transition-all duration-500">
              <h4 className="text-4xl font-bold text-blue-300">Support</h4>
              <ul className="space-y-6">
                {['Help Center', 'Terms', 'Privacy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-2xl text-gray-400 hover:text-white 
                                         transition-all duration-300 block hover:translate-x-2 
                                         relative group">
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 
                                     bg-gradient-to-r from-blue-500 to-purple-500 
                                     transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 py-12 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 
                         bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <p className="text-gray-400 text-xl">&copy; 2024 CubiStone. All rights reserved.</p>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 
                     bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400"></div>

      <style jsx>{`
        @keyframes slow-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;