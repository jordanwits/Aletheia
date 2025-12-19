import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import './Home.css';

const CustomDropdown = ({ id, name, value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue) => {
    onChange({
      target: {
        name: name,
        value: optionValue
      }
    });
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
      if (!isOpen && options.length > 0) {
        setFocusedIndex(0);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(0);
      } else {
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev));
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setFocusedIndex(-1);
      buttonRef.current?.focus();
    } else if (e.key === 'Enter' && isOpen && focusedIndex >= 0) {
      e.preventDefault();
      handleSelect(options[focusedIndex].value);
    }
  };

  const selectedOption = options.find(opt => opt.value === value) || { label: placeholder, value: '' };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button
        type="button"
        ref={buttonRef}
        className={`custom-dropdown-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setFocusedIndex(0);
        }}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select subject"
      >
        <span className={value ? '' : 'placeholder'}>{selectedOption.label}</span>
        <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L1 4h10z" fill="#3e4459"/>
        </svg>
      </button>
      {isOpen && (
        <ul className="custom-dropdown-menu" role="listbox">
          {options.map((option, index) => (
            <li
              key={option.value}
              className={`custom-dropdown-option ${value === option.value ? 'selected' : ''} ${focusedIndex === index ? 'focused' : ''}`}
              onClick={() => handleSelect(option.value)}
              onMouseEnter={() => setFocusedIndex(index)}
              role="option"
              aria-selected={value === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="custom-dropdown-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const Home = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

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
        threshold: 0.15,
        rootMargin: '0px 0px -5% 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    subscribe: false
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  // Pre-fill subject from URL hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('contact?subject=')) {
      const urlParams = new URLSearchParams(hash.split('?')[1]);
      const subject = urlParams.get('subject');
      if (subject) {
        setContactForm(prev => ({
          ...prev,
          subject: decodeURIComponent(subject)
        }));
        // Scroll to contact section
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, []);

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'General Contact', label: 'General Contact' },
    { value: 'Coaching & Discipleship', label: 'Coaching & Discipleship' },
    { value: 'Heaven in Health Conferences', label: 'Heaven in Health Conferences' },
    { value: 'Corporate Wellness & Culture Seminars', label: 'Corporate Wellness & Culture Seminars' },
    { value: 'Prison Workshops & Inmate Equipping', label: 'Prison Workshops & Inmate Equipping' },
    { value: 'Give', label: 'Give' },
    { value: 'Host an Event', label: 'Host an Event' },
    { value: 'Volunteer', label: 'Volunteer' },
    { value: 'Join Organization', label: 'Join Organization' }
  ];

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Form data:', contactForm);
    
    // Reset status
    setFormStatus({ loading: true, success: false, error: null });

    try {
      // Step 1: Create subscriber with form endpoint
      const subscriberPayload = {
        api_key: 'xl-Lxu4xOQVCAOCh4Eiu7w',
        email: contactForm.email,
        first_name: contactForm.name,
        fields: {
          subject: contactForm.subject || 'No subject',
          message: contactForm.message
        }
      };
      
      console.log('Creating subscriber in Kit:', subscriberPayload);
      
      const response = await fetch('https://api.convertkit.com/v3/forms/8861264/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriberPayload),
      });

      const data = await response.json();
      console.log('Kit API Response:', data);
      console.log('Response status:', response.status);

      if (response.ok && data.subscription) {
        // Step 2: Apply tag based on checkbox
        const tagId = contactForm.subscribe ? '13625660' : '13625657'; // Marketing : No Marketing
        const tagPayload = {
          api_key: 'xl-Lxu4xOQVCAOCh4Eiu7w',
          email: contactForm.email
        };
        
        console.log(`Applying tag ${contactForm.subscribe ? 'Marketing' : 'No Marketing'} (ID: ${tagId})`);
        
        const tagResponse = await fetch(`https://api.convertkit.com/v3/tags/${tagId}/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tagPayload),
        });
        
        const tagData = await tagResponse.json();
        console.log('Tag API Response:', tagData);
        
        // Step 3: Send email notification to company via Web3Forms
        const notificationPayload = {
          access_key: 'a301a19a-2140-4497-b349-7cf081788c08',
          subject: `New Contact Form Submission - ${contactForm.subject || 'No Subject'}`,
          from_name: contactForm.name,
          email: contactForm.email,
          message: `
Name: ${contactForm.name}
Email: ${contactForm.email}
Subject: ${contactForm.subject || 'Not specified'}
Subscribed to newsletter: ${contactForm.subscribe ? 'Yes' : 'No'}

Message:
${contactForm.message}
          `.trim()
        };
        
        console.log('Sending notification email via Web3Forms');
        
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(notificationPayload),
        });
        
        // Success
        setFormStatus({
          loading: false,
          success: true,
          error: null
        });
        
        // Clear form
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: '',
          subscribe: false
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        // Error from Kit API
        setFormStatus({
          loading: false,
          success: false,
          error: data.message || data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: 'Unable to submit the form. Please check your connection and try again.'
      });
    }
  };

  const handleGetInvolvedNav = (target) => {
    navigate(`/get-involved#${target}`, { state: { target } });
  };

  const handleKeyActivate = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <video 
            ref={videoRef}
            className="hero-image"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onCanPlayThrough={() => videoRef.current?.play().catch(() => {})}
          >
            <source src={`${process.env.PUBLIC_URL}/Aletheia-Hero-Video.mp4`} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          
          {/* Logo Overlay */}
          <div className="hero-logo-overlay reveal-on-scroll" data-animate="zoom">
            <img 
              src="/NavyLogo.png" 
              alt="Aletheia Logo" 
              className="hero-logo"
            />
          </div>
          
          {/* Text Overlay */}
          <div className="hero-text-overlay reveal-on-scroll" style={{ '--delay': '120ms' }}>
            <h1 className="hero-title">COMPLETE HEALING IS GOD'S PROMISE</h1>
          </div>
        </div>
      </section>

      {/* Scripture Anchor */}
      <section className="scripture-anchor-section reveal-on-scroll" style={{ '--delay': '-200ms' }}>
        <div className="container">
          <div className="scripture-content">
            <p className="scripture-text">
              "The river was flowing in the middle of the street of the city, and on either side of the river was the Tree of Life… the leaves of the Tree are for the healing of the nations."
            </p>
            <p className="scripture-reference">— Revelation 22:2</p>
            <div className="founders-heart-quote">
              <p className="founders-quote-text">
                "Complete Healing is Heaven's promise. Our mission is to help you experience it."
              </p>
              <p className="founders-quote-author">— Kate Hamilton</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Message */}
      <section className="message-section">
        <div className="message-image-side reveal-on-scroll" data-animate="left">
          <img 
            src={`${process.env.PUBLIC_URL}/Message-Section.jpg`} 
            alt="Message section" 
            className="message-image"
          />
        </div>
        <div className="message-content-side reveal-on-scroll" data-animate="right" style={{ '--delay': '80ms' }}>
          <div className="message-content">
            <p className="message-headline">THE MESSAGE</p>
            <h2 className="message-title">Heaven in Healthcare</h2>
            <div className="message-description">
              <p>
                For generations, people have looked to human systems for healing—only to end up disappointed, discouraged, or dependent. Today our world is overwhelmed by chronic illness, confusion, and costly interventions, yet true healing was never meant to come from these systems. Jesus already paid for complete healing, and Heaven still speaks a better word.
              </p>
              <p>
                Aletheia exists to reconnect people with God as their ultimate source of health. We introduce a Kingdom model of healthcare—one rooted in truth, guided by Christ, and sustained through Spirit-led stewardship. Through renewed beliefs and practical tools, we help individuals hear His voice, receive His wisdom, and walk in the healing He has already provided.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary message-cta">
              Connect with Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="beliefs-preview reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">What We Believe</h2>
          <p className="beliefs-statement">
            Complete Healing is our Promise Land and begins with beliefs rooted in God's Word, 
            grows through faithful stewardship, and is sustained in union with Christ.
          </p>
        </div>
      </section>

      {/* Services Provided */}
      <section className="services-preview">
        <div className="services-layout">
          <div className="services-text-side">
            <div className="services-text-content reveal-on-scroll">
              <p className="services-headline">SERVICES</p>
              <h2 className="services-title">Promised Land of Healing</h2>
              <p className="services-description">
                Our services guide you into God's design for complete healing—physically, emotionally, and spiritually. Through teaching, coaching, and activation, we help you identify root causes, align with truth, and cultivate a lifestyle that reflects Heaven's way of health.
              </p>
            </div>
          </div>
          
          <div className="services-panels">
            <div className="service-panel reveal-on-scroll" style={{ '--delay': '40ms' }}>
              <div className="service-panel-image">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Coaching & Discipleship" 
                />
                <div className="service-panel-description">
                  <p>Practical, truth-based coaching that helps individuals renew their minds, steward their health, and walk into the complete healing God has already provided. Clients gain tools, accountability, and a clear path toward long-term transformation.</p>
                </div>
              </div>
              <h3 className="service-panel-title">Coaching & Discipleship</h3>
              <p className="service-panel-location">Individual + Group Formats</p>
              <Link to="/services" className="service-panel-btn">Discover</Link>
            </div>

            <div className="service-panel reveal-on-scroll" style={{ '--delay': '120ms' }}>
              <div className="service-panel-image">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Heaven in Health Conferences" 
                />
                <div className="service-panel-description">
                  <p>Live gatherings that teach the biblical foundation for God-intended health and activate people to live it out. Attendees leave with revelation, practical steps, and the confidence to build Promised-Land "health zones" in their own lives and communities.</p>
                </div>
              </div>
              <h3 className="service-panel-title">Heaven in Health Conferences</h3>
              <p className="service-panel-location">Public Gatherings for Revelation + Healing</p>
              <Link to="/services" className="service-panel-btn">Discover</Link>
            </div>

            <div className="service-panel reveal-on-scroll" style={{ '--delay': '200ms' }}>
              <div className="service-panel-image">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Corporate Wellness" 
                />
                <div className="service-panel-description">
                  <p>On-site or virtual trainings that bring Kingdom principles into the workplace—helping teams reduce stress, strengthen health habits, and build a culture rooted in truth and stewardship. Businesses receive actionable strategies that improve wellbeing and performance.</p>
                </div>
              </div>
              <h3 className="service-panel-title">Corporate Wellness & Culture Seminars</h3>
              <p className="service-panel-location">Bringing Kingdom Health to Workplaces</p>
              <Link to="/services" className="service-panel-btn">Discover</Link>
            </div>

            <div className="service-panel reveal-on-scroll" style={{ '--delay': '280ms' }}>
              <div className="service-panel-image">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Prison Workshops" 
                />
                <div className="service-panel-description">
                  <p>Biblically grounded workshops that restore identity, renew mindsets, and teach practical health stewardship—leading to real transformation that lasts beyond release. Inmates gain truth, tools, and stabilizing habits that dramatically reduce recidivism and create a healthier future for themselves and their families.</p>
                </div>
              </div>
              <h3 className="service-panel-title">Prison Workshops & Inmate Equipping</h3>
              <p className="service-panel-location">Restoring Identity and Healing Behind Bars</p>
              <Link to="/services" className="service-panel-btn">Discover</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Testimonies of Healing</h2>
          <TestimonialsCarousel />
          <div className="scripture-anchor">
            <p className="scripture-text">
              "The leaves of the tree are for the healing of the nations."
            </p>
            <p className="scripture-ref">Revelation 22:2</p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-header reveal-on-scroll">
            <h2 className="section-title">Get Involved</h2>
            <p className="cta-subtitle">
              Partner with us to bring healing and restoration to individuals, families, and communities.
            </p>
          </div>
          
          <div className="cta-cards">
            <div
              className="cta-card reveal-on-scroll"
              style={{ '--delay': '40ms' }}
              role="button"
              tabIndex={0}
              onClick={() => handleGetInvolvedNav('give')}
              onKeyDown={(e) => handleKeyActivate(e, () => handleGetInvolvedNav('give'))}
            >
              <div className="cta-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
                </svg>
              </div>
              <h3 className="cta-card-title">Give</h3>
              <p className="cta-card-text">
                Support our mission through financial partnership and help us reach more people with healing.
              </p>
              <Link to="/get-involved#give" className="cta-card-btn">
                Donate Now
              </Link>
            </div>

            <div
              className="cta-card reveal-on-scroll"
              style={{ '--delay': '120ms' }}
              role="button"
              tabIndex={0}
              onClick={() => handleGetInvolvedNav('partner')}
              onKeyDown={(e) => handleKeyActivate(e, () => handleGetInvolvedNav('partner'))}
            >
              <div className="cta-card-icon">
                <img src="/handshakeWhite.png" alt="Handshake" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 className="cta-card-title">Partner</h3>
              <p className="cta-card-text">
                Join us as an organization partner to bring Kingdom health principles to your community.
              </p>
              <Link to="/get-involved#partner" className="cta-card-btn">
                Partner with Us
              </Link>
            </div>

            <div
              className="cta-card reveal-on-scroll"
              style={{ '--delay': '200ms' }}
              role="button"
              tabIndex={0}
              onClick={() => handleGetInvolvedNav('volunteer')}
              onKeyDown={(e) => handleKeyActivate(e, () => handleGetInvolvedNav('volunteer'))}
            >
              <div className="cta-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="cta-card-title">Volunteer</h3>
              <p className="cta-card-text">
                Serve with us through prayer, volunteer work, or hosting workshops in your area.
              </p>
              <Link to="/get-involved#volunteer" className="cta-card-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="home-contact-section">
        <div className="home-contact-background">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Serene contact background" 
            className="home-contact-bg-image"
          />
        </div>
        <div className="container">
          <div className="home-contact-content reveal-on-scroll">
            <div className="home-contact-header">
              <h2 className="home-contact-title">Get In Touch</h2>
              <p className="home-contact-subtitle">
                Have a question or want to connect? We'd love to hear from you.
              </p>
            </div>
            
            <form className="home-contact-form" onSubmit={handleContactSubmit}>
              {formStatus.success && (
                <div className="form-message form-success" role="alert">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="currentColor"/>
                  </svg>
                  <span>Thank you for contacting us! We will get back to you soon.</span>
                </div>
              )}
              
              {formStatus.error && (
                <div className="form-message form-error" role="alert">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="currentColor"/>
                  </svg>
                  <span>{formStatus.error}</span>
                </div>
              )}

              <div className="home-form-row">
                <div className="home-form-group">
                  <label htmlFor="home-contact-name">Name *</label>
                  <input
                    type="text"
                    id="home-contact-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    placeholder="Your name"
                    disabled={formStatus.loading}
                  />
                </div>
                <div className="home-form-group">
                  <label htmlFor="home-contact-email">Email *</label>
                  <input
                    type="email"
                    id="home-contact-email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    placeholder="your.email@example.com"
                    disabled={formStatus.loading}
                  />
                </div>
              </div>
              <div className="home-form-group">
                <label htmlFor="home-contact-subject">Subject</label>
                <CustomDropdown
                  id="home-contact-subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  options={subjectOptions}
                  placeholder="Select a subject"
                />
              </div>
              <div className="home-form-group">
                <label htmlFor="home-contact-message">Message *</label>
                <textarea
                  id="home-contact-message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows="6"
                  placeholder="Tell us how we can help..."
                  required
                  disabled={formStatus.loading}
                />
              </div>
              <div className="home-form-group home-form-checkbox">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={contactForm.subscribe}
                    onChange={(e) => setContactForm({...contactForm, subscribe: e.target.checked})}
                    disabled={formStatus.loading}
                  />
                  <span>Subscribe me to Aletheia's email updates and newsletter.</span>
                </label>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary home-contact-submit"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

