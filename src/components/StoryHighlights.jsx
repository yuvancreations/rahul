import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

export function StoryHighlights({ data }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [progress, setProgress] = useState(0);

  const stories = data.stories || [
    { id: 1, name: 'Insurance', image: '/assets/rahul/insurance.jpg', title: 'Insurance Services', caption: 'Vehicle, Health and Life Insurance renewal and new policy assistance starting ₹500.', badge: 'Insurance' },
    { id: 2, name: 'Licence', image: '/assets/rahul/licence.jpg', title: 'Licence Renewal', caption: 'Driving Licence renewal, duplicate licence, and transport application assistance.', badge: 'Licence' },
    { id: 3, name: 'Aadhaar/PAN', image: '/assets/rahul/pan_aadhaar.jpg', title: 'Aadhaar & PAN Services', caption: 'Demographic update guidance, new PAN application, and correction assistance.', badge: 'Identity' },
    { id: 4, name: 'GST Filing', image: '/assets/rahul/gst.jpg', title: 'GST Registration', caption: 'New GST number, amendments, business compliance and documentation assistance.', badge: 'GST' },
    { id: 5, name: 'Hotel Mgmt', image: '/assets/rahul/hotel.jpg', title: 'Hotel Management', caption: 'Hotel booking coordination, hospitality workflows, and business setup support.', badge: 'Hospitality' }
  ];

  useEffect(() => {
    if (activeStoryIndex === null) { setProgress(0); return; }
    const interval = setInterval(() => setProgress((prev) => {
      if (prev >= 100) {
        if (activeStoryIndex < stories.length - 1) { setActiveStoryIndex((curr) => curr + 1); return 0; }
        setActiveStoryIndex(null); return 0;
      }
      return prev + 2;
    }), 100);
    return () => clearInterval(interval);
  }, [activeStoryIndex, stories.length]);

  const handleNext = (e) => { e.stopPropagation(); setProgress(0); setActiveStoryIndex((i) => i < stories.length - 1 ? i + 1 : null); };
  const handlePrev = (e) => { e.stopPropagation(); setProgress(0); setActiveStoryIndex((i) => i > 0 ? i - 1 : i); };
  const currentStory = activeStoryIndex !== null ? stories[activeStoryIndex] : null;

  return (
    <div className="story-highlights-wrapper">
      <div className="story-scroll-container">
        {stories.map((story, index) => (
          <button type="button" key={story.id} className="story-bubble-btn" onClick={() => { setActiveStoryIndex(index); setProgress(0); }} aria-label={`View ${story.name} story`}>
            <div className="story-ring-gradient"><div className="story-thumb-inner"><img src={story.image} alt={story.name} className="story-thumb-img" /></div></div>
            <span className="story-name-label">{story.name}</span>
          </button>
        ))}
      </div>
      {currentStory && (
        <div className="story-viewer-backdrop animate-fade-in" onClick={() => setActiveStoryIndex(null)}>
          <div className="story-viewer-card animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="story-progress-row">{stories.map((s, idx) => <div key={s.id} className="story-progress-track"><div className="story-progress-fill" style={{ width: idx === activeStoryIndex ? `${progress}%` : idx < activeStoryIndex ? '100%' : '0%' }} /></div>)}</div>
            <div className="story-header-meta">
              <div className="story-header-business"><img src={data.logo} alt={data.name} className="story-header-logo" /><div><h4 className="story-header-title">{data.name}</h4><span className="story-header-badge">{currentStory.badge}</span></div></div>
              <button type="button" className="story-close-btn" onClick={() => setActiveStoryIndex(null)} aria-label="Close Story"><X size={20} /></button>
            </div>
            <div className="story-media-box">
              <img src={currentStory.image} alt={currentStory.title} className="story-media-img" />
              <div className="story-media-gradient" />
              <button type="button" className="story-tap-zone left-zone" onClick={handlePrev} aria-label="Previous" />
              <button type="button" className="story-tap-zone right-zone" onClick={handleNext} aria-label="Next" />
              <div className="story-caption-card"><h3 className="story-caption-title">{currentStory.title}</h3><p className="story-caption-text">{currentStory.caption}</p>
                <a href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Rahul, I was viewing your "${currentStory.title}" story and would like to know more about this service.`)}`} target="_blank" rel="noopener noreferrer" className="story-cta-whatsapp-btn"><MessageCircle size={18} /><span>Enquire on WhatsApp</span></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StoryHighlights;
