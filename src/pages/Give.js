import React, { useEffect } from 'react';
import SEO from '../components/SEO';
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
      <SEO
        title="Give"
        description="Your generosity helps us bring Christ-centered healing to individuals, families, prisons, and communities. Support Aletheia's mission of complete healing and restoration."
        path="/give"
      />
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
          <div className="give-intro-text reveal-on-scroll" style={{ '--delay': '100ms' }}>
            <p>
              Together, we're building "Promised Land Health Zones" across the world—places where Heaven's way of living becomes normal and complete healing is expected, not rare. Your generosity makes it possible for truth to take root in individuals, families, workplaces, and entire communities—so that health, peace, and restoration can flourish as God intended.
            </p>
            <p>
              <strong>Note:</strong> We use the Zeffy platform to receive all donations as they allow 100% of your donation to go to Aletheia without transaction fees. The give box below automatically suggests an optional, additional donation to Zeffy but you can simply select "other" and type in zero in the contribution box.
            </p>
            <p>
              Thank you for supporting Aletheia's mission, your contribution is invaluable.
            </p>
          </div>
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

