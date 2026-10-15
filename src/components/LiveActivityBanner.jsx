import React from 'react';
import { ShieldCheck, Sparkles, PhoneCall, CheckCircle } from 'lucide-react';

export function LiveActivityBanner({ data }) {
  return (
    <div className="live-activity-bar">
      <div className="live-pill-tag">
        <span className="live-dot-pulse"></span>
        <span>SERVICES STARTING ₹500</span>
      </div>

      <div className="live-scrolling-content">
        <span className="live-stat-item">
          <ShieldCheck size={15} className="live-icon" />
          <span><strong>Insurance • Licence • Aadhaar • PAN • GST</strong></span>
        </span>

        <span className="live-divider">•</span>

        <span className="live-stat-item">
          <Sparkles size={15} className="live-icon fire" />
          <span><strong>Personal One-on-One Assistance</strong></span>
        </span>

        <span className="live-divider">•</span>

        <span className="live-stat-item">
          <PhoneCall size={15} className="live-icon" />
          <span>Direct WhatsApp &amp; Call: <strong>+91 82799 37975</strong></span>
        </span>
      </div>
    </div>
  );
}

export default LiveActivityBanner;
