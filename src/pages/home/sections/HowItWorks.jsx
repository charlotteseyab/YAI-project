import React from "react";
import { FaShoppingCart, FaTruck, FaUtensils, FaSearch } from "react-icons/fa"; // Import icons
import backgroundImage from "../../../assets/images/your-background-image.jpg"; // Replace with your background image path

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="relative py-20 px-4 md:px-10"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "cover", // Cover the entire section
        backgroundPosition: "center", // Center the image
        backgroundAttachment: "fixed", // Fixed background
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          How It Works
        </h2>
        <p className="text-lg text-white mb-6 text-center">
          A simple and easy way to enjoy our delicious breakfast cereals!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FaSearch className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <p className="text-gray-700">Browse & Select Your Cereal</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FaShoppingCart className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <p className="text-gray-700">Add to Cart & Checkout</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FaTruck className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <p className="text-gray-700">Get Fast Delivery 🚀</p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FaUtensils className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Step 4</h3>
            <p className="text-gray-700">Enjoy Your Healthy Breakfast!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
