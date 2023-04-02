// LeftNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function LeftNavbar() {
  return (
    <div className="left-navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftNavbar;
