import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import './Services.css';

const Services = () => {
  const location = useLocation();

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

  // Scroll to service when hash is present in URL
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Remove the # symbol
      const serviceId = hash.substring(1);
      let retryCount = 0;
      const maxRetries = 10;
      
      // Wait for DOM to be ready and animations to settle
      const scrollToService = () => {
        const serviceElement = document.getElementById(serviceId);
        if (serviceElement) {
          // Calculate center position
          const elementRect = serviceElement.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
          
          window.scrollTo({
            top: Math.max(0, middle), // Ensure we don't scroll to negative position
            behavior: 'smooth'
          });
        } else if (retryCount < maxRetries) {
          // Retry if element not found (might still be rendering)
          retryCount++;
          setTimeout(scrollToService, 100);
        }
      };

      // Initial delay to ensure DOM is ready
      setTimeout(scrollToService, 200);
    }
  }, [location.hash]);

  const services = [
    {
      title: "Community Outreach",
      slug: "community-outreach",
      location: "Meeting Practical Needs While Delivering Truth",
      description: "Practical, hands-on care that meets people where they are. Through food access, in-home visits, block parties, and community health education, Aletheia brings truth and provision directly into low-income neighborhoods across Redding and Shasta County. We connect people to local churches for lasting community and discipleship, so care doesn't end at the doorstep. It becomes a family they belong to. Every gathering and every visit is an opportunity to restore dignity, build real relationship, and point people toward the healing God has already provided.",
      image: "/CommunityOutreach-placeholder.svg",
      features: ["Food access programs", "Block parties + community events", "Church connection + discipleship", "Community health education"]
    },
    {
      title: "Coaching & Discipleship",
      slug: "coaching-and-discipleship",
      location: "Group + Community Formats",
      description: "Practical, truth-based coaching that helps individuals renew their minds, steward their health, and walk into the complete healing God has already provided. Clients gain tools, accountability, and a clear path toward long-term transformation.",
      image: "/Coaching.png",
      features: ["Group coaching", "Personalized Support", "Biblical foundation", "Long-term transformation"]
    },
    {
      title: "Heaven in Health Conferences",
      slug: "heaven-in-health-conferences",
      location: "Public Gatherings for Revelation + Healing",
      description: "Live gatherings that teach the biblical foundation for God-intended health and activate people to live it out. Attendees leave with revelation, practical steps, and the confidence to build Promised-Land \"health zones\" in their own lives and communities.",
      image: "/Conferences.jpg",
      features: ["Live teachings", "Practical activation", "Community building", "Revelation & healing"]
    },
    {
      title: "Corporate Wellness & Culture Seminars",
      slug: "corporate-wellness-and-culture-seminars",
      location: "Bringing Kingdom Health to Workplaces",
      description: "On-site or virtual trainings that bring Kingdom principles into the workplace—helping teams reduce stress, strengthen health habits, and build a culture rooted in truth and stewardship. Businesses receive actionable strategies that improve wellbeing and performance.",
      image: "/Seminars.jpg",
      features: ["On-site & virtual", "Team wellness", "Stress reduction", "Performance improvement"]
    },
    {
      title: "Prison Workshops & Inmate Equipping",
      slug: "prison-workshops-and-inmate-equipping",
      location: "Restoring Identity and Healing Behind Bars",
      description: "Biblically grounded workshops that restore identity, renew mindsets, and teach practical health stewardship—leading to real transformation that lasts beyond release. Inmates gain truth, tools, and stabilizing habits that dramatically reduce recidivism and create a healthier future for themselves and their families.",
      image: "/Prison.png",
      features: ["Identity restoration", "Mindset renewal", "Practical tools", "Reduced recidivism"]
    }
  ];

  return (
    <div className="services">
      <SEO
        title="Programs & Services"
        description="Transformative programs designed to bring healing into every area of life. Coaching & discipleship, Heaven in Health conferences, corporate wellness seminars, and prison workshops."
        path="/services"
      />
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content reveal-on-scroll" data-animate="zoom">
            <p className="services-hero-label">OUR OFFERINGS</p>
            <h1 className="services-hero-title">Programs & Services</h1>
            <p className="services-hero-subtitle" style={{ '--delay': '120ms' }}>
              Transformative programs designed to bring healing into every area of life
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
              id={service.slug}
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
                <Link to={`/contact?subject=${encodeURIComponent(service.title)}`} className="service-card-cta">
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
              Contact us to learn more about our programs and how we can support your journey or your organization to complete healing.
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
