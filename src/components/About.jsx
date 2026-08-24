import React from 'react';
import { Award, UserCheck, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function About() {
  const { about } = websiteData;

  const highlightIcons = [
    <Award size={20} strokeWidth={2} />,
    <UserCheck size={20} strokeWidth={2} />,
    <ShieldCheck size={20} strokeWidth={2} />
  ];

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Large Yoga Studio Image with Badge */}
          <div className="about-image-wrapper">
            <img
              src={about.image}
              alt="Dhyana Naad Yogshala Studio in Dehradun"
              className="about-img"
              loading="lazy"
            />
            <div className="about-floating-card">
              <div className="about-badge-icon">
                <Sparkles size={22} />
              </div>
              <div className="about-badge-text">
                <h4>Authentic Practice</h4>
                <p>Rooted in Traditional Yogic Lineage</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy and Highlights */}
          <div className="about-content">
            <div className="section-badge badge-gold">
              <Sparkles size={13} />
              <span>{about.subheading}</span>
            </div>

            <h2 className="about-content-heading">{about.heading}</h2>

            <p className="about-desc">{about.description}</p>

            {/* Three Highlights */}
            <div className="about-highlights">
              {about.highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon-wrap">
                    {highlightIcons[index]}
                  </div>
                  <div className="highlight-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick CTA button */}
            <a
              href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(websiteData.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-call"
            >
              <MessageCircle size={18} />
              <span>Talk to Our Instructors</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
