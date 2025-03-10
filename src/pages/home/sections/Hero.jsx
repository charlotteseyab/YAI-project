import React from "react";
import bgImage from "../../../assets/images/eko.webp";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-fixed transform scale-105"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-[4px]" />

      {/* Content Container */}
      <div className="relative container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center">
        {/* Left Column (Text Content) */}
        <div className="w-full lg:w-1/2 text-white space-y-8">
          {/* Brand Tag */}
          <div className="inline-block bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20">
            <span className="text-yellow-400 font-medium">
              Premium Breakfast Cereals
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold font-serif">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Welcome to
              </span>
              <span className="block mt-2 text-white leading-tight">
                Brown & Brown Foods
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
            Experience the perfect blend of health and taste with our premium breakfast cereals. 
            {/* Start your day right with our nutritious and delicious offerings. */}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://paystack.shop/brown-and-brown-food"
              target="_blank"
              className="inline-flex items-center px-8 py-3 bg-yellow-400 text-red-600 rounded-full font-semibold 
                hover:bg-yellow-300 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg 
                hover:shadow-yellow-400/50 group"
            >
              Order Now
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#products"
              className="inline-flex items-center px-8 py-3 border-2 border-white/20 text-white rounded-full
                hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Products
            </a>
          </div>

          {/* Features/Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2 mt-8 border-t border-white/10">
            <div>
              <div className="text-yellow-400 text-1xl font-bold">100%</div>
              <div className="text-gray-400">Natural</div>
            </div>
            <div>
              <div className="text-yellow-400 text-1xl font-bold">Premium</div>
              <div className="text-gray-400">Quality</div>
            </div>
            <div>
              <div className="text-yellow-400 text-1xl font-bold">Local</div>
              <div className="text-gray-400">Production</div>
            </div>
          </div>
        </div>

        {/* Right Column (can be used for image/animation later) */}
        <div className="w-full lg:w-1/2 hidden lg:block">
          {/* You can add a product image or animation here */}
        </div>
      </div>

      {/* Original Wavy Line Separator */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        height="100"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,100 600,0 900,0 C1200,0 1440,100 1440,100 L0,100 Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Hero;