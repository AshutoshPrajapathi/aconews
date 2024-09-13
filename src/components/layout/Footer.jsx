import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <p className="text-sm">© 2024 ACONEWS. All rights reserved.</p>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/" className="text-blue-400 hover:underline">Home</Link>
          <Link to="/categories" className="text-blue-400 hover:underline">Categories</Link>
          <Link to="/about" className="text-blue-400 hover:underline">About</Link>
          <Link to="/contact" className="text-blue-400 hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;