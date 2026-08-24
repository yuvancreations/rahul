import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Navigation } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function Contact() {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={13} />
            <span>Connect & Visit</span>
          </div>
          <h2 className="section-title">Visit Our Sacred Sanctuary</h2>
          <p className="section-subtitle">
            We are conveniently situated near Doon University Chowk in Dehradun. Reach out via WhatsApp or phone.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Cards & Quick Action Buttons */}
          <div className="contact-cards-container">
            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Phone size={22} />
              </div>
              <div className="contact-card-info">
                <h4>Phone Number</h4>
                <a href={`tel:${websiteData.phone}`} className="contact-card-value">
                  {websiteData.phoneDisplay}
                </a>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Direct Line for Inquiries & Registrations</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-card">
              <div className="contact-card-icon" style={{ background: '#E5F9ED', color: '#25D366' }}>
                <MessageCircle size={22} />
              </div>
              <div className="contact-card-info">
                <h4>WhatsApp Support</h4>
                <a
                  href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-value"
                  style={{ color: '#1B8C4A' }}
                >
                  Quick Chat & Timetable
                </a>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Typically responds in minutes</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-card-info">
                <h4>Location</h4>
                <p className="contact-card-value address-text">
                  {websiteData.address}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={22} />
              </div>
              <div className="contact-card-info">
                <h4>Email Address</h4>
                <a href={`mailto:${websiteData.email}`} className="contact-card-value" style={{ wordBreak: 'break-all', fontSize: '0.95rem' }}>
                  {websiteData.email}
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Clock size={22} />
              </div>
              <div className="contact-card-info">
                <h4>Opening Hours</h4>
                <p className="contact-card-value" style={{ fontSize: '0.98rem' }}>
                  {websiteData.timing}
                </p>
              </div>
            </div>

            {/* Action Buttons: WhatsApp, Call Now, Get Direction */}
            <div className="contact-action-row">
              <a
                href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${websiteData.phone}`}
                className="btn btn-call"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>

              <a
                href={websiteData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <Navigation size={18} />
                <span>Get Direction</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Overlay Controls */}
          <div className="map-wrapper">
            <iframe
              title="Dhyana Naad Yogshala Location on Google Maps"
              src={websiteData.mapsEmbedUrl}
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-footer">
              <div>
                <p className="map-location-title">Shree Ji Tower, Mothrowala, Dehradun</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Top Floor • Peaceful Ambiance</p>
              </div>
              <a
                href={websiteData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-sm"
              >
                <Navigation size={15} />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
