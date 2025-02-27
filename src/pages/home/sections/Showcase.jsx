import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/bbbbbbbb.jpg"

export const Showcase = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const products = [
      {
        id: 1,
        name: "TomBrown",
        image: img1, // Replace with actual image URL
        // description: "Fun and tasty cereal for children.",
      },
      {
        id: 2,
        name: "Wheat Cereal",
        image: img1, // Replace with actual image URL
        // description: "Energy-packed cereal for students.",
      },
      {
        id: 3,
        name: "Eko-egbeemi",
        image: img1, // Replace with actual image URL
        // description: "Quick and healthy cereal for professionals.",
      },
      {
        id: 4,
        name: "Oblayo",
        image: img1, // Replace with actual image URL
        // description: "Quick and healthy cereal for professionals.",
      },
    ];
  
    return (
      <div id="showcase" className="bg-yellow-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            Product Showcase
          </h2>
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-700">{product.description}</p>
                  <Link
                    to="/order#top"
                    className="bg-yellow-300 text-red-600 px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition duration-300 mt-4 inline-block"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  

export default Showcase