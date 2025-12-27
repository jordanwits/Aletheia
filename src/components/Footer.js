import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Navigate to home page with hash
      navigate('/#contact');
      // Wait for page to load, then scroll to contact section
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Aletheia</h3>
            <p>Healing & Restoration</p>
            <p className="footer-tagline">
              Complete Healing is Heaven's promise. Our mission is to help you experience it.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mission-vision">Our Mission/Vision</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/services">Services Provided</Link></li>
              <li><Link to="/our-team">Our Team</Link></li>
              <li><Link to="/#contact" onClick={handleContactClick}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://chat.whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
              <li><Link to="/#contact" onClick={handleContactClick}>Contact Us</Link></li>
              <li><Link to="/get-involved">Partner with Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aletheia Healing & Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

