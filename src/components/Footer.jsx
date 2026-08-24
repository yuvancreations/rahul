import React from 'react';
import { Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function Footer() {
  const { footer } = websiteData;

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Info Column */}
          <div>
            <a href="#" className="brand-logo" style={{ color: '#FFFFFF' }}>
              <img
                src={websiteData.logo || "/logo.png"}
                alt="Dhyana Naad Yogshala Logo"
                className="brand-logo-img footer-logo-img"
              />
              <div className="brand-text">
                <span className="brand-name" style={{ color: '#FFFFFF' }}>DHYANA NAAD</span>
                <span className="brand-tagline">|| नादयोगेन चित्तशुद्धि ||</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Dedicated to authentic traditional Yoga, mindfulness meditation, Tibetan sound bath healing, and holistic therapeutic wellness in Dehradun.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-column-title">Quick Navigation</h4>
            <ul className="footer-nav-list">
              {footer.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us Column */}
          <div>
            <h4 className="footer-column-title">Contact & Studio</h4>
            <div className="footer-contact-item">
              <Phone size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
              <a href={`tel:${websiteData.phone}`} style={{ color: '#D3E0D8' }}>
                {websiteData.phoneDisplay}
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
              <a href={`mailto:${websiteData.email}`} style={{ color: '#D3E0D8' }}>
                {websiteData.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>Near Doon University Chowk, Mothrowala, Dehradun</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>{footer.copyright}</p>
          <div className="footer-partner-credits">
            <span>Website structured by </span>
            <a
              href="https://yuvancreations.in"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <span className="brand-yuvan">Yuvan</span>
              <span className="brand-creations"> Creations</span>
            </a>
            <span> &amp; digital partner with </span>
            <a
              href="https://livejao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link brand-livejao"
            >
              livejao.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
