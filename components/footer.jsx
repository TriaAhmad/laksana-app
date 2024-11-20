import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cyan-100 mt-20 py-8 px-8">
      
      <div className="flex items-center justify-between">
       
        <div className="text-lg font-bold text-gray-800">
          LAKSANA
        </div>

        
        <nav className="space-x-6 text-xs md:text-lg font-medium text-gray-700">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
        </nav>
      </div>

      
      <hr className="border-black mt-4" />

      
      <div className="text-left text-xs text-gray-600 mt-4">
        ©2024 UPA TIK POLNEP
      </div>
    </footer>
  );
};

export default Footer;
