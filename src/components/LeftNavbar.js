// LeftNavbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNavbar.css';

const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <div className="logo">
        <img src="https://via.placeholder.com/50x50.png?text=Logo" alt="Logo" />
      </div>
      <div className="menu">
        <NavLink end to="/" className={classNameFunc} >
          Home
        </NavLink>
        <NavLink end to="/about" className={classNameFunc} >
          About
        </NavLink>
        <NavLink end to="/contact" className={classNameFunc} >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNavbar;
