import { useState } from 'react';
import { Shield, Activity, Flame, Zap } from 'lucide-react';

export default function SectionControl() {
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
    <div className="layout-section" id="control">
      {/* Title */}
      <h2 className="text-3xl sm:text-[40px] font-black tracking-tight leading-[1.2] text-[#08060d] dark:text-[#f3f4f6] mb-12">
        You're in control
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-3xl px-4">
        
        {/* Left Side Control Panel */}
        <div className="w-full md:w-5/12 p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-left shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-black uppercase text-neutral-500 tracking-wider">Goal Mode</span>
            <span className="text-[10px] font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest">{calorieThreshold} / 5</span>
          </div>

          <input 
            type="range" 
            min="1" 
            max="5" 
            value={calorieThreshold}
            onChange={(e) => setCalorieThreshold(parseInt(e.target.value))}
            className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />

          <div className="flex justify-between text-[8px] font-bold text-neutral-400 uppercase tracking-wider px-0.5 mt-3">
            <span>Deficit</span>
            <span>Maintenance</span>
            <span>Bulk</span>
          </div>
        </div>

        {/* Right Side Settings Phone Mockup */}
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="relative w-full max-w-[240px] bg-[#0e0e0e] rounded-[44px] p-3 border-2 border-neutral-800 shadow-xl">
            <div className="rounded-[34px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-5 text-center">
              
              <div className="flex justify-between items-center text-[9px] text-neutral-500 pt-0.5">
                <span>Metabolic Profiles</span>
                <Shield className="h-3 w-3 text-brand-400" />
              </div>

              <div className="flex-grow flex flex-col justify-center items-center py-4">
                <div className="h-10 w-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 mb-2.5 animate-pulse">
                  <Flame className="h-5 w-5" />
                </div>
                
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Active Limit</h4>
                <p className="text-[8px] text-neutral-500 mt-0.5 uppercase tracking-wide">Goal budget autosyncs</p>

                <div className="mt-4 bg-neutral-950 border border-neutral-900 p-3.5 rounded-2xl w-full space-y-2.5">
                  <div className="flex items-center justify-between text-left">
                    <div>
                      <span className="text-[7px] font-black text-neutral-500 uppercase tracking-wider block">Mode</span>
                      <span className="text-[10px] font-extrabold text-white leading-tight block">{getThresholdModeName()}</span>
                    </div>
                    <Activity className="h-3.5 w-3.5 text-brand-400 flex-shrink-0" />
                  </div>

                  <div className="flex items-center justify-between text-left border-t border-neutral-900 pt-2">
                    <div>
                      <span className="text-[7px] font-black text-neutral-500 uppercase tracking-wider block">Budget</span>
                      <span className="text-[10px] font-extrabold text-brand-400 block">{getCalorieBudget()}</span>
                    </div>
                    <Zap className="h-3.5 w-3.5 text-brand-400 flex-shrink-0" />
                  </div>
                </div>
              </div>

              <div>
                <button className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-[8px] uppercase tracking-wider rounded-lg border border-neutral-800 transition-all cursor-pointer">
                  Save TARGET Mode
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
