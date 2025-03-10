import React, { useState } from "react";

// Product Section
export const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "TomBrown",
      description:
        "A traditional Ghanaian cereal made from roasted corn and groundnuts, TomBrown is rich in flavor and nutrients. It's a wholesome option for children, providing energy and essential vitamins to kickstart their day.",
    },
    {
      id: 2,
      name: "Wheat Cereal",
      description:
        "Made from whole wheat grains, offering a hearty and nutritious breakfast choice. Packed with fiber and protein, it helps keep you full longer and supports digestive health, making it ideal for students and busy professionals.",
    },
    {
      id: 3,
      name: "Eko-egbeemi",
      description:
        "A unique blend of corn and millet, Eko-egbeemi is a nutritious cereal that provides a good source of energy. Its slightly sweet flavor and smooth texture make it a favorite among workers looking for a quick and healthy breakfast option.",
    },
    {
      id: 4,
      name: "Oblayo",
      description:
        "A delicious and nutritious cereal made from a mix of grains, including oats and barley, Oblayo is designed for the whole family. It's high in fiber and low in sugar, making it a perfect choice for a balanced breakfast that supports overall health.",
    },
  ];

  return (
    <div id="products" className=" py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-600 mb-8 font-serif">
          Cereal Products
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          At Brown & Brown Foods, we produce a variety of healthy and nutritious
          breakfast cereals:
        </p>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-between mt-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-1 mx-2 bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 mb-4 w-full md:w-1/2 lg:w-1/3"
            >
              <h3 className="text-xl font-bold text-red-600 mb-2">
                {product.name}
              </h3>
              <button
                onClick={() => setSelectedProduct(product)}
                className="bg-red-600 text-white py-2 px-4 rounded-lg mb-2 hover:bg-red-700 transition duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Connecting Line */}
        <div className="w-full h-1 bg-red-600 mt-4"></div>

        {/* Pop-Up Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-700 mb-6">
                {selectedProduct.description}
              </p>
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
