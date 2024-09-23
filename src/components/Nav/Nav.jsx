import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logoRe.jpg";
import './Nav.css'
import ServicesDropdown from './ServicesDropdown';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: "0" });
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <>
      <nav className="navBar bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className=" mx-auto md:h-[50px] flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center bg-black rounded-full">
            <img src={logo} className="w-[80px] h-[80px] lg:w-[70px] lg:h-[70px]
            transition-transform rounded-full duration-500 transform hover:rotate-180" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className="text-zinc-950  text-lg hover:text-red-600 relative group"
            >
              Home
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-zinc-950  text-lg hover:text-red-600 relative group"
            >
              About
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            {/* <Link 
              to="/services" 
              className="text-zinc-950  text-lg hover:text-red-600 relative group"
            >
              Services
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link> */}
            <ServicesDropdown/>
            <Link 
              to="/gallery" 
              className="text-zinc-950  text-lg hover:text-red-600 relative group"
            >
              Gallery
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            
            <Link 
              to="/career" 
              className="text-zinc-950  text-lg hover:text-red-600 relative group"
            >
              Career
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            
            <Link 
              to="/contact" 
              className="text-zinc-950  text-lg hover:text-red-600 relative group"
            >
              Contact Us
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <button className="bg-red-600 text-white rounded-full px-4 py-2 md:h-[60px] lg:h-[40px]">
              Book a Consultation
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 py-4 space-y-4 z-10">
            <Link onClick={handleClick} to="/" className="block text-black hover:text-red-600">Home</Link>
            <Link onClick={handleClick} to="/about" className="block text-black hover:text-red-600">About</Link>
            <Link onClick={handleClick} to="/services" className="block text-black hover:text-red-600">Services</Link>
            <Link onClick={handleClick} to="/gallery" className="block text-black hover:text-red-600">Gallery</Link>
            <Link onClick={handleClick} to="/career" className="block text-black hover:text-red-600">Career</Link>
            <Link onClick={handleClick} to="/contact" className="block text-black hover:text-red-600">Contact Us</Link>
            <button className="bg-red-600 text-white w-full py-2 rounded-full">Book a Consultation</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
