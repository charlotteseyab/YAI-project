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
    <div id="products" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Our Premium Cereals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Brown & Brown Foods, we produce a variety of healthy and nutritious
            breakfast cereals that blend tradition with modern nutrition:
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Divider */}
        {/* <div className="mt-16 flex justify-center">
          <div className="h-px w-24 bg-gray-200"></div>
        </div> */}

          {/* Decorative Elements */}
          <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-1 w-64 bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
          <div className="h-2 w-2 rounded-full bg-red-600"></div>
          <div className="h-1 w-64 bg-gradient-to-l from-yellow-500 to-transparent rounded-full"></div>
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
              {/* Modal Header */}
              <div className="bg-gray-900 p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">
                    {selectedProduct.name}
                  </h3>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
