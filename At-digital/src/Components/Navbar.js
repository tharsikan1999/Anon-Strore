import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
import logo from '../img/Logo.png';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="" id="logo" />
      </Link>
      <div className={`navbar-Toggler ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <div className='lineOne'></div>
        <div className='lineTwo'></div>
        <div className='lineThree'></div>
      </div>

      <div className={`navbar-nav ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/service" className="link" onClick={closeNav}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/about" className="link" onClick={closeNav}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link" onClick={closeNav}>
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/careers" className="link" onClick={closeNav}>
              CAREERS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
