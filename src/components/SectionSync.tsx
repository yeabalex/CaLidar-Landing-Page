import { useState, useEffect } from 'react';
import { Watch, Smartphone, Laptop } from 'lucide-react';

export default function SectionSync() {
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
    <div className="layout-section">
      {/* Title */}
      <h2 className="text-3xl sm:text-[40px] font-black tracking-tight leading-[1.2] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Portion mapping<br />
        powered by you
      </h2>
      
      {/* Sync Health Badge */}
      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full mb-12 text-[10px] font-bold text-neutral-500">
        <span>Sync Health:</span>
        <span className={securityStatus.includes('Optimal') ? 'text-brand-600 dark:text-brand-400' : 'text-amber-500'}>
          {securityStatus}
        </span>
      </div>

      {/* Row of centered mock devices */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 w-full max-w-2xl px-4">
        
        {/* Watch */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-20 h-24 bg-[#0a0a0a] border-2 border-neutral-800 rounded-2xl flex items-center justify-center shadow-md">
            <Watch className="w-8 h-8 text-neutral-400" />
            <span className={`absolute -top-2 -right-2 h-5 px-1.5 rounded-full text-[8px] font-bold border ${
              deviceStatuses.watch === 'Active' 
                ? 'bg-brand-500/10 text-brand-600 border-brand-500/30' 
                : 'bg-neutral-900 text-neutral-500 border-neutral-800'
            }`}>
              {deviceStatuses.watch}
            </span>
          </div>
          <button 
            onClick={() => toggleDeviceStatus('watch')}
            className="text-[9px] uppercase tracking-wider font-extrabold text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Toggle Watch
          </button>
        </div>

        {/* Smartphone */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-24 h-36 bg-[#0a0a0a] border-2 border-neutral-800 rounded-3xl flex items-center justify-center shadow-md">
            <Smartphone className="w-10 h-10 text-neutral-400" />
            <span className={`absolute -top-2 -right-2 h-5 px-1.5 rounded-full text-[8px] font-bold border ${
              deviceStatuses.phone === 'Active' 
                ? 'bg-brand-500/10 text-brand-600 border-brand-500/30' 
                : 'bg-neutral-900 text-neutral-500 border-neutral-800'
            }`}>
              {deviceStatuses.phone}
            </span>
          </div>
          <button 
            onClick={() => toggleDeviceStatus('phone')}
            className="text-[9px] uppercase tracking-wider font-extrabold text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Toggle Phone
          </button>
        </div>

        {/* Laptop */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative flex flex-col items-center">
            <div className="relative w-40 h-24 bg-[#0a0a0a] border-2 border-neutral-800 rounded-t-xl flex items-center justify-center shadow-md">
              <Laptop className="w-12 h-12 text-neutral-400" />
              <span className={`absolute -top-2 -right-2 h-5 px-1.5 rounded-full text-[8px] font-bold border ${
                deviceStatuses.laptop === 'Active' 
                  ? 'bg-brand-500/10 text-brand-600 border-brand-500/30' 
                  : 'bg-neutral-900 text-neutral-500 border-neutral-800'
              }`}>
                {deviceStatuses.laptop}
              </span>
            </div>
            <div className="w-44 h-1.5 bg-neutral-800 rounded-b-sm"></div>
          </div>
          <button 
            onClick={() => toggleDeviceStatus('laptop')}
            className="text-[9px] uppercase tracking-wider font-extrabold text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Toggle Laptop
          </button>
        </div>

      </div>
    </div>
  );
}
