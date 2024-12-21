import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Instagram, Copy, ChevronsUp, CheckCircle2, Globe, Shield, Users } from 'lucide-react';
import { toast } from 'react-hot-toast';
import logo from '../images/logo.png';

const FloatingBubble = ({ delay, duration, size }) => (
  <div
    className="absolute rounded-full bg-gradient-to-t from-blue-500/10 via-purple-500/10 to-transparent backdrop-blur-sm"
    style={{
      width: size,
      height: size,
      bottom: '-20px',
      left: `${Math.random() * 100}%`,
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText('play.cubistone.com');
      setCopied(true);
      toast.success('Server IP copied!', {
        icon: '✨',
        style: {
          background: '#030712',
          color: '#fff',
          borderRadius: '12px',
          border: '1px solid #1e293b'
        }
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy IP:', err);
    }
  };

  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    delay: Math.random() * 8,
    duration: 15 + Math.random() * 25,
    size: 8 + Math.random() * 24
  }));

  return (
    <footer className="relative -mt-40 pt-1 bg-gray-950 overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,17,36,0.5),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Animated Floating Bubbles */}
      {bubbles.map((bubble, index) => (
        <FloatingBubble key={index} {...bubble} />
      ))}

      {/* Main Content Container */}
      <div className="relative container mx-auto px-4 lg:px-8 py-20">
        {/* Brand and CTA Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl 
                         blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <img src={logo} alt="Logo" className="relative w-48 h-48 object-cover rounded-2xl 
                                               transform group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CubiStone Network
            </h2>
            <p className="text-gray-400 text-lg">Join the adventure today!</p>
          </div>
          <button
            onClick={copyIP}
            className="relative group px-8 py-4 rounded-xl overflow-hidden backdrop-blur-sm
                     bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                     hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20
                     border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
                         -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="relative flex items-center justify-center gap-3 text-gray-300 group-hover:text-white">
              {copied ? (
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              ) : (
                <Copy className="w-6 h-6" />
              )}
              <span className="font-medium text-lg">play.cubistone.com</span>
            </div>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Globe, label: 'Active Players', value: '1000+' },
            { icon: Shield, label: 'Server Uptime', value: '99.9%' },
            { icon: Users, label: 'Community Members', value: '5000+' }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden backdrop-blur-md bg-white/[0.02] p-6 rounded-2xl
                       border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl">
                  <stat.icon className="w-6 h-6 text-white/70" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Links and Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Store', path: '/credits' },
                { name: 'Support', path: 'https://discord.gg/q376MgFRK7' }
              ].map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="group text-gray-400 hover:text-white flex items-center gap-3 
                           backdrop-blur-sm bg-white/[0.02] rounded-xl p-4 border border-white/[0.05] 
                           hover:border-white/[0.1] transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              Connect With Us
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { 
                  icon: MessageSquare, 
                  label: 'Discord', 
                  href: 'https://discord.gg/q376MgFRK7', 
                  gradient: 'from-blue-400 to-blue-600' 
                },
                { 
                  icon: Instagram, 
                  label: 'Instagram', 
                  href: 'https://instagram.com', 
                  gradient: 'from-purple-400 to-pink-600' 
                },
                { 
                  icon: () => (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                  label: 'YouTube',
                  href: 'https://youtube.com',
                  gradient: 'from-red-400 to-red-600'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative backdrop-blur-md bg-white/[0.02] p-4 rounded-xl
                           border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300
                           flex flex-col items-center gap-2"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl
                                bg-gradient-to-br ${social.gradient} blur-xl transition-opacity`} />
                  <div className="relative">
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="relative text-sm text-gray-400 group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 pt-8
                     border-t border-white/[0.05]">
          <p className="text-gray-400 text-sm">
            © 2024 CubiStone Network. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Developed by{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent 
                         font-medium">
              CUBISTONE TEAM
            </span>
          </p>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 p-3 backdrop-blur-md bg-white/[0.02] rounded-xl
                 border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.05]
                 transition-all duration-300 group z-50
                 ${showScrollButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
      >
        <ChevronsUp className="w-5 h-5 text-gray-400 group-hover:text-white 
                            transform group-hover:-translate-y-1 transition-all" />
      </button>

      {/* Enhanced Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
                   from-transparent via-purple-500/20 to-transparent" />

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateY(-40vh) scale(1.5);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-80vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;