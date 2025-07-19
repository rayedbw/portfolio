/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a UI/UX student studying at Barnett Technical University. I enjoy creating unique and simplistic user interfaces in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding relative" id="about">
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      
      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-purple-900/30 to-primary-800/40"></div> */}
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 animate-slideUp">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
              About Myself
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Description */}
          <div className="mb-10">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 text-center max-w-3xl mx-auto font-light">
              {description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-10">
            <h3 className="text-2xl font-display font-semibold text-gray-800 text-center mb-8">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {skillsList.map((skill, index) => (
                <div 
                  key={skill} 
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-100 hover:to-secondary-100 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-primary-100">
                    <span className="text-gray-700 font-medium group-hover:text-primary-700 transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote/Detail Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-lg md:text-xl leading-relaxed text-gray-600 italic font-light relative">
                <span className="text-4xl text-primary-300 absolute -top-4 -left-4 font-serif">"</span>
                {detailOrQuote}
                <span className="text-4xl text-primary-300 absolute -bottom-8 -right-4 font-serif">"</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
