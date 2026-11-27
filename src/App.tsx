import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Leadership } from './components/Leadership';
import { FocusAreas } from './components/FocusAreas';
import { Impact } from './components/Impact';
import { Stories } from './components/Stories';
import { FAQ } from './components/FAQ';
import { GetInvolved } from './components/GetInvolved';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DonateModal } from './components/DonateModal';
import { VolunteerModal } from './components/VolunteerModal';

export const App: React.FC = () => {
  const [donateOpen, setDonateOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [volunteerType, setVolunteerType] = useState<'volunteer' | 'partner'>('volunteer');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem('ohf-theme')) {
          setIsDark(e.matches);
        }
      } catch {
        setIsDark(e.matches);
      }
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('ohf-theme', next ? 'dark' : 'light');
      } catch {
        // Ignore storage errors in restricted environments
      }
      return next;
    });
  };

  const handleOpenDonate = () => {
    setDonateOpen(true);
  };

  const handleOpenVolunteer = () => {
    setVolunteerType('volunteer');
    setVolunteerOpen(true);
  };

  const handleOpenPartner = () => {
    setVolunteerType('partner');
    setVolunteerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] dark:bg-[#0A192F] text-[#1E293B] dark:text-[#CBD5E1] antialiased selection:bg-[#C51E2E] dark:selection:bg-[#E84C3D] selection:text-white transition-colors duration-200">
      {/* Navigation */}
      <Navbar onOpenDonate={handleOpenDonate} isDark={isDark} onToggleTheme={handleToggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenDonate={handleOpenDonate} 
          onOpenVolunteer={handleOpenVolunteer} 
        />
        
        <About />

        <Leadership onJoinMission={handleOpenVolunteer} />

        <FocusAreas 
          onOpenDonate={handleOpenDonate} 
        />

        <Impact 
          onOpenDonate={handleOpenDonate} 
        />

        <Stories 
          onOpenDonate={handleOpenDonate} 
        />

        <GetInvolved
          onOpenDonate={handleOpenDonate}
          onOpenVolunteer={handleOpenVolunteer}
          onOpenPartner={handleOpenPartner}
        />

        <FAQ />

        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenDonate={handleOpenDonate}
        onOpenVolunteer={handleOpenVolunteer}
      />

      {/* Modals */}
      <DonateModal 
        isOpen={donateOpen} 
        onClose={() => setDonateOpen(false)} 
      />

      <VolunteerModal
        isOpen={volunteerOpen}
        onClose={() => setVolunteerOpen(false)}
        type={volunteerType}
      />
    </div>
  );
};

export default App;

