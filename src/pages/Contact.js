import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [speakingForm, setSpeakingForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventType: '',
    eventDate: '',
    location: '',
    audienceSize: '',
    message: ''
  });

  const [prayerForm, setPrayerForm] = useState({
    name: '',
    email: '',
    request: ''
  });

  const [generalForm, setGeneralForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [mailingListForm, setMailingListForm] = useState({
    email: '',
    name: ''
  });

  const handleSpeakingChange = (e) => {
    setSpeakingForm({
      ...speakingForm,
      [e.target.name]: e.target.value
    });
  };

  const handlePrayerChange = (e) => {
    setPrayerForm({
      ...prayerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleGeneralChange = (e) => {
    setGeneralForm({
      ...generalForm,
      [e.target.name]: e.target.value
    });
  };

  const handleMailingListChange = (e) => {
    setMailingListForm({
      ...mailingListForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSpeakingSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setSpeakingForm({
      name: '',
      email: '',
      phone: '',
      organization: '',
      eventType: '',
      eventDate: '',
      location: '',
      audienceSize: '',
      message: ''
    });
  };

  const handlePrayerSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for sharing your prayer request. We will be praying for you.');
    setPrayerForm({
      name: '',
      email: '',
      request: ''
    });
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setGeneralForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleMailingListSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining our mailing list!');
    setMailingListForm({
      email: '',
      name: ''
    });
  };

  return (
    <div className="contact">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd Love to Hear From You
          </p>
        </div>
      </section>

      {/* Speaking & Events Inquiry */}
      <section className="speaking-section">
        <div className="container">
          <h2 className="section-title">Speaking & Events Inquiry</h2>
          <p className="section-text">
            Interested in having us speak at your event, conference, or gathering? Fill out the form below.
          </p>
          <form className="contact-form" onSubmit={handleSpeakingSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="speaking-name">Name *</label>
                <input
                  type="text"
                  id="speaking-name"
                  name="name"
                  value={speakingForm.name}
                  onChange={handleSpeakingChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="speaking-email">Email *</label>
                <input
                  type="email"
                  id="speaking-email"
                  name="email"
                  value={speakingForm.email}
                  onChange={handleSpeakingChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="speaking-phone">Phone</label>
                <input
                  type="tel"
                  id="speaking-phone"
                  name="phone"
                  value={speakingForm.phone}
                  onChange={handleSpeakingChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="speaking-organization">Organization</label>
                <input
                  type="text"
                  id="speaking-organization"
                  name="organization"
                  value={speakingForm.organization}
                  onChange={handleSpeakingChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="event-type">Event Type</label>
                <select
                  id="event-type"
                  name="eventType"
                  value={speakingForm.eventType}
                  onChange={handleSpeakingChange}
                >
                  <option value="">Select event type</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="seminar">Seminar</option>
                  <option value="church-service">Church Service</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="prison">Prison Ministry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="event-date">Preferred Event Date</label>
                <input
                  type="date"
                  id="event-date"
                  name="eventDate"
                  value={speakingForm.eventDate}
                  onChange={handleSpeakingChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="event-location">Location</label>
                <input
                  type="text"
                  id="event-location"
                  name="location"
                  value={speakingForm.location}
                  onChange={handleSpeakingChange}
                  placeholder="City, State"
                />
              </div>
              <div className="form-group">
                <label htmlFor="audience-size">Expected Audience Size</label>
                <input
                  type="text"
                  id="audience-size"
                  name="audienceSize"
                  value={speakingForm.audienceSize}
                  onChange={handleSpeakingChange}
                  placeholder="e.g., 50-100"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="speaking-message">Additional Details</label>
              <textarea
                id="speaking-message"
                name="message"
                value={speakingForm.message}
                onChange={handleSpeakingChange}
                rows="5"
                placeholder="Tell us more about your event..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Prayer Request */}
      <section className="prayer-section">
        <div className="container">
          <h2 className="section-title">Prayer Request</h2>
          <p className="section-text">
            We believe in the power of prayer. Share your prayer request with us, and we will lift it up.
          </p>
          <form className="contact-form prayer-form" onSubmit={handlePrayerSubmit}>
            <div className="form-group">
              <label htmlFor="prayer-name">Name</label>
              <input
                type="text"
                id="prayer-name"
                name="name"
                value={prayerForm.name}
                onChange={handlePrayerChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prayer-email">Email</label>
              <input
                type="email"
                id="prayer-email"
                name="email"
                value={prayerForm.email}
                onChange={handlePrayerChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prayer-request">Prayer Request *</label>
              <textarea
                id="prayer-request"
                name="request"
                value={prayerForm.request}
                onChange={handlePrayerChange}
                rows="6"
                placeholder="Share your prayer request..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Prayer Request
            </button>
          </form>
        </div>
      </section>

      {/* General Contact */}
      <section className="general-section">
        <div className="container">
          <h2 className="section-title">General Contact</h2>
          <p className="section-text">
            Have a question or want to get in touch? Send us a message.
          </p>
          <form className="contact-form" onSubmit={handleGeneralSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="general-name">Name *</label>
                <input
                  type="text"
                  id="general-name"
                  name="name"
                  value={generalForm.name}
                  onChange={handleGeneralChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="general-email">Email *</label>
                <input
                  type="email"
                  id="general-email"
                  name="email"
                  value={generalForm.email}
                  onChange={handleGeneralChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="general-subject">Subject</label>
              <input
                type="text"
                id="general-subject"
                name="subject"
                value={generalForm.subject}
                onChange={handleGeneralChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="general-message">Message *</label>
              <textarea
                id="general-message"
                name="message"
                value={generalForm.message}
                onChange={handleGeneralChange}
                rows="6"
                placeholder="Your message..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Mailing List */}
      <section className="mailing-section">
        <div className="container">
          <h2 className="section-title">Join the Mailing List</h2>
          <p className="section-text">
            Stay connected with updates, resources, and encouragement. Join our mailing list today.
          </p>
          <form className="mailing-form" onSubmit={handleMailingListSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mailing-name">Name</label>
                <input
                  type="text"
                  id="mailing-name"
                  name="name"
                  value={mailingListForm.name}
                  onChange={handleMailingListChange}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mailing-email">Email *</label>
                <input
                  type="email"
                  id="mailing-email"
                  name="email"
                  value={mailingListForm.email}
                  onChange={handleMailingListChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-secondary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp Community */}
      <section className="whatsapp-section">
        <div className="container">
          <h2 className="section-title">Join Our WhatsApp Community</h2>
          <p className="section-text">
            Connect with others on the healing journey in our WhatsApp community group: 
            <strong> Aletheia Health Forum</strong>
          </p>
          <div className="whatsapp-cta">
            <a 
              href="https://chat.whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join WhatsApp Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

