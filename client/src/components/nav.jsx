import React from 'react';
import './nav.css';

const Nav = ({ showMenu, toggleMenu }) => {
  return (
    <nav>
      <div className="logo">Online Store</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={showMenu ? 'show' : ''}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Nav;