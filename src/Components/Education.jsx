import React from "react";

/**
 * Education component
 * Space to highlight your education, such as degrees, certifications,
 * or relevant courses. This can include formal education,
 * online courses, or workshops that have contributed to your skills.
 * This section can be continually updated as you complete new courses
 * or gain new certifications.
 */

import image from "../images/motion-background.jpg";
const imageAltText = "books and laptop on a desk";

const educationList = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Barnett Technical University",
    year: "2023",
    description: "Focused on software development and user interface design.",
  },
  {
    title: "UI/UX Design Certification",
    institution: "Design Institute",
    year: "2022",
    description: "Completed a comprehensive course on user experience and interface design.",
  },
  {
    title: "Web Development Bootcamp",
    institution: "Tech Academy",
    year: "2021",
    description: "Intensive program covering HTML, CSS, JavaScript, and responsive design.",
  },
];

const Education = () => {
  return (
    <section className="padding relative" id="education">
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      
      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-primary-900/20 to-secondary-800/30"></div> */}
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-primary-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            My educational journey and continuous learning path in technology
          </p>
        </div>
        
        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationList.map((item, index) => (
            <div 
              key={index} 
              className="group animate-slideUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-white/20 h-full">
                {/* Year Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl text-white font-bold text-lg mb-6 shadow-lg">
                  {item.year}
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center text-primary-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2-5a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2m-6 0h6" />
                    </svg>
                    <span className="font-semibold">{item.institution}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional certifications call-to-action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>View All Certifications</span>
            <svg className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
