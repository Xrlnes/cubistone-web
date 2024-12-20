import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Instagram, Copy, ChevronsUp, CheckCircle2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import logo from '../images/bee.png';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyIP = () => {
    navigator.clipboard.writeText('play.cubistone.com');
    setCopied(true);
    toast.success('Server IP copied!', {
      icon: '✨',
      style: {
        background: '#1f2937',
        color: '#fff',
        border: '1px solid #374151'
      }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative mt-0 bg-gray-950">
      {/* Smooth Transition Layer */}
      <div className="absolute inset-x-0 -top-48 h-48 bg-gradient-to-b from-transparent via-gray-950/95 to-gray-950" />

      {/* Wavy Transition */}
      <div className="absolute inset-x-0 -top-24">
        <svg className="w-full h-24" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0,0 C320,80 420,0 640,40 C870,80 980,0 1440,60 L1440,100 L0,100 Z" 
            className="fill-gray-950"
          />
          <path 
            d="M0,20 C320,100 420,20 640,60 C870,100 980,20 1440,80 L1440,100 L0,100 Z" 
            className="fill-gray-950/50"
          />
          <path 
            d="M0,40 C320,120 420,40 640,80 C870,120 980,40 1440,100 L1440,100 L0,100 Z" 
            className="fill-gray-950/30"
          />
        </svg>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        <div className="absolute w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>

        {/* Static Gradient Background */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-gray-950/80 to-transparent" />
        
        {/* Static Glows */}
        <div className="absolute -top-40 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute -top-40 right-0 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-5 space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-xl blur-[2px] group-hover:blur-[3px] transition-all duration-300"></div>
                <img src={logo} alt="Logo" className="relative w-full h-full object-cover rounded-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  CubiStone
                </h3>
                <p className="text-gray-400">play.cubistone.com</p>
              </div>
            </div>
            
            <button
              onClick={copyIP}
              className="relative group px-6 py-3 w-full md:w-auto bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300"
            >
              <div className="relative flex items-center justify-center gap-3 text-gray-300 group-hover:text-white">
                {copied ? (
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>Copy Server IP</span>
              </div>
            </button>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/credits" 
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></span>
                  Store
                </Link>
              </li>
              <li>
                <Link 
                  to="/wiki" 
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                >
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              Social Media
            </h3>
            <div className="flex gap-4">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Discord
                </span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Instagram
                </span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
              >
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  YouTube
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800/50">
          <p className="text-gray-400 text-sm">
            © 2024 CubiStone Network. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Developed by <span className="text-blue-400">CUBISTONE TEAM</span>
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 p-3 bg-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:bg-gray-800 transition-all duration-300 group"
        >
          <ChevronsUp className="w-5 h-5 text-gray-400 group-hover:text-white" />
        </button>
      </div>

      {/* Static Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </footer>
  );
};

export default Footer;