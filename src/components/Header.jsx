import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Copy, ExternalLink } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCopyModal, setShowCopyModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTitles = () => {
    const titlesSection = document.getElementById('titles');
    if (titlesSection) {
      titlesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (item) => {
    if (item === 'Home') {
      window.location.href = '/';
    } else if (item === 'About') {
      if (window.location.pathname === '/') {
        scrollToTitles();
      } else {
        window.location.href = '/#titles';
      }
    } else if (item === 'Support' || item === 'Community') {
      window.open('https://discord.gg/q376MgFRK7', '_blank');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('PLAY.CUBISTONE.COM');
      setShowCopyModal(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Modal component
  const AnimatedCheck = () => (
    <svg
      className="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
      <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
  );

  const CopyModal = () => (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 
      ${showCopyModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
    >
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
      />
      <div 
        className={`bg-gray-900/90 border border-white/10 rounded-2xl p-8 relative transform 
        transition-all duration-500 max-w-md w-full mx-4 shadow-2xl ${showCopyModal ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl" />
        
        {/* Animated Success Icon */}
        <div className="flex justify-center mb-6 scale-150">
          <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-green-500/10 rounded-full animate-pulse"></div>
            <AnimatedCheck />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-white animate-fadeIn">IP Copied Successfully!</h3>
          <p className="text-gray-400 animate-fadeIn animation-delay-150">IP address has been copied to your clipboard</p>
          <div className="bg-black/30 rounded-lg p-3 flex items-center justify-center gap-2 border border-white/5 animate-fadeIn animation-delay-300">
            <span className="text-white font-mono">PLAY.CUBISTONE.COM</span>
            <Check className="w-4 h-4 text-green-500" />
          </div>
        </div>

        {/* Button */}
        <button 
          onClick={() => setShowCopyModal(false)}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium
                   hover:from-blue-500 hover:to-blue-600 transition-all duration-300 relative group overflow-hidden
                   animate-fadeIn animation-delay-450"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Play Now
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                       transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/20 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-3xl font-bold text-white hover:scale-105 transition-transform relative group"
            >
              <span className="relative z-10">CubiStone</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 
                           blur-lg group-hover:opacity-100 opacity-0 transition-opacity"></div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              {['Home', 'About', 'Credits', 'Support', 'Community'].map((item) => (
                item === 'Credits' ? (
                  <Link
                    key={item}
                    to="/credits"
                    className="text-gray-300 hover:text-white text-lg font-medium 
                             transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                                   transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white text-lg font-medium 
                             transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                                   transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleCopy}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 
                               group-hover:from-blue-600/30 group-hover:via-purple-600/30 group-hover:to-blue-600/30 
                               transition-all duration-300 rounded-xl blur-md"></div>
                <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 text-white 
                             px-6 py-3 rounded-xl transition-all duration-300 
                             group-hover:border-white/20 group-hover:bg-black/40">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    PLAY.CUBISTONE.COM
                    <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/5 to-blue-500/0 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
                  <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r 
                              from-transparent via-white/10 to-transparent group-hover:animate-shine"></div>
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white relative group">
              <div className="absolute inset-0 bg-white/5 rounded-lg filter blur opacity-0 
                           group-hover:opacity-100 transition-opacity"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" 
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r 
                     from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r 
                     from-transparent via-blue-500/10 to-transparent blur-sm"></div>
      </header>

      {/* Copy Modal */}
      <CopyModal />

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes shine {
          100% { transform: translateX(100%) skew(-12deg); }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }

        /* Checkmark Animations */
        .checkmark {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          stroke-width: 2;
          stroke: #4ade80;
          stroke-miterlimit: 10;
          position: relative;
        }

        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #4ade80;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }

        @keyframes stroke {
          100% { stroke-dashoffset: 0; }
        }

        /* Fade In Animation */
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Animation Delays */
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-450 {
          animation-delay: 450ms;
        }
      `}</style>
    </>
  );
};

export default Header;