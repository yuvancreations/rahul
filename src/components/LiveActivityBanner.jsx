import React from 'react';
import { Sparkles, Users, Clock, Flame } from 'lucide-react';

export function LiveActivityBanner({ data }) {
  return (
    <div className="live-activity-bar">
      <div className="live-pill-tag">
        <span className="live-dot-pulse"></span>
        <span>ADMISSIONS OPEN</span>
      </div>

      <div className="live-scrolling-content">
        <span className="live-stat-item">
          <Clock size={15} className="live-icon" />
          <span>Daily Batches: <strong>6:00 AM & 5:30 PM</strong></span>
        </span>

        <span className="live-divider">•</span>

        <span className="live-stat-item">
          <Flame size={15} className="live-icon fire" />
          <span>Limited to <strong>12 Yogis</strong> per batch for personal attention</span>
        </span>

        <span className="live-divider">•</span>

        <span className="live-stat-item">
          <Users size={15} className="live-icon" />
          <span><strong>4.9/5 ⭐</strong> Rated Sanctuary in Dehradun</span>
        </span>
      </div>
    </div>
  );
}

export default LiveActivityBanner;
