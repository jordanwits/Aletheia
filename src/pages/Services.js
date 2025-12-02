import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Coaching & Discipleship",
      description: "Individual + Group Formats",
      details: "Personalized coaching and discipleship programs designed to help individuals renew their minds, steward their health, and walk into the complete healing God has already provided. Available in both individual and group formats for accountability, support, and transformation."
    },
    {
      title: "Heaven in Health Conferences",
      description: "Public Gatherings for Revelation + Healing",
      details: "Live gatherings that teach the biblical foundation for God-intended health and activate people to live it out. These public conferences provide revelation, practical steps, and healing experiences that empower attendees to build Promised-Land 'health zones' in their own lives and communities."
    },
    {
      title: "Corporate Wellness & Culture Seminars",
      description: "Bringing Kingdom Health to Workplaces",
      details: "On-site or virtual seminars that bring Kingdom principles into organizations—helping teams reduce stress, strengthen health habits, and build a culture rooted in truth and stewardship. Transform your workplace environment with biblical foundations for wellness and wholeness."
    },
    {
      title: "Prison Workshops & Inmate Equipping",
      description: "Restoring Identity and Healing Behind Bars",
      details: "Biblically grounded workshops that restore identity, renew mindsets, and teach practical health stewardship to those behind bars. These programs lead to real transformation that lasts beyond release, equipping inmates with truth, tools, and stabilizing habits that dramatically reduce recidivism."
    }
  ];

  return (
    <div className="services">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Programs & Services</h1>
          <p className="page-subtitle">
            How We Live Out Our Mission
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <p className="service-details">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <h2 className="section-title">Ready to Begin Your Healing Journey?</h2>
          <p className="cta-text">
            Contact us to learn more about our programs and how we can support your journey to complete healing.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link to="/get-involved" className="btn btn-outline">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

