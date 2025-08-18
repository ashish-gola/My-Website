'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github } from 'lucide-react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative group">
            <a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-sky-500 transition-all duration-300"
            >
              Ashish Gola
            </a>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 group-hover:w-full transition-all duration-300"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className={`relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-sky-500 to-blue-500 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full animate-pulse opacity-20"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* GitHub Profile Link */}
            <a
              href="https://github.com/ashish-gola"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all duration-300 ease-in-out hover:scale-105 group"
              aria-label="Visit GitHub Profile"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                console.log('Mobile menu toggle clicked, current:', isMobileMenuOpen);
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-transform duration-300 ease-in-out hover:scale-105"
              aria-label="Toggle mobile menu"
              type="button"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 text-gray-300 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 text-gray-300 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700 p-4">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className={`block w-full text-left px-4 py-3 rounded-xl mb-2 last:mb-0 cursor-pointer transition-all duration-300 transform ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg scale-105'
                    : 'text-gray-300 hover:bg-gray-800 hover:scale-105'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideInUp 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}