import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass, Building, CheckCircle2 } from 'lucide-react';

export function LocationSection({ data }) {
  return (
    <section id="location" className="profile-card location-card" aria-label="Business Location">
      <div className="card-header-simple">
        <div className="card-header-icon-title">
          <span className="card-icon-badge bg-gold-badge">
            <MapPin size={20} className="section-icon text-gold" />
          </span>
          <div>
            <h2 className="section-title">Sanctuary Location</h2>
            <p className="section-subtitle-sm">Easy Access in Dehradun • Free Parking</p>
          </div>
        </div>
      </div>

      <div className="location-content-grid">
        {/* Address Info & Landmark Tags */}
        <div className="location-info-col">
          <h3 className="location-business-name">{data.name}</h3>
          
          <address className="location-address-block">
            <p className="address-line font-medium">{data.address.line1}</p>
            <p className="address-line">{data.address.line2}</p>
            <p className="address-line">{data.address.area}</p>
            <p className="address-line highlighted">{data.address.statePin}</p>
          </address>

          {/* Quick Landmark Chips */}
          <div className="landmark-chips-row">
            <span className="landmark-chip">
              <Building size={13} />
              <span>Top Floor, Shree Ji Tower</span>
            </span>
            <span className="landmark-chip">
              <Compass size={13} />
              <span>Near Doon University Chowk</span>
            </span>
          </div>

          <a 
            href={data.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="get-directions-btn"
            id="get-directions-action"
          >
            <Navigation size={17} />
            <span>Open in Google Maps</span>
            <ExternalLink size={14} className="ext-icon" />
          </a>
        </div>

        {/* Map Preview Card */}
        <div className="location-map-col">
          <a 
            href={data.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-preview-card"
            title="Open in Google Maps"
          >
            <div className="map-art-container">
              <svg 
                className="map-svg-grid" 
                viewBox="0 0 400 240" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="240" rx="16" fill="#edf4ee"/>
                
                {/* River Band */}
                <path d="M320 0C320 0 350 70 380 120C410 170 380 240 380 240H400V0H320Z" fill="#c3dfd4"/>
                
                {/* Green Sanctuaries */}
                <path d="M20 20C40 20 80 40 70 80C60 120 10 110 10 70C10 30 20 20 20 20Z" fill="#d2e8d7"/>
                <path d="M180 140C210 140 240 160 230 210C220 230 170 230 160 200C150 170 180 140 180 140Z" fill="#d2e8d7"/>
                
                {/* Major Roads */}
                <path d="M0 60H400" stroke="#ffffff" strokeWidth="12"/>
                <path d="M0 160H400" stroke="#ffffff" strokeWidth="10"/>
                <path d="M120 0V240" stroke="#ffffff" strokeWidth="12"/>
                <path d="M260 0V240" stroke="#ffffff" strokeWidth="8"/>
                <path d="M0 20L400 220" stroke="#dbe7da" strokeWidth="6"/>
                <path d="M40 240L360 0" stroke="#dbe7da" strokeWidth="5"/>
                
                {/* Primary Route Highway */}
                <path d="M10 160C100 160 120 160 120 110C120 60 200 60 260 60C320 60 400 90 400 90" stroke="#1b4332" strokeWidth="4.5" strokeDasharray="7 4"/>
                
                {/* Road Junction Rings */}
                <circle cx="120" cy="60" r="8" fill="#ffffff" stroke="#1b4332" strokeWidth="2.5"/>
                <circle cx="260" cy="60" r="7" fill="#ffffff" stroke="#c99a2c" strokeWidth="2.5"/>
                <circle cx="120" cy="160" r="7" fill="#ffffff" stroke="#1b4332" strokeWidth="2.5"/>
                
                {/* Landmark Labels */}
                <text x="50" y="48" fill="#2d6a4f" fontSize="10" fontWeight="700" fontFamily="sans-serif">Doon University</text>
                <text x="135" y="145" fill="#4a5d53" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">Mothrowala Chowk</text>
              </svg>

              {/* Glowing Pulsing Pin */}
              <div className="map-pin-pulse-wrapper">
                <div className="pulse-ring"></div>
                <div className="pulse-ring delay"></div>
                <div className="map-marker-pin">
                  <MapPin size={30} className="pin-icon-red" fill="#e63946" color="#ffffff" />
                </div>
                <div className="pin-tooltip-bubble">
                  <span>📍 Dhyana Naad Yogshala</span>
                </div>
              </div>

              <div className="map-badge-overlay">
                <span>🟢 Live Google Directions</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
