import React, { useState } from 'react';
import { businessData } from './data/businessData';
import ProfileHeader from './components/ProfileHeader';
import LiveActivityBanner from './components/LiveActivityBanner';
import QuickActions from './components/QuickActions';
import ProgramFinder from './components/ProgramFinder';
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
    showToast(nextState ? 'You are now following Dhyana Naad Yogshala' : 'Unfollowed profile');
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
          onShare={() => setIsShareModalOpen(true)}
          isFollowed={isFollowed}
          onToggleFollow={handleToggleFollow}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onShowQR={() => setIsShareModalOpen(true)}
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
            {/* 4. Interactive Program Recommendation Widget */}
            <div id="finder">
              <ProgramFinder data={businessData} />
            </div>

            {/* 5. About Us */}
            <AboutSection data={businessData} />

            {/* 6. Our Programs */}
            <ServicesSection data={businessData} />

            {/* 7. Photos with Filter Pills */}
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
          <p className="profile-footer-credit">
            Website structured by <span className="credit-yuvan">Yuvan</span><span className="credit-creations">Creations</span> &amp; digital partner with <a href="https://livejao.com" target="_blank" rel="noopener noreferrer" className="credit-livejao">livejao.com</a>
          </p>
        </footer>
      </main>

      {/* 12. Sticky Bottom Navigation (Mobile Only) */}
      <BottomNavigation data={businessData} />

      {/* 13. Share Profile Modal */}
      <ShareProfileModal 
        data={businessData}
        isOpen={isShareModalOpen}
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
