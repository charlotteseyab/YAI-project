import React from "react";
//Hero section
export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-10 md:py-20">
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90 bg-gradient-to-r from-red-700/30 to-yellow-600/30 backdrop-filter backdrop-blur-lg"></div>
      {/* Content */}
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white">
        {/* Left Column (Text) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="block text-yellow-400 font-serif">Welcome </span>
            <span className="block text-red-600 font-serif">to</span>
            <span className="block text-white font-serif">
              {" "}
              Brown & Brown Foods
            </span>
          </h1>
          <p
            className="text-lg mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Healthy, delicious, and convenient breakfast cereals
          </p>
          <a
            href="/order"
            className="bg-yellow-400 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
          >
            ORDER NOW
          </a>
        </div>

        {/* Right Column (Illustration) */}
        {/* <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={breakfastIllustration}
            alt="Delicious Breakfast Illustration"
            className="rounded-lg shadow-2xl"
          />
        </div> */}
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

export default Hero;
