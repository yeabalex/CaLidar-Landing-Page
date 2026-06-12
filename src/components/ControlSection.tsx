import { useState } from 'react';
import { Shield, Activity, Flame, Zap } from 'lucide-react';

export default function ControlSection() {
  const [calorieThreshold, setCalorieThreshold] = useState(3);

  const getThresholdModeName = () => {
    switch (calorieThreshold) {
      case 1: return 'Mild Deficit (Weight Loss)';
      case 2: return 'Moderate Deficit';
      case 3: return 'Maintenance (Balance)';
      case 4: return 'Moderate Surplus';
      case 5: return 'Active Bulk (Muscle Gain)';
      default: return 'Maintenance';
    }
  };

  const getCalorieBudget = () => {
    switch (calorieThreshold) {
      case 1: return '1400 kcal';
      case 2: return '1650 kcal';
      case 3: return '1900 kcal';
      case 4: return '2150 kcal';
      case 5: return '2400 kcal';
      default: return '1900 kcal';
    }
  };

  return (
    <section id="control" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Copy and Slider */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
            You're in control
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            CaLidar gives you real-time authority over your metabolic target settings. Customize daily thresholds, adjust protein ratios, or change weight goals instantly to match your fitness journey.
          </p>

          <div className="p-6 bg-[#f8faf6] dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl space-y-5 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <span className="text-xs font-extrabold uppercase text-neutral-500 tracking-wider">Goal Mode Intensity</span>
              <span className="text-xs font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest">{calorieThreshold} / 5</span>
            </div>

            <input 
              type="range" 
              min="1" 
              max="5" 
              value={calorieThreshold}
              onChange={(e) => setCalorieThreshold(parseInt(e.target.value))}
              className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />

            <div className="flex justify-between text-[9px] font-bold text-neutral-400 uppercase tracking-wider px-0.5">
              <span>Deficit</span>
              <span>Maintenance</span>
              <span>Bulk</span>
            </div>
          </div>
        </div>

        {/* Right Side Phone Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-xs bg-[#0e0e0e] rounded-[44px] p-3 border-2 border-neutral-800 shadow-xl">
            <div className="rounded-[34px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-5">
              
              {/* Phone top */}
              <div className="flex justify-between items-center text-[9px] text-neutral-500 pt-0.5">
                <span>Metabolic Mode Settings</span>
                <Shield className="h-3 w-3 text-brand-400" />
              </div>

              {/* Core settings status */}
              <div className="flex-grow flex flex-col justify-center items-center py-4 text-center">
                <div className="h-14 w-14 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 mb-3 animate-pulse">
                  <Flame className="h-6 w-6" />
                </div>
                
                <h4 className="text-xs font-black text-white uppercase tracking-widest">Active Threshold</h4>
                <p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-wide">Goal budget updates automatically</p>

                <div className="mt-5 bg-neutral-950 border border-neutral-900 p-4.5 rounded-2xl w-full max-w-[210px] space-y-3">
                  <div className="flex items-center justify-between text-left">
                    <div>
                      <span className="text-[8px] font-black text-neutral-500 uppercase tracking-wider block">Mode Name</span>
                      <span className="text-xs font-extrabold text-white">{getThresholdModeName()}</span>
                    </div>
                    <Activity className="h-4 w-4 text-brand-400 flex-shrink-0" />
                  </div>

                  <div className="flex items-center justify-between text-left border-t border-neutral-900 pt-2.5">
                    <div>
                      <span className="text-[8px] font-black text-neutral-500 uppercase tracking-wider block">Target Calories</span>
                      <span className="text-xs font-extrabold text-brand-400">{getCalorieBudget()}</span>
                    </div>
                    <Zap className="h-4 w-4 text-brand-400 flex-shrink-0" />
                  </div>
                </div>
              </div>

              {/* Bottom confirmation */}
              <div>
                <button className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-lg border border-neutral-800 transition-all cursor-pointer">
                  Save Metabolic Target
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
