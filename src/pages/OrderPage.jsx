import React, { useState } from "react";
import OrderImg from "../../src/assets/images/bb.jpg"; // Adjust the path as necessary

const OrderPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const publicKey = "your_paystack_public_key"; // Replace with your Paystack public key

  const products = [
    { id: 1, name: "Kids Cereal", price: 1000 }, // Price in kobo
    { id: 2, name: "Student Cereal", price: 2000 },
    { id: 3, name: "Worker Cereal", price: 3000 },
    { id: 3, name: "Worker Cereal", price: 3000 },
  ];

  const handleProductChange = (productId) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId); // Remove product if already selected
      } else {
        return [...prev, productId]; // Add product to selection
      }
    });
  };

  const handleQuantityChange = (productId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  const calculateTotalAmount = () => {
    return selectedProducts.reduce((total, productId) => {
      const product = products.find((p) => p.id === productId);
      const quantity = quantities[productId] || 0;
      return total + product.price * quantity; // Calculate total amount in kobo
    }, 0);
  };

  const initializePayment = () => {
    const paystack = new PaystackPop();
    const totalAmount = calculateTotalAmount();

    if (totalAmount > 0) {
      paystack.newTransaction({
        key: publicKey,
        email: "customer@example.com", // Replace with actual customer email
        amount: totalAmount, // Amount in kobo
        onSuccess: (transaction) => {
          alert("Payment successful!");
          // Handle successful payment (e.g., update order status)
        },
        onCancel: () => {
          alert("Payment cancelled");
        },
      });
    } else {
      alert("Please select at least one product.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${OrderImg})`, // Use the imported image
      }}
    >
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>

      <div className="relative container mx-auto p-4  bg-white bg-opacity-80 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Place Your Order
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            initializePayment();
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="mb-4 flex items-center">
              <input
                type="checkbox"
                id={`product-${product.id}`}
                value={product.id}
                onChange={() => handleProductChange(product.id)}
                className="mr-2"
              />
              <label
                htmlFor={`product-${product.id}`}
                className="flex-1 text-gray-800"
              >
                {product.name} - ${product.price / 100}{" "}
                {/* Display price in dollars */}
              </label>
              <input
                type="number"
                min="0"
                placeholder="Quantity"
                value={quantities[product.id] || ""}
                onChange={(e) =>
                  handleQuantityChange(product.id, e.target.value)
                }
                className="border rounded p-2 w-24"
              />
            </div>
          ))}
          <div className="mb-4 text-lg font-bold text-gray-800">
            Total Amount: ${calculateTotalAmount() / 100}{" "}
            {/* Display total in dollars */}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition duration-300"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
