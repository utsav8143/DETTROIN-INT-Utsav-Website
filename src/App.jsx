import { useState } from 'react';
import Header from './layout/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Programmes from './components/Programmes.jsx';
import DayInSchool from './components/DayInSchool.jsx';
import NewsEvents from './components/NewsEvent.jsx';
import AdmissionsCTA from './components/Admissions.jsx';
import Footer from './layout/Footer.jsx';
import MobileDrawer from './layout/MobileDrawer.jsx';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Header onMenuOpen={() => setDrawerOpen(true)} />

      <main id="main">
        <Hero />
        <About />
        <Programmes />
        <DayInSchool />
        <NewsEvents />
        <AdmissionsCTA />
      </main>

      <Footer />
    </>
  );
}
