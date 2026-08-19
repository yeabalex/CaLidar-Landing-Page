import { useState, useEffect, useRef } from 'react';
import { Camera, Check, RefreshCw, Sparkles, Box, Scan } from 'lucide-react';

interface FoodItem {
  id: string;
  name: string;
  emoji: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  volumeCm3: number;
  weightGrams: number;
  confidence: number;
  items: string[];
}

const SAMPLE_MEALS: FoodItem[] = [
  {
    id: 'salmon',
    name: 'Grilled Salmon Quinoa Bowl',
    emoji: '🥗',
    calories: 540,
    protein: 44,
    carbs: 38,
    fat: 16,
    fiber: 6,
    volumeCm3: 420,
    weightGrams: 360,
    confidence: 99.4,
    items: ['Atlantic Salmon (180g)', 'Organic Quinoa (120g)', 'Steamed Asparagus (60g)']
  },
  {
    id: 'avocado',
    name: 'Avocado Sourdough Toast & Egg',
    emoji: '🥑',
    calories: 380,
    protein: 16,
    carbs: 32,
    fat: 22,
    fiber: 8,
    volumeCm3: 290,
    weightGrams: 240,
    confidence: 98.9,
    items: ['Sourdough Slice (75g)', 'Hass Avocado (110g)', 'Poached Egg (55g)']
  },
  {
    id: 'steak',
    name: 'Prime Ribeye Steak & Sweet Potato',
    emoji: '🥩',
    calories: 680,
    protein: 58,
    carbs: 24,
    fat: 38,
    fiber: 4,
    volumeCm3: 460,
    weightGrams: 390,
    confidence: 99.1,
    items: ['Grass-Fed Ribeye (220g)', 'Roasted Sweet Potato (140g)', 'Broccolini (30g)']
  },
  {
    id: 'smoothie',
    name: 'Wild Berry Whey Protein Bowl',
    emoji: '🫐',
    calories: 320,
    protein: 34,
    carbs: 36,
    fat: 4,
    fiber: 7,
    volumeCm3: 360,
    weightGrams: 310,
    confidence: 98.2,
    items: ['Isolate Whey (30g)', 'Blueberries & Acai (180g)', 'Almond Milk (100ml)']
  }
];

export default function HoldToScanMockup() {
  const [selectedMealIndex, setSelectedMealIndex] = useState(0);
  const [unlockProgress, setUnlockProgress] = useState(0);
  const [isHoldingUnlock, setIsHoldingUnlock] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const unlockIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentMeal = SAMPLE_MEALS[selectedMealIndex];

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
          return prev + 6;
        });
      }, 35);
    } else {
      if (unlockIntervalRef.current) clearInterval(unlockIntervalRef.current);
      if (!isUnlocked) {
        unlockIntervalRef.current = setInterval(() => {
          setUnlockProgress((prev) => {
            if (prev <= 0) {
              if (unlockIntervalRef.current) clearInterval(unlockIntervalRef.current);
              return 0;
            }
            return Math.max(0, prev - 12);
          });
        }, 20);
      }
    }
    return () => {
      if (unlockIntervalRef.current) clearInterval(unlockIntervalRef.current);
    };
  }, [isHoldingUnlock, isUnlocked]);

  const handleMealSelect = (index: number) => {
    setSelectedMealIndex(index);
    setIsUnlocked(false);
    setUnlockProgress(0);
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Interactive meal demo selection bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6 max-w-lg px-2">
        <span className="text-[10px] font-black uppercase text-neutral-400 mr-1 tracking-wider flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-brand-500" />
          Test Meals:
        </span>
        {SAMPLE_MEALS.map((meal, idx) => (
          <button
            key={meal.id}
            onClick={() => handleMealSelect(idx)}
            className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedMealIndex === idx
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-md scale-105 border border-neutral-700 dark:border-neutral-300'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
            }`}
          >
            <span>{meal.emoji}</span>
            <span>{meal.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-[340px] px-2">
        {/* Ambient glow behind smartphone */}
        <div 
          className={`absolute inset-0 rounded-[54px] blur-3xl transition-all duration-700 pointer-events-none ${
            isUnlocked 
              ? 'bg-brand-500/25 scale-110' 
              : isHoldingUnlock 
              ? 'bg-brand-500/15 scale-105' 
              : 'bg-neutral-300/30 dark:bg-neutral-800/20'
          }`} 
        />

        {/* iPhone Physical Frame */}
        <div className="relative bg-[#0d0d0d] rounded-[52px] p-3 border-[4px] border-neutral-800 shadow-2xl transition-all duration-300">
          
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3.5 border border-neutral-800/40">
            <div className="w-2 h-2 rounded-full bg-neutral-900"></div>
            <div className="w-7 h-1 bg-neutral-900 rounded-full"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-900"></div>
          </div>

          {/* Screen Content */}
          <div className="relative rounded-[40px] bg-black overflow-hidden border border-neutral-900 aspect-[9/19.5] flex flex-col justify-between p-4 text-white">
            
            {/* iOS Status Bar */}
            <div className="flex justify-between items-center text-[10px] font-semibold text-neutral-400 pt-1 px-2 z-20">
              <span className="font-mono">9:41</span>
              <div className="flex space-x-1.5 items-center">
                <span className="text-[8px] font-mono uppercase bg-brand-500/20 text-brand-400 px-1.5 py-0.5 rounded font-black border border-brand-500/30">
                  LiDAR Active
                </span>
                <div className="w-4 h-2 border border-neutral-500 rounded-sm p-0.5 flex items-center">
                  <div className="h-full w-full bg-neutral-300 rounded-[0.5px]"></div>
                </div>
              </div>
            </div>

            {/* Main AR / Scanner Body */}
            <div className="flex-1 flex flex-col justify-between py-2 relative">
              
              {/* AR Viewfinder Simulation */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-900/90 flex items-center justify-center p-3 my-auto shadow-inner">
                
                {/* 3D Wireframe Grid & Point Cloud Overlay */}
                <div className="absolute inset-0 opacity-25">
                  <div className="w-full h-full bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:12px_12px]" />
                </div>

                {/* Laser scan line sweep when scanning */}
                {isHoldingUnlock && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="w-full h-1 bg-brand-400 animate-scan shadow-[0_0_12px_#84cc16] opacity-90"></div>
                  </div>
                )}

                {/* AR Viewfinder corner brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-500 rounded-tl-md"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-500 rounded-tr-md"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-500 rounded-bl-md"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-500 rounded-br-md"></div>

                {/* Food Item Icon & Circular Volume Target */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  
                  {/* Circular scan progress */}
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle cx="50" cy="50" r="42" stroke="#1f1f1f" strokeWidth="4" fill="none" />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="42" 
                        stroke={isUnlocked ? "#84cc16" : "#84cc16"} 
                        strokeWidth="4" 
                        fill="none" 
                        strokeDasharray="263.89" 
                        strokeDashoffset={263.89 - (263.89 * unlockProgress) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-75"
                      />
                    </svg>

                    <div className="w-28 h-28 rounded-full bg-black/80 border border-neutral-800/80 flex flex-col items-center justify-center text-center p-2 backdrop-blur-sm">
                      <div className="text-3xl mb-1">{currentMeal.emoji}</div>
                      <span className="text-[9px] font-black text-white leading-tight line-clamp-1 max-w-[90px]">
                        {currentMeal.name.split(' ')[0]}
                      </span>
                      <span className="text-[8px] font-mono text-brand-400 font-bold mt-0.5">
                        {isHoldingUnlock ? `${Math.round((currentMeal.volumeCm3 * unlockProgress) / 100)} cm³` : `${currentMeal.volumeCm3} cm³`}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Floating AR Depth Tags */}
                <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded-full border border-neutral-800 text-[8px] font-mono text-brand-400">
                  <Scan className="w-2.5 h-2.5" />
                  <span>3D MESH</span>
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded-full border border-neutral-800 text-[8px] font-mono text-neutral-300">
                  <Box className="w-2.5 h-2.5 text-brand-400" />
                  <span>{currentMeal.weightGrams}g</span>
                </div>
              </div>

              {/* Scanned Result Bottom Sheet Modal (Matches Cal AI App) */}
              {isUnlocked ? (
                <div className="bg-neutral-950 border border-brand-500/40 rounded-2xl p-3 animate-in fade-in slide-in-from-bottom-2 duration-200 shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-1 text-[8px] uppercase tracking-wider font-extrabold text-brand-400">
                        <Check className="w-3 h-3" />
                        <span>Food Identified ({currentMeal.confidence}%)</span>
                      </div>
                      <h4 className="text-xs font-black text-white mt-0.5">{currentMeal.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-brand-400 font-mono leading-none">{currentMeal.calories}</div>
                      <div className="text-[7px] uppercase font-bold text-neutral-400">kcal</div>
                    </div>
                  </div>

                  {/* Macro Pills */}
                  <div className="grid grid-cols-4 gap-1 text-center my-2">
                    <div className="bg-neutral-900 p-1.5 rounded-xl border border-neutral-800">
                      <div className="text-[7px] uppercase font-black text-red-400">Protein</div>
                      <div className="text-[9px] font-black text-white">{currentMeal.protein}g</div>
                    </div>
                    <div className="bg-neutral-900 p-1.5 rounded-xl border border-neutral-800">
                      <div className="text-[7px] uppercase font-black text-sky-400">Carbs</div>
                      <div className="text-[9px] font-black text-white">{currentMeal.carbs}g</div>
                    </div>
                    <div className="bg-neutral-900 p-1.5 rounded-xl border border-neutral-800">
                      <div className="text-[7px] uppercase font-black text-amber-400">Fats</div>
                      <div className="text-[9px] font-black text-white">{currentMeal.fat}g</div>
                    </div>
                    <div className="bg-neutral-900 p-1.5 rounded-xl border border-neutral-800">
                      <div className="text-[7px] uppercase font-black text-emerald-400">Fiber</div>
                      <div className="text-[9px] font-black text-white">{currentMeal.fiber}g</div>
                    </div>
                  </div>

                  {/* Sub-items detected */}
                  <div className="border-t border-neutral-900 pt-1.5 text-[8px] text-neutral-400 space-y-0.5">
                    {currentMeal.items.map((it, i) => (
                      <div key={i} className="flex justify-between">
                        <span>• {it}</span>
                        <span className="text-neutral-500 font-mono">Vol mapped</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-2">
                  <p className="text-[10px] text-neutral-400 font-medium">
                    {isHoldingUnlock ? 'Calculating 3D volume & food density...' : 'Hold the button below to simulate 3D LiDAR scanning'}
                  </p>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-2">
                <button
                  onMouseDown={() => setIsHoldingUnlock(true)}
                  onMouseUp={() => setIsHoldingUnlock(false)}
                  onMouseLeave={() => setIsHoldingUnlock(false)}
                  onTouchStart={() => setIsHoldingUnlock(true)}
                  onTouchEnd={() => setIsHoldingUnlock(false)}
                  className={`w-full py-3 rounded-2xl font-black text-[11px] uppercase tracking-wider transition-all duration-200 select-none cursor-pointer flex items-center justify-center gap-1.5 shadow-md ${
                    isUnlocked 
                      ? 'bg-brand-500 text-black font-extrabold shadow-[0_0_15px_rgba(132,204,22,0.4)]' 
                      : isHoldingUnlock 
                      ? 'bg-neutral-900 text-brand-400 border border-brand-500 scale-95' 
                      : 'bg-white text-black hover:bg-neutral-100'
                  }`}
                >
                  {isUnlocked ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Logged to Diary</span>
                    </>
                  ) : (
                    <>
                      <Camera className="w-3.5 h-3.5" />
                      <span>Hold to 3D Scan</span>
                    </>
                  )}
                </button>

                {isUnlocked && (
                  <button 
                    onClick={() => { setIsUnlocked(false); setUnlockProgress(0); }}
                    className="mt-2 text-[8px] text-neutral-400 hover:text-white transition-colors uppercase tracking-wider font-extrabold mx-auto flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="h-2 w-2" />
                    <span>Reset Viewfinder</span>
                  </button>
                )}
              </div>

            </div>

            {/* iPhone Home Indicator Bar */}
            <div className="w-24 h-1 bg-neutral-700 rounded-full mx-auto mb-0.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
