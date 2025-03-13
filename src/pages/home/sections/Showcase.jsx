import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/bbbbbbbb.jpg";
import img2 from "../../../assets/images/tombrown.jpg";
import img3 from "../../../assets/images/eko.webp";
import img4 from "../../../assets/images/oblayo.webp";

export const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      id: 1,
      name: "TomBrown",
      prices: { small: 20.0, large: 28.0 },
      image: img2,
    },
    {
      id: 2,
      name: "Wheat Cereal",
      prices: { small: 20.0, large: 28.0 },
      image: img1,
    },
    {
      id: 3,
      name: "Eko-egbeemi",
      prices: { small: 20.0, large: 28.0 },
      image: img3,
    },
    {
      id: 4,
      name: "Oblayo",
      prices: { small: 25.0, large: 35.0 },
      image: img4,
    },
  ];

  // Auto-rotation effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % products.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  // Calculate positions for orbital elements
  const getOrbitalPosition = (index, totalItems) => {
    const angle = (index * 2 * Math.PI) / totalItems - Math.PI / 2;
    const radius = 180; // Reduced radius for left-side orbit
    return {
      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
      transform: `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI}deg)`,
    };
  };

  return (
    <div id="showcase" className="bg-gradient-to-b from-yellow-100 to-yellow-100/50 py-14">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold font-serif mb-4">
            <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between max-w-7xl mx-auto">
          {/* Orbital Section - Left Side */}
          <div className="relative w-full lg:w-[500px] h-[500px]">
            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 blur-lg opacity-50"></div>

            {/* Orbital Path */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border-2 border-dashed border-yellow-300/50"></div>

            {/* Products in Orbit */}
            {products.map((product, index) => {
              const position = getOrbitalPosition(
                (index - activeIndex) % products.length,
                products.length
              );

              return (
                <div
                  key={product.id}
                  style={position}
                  className="absolute transition-all duration-1000 ease-in-out"
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                >
                  <div className={`transform transition-all duration-500 
                    ${index === activeIndex ? 'scale-150 z-20' : 'scale-100 z-10'}`}
                  >
                    <div className="relative w-24 h-24 rounded-full overflow-hidden 
                      shadow-xl cursor-pointer transform transition-transform 
                      hover:scale-110 border-4 border-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Dots */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${index === activeIndex 
                      ? 'w-8 bg-red-600' 
                      : 'bg-yellow-300 hover:bg-yellow-400'}`}
                />
              ))}
            </div>
          </div>

          {/* Product Card - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative group rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
              {/* Background decorative elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-100 to-yellow-100 rounded-2xl -z-10 transform rotate-2"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Image container */}
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={products[activeIndex].image}
                    alt={products[activeIndex].name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                        {products[activeIndex].name}
                      </h3>
                      
                      {/* Pricing cards */}
                      <div className="space-y-3 mb-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-yellow-300 font-medium">Small Size</span>
                            <span className="text-white font-bold">
                              GHS {products[activeIndex].prices.small.toFixed(2)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-yellow-300 font-medium">Large Size</span>
                            <span className="text-white font-bold">
                              GHS {products[activeIndex].prices.large.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Buy button */}
                      <Link
                        to="https://paystack.shop/brown-and-brown-food"
                        target="_blank"
                        className="group/btn bg-gradient-to-r from-yellow-400 to-yellow-500 
                                 text-red-700 px-6 py-3 rounded-xl font-semibold 
                                 hover:from-yellow-500 hover:to-yellow-600 transition-all 
                                 duration-300 flex items-center justify-center gap-2 shadow-lg"
                      >
                        <span>Order Now</span>
                        <svg 
                          className="w-5 h-5 transform transition-transform duration-300 
                                   group-hover/btn:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;