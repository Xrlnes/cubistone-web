// LoadingPage.jsx
import React from 'react';
import bee from '../images/bee.png';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-secondary z-50 flex items-center justify-center font-neue-haas">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
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

      {/* Orbital Rings - Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-[200px] h-[200px] -top-[100px] -left-[100px] rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute w-[300px] h-[300px] -top-[150px] -left-[150px] rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '12s' }} />
        <div className="absolute w-[400px] h-[400px] -top-[200px] -left-[200px] rounded-full border border-primary/10 animate-reverse-spin" style={{ animationDuration: '15s' }} />
      </div>

      {/* Layered Glow Effects - Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Main Loading Container - Centered */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Layered Effects */}
        <div className="relative w-32 h-32">
          {/* Logo Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl" />
          
          {/* Logo Wrapper */}
          <div className="relative w-full h-full animate-float">
            {/* Logo Shine Effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
            </div>
            
            {/* Logo Image */}
            <img 
              src={bee} 
              alt="Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Animated Loading Bar */}
        <div className="mt-12 w-64 relative">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-primary via-accent to-primary animate-loading-bar" />
          </div>
          {/* Progress Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
        </div>

        {/* Loading Text with Gradient */}
        <div className="mt-6 relative">
          <p className="text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
            Loading...
          </p>
          {/* Decorative Line */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;