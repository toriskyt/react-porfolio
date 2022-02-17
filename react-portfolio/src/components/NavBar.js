import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return <div id="navbar">
      <Link to="/">About Me</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/resume">Resume</Link>
  </div>;
}

export default NavBar;
