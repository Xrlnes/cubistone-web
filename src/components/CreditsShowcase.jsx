import React from 'react';
import { ShoppingCart, Sparkles, Crown, Star, Zap, Shield, Gem, Diamond } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import kredi1 from '../images/kredi1.png';
import kredi2 from '../images/kredi2.png';
import kredi3 from '../images/kredi3.png';
import kredi4 from '../images/kredi4.png';
import kredi5 from '../images/kredi5.png';
import kredi6 from '../images/kredi6.png';

const StoreShowcase = () => {
  const navigate = useNavigate();
  const packages = [
    { coins: 250, price: 4.79, icon: Shield, image: kredi1, color: 'from-blue-500 to-purple-500', tag: 'Starter Pack' },
    { coins: 550, price: 9.58, icon: Star, image: kredi2, color: 'from-green-500 to-teal-500', tag: 'Basic Pack' },
    { coins: 1210, price: 19.16, icon: Zap, image: kredi2, color: 'from-yellow-500 to-orange-500', tag: 'Plus Pack' },
    { coins: 2662, price: 38.32, icon: Gem, image: kredi3, color: 'from-pink-500 to-rose-500', tag: 'Premium Pack' },
    { coins: 5856, price: 76.64, icon: Crown, image: kredi4, color: 'from-indigo-500 to-blue-500', tag: 'Pro Pack' },
    { coins: 12884, price: 153.28, icon: Diamond, image: kredi5, color: 'from-purple-500 to-pink-500', tag: 'Elite Pack' },
    { coins: 28345, price: 306.56, icon: Sparkles, image: kredi6, color: 'from-red-500 to-orange-500', tag: 'Ultimate Pack' }
  ];

  const handleStoreClick = () => {
    navigate('/credits');
  };

  const MiniPackageCard = ({ pack }) => {
    const Icon = pack.icon;
    return (
      <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg group hover:bg-gray-800 transition-all duration-300 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${pack.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 transform -skew-y-12" />
        <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r ${pack.color} transform translate-x-full group-hover:translate-x-0 transition-transform duration-300`}>
          {pack.tag}
        </div>
        
        <div className="text-center relative z-10">
          <img 
            src={pack.image}
            alt={`${pack.coins} Cubistone Golds`}
            className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 md:mb-4 object-contain opacity-75 group-hover:opacity-100 transform group-hover:scale-110 transition-all"
          />
          <h3 className="text-sm md:text-lg font-bold mb-1 text-white">{pack.coins.toLocaleString()} CUBISTONE GOLDS</h3>
          <p className="text-gray-400 text-xs md:text-base">${pack.price}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-950 py-24 md:py-60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-b from-transparent to-gray-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-4 relative">
          <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 bg-blue-500/20 rounded-full blur-2xl md:blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          
          <span className="relative inline-block">
            <span className="text-blue-500 font-semibold tracking-wider relative z-10 text-sm md:text-base">CUBISTONE GOLD PACKAGES</span>
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 md:mt-4 leading-tight relative">
            <span className="relative inline-block">
              Cubistone Golds
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10" />
            </span>
          </h2>
          
          <p className="text-gray-400 mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Unlock premium features and enhance your experience with our Cubistone Gold packages
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-xl md:blur-2xl animate-pulse" />
          
          <div className="bg-black/90 backdrop-blur-xl border border-gray-800/50 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>

            <div className="relative p-4 md:p-8">
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {packages.slice(0, 4).map((pack, index) => (
                    <MiniPackageCard key={index} pack={pack} />
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {packages.slice(4).map((pack, index) => (
                    <MiniPackageCard key={index + 4} pack={pack} />
                  ))}
                </div>
              </div>

              <div className="mt-8 md:mt-16 text-center space-y-4 md:space-y-8 relative">
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Why Choose Our Store?</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    Experience seamless transactions, instant delivery, and premium support. Our store offers competitive prices for our valued customers.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
                  <div className="p-4">
                    <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mx-auto mb-1 md:mb-2" />
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1">Instant Delivery</h4>
                    <p className="text-xs md:text-sm text-gray-400">Cubistone Golds are added to your account immediately after purchase</p>
                  </div>
                  <div className="p-4">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mx-auto mb-1 md:mb-2" />
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1">Secure Payments</h4>
                    <p className="text-xs md:text-sm text-gray-400">Your transactions are protected by industry-leading security</p>
                  </div>
                  <div className="p-4">
                    <Star className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mx-auto mb-1 md:mb-2" />
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1">24/7 Support</h4>
                    <p className="text-xs md:text-sm text-gray-400">Our dedicated team is here to help you anytime</p>
                  </div>
                </div>

                <button 
                  onClick={handleStoreClick}
                  className="group relative overflow-hidden mt-4 md:mt-8"
                >
                  <div className="relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Visit Full Store
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-all duration-300" />
                    <div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[500%] transition-all duration-1000" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-30 group-hover:opacity-50 blur transition-all duration-300 -z-10" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 group-hover:opacity-40 blur-lg transition-all duration-300 -z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default StoreShowcase;