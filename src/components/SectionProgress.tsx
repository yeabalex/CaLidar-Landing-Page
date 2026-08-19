import { useState } from 'react';
import { Calendar, Camera, TrendingDown, Award, Shield, Lock } from 'lucide-react';

export default function SectionProgress() {
  const [selectedMilestone, setSelectedMilestone] = useState(3);

  const milestones = [
    { 
      day: 'Week 1', 
      date: 'Oct 12',
      weight: '82.5 kg', 
      bodyFat: '24.2%', 
      bmi: '26.8',
      notes: 'Initial 3D scan & baseline photo setup.', 
      scale: 1.06,
      color: '#ef4444'
    },
    { 
      day: 'Week 3', 
      date: 'Oct 26',
      weight: '79.8 kg', 
      bodyFat: '22.5%', 
      bmi: '25.4',
      notes: 'Consistent deficit tracked via LiDAR.', 
      scale: 1.01,
      color: '#f59e0b'
    },
    { 
      day: 'Week 5', 
      date: 'Nov 09',
      weight: '77.2 kg', 
      bodyFat: '20.8%', 
      bmi: '24.1',
      notes: 'Visual abdominal definition appearing.', 
      scale: 0.96,
      color: '#3b82f6'
    },
    { 
      day: 'Week 8', 
      date: 'Nov 30',
      weight: '74.5 kg', 
      bodyFat: '18.5%', 
      bmi: '23.0',
      notes: 'Target physique achieved. -8.0 kg down!', 
      scale: 0.91,
      color: '#84cc16'
    }
  ];

  const active = milestones[selectedMilestone];

  return (
    <section id="progress" className="layout-section">
      {/* Title */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 border border-brand-500/20 text-xs font-black uppercase tracking-wider mb-4">
        <TrendingDown className="w-3.5 h-3.5" />
        <span>Hardware Enclave Private Photos</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Visual progress tracker
      </h2>
      
      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-12">
        Track your body transformation with encrypted on-device photos, weight charts, and body fat composition without cloud leak risks.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl px-2">
        
        {/* Left Side: Milestones List & Weight Curve */}
        <div className="w-full lg:w-6/12 p-6 sm:p-7 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[32px] text-left shadow-sm">
          
          {/* Top Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Weight Trajectory</span>
              <h3 className="text-xl font-black text-neutral-900 dark:text-white">
                -8.0 kg <span className="text-xs font-bold text-brand-600 dark:text-brand-400">(-9.7%)</span>
              </h3>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-full text-[10px] font-black">
              <Shield className="w-3 h-3" />
              <span>100% Encrypted</span>
            </div>
          </div>

          {/* SVG Weight Chart Curve */}
          <div className="w-full h-28 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800/80 rounded-2xl p-2 relative mb-6">
            <svg viewBox="0 0 300 80" className="w-full h-full">
              {/* Grid lines */}
              <line x1="0" y1="20" x2="300" y2="20" stroke="#262626" strokeDasharray="3 3" strokeWidth="0.5" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="#262626" strokeDasharray="3 3" strokeWidth="0.5" />
              
              {/* Area gradient under line */}
              <defs>
                <linearGradient id="weightGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#84cc16" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#84cc16" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <polygon points="30,20 110,38 190,52 270,68 270,80 30,80" fill="url(#weightGrad)" />

              {/* Progress Line */}
              <polyline
                fill="none"
                stroke="#84cc16"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="30,20 110,38 190,52 270,68"
              />

              {/* Data points */}
              {milestones.map((m, idx) => {
                const x = 30 + idx * 80;
                const y = 20 + idx * 16;
                const isCur = selectedMilestone === idx;
                return (
                  <g key={m.day} onClick={() => setSelectedMilestone(idx)} className="cursor-pointer">
                    <circle cx={x} cy={y} r={isCur ? "6" : "4"} fill={isCur ? "#84cc16" : "#ffffff"} stroke="#000000" strokeWidth="2" />
                    <text x={x} y="78" fill="#737373" fontSize="8" fontWeight="bold" textAnchor="middle">{m.day}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Milestone Selector List */}
          <div className="space-y-2">
            {milestones.map((m, index) => {
              const isActive = selectedMilestone === index;
              return (
                <div 
                  key={m.day} 
                  onClick={() => setSelectedMilestone(index)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-brand-500/10 border-brand-500 text-neutral-900 dark:text-white font-bold shadow-sm' 
                      : 'bg-white dark:bg-black/50 border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-1.5 rounded-xl ${isActive ? 'bg-brand-500 text-black' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'}`}>
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-neutral-900 dark:text-white">{m.day} • {m.date}</div>
                      <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium">{m.notes}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-mono font-black ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-neutral-500'}`}>
                      {m.weight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Side: Mock Phone Displaying Progress Photo Screen */}
        <div className="w-full lg:w-6/12 flex justify-center">
          <div className="relative w-full max-w-[300px] bg-[#0d0d0d] rounded-[48px] p-3 border-[3.5px] border-neutral-800 shadow-2xl">
            <div className="rounded-[36px] bg-black overflow-hidden border border-neutral-900 aspect-[9/19] flex flex-col justify-between p-4 text-center text-white">
              
              {/* Top Bar */}
              <div className="flex justify-between items-center text-[9px] text-neutral-400 pt-0.5 px-1">
                <span>9:41</span>
                <span className="text-brand-400 font-bold uppercase tracking-wider text-[8px] flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" /> On-Device Photo Enclave
                </span>
              </div>

              {/* Body Screen */}
              <div className="flex-1 flex flex-col justify-between py-2">
                
                {/* Visual Body Scan Avatar */}
                <div className="relative w-full aspect-[4/3] bg-neutral-950 border border-neutral-800/80 rounded-2xl flex flex-col items-center justify-center overflow-hidden my-auto shadow-inner">
                  
                  {/* Visual Body Silhouette */}
                  <svg 
                    viewBox="0 0 100 120" 
                    className="w-20 h-24 opacity-85 transition-all duration-500 ease-in-out"
                    style={{ transform: `scaleX(${active.scale})` }}
                  >
                    <circle cx="50" cy="18" r="9" fill={active.color} />
                    <path 
                      d="M50 30 C36 30 31 46 31 72 L38 72 L38 108 L48 108 L48 82 L52 82 L52 108 L62 108 L62 72 L69 72 C69 46 64 30 50 30 Z" 
                      fill={active.color} 
                    />
                  </svg>

                  {/* Photo details tag */}
                  <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded-md text-[8px] text-white border border-neutral-800">
                    <Camera className="w-2.5 h-2.5 text-brand-400" />
                    <span>Front & Side Angle</span>
                  </div>

                  <div className="absolute bottom-2 right-2 text-[8px] font-mono text-brand-400 bg-black/70 px-1.5 py-0.5 rounded border border-neutral-800">
                    {active.day}
                  </div>
                </div>

                {/* Metric Summary Cards */}
                <div className="grid grid-cols-2 gap-2 my-2">
                  <div className="bg-neutral-950 border border-neutral-800/90 p-2.5 rounded-xl text-left">
                    <div className="text-[8px] font-black uppercase text-neutral-400 flex items-center gap-1">
                      <TrendingDown className="w-3 h-3 text-brand-400" /> Weight
                    </div>
                    <div className="text-sm font-black text-white font-mono mt-0.5">{active.weight}</div>
                    <div className="text-[7px] text-brand-400 font-bold mt-0.5">Target: 74.0 kg</div>
                  </div>

                  <div className="bg-neutral-950 border border-neutral-800/90 p-2.5 rounded-xl text-left">
                    <div className="text-[8px] font-black uppercase text-neutral-400 flex items-center gap-1">
                      <Award className="w-3 h-3 text-brand-400" /> Body Fat
                    </div>
                    <div className="text-sm font-black text-white font-mono mt-0.5">{active.bodyFat}</div>
                    <div className="text-[7px] text-brand-400 font-bold mt-0.5">BMI: {active.bmi}</div>
                  </div>
                </div>

                {/* Log Photo Action */}
                <button 
                  className="w-full py-2.5 rounded-xl bg-brand-500 text-black font-black text-[9px] uppercase tracking-wider hover:bg-brand-400 transition-all flex items-center justify-center gap-1 cursor-pointer shadow-md"
                >
                  <Camera className="w-3 h-3" />
                  <span>Log New Progress Photo</span>
                </button>

              </div>

              {/* Indicator bar */}
              <div className="w-20 h-1 bg-neutral-700 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
