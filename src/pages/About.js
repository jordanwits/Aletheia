import React from 'react';
import './About.css';

const About = () => {
  const coreValues = [
    'Truth',
    'Trust',
    'Wholeness',
    'Peace',
    'Honor',
    'Child-likeness',
    'Purity',
    'Identity in HIM'
  ];

  return (
    <div className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Aletheia</h1>
          <p className="page-subtitle">
            From Addiction to Revelation • From Sick to Healed
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="story-section">
        <div className="container">
          <h2 className="section-title">The Story of Aletheia</h2>
          <div className="story-content">
            <p className="story-text">
              Aletheia Healing & Restoration was born from a journey of transformation—from 
              addiction to revelation, from sickness to healing. Our founder experienced firsthand 
              the power of God's truth to bring complete restoration when we align our beliefs with 
              His Word and steward our health according to His design.
            </p>
            <p className="story-text">
              The name "Aletheia" comes from the Greek word for truth—not just factual information, 
              but the living, transformative truth that sets us free. We believe that complete healing 
              is not a distant hope, but a present reality available to all who believe and steward 
              what God has already provided.
            </p>
          </div>
        </div>
      </section>

      {/* Why Truth Matters */}
      <section className="truth-section">
        <div className="container">
          <h2 className="section-title">Why Truth Matters</h2>
          <p className="truth-text">
            In a world filled with conflicting health information and broken systems, we anchor 
            ourselves in the unchanging truth of God's Word. Truth is not just what we know—it's 
            what transforms us. When we align our beliefs with God's truth about healing, health, 
            and wholeness, we step into the Promise Land of complete restoration that He has 
            already prepared for us.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Aletheia Means */}
      <section className="meaning-section">
        <div className="container">
          <h2 className="section-title">What "Aletheia" Means</h2>
          <div className="meaning-content">
            <p className="meaning-text">
              <strong>Aletheia</strong> (ἀλήθεια) is the Greek word for truth. But it means more 
              than just factual accuracy—it represents the reality that sets us free, the truth 
              that transforms, and the foundation upon which complete healing is built.
            </p>
            <p className="meaning-text">
              In John 8:32, Jesus said, "You will know the truth, and the truth will set you free." 
              This is the heart of Aletheia—we believe that when we know and live according to God's 
              truth about health and healing, we experience the freedom and wholeness He intended 
              from the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="founder-section">
        <div className="container">
          <h2 className="section-title">Meet Our Founder</h2>
          <div className="founder-content">
            <div className="founder-info">
              <h3>Kate Hamilton</h3>
              <p className="founder-quote">
                "Complete Healing is Heaven's promise. Our mission is to help you experience it."
              </p>
              <p className="founder-bio">
                Kate Hamilton's journey from addiction and sickness to revelation and healing 
                forms the foundation of Aletheia. Through her own transformation, she discovered 
                that complete healing is not a distant dream but a present reality available to 
                all who believe and steward what God has already provided.
              </p>
              <p className="founder-bio">
                Her testimony stands as a testament to the power of truth, faithful stewardship, 
                and union with Christ. Today, she is passionate about helping others experience 
                the same transformation—walking them from brokenness to wholeness, from sickness 
                to health, and from bondage to the freedom that comes through knowing and living 
                God's truth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

