import React, { useState } from 'react';
import { Camera, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

export function PhotosSection({ data }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Yoga', 'Sound Bath', 'Meditation', 'Studio'];

  const filteredPhotos = activeCategory === 'All' 
    ? data.photos 
    : data.photos.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(p.category.toLowerCase()));

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="photos" className="profile-card photos-card" aria-label="Photo Gallery">
      {/* Header */}
      <div className="card-header-with-action">
        <div className="card-header-icon-title">
          <span className="card-icon-badge">
            <Camera size={20} className="section-icon" />
          </span>
          <div>
            <h2 className="section-title">Photo Gallery</h2>
            <p className="section-subtitle-sm">A glimpse into our sanctuary & practice</p>
          </div>
        </div>

        <button 
          type="button" 
          className="header-text-link"
          onClick={() => openLightbox(0)}
        >
          <span>View Lightbox</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Category Filter Pills */}
      <div className="photos-filter-bar">
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            className={`photo-filter-chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* 3-Column Photo Grid */}
      <div className="photos-grid-3col">
        {filteredPhotos.map((photo, index) => (
          <div 
            key={photo.id}
            className="photo-grid-item"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            aria-label={`View ${photo.title}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
          >
            <img 
              src={photo.url} 
              alt={photo.title} 
              className="photo-grid-thumb"
              loading="lazy"
            />
            <div className="photo-hover-overlay">
              <span className="photo-category-pill">{photo.category}</span>
              <Maximize2 size={20} className="photo-zoom-icon" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox 
        photos={filteredPhotos}
        currentIndex={photoIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </section>
  );
}

export default PhotosSection;
