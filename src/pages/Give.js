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
              Together, we're building "Promised Land Health Zones" across the world—places where Heaven's way of living becomes normal and complete healing is expected, not rare. As a faith based nonprofit ministry, your generosity makes it possible for truth to take root in individuals, families, workplaces, and entire communities—so that health, peace, and restoration can flourish as God intended.
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

      {/* Different Ways to Give */}
      <section className="ways-to-give-banner reveal-on-scroll">
        <h2 className="ways-to-give-banner-title">Different Ways to Give</h2>
      </section>

      <section className="ways-to-give-section">
        <div className="container ways-to-give-container">
          <div className="way-to-give-row reveal-on-scroll" style={{ '--delay': '0ms' }}>
            <div className="way-to-give-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10L12 3L22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 10V21M10 10V21M14 10V21M19 10V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="way-to-give-content">
              <p className="way-to-give-kicker">Donor Advised Funds (DAF)</p>
              <h3 className="way-to-give-title">Give Through Your Donor Advised Fund</h3>
              <p className="way-to-give-body">
                If you would like to recommend a grant through your donor advised fund, search by our legal name Aletheia or via EIN 33-4937289. If our organization is not listed by your sponsoring organization, you may provide the information below or contact us at{' '}
                <a href="mailto:info@aletheialife.org">info@aletheialife.org</a>, and we'll be happy to assist you.
              </p>
              <ul className="way-to-give-details">
                <li><strong>Full legal nonprofit name:</strong> Aletheia</li>
                <li><strong>EIN number:</strong> 33-4937289</li>
                <li><strong>Mailing address:</strong> 522 W Riverside St. Spokane, Washington 99201</li>
              </ul>
            </div>
          </div>

          <div className="way-to-give-row reveal-on-scroll" style={{ '--delay': '80ms' }}>
            <div className="way-to-give-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 9.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 13.5H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 14.5L17 16.5L20.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="way-to-give-content">
              <h3 className="way-to-give-title">Giving by Check</h3>
              <p className="way-to-give-body">
                If you prefer to give by check, please make checks payable to Aletheia and mail them to the address below. Every gift helps us expand our mission of bringing hope, healing, and restoration to individuals and communities through Christ.
              </p>
              <ul className="way-to-give-details">
                <li><strong>Payable to:</strong> Aletheia</li>
                <li><strong>Mailing address:</strong> 522 W Riverside St. Spokane, Washington 99201</li>
              </ul>
            </div>
          </div>

          <div className="way-to-give-row reveal-on-scroll" style={{ '--delay': '160ms' }}>
            <div className="way-to-give-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 7H21V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="way-to-give-content">
              <p className="way-to-give-kicker">Stock &amp; Non-Cash Giving</p>
              <h3 className="way-to-give-title">Give Stock or Other Non-Cash Assets</h3>
              <p className="way-to-give-body">
                We gratefully accept gifts of appreciated stock and certain other non-cash assets. To make a gift in this way, please contact us at{' '}
                <a href="mailto:info@aletheialife.org">info@aletheialife.org</a>, and we'll provide simple instructions for completing your donation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;

