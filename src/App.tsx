import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';
import SectionComparison from './components/SectionComparison';
import SectionWorkout from './components/SectionWorkout';
import SectionWrapped from './components/SectionWrapped';
import SectionStory from './components/SectionStory';
import SectionProgress from './components/SectionProgress';
import SectionRecommendation from './components/SectionRecommendation';
import SectionAICoach from './components/SectionAICoach';
import SectionCommunity from './components/SectionCommunity';
import SectionFooter from './components/SectionFooter';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

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
    <div className="min-h-screen bg-white text-[#08060d] dark:bg-black dark:text-[#f3f4f6] transition-colors duration-200 flex flex-col items-center relative selection:bg-brand-500 selection:text-black">
      
      {/* Sticky Global Navigation Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Single-Column Content Area */}
      <main className="layout-container w-full">
        
        {/* Hero Section: 3D LiDAR Scanner Showcase & Instant CTA */}
        <SectionHero />

        {/* Comparison Section: Why CaLidar Beats Traditional Manual Apps */}
        <SectionComparison />

        {/* Feature 2: Workout Logging & Multi-Device Peer Sync */}
        <SectionWorkout />

        {/* Feature 3: Monthly Wrapped & Habit Insights */}
        <SectionWrapped />

        {/* Feature 4: Instagram-Style 24hr Meal Stories */}
        <SectionStory />

        {/* Feature 5: Visual Progress Tracker with Private Photo Verification */}
        <SectionProgress />

        {/* Feature 6: Daily Calibrated Meal Recommendations */}
        <SectionRecommendation />

        {/* Feature 7: Personalized AI Coach with Dynamic Personas */}
        <SectionAICoach />

        {/* Feature 8: Community Accountability & Group Streaks */}
        <SectionCommunity />

        {/* Footer: Statement, Waitlist, SEO FAQ Accordions, and Links */}
        <SectionFooter />

      </main>
    </div>
  );
}