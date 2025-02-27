import React from "react";
import Inno from "../../../assets/images/ai inno.jpg";

export const Innovator = () => {
  return (
    <div id="innovator" className="bg-white py-20 px-4 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Inno}
            alt="Innovator"
            className="w-80 md:w-120 lg:w-[22rem] rounded-lg shadow-lg transition-transform transform hover:scale-110 object-cover"
          />
        </div>

        {/* Information Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
            Meet Our Innovator
            <hr className="border-t-2 border-yellow-1200 mt-2 mx-auto" />
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed max-w-lg border-l-2 border-b-2 rounded-lg  border-yellow-400 pl-4">
            A passionate female entrepreneur from Oforikrom, Ashanti Region,
            dedicated to solving the problem of skipped breakfasts. Her mission
            is to provide healthy, affordable, and convenient breakfast options
            to improve nutrition and well-being for children, students, and
            workers.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg border-l-2 border-b-2 rounded-lg  border-red-600 pl-4">
            With a vision to scale production and train 20-50 people, she is
            making a significant impact in the Food & Health sector.
          </p>
        </div>
      </div>

      {/* Wavy Line Separator */}
      <div className="relative mt-20">
        <svg
          className="absolute left-0 w-full"
          height="120"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,120 600,0 900,0 C1200,0 1440,120 1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Innovator;
