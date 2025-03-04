import React from "react";

const Payment = () => {
  const handlePayment = () => {
    const paystack = window.PaystackPop; // Access the Paystack SDK

    paystack.openIframe({
      key: "YOUR_PUBLIC_KEY", // Replace with your Paystack public key
      email: "customer@example.com", // Customer's email
      amount: 10000, // Amount in kobo (10000 kobo = 100 Naira)
      currency: "NGN", // Currency
      onClose: () => {
        alert("Transaction was not completed, you can close this window.");
      },
      callback: (response) => {
        // Handle successful payment here
        alert("Payment successful! Reference: " + response.reference);
        // You can also send the reference to your server for verification
      },
    });
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <button
        onClick={handlePayment}
        className="bg-yellow-400 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment; 