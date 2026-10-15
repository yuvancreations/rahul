import React from 'react';
import { Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';

export function ContactSection({ data }) {
  const whatsappUrl = `https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(data.whatsappMessage)}`;
  const callUrl = `tel:${data.phone}`;

  return (
    <section id="contact" className="profile-card contact-card" aria-label="Contact Information">
      <div className="card-header-simple">
        <div className="card-header-icon-title">
          <span className="card-icon-badge bg-emerald-badge">
            <Phone size={20} className="section-icon text-emerald" />
          </span>
          <div>
            <h2 className="section-title">Direct Contact</h2>
            <p className="section-subtitle-sm">Call or WhatsApp for immediate service assistance</p>
          </div>
        </div>
      </div>

      <div className="contact-list-wrapper">
        {/* 1. Phone Call */}
        <a 
          href={callUrl} 
          className="contact-item-row"
          id="contact-call-item"
          title={`Call Rahul Parida at ${data.phone}`}
        >
          <div className="contact-item-icon-box phone-box">
            <Phone size={18} />
          </div>
          <div className="contact-item-info">
            <span className="contact-item-label">Direct Phone Call</span>
            <span className="contact-item-value">{data.phone}</span>
          </div>
          <ExternalLink size={15} className="contact-chevron" />
        </a>

        {/* 2. WhatsApp */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-item-row"
          id="contact-whatsapp-item"
          title={`WhatsApp Rahul Parida at ${data.phone}`}
        >
          <div className="contact-item-icon-box whatsapp-box">
            <MessageCircle size={18} />
          </div>
          <div className="contact-item-info">
            <span className="contact-item-label">WhatsApp Consultation</span>
            <span className="contact-item-value">{data.phone}</span>
          </div>
          <ExternalLink size={15} className="contact-chevron" />
        </a>

        {/* 3. Timings */}
        <div className="contact-item-row no-hover">
          <div className="contact-item-icon-box timing-box">
            <Clock size={18} />
          </div>
          <div className="contact-item-info">
            <span className="contact-item-label">Operating Hours</span>
            <span className="contact-item-value">{data.timings}</span>
          </div>
          <span className="open-badge">Active Daily</span>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
