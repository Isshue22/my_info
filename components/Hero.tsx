
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

// SVG Icons for the cube
const PythonIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.8,8.25c-0.34,0-0.68,0.03-1.01,0.08V4.83c0-0.41-0.34-0.75-0.75-0.75c-0.41,0-0.75,0.34-0.75,0.75v3.47 c-1.25,0.51-2.14,1.74-2.14,3.17c0,1.23,0.67,2.3,1.66,2.83V19.5c0,0.41,0.34,0.75,0.75,0.75c0.41,0,0.75-0.34,0.75-0.75v-4.5 c0.34-0.05,0.67-0.08,1.01-0.08c1.9,0,3.45,1.54,3.45,3.45S14.7,21.8,12.8,21.8c-1.2,0-2.26-0.62-2.86-1.55 c-0.24-0.37-0.78-0.48-1.15-0.24c-0.37,0.24-0.48,0.78-0.24,1.15C9.4,22.6,11,23.3,12.8,23.3c2.73,0,4.95-2.22,4.95-4.95 S15.53,13.4,12.8,13.4z M11.2,12.92c1.25-0.51,2.14-1.74,2.14-3.17c0-1.23-0.67-2.3-1.66-2.83V2.5c0-0.41-0.34-0.75-0.75-0.75 c-0.41,0-0.75,0.34-0.75,0.75v4.5C9.85,7.05,9.5,7.38,9.5,7.72s0.35,0.67,0.7,0.67c1.9,0,3.45,1.54,3.45,3.45 S12.1,15.3,10.2,15.3c-1.2,0-2.26-0.62-2.86-1.55c-0.24-0.37-0.78-0.48-1.15-0.24c-0.37,0.24-0.48,0.78-0.24,1.15 C6.8,16.1,8.4,16.8,10.2,16.8c2.73,0,4.95-2.22,4.95-4.95C15.15,9.92,13.4,8.25,11.2,8.25z"/></svg>
);
const SQLIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4v2h7v2H4v2h7v2H4v2h7v3a2 2 0 0 0 2 2h5v-2h-5a1 1 0 0 1-1-1v-3h7V4H4zm16 5h-4V6h4v3zM4 11V9h7v2H4zm0-3V6h7v2H4z"/></svg>
);
const TableauIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 12h5v5H2v-5zm6.5 5h5v-5h-5v5zM15 7h5v5h-5V7zm-6.5 0h5v5h-5V7zM2 7h5v5H2V7zm13 10h5v-5h-5v5zM8.5 2h5v5h-5V2zM15 2h5v5h-5V2z"/></svg>
);
const AWSIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.6 15.6c.3.1.5.2.8.2.3 0 .6-.1.8-.2l.1-.1c.2-.1.3-.3.4-.5.1-.2.1-.4.1-.6s0-.5-.1-.7c-.1-.2-.2-.4-.4-.5l-3-1.8c-.3-.2-.6-.3-.9-.3s-.6.1-.9.3l-3 1.8c-.2.1-.3.3-.4.5-.1.2-.1.4-.1.7s0 .5.1.7c.1.2.2.4.4.5l.1.1c.2.1.5.2.8.2.3 0 .6-.1.8-.2l1.3-1.1zM21.2 8.3l-3-1.8c-.3-.2-.6-.3-.9-.3s-.6.1-.9.3L13.6 8v3.4c0 .3-.1.6-.2.8-.2.2-.4.4-.7.4-.3 0-.5-.1-.7-.3l-1.3-1.1-1.3 1.1c-.2.1-.5.2-.8.2s-.6-.1-.8-.2l-3-1.8c-.3-.2-.6-.3-.9-.3s-.6.1-.9.3l-3 1.8c-.2.1-.3.3-.4.5-.1.2-.1.4-.1.7s0 .5.1.7c.1.2.2.4.4.5l3 1.8c.3.2.6.3.9.3s.6-.1.9-.3L7.7 12V8.6c0-.3.1-.6.2-.8.2-.2.4-.4.7-.4.3 0 .5.1.7.3l1.3 1.1 1.3-1.1c.2-.1.5-.2.8-.2s.6.1.8.2l3 1.8c.3.2.6.3.9.3s.6-.1.9-.3l3-1.8c.2-.1.3-.3.4-.5.1-.2.1-.4-.1-.7s.1-.5-.1-.7z"/></svg>
);
const PandasIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 6h2v12H7zm4 0h2v12h-2zm4 0h2v12h-2zM4 3h16v2H4zm0 16h16v2H4z"/></svg>
);
const GithubIconCube = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/></svg>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-down">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Asish Bag</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 animate-fade-in-down animation-delay-300">
              A Passionate Data Analyst
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-12 animate-fade-in-up animation-delay-600">
              I transform data into insights and build solutions that drive business decisions. Exploring the world of data, one analysis at a time.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-6 mb-12 animate-fade-in-up animation-delay-900">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125 duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-1200"
            >
              Get in Touch
            </a>
          </div>

          {/* Right Column: 3D Cube Animation */}
          <div className="hidden md:flex justify-center items-center">
            <div className="cube-container">
              <div className="cube">
                <div className="cube-face front"><PythonIcon /></div>
                <div className="cube-face back"><SQLIcon /></div>
                <div className="cube-face right"><TableauIcon /></div>
                <div className="cube-face left"><AWSIcon /></div>
                <div className="cube-face top"><PandasIcon /></div>
                <div className="cube-face bottom"><GithubIconCube /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <a href="#about" aria-label="Scroll to about section" className="scroll-down">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-500 hover:text-cyan-400 transition-colors">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="8 12 12 16 16 12"></polyline>
          <line x1="12" y1="8" x2="12" y2="16"></line>
        </svg>
      </a>
    </section>
  );
};

export default Hero;
