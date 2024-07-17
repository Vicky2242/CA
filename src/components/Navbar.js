import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-8 w-10 mr-2" />
          <span className="text-white text-xl">P.Balaji & Co.,</span>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li><a href="#home" className="text-white block md:inline-block py-2">Home</a></li>
          <li className="border-t border-gray-500 md:border-0"><a href="#about" className="text-white block md:inline-block py-2">About</a></li>
          <li className="border-t border-gray-500 md:border-0"><a href="#services" className="text-white block md:inline-block py-2">Services</a></li>
          <li className="border-t border-gray-500 md:border-0"><a href="#contact" className="text-white block md:inline-block py-2">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
