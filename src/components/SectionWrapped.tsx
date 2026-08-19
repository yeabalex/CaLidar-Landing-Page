import { useState } from 'react';
import { Sparkles, Flame, Share2 } from 'lucide-react';

export default function SectionWrapped() {
  const [activeSlide, setActiveSlide] = useState(0);

  const wrappedSlides = [
    {
      title: 'Nutrition Consistency',
      highlight: '94% Hit Rate',
      subtitle: '28 out of 31 days logged on target',
      emoji: '🎯',
      badge: 'Elite Tier'
    },
    {
      title: 'Top Scanned Fuel',
      highlight: 'Salmon Quinoa Bowl',
      subtitle: 'Logged 18 times this month (44g Protein/meal)',
      emoji: '🥗',
      badge: 'Most Frequent'
    },
    {
      title: 'Active Metabolic Output',
      highlight: '24,850 kcal Burned',
      subtitle: 'Synced seamlessly across Watch & Phone',
      emoji: '🔥',
      badge: 'Personal Record'
    }
  ];

  const currentSlide = wrappedSlides[activeSlide];

  return (
    <section className="layout-section" id="wrapped">
      {/* Title */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 border border-brand-500/20 text-xs font-black uppercase tracking-wider mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Spotify-Style Monthly Highlights</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Your monthly wrapped
      </h2>

      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-12">
        Celebrate your nutritional wins and habit milestones with beautiful, shareable monthly story summaries.
      </p>

      {/* Centered wrapped interface */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-4xl px-2">
        
        {/* Left Side: Interactive Slide Selectors */}
        <div className="w-full lg:w-5/12 p-6 sm:p-7 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[32px] text-left shadow-sm">
          <span className="text-[10px] font-black uppercase text-neutral-400 tracking-wider block mb-3">
            December Wrapped Highlights
          </span>

          <div className="space-y-2.5">
            {wrappedSlides.map((slide, i) => (
              <button
                key={slide.title}
                onClick={() => setActiveSlide(i)}
                className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  activeSlide === i
                    ? 'bg-brand-500/10 border-brand-500 text-neutral-900 dark:text-white font-bold shadow-sm scale-[1.02]'
                    : 'bg-white dark:bg-black/50 border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-neutral-400 dark:hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{slide.emoji}</span>
                  <div>
                    <div className="text-xs font-black text-neutral-900 dark:text-white leading-tight">{slide.title}</div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">{slide.highlight}</div>
                  </div>
                </div>
                <span className="text-[8px] font-black uppercase px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400">
                  {slide.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-bold text-neutral-400">
            <span className="flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5 text-brand-500" /> Export Ready
            </span>
            <span className="text-neutral-500">Auto-generated monthly</span>
          </div>
        </div>

        {/* Right Side: Mock Phone displaying Story Slide */}
        <div className="w-full lg:w-6/12 flex justify-center">
          <div className="relative w-full max-w-[300px] bg-[#0d0d0d] rounded-[48px] p-3 border-[3.5px] border-neutral-800 shadow-2xl">
            <div className="rounded-[36px] bg-black overflow-hidden border border-neutral-900 aspect-[9/19] flex flex-col justify-between p-4 text-center text-white relative">
              
              {/* Instagram/Spotify Story Progress Bar Bars */}
              <div className="flex gap-1 pt-1 px-1 z-10">
                {wrappedSlides.map((_, idx) => (
                  <div key={idx} className="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        activeSlide === idx ? 'w-full bg-brand-500' : activeSlide > idx ? 'w-full bg-white' : 'w-0'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Story Top Info */}
              <div className="flex justify-between items-center text-[9px] text-neutral-400 mt-2 px-1">
                <span className="font-extrabold text-white flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span> CaLidar Wrapped
                </span>
                <span className="font-mono text-neutral-400">DEC 2026</span>
              </div>

              {/* Central Card Graphic */}
              <div className="flex-1 flex flex-col justify-center items-center py-4">
                <div className="w-16 h-16 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-3xl mb-3 shadow-md">
                  {currentSlide.emoji}
                </div>

                <span className="text-[9px] font-black uppercase tracking-widest text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-full border border-brand-500/20 mb-2">
                  {currentSlide.badge}
                </span>

                <h3 className="text-xl font-black text-white leading-tight mb-1">
                  {currentSlide.highlight}
                </h3>

                <p className="text-[10px] text-neutral-400 max-w-[200px] leading-relaxed">
                  {currentSlide.subtitle}
                </p>

                {/* Stat Box */}
                <div className="mt-4 w-full bg-neutral-950 border border-neutral-800/80 rounded-2xl p-3 text-left space-y-1.5">
                  <div className="flex justify-between items-center text-[8px] font-extrabold text-neutral-400">
                    <span>Active Streak</span>
                    <span className="text-white font-mono font-black flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5 text-amber-500" /> 28 Days
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[8px] font-extrabold text-neutral-400 border-t border-neutral-900 pt-1.5">
                    <span>LiDAR 3D Scans</span>
                    <span className="text-brand-400 font-mono font-black">92 Total Scans</span>
                  </div>
                </div>
              </div>

              {/* Share Action Button */}
              <div className="space-y-1.5">
                <button 
                  className="w-full py-2.5 rounded-xl bg-white text-black font-black text-[9px] uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Share2 className="w-3 h-3 text-black" />
                  <span>Share Story</span>
                </button>
              </div>

              {/* Home indicator */}
              <div className="w-20 h-1 bg-neutral-700 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
