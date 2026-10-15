import React from 'react';
import { Star, ExternalLink, MessageSquarePlus, CheckCircle2 } from 'lucide-react';

export function ReviewsSection({ data }) {
  const reviewsList = data.reviews;

  return (
    <section id="reviews" className="profile-card reviews-card" aria-label="Customer Reviews">
      {/* Header */}
      <div className="card-header-with-action">
        <div className="card-header-icon-title">
          <span className="card-icon-badge bg-gold-badge">
            <Star size={20} className="section-icon text-gold" />
          </span>
          <div>
            <h2 className="section-title">Client Reviews</h2>
            <p className="section-subtitle-sm">Verified feedback from clients assisted across India</p>
          </div>
        </div>

        <a 
          href={data.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="header-text-link"
          title="See verified client reviews"
        >
          <span>Client Ratings</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Review Score Summary Bar */}
      <div className="reviews-summary-bar">
        <div className="rating-score-pill">
          <Star size={18} className="star-gold-filled" fill="var(--color-gold)" />
          <span className="rating-number">{data.stats.rating}</span>
          <span className="rating-count">({data.stats.reviewsCount} reviews)</span>
        </div>

        <div className="reviewer-avatars-row">
          {reviewsList.map((rev, i) => (
            <img 
              key={rev.id || i}
              src={rev.avatar} 
              alt={rev.name} 
              className="reviewer-mini-avatar"
              style={{ zIndex: 10 - i }}
            />
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="reviews-cards-stack">
        {reviewsList.map((review) => (
          <div key={review.id} className="review-single-card">
            <div className="review-author-row">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="review-author-avatar"
                loading="lazy"
              />
              <div className="review-author-meta">
                <div className="flex items-center gap-1.5">
                  <h4 className="review-author-name">{review.name}</h4>
                  <CheckCircle2 size={14} className="text-emerald inline-block" title="Verified client review" />
                </div>
                <div className="review-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={13} 
                      className={i < review.rating ? "star-gold-filled" : "text-gray-300"} 
                      fill={i < review.rating ? "var(--color-gold)" : "none"} 
                    />
                  ))}
                </div>
              </div>
              <span className="review-date-badge">{review.date}</span>
            </div>

            <p className="review-text-content">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>

      {/* WhatsApp Feedback CTA */}
      <div className="write-review-btn-box">
        <a 
          href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Rahul, I would like to share feedback / enquire about your services.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="write-review-action-btn"
          id="write-google-review-btn"
          title="Share your review on WhatsApp"
        >
          <MessageSquarePlus size={18} />
          <span>Connect with Rahul Parida</span>
          <ExternalLink size={14} className="opacity-70" />
        </a>
      </div>
    </section>
  );
}

export default ReviewsSection;
