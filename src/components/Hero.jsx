import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 35px),
                           repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 30px)`,
          backgroundSize: '30px 30px',
          animation: 'gridMove 20s linear infinite'
        }}
      />

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center -mt-20">
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
              <span className="block text-6xl mt-4 text-blue-400/80 font-light">
                One Block at a Time
              </span>
            </h1>
          </div>
        </div>
        
        <p className="mt-12 max-w-xl mx-auto text-lg text-gray-400 font-light leading-relaxed">
          Explore endless possibilities in a universe where creativity knows no bounds.
          Join us on an adventure of creation and discovery.
        </p>
        
        <div className="mt-12 flex gap-6">
          <button className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-white px-10 py-4 rounded-lg hover:bg-blue-500/20 transition-all duration-300 font-medium text-lg">
            Start Building
          </button>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
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