import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { GeoAltFill, TelephoneFill, ClockFill, EnvelopeFill, SendFill } from 'react-bootstrap-icons';

function Access() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Mock sending
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <Helmet>
        <title>Contact & Accès - Le Cèdre du Liban Béziers</title>
        <meta name="description" content="Contactez le restaurant Le Cèdre du Liban à Béziers. Réservez votre table ou commandez à emporter. 04 67 49 23 26" />
      </Helmet>

      {/* Hero Section */}
      <div className="contact-hero">
        <Container>
          <div className="text-center">
            <h1>CONTACT</h1>
            <div className="contact-hero-icon">
              <EnvelopeFill />
            </div>
            <p className="contact-hero-subtitle">Nous sommes à l'écoute</p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Info Cards Grid */}
        <div className="contact-info-grid">
          <div className="contact-card-new">
            <div className="contact-card-icon">
              <ClockFill />
            </div>
            <h3 className="contact-card-title">Horaires</h3>
            <p className="mb-0">Lun-Sam: 12h-14h / 19h-22h</p>
            <p className="text-muted">Dimanche: Fermé</p>
          </div>

          <div className="contact-card-new">
            <div className="contact-card-icon">
              <GeoAltFill />
            </div>
            <h3 className="contact-card-title">Adresse</h3>
            <p className="mb-0">60 All. Paul Riquet</p>
            <p className="text-muted">34500 Béziers</p>
          </div>
        </div>

        {/* Details Row (Dark) */}
        <div className="contact-details-row">
          <div className="detail-item">
            <div className="detail-icon-circle">
              <GeoAltFill />
            </div>
            <div className="detail-text">
              <h4>ADRESSE</h4>
              <p>60 All. Paul Riquet, Béziers</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon-circle">
              <TelephoneFill />
            </div>
            <div className="detail-text">
              <h4>TÉLÉPHONE</h4>
              <a href="tel:0467492326">04 67 49 23 26</a>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon-circle">
              <EnvelopeFill />
            </div>
            <div className="detail-text">
              <h4>EMAIL</h4>
              <a href="mailto:danielnasrallah@hotmail.com">danielnasrallah@hotmail.com</a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="ratio ratio-21x9 rounded overflow-hidden shadow-lg border border-secondary mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.021074123456!2d3.2188813!3d43.3429381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b10e583060c1bd%3A0x6b876274488346e6!2s60%20All.%20Paul%20Riquet%2C%2034500%20B%C3%A9ziers!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="form-section">
          <div className="form-header">
            <h2>ENVOYER UN MESSAGE</h2>
            <p>Une question, une suggestion, une remarque ?</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="custom-form-grid">
              <input
                type="text"
                name="name"
                placeholder="Nom *"
                className="custom-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="custom-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                className="custom-input"
                value={formData.phone} // Bound 'phone' to the input field
                onChange={handleChange} // Added onChange handler for 'phone'
              />
            </div>

            <textarea
              name="message"
              placeholder="Message *"
              className="custom-input mb-4"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="custom-submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi...' : 'ENVOYER'}
            </button>

            {status === 'success' && <p className="text-success mt-3 text-center fw-bold">Message envoyé avec succès !</p>}
          </form>
        </div>

      </Container>
    </div>
  );
}

export default Access;