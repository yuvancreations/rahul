import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function ImageLightbox({ 
  photos, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev 
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || currentIndex < 0 || currentIndex >= photos.length) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className="lightbox-backdrop animate-fade-in" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Top bar with count & close */}
        <div className="lightbox-topbar">
          <span className="lightbox-counter">
            {currentIndex + 1} / {photos.length}
          </span>
          <button 
            type="button" 
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>
        </div>

        {/* Media Frame */}
        <div className="lightbox-media-wrapper">
          <img 
            src={currentPhoto.url} 
            alt={currentPhoto.title} 
            className="lightbox-active-img"
          />

          {/* Navigation Arrows */}
          <button 
            type="button" 
            className="lightbox-nav-btn prev-btn"
            onClick={onPrev}
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>

          <button 
            type="button" 
            className="lightbox-nav-btn next-btn"
            onClick={onNext}
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Caption Bar */}
        <div className="lightbox-caption-box">
          <h4 className="lightbox-title">{currentPhoto.title}</h4>
          {currentPhoto.caption && (
            <p className="lightbox-caption">{currentPhoto.caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageLightbox;
