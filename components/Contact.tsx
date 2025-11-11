import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
      </p>
      <a href="mailto:bagasish1@gmail.com" className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 mb-12">
        Say Hello
      </a>
      <div className="flex justify-center space-x-6">
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
    </section>
  );
};

export default Contact;