import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faThList,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu after clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#D2E0FB] shadow p-4 flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 transition-transform transform hover:scale-105 hover:opacity-90 shadow-md hover:shadow-lg"
      >
        ACONEWS
      </Link>

      {/* Hamburger Icon for mobile */}
      <button className="text-2xl md:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Navigation Links */}
      <nav
        className={`fixed top-16 left-0 w-full p-4 transition-transform duration-300 ease-in-out md:relative md:top-0 md:left-auto md:flex md:items-center md:justify-end md:space-x-8 
        ${menuOpen ? "block bg-white shadow-md" : "hidden"} md:block`}
      >
        <Link
          to="/"
          className="flex items-center  py-2 text-lg md:inline-flex"
          onClick={closeMenu}
        >
          <FontAwesomeIcon
            icon={faHome}
            className="text-blue-500 mr-2"
            size="lg"
          />{" "}
          {/* Blue Home Icon */}
          Home
        </Link>
        <Link
          to="/categories"
          className="flex items-center  py-2 text-lg md:inline-flex"
          onClick={closeMenu}
        >
          <FontAwesomeIcon
            icon={faThList}
            className="text-green-500 mr-2"
            size="lg"
          />{" "}
          {/* Green Categories Icon */}
          Categories
        </Link>
        <Link
          to="/search"
          className="flex items-center py-2 text-lg md:inline-flex"
          onClick={closeMenu}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className="text-red-500 mr-2"
            size="lg"
          />{" "}
          {/* Red Search Icon */}
          Search
        </Link>
      </nav>
    </header>
  );
};

export default Header;
