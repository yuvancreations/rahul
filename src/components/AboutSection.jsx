import React from 'react';
import { UserCheck, Users, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function AboutSection({ data }) {
  const getBadgeIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck size={20} className="badge-icon-svg" />;
      case 'Users':
        return <Users size={20} className="badge-icon-svg" />;
      case 'Sparkles':
      default:
        return <Sparkles size={20} className="badge-icon-svg" />;
    }
  };

  return (
    <section id="about" className="profile-card about-card" aria-label="About Us">
      <div className="card-header-simple">
        <div className="card-header-icon-title">
          <span className="card-icon-badge bg-emerald-badge">
            <ShieldCheck size={20} className="section-icon text-emerald" />
          </span>
          <div>
            <h2 className="section-title">{data.about.title}</h2>
            <p className="section-subtitle-sm">{data.about.subtitle || "Insurance • Licence • Aadhaar • PAN • GST • Hotel Management"}</p>
          </div>
        </div>

        <span className="established-pill">
          <CheckCircle2 size={14} className="text-emerald" />
          <span>Direct &amp; Online Assistance</span>
        </span>
      </div>

      <div className="about-content-grid">
        {/* Left Column: Text & Badges */}
        <div className="about-text-col">
          <p className="about-description">
            {data.about.description}
          </p>

          <div className="trust-badges-grid">
            {data.about.trustBadges.map((badge) => (
              <div key={badge.id} className="trust-badge-item">
                <div className="badge-icon-wrapper">
                  {getBadgeIcon(badge.icon)}
                </div>
                <span className="badge-title">{badge.title}</span>
                <span className="badge-sub">{badge.id === 1 ? "1-on-1 Guidance" : badge.id === 2 ? "Starts ₹500" : "One Trusted Platform"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image with Floating Badge */}
        <div className="about-media-col">
          <div className="about-image-frame">
            <img 
              src={data.about.studioImage} 
              alt={data.about.alt || "Rahul Parida Services"} 
              className="about-studio-img"
              loading="lazy"
            />
            <div className="image-ambient-glow"></div>
            
            <div className="studio-floating-tag">
              <Sparkles size={13} className="text-gold" />
              <span>Services Starting From ₹500</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
