import React from 'react';

function NavBar({setCurrentPage}) {
  return <div id="navbar">
      <span onClick={() => setCurrentPage("AboutMe")}>About Me</span>
      <span onClick={() => setCurrentPage("Contact")}>Contact</span>
      <span onClick={() => setCurrentPage("Portfolio")}>Portfolio</span>
      <span onClick={() => setCurrentPage("Resume")}>Resume</span>
  </div>;
}

export default NavBar;
