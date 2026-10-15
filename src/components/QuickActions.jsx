import React from 'react';
import { 
  MessageCircle, 
  Phone, 
  Navigation, 
  Star, 
  Bookmark,
  Sparkles
} from 'lucide-react';

export function QuickActions({ 
  data, 
  onOpenReviewModal, 
  isSaved, 
  onToggleSave,
  onShowToast 
}) {
  const whatsappUrl = `https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(data.whatsappMessage)}`;
  const callUrl = `tel:${data.phone}`;

  const handleAction = (type, e) => {
    if (type === 'review') {
      e.preventDefault();
      onOpenReviewModal();
    } else if (type === 'save') {
      e.preventDefault();
      onToggleSave();
    }
  };

  return (
    <section className="quick-actions-section" aria-label="Quick Profile Actions">
      <div className="quick-actions-card modern-glass-card">
        {/* 1. Message */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="quick-action-item action-whatsapp-item"
          id="action-message"
        >
          <div className="action-icon-circle bg-whatsapp-gradient">
            <MessageCircle size={22} className="action-icon text-white" />
          </div>
          <div className="action-text-group">
            <span className="action-label">WhatsApp</span>
            <span className="action-sublabel">Instant Chat</span>
          </div>
        </a>

        {/* 2. Call */}
        <a 
          href={callUrl}
          className="quick-action-item action-call-item"
          id="action-call"
        >
          <div className="action-icon-circle bg-call-gradient">
            <Phone size={22} className="action-icon text-white" />
          </div>
          <div className="action-text-group">
            <span className="action-label">Call Us</span>
            <span className="action-sublabel">Direct Line</span>
          </div>
        </a>

        {/* 3. Directions */}
        <a 
          href={data.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="quick-action-item action-directions-item"
          id="action-directions"
        >
          <div className="action-icon-circle bg-directions-gradient">
            <Navigation size={22} className="action-icon text-white" />
          </div>
          <div className="action-text-group">
            <span className="action-label">Directions</span>
            <span className="action-sublabel">Google Maps</span>
          </div>
        </a>

        {/* 4. Review (Direct Google Review Link) */}
        <a 
          href={data.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="quick-action-item action-review-item"
          id="action-review"
          title="Write a Review on Google Maps"
        >
          <div className="action-icon-circle bg-review-gradient">
            <Star size={22} className="action-icon text-white" />
          </div>
          <div className="action-text-group">
            <span className="action-label">Review</span>
            <span className="action-sublabel">See rating &amp; reviews</span>
          </div>
        </a>

        {/* 5. Save */}
        <button 
          type="button"
          onClick={(e) => handleAction('save', e)}
          className={`quick-action-item action-save-item ${isSaved ? 'is-saved' : ''}`}
          id="action-save"
        >
          <div className={`action-icon-circle ${isSaved ? 'bg-saved-active' : 'bg-save-gradient'}`}>
            <Bookmark 
              size={22} 
              className="action-icon text-white" 
              fill={isSaved ? "#ffffff" : "none"} 
            />
          </div>
          <div className="action-text-group">
            <span className="action-label">{isSaved ? "Saved" : "Save"}</span>
            <span className="action-sublabel">{isSaved ? "In Bookmarks" : "Bookmark"}</span>
          </div>
        </button>
      </div>
    </section>
  );
}

export default QuickActions;
