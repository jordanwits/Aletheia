import React, { useEffect } from 'react';
import './Give.css';

const Give = () => {
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

  return (
    <div className="give">
      {/* Hero Section */}
      <section className="give-hero">
        <div className="container">
          <div className="give-hero-text reveal-on-scroll" data-animate="zoom">
            <p className="give-hero-label">SUPPORT OUR MISSION</p>
            <h1 className="page-title">Give</h1>
            <p className="page-subtitle" style={{ '--delay': '140ms' }}>
              Your generosity helps us bring Christ-centered healing to individuals, families, prisons, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="give-form-section">
        <div className="container">
          <div className="give-form-wrapper reveal-on-scroll" style={{ '--delay': '200ms' }}>
            <div style={{ position: 'relative', overflow: 'hidden', height: '800px', width: '100%' }}>
              <iframe 
                title="Donation form powered by Zeffy" 
                style={{ position: 'absolute', border: 0, top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%' }} 
                src="https://www.zeffy.com/embed/donation-form/heaven-in-health" 
                allowPaymentRequest 
                allowTransparency="true"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;

