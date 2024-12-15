import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import beeImage from '../images/bee.png';
import dolphinImage from '../images/dolphin.png'

const Titles = () => {
  const navigate = useNavigate();
  const [showCopied1, setShowCopied1] = useState(false);
  const [showCopied2, setShowCopied2] = useState(false);

  const handleCopy = async (setShowCopied) => {
    try {
      await navigator.clipboard.writeText('PLAY.CUBISTONE.COM');
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const scrollToNews = () => {
    const newsSection = document.getElementById('news');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="titles">
      {/* First Section */}
      <div className="bg-gray-950 py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[500px] w-[45%] bg-yellow-300 overflow-hidden"
          style={{
            borderTopLeftRadius: "70px",
            borderBottomLeftRadius: "70px",
            transform: "skew(-10deg) translateY(-50%)",
          }}
        >
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.4) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.4) 75%)",
              backgroundSize: "60px 60px",
              animationName: "moveStripes",
              animationDuration: "3s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              transform: "skew(10deg)"
            }}
          />
          <div className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.8) 0%, transparent 60%)",
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-12">
            <div className="w-1/2 px-8">
              <span className="text-red-600 font-bold text-xl tracking-widest uppercase text-center block mb-4">
                Explore The Features
              </span>
              <h2 className="text-[#8e82d1] font-black leading-none mt-4 uppercase tracking-tight text-center">
                <span className="block text-[80px] mt-2">VARIOUS</span>
                <span className="block text-[80px] mt-2">MEMBERSHIP</span>
              </h2>
              <p className="text-gray-300 text-xl mt-8 max-w-2xl leading-relaxed font-light text-center mx-auto">
                Unlock a world of exclusive features with our premium membership.
                From priority access to special events, custom content creation,
                and dedicated support - experience the difference today.
              </p>
              <div className="flex gap-8 mt-12 justify-center">
                <button 
                  onClick={() => handleCopy(setShowCopied1)}
                  className="relative bg-[#1a237e] text-white px-12 py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-bold text-lg transform hover:scale-105"
                >
                  PLAY NOW
                  {showCopied1 && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                      IP Copied!
                    </div>
                  )}
                </button>
                <button 
                  onClick={() => navigate('/credits')}
                  className="bg-red-600 text-white px-12 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-bold text-lg transform hover:scale-105"
                >
                  VISIT STORE
                </button>
              </div>
            </div>
            <div className="w-1/2 relative flex translate-x-48">
              <img 
                src={beeImage}
                alt="Premium Features" 
                className="w-[85%] h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-950 py-24 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[500px] w-[45%] bg-blue-600 overflow-hidden"
          style={{
            borderTopRightRadius: "70px",
            borderBottomRightRadius: "70px",
            transform: "skew(10deg) translateY(-50%)",
          }}
        >
          <div className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.4) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.4) 75%)",
              backgroundSize: "60px 60px",
              animation: "moveStripes 3s linear infinite",
            }}
          />
          <div className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(66, 135, 245, 0.8) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="max-w-8xl mx-auto px-12">
          <div className="flex items-center gap-12">
            <div className="w-1/2 relative flex">
              <img 
                src={dolphinImage}
                alt="Features" 
                className="w-[100%] h-auto relative z-10"
              />
            </div>
            <div className="w-1/2 px-8">
              <span className="text-blue-600 font-bold text-xl tracking-widest uppercase text-center block mb-4">
                Discover More
              </span>
              <h2 className="text-[#8e82d1] font-black leading-none mt-4 uppercase tracking-tight text-center">
                <span className="block text-[80px] mt-2">ENDLESS</span>
                <span className="block text-[80px] mt-2">FEATURES</span>
              </h2>
              <p className="text-gray-300 text-xl mt-8 max-w-2xl leading-relaxed font-light text-center mx-auto">
                Get access to an extensive collection of features.
                Create unique experiences, join special events,
                and enjoy premium content designed just for you.
              </p>
              <div className="flex gap-8 mt-12 justify-center">
                <button 
                  onClick={() => handleCopy(setShowCopied2)}
                  className="relative bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-bold text-lg transform hover:scale-105"
                >
                  GET STARTED
                  {showCopied2 && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                      IP Copied!
                    </div>
                  )}
                </button>
                <button 
                  onClick={scrollToNews}
                  className="bg-[#232033] text-white px-12 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-bold text-lg transform hover:scale-105"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveStripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default Titles;