import React, { useState } from 'react';
import winter from '../images/winter.png'

const NewsCard = ({ image, title, author, date, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative transform transition-all hover:-translate-y-2 duration-300"
  >
    {/* Background Layers */}
    <div className="absolute inset-0 bg-white from-blue-600 to-blue-800 rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 transition-transform duration-300" />
    <div className="absolute inset-0 bg-white from-blue-500 to-blue-700 rounded-2xl transform -rotate-1 opacity-20 group-hover:-rotate-2 transition-transform duration-300" />
    
    {/* Main Card */}
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl group-hover:scale-150 transition-transform duration-500" />
      </div>

      <div className="p-8 relative">
        <div className="flex items-center gap-3 text-blue-600 mb-4">
          <span className="font-medium">{author}</span>
          <span className="text-blue-300">•</span>
          <span className="text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <button className="flex items-center gap-2 text-blue-600 font-semibold group/button">
          Read More
          <svg className="w-5 h-5 group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const NewsModal = ({ news, onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
      <img src={news.image} alt={news.title} className="w-full h-80 object-cover" />
      <div className="absolute top-0 right-0 left-0 h-80 bg-gradient-to-t from-white via-white/50 to-transparent" />
      
      <div className="relative -mt-20 p-8 pt-0">
        <div className="flex items-center gap-3 text-blue-600 mb-4">
          <span className="font-medium">{news.author}</span>
          <span className="text-blue-300">•</span>
          <span className="text-gray-500">{news.date}</span>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{news.title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{news.description}</p>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const News = () => {
    const [selectedNews, setSelectedNews] = useState(null);
  
    const newsData = [
      {
        image: winter,
        title: "Special Announcements Coming Soon!",
        author: "CubiStone Team",
        date: "1 March 2024",
        description: "We're thrilled to announce that something extraordinary is on the horizon! Our team has been working tirelessly behind the scenes to bring you an amazing update that will transform your gaming experience. Stay tuned for more details about exciting new features, special events, and unique rewards that await our community. This update represents our biggest step forward yet, and we can't wait to share it with all of you. Get ready for an adventure like never before!"
      }
    ];
  
    return (
      <section className="bg-gray-950 py-48 relative overflow-hidden">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Header Section */}
          <div className="relative text-center mb-20">
            {/* Glowing Orbs */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-60" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-300 rounded-full blur-2xl opacity-50" />
            
            <div className="relative z-10">
              <span className="inline-block px-6 py-2 bg-blue-600 rounded-full text-white font-semibold text-lg mb-8 shadow-lg transform transition-transform hover:scale-105">
                Stay Informed
              </span>
              
              <div className="relative mb-8">
                <h2 className="text-[120px] font-black text-gray-600 leading-none select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  NEWS
                </h2>
                <h2 className="relative text-5xl font-bold text-gray-200">
                  Latest <span className="text-blue-400">Updates</span>
                </h2>
              </div>
              
              <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
                Keep up with our latest announcements and discover what's new in our world
              </p>
            </div>
            
            {/* Bottom Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>
  
          {/* News Card Container */}
          <div className="max-w-2xl mx-auto relative">
            {newsData.map((news, index) => (
              <NewsCard
                key={index}
                {...news}
                onClick={() => setSelectedNews(news)}
              />
            ))}
  
            {/* Bottom Glowing Line */}
            <div className="relative mt-20">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-full h-10 bg-blue-500/20 blur-2xl opacity-60" />
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
          </div>
        </div>
  
        {selectedNews && (
          <NewsModal
            news={selectedNews}
            onClose={() => setSelectedNews(null)}
          />
        )}
      </section>
    );
  };
  
  export default News;