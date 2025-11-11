import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-gray-500">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Asish Bag. All Rights Reserved.</p>
        <p className="text-sm mt-1">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;