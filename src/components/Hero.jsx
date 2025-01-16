import React, { useState } from 'react';

const Hero = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('PLAY.CUBISTONE.COM');
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 35px),
                           repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 30px)`,
          backgroundSize: '30px 30px',
          animation: 'gridMove 20s linear infinite'
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/5 backdrop-blur-sm rounded"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto flex flex-col items-center justify-center px-4 text-center pb-20" style={{ zIndex: 10 }}>
        <div className="space-y-4">
          <span className="text-blue-400 font-light text-xl tracking-widest uppercase block">
            Welcome to Our Universe
          </span>
          
          <div className="relative space-y-4">
            <h1 className="text-8xl font-black text-white leading-tight">
              <span className="block opacity-90">Build Your</span>
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-9xl mt-3">
                World
              </span>
            </h1>
          </div>
        </div>
        
        <p className="mt-12 max-w-xl mx-auto text-lg text-gray-400 font-light leading-relaxed">
          Take on epic challenges, defeat mighty foes, and earn legendary rewards. 
          Become the hero you were meant to be. Your adventure starts now!
        </p>
        
        <div className="mt-12 flex gap-6">
          <button 
            onClick={handleCopy}
            className="relative bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-white px-10 py-4 rounded-lg hover:bg-blue-500/20 transition-all duration-300 font-medium text-lg group"
          >
            Start Building
            {showCopied && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                IP Copied!
              </div>
            )}
          </button>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg">
            Learn More
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(180deg); }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;