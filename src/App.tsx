import { useState, useEffect } from 'react';
import SectionHero from './components/SectionHero';
import SectionSync from './components/SectionSync';
import SectionPairing from './components/SectionPairing';
import SectionDatabase from './components/SectionDatabase';
import SectionControl from './components/SectionControl';
import SectionSyncQR from './components/SectionSyncQR';
import SectionFooter from './components/SectionFooter';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-200 flex flex-col items-center relative">
      
      {/* Floating Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black dark:border-neutral-800 bg-white dark:bg-black text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200 shadow-md cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4.5 w-4.5">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4.5 w-4.5">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          )}
        </button>
      </div>

      {/* Main cloned single-column container */}
      <main className="layout-container">
        
        {/* Section 1: Hero */}
        <SectionHero />

        {/* Section 2: Sync Health devices */}
        <SectionSync />

        {/* Section 3: Wearable Pairing */}
        <SectionPairing />

        {/* Section 4: Database consensus */}
        <SectionDatabase />

        {/* Section 5: Calorie Threshold setting */}
        <SectionControl />

        {/* Section 6: Local QR Syncing */}
        <SectionSyncQR />

        {/* Section 7, 8, 9: Link lists, Accordions, Footer broken-circle logo */}
        <SectionFooter />

      </main>
    </div>
  );
}