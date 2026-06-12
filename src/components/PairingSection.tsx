import { useState, useEffect } from 'react';
import { Watch, Smartphone, Check } from 'lucide-react';

export default function PairingSection() {
  const [watchPairingState, setWatchPairingState] = useState<'unpaired' | 'pairing' | 'paired'>('unpaired');
  const [pairingProgress, setPairingProgress] = useState(0);

  const handlePairWatch = () => {
    if (watchPairingState === 'paired') {
      setWatchPairingState('unpaired');
      setPairingProgress(0);
      return;
    }
    setWatchPairingState('pairing');
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setPairingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setWatchPairingState('paired');
      }
    }, 100);
  };

  return (
    <section id="pairing" className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Copy */}
      <div className="lg:col-span-5 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
          Connect to track
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
          Pair any fitness wearable or smart accessory effortlessly using our low-latency local handshake. Once connected, your active burn logs sync in real-time to adjust your daily budget.
        </p>

        <div className="space-y-4 pt-2">
          <div className="flex items-start space-x-3">
            <div className="p-1 bg-brand-500/10 dark:bg-brand-500/20 rounded-lg text-brand-600 dark:text-brand-400 mt-1">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-neutral-900 dark:text-white">Ultra-low-latency BLE connection</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Fast pairing speeds encrypted locally with Curve25519.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-1 bg-brand-500/10 dark:bg-brand-500/20 rounded-lg text-brand-600 dark:text-brand-400 mt-1">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-neutral-900 dark:text-white">Secure local handshakes</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">No internet connection required. Keep your metrics local.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Simulator view */}
      <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-8 bg-[#f8faf6] dark:bg-neutral-950/40 border border-neutral-200/60 dark:border-neutral-900/60 rounded-[40px] p-8 sm:p-12 relative overflow-hidden transition-colors duration-300">
        
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
                  <Watch className="w-5 h-5" />
                </div>
                <span className="text-[9px] uppercase font-bold text-neutral-500 tracking-wider">Wearable Pairing</span>
                <h4 className="text-xs font-bold text-white mt-1">CaLidar Active Watch</h4>
              </div>

              <div className="space-y-1.5 pt-1">
                <button 
                  onClick={handlePairWatch}
                  className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-[9px] uppercase tracking-wider rounded-lg border border-neutral-800 transition-all cursor-pointer"
                >
                  {watchPairingState === 'paired' ? 'Disconnect' : watchPairingState === 'pairing' ? 'Pairing...' : 'Add Watch'}
                </button>
                <button className="w-full py-2 bg-neutral-950/40 text-neutral-500 hover:text-white font-bold text-[9px] uppercase tracking-wider rounded-lg transition-all">
                  Remove Device
                </button>
                <button className="w-full py-2 bg-neutral-950/40 text-neutral-500 hover:text-white font-bold text-[9px] uppercase tracking-wider rounded-lg transition-all">
                  Show Pairing Pin
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
              <div className="text-[8px] font-bold text-neutral-500 tracking-widest pt-1 uppercase">CALIDAR SYNC</div>

              <div className="relative w-14 h-14 rounded-full border border-neutral-900/60 flex items-center justify-center my-1 bg-neutral-950 shadow-inner">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="42" stroke="#171717" strokeWidth="5" fill="none" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="42" 
                    stroke={watchPairingState === 'paired' ? '#84cc16' : '#f59e0b'} 
                    strokeWidth="5" 
                    fill="none" 
                    strokeDasharray="263.89" 
                    strokeDashoffset={watchPairingState === 'paired' ? 0 : watchPairingState === 'pairing' ? 263.89 - (263.89 * pairingProgress) / 100 : 200}
                    className="transition-all duration-300"
                  />
                </svg>
                
                {watchPairingState === 'paired' ? (
                  <Check className="w-5 h-5 text-brand-400" />
                ) : (
                  <span className="text-xs font-mono font-bold text-amber-400">P</span>
                )}
              </div>

              <div className="text-[8px] text-neutral-400 tracking-tight pb-1">
                {watchPairingState === 'paired' ? 'Connected Sync' : watchPairingState === 'pairing' ? 'Connecting...' : 'Secure Unpaired'}
              </div>
            </div>
          </div>

          <button 
            onClick={handlePairWatch}
            className="mt-4 px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-[9px] font-mono text-neutral-700 dark:text-neutral-300 transition-all uppercase tracking-wide cursor-pointer shadow-sm"
          >
            {watchPairingState === 'unpaired' ? 'Simulate Link' : 'Simulate Reset'}
          </button>
        </div>

      </div>
    </section>
  );
}
