import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-700 py-8 px-4 border-t border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 text-yellow-600">MyBrand</h2>
          <p className="text-gray-600">Your trusted partner in excellence.</p>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 text-yellow-500">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-yellow-600 transition-colors duration-300">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-600 transition-colors duration-300">Services</a></li>
            <li><a href="#about" className="hover:text-yellow-600 transition-colors duration-300">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-600 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 text-yellow-500">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-600 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-600 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-600 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-600 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-8">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
