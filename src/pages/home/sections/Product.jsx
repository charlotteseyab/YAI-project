import React from 'react'

//product section
export const Product = () => {
  return (
    <div id="products" className="bg-white py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-600 mb-8 font-serif">Our Products</h2>
        <p className="text-gray-700 text-lg">
          At Brown & Brown Foods, we produce a variety of healthy and nutritious
          breakfast cereals:
        </p>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-between mt-8">
          {[
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
          ].map((product) => (
            <div
              key={product.id}
              className="flex-1 mx-2 bg-white rounded-lg shadow-2xl p-6 transition-transform transform hover:scale-105 mb-4 w-full md:w-1/2 lg:w-1/3"
            >
              <h3 className="text-xl font-bold text-red-600 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>

        {/* Connecting Line */}
        <div className="w-full h-1 bg-red-600 mt-4"></div>
      </div>
    </div>
    
  );
};

export default Product