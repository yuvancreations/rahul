import React, { useState, useEffect } from 'react';
import { Home, Info, Sparkles, MapPin } from 'lucide-react';

export function BottomNavigation({ data, activeSection, onNavigate }) {
  const [currentActive, setCurrentActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      const locationEl = document.getElementById('location');
      const programsEl = document.getElementById('programs');
      const aboutEl = document.getElementById('about');

      if (locationEl && scrollPos >= locationEl.offsetTop) {
        setCurrentActive('location');
      } else if (programsEl && scrollPos >= programsEl.offsetTop) {
        setCurrentActive('programs');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setCurrentActive('about');
      } else {
        setCurrentActive('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = 20;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const whatsappUrl = `https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(data.whatsappMessage)}`;

  return (
    <nav className="bottom-nav-container" aria-label="Mobile Bottom Navigation">
      <div className="bottom-nav-inner">
        {/* 1. Home */}
        <button 
          type="button" 
          className={`bottom-nav-btn ${currentActive === 'home' ? 'active' : ''}`}
          onClick={() => scrollTo('home')}
          aria-label="Home"
        >
          <Home size={20} className="nav-icon" />
          <span className="nav-label">Home</span>
        </button>

        {/* 2. About */}
        <button 
          type="button" 
          className={`bottom-nav-btn ${currentActive === 'about' ? 'active' : ''}`}
          onClick={() => scrollTo('about')}
          aria-label="About"
        >
          <Info size={20} className="nav-icon" />
          <span className="nav-label">About</span>
        </button>

        {/* 3. Services */}
        <button 
          type="button" 
          className={`bottom-nav-btn ${currentActive === 'programs' ? 'active' : ''}`}
          onClick={() => scrollTo('programs')}
          aria-label="Services"
        >
          <Sparkles size={20} className="nav-icon" />
          <span className="nav-label">Services</span>
        </button>

        {/* 4. Location & Contact */}
        <button 
          type="button" 
          className={`bottom-nav-btn ${currentActive === 'location' ? 'active' : ''}`}
          onClick={() => scrollTo('location')}
          aria-label="Location"
        >
          <MapPin size={20} className="nav-icon" />
          <span className="nav-label">Contact</span>
        </button>

        {/* 5. WhatsApp (Prominent Highlight) */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-nav-btn whatsapp-highlight-btn"
          aria-label="WhatsApp Us"
        >
          <div className="nav-whatsapp-icon-circle">
            <svg 
              className="bottom-nav-wa-svg" 
              viewBox="0 0 24 24" 
              width="22" 
              height="22" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.352.226-.653.075-1.804-.903-2.982-1.608-4.17-3.649-.313-.538.313-.499.896-1.666.098-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.238-.244-.589-.493-.509-.678-.518-.176-.009-.377-.01-.578-.01-.201 0-.528.075-.804.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.08 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.28.497 1.717.636.721.23 1.377.198 1.896.12.578-.088 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352z"/>
              <path d="M12 2a9.93 9.93 0 0 0-8.625 15.01L2 22l5.14-1.348A9.97 9.97 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.64 0-3.19-.48-4.52-1.31l-.32-.2-3.36.88.9-3.27-.21-.34A8.17 8.17 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z"/>
            </svg>
          </div>
          <span className="nav-label">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}

export default BottomNavigation;
