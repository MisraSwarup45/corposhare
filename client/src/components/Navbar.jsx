import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" style={{ height: "1.2em" }}><HiHome /></Link>
          <Link to="/">Why Us?</Link>
          <Link to="/">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`white ${scrolled ? 'active' : ''} ${mobileMenuOpen ? 'active' : ''}`}></div>
    </>
  );
};

export default Navbar;
