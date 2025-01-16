import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import beeImage from '../images/tt.png';
import dolphinImage from '../images/rr.png';

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

  return (
    <div id="titles">
      {/* First Section */}
      <div className="bg-gray-950 py-6 md:py-1 relative overflow-hidden">
        <div
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-[300px] md:h-[500px] w-[45%] bg-yellow-300 overflow-hidden"
          style={{
            borderTopLeftRadius: '70px',
            borderBottomLeftRadius: '70px',
            transform: 'skew(-10deg) translateY(-50%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.4) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.4) 75%)',
              backgroundSize: '60px 60px',
              animationName: 'moveStripes',
              animationDuration: '3s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              transform: 'skew(10deg)',
            }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.8) 0%, transparent 60%)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 px-4 md:px-8">
              <span className="text-red-600 font-bold text-lg md:text-xl tracking-widest uppercase text-center block mb-4">
                Explore The Features
              </span>
              <h2 className="text-[#8e82d1] font-black leading-none mt-4 uppercase tracking-tight text-center">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] mt-2">
                  PREMIUM MEMBERSHIP
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] mt-2">
                  FEATURES
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-xl mt-6 md:mt-8 max-w-2xl leading-relaxed font-light text-center mx-auto">
                Unlock a world of exclusive features with our premium
                membership. Enjoy priority access to special events, custom
                content creation, and dedicated support – all designed to give
                you an elevated experience. Join today and see the difference
                for yourself!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 md:mt-12 justify-center">
                <button
                  onClick={() => handleCopy(setShowCopied1)}
                  className="relative bg-[#1a237e] text-white px-8 md:px-12 py-3 md:py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 font-bold text-base md:text-lg transform hover:scale-105 w-full sm:w-auto"
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
                  className="bg-red-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-bold text-base md:text-lg transform hover:scale-105 w-full sm:w-auto"
                >
                  VISIT STORE
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative flex justify-center md:translate-x-24 lg:translate-x-0 mt-8 md:mt-0">
              <img
                src={beeImage}
                alt="Premium Features"
                className="w-[40%] md:w-[45%] h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-950 py-6 md:py-12 relative overflow-hidden">
        <div
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 h-[300px] md:h-[500px] w-[45%] bg-blue-600 overflow-hidden"
          style={{
            borderTopRightRadius: '70px',
            borderBottomRightRadius: '70px',
            transform: 'skew(10deg) translateY(-50%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.4) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.4) 75%)',
              backgroundSize: '60px 60px',
              animation: 'moveStripes 3s linear infinite',
            }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(66, 135, 245, 0.8) 0%, transparent 60%)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-64">
            <div className="w-full md:w-1/2 relative flex justify-center mt-16 md:mt-0">
              <img
                src={dolphinImage}
                alt="Features"
                className="md:w-[420px] h-auto relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-8">
              <span className="text-blue-600 font-bold text-lg md:text-xl tracking-widest uppercase text-center block mb-4">
                Discover More
              </span>
              <h2 className="text-[#8e82d1] font-black leading-none mt-4 uppercase tracking-tight text-center">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] mt-2">
                  ENDLESS
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] mt-2">
                  FEATURES
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-xl mt-6 md:mt-8 max-w-2xl leading-relaxed font-light text-center mx-auto">
                Elevate your Skyblock experience with new features and
                enhancements. Explore custom islands, unique challenges, faster
                resource gathering, and more exciting events. Join our
                community and immerse yourself in an adventure like never
                before!
              </p>
              <div className="flex justify-center mt-8 md:mt-12">
                <button
                  onClick={() => handleCopy(setShowCopied2)}
                  className="relative bg-blue-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-bold text-base md:text-lg transform hover:scale-105 w-full sm:w-auto"
                >
                  GET STARTED
                  {showCopied2 && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                      IP Copied!
                    </div>
                  )}
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