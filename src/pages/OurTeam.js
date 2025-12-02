import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  return (
    <div className="our-team">
      {/* Hero */}
      <section className="team-hero">
        <div className="container">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">
            Meet the people behind Aletheia Healing & Restoration
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-image-placeholder">
              <div className="placeholder-box">
                <span>Photo</span>
              </div>
            </div>
            <div className="founder-info">
              <h2 className="founder-name">Kate Hamilton</h2>
              <p className="founder-title">Founder</p>
              <p className="founder-quote">
                "Complete Healing is Heaven's promise. Our mission is to help you experience it."
              </p>
              <div className="founder-bio">
                <p>
                  Kate Hamilton's journey from addiction and sickness to revelation and healing 
                  forms the foundation of Aletheia. Through her own transformation, she discovered 
                  that complete healing is not a distant dream but a present reality available to 
                  all who believe and steward what God has already provided.
                </p>
                <p>
                  Her testimony stands as a testament to the power of truth, faithful stewardship, 
                  and union with Christ. Today, she is passionate about helping others experience 
                  the same transformation—walking them from brokenness to wholeness, from sickness 
                  to health, and from bondage to the freedom that comes through knowing and living 
                  God's truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="team-intro">
            We are a dedicated team committed to bringing Heaven's healing to individuals, families, 
            and communities through truth, stewardship, and faithful service.
          </p>
          <div className="team-grid">
            {/* Placeholder for additional team members */}
            <div className="team-member-card">
              <div className="team-member-image">
                <div className="placeholder-box">
                  <span>Photo</span>
                </div>
              </div>
              <h3 className="team-member-name">Team Member</h3>
              <p className="team-member-role">Role</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;

