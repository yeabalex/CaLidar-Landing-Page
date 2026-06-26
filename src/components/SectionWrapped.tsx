import { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';

export default function SectionWrapped() {
  const [wrappedState, setWrappedState] = useState<'unloaded' | 'loading' | 'loaded'>('unloaded');
  const [wrappedProgress, setWrappedProgress] = useState(0);

  const handleGenerateWrapped = () => {
    if (wrappedState === 'loaded') {
      setWrappedState('unloaded');
      setWrappedProgress(0);
      return;
    }
    setWrappedState('loading');
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setWrappedProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setWrappedState('loaded');
      }
    }, 120);
  };

  return (
    <div className="layout-section" id="wrapped">
      {/* Title */}
      <h2 className="text-3xl sm:text-[40px] font-black tracking-tight leading-[1.2] text-[#08060d] dark:text-[#f3f4f6] mb-12">
        Your monthly wrapped
      </h2>

      {/* Centered wrapped interface */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-xl px-4">
        
        {/* Phone Mockup */}
        <div className="relative w-52 bg-[#0e0e0e] rounded-[36px] p-2.5 border-2 border-neutral-800 shadow-md">
          <div className="rounded-[28px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-4">
            <div className="h-4 flex items-center justify-between text-[8px] text-neutral-500">
              <span>9:41 AM</span>
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-grow flex flex-col justify-center py-2 space-y-4">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-2 text-neutral-400">
                  <Sparkles className="w-5 h-5 text-brand-500" />
                </div>
                <span className="text-[9px] uppercase font-bold text-neutral-500 tracking-wider">Habit Insights</span>
                <h4 className="text-xs font-bold text-white mt-1">December Wrapped</h4>
              </div>

              <div className="space-y-1.5 pt-1">
                <button 
                  onClick={handleGenerateWrapped}
                  className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-[9px] uppercase tracking-wider rounded-lg border border-neutral-800 transition-all cursor-pointer"
                >
                  {wrappedState === 'loaded' ? 'Reset Wrapped' : wrappedState === 'loading' ? 'Generating...' : 'Build Wrapped'}
                </button>
                <button className="w-full py-2 bg-neutral-950/40 text-neutral-500 hover:text-white font-bold text-[9px] uppercase tracking-wider rounded-lg transition-all">
                  Share to Instagram
                </button>
                <button className="w-full py-2 bg-[#121212]/40 text-neutral-500 hover:text-white font-bold text-[9px] uppercase tracking-wider rounded-lg transition-all">
                  Export PDF Report
                </button>
              </div>
            </div>

            <div className="h-2 bg-neutral-900 rounded-full w-12 mx-auto"></div>
          </div>
        </div>

        {/* Watch Mockup */}
        <div className="flex flex-col items-center">
          <div className="relative w-36 h-40 bg-[#0d0d0d] rounded-[36px] p-3 border-2 border-neutral-800 shadow-xl flex items-center justify-center">
            
            {/* Watch bands */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-12 bg-neutral-900 rounded-t-xl z-0 border-t border-x border-neutral-800"></div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-16 h-12 bg-neutral-900 rounded-b-xl z-0 border-b border-x border-neutral-800"></div>

            {/* Screen */}
            <div className="relative w-full h-full bg-black rounded-[26px] border border-neutral-900 z-10 p-3 flex flex-col justify-between items-center text-center">
              <div className="text-[8px] font-bold text-neutral-500 tracking-widest pt-1 uppercase">DEC WRAPPED</div>

              <div className="relative w-14 h-14 rounded-full border border-neutral-900/60 flex items-center justify-center my-1 bg-neutral-950 shadow-inner">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="42" stroke="#171717" strokeWidth="5" fill="none" />
                  <circle 
                     cx="50" 
                     cy="50" 
                     r="42" 
                     stroke={wrappedState === 'loaded' ? '#84cc16' : '#f59e0b'} 
                     strokeWidth="5" 
                     fill="none" 
                     strokeDasharray="263.89" 
                     strokeDashoffset={wrappedState === 'loaded' ? 0 : wrappedState === 'loading' ? 263.89 - (263.89 * wrappedProgress) / 100 : 200}
                     className="transition-all duration-300"
                  />
                </svg>
                
                {wrappedState === 'loaded' ? (
                  <Check className="w-5 h-5 text-brand-400" />
                ) : (
                  <span className="text-xs font-mono font-bold text-amber-400">W</span>
                )}
              </div>

              <div className="text-[8px] text-neutral-400 tracking-tight pb-1">
                {wrappedState === 'loaded' ? '28 Days Active' : wrappedState === 'loading' ? 'Analyzing...' : 'Ready to Load'}
              </div>
            </div>
          </div>

          <button 
            onClick={handleGenerateWrapped}
            className="mt-4 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-[9px] font-mono text-neutral-300 hover:text-white transition-all uppercase tracking-wide cursor-pointer shadow-sm"
          >
            {wrappedState === 'unloaded' ? 'Simulate Wrapped' : 'Simulate Reset'}
          </button>
        </div>

      </div>
    </div>
  );
}
