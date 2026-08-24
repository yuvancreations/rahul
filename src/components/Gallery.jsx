import React, { useState } from 'react';
import { Sparkles, X, Eye, Images } from 'lucide-react';
import { websiteData } from '../data/websiteData';

export default function Gallery() {
  const { gallery } = websiteData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = ['All', 'Yoga', 'Sound Bath', 'Meditation', 'Pranayama'];

  const filteredImages = activeFilter === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeFilter);

  const displayedImages = filteredImages.slice(0, visibleCount);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleViewMore = () => {
    // If more photos are requested, link directly to WhatsApp gallery or scroll to Instagram/enquiry
    window.open(`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello! Can you please share more photos of Dhyana Naad Yogshala sessions and studio?")}`, '_blank');
  };

  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Images size={13} />
            <span>Studio & Moments</span>
          </div>
          <h2 className="section-title">Experience the Ambiance</h2>
          <p className="section-subtitle">
            Glimpse into our mindful sessions, harmonious acoustic circles, and peaceful environment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive CSS Grid */}
        <div className="gallery-grid">
          {displayedImages.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.url}
                alt={item.title}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-category">{item.category}</span>
                <h4 className="gallery-item-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* View More Photos Button */}
        <div className="gallery-footer-cta">
          <button
            onClick={handleViewMore}
            className="btn btn-outline-forest"
            aria-label="View more photos on WhatsApp"
          >
            <Eye size={18} />
            <span>View More Photos</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-backdrop" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close image preview">
              <X size={20} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="lightbox-img"
            />
            <div className="lightbox-info">
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>{selectedImage.title}</h3>
                <span style={{ color: 'var(--color-gold-light)', fontSize: '0.85rem' }}>{selectedImage.category}</span>
              </div>
              <a
                href={`https://wa.me/${websiteData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I saw "${selectedImage.title}" in your gallery and want to know more!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                Book Session
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
