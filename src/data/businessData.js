/**
 * Business Data Model - Dhyana Naad Yogshala
 * All profile attributes, programs, gallery, reviews, and contact info.
 */

export const businessData = {
  // 1. Core Profile
  name: "Dhyana Naad Yogshala",
  username: "@dhyananaadyogshala",
  tagline: "Yoga • Meditation • Sound Healing • Wellness",
  category: "Yoga Studio & Sound Healing Sanctuary",
  isVerified: true,
  location: "Dehradun, Uttarakhand",
  logo: "/logo.png",
  coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop",

  // 2. Stats & Social Proof
  stats: {
    peopleConnectedLabel: "128+ people connected",
    rating: 4.9,
    reviewsCount: 128,
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    ]
  },

  // 3. Contact & Direct URLs
  phone: "+91 95574 08436",
  whatsapp: "+919557408436",
  email: "dhyananaad@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/uLSmh4g48rR3o3Wp8",
  googleReviewUrl: "https://maps.app.goo.gl/uLSmh4g48rR3o3Wp8",
  whatsappMessage: "Hello Dhyana Naad Yogshala, I found your business profile on LiveJao and would like to know more about your yoga & sound healing batches.",

  // 4. Address & Timings
  address: {
    line1: "Top Floor, Shree Ji Tower",
    line2: "Near Doon University Chowk",
    area: "Mothrowala, Dehradun",
    statePin: "Uttarakhand – 248001"
  },
  timings: "Mon – Sat: 6:00 AM – 8:00 PM | Sunday Closed",

  // 5. About Section
  about: {
    title: "About Us",
    description: "Dhyana Naad Yogshala is a sacred space in Dehradun dedicated to yoga, meditation, and Tibetan sound healing. We help you release chronic stress, balance vital prana energy, and transform your life naturally under authentic lineage masters.",
    trustBadges: [
      {
        id: 1,
        title: "Experienced Trainers",
        icon: "UserCheck"
      },
      {
        id: 2,
        title: "Personal Attention",
        icon: "Users"
      },
      {
        id: 3,
        title: "Holistic Approach",
        icon: "Sparkles"
      }
    ],
    studioImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
    alt: "Dhyana Naad Yogshala Sacred Studio Sanctuary"
  },

  // 6. Programs / Services with Full Details
  programs: [
    {
      id: "yoga-classes",
      title: "Yoga Classes",
      subtitle: "Daily yoga for all levels",
      description: "Authentic Hatha and Ashtanga yoga postures designed for flexibility, core strength, and spinal alignment. Suitable for beginners to advanced seekers.",
      icon: "Sparkles",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop",
      timing: "6:00 AM & 5:30 PM Daily",
      duration: "60 Minutes / Session",
      level: "Beginner to Advanced",
      tag: "Daily Practice",
      benefits: [
        "Enhances body flexibility, posture, and core stamina",
        "Calms stress levels and awakens daily morning vitality",
        "Personal posture correction by certified lineage yoga masters"
      ]
    },
    {
      id: "meditation",
      title: "Meditation",
      subtitle: "Calm your mind, find inner peace",
      description: "Mindfulness and ancient guided visualization methods that calm the nervous system, build emotional resilience, and quiet restless thoughts.",
      icon: "Sun",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
      timing: "7:00 AM & 6:30 PM Daily",
      duration: "45 Minutes / Session",
      level: "All Seekers",
      tag: "Inner Peace",
      benefits: [
        "Dissolves anxiety, overthinking, and emotional fatigue",
        "Deepens sleep quality and mental clarity",
        "Guided chakra visualization & mindfulness techniques"
      ]
    },
    {
      id: "pranayama",
      title: "Pranayama",
      subtitle: "Breath control for better life",
      description: "Harness the vital life-force energy (Prana) through rhythmic breath control, improving lung capacity, blood oxygenation, and nervous balance.",
      icon: "Wind",
      image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=600&auto=format&fit=crop",
      timing: "Morning Vitality Slots",
      duration: "40 Minutes / Session",
      level: "All Levels",
      tag: "Vital Energy",
      benefits: [
        "Expands lung capacity and balances oxygen intake",
        "Calms autonomic nervous system within 10 minutes",
        "Clears energetic blockages (Nadis) throughout the body"
      ]
    },
    {
      id: "sound-healing",
      title: "Sound Healing",
      subtitle: "Heal your energy with sound",
      description: "Acoustic healing with Himalayan Tibetan singing bowls and harmonic resonance that release deep cellular tension and restore inner harmony.",
      icon: "Radio",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600&auto=format&fit=crop",
      timing: "Special Sessions (Morning & Evening)",
      duration: "60 Minutes Acoustic Bath",
      level: "Deep Relaxation",
      tag: "Acoustic Therapy",
      benefits: [
        "432Hz sacred harmonic frequencies relax brainwaves into delta state",
        "Relieves chronic insomnia, stress, and nervous strain",
        "Complete acoustic vibration cleanse of aura and chakras"
      ]
    },
    {
      id: "yoga-therapy",
      title: "Yoga Therapy",
      subtitle: "Relieve pain, restore body balance",
      description: "Customized therapeutic asanas targeting lower back pain, neck stiffness, postural issues, joint stiffness, and stress-induced ailments.",
      icon: "HeartPulse",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600&auto=format&fit=crop",
      timing: "By 1-on-1 Appointment",
      duration: "Personalized Plan",
      level: "Therapeutic Rehabilitation",
      tag: "Restorative",
      benefits: [
        "Targeted spinal decompression for lower back & neck relief",
        "Safe, gentle alignment routines tailored to individual health",
        "Progress tracking with certified therapeutic instructors"
      ]
    },
    {
      id: "wellness-programs",
      title: "Wellness Programs",
      subtitle: "Holistic programs for mind & body",
      description: "Complete lifestyle detoxification, chakra balancing, nutrition advice, and wellness weekend retreats in serene Dehradun foothills.",
      icon: "Flower2",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
      timing: "Weekly Batches & Weekend Immersions",
      duration: "Multi-Day Programs",
      level: "Holistic Lifestyle",
      tag: "Holistic Health",
      benefits: [
        "Comprehensive lifestyle & holistic detox guidance",
        "Combination of Yoga, Sound Healing, and Pranayama",
        "Small group community environment for personal attention"
      ]
    }
  ],

  // 7. Photo Gallery
  photos: [
    {
      id: 1,
      title: "Outdoor Morning Yoga Practice",
      caption: "Embracing morning vitality in natural Himalayan air",
      category: "Yoga",
      url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Himalayan Singing Bowl Sound Bath",
      caption: "432Hz vibrational sound therapy for deep tranquility",
      category: "Sound Bath",
      url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Guided Meditation & Mindfulness",
      caption: "Calming the racing mind in peaceful silence",
      category: "Meditation",
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Sacred Studio Sanctuary",
      caption: "Peaceful interior atmosphere at Shree Ji Tower, Dehradun",
      category: "Studio",
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Alignment & Therapeutic Postures",
      caption: "Individual attention for posture and spinal relief",
      category: "Yoga",
      url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Sunset Serenity Practice",
      caption: "Releasing the day's stress during evening practice",
      category: "Meditation",
      url: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=800&auto=format&fit=crop"
    }
  ],

  // 8. Reviews
  reviews: [
    {
      id: 1,
      name: "Anjali Sharma",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      date: "2 weeks ago",
      text: "The Tibetan sound healing sessions at Dhyana Naad completely cured my sleep problems. The energy and personal guidance by the masters is unmatched in Dehradun."
    },
    {
      id: 2,
      name: "Rohit Verma",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      date: "1 month ago",
      text: "Best yoga studio near Doon University. The small batch size (max 12) ensures personal attention on every posture. My back pain disappeared in 3 weeks!"
    },
    {
      id: 3,
      name: "Pooja Rawat",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      date: "2 months ago",
      text: "A truly peaceful sanctuary away from city chaos. The pranayama and meditation techniques changed my daily life and energy levels."
    }
  ]
};

export default businessData;
