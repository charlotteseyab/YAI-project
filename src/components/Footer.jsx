import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 bg-gradient-to-r from-red-700/30 to-yellow-600/30 backdrop-filter backdrop-blur-lg text-white p-6 flex flex-col items-center">
      <div className="flex space-x-4 mb-2">
        <a href="https://wa.me/message/WSH5UO6CYOMKC1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="cursor-pointer hover:text-yellow-400 text-lg" />
        </a>
        <a href="https://www.instagram.com/invites/contact/?igsh=18lwh4b4s3kl1&utm_content=tb5qgtk" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="cursor-pointer hover:text-yellow-400 text-lg" />
        </a>
        <a href="https://www.tiktok.com/@brownbrown.food?_t=ZS-8uAFrhO3zke&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="cursor-pointer hover:text-yellow-400 text-lg" />
        </a>
        <a href="https://www.facebook.com/share/1Bhrtk2e4W/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="cursor-pointer hover:text-yellow-400 text-lg" />
        </a>
      </div>

      {/* Horizontal Line */}
      {/* <hr className="w-4/5 border-t-1 border-red-600 my-1" /> */}

      <p className="text-gray-400">&copy; 2025 Brown&Brown Foods. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
