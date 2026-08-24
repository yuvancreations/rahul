import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Music2 } from 'lucide-react';

export function SoundHealingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodeRef = useRef(null);

  const startSoundHealing = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 1.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 432Hz Tibetan Singing Bowl harmonics (Sacred healing frequency)
      const baseFreq = 432;
      const harmonics = [
        { freq: baseFreq, gain: 0.5, type: 'sine' },
        { freq: baseFreq * 1.5, gain: 0.25, type: 'sine' }, // 648Hz (Fifth)
        { freq: baseFreq * 2.75, gain: 0.15, type: 'sine' }, // 1188Hz (High harmonic)
        { freq: baseFreq * 0.5, gain: 0.2, type: 'triangle' } // 216Hz (Deep base hum)
      ];

      oscillatorsRef.current = harmonics.map(({ freq, gain: g, type }) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Add subtle natural binaural vibrato/drift
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2, ctx.currentTime); // 0.2Hz wave
        lfoGain.gain.setValueAtTime(2.5, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(g, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        return { osc, lfo };
      });

      setIsPlaying(true);
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  const stopSoundHealing = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      setTimeout(() => {
        oscillatorsRef.current.forEach(({ osc, lfo }) => {
          try {
            osc.stop();
            lfo.stop();
          } catch {}
        });
        if (ctx.state !== 'closed') ctx.close();
        setIsPlaying(false);
      }, 800);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundHealing();
    } else {
      startSoundHealing();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try { audioCtxRef.current.close(); } catch {}
      }
    };
  }, []);

  return (
    <div className="sound-healing-widget">
      <button 
        type="button" 
        className={`sound-healing-pill ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggleSound}
        aria-label="Sound Healing Audio Frequency Experience"
        title="Listen to 432Hz Tibetan Singing Bowl Resonance"
      >
        <div className="sound-icon-halo">
          {isPlaying ? (
            <Volume2 size={17} className="pulse-icon" />
          ) : (
            <Music2 size={17} />
          )}
        </div>

        <div className="sound-text-info">
          <span className="sound-title">
            {isPlaying ? "Playing 432Hz Sound Healing" : "Tap for 432Hz Healing Frequency"}
          </span>
          <span className="sound-subtitle">Tibetan Bowl Acoustic Energy</span>
        </div>

        {isPlaying && (
          <div className="soundwave-visualizer">
            <span className="wave-bar bar-1"></span>
            <span className="wave-bar bar-2"></span>
            <span className="wave-bar bar-3"></span>
            <span className="wave-bar bar-4"></span>
          </div>
        )}
      </button>
    </div>
  );
}

export default SoundHealingPlayer;
