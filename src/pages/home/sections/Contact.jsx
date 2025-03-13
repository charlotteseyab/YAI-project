import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="bg-gradient-to-b from-white to-yellow-50/30 py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold font-serif mb-6">
            Let's
            <span className="relative mx-4">
              <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Connect
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DC2626"/>
                    <stop offset="100%" stopColor="#EAB308"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Drop us a message!
          </p>
        </div>
      </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Contact Info Cards */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Info Card */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/5 to-yellow-500/5"></div>
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-yellow-500"></div>
              
              <div className="relative p-8">
                <h3 className="text-2xl font-bold font-serif mb-6 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-700">afuaohenewaaasubonteng@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-yellow-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-700">+233 055 976 7028</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-700">Akowa ST, Kumasi Metro, Ashanti Region</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaClock className="text-yellow-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Working Hours</p>
                      <p className="text-gray-700">09:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-yellow-500/5"></div>
              
              <div className="relative p-8">
                <h3 className="text-2xl font-bold font-serif mb-6 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                  Send us a Message
                </h3>

                <form action="https://formspree.io/f/xvgkoawb" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold py-4 rounded-xl
                             hover:from-red-700 hover:to-yellow-600 transform hover:scale-[1.02] transition-all duration-300
                             disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
