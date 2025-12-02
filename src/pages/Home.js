import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import './Home.css';

const Home = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Calm serene water" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
          
          {/* Text Overlay */}
          <div className="hero-text-overlay">
            <h1 className="hero-title">THE PROMISE OF HEALING</h1>
            <p className="hero-subtitle">ALETHEIA</p>
          </div>
        </div>
      </section>

      {/* Scripture Anchor */}
      <section className="scripture-anchor-section">
        <div className="container">
          <div className="scripture-content">
            <p className="scripture-text">
              "The river was flowing in the middle of the street of the city, and on either side of the river was the Tree of Life… the leaves of the Tree are for the healing of the nations."
            </p>
            <p className="scripture-reference">— Revelation 22:2</p>
            <div className="founders-heart-quote">
              <p className="founders-quote-text">
                "Complete Healing is Heaven's promise. Our mission is to help you experience it."
              </p>
              <p className="founders-quote-author">— Kate Hamilton</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Message */}
      <section className="message-section">
        <div className="message-split">
          <div className="message-image-side">
            <img 
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Serene minimalist architecture" 
              className="message-image"
            />
          </div>
          <div className="message-content-side">
            <div className="message-content">
              <p className="message-headline">THE MESSAGE</p>
              <h2 className="message-title">Heaven in Healthcare</h2>
              <p className="message-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Link to="/beliefs" className="btn btn-primary message-cta">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="beliefs-preview">
        <div className="container">
          <h2 className="section-title">What We Believe</h2>
          <p className="beliefs-statement">
            Complete Healing is our Promise Land and begins with beliefs rooted in God's Word, 
            grows through faithful stewardship, and is sustained in union with Christ.
          </p>
        </div>
      </section>

      {/* Services Provided */}
      <section className="services-preview">
        <div className="services-layout">
          <div className="services-text-side">
            <div className="services-text-content">
              <p className="services-headline">SERVICES</p>
              <h2 className="services-title">Complete Healing Services</h2>
              <p className="services-description">
                Unlock pathways to transformation through our curated programs designed to bring Heaven's healing to your life.
              </p>
            </div>
          </div>
          
          <div className="services-panels">
            <div className="service-panel">
              <div className="service-panel-image">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Coaching & Discipleship" 
                />
              </div>
              <h3 className="service-panel-title">Coaching & Discipleship</h3>
              <p className="service-panel-location">Individual + Group Formats</p>
              <Link to="/services" className="service-panel-btn">DISCOVER</Link>
            </div>

            <div className="service-panel">
              <div className="service-panel-image">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Heaven in Health Conferences" 
                />
              </div>
              <h3 className="service-panel-title">Heaven in Health Conferences</h3>
              <p className="service-panel-location">Public Gatherings for Revelation + Healing</p>
              <Link to="/services" className="service-panel-btn">DISCOVER</Link>
            </div>

            <div className="service-panel">
              <div className="service-panel-image">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Corporate Wellness" 
                />
              </div>
              <h3 className="service-panel-title">Corporate Wellness & Culture Seminars</h3>
              <p className="service-panel-location">Bringing Kingdom Health to Workplaces</p>
              <Link to="/services" className="service-panel-btn">DISCOVER</Link>
            </div>

            <div className="service-panel">
              <div className="service-panel-image">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Prison Workshops" 
                />
              </div>
              <h3 className="service-panel-title">Prison Workshops & Inmate Equipping</h3>
              <p className="service-panel-location">Restoring Identity and Healing Behind Bars</p>
              <Link to="/services" className="service-panel-btn">DISCOVER</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Testimonies of Healing</h2>
          <TestimonialsCarousel />
          <div className="scripture-anchor">
            <p className="scripture-text">
              "The leaves of the tree are for the healing of the nations."
            </p>
            <p className="scripture-ref">Revelation 22:2</p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-header">
            <h2 className="section-title">Get Involved</h2>
            <p className="cta-subtitle">
              Partner with us to bring healing and restoration to individuals, families, and communities.
            </p>
          </div>
          
          <div className="cta-cards">
            <div className="cta-card">
              <div className="cta-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
                </svg>
              </div>
              <h3 className="cta-card-title">Give</h3>
              <p className="cta-card-text">
                Support our mission through financial partnership and help us reach more people with healing.
              </p>
              <Link to="/get-involved" className="cta-card-btn">
                Donate Now
              </Link>
            </div>

            <div className="cta-card">
              <div className="cta-card-icon">
                <img src="/handshake.png" alt="Handshake" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 className="cta-card-title">Partner</h3>
              <p className="cta-card-text">
                Join us as an organization partner to bring Kingdom health principles to your community.
              </p>
              <Link to="/contact" className="cta-card-btn">
                Partner With Us
              </Link>
            </div>

            <div className="cta-card">
              <div className="cta-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="cta-card-title">Volunteer</h3>
              <p className="cta-card-text">
                Serve with us through prayer, volunteer work, or hosting workshops in your area.
              </p>
              <Link to="/get-involved" className="cta-card-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="home-contact-section">
        <div className="home-contact-background">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Serene contact background" 
            className="home-contact-bg-image"
          />
        </div>
        <div className="container">
          <div className="home-contact-content">
            <div className="home-contact-header">
              <h2 className="home-contact-title">Get In Touch</h2>
              <p className="home-contact-subtitle">
                Have a question or want to connect? We'd love to hear from you.
              </p>
            </div>
            
            <form className="home-contact-form" onSubmit={handleContactSubmit}>
              <div className="home-form-row">
                <div className="home-form-group">
                  <label htmlFor="home-contact-name">Name *</label>
                  <input
                    type="text"
                    id="home-contact-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="home-form-group">
                  <label htmlFor="home-contact-email">Email *</label>
                  <input
                    type="email"
                    id="home-contact-email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="home-form-group">
                <label htmlFor="home-contact-subject">Subject</label>
                <input
                  type="text"
                  id="home-contact-subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  placeholder="What's this about?"
                />
              </div>
              <div className="home-form-group">
                <label htmlFor="home-contact-message">Message *</label>
                <textarea
                  id="home-contact-message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows="6"
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary home-contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

