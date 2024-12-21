import React from 'react';
import bee from '../images/logo.png';

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
        <div className="relative w-60 h-60">
          {/* Logo Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl" />
          
          {/* Logo Wrapper */}
          <div className="relative w-full h-full">
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

        {/* Ultra Modern Loading Bar Container */}
        <div className="mt-12 relative w-64">
          {/* Skeleton Loading Effect */}
          <div className="absolute inset-0 w-full h-8 bg-gray-800/20 rounded-lg backdrop-blur-lg overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                  style={{
                    width: '200%',
                    top: `${i * 4}px`,
                    left: '-50%',
                    transform: 'rotate(-35deg)',
                    animation: 'slide 2s linear infinite',
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Progress Bar */}
          <div className="relative h-8 rounded-lg overflow-hidden backdrop-blur-xl bg-gray-900/40 group">
            {/* Progress Gradient */}
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary via-accent to-primary animate-loading-bar" 
                 style={{ 
                   animationDuration: '2s',
                   filter: 'brightness(1.2) contrast(1.2)'
                 }}
            />

            {/* Animated Dots Overlay */}
            <div className="absolute inset-0 flex items-center justify-around px-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    opacity: 0.8
                  }}
                />
              ))}
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine" 
                 style={{ animationDuration: '1.5s' }}
            />
          </div>

          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-xl rounded-lg opacity-60 group-hover:opacity-80 transition-all duration-300" />

          {/* Interactive Particles */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 2 + 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Text Container */}
        <div className="mt-6 relative">
          {/* Modern Loading Text */}
          <div className="flex items-center space-x-2">
            <p className="text-lg font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse">
              Loading
            </p>
            {/* Animated Dots */}
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-accent rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          
          {/* Enhanced Decorative Line */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse" 
                 style={{ animationDelay: '0.5s' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;