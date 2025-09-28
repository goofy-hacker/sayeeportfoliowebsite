import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          {/* Logo */}
          <a href="#home" className="text-xl font-typewriter text-matrix-400">
            <span className="text-matrix-500">Sayee.dev</span>
          </a>
          
          {/* Copyright */}
          <p className="text-sm text-matrix-300">
            © {currentYear} Sayee. All rights reserved.
          </p>
          
          {/* Made with love */}
          <p className="flex items-center text-sm text-matrix-300">
            Made with <span className="mx-1 text-red-500">❤</span> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;