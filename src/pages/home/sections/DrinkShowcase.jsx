import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import drinkImage1 from "../../../assets/images/sobolo1.webp";
import drinkImage2 from "../../../assets/images/sobolo2.webp";
import drinkImage3 from "../../../assets/images/sobolo3.webp";
import drinkImage4 from "../../../assets/images/drink3.jpg";

const DrinkShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showHealthBenefits, setShowHealthBenefits] = useState(false);
  const [showCulturalSignificance, setShowCulturalSignificance] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const images = [drinkImage1, drinkImage2, drinkImage3, drinkImage4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const drink = {
    name: "Sobolo",
    price: 20, // Price in GHS
    description:
      "Sobolo (also known as Hibiscus Tea or Bissap) is a popular West African drink made from dried hibiscus petals. It is known for its vibrant red color, refreshing taste, and numerous health benefits.",
  };

  const healthBenefits = [
    "Rich in antioxidants that help combat oxidative stress.",
    "Supports hydration and overall wellness.",
    "May help lower blood pressure and improve heart health.",
  ];

  const culturalSignificance = [
    "A traditional drink enjoyed during celebrations and gatherings.",
    "Often served at parties and special occasions.",
    "Represents a connection to Ghanaian heritage and culture.",
  ];

  return (
    <section id="drink" className="bg-gray-100 py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16 font-serif">
          Our Signature Drinks
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Orbital Carousel */}
          <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
            <div className="absolute w-[600px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-gray-200 animate-spin-slow">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-32 h-32 md:w-30 md:h-30 transition-all duration-700 ${
                    getImagePosition(index, currentImage, images.length)
                  }`}
                >
                  <img
                    src={image}
                    alt={`Drink ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={images[currentImage]}
                alt="Featured Drink"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Drink Information */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-serif text-gray-900 mb-3">
                Sobolo
                <span className="ml-2 text-lg font-sans text-gray-500">Traditional Hibiscus Drink</span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                A chilled bottle of our delicious and healthy Sobolo is just what you need! 
                Made with dried hibiscus petals, ginger, and a fruity twist for an unforgettable taste.
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-2xl font-bold text-gray-900">
                    GHS 20.00
                  </p>
                </div>
                <Link
                  to="https://paystack.shop/brown-and-brown-food"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <span>Order Now</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Info Tabs */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveTab(activeTab === 'health' ? null : 'health')}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === 'health'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Health Benefits
                  </button>
                  <button
                    onClick={() => setActiveTab(activeTab === 'cultural' ? null : 'cultural')}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === 'cultural'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Cultural Significance
                  </button>
                </div>

                {activeTab === 'health' && (
                  <div className="bg-gray-50 rounded-xl p-6 animate-fade-in">
                    <ul className="space-y-3">
                      {healthBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 mt-1 text-gray-900">•</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                  {activeTab === 'cultural' && (
                  <div className="bg-gray-50 rounded-xl p-6 animate-fade-in">
                    <ul className="space-y-3">
                      {culturalSignificance.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 mt-1 text-gray-900">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to calculate image positions
const getImagePosition = (index, current, total) => {
  const offset = ((index - current + total) % total) / total;
  const angle = offset * 2 * Math.PI;
  const x = Math.cos(angle) * 150;
  const y = Math.sin(angle) * 150;
  
  return `transform translate-x-[${x}px] translate-y-[${y}px] ${
    index === current ? 'scale-110 z-10' : 'scale-90 opacity-70'
  }`;
};

export default DrinkShowcase;