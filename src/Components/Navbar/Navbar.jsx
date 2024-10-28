
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <section id="navbar">
      <h1>Merida</h1>
      <nav>
        <div className={`nav-links ${isMobile ? 'mobile' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Service</Link></li>
            
            <li><Link to="/testimonial">Testimonial</Link></li>
            <li>
              <Link to="/blog" style={{ textDecoration: "none", color: "#000" }}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/form" style={{ textDecoration: "none", color: "#000" }}>
                Form
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <div>
        <p>Contact</p>
      </div>
    </section>
  );
}

export default Navbar;
