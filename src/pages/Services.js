import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      title: "Coaching & Discipleship",
      location: "Individual + Group Formats",
      description: "Practical, truth-based coaching that helps individuals renew their minds, steward their health, and walk into the complete healing God has already provided. Clients gain tools, accountability, and a clear path toward long-term transformation.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["One-on-one sessions", "Group coaching", "Biblical foundation", "Long-term transformation"]
    },
    {
      title: "Heaven in Health Conferences",
      location: "Public Gatherings for Revelation + Healing",
      description: "Live gatherings that teach the biblical foundation for God-intended health and activate people to live it out. Attendees leave with revelation, practical steps, and the confidence to build Promised-Land \"health zones\" in their own lives and communities.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Live teachings", "Practical activation", "Community building", "Revelation & healing"]
    },
    {
      title: "Corporate Wellness & Culture Seminars",
      location: "Bringing Kingdom Health to Workplaces",
      description: "On-site or virtual trainings that bring Kingdom principles into the workplace—helping teams reduce stress, strengthen health habits, and build a culture rooted in truth and stewardship. Businesses receive actionable strategies that improve wellbeing and performance.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["On-site & virtual", "Team wellness", "Stress reduction", "Performance improvement"]
    },
    {
      title: "Prison Workshops & Inmate Equipping",
      location: "Restoring Identity and Healing Behind Bars",
      description: "Biblically grounded workshops that restore identity, renew mindsets, and teach practical health stewardship—leading to real transformation that lasts beyond release. Inmates gain truth, tools, and stabilizing habits that dramatically reduce recidivism and create a healthier future for themselves and their families.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Identity restoration", "Mindset renewal", "Practical tools", "Reduced recidivism"]
    }
  ];

  return (
    <div className="services">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content reveal-on-scroll" data-animate="zoom">
            <p className="services-hero-label">OUR OFFERINGS</p>
            <h1 className="services-hero-title">Programs & Services</h1>
            <p className="services-hero-subtitle" style={{ '--delay': '120ms' }}>
              Transformative programs designed to bring Heaven's healing into every area of life
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list-section">
        <div className="container">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${index % 2 === 0 ? 'service-card-left' : 'service-card-right'} reveal-on-scroll`}
              data-animate={index % 2 === 0 ? 'left' : 'right'}
              style={{ '--delay': `${index * 140}ms` }}
            >
              <div className="service-card-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-card-image"
                />
              </div>
              <div className="service-card-content">
                <div className="service-card-header">
                  <span className="service-card-badge">{service.location}</span>
                  <h2 className="service-card-title">{service.title}</h2>
                </div>
                <p className="service-card-description">{service.description}</p>
                <div className="service-card-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="service-feature-item">
                      <svg className="service-feature-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="service-card-cta">
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="services-cta-section"
        style={{
          backgroundImage: `linear-gradient(rgba(62, 68, 89, 0.2), rgba(45, 52, 66, 0.2)), url('/MinimalPlant.jpg')`
        }}
      >
        <div className="container">
          <div className="services-cta-content reveal-on-scroll" data-animate="zoom" style={{ '--delay': '140ms' }}>
            <h2 className="services-cta-title">Ready to Begin Your Healing Journey?</h2>
            <p className="services-cta-text">
              Contact us to learn more about our programs and how we can support your journey to complete healing.
            </p>
            <div className="services-cta-buttons">
              <Link to="/contact" className="btn btn-primary services-cta-btn-primary">
                Contact Us
              </Link>
              <Link to="/get-involved" className="btn btn-outline services-cta-btn-outline">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
