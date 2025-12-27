import React, { useEffect } from 'react';
import './MissionVision.css';

const MissionVision = () => {
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
        rootMargin: '0px 0px -10% 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="mission-vision">
      {/* Hero Section */}
      <section className="mission-vision-hero">
        <div className="mission-vision-hero-media">
          <img
            src="/missionHero.png"
            alt="Light shining through clouds"
            className="mission-vision-hero-image"
          />
          <div className="mission-vision-hero-overlay" />
        </div>

        <div className="container mission-vision-hero-content">
          <div className="mission-vision-hero-text reveal-on-scroll" data-animate="zoom">
            <p className="mission-vision-eyebrow">Mission &amp; Vision</p>
            <h1 className="mission-vision-hero-title">Why Aletheia Exists</h1>
            <p className="mission-vision-hero-subtitle">
              We help people encounter Christ as their source of complete healing—spirit, soul, and body.
            </p>
            <div className="mission-vision-hero-actions">
              <a href="#mission" className="btn btn-primary mission-vision-hero-cta">
                Start Your Healing Journey
              </a>
              <a href="#beliefs" className="btn mission-vision-hero-secondary">
                Invite Us to Speak
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" id="mission">
        <div className="container">
          <div className="mission-layout">
            <div className="mission-image-wrapper reveal-on-scroll" data-animate="left">
              <img 
                src="/OurMission.png" 
                alt="Mission"
                className="mission-image"
              />
            </div>
            <div className="mission-content reveal-on-scroll" data-animate="right" style={{ '--delay': '80ms' }}>
              <h2 className="section-heading">Our Mission</h2>
              <p className="mission-text">
                Aletheia exists to guide individuals toward complete healing by addressing the spiritual and emotional foundations of well-being through Christ. We equip and empower people to experience divine health and live in the abundant life God intended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-layout">
            <div className="vision-content reveal-on-scroll" data-animate="left">
              <h2 className="section-heading">Our Vision</h2>
              <p className="vision-text">
                To see people across the world walk in Heaven's model of health—healed physically, emotionally, and spiritually—by discovering the truth that sets them free. We envision restoration reaching families, workplaces, prisons, and entire communities as God's people learn to live from His truth and His presence.
              </p>
            </div>
            <div className="vision-image-wrapper reveal-on-scroll" data-animate="right" style={{ '--delay': '80ms' }}>
              <img 
                src="/OurVision.jpg" 
                alt="Vision"
                className="vision-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="beliefs-section" id="beliefs">
        <div className="container">
          <div className="beliefs-content">
            <div className="beliefs-header reveal-on-scroll">
              <h2 className="section-heading">Our Beliefs</h2>
              <p className="beliefs-intro">
                We believe that complete healing is God's promise and is made available through the finished work of Jesus Christ. Healing is not earned—it is received through faith, truth, renewed beliefs, and abiding in Him.
              </p>
            </div>
            
            <div className="beliefs-list">
              <div className="belief-item reveal-on-scroll" style={{ '--delay': '0ms' }}>
                <div className="belief-number-badge">1</div>
                <div className="belief-content-wrapper">
                  <h3 className="belief-title">Healing Is God's Intent</h3>
                  <p className="belief-description">
                    Jesus paid the full price for our healing—physically, emotionally, and spiritually. What He accomplished is complete, and we learn to walk in it through faith, truth and surrender.
                  </p>
                </div>
              </div>

              <div className="belief-item reveal-on-scroll" style={{ '--delay': '80ms' }}>
                <div className="belief-number-badge">2</div>
                <div className="belief-content-wrapper">
                  <h3 className="belief-title">Truth Renews and Transforms</h3>
                  <p className="belief-description">
                    Scripture teaches that transformation comes through the renewing of the mind. When our beliefs align with God's Word, our emotions, bodies, and daily lives begin to reflect Heaven's reality.
                  </p>
                </div>
              </div>

              <div className="belief-item reveal-on-scroll" style={{ '--delay': '160ms' }}>
                <div className="belief-number-badge">3</div>
                <div className="belief-content-wrapper">
                  <h3 className="belief-title">Stewardship Is an Act of Worship</h3>
                  <p className="belief-description">
                    We honor God by caring for our physical health—moving our bodies, eating healthy nourishing food, setting healthy habits, and pursuing peace. Stewardship doesn't replace faith; it partners with it.
                  </p>
                </div>
              </div>

              <div className="belief-item reveal-on-scroll" style={{ '--delay': '240ms' }}>
                <div className="belief-number-badge">4</div>
                <div className="belief-content-wrapper">
                  <h3 className="belief-title">Words and Thoughts Carry Power</h3>
                  <p className="belief-description">
                    The Bible teaches that life and death are in the power of the tongue. Our thoughts and words shape our health, habits, and outcomes. We intentionally steward our thoughts and words by lining up with the truth in His word with what we speak and believe.
                  </p>
                </div>
              </div>

              <div className="belief-item reveal-on-scroll" style={{ '--delay': '320ms' }}>
                <div className="belief-number-badge">5</div>
                <div className="belief-content-wrapper">
                  <h3 className="belief-title">Healing Is Personal and Spirit-Led</h3>
                  <p className="belief-description">
                    There is no formula for healing. Each person receives a custom blueprint from the Lord as they grow in intimacy with Him. He knows the root of every symptom and leads us step by step.
                  </p>
                </div>
              </div>

              <div className="belief-item reveal-on-scroll" style={{ '--delay': '400ms' }}>
                <div className="belief-number-badge">6</div>
                <div className="belief-content-wrapper">
                  <h3 className="belief-title">Union With Christ Is Our Source of Life</h3>
                  <p className="belief-description">
                    We live "as one" with Him—abiding in His presence, trusting His voice, and drawing from His strength. Healing flows from relationship, not striving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scriptures Section */}
      <section className="scriptures-section">
        <div className="scriptures-background">
          <img 
            src="/VersesBkg.jpg" 
            alt="Scriptures background"
            className="scriptures-bg-image"
          />
          <div className="scriptures-overlay"></div>
        </div>
        <div className="container">
          <div className="scriptures-header reveal-on-scroll">
            <p className="scriptures-eyebrow">Scripture Foundation</p>
            <h2 className="scriptures-heading">Scriptures We Build On</h2>
            <p className="scriptures-subtitle">
              Truths we return to as we teach complete healing—freedom, renewal, and restoration for every person.
            </p>
          </div>

          <div className="scriptures-grid">
            <div className="scripture-card reveal-on-scroll" style={{ '--delay': '0ms', '--duration': '1.35s' }}>
              <div className="scripture-pill">Freedom</div>
              <p className="scripture-quote">
                “And you shall know the truth, and the truth shall make you free.”
              </p>
              <p className="scripture-reference">John 8:32</p>
            </div>

            <div className="scripture-card reveal-on-scroll" style={{ '--delay': '700ms', '--duration': '1.35s' }}>
              <div className="scripture-pill">Renewal</div>
              <p className="scripture-quote">
                “Be transformed by the renewing of your mind…”
              </p>
              <p className="scripture-reference">Romans 12:2</p>
            </div>

            <div className="scripture-card reveal-on-scroll" style={{ '--delay': '1400ms', '--duration': '1.35s' }}>
              <div className="scripture-pill">Healing</div>
              <p className="scripture-quote">
                “The leaves of the Tree are for the healing of the nations.”
              </p>
              <p className="scripture-reference">Revelation 22:2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-layout">
            <div className="story-image-wrapper reveal-on-scroll" data-animate="left">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Aletheia story"
                className="story-image"
              />
            </div>
            <div className="story-content reveal-on-scroll" data-animate="right" style={{ '--delay': '80ms' }}>
              <h2 className="section-heading">The Story of Aletheia</h2>
              <p className="story-text">
                Aletheia was born from the conviction that complete healing is part of God's design and that the truth of God's word—not man made systems—is what sets people free. After decades in the healthcare world and witnessing how often people are cycled through treatments without addressing the spiritual and emotional roots of their suffering, we saw the need for a Christ-centered approach to health. Aletheia exists to help individuals hear God's voice, renew their beliefs with truth, and step into the healing and restoration that Christ has already provided—bringing this message to individuals, families, workplaces, and even prisons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="founder-section">
        <div 
          className="founder-wrapper"
          style={{
            backgroundImage: `url('/BioBkg.jpg')`
          }}
        >
          <div className="founder-shell">
            <div className="founder-copy reveal-on-scroll" data-animate="left">
              <header className="founder-header">
                <div className="founder-kicker">MEET OUR FOUNDER</div>
                <h1 className="founder-title">Kate Hamilton</h1>
                <div className="founder-subtitle">SPEAKER &amp; INTEGRATIVE HEALTH ADVOCATE</div>
              </header>

              <p className="founder-body">
                Kate Hamilton is a speaker and integrative health advocate whose own journey fuels the mission of Aletheia. Set free from addiction as a young adult and later healed from years of chronic illness through the revelation of spiritual and emotional root causes, Kate carries a passion to see others experience the same freedom.
              </p>

              <p className="founder-body">
                With over twenty years of experience in healthcare and a deeply personal burden for those in the prison system, she founded Aletheia to bring Heaven's model of health to those longing for hope, restoration, and lasting transformation.
              </p>

              <div className="founder-footer">
                <div className="founder-initials">KH</div>
                <div className="founder-name-role">
                  <span className="founder-name">Kate Hamilton</span>
                  <span className="founder-role">
                    Founder, Aletheia
                  </span>
                </div>
              </div>
            </div>

            <div className="founder-photo-block reveal-on-scroll" data-animate="right" style={{ '--delay': '100ms' }}>
              <div className="founder-photo-card">
                <img
                  src="/Kate-Photoshoot-46-MAIN.JPG"
                  alt="Kate Hamilton, Founder of Aletheia"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MissionVision;
