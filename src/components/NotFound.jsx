import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import bee from '../images/bee.png';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4 font-neue-haas overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s linear infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Orbital Rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] -left-[50px] md:-left-[100px] -top-[50px] md:-top-[100px] rounded-full border border-accent/10 animate-reverse-spin" style={{ animationDuration: '25s' }} />
      </div>

      {/* Layered Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-[50px] md:blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/10 rounded-full blur-[50px] md:blur-[100px]" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-2xl w-full">
        {/* 404 Number */}
        <div className="relative text-center mb-8">
          <h1 className="text-[8rem] md:text-[12rem] leading-none font-bold text-white/5 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              404
            </h2>
          </div>
        </div>

        {/* Centered Content */}
        <div className="text-center relative z-10 bg-gray-900/50 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-gray-800/50">
          {/* Logo Container */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse" />
            <img 
              src={bee} 
              alt="Sad Bee" 
              className="relative w-full h-full object-contain transform -scale-x-100 drop-shadow-2xl animate-float" 
            />
          </div>

          {/* Message */}
          <h2 className="mt-8 text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Oops! Page Not Found
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Return Home Button */}
          <Link 
            to="/"
            className="group relative inline-flex items-center gap-2 mt-8 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Button Content */}
            <Home className="w-4 h-4 md:w-5 md:h-5 text-white relative z-10" />
            <span className="text-white relative z-10 text-sm md:text-base">Return Home</span>
            {/* Shine Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;