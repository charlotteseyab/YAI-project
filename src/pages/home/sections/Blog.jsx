import React, { useState } from "react";
import { FaRegCheckCircle, FaArrowRight, FaTimes } from "react-icons/fa";
import image1 from "../../../assets/images/tb.webp";
import image2 from "../../../assets/images/tb3.webp";
import image3 from "../../../assets/images/tb2.webp";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "Breakfast is Essential Because it...",
      excerpt: [
        "Boosts Energy Levels",
        "Better Heart Health",
        "Provides Essential Nutrients",
        "Improves Concentration & Memory",
        "Improves Concentration and Focus",
        "Encourages Healthy Eating Habits",
        "Sets a Positive Tone for the Day",
        "Encourages Healthy Eating Habits",
        "Supports Metabolism & Weight Management",
        
      ],
      image: image1,
    },
    {
      id: 2,
      title: "Health Benefits of our Cereals",
      excerpt: [
        "Rich in Protein – Supports muscle growth and repair.",
        "High in Fiber – Aids digestion and prevents constipation.",
        "Supports Gut Health – Improves digestion with probiotics.",
        "Contains Healthy Fats – Groundnuts are a source of monounsaturated fats, which are good for heart health.",
        "Packed with Vitamins and Minerals – Provides iron, magnesium, and B vitamins for overall health.",
        "Rich in Complex Carbohydrates – Provides sustained energy throughout the day."
      ],
      image: image2,
    },
    {
      id: 3,
      title: "Healthy Breakfast Tips",
      excerpt: [
        "Prioritize Protein – Keeps you full longer.",
        "Avoid Sugar – Opt for whole grains and fruits.",
        "Stay Hydrated – Drink water to prevent dehydration.",
        " Include Whole Grains – Whole grains provide sustained energy and are rich in fiber.",
        "Balance Your Meal –  A balanced breakfast includes protein, healthy fats, and carbs for sustained energy.",
        " Add Healthy Fats – Healthy fats support brain function and keep you satisfied.",
        "Incorporate Fruits and Vegetables – Fruits and veggies are packed with vitamins, minerals, and antioxidants."
      ],
      image: image3,
    },
  ];

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div id="blog" className="bg-yellow-50 py-20 px-2 md:px-10">
      <div className="container mx-auto">
        {/* Section Header */}
        <h1 className="text-4xl font-bold text-red-600 mb-5 text-center font-serif">
          Health Tips
        </h1>
        <h2 className="text-3xl font-bold text-black mb-8 text-center italic underline">
          Just so you know...
        </h2>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-2 flex items-center">
                  <FaRegCheckCircle className="text-yellow-400 mr-2" />
                  {post.title}
                </h3>
                <button
                  onClick={() => openModal(post)}
                  className="text-black-600 font-bold hover:underline flex items-center"
                >
                  Read More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pop-Up Modal */}
        {selectedPost && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-8">
            <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 overflow-hidden">
              {/* Modal Header */}
              <div className="bg-red-600 p-3 flex justify-between items-center font-serif">
                <h3 className="text-2xl font-bold text-white">
                  {selectedPost.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-200"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <ul className="text-gray-700 mb-4">
                  {selectedPost.excerpt.map((point, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <span className="mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;