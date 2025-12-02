import React from 'react';
import './Beliefs.css';

const Beliefs = () => {
  const scriptures = [
    {
      reference: "John 8:32",
      text: "You will know the truth, and the truth will set you free."
    },
    {
      reference: "Romans 12:2",
      text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind."
    },
    {
      reference: "Revelation 22:2",
      text: "The leaves of the tree are for the healing of the nations."
    }
  ];

  return (
    <div className="beliefs">
      {/* Hero */}
      <section className="beliefs-hero">
        <div className="container">
          <h1 className="page-title">Our Beliefs</h1>
          <p className="page-subtitle">
            Complete Healing is our Promise Land
          </p>
        </div>
      </section>

      {/* Main Belief Statement */}
      <section className="main-belief-section">
        <div className="container">
          <div className="belief-statement-box">
            <h2 className="belief-statement-title">What We Believe</h2>
            <p className="belief-statement-text">
              Complete Healing is our Promise Land and begins with beliefs rooted in God's Word, 
              grows through faithful stewardship, and is sustained in union with Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Healing is God's Design */}
      <section className="healing-design-section">
        <div className="container">
          <h2 className="section-title">Healing is God's Design</h2>
          <div className="content-box">
            <p className="content-text">
              We believe that healing is not an exception—it's God's original design. The price 
              has already been paid through the finished work of Christ. Complete healing is not 
              something we need to earn or beg for; it's something we already have access to 
              through faith and faithful stewardship.
            </p>
            <p className="content-text">
              <strong>We've already got it.</strong> The question is not whether God wants to heal, 
              but whether we will believe, receive, and steward what He has already provided.
            </p>
          </div>
        </div>
      </section>

      {/* The Broken System */}
      <section className="broken-system-section">
        <div className="container">
          <h2 className="section-title">The Broken System</h2>
          <div className="content-box">
            <p className="content-text">
              We recognize that the current healthcare system is broken—focused on managing symptoms 
              rather than addressing root causes, treating disease rather than promoting wholeness, 
              and relying on human wisdom rather than divine truth. This is why we exist: to bring 
              Heaven's standard of care to a world in need of true healing.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Healing is our Promise Land */}
      <section className="promise-land-section">
        <div className="container">
          <h2 className="section-title">Complete Healing is our Promise Land</h2>
          <div className="content-box">
            <p className="content-text">
              Complete healing is not a destination we're trying to reach—it's a Promise Land we're 
              called to inhabit. This Promise Land is built on three foundations:
            </p>
            
            <div className="foundation-grid">
              <div className="foundation-card">
                <h3>Belief Systems</h3>
                <p>
                  Rooted in God's Word, our beliefs shape our reality. When we align our beliefs 
                  with God's truth about healing, we step into the Promise Land.
                </p>
              </div>
              
              <div className="foundation-card">
                <h3>Stewardship</h3>
                <p>
                  Faithful stewardship of our bodies, minds, and spirits is how we grow into the 
                  complete healing God has provided. It's not about perfection, but about faithful 
                  partnership with God.
                </p>
              </div>
              
              <div className="foundation-card">
                <h3>Abiding in Him</h3>
                <p>
                  Sustained healing comes through union with Christ—abiding in Him, remaining in 
                  His love, and walking in the truth. As we abide, we experience the fullness of 
                  what He has already provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship of Health */}
      <section className="stewardship-section">
        <div className="container">
          <h2 className="section-title">Stewardship of Health</h2>
          <div className="content-box">
            <p className="content-text">
              We believe that our bodies are temples of the Holy Spirit, and we are called to 
              steward them well. This includes how we eat, move, rest, think, and relate. 
              Stewardship is not about legalism or perfectionism—it's about honoring God with 
              what He has given us and partnering with Him in the process of healing.
            </p>
          </div>
        </div>
      </section>

      {/* Renewing the Mind */}
      <section className="renewing-mind-section">
        <div className="container">
          <h2 className="section-title">Renewing the Mind</h2>
          <div className="content-box">
            <p className="content-text">
              Transformation begins in the mind. We believe that renewing our minds according to 
              God's Word is essential for experiencing complete healing. This means replacing 
              lies with truth, fear with faith, and broken patterns with God's design.
            </p>
          </div>
        </div>
      </section>

      {/* Power of Words and Thought */}
      <section className="words-thought-section">
        <div className="container">
          <h2 className="section-title">Power of Words and Thought</h2>
          <div className="content-box">
            <p className="content-text">
              We believe that our words and thoughts have power—they can either align with God's 
              truth and bring life, or align with the enemy's lies and bring death. We are called 
              to speak life, think truth, and align our inner dialogue with God's Word.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Prescription Plan */}
      <section className="prescription-section">
        <div className="container">
          <h2 className="section-title">Custom Prescription Plan Through Intimacy</h2>
          <div className="content-box">
            <p className="content-text">
              We believe there is no one-size-fits-all formula for healing. Each person's journey 
              is unique, and the blueprint for complete healing comes through direct connection 
              and intimacy with the Lord. There is no recipe or formula for healing outside of 
              personal relationship with Him.
            </p>
            <p className="content-text">
              Through prayer, listening, and walking in relationship with God, each person receives 
              their personalized blueprint for healing—a custom prescription plan that addresses 
              their specific needs, circumstances, and calling.
            </p>
          </div>
        </div>
      </section>

      {/* As One, Union With Him */}
      <section className="union-section">
        <div className="container">
          <h2 className="section-title">As One, Union With Him</h2>
          <div className="content-box">
            <p className="content-text">
              Complete healing is sustained through abiding in Christ—remaining in Him, walking 
              in union with Him, and living from our identity in Him. We are not trying to achieve 
              healing on our own; we are abiding in the One who is our healing.
            </p>
            <p className="content-text">
              This union is not about performance or perfection—it's about relationship, rest, and 
              receiving what He has already provided. As we abide, we experience the fullness of 
              healing that flows from our oneness with Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Scriptures We Stand On */}
      <section className="scriptures-section">
        <div className="container">
          <h2 className="section-title">Scriptures We Stand On</h2>
          <div className="scriptures-grid">
            {scriptures.map((scripture, index) => (
              <div key={index} className="scripture-card">
                <p className="scripture-text">"{scripture.text}"</p>
                <p className="scripture-reference">{scripture.reference}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beliefs;

