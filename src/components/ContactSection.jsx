import React from 'react';
import { Phone, MessageCircle, Mail, Clock, ExternalLink } from 'lucide-react';

export function ContactSection({ data }) {
  const whatsappUrl = `https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(data.whatsappMessage)}`;
  const callUrl = `tel:${data.phone}`;
  const mailUrl = `mailto:${data.email}?subject=${encodeURIComponent("Inquiry for Dhyana Naad Yogshala")}`;

  return (
    <section id="contact" className="profile-card contact-card" aria-label="Contact Information">
      <div className="card-header-simple">
        <div className="card-header-icon-title">
          <span className="card-icon-badge bg-emerald-badge">
            <Phone size={20} className="section-icon text-emerald" />
          </span>
          <div>
            <h2 className="section-title">Direct Contact</h2>
            <p className="section-subtitle-sm">Call, WhatsApp or Visit Us</p>
          </div>
        </div>
      </div>

      <div className="contact-list-wrapper">
        {/* 1. Phone Call */}
        <a 
          href={callUrl} 
          className="contact-item-row"
          id="contact-call-item"
          title={`Call ${data.phone}`}
        >
          <div className="contact-item-icon-box phone-box">
            <Phone size={18} />
          </div>
          <div className="contact-item-info">
            <span className="contact-item-label">Direct Phone</span>
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
          title={`WhatsApp ${data.phone}`}
        >
          <div className="contact-item-icon-box whatsapp-box">
            <MessageCircle size={18} />
          </div>
          <div className="contact-item-info">
            <span className="contact-item-label">WhatsApp Chat</span>
            <span className="contact-item-value">{data.phone}</span>
          </div>
          <ExternalLink size={15} className="contact-chevron" />
        </a>

        {/* 3. Email */}
        <a 
          href={mailUrl} 
          className="contact-item-row"
          id="contact-email-item"
          title={`Email ${data.email}`}
        >
          <div className="contact-item-icon-box email-box">
            <Mail size={18} />
          </div>
          <div className="contact-item-info">
            <span className="contact-item-label">Email Support</span>
            <span className="contact-item-value">{data.email}</span>
          </div>
          <ExternalLink size={15} className="contact-chevron" />
        </a>

        {/* 4. Timings */}
        <div className="contact-item-row no-hover">
          <div className="contact-item-icon-box timing-box">
            <Clock size={18} />
          </div>
          <div className="contact-item-info">
            <span className="contact-item-label">Operating Hours</span>
            <span className="contact-item-value">{data.timings}</span>
          </div>
          <span className="open-badge">Open Mon–Sat</span>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
