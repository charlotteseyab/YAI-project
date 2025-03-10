import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Import star icon
import backgroundImage from "../../../assets/images/bbbbbbbb.jpg"; // Replace with your background image path

const reviews = [
  {
    name: "Emily Johnson",
    review:
      "Amazing experience! The team was incredibly professional and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    review:
      "Highly recommend! They are skilled, friendly, and dedicated to their work.",
    rating: 4,
  },
  {
    name: "Sophia Lee",
    review: "Great breakfast cereals, healthy and delicious",
    rating: 5,
  },
  {
    name: "Charlotte Seyab",
    review:
      "The service was outstanding. I will definitely buy with them again!",
    rating: 5,
  },
];

export const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section
      className="py-12 text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "cover", // Cover the entire section
        backgroundPosition: "center", // Center the image
        backgroundAttachment: "fixed", // Fixed background
      }}
    >
      <div
        id="review"
        className="container mx-auto px-6 max-w-2xl bg-white bg-opacity-90 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 font-serif mb-4">
          What Our Clients Say
        </h2>
        <div className="relative mt-6">
          <p className="text-gray-700 text-lg italic">
            "{reviews[currentIndex].review}"
          </p>
          <h3 className="mt-4 font-semibold text-gray-900">
            - {reviews[currentIndex].name}
          </h3>
          <div className="mt-2 flex justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-yellow-400 text-xl ${
                  i < reviews[currentIndex].rating ? "" : "opacity-30"
                }`}
              >
                <FaStar />
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={prevReview}
            className="px-4 py-2 text-white rounded-lg  transition duration-300"
          >
            ◀
          </button>
          <button
            onClick={nextReview}
            className="px-4 py-2 text-white rounded-lg  transition duration-300"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
