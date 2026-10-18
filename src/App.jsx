import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import QuickHighlights from './components/QuickHighlights';
import AboutSection from './components/AboutSection';
import AcademicsSection from './components/AcademicsSection';
import FacultySection from './components/FacultySection';
import TransportSection from './components/TransportSection';
import InteractiveGallery from './components/InteractiveGallery';
import VideoSection from './components/VideoSection';
import KidsZone from './components/KidsZone';
import AdmissionsSection from './components/AdmissionsSection';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);

  const handleOpenAdmission = () => {
    setAdmissionModalOpen(true);
  };

  const handleCloseAdmission = () => {
    setAdmissionModalOpen(false);
  };

  return (
    <div className="school-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar 
        soundEnabled={soundEnabled} 
        setSoundEnabled={setSoundEnabled} 
        onOpenAdmission={handleOpenAdmission} 
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <HeroBanner 
          soundEnabled={soundEnabled} 
          onOpenAdmission={handleOpenAdmission} 
        />
        
        <QuickHighlights 
          soundEnabled={soundEnabled} 
        />

        <AboutSection 
          soundEnabled={soundEnabled} 
          onOpenAdmission={handleOpenAdmission} 
        />

        <AcademicsSection 
          soundEnabled={soundEnabled} 
          onOpenAdmission={handleOpenAdmission} 
        />

        <InteractiveGallery 
          soundEnabled={soundEnabled} 
        />

        <VideoSection 
          soundEnabled={soundEnabled} 
        />

        <TransportSection 
          soundEnabled={soundEnabled} 
          onOpenAdmission={handleOpenAdmission} 
        />

        <FacultySection 
          soundEnabled={soundEnabled} 
        />

        <KidsZone 
          soundEnabled={soundEnabled} 
        />

        <AdmissionsSection 
          soundEnabled={soundEnabled} 
          onOpenAdmission={handleOpenAdmission} 
        />
      </main>

      {/* Footer */}
      <Footer 
        soundEnabled={soundEnabled} 
        onOpenAdmission={handleOpenAdmission} 
      />

      {/* Interactive Admission Modal */}
      <AdmissionModal 
        isOpen={admissionModalOpen} 
        onClose={handleCloseAdmission} 
        soundEnabled={soundEnabled} 
      />
    </div>
  );
}
