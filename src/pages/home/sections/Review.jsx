import React from 'react'

import { useState } from "react";

const reviews = [
  {
    name: "Emily Johnson",
    review: "Amazing experience! The team was incredibly professional and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    review: "Highly recommend! They are skilled, friendly, and dedicated to their work.",
    rating: 4,
  },
  {
    name: "Sophia Lee",
    review: "The service was outstanding. I will definitely work with them again!",
    rating: 5,
  },
  {
    name: "Charlotte Seyab",
    review: "The service was outstanding. I will definitely buy with them again!",
    rating: 5,
  },
];

export const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 bg-gray-100 text-center">
      <div id="review" className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
        <div className="relative bg-white shadow-lg rounded-xl p-6 mt-6">
          <p className="text-gray-700 text-lg">"{reviews[currentIndex].review}"</p>
          <h3 className="mt-4 font-semibold text-gray-900">- {reviews[currentIndex].name}</h3>
          <div className="mt-2 flex justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={
                `text-yellow-400 text-xl ${i < reviews[currentIndex].rating ? "" : "opacity-30"}`
              }>★</span>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={prevReview}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            ◀
          </button>
          <button
            onClick={nextReview}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default Review