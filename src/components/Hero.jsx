import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function Hero() {
  const { hero } = websiteData;

  return (
    <section className="hero-section" id="home">
      {/* Background Media with Dark Gradient Overlay */}
      <div className="hero-bg-container">
        <img
          src={hero.heroImage}
          alt="Yoga and meditation practice at Dhyana Naad Yogshala"
          className="hero-bg-image"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        {/* Welcome Badge */}
        <div className="hero-welcome-badge">
          <Sparkles size={14} />
          <span>{hero.badge}</span>
        </div>

        {/* Main Brand Headline */}
        <h1 className="hero-title">
          DHYANA NAAD<br />
          <span>YOGSHALA</span>
        </h1>

        {/* Tagline */}
        <p className="hero-tagline">
          "{hero.tagline}"
        </p>

        {/* Specialties Badges */}
        <div className="hero-specialties">
          <span>{hero.specialties}</span>
        </div>

        {/* Actual Clickable Conversion Buttons */}
        <div className="hero-buttons">
          <a
            href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            aria-label="Connect on WhatsApp"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
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
