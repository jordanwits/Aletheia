import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <div className="mission-vision">
      {/* Hero */}
      <section className="mission-hero">
        <div className="container">
          <h1 className="page-title">Our Mission & Vision</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <p className="mission-statement">
              Complete Healing is Heaven's promise. Our mission is to help you experience it.
            </p>
            <p className="mission-author">— Kate Hamilton</p>
            <p className="mission-description">
              We believe that complete healing is not a distant hope, but a present reality available 
              to all who believe and steward what God has already provided. Our mission is to guide 
              individuals, families, and communities into the Promise Land of complete restoration 
              through truth, faithful stewardship, and union with Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <h2 className="section-title">Our Vision</h2>
          <div className="vision-content">
            <p className="vision-statement">
              To see individuals, families, and communities walking in complete healing—spirit, soul, 
              and body—as God intended from the beginning. We envision a world where Heaven's standard 
              of care is the norm, where truth sets people free, and where the healing of the nations 
              flows from the Tree of Life.
            </p>
            <div className="vision-points">
              <div className="vision-point">
                <h3>Truth-Based Transformation</h3>
                <p>
                  Renewing minds with God's Word to experience lasting change and freedom.
                </p>
              </div>
              <div className="vision-point">
                <h3>Complete Healing</h3>
                <p>
                  Restoring wholeness in spirit, soul, and body through faithful stewardship.
                </p>
              </div>
              <div className="vision-point">
                <h3>Kingdom Impact</h3>
                <p>
                  Bringing Heaven's healing to workplaces, communities, and correctional facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Message */}
      <section className="message-section">
        <div className="container">
          <h2 className="section-title">The Message</h2>
          <h3 className="message-title">Heaven in Healthcare</h3>
          <p className="message-description">
            Promise-Land Health • Heaven Intended Health • Health as God Intended • 
            Health Heaven's Way • Heaven's Way Health • Heaven's Way to Health • 
            Heaven's Standard of Care • Kingdom Healthcare
          </p>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;

