import React, { useState } from 'react';
import { 
  Sparkles, 
  Sun, 
  Wind, 
  Radio, 
  HeartPulse, 
  Flower2, 
  ChevronRight,
  Clock,
  CheckCircle2,
  X,
  MessageCircle,
  Award,
  Layers
} from 'lucide-react';

export function ServicesSection({ data }) {
  const [selectedModalProgram, setSelectedModalProgram] = useState(null);

  const getProgramIcon = (iconName) => {
    switch (iconName) {
      case 'Sun':
        return <Sun size={15} />;
      case 'Wind':
        return <Wind size={15} />;
      case 'Radio':
        return <Radio size={15} />;
      case 'HeartPulse':
        return <HeartPulse size={15} />;
      case 'Flower2':
        return <Flower2 size={15} />;
      case 'Sparkles':
      default:
        return <Sparkles size={15} />;
    }
  };

  const getBatchTag = (id) => {
    switch (id) {
      case 'yoga-classes': return "🌅 6:00 AM & 5:30 PM";
      case 'sound-healing': return "🔔 432Hz Resonance";
      case 'pranayama': return "🧘 Breath Mastery";
      case 'yoga-therapy': return "🩺 1-on-1 Relief";
      case 'meditation': return "✨ Guided Dhyana";
      case 'wellness-programs': return "🌿 Detox & Retreat";
      default: return "Daily Batch";
    }
  };

  const handleOpenProgram = (program) => {
    setSelectedModalProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedModalProgram(null);
  };

  return (
    <section id="programs" className="profile-card programs-card" aria-label="Our Programs">
      {/* Card Header */}
      <div className="card-header-with-action">
        <div className="card-header-icon-title">
          <span className="card-icon-badge bg-emerald-badge">
            <Sparkles size={20} className="section-icon text-emerald" />
          </span>
          <div>
            <h2 className="section-title">Programs & Practices</h2>
            <p className="section-subtitle-sm">Holistic Offerings • Beginner to Advanced</p>
          </div>
        </div>

        <button 
          type="button" 
          className="header-text-link"
          onClick={() => handleOpenProgram(data.programs[0])}
        >
          <span>Explore All</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Programs Grid */}
      <div className="programs-grid-scroll">
        {data.programs.map((program) => (
          <div 
            key={program.id}
            className="program-mini-card modern-program-card"
            onClick={() => handleOpenProgram(program)}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${program.title}`}
            onKeyDown={(e) => e.key === 'Enter' && handleOpenProgram(program)}
          >
            {/* Image Box */}
            <div className="program-image-box">
              <img 
                src={program.image} 
                alt={program.title} 
                className="program-thumbnail"
                loading="lazy"
              />
              <div className="program-batch-pill">
                {getBatchTag(program.id)}
              </div>
              <div className="program-icon-badge-overlay">
                {getProgramIcon(program.icon)}
              </div>
            </div>

            {/* Content */}
            <div className="program-card-info">
              <h3 className="program-name">{program.title}</h3>
              <p className="program-subtitle">{program.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Program Detail Popup Modal */}
      {selectedModalProgram && (
        <div className="modal-backdrop animate-fade-in" onClick={handleCloseModal}>
          <div 
            className="modal-content-card program-detail-popup animate-slide-up" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modal-program-title"
          >
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={handleCloseModal}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {/* Hero Image in Modal */}
            <div className="program-modal-image-box">
              <img 
                src={selectedModalProgram.image} 
                alt={selectedModalProgram.title} 
                className="program-modal-hero-img"
              />
              <span className="program-modal-tag">✨ {selectedModalProgram.tag || "Signature Practice"}</span>
            </div>

            {/* Modal Body Info */}
            <div className="program-modal-body">
              <div>
                <h3 id="modal-program-title" className="program-modal-title">{selectedModalProgram.title}</h3>
                <p className="program-modal-subtitle">{selectedModalProgram.subtitle}</p>
              </div>

              {/* Meta Chips (Timing, Duration, Level) */}
              <div className="program-meta-chips-grid">
                <div className="program-meta-chip">
                  <Clock size={15} className="text-emerald" />
                  <span>{selectedModalProgram.timing}</span>
                </div>
                {selectedModalProgram.duration && (
                  <div className="program-meta-chip">
                    <Layers size={15} className="text-gold" />
                    <span>{selectedModalProgram.duration}</span>
                  </div>
                )}
                {selectedModalProgram.level && (
                  <div className="program-meta-chip">
                    <Award size={15} className="text-emerald" />
                    <span>{selectedModalProgram.level}</span>
                  </div>
                )}
              </div>

              <p className="program-modal-desc">
                {selectedModalProgram.description}
              </p>

              {/* Benefits Checklist */}
              {selectedModalProgram.benefits && selectedModalProgram.benefits.length > 0 && (
                <div className="program-modal-benefits">
                  <h4 className="benefits-heading">Key Highlights &amp; Benefits:</h4>
                  {selectedModalProgram.benefits.map((benefit, idx) => (
                    <div key={idx} className="benefit-item">
                      <CheckCircle2 size={16} className="benefit-check-icon" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* WhatsApp Booking CTA */}
              <div className="pt-2">
                <a 
                  href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Dhyana Naad Yogshala, I am interested in "${selectedModalProgram.title}" (${selectedModalProgram.timing}). Please share details and slot availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-whatsapp full-width"
                >
                  <MessageCircle size={18} />
                  <span>Book Trial Slot on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesSection;
