import React, { useState } from 'react';
import '../CSS/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link clicks
  const handleClick = (event) => {
    // Prevent navigation if not on homepage
    if (window.location.pathname !== '/') {
      event.preventDefault();
    }
    // Close mobile menu
    setIsOpen(false);
  };

  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center fixed top-0 left-0 z-50 bg-transparent backdrop-blur-lg font-jetbrains-mono">
      {/* Logo */}
      <a href="/" className="text-4xl font-extrabold text-[#FF38E5] cursor-pointer">m4rsu</a>

      {/* Hamburger Icon for Mobile/Tablet */}
      <button
        className="md:hidden text-[#31FFDD] focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line middle"></span>
          <span className="hamburger-line"></span>
        </div>
      </button>

      {/* Navigation Links */}
      <div
        className={`md:flex md:gap-10 md:items-center ${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row absolute md:static top-0 left-0 w-full md:w-auto bg-[#1E1E1E] md:bg-transparent p-6 md:p-0 transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-16 opacity-100' : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100'
        }`}
      >
        <a
          href="#about"
          className="text-[#31FFDD] text-[15px] font-light nav-link relative py-2 md:py-0 transition-colors duration-300"
          onClick={handleClick}
        >
          About
        </a>
        <a
          href="#achievements"
          className="text-[#31FFDD] text-[15px] font-light nav-link relative py-2 md:py-0 transition-colors duration-300"
          onClick={handleClick}
        >
          Achievements
        </a>
        <a
          href="#projects"
          className="text-[#31FFDD] text-[15px] font-light nav-link relative py-2 md:py-0 transition-colors duration-300"
          onClick={handleClick}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-[#31FFDD] text-[15px] font-light nav-link relative py-2 md:py-0 transition-colors duration-300"
          onClick={handleClick}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;