'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail, Globe, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

        {/* Column 1: Brand/Copyright & Slogan */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 mt-7">
          <p className="text-xl font-bold text-white">Ashish Gola</p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {currentYear} Ashish Gola. All rights reserved.
          </p>
          <p className="text-md text-gray-300 dark:text-gray-400 font-light max-w-xs leading-relaxed">
            Crafting digital experiences that make an impact, one pixel at a time.
          </p>
        </div>

        {/* Column 2: Quick Links (Main Navigation) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-3">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Projects</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Experience</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Contact</a>
          </nav>
        </div>

        {/* Column 3: Legal & Other Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">More Info</h3>
          <ul className="flex flex-col space-y-3">
            <li>
              <a href="#privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms-of-service" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Terms of Service</a>
            </li>
            {/* Add more links as needed, e.g., Blog, Services */}
            <li>
              <a href="https://ashishgoal.com/blog" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Blog</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media & Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex space-x-5 mb-4 mt-7">
            <a
              href="https://github.com/ashishgola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashishgoal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/ashishgoal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform duration-200"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/ashishgoal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform duration-200"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@ashishgoal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform duration-200"
              aria-label="YouTube Channel"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://ashishgoal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform duration-200"
              aria-label="Personal Website"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
          {/* Direct Email Link */}
          <a
            href="mailto:contact@ashishgoal.com"
            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center mb-2"
          >
            <Mail className="w-4 h-4 mr-2" />
            contact@ashishgoal.com
          </a>
          {/* Phone Number (Optional) */}
          <a
            href="tel:+919876543210" // Replace with your actual phone number
            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            +91 98765 43210
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;