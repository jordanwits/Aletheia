import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GetInvolved.css';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    interest: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: '',
      interest: ''
    });
  };

  return (
    <div className="get-involved">
      {/* Hero */}
      <section className="get-involved-hero">
        <div className="container">
          <h1 className="page-title">Get Involved</h1>
          <p className="page-subtitle">
            Partner With Us to Bring Healing & Restoration
          </p>
        </div>
      </section>

      {/* Give Section */}
      <section className="give-section">
        <div className="container">
          <h2 className="section-title">Give</h2>
          <p className="section-text">
            Your financial partnership enables us to bring healing and restoration to individuals, 
            families, and communities. Every gift helps us reach more people with the truth about 
            God's design for complete healing.
          </p>
          <div className="donate-box">
            <a 
              href="https://www.zeffy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Donate via Zeffy
            </a>
            <p className="donate-note">
              Secure donations processed through Zeffy
            </p>
          </div>
        </div>
      </section>

      {/* Host a Workshop */}
      <section className="host-section">
        <div className="container">
          <h2 className="section-title">Host a Healing Workshop</h2>
          <p className="section-text">
            Bring healing education and transformation to your community, church, or organization. 
            We offer workshops on biblical health, mind renewal, and practical stewardship that 
            can be customized to your group's needs.
          </p>
          <div className="action-box">
            <Link to="/contact" className="btn btn-secondary">
              Request a Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* Become a Partner Organization */}
      <section className="partner-section">
        <div className="container">
          <h2 className="section-title">Become a Partner Organization</h2>
          <p className="section-text">
            If you know an organization that could benefit from our support—whether it's a church, 
            ministry, business, or correctional facility—we would love to come speak and empower 
            their staff. Partner with us to bring Kingdom health principles to your organization.
          </p>
          <div className="action-box">
            <Link to="/contact" className="btn btn-secondary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer or Join Prayer Team */}
      <section className="volunteer-section">
        <div className="container">
          <h2 className="section-title">Volunteer or Join the Prayer Team</h2>
          <p className="section-text">
            We believe in the power of prayer and the importance of community. If you feel called 
            to support our mission through prayer or volunteer service, we would love to connect 
            with you.
          </p>
          <form className="volunteer-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="interest">I'm interested in:</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="prayer">Prayer Team</option>
                <option value="volunteer">Volunteer Service</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us how you'd like to get involved..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Sponsor Healing Resources */}
      <section className="sponsor-section">
        <div className="container">
          <h2 className="section-title">Sponsor Healing Resources</h2>
          <p className="section-text">
            Help us create and distribute healing resources—from devotionals and workbooks to 
            conference materials and educational content. Your sponsorship makes these resources 
            accessible to those who need them most.
          </p>
          <div className="action-box">
            <Link to="/contact" className="btn btn-secondary">
              Learn More About Sponsorship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;

