import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, MessageCircle } from 'lucide-react';

export function ProgramFinder({ data }) {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const goals = [
    {
      id: "stress",
      icon: "🕊️",
      title: "Stress & Anxiety Relief",
      recommended: "Tibetan Sound Healing & Guided Meditation",
      reason: "432Hz harmonic acoustic bowls deeply relax the nervous system and calm emotional overwhelm.",
      timing: "Morning & Evening Slots Available",
      whatsappMsg: "Hello Dhyana Naad, I want to book a session for Stress & Anxiety Relief (Sound Healing / Meditation)."
    },
    {
      id: "fitness",
      icon: "🧘",
      title: "Daily Fitness & Flexibility",
      recommended: "Hatha & Ashtanga Yoga Classes",
      reason: "Traditional guided asanas that sculpt core strength, improve flexibility, and boost daily metabolism.",
      timing: "6:00 AM & 5:30 PM Daily",
      whatsappMsg: "Hello Dhyana Naad, I am interested in joining your daily Yoga Classes for fitness and flexibility."
    },
    {
      id: "pain",
      icon: "🩺",
      title: "Back Pain & Posture Relief",
      recommended: "Therapeutic Yoga & Pranayama",
      reason: "Customized alignment postures targeting spinal decompression, joint lubrication, and posture correction.",
      timing: "Personalized Batches",
      whatsappMsg: "Hello Dhyana Naad, I want to consult for Yoga Therapy regarding Back Pain / Posture alignment."
    },
    {
      id: "energy",
      icon: "⚡",
      title: "Inner Peace & Vital Energy",
      recommended: "Pranayama & Chakra Sound Resonance",
      reason: "Ancient breath regulation techniques that oxygenate the bloodstream and elevate vital life-force.",
      timing: "Morning Vitality Batches",
      whatsappMsg: "Hello Dhyana Naad, I want to join Pranayama & Energy Balancing sessions."
    }
  ];

  const currentMatch = goals.find(g => g.id === selectedGoal);

  return (
    <section className="profile-card program-finder-card" aria-label="Find Your Practice">
      <div className="card-header-simple">
        <div className="card-header-icon-title">
          <span className="card-icon-badge gold-glow">
            <Sparkles size={20} className="section-icon" />
          </span>
          <div>
            <h2 className="section-title">Find Your Perfect Practice</h2>
            <p className="section-subtitle-sm">Select your goal to get a personalized recommendation</p>
          </div>
        </div>
      </div>

      {!selectedGoal ? (
        <div className="goals-options-grid">
          {goals.map((g) => (
            <button
              type="button"
              key={g.id}
              className="goal-option-btn"
              onClick={() => setSelectedGoal(g.id)}
            >
              <span className="goal-emoji">{g.icon}</span>
              <div className="goal-text">
                <span className="goal-title">{g.title}</span>
                <span className="goal-tap-hint">Tap to match →</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="match-result-card animate-fade-in">
          <div className="match-result-badge">
            <CheckCircle2 size={16} />
            <span>Recommended for You</span>
          </div>

          <div className="match-content">
            <h3 className="match-title">{currentMatch.recommended}</h3>
            <p className="match-reason">{currentMatch.reason}</p>
            <span className="match-timing">🕒 {currentMatch.timing}</span>
          </div>

          <div className="match-actions-row">
            <a
              href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(currentMatch.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Book Trial on WhatsApp</span>
            </a>

            <button
              type="button"
              className="reset-match-btn"
              onClick={() => setSelectedGoal(null)}
              title="Choose another goal"
            >
              <RotateCcw size={16} />
              <span>Change Goal</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProgramFinder;
