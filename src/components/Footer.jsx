import React from 'react';
import { Sparkles, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
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
                alt="Rahul Parida Logo"
                className="brand-logo-img footer-logo-img"
              />
              <div className="brand-text">
                <span className="brand-name" style={{ color: '#FFFFFF' }}>RAHUL PARIDA</span>
                <span className="brand-tagline">Personal Service Provider</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Your trusted partner for Insurance, Licence Renewal, Aadhaar Update, PAN Card, GST Registration, Hotel Management and documentation assistance. Services start from ₹500.
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
            <h4 className="footer-column-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-icon" />
                <span>{websiteData.address}</span>
              </li>
              <li>
                <Phone size={18} className="footer-icon" />
                <a href={`tel:${websiteData.phone}`}>{websiteData.phoneDisplay}</a>
              </li>
              <li>
                <Mail size={18} className="footer-icon" />
                <a href={`mailto:${websiteData.email}`}>{websiteData.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="footer-disclaimer-box" style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.8rem', opacity: 0.8 }}>
          <p>{footer.disclaimer}</p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">{footer.copyright}</p>
          <p className="credit-text">{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
