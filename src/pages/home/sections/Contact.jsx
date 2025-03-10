import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .send("service_phveol3", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //         // Optionally reset the form
  //         setFormData({ name: "", email: "", message: "" });
  //       },
  //       (err) => {
  //         console.error("FAILED...", err);
  //       }
  //     );
  // };

  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row bg-white min-h-screen p-10 lg:p-20"
    >
      {/* Left Section - Contact Form */}
      <div className="w-full lg:w-2/3 p-6 bg-gray-100 rounded-2xl m-10">
        <h2 className="text-4xl font-bold text-black font-serif">
          Contact <span className="text-red-600 font-serif">Us</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Feel free to contact us any time. We will get back to you as soon as
          we can!
        </p>

        <form action="https://formspree.io/f/xvgkoawb" method="POST" className="mt-6">
          <label className="block text-gray-700 text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none"
            required
          />

          <label className="block text-gray-700 text-sm mt-4">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none"
            required
          />

          <label className="block text-gray-700 text-sm mt-4">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none h-24"
            required
          ></textarea>

          <button className="w-full bg-black text-white font-bold py-2 mt-4 rounded hover:bg-gray-800">
            SEND
          </button>
        </form>
      </div>

      {/* Right Section - Contact Info */}
      <div className="w-full lg:w-1/3 h-auto mb-10 max-h-60 bg-black bg-opacity-90 bg-gradient-to-r from-red-700/30 to-yellow-600/30 backdrop-filter backdrop-blur-lg text-white p-6 rounded-lg relative">
        <div className="absolute top-0 left-0 w-6 h-6 bg-yellow-400"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600"></div>

        <h3 className="text-lg font-semibold mb-4 font-serif">Info</h3>
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

export default Contact;
