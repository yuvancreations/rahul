import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingAction from './components/FloatingAction';

function App() {
  return (
    <div className="app-wrapper">
      {/* 1. Sticky Header */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Programs Section (6 Cards with .map) */}
        <Programs />

        {/* 4. About Section (2 columns, image + 3 highlights) */}
        <About />

        {/* 5. Gallery Section (CSS Grid, View More) */}
        <Gallery />

        {/* 6. Contact & Google Map Section */}
        <Contact />

        {/* 7. Final Dark Green & Gold CTA */}
        <CTA />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Floating Quick Contact & Back to Top */}
      <FloatingAction />
    </div>
  );
}

export default App;
