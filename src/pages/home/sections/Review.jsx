import React, { useState } from "react";
import { FaStar, FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    name: "Emily Johnson",
    review: "Amazing experience! The team was incredibly professional and delivered beyond expectations.",
    rating: 5,
    role: "Regular Customer",
    initial: "EJ"
  },
  {
    name: "Michael Smith",
    review: "Highly recommend! They are skilled, friendly, and dedicated to their work.",
    rating: 4,
    role: "Food Enthusiast",
    initial: "MS"
  },
  {
    name: "Sophia Lee",
    review: "Great breakfast cereals, healthy and delicious",
    rating: 5,
    role: "Health Coach",
    initial: "SL"
  },
  {
    name: "Charlotte Seyab",
    review: "The service was outstanding. I will definitely buy with them again!",
    rating: 5,
    role: "Business Owner",
    initial: "CS"
  },
];

export const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="review" className="bg-gray-50 py-10 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-6">
            What Our Clients
            <span className="relative mx-4">
              <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Love
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DC2626"/>
                    <stop offset="100%" stopColor="#EAB308"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            About Us
          </h2>
        </div>

        {/* Reviews Display */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Review Card */}
            <div className={`relative bg-gradient-to-br from-red-50 to-yellow-50 rounded-3xl p-8 md:p-12
                           transform transition-all duration-500 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200 to-yellow-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-red-200 rounded-full blur-3xl opacity-50 -z-10"></div>

              <div className="relative grid md:grid-cols-[1fr,2fr] gap-8 items-center">
                {/* Reviewer Profile */}
                <div className="text-center md:text-left">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center transform rotate-3">
                      <span className="text-3xl font-bold text-white">
                        {reviews[currentIndex].initial}
                      </span>
                    </div>
                    <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <FaQuoteRight className="text-red-500 text-sm" />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {reviews[currentIndex].name}
                    </h3>
                    <p className="text-red-500 text-sm mt-1">
                      {reviews[currentIndex].role}
                    </p>
                    <div className="flex justify-center md:justify-start gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg transition-all duration-300 ${
                            i < reviews[currentIndex].rating
                              ? 'text-yellow-400'
                              : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="relative">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    "{reviews[currentIndex].review}"
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={() => handleNavigation('prev')}
                className="group flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm font-medium">Previous</span>
              </button>

              {/* Progress Indicators */}
              <div className="flex gap-3">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-8 bg-red-500'
                        : 'w-2 bg-gray-200 hover:bg-red-200'
                    } h-2 rounded-full`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleNavigation('next')}
                className="group flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <span className="text-sm font-medium">Next</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
