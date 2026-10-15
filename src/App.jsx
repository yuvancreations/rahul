import React, { useState } from 'react';
import { businessData } from './data/businessData';
import ProfileHeader from './components/ProfileHeader';
import LiveActivityBanner from './components/LiveActivityBanner';
import QuickActions from './components/QuickActions';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PhotosSection from './components/PhotosSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import BottomNavigation from './components/BottomNavigation';
import ShareProfileModal from './components/ShareProfileModal';
import Toast from './components/Toast';

export function App() {
  // 1. Follow State (LocalStorage)
  const [isFollowed, setIsFollowed] = useState(() => {
    try {
      return localStorage.getItem('dhyananaad_followed') === 'true';
    } catch {
      return false;
    }
  });

  // 2. Saved/Bookmark State (LocalStorage)
  const [isSaved, setIsSaved] = useState(() => {
    try {
      return localStorage.getItem('dhyananaad_saved') === 'true';
    } catch {
      return false;
    }
  });

  // 3. Modal States
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareTab, setShareTab] = useState('apps');

  // 4. Toast Feedback State
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  // Follow toggle handler
  const handleToggleFollow = () => {
    const nextState = !isFollowed;
    setIsFollowed(nextState);
    try {
      localStorage.setItem('dhyananaad_followed', String(nextState));
    } catch {}
    showToast(nextState ? 'You are now following Rahul Parida' : 'Unfollowed profile');
  };

  // Save toggle handler
  const handleToggleSave = () => {
    const nextState = !isSaved;
    setIsSaved(nextState);
    try {
      localStorage.setItem('dhyananaad_saved', String(nextState));
    } catch {}
    showToast(nextState ? 'Profile saved to your bookmarks!' : 'Profile removed from bookmarks');
  };

  return (
    <div className="profile-app-container">
      {/* Main Wide Profile Canvas */}
      <main className="profile-canvas">
        {/* 1. Profile Header with Sound Healing & Stories */}
        <ProfileHeader 
          data={businessData}
          onShare={() => { setShareTab('apps'); setIsShareModalOpen(true); }}
          isFollowed={isFollowed}
          onToggleFollow={handleToggleFollow}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onShowQR={() => { setShareTab('qr'); setIsShareModalOpen(true); }}
        />

        {/* 2. Live Admissions & Batch Status Bar */}
        <LiveActivityBanner data={businessData} />

        {/* 3. Quick Action Bar (Direct Google Review + Actions) */}
        <div className="profile-top-actions-wrapper">
          <QuickActions 
            data={businessData}
            isSaved={isSaved}
            onToggleSave={handleToggleSave}
            onShowToast={showToast}
          />
        </div>

        {/* Inner Profile Body: 2-Column Responsive Layout */}
        <div className="profile-content-body">
          {/* Main Column */}
          <div className="profile-main-col">
            {/* 4. About Us */}
            <AboutSection data={businessData} />

            {/* 5. Photography Services */}
            <ServicesSection data={businessData} />

            {/* 6. Photos with Filter Pills */}
            <PhotosSection data={businessData} />
          </div>

          {/* Sidebar Column */}
          <div className="profile-side-col">
            {/* 8. Location & Map */}
            <LocationSection data={businessData} />

            {/* 9. Reviews (Direct Google Reviews) */}
            <ReviewsSection data={businessData} />

            {/* 10. Contact */}
            <ContactSection data={businessData} />
          </div>
        </div>

        {/* 11. Profile Footer Branding */}
        <footer className="profile-subfooter">
          <p className="profile-disclaimer-text">
            <strong>महत्वपूर्ण अस्वीकरण (Disclaimer):</strong> हम एक Individual Service Provider के रूप में विभिन्न Services में Assistance/Support प्रदान करते हैं। जहाँ किसी Service के लिए Government Department, Authorized Agency, Insurance Company या अन्य Third Party की approval/process आवश्यक है, वहाँ final approval और processing संबंधित authority/organization के नियमों के अनुसार होगी। Services starting from ₹500 onwards.
          </p>
          <p className="profile-footer-credit">
            Rahul Parida – Personal Service Provider • Structured by <span className="credit-yuvan">Yuvan</span><span className="credit-creations">Creations</span>
          </p>
        </footer>
      </main>

      {/* 12. Sticky Bottom Navigation (Mobile Only) */}
      <BottomNavigation data={businessData} />

      {/* 13. Share Profile Modal */}
      <ShareProfileModal 
        data={businessData}
        isOpen={isShareModalOpen}
        initialTab={shareTab}
        onClose={() => setIsShareModalOpen(false)}
        onShowToast={showToast}
      />

      {/* 14. Toast Feedback Notification */}
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}
    </div>
  );
}

export default App;
