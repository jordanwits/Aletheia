import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './HeavenInHealthcare.css';

// Routes through the existing /contact redirect, which drops the visitor on the
// home page "Get in Touch" form with the subject pre-selected.
const CONTACT_LINK = `/contact?subject=${encodeURIComponent('Heaven in Healthcare')}`;

const caseStudySections = [
  {
    title: 'Program Description',
    paragraphs: [
      'Modern medicine can measure almost everything about the body. Heaven in Healthcare exists to find out what happens when prayer, Scripture, Christian community, and the presence of God are brought alongside excellent clinical care, deliberately and measured rigorously.'
    ]
  },
  {
    title: 'The Evidence',
    paragraphs: [
      'In Phase One, roughly 120 high-risk participants completed a 90-day Heaven in Healthcare program, pairing intensive health coaching with intentional Christian spiritual care. The results: statistically significant improvement in 17 of 20 measured outcomes, including improved physical health, reduced medication usage, improved sleep, less pain, surgeries averted and improved emotional well-being.'
    ]
  },
  {
    title: 'An Unprecedented Door Has Opened',
    paragraphs: [
      'In July 2026, Heaven in Healthcare leaders met with the U.S. Department of Health and Human Services Faith Center in Washington, D.C. to present the project, the results, and the vision for faith-integrated care. We’re excited to announce that we have their support, along with many other large Christian organizations throughout the country.',
      'Our next assignment is to expand the population to prove the concept on a larger scale, and then bring it into the secular market, transforming the healthcare system as we know it by bringing Christ back into the center.'
    ]
  },
  {
    title: 'Call to Action',
    paragraphs: [
      'We’re calling the Church to help us reach a thousand high-risk participants, inviting Christian employers, churches, ministries, healthcare organizations, universities, and faith networks across America into the next phase of Heaven in Healthcare.',
      'A study this size will produce evidence that researchers, healthcare leaders, and policymakers cannot dismiss. A thousand people. A thousand stories. One opportunity to show what happens when the Church brings the reality of Jesus Christ into healthcare, and to advance what American medicine has largely ignored: that Christ cannot be separated from our overall health.',
      'America spends trillions of dollars treating sickness, yet millions remain sick, anxious, isolated, and hopeless, searching for something medicine alone was never meant to provide.',
      'What if the Church produced evidence so compelling that employers, physicians, researchers, and policymakers couldn’t look away? What if, through this, our nation encountered the reality that Jesus Christ is alive not only inside the walls of the church, but in every dimension of life?',
      'The door is open. The evidence is here. Now we need the Church to unify.'
    ]
  },
  {
    title: 'Invitation',
    paragraphs: [
      'If you represent a church, ministry, Christian employer, healthcare organization, university, foundation, or faith network, we invite you to explore joining the next phase of Heaven in Healthcare. Help us build the evidence. Help us reach the next thousand. Help us show the world what God can do.'
    ]
  }
];

const leaders = [
  {
    name: 'Louis M. Gallucci, GBDS',
    role: 'Founding Partner, Heaven in Healthcare',
    photo: '/LouisHeadshot.jpg',
    objectPosition: 'center 22%'
  },
  {
    name: 'Kate Hamilton',
    role: 'Founding Partner, Heaven in Healthcare',
    photo: '/KateHeadshotAlt.jpg',
    objectPosition: 'center center',
    // Shot seated and further back than the other two; crop in on her face.
    zoom: 1.65,
    zoomOrigin: '50% 27%'
  },
  {
    name: 'Dr. Ben Edwards',
    role: 'Medical Advisor',
    photo: '/BenHeadshot.webp',
    objectPosition: 'center 18%'
  }
];

const HeavenInHealthcare = () => {
  const [openSection, setOpenSection] = useState(0);

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

  const toggleSection = (index) => {
    setOpenSection((current) => (current === index ? null : index));
  };

  return (
    <div className="heaven-in-healthcare">
      <SEO
        title="Heaven in Healthcare"
        description="Heaven in Healthcare brings prayer, Scripture, Christian community, and the presence of God alongside excellent clinical care, and measures the results. Explore the case study and join the next phase."
        path="/heaveninhealthcare"
      />

      {/* Hero */}
      <section className="hih-hero">
        <div className="hih-hero-media">
          <img src="/HiH-Building.png" alt="" aria-hidden="true" />
        </div>
        <div className="container">
          <div className="hih-hero-card reveal-on-scroll" data-animate="zoom">
            <div className="hih-lockup">
              <img
                src="/NavyLogo.png"
                alt="Aletheia Healing &amp; Restoration"
                className="hih-lockup-aletheia"
              />
              <span className="hih-lockup-divider" aria-hidden="true"></span>
              <img
                src="/HeavenHealthLogo.jpg"
                alt="Heaven in Healthcare"
                className="hih-lockup-hih"
              />
            </div>
            <p className="hih-hero-label">Corporate Wellness &amp; Culture Seminars</p>
            <h1 className="hih-hero-title">Heaven in Healthcare</h1>
            <p className="hih-hero-lead">
              Modern medicine can measure almost everything about the body. Heaven in Healthcare
              exists to find out what happens when prayer, Scripture, Christian community, and the
              presence of God are brought alongside excellent clinical care, deliberately and
              measured rigorously.
            </p>
            <Link to={CONTACT_LINK} className="btn btn-primary hih-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section
        className="hih-case-section"
        style={{ backgroundImage: "url('/WhiteTexture1.png')" }}
      >
        <div className="container">
          <div className="hih-section-head reveal-on-scroll" data-animate="zoom">
            <p className="hih-eyebrow">The Research</p>
            <h2 className="hih-section-title">Heaven in Healthcare Case Study</h2>
          </div>

          <div className="hih-case-list">
            {caseStudySections.map((section, index) => {
              const isOpen = openSection === index;
              const panelId = `hih-case-panel-${index}`;

              return (
                <div
                  key={section.title}
                  // The open state rides on a data attribute rather than the class
                  // list: the scroll-reveal observer adds `is-visible` imperatively,
                  // and a React className update would wipe it on every toggle.
                  className="hih-case-item reveal-on-scroll"
                  data-open={isOpen ? 'true' : 'false'}
                  style={{ '--delay': `${index * 90}ms` }}
                >
                  <button
                    type="button"
                    className="hih-case-header"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleSection(index)}
                  >
                    <span className="hih-case-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="hih-case-title">{section.title}</span>
                    <svg
                      className="hih-case-chevron"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="hih-case-panel" id={panelId}>
                    <div className="hih-case-panel-inner">
                      {section.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="hih-cta-band">
        <div className="container">
          <div className="hih-cta-band-inner reveal-on-scroll" data-animate="zoom">
            <p className="hih-cta-band-text">
              The door is open. The evidence is here. Now we need the Church to unify.
            </p>
            <Link to={CONTACT_LINK} className="btn hih-btn hih-btn-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section
        className="hih-leaders-section"
        style={{ backgroundImage: "url('/WhiteTexture2.jpg')" }}
      >
        <div className="container">
          <div className="hih-section-head reveal-on-scroll" data-animate="zoom">
            <p className="hih-eyebrow">Leadership</p>
            <h2 className="hih-section-title">Heaven in Healthcare Leaders</h2>
          </div>

          <div className="hih-leaders-grid">
            {leaders.map((leader, index) => (
              <div
                key={leader.name}
                className="hih-leader-card reveal-on-scroll"
                data-animate={index === 1 ? 'zoom' : index === 0 ? 'left' : 'right'}
                style={{ '--delay': `${index * 110}ms` }}
              >
                <div className="hih-leader-image">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    loading="lazy"
                    style={{
                      objectPosition: leader.objectPosition,
                      '--leader-zoom': leader.zoom,
                      '--leader-origin': leader.zoomOrigin
                    }}
                  />
                </div>
                <h3 className="hih-leader-name">{leader.name}</h3>
                <p className="hih-leader-role">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="hih-closing-cta">
        <div className="container">
          <div className="hih-closing-inner reveal-on-scroll" data-animate="zoom">
            <h2 className="hih-closing-title">Join the Next Phase</h2>
            <p className="hih-closing-text">
              Help us build the evidence. Help us reach the next thousand. Help us show the world
              what God can do.
            </p>
            <Link to={CONTACT_LINK} className="btn btn-primary hih-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeavenInHealthcare;
