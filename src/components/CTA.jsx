import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function CTA() {
  const { cta } = websiteData;

  return (
    <section className="final-cta-section section-padding">
      <div className="final-cta-bg-decor" />
      <div className="container final-cta-container">
        <div className="cta-tagline-badge">
          <Sparkles size={14} />
          <span>Awaken Inner Peace</span>
        </div>

        <h2 className="cta-heading">{cta.heading}</h2>
        <p className="cta-subheading">{cta.subheading}</p>
        <p className="cta-description">{cta.description}</p>

        <div className="cta-btn-group">
          <a
            href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            aria-label="WhatsApp Now"
          >
            <MessageCircle size={20} />
            <span>WhatsApp Now</span>
          </a>

          <a
            href={`tel:${websiteData.phone}`}
            className="btn btn-gold btn-lg"
            aria-label="Call Now"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
