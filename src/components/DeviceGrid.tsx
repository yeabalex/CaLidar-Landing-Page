import { useState, useEffect } from 'react';
import { Watch, Smartphone, Laptop } from 'lucide-react';

export default function DeviceGrid() {
  const [deviceStatuses, setDeviceStatuses] = useState({
    phone: 'Active',
    watch: 'Active',
    laptop: 'Active'
  });
  const [securityStatus, setSecurityStatus] = useState('Optimal (3/3 Synced)');

  useEffect(() => {
    const activeCount = Object.values(deviceStatuses).filter(status => status === 'Active').length;
    if (activeCount === 3) {
      setSecurityStatus('Optimal (3/3 Devices Synced)');
    } else if (activeCount === 2) {
      setSecurityStatus('Warning (2/3 Devices Synced)');
    } else if (activeCount === 1) {
      setSecurityStatus('Vulnerable (1/3 Synced - Database Sync Required)');
    } else {
      setSecurityStatus('Offline State - Local Cache Active Only');
    }
  }, [deviceStatuses]);

  const toggleDeviceStatus = (dev: keyof typeof deviceStatuses) => {
    setDeviceStatuses(prev => ({
      ...prev,
      [dev]: prev[dev] === 'Active' ? 'Offline' : 'Active'
    }));
  };

  return (
    <section id="sync" className="border-y border-neutral-200/80 dark:border-neutral-900/60 bg-[#f8faf6] dark:bg-neutral-950/40 py-24 md:py-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
            Decentralized logs powered by you
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Your calorie logs and scanned macros are synchronized locally only across the devices you already trust. No central databases, no tracking ads.
          </p>
          
          {/* Health indicator badge */}
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl mt-4 shadow-sm">
            <span className="text-xs font-bold text-neutral-500">Live Sync Health:</span>
            <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
              securityStatus.includes('Optimal') 
                ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400' 
                : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
            }`}>
              {securityStatus}
            </span>
          </div>
        </div>

        {/* Sync Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Watch Card */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-[32px] p-8 flex flex-col justify-between hover:border-brand-500/40 dark:hover:border-brand-500/20 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-2xl text-neutral-500 dark:text-neutral-400 group-hover:text-brand-500 transition-colors">
                  <Watch className="w-6 h-6" />
                </div>
                <button 
                  onClick={() => toggleDeviceStatus('watch')}
                  className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border transition-all cursor-pointer ${
                    deviceStatuses.watch === 'Active' 
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20' 
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 border-neutral-200 dark:border-neutral-700'
                  }`}
                >
                  {deviceStatuses.watch}
                </button>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white tracking-tight">Watch Scanner</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Paired as ultra-secure offline active-calorie hardware.</p>
              </div>
            </div>

            {/* Watch graphic */}
            <div className="mt-8 flex justify-center py-4">
              <div className="relative w-28 h-28 bg-[#fdfdfd] dark:bg-[#0a0a0a] border-4 border-neutral-200 dark:border-neutral-800 rounded-[24px] flex items-center justify-center overflow-hidden shadow-sm">
                <div className="absolute top-0 right-1 w-2 h-4 bg-neutral-200 dark:bg-neutral-800 rounded-sm"></div>
                <div className="relative w-20 h-20 rounded-full bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900 flex flex-col items-center justify-center p-2 text-center shadow-inner">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="42" stroke="#f1f5f9" strokeWidth="4" className="dark:stroke-neutral-900" fill="none" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="42" 
                      stroke={deviceStatuses.watch === 'Active' ? "#84cc16" : "#f43f5e"} 
                      strokeWidth="4" 
                      fill="none" 
                      strokeDasharray="263.89" 
                      strokeDashoffset={deviceStatuses.watch === 'Active' ? 80 : 263.89}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <span className="text-xs font-mono font-black text-neutral-800 dark:text-white">{deviceStatuses.watch === 'Active' ? 'A' : '!' }</span>
                  <span className="text-[7px] text-neutral-400 uppercase tracking-widest font-black mt-1">Synced</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 leading-normal">
              Requires heart rate and activity metrics from watch to compute total daily calories.
            </p>
          </div>

          {/* Smartphone Card */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-[32px] p-8 flex flex-col justify-between hover:border-brand-500/40 dark:hover:border-brand-500/20 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-2xl text-neutral-500 dark:text-neutral-400 group-hover:text-brand-500 transition-colors">
                  <Smartphone className="w-6 h-6" />
                </div>
                <button 
                  onClick={() => toggleDeviceStatus('phone')}
                  className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border transition-all cursor-pointer ${
                    deviceStatuses.phone === 'Active' 
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20' 
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 border-neutral-200 dark:border-neutral-700'
                  }`}
                >
                  {deviceStatuses.phone}
                </button>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white tracking-tight">Smart Core</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Main smartphone interface with food scanning secure database.</p>
              </div>
            </div>

            {/* Smartphone mini display */}
            <div className="mt-8 flex justify-center py-4">
              <div className="relative w-24 h-28 bg-[#fdfdfd] dark:bg-[#0a0a0a] border-t-4 border-x-4 border-neutral-200 dark:border-neutral-800 rounded-t-2xl flex items-center justify-center overflow-hidden shadow-sm">
                <div className="absolute top-2 w-8 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                <div className="w-16 h-16 rounded-full border border-dashed border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center text-center p-1 mt-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 flex items-center justify-center">
                    <Smartphone className={`w-4 h-4 ${deviceStatuses.phone === 'Active' ? 'text-neutral-800 dark:text-white' : 'text-neutral-300 dark:text-neutral-700'}`} />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 leading-normal">
              Acts as the central point-and-scan camera tool and calorie logger.
            </p>
          </div>

          {/* Desktop Card */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-[32px] p-8 flex flex-col justify-between hover:border-brand-500/40 dark:hover:border-brand-500/20 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-2xl text-neutral-500 dark:text-neutral-400 group-hover:text-brand-500 transition-colors">
                  <Laptop className="w-6 h-6" />
                </div>
                <button 
                  onClick={() => toggleDeviceStatus('laptop')}
                  className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border transition-all cursor-pointer ${
                    deviceStatuses.laptop === 'Active' 
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20' 
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 border-neutral-200 dark:border-neutral-700'
                  }`}
                >
                  {deviceStatuses.laptop}
                </button>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white tracking-tight">Desktop Portal</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Web logs synchronizer and long-term trends dashboard.</p>
              </div>
            </div>

            {/* Laptop graphic */}
            <div className="mt-8 flex flex-col items-center justify-center py-4">
              <div className="relative w-36 h-20 bg-[#fdfdfd] dark:bg-[#0a0a0a] border-4 border-neutral-200 dark:border-neutral-800 rounded-t-lg flex items-center justify-center overflow-hidden shadow-sm">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-6 h-6 text-neutral-200 dark:text-neutral-800">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="10" fill="none" strokeDasharray="50 30" />
                  </svg>
                </div>
              </div>
              <div className="w-44 h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-b-sm"></div>
            </div>

            <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 leading-normal">
              Syncs weekly trends to compile deep reports and meal history.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
