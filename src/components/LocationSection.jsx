import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass, ShieldCheck, PhoneCall } from 'lucide-react';

export function LocationSection({ data }) {
  return (
    <section id="location" className="profile-card location-card" aria-label="Service Reach & Contact">
      <div className="card-header-simple">
        <div className="card-header-icon-title">
          <span className="card-icon-badge bg-gold-badge">
            <MapPin size={20} className="section-icon text-gold" />
          </span>
          <div>
            <h2 className="section-title">Service Reach &amp; Assistance</h2>
            <p className="section-subtitle-sm">Pan-India Online &amp; Direct Local Support</p>
          </div>
        </div>
      </div>
      <div className="location-content-grid">
        <div className="location-info-col">
          <h3 className="location-business-name">{data.name}</h3>
          <address className="location-address-block">
            <p className="address-line font-medium">{data.address.line1}</p>
            <p className="address-line">{data.address.line2}</p>
            <p className="address-line">{data.address.area}</p>
            <p className="address-line highlighted">{data.address.statePin}</p>
          </address>
          <div className="landmark-chips-row">
            <span className="landmark-chip"><ShieldCheck size={13} /><span>Starting from ₹500</span></span>
            <span className="landmark-chip"><PhoneCall size={13} /><span>Call &amp; WhatsApp: +91 82799 37975</span></span>
          </div>
          <a href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(data.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="get-directions-btn" id="get-directions-action">
            <Navigation size={17} /><span>Connect on WhatsApp</span><ExternalLink size={14} className="ext-icon" />
          </a>
        </div>
        <div className="location-map-col">
          <div className="map-preview-card">
            <iframe src={data.mapsEmbedUrl} title={`${data.name} Service Reach`} className="location-google-map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
