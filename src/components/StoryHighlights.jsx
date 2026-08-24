import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Sparkles, MessageCircle } from 'lucide-react';

export function StoryHighlights({ data }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [progress, setProgress] = useState(0);

  const stories = [
    {
      id: 1,
      name: "Daily Yoga",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
      title: "Morning Vitality Practice",
      caption: "Daily 6:00 AM & 5:30 PM batches in pure Himalayan air. Suitable for beginners to advanced seekers.",
      badge: "🌅 Batch Open"
    },
    {
      id: 2,
      name: "Sound Bath",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop",
      title: "Tibetan Singing Bowl Healing",
      caption: "432Hz acoustic harmonics dissolve cellular stress and restore deep delta-brainwave tranquility.",
      badge: "🔔 Signature"
    },
    {
      id: 3,
      name: "Meditation",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      title: "Guided Mindfulness & Dhyana",
      caption: "Ancient visualization & breath mastery to calm racing thoughts and awaken inner clarity.",
      badge: "🧘 Sacred Stillness"
    },
    {
      id: 4,
      name: "Sanctuary",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      title: "Studio Ambiance • Dehradun",
      caption: "A peaceful sanctuary at Shree Ji Tower, Mothrowala, dedicated to spiritual rejuvenation.",
      badge: "✨ Studio Tour"
    },
    {
      id: 5,
      name: "Book Trial",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop",
      title: "Book Your 1st Trial Session",
      caption: "Experience personalized posture adjustments and sound vibration. Limited slots available.",
      badge: "🎟️ Trial Access"
    }
  ];

  // Auto-progress story timer (5 seconds per story)
  useEffect(() => {
    if (activeStoryIndex === null) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (activeStoryIndex < stories.length - 1) {
            setActiveStoryIndex((curr) => curr + 1);
            return 0;
          } else {
            setActiveStoryIndex(null);
            return 0;
          }
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeStoryIndex, stories.length]);

  const handleNext = (e) => {
    e.stopPropagation();
    if (activeStoryIndex < stories.length - 1) {
      setActiveStoryIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      setActiveStoryIndex(null);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (activeStoryIndex > 0) {
      setActiveStoryIndex((prev) => prev - 1);
      setProgress(0);
    }
  };

  const currentStory = activeStoryIndex !== null ? stories[activeStoryIndex] : null;

  return (
    <div className="story-highlights-wrapper">
      <div className="story-scroll-container">
        {stories.map((story, index) => (
          <button
            type="button"
            key={story.id}
            className="story-bubble-btn"
            onClick={() => {
              setActiveStoryIndex(index);
              setProgress(0);
            }}
            aria-label={`View ${story.name} story`}
          >
            <div className="story-ring-gradient">
              <div className="story-thumb-inner">
                <img src={story.image} alt={story.name} className="story-thumb-img" />
              </div>
            </div>
            <span className="story-name-label">{story.name}</span>
          </button>
        ))}
      </div>

      {/* Fullscreen Story Viewer Popup */}
      {currentStory && (
        <div className="story-viewer-backdrop animate-fade-in" onClick={() => setActiveStoryIndex(null)}>
          <div className="story-viewer-card animate-slide-up" onClick={(e) => e.stopPropagation()}>
            {/* Progress Bars */}
            <div className="story-progress-row">
              {stories.map((s, idx) => (
                <div key={s.id} className="story-progress-track">
                  <div 
                    className="story-progress-fill"
                    style={{
                      width: idx === activeStoryIndex ? `${progress}%` : idx < activeStoryIndex ? '100%' : '0%'
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Story Top Info */}
            <div className="story-header-meta">
              <div className="story-header-business">
                <img src={data.logo} alt={data.name} className="story-header-logo" />
                <div>
                  <h4 className="story-header-title">{data.name}</h4>
                  <span className="story-header-badge">{currentStory.badge}</span>
                </div>
              </div>
              <button 
                type="button" 
                className="story-close-btn"
                onClick={() => setActiveStoryIndex(null)}
                aria-label="Close Story"
              >
                <X size={20} />
              </button>
            </div>

            {/* Story Main Visual Frame */}
            <div className="story-media-box">
              <img src={currentStory.image} alt={currentStory.title} className="story-media-img" />
              <div className="story-media-gradient"></div>

              {/* Navigation Click Zones */}
              <button type="button" className="story-tap-zone left-zone" onClick={handlePrev} aria-label="Previous"></button>
              <button type="button" className="story-tap-zone right-zone" onClick={handleNext} aria-label="Next"></button>

              {/* Caption Card at Bottom */}
              <div className="story-caption-card">
                <h3 className="story-caption-title">{currentStory.title}</h3>
                <p className="story-caption-text">{currentStory.caption}</p>

                <a 
                  href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Dhyana Naad Yogshala, I was viewing your "${currentStory.title}" story and would like more information.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="story-cta-whatsapp-btn"
                >
                  <MessageCircle size={18} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StoryHighlights;
