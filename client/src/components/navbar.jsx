import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaServicestack, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/BLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const toggleNav = () => setNav(!nav);

  // Shadow effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-20 flex justify-between items-center px-4 bg-gradient-to-r from-white via-red-300 to-yellow-500 transition-shadow duration-300 z-50 ${
        shadow ? 'shadow-xl' : ''
      }`}
    >
      {/* Logo */}
      <div className="text-white font-bold text-4xl tracking-widest transform transition duration-300 hover:scale-105">
        <span className="px-2 py-1 "><img src={Logo} alt="Brand Logo" className='w-52' /></span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
        <li className="flex items-center hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-110">
          <FaHome className="mr-2" /> Home
        </li>
        <li className="flex items-center hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-110">
          <FaServicestack className="mr-2" /> Services
        </li>
        <li className="flex items-center hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-110">
          <FaInfoCircle className="mr-2" /> About
        </li>
        <li className="flex items-center hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-110">
          <FaEnvelope className="mr-2" /> Contact
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={toggleNav} className="md:hidden z-10 text-white cursor-pointer">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-500 flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="text-white text-3xl space-y-8">
          <li
            className="flex items-center hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-110"
            onClick={toggleNav}
          >
            <FaHome className="mr-2" /> Home
          </li>
          <li
            className="flex items-center hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-110"
            onClick={toggleNav}
          >
            <FaServicestack className="mr-2" /> Services
          </li>
          <li
            className="flex items-center hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-110"
            onClick={toggleNav}
          >
            <FaInfoCircle className="mr-2" /> About
          </li>
          <li
            className="flex items-center hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-110"
            onClick={toggleNav}
          >
            <FaEnvelope className="mr-2" /> Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
