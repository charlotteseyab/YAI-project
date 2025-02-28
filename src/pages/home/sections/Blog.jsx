import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Breakfast is Essential Because it...",
      excerpt: [
        "Boosts Energy Levels ⚡",
        "Better Heart Health ❤️",
        "Provides Essential Nutrients 🥑🍎🥣",
        "Improves Concentration & Memory 🧠",
        "Supports Metabolism & Weight Management ⚖️",
      ],
      //   image: "path/to/image1.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Health Benefits of our Cereals",
      excerpt: [
        "Rich in Protein 🥜 – Supports muscle growth and repair due to its soybean and groundnut content.",
        "High in Fiber 🌾 – Aids digestion and prevents constipation.",
        "Supports Gut Health 🦠 – The fermentation process produces probiotics that improve digestion.",
        // "Provides Essential Vitamins 🌽 – Rich in B vitamins, which help with metabolism and brain function."
      ],
      image: "path/to/image2.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Healthly Breakfast Tips",
      excerpt: [
        " Prioritize Protein – Include eggs, beans, Greek yogurt, or nuts to keep you full longer.",
        " Avoid Sugar – Opt for whole grains, fruits, and vegetables.",
        " Stay Hydrated – Drink water to stay hydrated and prevent dehydration.",
      ],
      image: "path/to/image3.jpg", // Replace with actual image path
    },
  ];

  return (
    <div id="blog" className="bg-yellow-1000 py-20 px-4 md:px-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-5 text-center font-serif ">
          Health Tips
        </h1>
        <h2 className="text-3xl font-bold text-black-400 mb-8 text-center italic underline">
          Just so you know...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-xl  p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-red-600 mb-2 flex items-center">
                <FaRegCheckCircle className="text-yellow-400 mr-2" />
                {post.title}
              </h3>
              <ul className="text-gray-700 mb-4 list-disc list-inside">
                {post.excerpt.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              {/* <a href="#" className="text-blue-600 font-bold hover:underline">
                Read More
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
