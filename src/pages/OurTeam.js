import React, { useEffect } from 'react';
import './OurTeam.css';

const teamMembers = [
  { name: 'Alexandra Caldow', role: 'Board Member', photo: '/Alexandra Caldow.png' },
  { name: 'Cindy Bullis', role: 'Board Member', photo: '/Cindy Bullis.png', imageClass: 'lower-slight' },
  { name: "Nora A'Bell", role: 'Board Member', photo: "/Nora A'Bell.jpg" },
  { name: 'Glorious McAllister', role: 'Administrative Coordinator', photo: '/Glorious McAllister.png', imageClass: 'lift-more' },
  { name: 'Alisa', role: 'Ministry Support Leader', photo: '/Alisa JPEG.jpg', preservePosition: true },
  { name: 'Sarah Cooper', role: 'Ministry Support Leader', photo: '/Sarah Cooper.jpg' },
  { name: 'Matt Pratten', role: 'Ministry Support Leader', photo: '/Matt Pratten.jpeg', preservePosition: true },
  { name: 'Carrie Langum', role: 'Ministry Support Leader', photo: '/Carrie Langum Headshot.jpeg' },
  { name: 'Stephen Murphy', role: 'Ministry Support Leader', photo: '/Stephen Murphy.jpeg', preservePosition: true },
];

const OurTeam = () => {
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
    <div className="our-team">
      {/* Hero */}
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-text reveal-on-scroll" data-animate="zoom">
            <h1 className="page-title">Our Team</h1>
            <p className="page-subtitle" style={{ '--delay': '120ms' }}>
              Meet the people behind Aletheia Healing & Restoration
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-image-placeholder reveal-on-scroll" data-animate="left">
              <img
                src="/Kate Photoshoot-46--MAIN .JPG"
                alt="Kate Hamilton, Founder of Aletheia"
                className="founder-image"
              />
            </div>
            <div className="founder-info reveal-on-scroll" data-animate="right" style={{ '--delay': '120ms' }}>
              <h2 className="founder-name">Kate Hamilton</h2>
              <p className="founder-title">Founder</p>
              <p className="founder-quote">
                "Complete Healing is Heaven's promise. Our mission is to help you experience it."
              </p>
              <div className="founder-bio">
                <p>
                  Kate Hamilton&apos;s journey from addiction and sickness to revelation and healing 
                  forms the foundation of Aletheia. Through her own transformation, she discovered 
                  that complete healing is not a distant dream but a present reality available to 
                  all who believe and steward what God has already provided.
                </p>
                <p>
                  Her testimony stands as a testament to the power of truth, faithful stewardship, 
                  and union with Christ. Today, she is passionate about helping others experience 
                  the same transformation—walking them from brokenness to wholeness, from sickness 
                  to health, and from bondage to the freedom that comes through knowing and living 
                  God&apos;s truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members-section">
        <div className="container">
          <h2 className="section-title reveal-on-scroll" data-animate="zoom">Our Team</h2>
          <p className="team-intro reveal-on-scroll" style={{ '--delay': '100ms' }}>
            We are a dedicated team committed to bringing Heaven&apos;s healing to individuals, families, 
            and communities through truth, stewardship, and faithful service.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                className="team-member-card reveal-on-scroll"
                key={member.name}
                data-animate={index % 2 === 0 ? 'left' : 'right'}
                style={{ '--delay': `${index * 90}ms` }}
              >
                <div className="team-member-image">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className={[
                      member.preservePosition ? 'preserve-position' : '',
                      member.imageClass || '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;

