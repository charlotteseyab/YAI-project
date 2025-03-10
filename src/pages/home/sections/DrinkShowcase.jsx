import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import drinkImage1 from "../../../assets/images/drink2.jpg";
import drinkImage2 from "../../../assets/images/drink1.jpg";
import drinkImage3 from "../../../assets/images/drink3.jpg";

const DrinkShowcase = () => {
  const [showHealthBenefits, setShowHealthBenefits] = useState(false);
  const [showCulturalSignificance, setShowCulturalSignificance] =
    useState(false);

  // Vertical Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: true, // Enable vertical scrolling
    verticalSwiping: true, // Allow vertical swiping
    arrows: false, // Hide arrows for a cleaner look
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false, // Switch to horizontal on smaller screens
          verticalSwiping: false,
        },
      },
    ],
  };

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
    <section id="drink" className="bg-white bg-opacity-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-8 font-serif">
          Our Signature Drinks
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Vertical Image Carousel */}
          <div className="w-full lg:w-1/2">
            <Slider {...settings}>
              {[drinkImage1, drinkImage2, drinkImage3].map((image, index) => (
                <div key={index} className="px-2">
                  <img
                    src={image}
                    alt={`Drink ${index + 1}`}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-112 object-cover rounded-xl shadow-lg mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Drink Information */}
          <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 shadow-lg rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-serif text-red-600 mb-4">
              {drink.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              A chilled bottle of our delicious and healthy Sobolo is just what
              you need! Made with dried hibiscus petals, ginger, and a fruity
              twist for an unforgettable taste.
            </p>
            <p className="text-xl font-serif font-bold text-gray-800 mb-6">
              Price:{" "}
              <span className="text-red-500">GHS {drink.price.toFixed(2)}</span>
            </p>
            <Link
              to="https://paystack.shop/brown-and-brown-food"
              target="_blank"
              className="inline-block bg-yellow-400 text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300 shadow-md"
            >
              Buy Now
            </Link>

            {/* Expandable Buttons for Additional Information */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              {/* Health Benefits Button */}
              <button
                onClick={() => setShowHealthBenefits(!showHealthBenefits)}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 text-sm sm:text-base"
              >
                {showHealthBenefits
                  ? "Hide Health Benefits"
                  : "Health Benefits"}
              </button>

              {/* Cultural Significance Button */}
              <button
                onClick={() =>
                  setShowCulturalSignificance(!showCulturalSignificance)
                }
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 text-sm sm:text-base"
              >
                {showCulturalSignificance
                  ? "Hide Cultural Significance"
                  : "Cultural Significance"}
              </button>
            </div>

            {/* Health Benefits Content */}
            {showHealthBenefits && (
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  Health Benefits
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {healthBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cultural Significance Content */}
            {showCulturalSignificance && (
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  Cultural Significance
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {culturalSignificance.map((significance, index) => (
                    <li key={index}>{significance}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkShowcase;
