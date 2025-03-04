import React, { useState } from "react";

export const OrderPage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Shop Our Cereals</h1>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500"></div>
        </div>
      )}

      {/* Paystack Storefront Iframe */}
      <iframe
        src="https://dashboard.paystack.com/#/storefronts"
        width="100%"
        height="800px"
        style={{ border: "none", display: loading ? "none" : "block" }}
        title="Paystack Storefront"
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  );
};

export default OrderPage;
