import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BiSolidHome } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" style={{height: "1.2em"}}><HiHome /></Link>
          <Link to="/">Why Us?</Link>
          <Link to="/">Features</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`white ${mobileMenuOpen ? 'active' : ''}`}></div>
    </>
  );
};

export default Navbar;
