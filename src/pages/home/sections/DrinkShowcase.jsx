import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import drinkImage1 from "../../../assets/images/drink2.jpg";
import drinkImage2 from "../../../assets/images/drink1.jpg";
import drinkImage3 from "../../../assets/images/drink3.jpg";

const DrinkShowcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
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
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2
          className="text-4xl font-bold text-center text-red-600 mb-8 font-serif"
          data-aos="fade-up"
        >
          Our Signature Drinks
        </h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Slider */}
          <div className="md:w-1/3" data-aos="fade-right">
            <Slider {...settings}>
              {[drinkImage1, drinkImage2, drinkImage3].map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image}
                    alt={`Drink ${index + 1}`}
                    className="w-96 h-96 max-w-xs md:max-w-md lg:max-w-lg object-cover rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Drink Information */}
          <div
            className="md:w-1/2 bg-white p-8 shadow-lg rounded-xl"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-serif text-red-600 mb-4">
              {drink.name}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
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
              className="inline-block bg-yellow-400 text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300 shadow-md"
            >
              Buy Now
            </Link>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Description */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-red-600 mb-3 font-serif">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">{drink.description}</p>
          </div>

          {/* Health Benefits */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 font-serif"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-red-600 mb-3">
              Health Benefits
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {healthBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Cultural Significance */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 font-serif"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-red-600 mb-3">
              Cultural Significance
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {culturalSignificance.map((significance, index) => (
                <li key={index}>{significance}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkShowcase;
