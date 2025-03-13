import React, { useState } from "react";
import Inno from "../../../assets/images/inno.jpg";

export const Innovator = () => {
  const [showVisionModal, setShowVisionModal] = useState(false);
  const [showMissionModal, setShowMissionModal] = useState(false);

  return (
    <div
      id="innovator"
      className="bg-gradient-to-b from-white to-red-50/30 py-24 px-4 md:px-10"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 max-w-7xl">
        {/* Enhanced Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Decorative Background Elements */}
            <div className="absolute -top-4 -left-4 w-full h-full">
              <div className="absolute w-full h-full bg-red-100 rounded-2xl transform rotate-6 transition-transform duration-500"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full">
              <div className="absolute w-full h-full bg-yellow-100 rounded-2xl transform -rotate-6 transition-transform duration-500"></div>
            </div>
            
            {/* Main Image Container */}
            <div className="relative group">
              {/* Image Frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded-2xl transform rotate-1 transition-transform duration-500"></div>
              
              {/* Main Image */}
              <div className="relative bg-white p-2 rounded-2xl shadow-xl transform transition-all duration-500 group-hover:scale-[1.02]">
                <img
                  src={Inno}
                  alt="Innovator"
                  className="w-full max-w-[350px] rounded-xl object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-red-500/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full blur-[2px] opacity-50"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full blur-[2px] opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="md:w-1/2 relative">
          {/* Background decorative elements */}
          {/* <div className="absolute -top-4 -right-4 w-full h-full">
            <div className="absolute w-full h-full bg-red-50 rounded-2xl transform -rotate-3 transition-transform duration-500"></div>
          </div>
          <div className="absolute -bottom-4 -left-4 w-full h-full">
            <div className="absolute w-full h-full bg-yellow-50 rounded-2xl transform rotate-3 transition-transform duration-500"></div>
          </div> */}

          {/* Main content card */}
          <div className="relative bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-100/50 transform transition-all duration-500 hover:scale-[1.01]">
            <div className="space-y-3 mb-10">
              <h2 className="text-2xl font-bold text-gray-700 font-serif tracking-wide">
                Founder & CEO
              </h2>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent leading-tight">
                Afua Ohenewaa Asubonteng
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full"></div>
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                A passionate female entrepreneur from Oforikrom, Ashanti Region,
                dedicated to solving the problem of skipped breakfasts. Her
                mission is to provide healthy, affordable, and convenient
                breakfast options to improve nutrition and well-being for
                children, students, and workers.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With a goal to scale production and train 20-50 people, she is
                making a significant impact in the Food & Health sector.
              </p>
            </div>

            {/* Vision and Mission Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setShowVisionModal(true)}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-red-50 p-6 shadow-md transition-all duration-300 hover:shadow-xl border border-red-100/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-600/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <h3 className="relative text-xl font-bold text-red-600 flex items-center gap-2">
                  <span>Vision</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
              </button>

              <button
                onClick={() => setShowMissionModal(true)}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-yellow-50 p-6 shadow-md transition-all duration-300 hover:shadow-xl border border-yellow-100/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <h3 className="relative text-xl font-bold text-yellow-600 flex items-center gap-2">
                  <span>Mission</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Modal */}
      {showVisionModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fade-in">
            <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Vision</h3>
              <button
                onClick={() => setShowVisionModal(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-lg">
                To be a leading provider of nutritious breakfast options that
                empower individuals and families to start their day right.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mission Modal */}
      {showMissionModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fade-in">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Mission</h3>
              <button
                onClick={() => setShowMissionModal(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-lg">
                To deliver high-quality, affordable breakfast cereals while
                promoting healthy eating habits and supporting local
                communities.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Innovator;