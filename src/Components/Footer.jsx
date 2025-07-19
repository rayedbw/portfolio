/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                          radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {email && (
            <a 
              href={`mailto:${email}`}
              className="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <img src={envelopeIcon} alt="email" className="w-6 h-6 filter brightness-0 invert" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Email
              </div>
            </a>
          )}
          {devDotTo && (
            <a 
              href={`https://dev.to/${devDotTo}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <img src={devDotToIcon} alt="Dev.to" className="w-6 h-6 filter brightness-0 invert" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Dev.to
              </div>
            </a>
          )}
          {gitHub && (
            <a 
              href={`https://github.com/${gitHub}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <img src={gitHubIcon} alt="GitHub" className="w-6 h-6 filter brightness-0 invert" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                GitHub
              </div>
            </a>
          )}
          {instagram && (
            <a
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 filter brightness-0 invert" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Instagram
              </div>
            </a>
          )}
          {linkedIn && (
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6 filter brightness-0 invert" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                LinkedIn
              </div>
            </a>
          )}
          {medium && (
            <a 
              href={`https://medium.com/@${medium}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <img src={mediumIcon} alt="Medium" className="w-6 h-6 filter brightness-0 invert" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Medium
              </div>
            </a>
          )}
          {twitter && (
            <a 
              href={`https://twitter.com/${twitter}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6 filter brightness-0 invert" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Twitter
              </div>
            </a>
          )}
          {youTube && (
            <a
              href={`https://www.youtube.com/c/${youTube}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <img src={youTubeIcon} alt="YouTube" className="w-6 h-6 filter brightness-0 invert" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                YouTube
              </div>
            </a>
          )}
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Created with ❤️ by <span className="text-white font-medium">{name}</span>
          </p>
          <p className="text-white/50 text-xs mt-2">
            Built with React & TailwindCSS
          </p>
        </div>
      </div>
      
      {/* Decorative gradient circles */}
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-r from-secondary-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-l from-primary-400/20 to-transparent rounded-full blur-3xl"></div>
    </footer>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
