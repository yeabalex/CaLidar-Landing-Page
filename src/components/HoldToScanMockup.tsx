import { useState, useEffect, useRef } from 'react';
import { Camera, Check, RefreshCw } from 'lucide-react';

export default function HoldToScanMockup() {
  const [unlockProgress, setUnlockProgress] = useState(0);
  const [isHoldingUnlock, setIsHoldingUnlock] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const unlockIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHoldingUnlock && !isUnlocked) {
      unlockIntervalRef.current = setInterval(() => {
        setUnlockProgress((prev) => {
          if (prev >= 100) {
            setIsUnlocked(true);
            setIsHoldingUnlock(false);
            if (unlockIntervalRef.current) clearInterval(unlockIntervalRef.current);
            return 100;
          }
          return prev + 4;
        });
      }, 50);
    } else {
      if (unlockIntervalRef.current) clearInterval(unlockIntervalRef.current);
      if (!isUnlocked) {
        unlockIntervalRef.current = setInterval(() => {
          setUnlockProgress((prev) => {
            if (prev <= 0) {
              if (unlockIntervalRef.current) clearInterval(unlockIntervalRef.current);
              return 0;
            }
            return Math.max(0, prev - 8);
          });
        }, 30);
      }
    }
    return () => {
      if (unlockIntervalRef.current) clearInterval(unlockIntervalRef.current);
    };
  }, [isHoldingUnlock, isUnlocked]);

  return (
    <div className="relative w-full max-w-sm px-4">
      {/* Ambient background glow of the device screen */}
      <div className={`absolute inset-0 bg-brand-500/10 rounded-[50px] blur-2xl transition-all duration-700 ${isUnlocked ? 'bg-brand-500/20 scale-110' : 'bg-neutral-200/40 dark:bg-neutral-900/10'}`} />

      {/* SmartPhone Shell */}
      <div className="relative bg-[#0d0d0d] rounded-[52px] p-3.5 border-[4px] border-neutral-800 shadow-xl transition-all duration-300">
        {/* Dynamic Island Screen Header */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-between px-4">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
          <div className="w-8 h-1 bg-neutral-900 rounded-full"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
        </div>

        {/* Core Screen */}
        <div className="relative rounded-[38px] bg-black overflow-hidden border border-neutral-900 aspect-[9/19.5] flex flex-col justify-between p-6">
          
          {/* Simulated Screen UI Top bar */}
          <div className="flex justify-between items-center text-[11px] font-semibold text-neutral-500 pt-1">
            <span>9:41 AM</span>
            <div className="flex space-x-1 items-center">
              <span className="h-1.5 w-1.5 bg-brand-500 rounded-full animate-ping"></span>
              <span>100%</span>
            </div>
          </div>

          {/* Secure Vault Core Lock Screen */}
          <div className="flex-1 flex flex-col items-center justify-center py-6">
            
            {/* Outer Status Ring */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              
              {/* Circular progress stroke */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="42" stroke="#171717" strokeWidth="5" fill="none" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="42" 
                  stroke={isUnlocked ? "#84cc16" : "#ffffff"} 
                  strokeWidth="5" 
                  fill="none" 
                  strokeDasharray="263.89" 
                  strokeDashoffset={263.89 - (263.89 * unlockProgress) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-100 ease-out"
                />
              </svg>

              {/* Central Logo / Status */}
              <div className="relative w-36 h-36 rounded-full bg-neutral-950/85 border border-neutral-900/60 flex flex-col items-center justify-center text-center p-4 shadow-inner">
                <div className="text-[9px] font-extrabold uppercase tracking-widest text-neutral-500 mb-1">CaLidar AI</div>
                
                <div className="relative my-2">
                  {isUnlocked ? (
                    <div className="w-12 h-12 bg-brand-950/50 rounded-full border border-brand-500/50 flex items-center justify-center animate-pulse">
                      <Check className="w-6 h-6 text-brand-400" />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 bg-neutral-900 rounded-full border border-neutral-800 flex items-center justify-center transition-all ${isHoldingUnlock ? 'scale-90 border-brand-500/50 text-brand-400' : 'text-white'}`}>
                      <Camera className="w-5 h-5" />
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-neutral-400 tracking-tight h-5">
                  {isUnlocked ? (
                    <span className="text-brand-400 font-bold uppercase tracking-widest text-[9px]">Scan Complete</span>
                  ) : isHoldingUnlock ? (
                    <span className="animate-pulse">Mapping 3D volume...</span>
                  ) : (
                    <span>Ready to Scan</span>
                  )}
                </div>
              </div>

              {/* Floating status dots */}
              <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[9px] text-brand-400 font-black">3D</div>
              <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[9px] text-brand-400 font-black">AI</div>
            </div>

            {/* Interactive Hold To Scan button */}
            <div className="mt-8 w-full px-2">
              <button
                onMouseDown={() => setIsHoldingUnlock(true)}
                onMouseUp={() => setIsHoldingUnlock(false)}
                onMouseLeave={() => setIsHoldingUnlock(false)}
                onTouchStart={() => setIsHoldingUnlock(true)}
                onTouchEnd={() => setIsHoldingUnlock(false)}
                className={`w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-200 select-none cursor-pointer ${
                  isUnlocked 
                    ? 'bg-brand-950/40 text-brand-400 border border-brand-500/30' 
                    : isHoldingUnlock 
                    ? 'bg-neutral-900 text-white border border-neutral-700 scale-95' 
                    : 'bg-white text-black hover:bg-neutral-100'
                }`}
              >
                {isUnlocked ? '320 kcal logged' : 'Hold to Scan Meal'}
              </button>
              
              {isUnlocked && (
                <button 
                  onClick={() => { setIsUnlocked(false); setUnlockProgress(0); }}
                  className="mt-2.5 text-[9px] text-neutral-500 hover:text-white transition-colors uppercase tracking-wider font-semibold block mx-auto flex items-center gap-1"
                >
                  <RefreshCw className="h-2.5 w-2.5" />
                  <span>Reset Scanner</span>
                </button>
              )}
            </div>

          </div>

          {/* Dynamic Screen bottom navigation marker */}
          <div className="w-1/3 h-1 bg-neutral-800 rounded-full mx-auto mb-1"></div>
        </div>
      </div>
    </div>
  );
}
