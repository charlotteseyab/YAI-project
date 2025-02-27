import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const Contact = () => {
    return (
      <div id="contact" className="flex flex-col lg:flex-row bg-white min-h-screen p-10 lg:p-20">
  
        {/* Left Section - Contact Form */}
        <div className="w-full lg:w-2/3 p-6">
          <h2 className="text-4xl font-bold text-black">Contact <span className="text-red-500">Us</span></h2>
          <p className="text-gray-600 mt-2">Feel free to contact us any time. We will get back to you as soon as we can!</p>
  
          <form className="mt-6">
            <label className="block text-gray-700 text-sm">Name</label>
            <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded outline-none" />
  
            <label className="block text-gray-700 text-sm mt-4">Email</label>
            <input type="email" className="w-full p-2 mt-1 border border-gray-300 rounded outline-none" />
  
            <label className="block text-gray-700 text-sm mt-4">Message</label>
            <textarea className="w-full p-2 mt-1 border border-gray-300 rounded outline-none h-24"></textarea>
  
            <button className="w-full bg-black text-white font-bold py-2 mt-4 rounded hover:bg-gray-800">SEND</button>
          </form>
        </div>
  
        {/* Right Section - Contact Info */}
        <div className="w-full lg:w-1/3 h-auto mb-10 max-h-60 bg-black bg-opacity-90 bg-gradient-to-r from-red-700/30 to-yellow-600/30 backdrop-filter backdrop-blur-lg text-white p-6 rounded-lg relative">
          <div className="absolute top-0 left-0 w-6 h-6 bg-yellow-400"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600"></div>
  
          <h3 className="text-lg font-semibold mb-4">Info</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400 text-base" />
              <p>afuaohenewaaasubonteng@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-yellow-400 text-base" />
              <p>+233 055 976 7028</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-400 text-base" />
              <p>Akowa ST, Kumasi Metro, Ashanti Region</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-yellow-400 text-base" />
              <p>09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Contact