import { useState } from 'react';
import { Shield, BrainCircuit, MessageSquare, Zap } from 'lucide-react';

export default function SectionAICoach() {
  const [coachLevel, setCoachLevel] = useState(3);

  const getCoachStyleName = () => {
    switch (coachLevel) {
      case 1: return 'Gentle Supporter (Empathetic)';
      case 2: return 'Balanced Guide (Constructive)';
      case 3: return 'Strict Monitor (Direct)';
      case 4: return 'Hardcore Trainer (Demanding)';
      case 5: return 'Goggins Mode (Uncompromising)';
      default: return 'Balanced Guide';
    }
  };

  const getCoachAdvice = () => {
    switch (coachLevel) {
      case 1: return "You're doing fantastic! Focus on enjoying your meals. If you can, try adding a handful of greens to your next LiDAR scan.";
      case 2: return "Solid progress today. You have hit 65% of your macro targets. Consider a light 15-minute walk to balance out your remaining budget.";
      case 3: return "Daily budget is tight. You logged slightly high carb portion sizes earlier. Prioritize fiber and lean protein for dinner.";
      case 4: return "Calorie ceiling reached. No more logging today. Put down the fork, step away from the kitchen, and get some active recovery done.";
      case 5: return "Who's gonna carry the logs?! Stop reading excuses! Put the phone down, hit the asphalt, and sweat off those extra calories right now!";
      default: return "Solid progress today. Keep tracking.";
    }
  };

  return (
    <div className="layout-section" id="coach">
      {/* Title */}
      <h2 className="text-3xl sm:text-[40px] font-black tracking-tight leading-[1.2] text-[#08060d] dark:text-[#f3f4f6] mb-12">
        Personalized AI Coach
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-3xl px-4">
        
        {/* Left Side Control Panel */}
        <div className="w-full md:w-5/12 p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-left shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-black uppercase text-neutral-500 tracking-wider">Coach Style</span>
            <span className="text-[10px] font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest">{coachLevel} / 5</span>
          </div>

          <input 
            type="range" 
            min="1" 
            max="5" 
            value={coachLevel}
            onChange={(e) => setCoachLevel(parseInt(e.target.value))}
            className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />

          <div className="flex justify-between text-[8px] font-bold text-neutral-400 uppercase tracking-wider px-0.5 mt-3">
            <span>Gentle</span>
            <span>Balanced</span>
            <span>Goggins</span>
          </div>
        </div>

        {/* Right Side Settings Phone Mockup */}
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="relative w-full max-w-[240px] bg-[#0e0e0e] rounded-[44px] p-3 border-2 border-neutral-800 shadow-xl">
            <div className="rounded-[34px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-5 text-center">
              
              <div className="flex justify-between items-center text-[9px] text-neutral-500 pt-0.5">
                <span>AI Coach Advice</span>
                <Shield className="h-3 w-3 text-brand-400" />
              </div>

              <div className="flex-grow flex flex-col justify-center items-center py-4">
                <div className="h-10 w-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 mb-2.5 animate-pulse">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Live Feedback</h4>
                <p className="text-[8px] text-neutral-500 mt-0.5 uppercase tracking-wide">Coach enclave synced</p>

                <div className="mt-4 bg-neutral-950 border border-neutral-900 p-3 rounded-2xl w-full space-y-2">
                  <div className="flex items-center justify-between text-left">
                    <div>
                      <span className="text-[7px] font-black text-neutral-500 uppercase tracking-wider block">Active Persona</span>
                      <span className="text-[9px] font-extrabold text-white leading-tight block">{getCoachStyleName()}</span>
                    </div>
                    <Zap className="h-3.5 w-3.5 text-brand-400 flex-shrink-0" />
                  </div>

                  <div className="border-t border-neutral-900 pt-2 text-left">
                    <span className="text-[7px] font-black text-neutral-500 uppercase tracking-wider block flex items-center gap-1">
                      <MessageSquare className="w-2.5 h-2.5 text-brand-400" /> Coach Message
                    </span>
                    <span className="text-[9px] font-medium text-neutral-300 block leading-tight mt-1 min-h-[60px]">
                      "{getCoachAdvice()}"
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <button className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-[8px] uppercase tracking-wider rounded-lg border border-neutral-800 transition-all cursor-pointer">
                  Acknowledge Style
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
