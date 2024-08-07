import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#">Home</a></li>
        <li className="navbar-item"><a href="#">Board</a></li>
        <li className="navbar-item"><a href="#">Announcements</a></li>
        <li className="navbar-item"><a href="#">My Information</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
