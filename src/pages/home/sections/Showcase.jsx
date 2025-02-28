import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/bbbbbbbb.jpg";

// Custom Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{
        ...style,
        color: "black",
        right: "10px",
        zIndex: 1,
        // background: "white",
        borderRadius: "50%",
        padding: "1px",
      }}
      onClick={onClick}
    >
      → {/* You can use an icon here if you prefer */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{
        ...style,
        color: "black",
        left: "10px",
        zIndex: 1,
        // background: "black",
        borderRadius: "50%",
        padding: "10px",
      }}
      onClick={onClick}
    >
      ← {/* You can use an icon here if you prefer */}
    </div>
  );
};

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    },
    {
      id: 2,
      name: "Wheat Cereal",
      image: img1, // Replace with actual image URL
    },
    {
      id: 3,
      name: "Eko-egbeemi",
      image: img1, // Replace with actual image URL
    },
    {
      id: 4,
      name: "Oblayo",
      image: img1, // Replace with actual image URL
    },
  ];

  return (
    <div id="showcase" className="bg-yellow-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-600 mb-8 font-serif">
          Product Showcase
        </h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-4">
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                {/* Overlay for Product Name and Buy Button */}
                <div className="absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-50 p-4">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2 font-serif">
                    {product.name}
                  </h3>
                  <Link
                    to="/order#top"
                    className="bg-yellow-300 text-red-600 px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition duration-300"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Showcase;
