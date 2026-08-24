import React from 'react';
import { Sparkles, Sun, Wind, Music, HeartPulse, Flower2, ArrowRight } from 'lucide-react';
import { websiteData } from '../data/websiteData';

// Icon lookup map
const iconMap = {
  Sparkles: Sparkles,
  Sun: Sun,
  Wind: Wind,
  Music: Music,
  HeartPulse: HeartPulse,
  Flower2: Flower2
};

export default function Programs() {
  const { programs } = websiteData;

  return (
    <section className="programs-section section-padding" id="programs">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            <span>Offerings & Sessions</span>
          </div>
          <h2 className="section-title">Nurture Your Mind, Body & Spirit</h2>
          <p className="section-subtitle">
            Authentic, transformative programs rooted in ancient yogic wisdom and contemporary sound therapy.
          </p>
        </div>

        {/* Programs Grid (.map()) */}
        <div className="programs-grid">
          {programs.map((program) => {
            const IconComponent = iconMap[program.icon] || Sparkles;
            return (
              <article key={program.id} className="program-card">
                <div className="program-card-header">
                  <div className="program-icon-box">
                    <IconComponent size={26} strokeWidth={1.8} />
                  </div>
                  {program.badge && (
                    <span className="program-pill">{program.badge}</span>
                  )}
                </div>

                <h3 className="program-title">{program.title}</h3>
                <p className="program-desc">{program.description}</p>

                <div className="program-card-footer">
                  <span>{program.duration}</span>
                  <a
                    href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi Dhyana Naad, I'm interested in joining the ${program.title} sessions.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="program-action-link"
                    aria-label={`Enquire about ${program.title}`}
                  >
                    <span>Enquire</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
