/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <ul className="flex space-x-8 md:space-x-12">
            <li>
              <a 
                href="#home" 
                className="text-gray-700 hover:text-primary-600 font-medium text-sm md:text-base transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-primary-600 font-medium text-sm md:text-base transition-colors duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className="text-gray-700 hover:text-primary-600 font-medium text-sm md:text-base transition-colors duration-300 relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className="text-gray-700 hover:text-primary-600 font-medium text-sm md:text-base transition-colors duration-300 relative group"
              >
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#footer" 
                className="text-gray-700 hover:text-primary-600 font-medium text-sm md:text-base transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
