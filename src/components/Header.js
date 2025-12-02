import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/AletheiaLogo.png" alt="Aletheia Healing & Restoration" className="logo-image" />
          </Link>
        </div>
        
        <div className="header-divider"></div>
        
        <div className="header-bottom">
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/mission-vision" 
              className={isActive('/mission-vision') ? 'active' : ''}
              onClick={closeMenu}
            >
              Our Mission/Vision
            </Link>
            <Link 
              to="/get-involved" 
              className={isActive('/get-involved') ? 'active' : ''}
              onClick={closeMenu}
            >
              Get Involved
            </Link>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
              onClick={closeMenu}
            >
              Services Provided
            </Link>
            <Link 
              to="/our-team" 
              className={isActive('/our-team') ? 'active' : ''}
              onClick={closeMenu}
            >
              Our Team
            </Link>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

