import React, { useState } from 'react';
import { 
  Share2, 
  MoreVertical, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  UserPlus, 
  UserCheck, 
  QrCode, 
  Bookmark, 
  Sparkles, 
  Star,
  ShieldCheck,
  FolderCheck
} from 'lucide-react';
import StoryHighlights from './StoryHighlights';

export function ProfileHeader({ 
  data, 
  onShare, 
  isFollowed, 
  onToggleFollow, 
  isSaved, 
  onToggleSave,
  onShowQR 
}) {
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 30;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const whatsappUrl = `https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(data.whatsappMessage)}`;
  const callUrl = `tel:${data.phone}`;

  return (
    <header className="profile-header-container">
      {/* 1. Cover Photo with Brand Title Directly on Banner */}
      <div className="cover-wrapper">
        <img 
          src={data.coverImage} 
          alt={`${data.name} Cover`} 
          className="cover-image"
          loading="eager"
        />
        <div className="cover-overlay"></div>

        {/* Top Floating Action Bar */}
        <div className="cover-top-bar">
          <div className="cover-pill-verified desktop-only-badge">
            <Sparkles size={14} className="tag-sparkle" />
            <span>Verified Personal Service Provider</span>
          </div>

          <div className="cover-actions-right">
            <button 
              type="button" 
              className="glass-pill-btn share-btn"
              onClick={onShare}
              aria-label="Share Profile"
            >
              <Share2 size={16} strokeWidth={2.2} />
              <span>Share</span>
            </button>

            <div className="more-menu-wrapper">
              <button 
                type="button" 
                className="glass-circle-btn more-btn"
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                aria-label="More options"
                aria-expanded={showMoreMenu}
              >
                <MoreVertical size={18} strokeWidth={2.5} />
              </button>

              {showMoreMenu && (
                <div className="dropdown-menu-card animate-fade-in">
                  <button 
                    type="button" 
                    className="dropdown-item"
                    onClick={() => {
                      setShowMoreMenu(false);
                      onShare();
                    }}
                  >
                    <Share2 size={16} />
                    <span>Share via Apps</span>
                  </button>
                  <button 
                    type="button" 
                    className="dropdown-item"
                    onClick={() => {
                      setShowMoreMenu(false);
                      onShowQR();
                    }}
                  >
                    <QrCode size={16} />
                    <span>Show QR Code</span>
                  </button>
                  <button 
                    type="button" 
                    className={`dropdown-item ${isSaved ? 'active' : ''}`}
                    onClick={() => {
                      setShowMoreMenu(false);
                      onToggleSave();
                    }}
                  >
                    <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
                    <span>{isSaved ? "Saved to Bookmarks" : "Save Profile"}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 🌟 Brand Name Directly on the Banner Photo */}
        <div className="cover-brand-hero-content animate-slide-up">
          <div className="banner-badge-row">
            <span className="banner-gold-pill">
              <Sparkles size={12} />
              <span>Services Starting From ₹500 • Pan-India Support</span>
            </span>
          </div>

          <div className="banner-title-row">
            <h1 className="banner-brand-title">{data.name}</h1>
            {data.isVerified && (
              <span className="banner-verified-badge" title="Verified Personal Service Provider">
                <CheckCircle2 size={24} className="verified-icon-svg" />
              </span>
            )}
          </div>

          <p className="banner-category-text">
            {data.category}
          </p>

          <div className="banner-meta-row">
            <span className="banner-meta-item">
              <MapPin size={13} className="banner-icon-gold" />
              <span>{data.location}</span>
            </span>
            <span className="banner-dot">•</span>
            <span className="banner-meta-item rating">
              <Star size={12} fill="#c99a2c" color="#c99a2c" />
              <span><strong>{data.stats.rating}</strong> ({data.stats.reviewsCount} verified reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Identity Actions & Stats Bar */}
      <div className="identity-section">
        <div className="identity-flex-desktop">
          {/* Avatar and Social Proof Header Row (Avatar positioned on the right) */}
          <div className="identity-top-row-mobile profile-avatar-right">
            {/* Social Proof & Follow Info on the Left */}
            <div className="identity-details">
              <div className="identity-proof-box">
                <div className="proof-and-follow-group">
                  <div className="avatars-group">
                    {data.stats.avatars.map((avatarUrl, idx) => (
                      <img 
                        key={idx} 
                        src={avatarUrl} 
                        alt="Member Avatar" 
                        className="proof-avatar"
                        style={{ zIndex: 10 - idx }}
                      />
                    ))}
                    <span className="proof-text">{data.stats.peopleConnectedLabel}</span>
                  </div>

                  <button 
                    type="button" 
                    className={`follow-toggle-btn ${isFollowed ? 'following' : ''}`}
                    onClick={onToggleFollow}
                    id="follow-btn"
                  >
                    {isFollowed ? (
                      <>
                        <UserCheck size={15} strokeWidth={2.5} />
                        <span>Following</span>
                      </>
                    ) : (
                      <>
                        <UserPlus size={15} strokeWidth={2.5} />
                        <span>+ Follow</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Overlapping Profile Pic on the RIGHT */}
            <div className="avatar-wrapper">
              <div className="avatar-circle">
                <img 
                  src={data.logo} 
                  alt={data.name} 
                  className="avatar-img"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.png";
                  }}
                />
                <span className="online-badge" title="Active Business"></span>
              </div>
            </div>
          </div>

          {/* Story Highlights Bar */}
          <div className="inline-story-container">
            <StoryHighlights data={data} />
          </div>

          {/* 3. Primary CTA Actions */}
          <div className="identity-actions-col">
            <div className="primary-actions-grid">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-btn cta-whatsapp"
                id="primary-whatsapp-btn"
              >
                <svg 
                  className="btn-icon-svg" 
                  viewBox="0 0 24 24" 
                  width="19" 
                  height="19" 
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.352.226-.653.075-1.804-.903-2.982-1.608-4.17-3.649-.313-.538.313-.499.896-1.666.098-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.238-.244-.589-.493-.509-.678-.518-.176-.009-.377-.01-.578-.01-.201 0-.528.075-.804.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.08 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.28.497 1.717.636.721.23 1.377.198 1.896.12.578-.088 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352z"/>
                  <path d="M12 2a9.93 9.93 0 0 0-8.625 15.01L2 22l5.14-1.348A9.97 9.97 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.64 0-3.19-.48-4.52-1.31l-.32-.2-3.36.88.9-3.27-.21-.34A8.17 8.17 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              <a 
                href={callUrl} 
                className="cta-btn cta-call"
                id="primary-call-btn"
              >
                <Phone size={18} className="btn-icon" />
                <span>Call Now</span>
              </a>
            </div>

            <span className="header-trust-note">Direct Assistance • Verified Support</span>
          </div>
        </div>

        {/* 4. Desktop Navigation Tabs */}
        <div className="desktop-profile-nav">
          <button type="button" className="desktop-nav-link" onClick={() => scrollTo('about')}>
            <ShieldCheck size={16} />
            <span>About Rahul Parida</span>
          </button>
          <button type="button" className="desktop-nav-link" onClick={() => scrollTo('programs')}>
            <Sparkles size={16} />
            <span>Services (From ₹500)</span>
          </button>
          <button type="button" className="desktop-nav-link" onClick={() => scrollTo('photos')}>
            <FolderCheck size={16} />
            <span>Service Portfolio</span>
          </button>
          <button type="button" className="desktop-nav-link" onClick={() => scrollTo('reviews')}>
            <Star size={16} />
            <span>Client Reviews</span>
          </button>
          <button type="button" className="desktop-nav-link" onClick={() => scrollTo('location')}>
            <MapPin size={16} />
            <span>Reach &amp; Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
