import { useState } from 'react';
import { Calendar, Image as ImageIcon, TrendingDown, Award } from 'lucide-react';

export default function SectionProgress() {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    { 
      day: 'Day 1', 
      weight: '82.5 kg', 
      bodyFat: '24.2%', 
      notes: 'Initial photo & starting point.', 
      scale: 1.05,
      color: '#ef4444' // red
    },
    { 
      day: 'Day 15', 
      weight: '79.8 kg', 
      bodyFat: '22.5%', 
      notes: 'First check-in. Visual changes starting.', 
      scale: 1.01,
      color: '#f59e0b' // amber
    },
    { 
      day: 'Day 30', 
      weight: '77.2 kg', 
      bodyFat: '20.8%', 
      notes: 'Consistent workouts paying off.', 
      scale: 0.97,
      color: '#3b82f6' // blue
    },
    { 
      day: 'Day 45', 
      weight: '74.5 kg', 
      bodyFat: '18.5%', 
      notes: 'Target weight achieved. Feel great!', 
      scale: 0.93,
      color: '#84cc16' // lime
    }
  ];

  const active = milestones[selectedMilestone];

  return (
    <div className="layout-section" id="progress">
      {/* Title */}
      <h2 className="text-3xl sm:text-[40px] font-black tracking-tight leading-[1.2] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Visual progress tracker
      </h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-lg mb-12">
        Log your physical changes with secure private photos and body metrics. Track your weight decline and watch your body shape transform.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl px-4">
        
        {/* Milestones Panel */}
        <div className="w-full md:w-5/12 p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-left shadow-sm">
          <h3 className="text-xs font-black text-neutral-500 uppercase tracking-widest mb-3">Progress Milestones</h3>
          <div className="space-y-2">
            {milestones.map((m, index) => {
              const isActive = selectedMilestone === index;
              return (
                <div 
                  key={m.day} 
                  onClick={() => setSelectedMilestone(index)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-brand-500/5 border-brand-500/30 text-neutral-900 dark:text-white font-bold' 
                      : 'bg-white dark:bg-black/40 border-neutral-200 dark:border-neutral-950 text-neutral-400 dark:text-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-800'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Calendar className={`w-4 h-4 ${isActive ? 'text-brand-500' : 'text-neutral-500'}`} />
                    <span className="text-[11px] font-black">{m.day}</span>
                  </div>
                  <span className={`text-[9px] font-black px-2.5 py-0.5 rounded-full ${
                    isActive ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400'
                  }`}>
                    {m.weight}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mock Phone Display */}
        <div className="w-full md:w-6/12 flex justify-center">
          <div className="relative w-full max-w-[280px] bg-[#0a0a0a] rounded-[44px] p-3 border border-neutral-900 shadow-xl">
            <div className="rounded-[32px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-5 text-center">
              
              <div className="flex justify-between items-center text-[9px] text-neutral-500 pt-0.5">
                <span>Progress Detail</span>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center py-3">
                {/* Photo Simulation */}
                <div className="relative w-32 h-36 bg-neutral-950 border border-neutral-900 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner mb-3">
                  {/* Dynamic Silhouette using SVG scaled by progress */}
                  <svg 
                    viewBox="0 0 100 120" 
                    className="absolute bottom-2 w-20 h-28 opacity-75 transition-all duration-500 ease-in-out"
                    style={{ transform: `scaleX(${active.scale})` }}
                  >
                    {/* Stylized Body Silhouette */}
                    <circle cx="50" cy="20" r="10" fill={active.color} />
                    <path 
                      d="M50 32 C35 32 30 50 30 75 L38 75 L38 110 L48 110 L48 85 L52 85 L52 110 L62 110 L62 75 L70 75 C70 50 65 32 50 32 Z" 
                      fill={active.color} 
                    />
                  </svg>
                  
                  {/* Photo details overlay */}
                  <div className="absolute top-2 left-2 flex items-center space-x-1 bg-black/60 px-1.5 py-0.5 rounded-md text-[7px] text-white">
                    <ImageIcon className="w-2.5 h-2.5 text-brand-400" />
                    <span>Photo Verified</span>
                  </div>
                </div>

                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">{active.day} Metrics</h4>
                <p className="text-[8px] text-neutral-500 mt-0.5 uppercase tracking-wide">{active.notes}</p>

                {/* Progress Details card */}
                <div className="mt-3.5 w-full bg-neutral-950 border border-neutral-900 p-3 rounded-2xl space-y-2 text-left">
                  <div className="flex justify-between items-center text-[9px] font-bold text-neutral-400">
                    <span className="flex items-center gap-1">
                      <TrendingDown className="w-3 h-3 text-brand-400" /> Weight
                    </span>
                    <span className="font-extrabold text-white">{active.weight}</span>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-bold text-neutral-400 border-t border-neutral-900 pt-1.5">
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3 text-brand-400" /> Body Fat
                    </span>
                    <span className="font-extrabold text-white">{active.bodyFat}</span>
                  </div>
                </div>

              </div>

              <div>
                <button 
                  className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 cursor-pointer font-bold text-[9px] uppercase tracking-widest transition-all shadow-md"
                >
                  Log Today's Image
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
