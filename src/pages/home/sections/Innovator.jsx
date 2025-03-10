import React, { useState } from "react";
import Inno from "../../../assets/images/inno.jpg";

export const Innovator = () => {
  const [showVisionModal, setShowVisionModal] = useState(false);
  const [showMissionModal, setShowMissionModal] = useState(false);

  return (
    <div id="innovator" className="bg-gradient-to-r from-red-50 to-yellow-50 py-20 px-4 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative">
            <img
              src={Inno}
              alt="Innovator"
              className="w-90 md:w-96 lg:w-[23rem] rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 object-cover border-4 border-red-600"
            />
            <div className="absolute inset-0 rounded-lg border-4 border-yellow-400 p-12 shadow-xl transform translate-y-2 -z-10"></div>
          </div>
        </div>

        {/* Information Section */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-black-600 mb-4 text-center p-4 font-serif">
            Founder/CEO
            <hr className="border-t-2 border-yellow-400 my-2" />
            <hr className="border-t-2 border-red-600 my-2" />
          </h2>
          <h3 className="text-3xl font-bold mb-6 text-center">
            <span className="text-red-600">Afua Ohenewaa</span>{" "}
            <span className="text-yellow-400">Asubonteng</span>
          </h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            A passionate female entrepreneur from Oforikrom, Ashanti Region,
            dedicated to solving the problem of skipped breakfasts. Her mission
            is to provide healthy, affordable, and convenient breakfast options
            to improve nutrition and well-being for children, students, and
            workers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            With a vision to scale production and train 20-50 people, she is
            making a significant impact in the Food & Health sector.
          </p>

          {/* Vision and Mission Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Button */}
            <button
              onClick={() => setShowVisionModal(true)}
              className="bg-gradient-to-r from-red-100 to-yellow-100 p-6 rounded-lg shadow-lg border-l-5 border-red-600 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-red-600 mb-1">Vision</h3>
            </button>

            {/* Mission Button */}
            <button
              onClick={() => setShowMissionModal(true)}
              className="bg-gradient-to-r from-red-100 to-yellow-100 p-6 rounded-lg shadow-lg border-l-5 border-yellow-400 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Mission</h3>
            </button>
          </div>
        </div>
      </div>

      {/* Vision Modal */}
      {showVisionModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fade-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-600 to-yellow-400 p-3 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Vision</h3>
              <button
                onClick={() => setShowVisionModal(false)}
                className="text-white hover:text-gray-200"
              >
                ✖
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-700">
                To be a leading provider of nutritious breakfast options that
                empower individuals and families to start their day right.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mission Modal */}
      {showMissionModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fade-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-red-600 p-3 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Mission</h3>
              <button
                onClick={() => setShowMissionModal(false)}
                className="text-white hover:text-gray-200"
              >
                ✖
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-700">
                To deliver high-quality, affordable breakfast cereals while
                promoting healthy eating habits and supporting local communities.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Innovator;