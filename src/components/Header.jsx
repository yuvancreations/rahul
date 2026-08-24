import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo on Left */}
          <a href="#" className="brand-logo" aria-label="Dhyana Naad Yogshala Home">
            <img
              src={websiteData.logo || "/logo.png"}
              alt="Dhyana Naad Yogshala Logo"
              className="brand-logo-img"
            />
            <div className="brand-text">
              <span className="brand-name">DHYANA NAAD</span>
              <span className="brand-tagline">|| नादयोगेन चित्तशुद्धि ||</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu-desktop" aria-label="Main Navigation">
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Action Buttons (WhatsApp & Call) + Hamburger */}
          <div className="header-actions">
            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={17} />
              <span className="header-btn-text">WhatsApp</span>
            </a>

            {/* Call button */}
            <a
              href={`tel:${websiteData.phone}`}
              className="btn btn-call btn-sm"
              aria-label="Call Dhyana Naad Yogshala"
            >
              <Phone size={17} />
              <span className="header-btn-text">Call Now</span>
            </a>

            {/* Menu icon / Hamburger on right */}
            <button
              onClick={toggleMobileMenu}
              className="hamburger-btn"
              aria-label={isMobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <a href="#programs" onClick={closeMobileMenu} className="mobile-nav-link">
              <span>Programs & Classes</span>
              <span>→</span>
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMobileMenu} className="mobile-nav-link">
              <span>About Yogshala</span>
              <span>→</span>
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMobileMenu} className="mobile-nav-link">
              <span>Photo Gallery</span>
              <span>→</span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMobileMenu} className="mobile-nav-link">
              <span>Contact & Location</span>
              <span>→</span>
            </a>
          </li>
        </ul>

        <div className="mobile-drawer-actions">
          <a
            href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${websiteData.phone}`}
            onClick={closeMobileMenu}
            className="btn btn-call"
          >
            <Phone size={18} />
            Call +91 95576 14064
          </a>
        </div>
      </div>
    </>
  );
}
