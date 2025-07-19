/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/rayed.jpg";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height relative overflow-hidden">
      <img 
        className="absolute inset-0 w-full h-full object-cover" 
        src={image} 
        alt="Md Rayed Bin Wahed" 
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-20 h-full flex items-center">
        <div className="w-full">
          {/* Text content - positioned on right for larger screens, center for mobile */}
          <div className="text-right md:ml-auto md:w-2/3 lg:w-1/2 animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
                {name}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-body font-light text-white/90 mb-6">
                {title}
              </h2>
              
              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <a 
                  href="#about" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Learn More About Me
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <img
            src={arrowSvg}
            className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
            alt="Arrow pointing downwards, indicating to scroll down for more content"
          />
          <span className="text-white/70 text-xs mt-2 font-light">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
