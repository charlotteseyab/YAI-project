import React from 'react'

//Hero section
export const Hero = () => {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-90 bg-gradient-to-r from-red-700/30 to-yellow-600/30 backdrop-filter backdrop-blur-lg"></div>
        {/* Content */}
        <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left Column (Text) */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <span className="block text-yellow-400">Welcome </span>
              <span className="block text-red-600">to</span>
              <span className="block text-white"> Brown & Brown Foods</span>
            </h1>
            <p
              className="text-lg mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Healthy, delicious, and convenient breakfast cereals
            </p>
            <a
              href="/order"
              className="bg-yellow-400 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
            >
              ORDER NOW
            </a>
          </div>
  
          {/* Right Column (Image or Decorative Element) */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            {/* <img
              src="https://via.placeholder.com/500x500" // Replace with your image URL
              alt="Delicious Foods"
              className="rounded-lg shadow-2xl"
            /> */}
          </div>
        </div>
        {/* Wavy Line Separator */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          height="100"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 600,0 900,0 C1200,0 1440,100 1440,100 L0,100 Z"
            fill="white" // Change this to match your background color
          />
        </svg>
      </div>
    );
  };

  export default Hero