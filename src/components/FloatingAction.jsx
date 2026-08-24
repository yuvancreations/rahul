import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function FloatingAction() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll To Top Pill */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="floating-action-bar" aria-label="Quick Contact Bar">
        <a
          href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-btn btn-whatsapp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${websiteData.phone}`}
          className="floating-action-btn btn-call"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>
      </div>
    </>
  );
}
