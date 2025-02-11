import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to RMCC  Restaurant
          </h1>
          <p className="text-xl text-white mb-8">
            Experience authentic Indian cuisine in a warm, welcoming atmosphere
          </p>
          <a
            href="#menu"
            className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300"
          >
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;