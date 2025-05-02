import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/hero-bg.jpeg')",
        backgroundSize: '100% 100%'
      }}
    >
      <div className="absolute inset-0 bg-black/50 "></div>
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Welcome to The Digital Diner
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn animation-delay-200">
          Delicious meals delivered to your doorstep with just a few clicks
        </p>
        <div className="animate-fadeIn animation-delay-400">
          <a 
            href="#menu" 
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;