import React from "react";
import Inno from "../../../assets/images/inno.jpg";

export const Innovator = () => {
  return (
    <div id="innovator" className="bg-gray-50 py-20 px-4 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative">
            <img
              src={Inno}
              alt="Innovator"
              className="w-90 md:w-96 lg:w-[23rem] rounded-lg shadow-lg transition-transform transform hover:scale-105 object-cover border-4 border-red-600"
            />
            <div className="absolute inset-0 rounded-lg border-4 border-yellow-400 p-12 shadow-xl  transform translate-y-2"></div>
          </div>
        </div>

        {/* Information Section */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-red-600 mb-4 text-center p-4 font-serif">
            Founder/CEO
            <hr className=" border-t-1 border-yellow-400 my-1 " />
            <hr className=" border-t-1 border-red-600 my-1 " />
          </h2>
          <h3>
            <span className="text-3xl font-bold text-red-600 font-serif">
              {" "}
              Afua Ohenewaa{" "}
            </span>
            <span className="text-3xl font-bold text-yellow-400 font-serif">
              {" "}
              Asubonteng{" "}
            </span>
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

          {/* Vision and Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vision Card */}
            <div className="bg-yellow-200 p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-red-600 mb-2">Vision</h3>
              <p className="text-gray-700">
                To be a leading provider of nutritious breakfast options that
                empower individuals and families to start their day right.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-yellow-200 p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-red-600 mb-2">Mission</h3>
              <p className="text-gray-700">
                To deliver high-quality, affordable breakfast cereals while
                promoting healthy eating habits and supporting local
                communities.
              </p>
            </div>
            
            {/* Goal Card
            <div className="bg-yellow-200 p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-red-600 mb-2">Mission</h3>
              <p className="text-gray-700">
                To deliver high-quality, affordable breakfast cereals while
                promoting healthy eating habits and supporting local
                communities.
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Wavy Line Separator */}
      {/* <div className="relative mt-20">
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
      </div> */}
      
    </div>
    
  );
};

export default Innovator;
