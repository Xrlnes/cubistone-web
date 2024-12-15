import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1a237e]/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-white hover:scale-105 transition-transform">
            CubiStone
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
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white 
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
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white 
                                 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigator.clipboard.writeText('PLAY.CUBISTONE.COM')}
              className="bg-white/10 border border-white/20 text-white 
                             hover:bg-white/20 px-6 py-2 rounded-lg transition-all 
                             duration-300 text-lg backdrop-blur-sm"
            >
              PLAY.CUBISTONE.COM
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r 
                     from-transparent via-white/20 to-transparent"></div>
    </header>
  );
};

export default Header;