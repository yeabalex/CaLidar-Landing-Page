import { useState, useEffect } from 'react';
import { QrCode, Sparkles, RefreshCw } from 'lucide-react';

export default function SyncSection() {
  const [calorieTransferAmount, setCalorieTransferAmount] = useState('320');
  const [qrRotatorCode, setQrRotatorCode] = useState('CALIDAR-SYNC-X9827B-320');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomShard = Math.random().toString(36).substring(2, 8).toUpperCase();
      setQrRotatorCode(`CALIDAR-SYNC-${randomShard}-${calorieTransferAmount}`);
    }, 4000);
    return () => clearInterval(interval);
  }, [calorieTransferAmount]);

  return (
    <section id="sync-qr" className="border-t border-neutral-200/80 dark:border-neutral-900/60 bg-[#f8faf6] dark:bg-neutral-950/40 py-24 md:py-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Zero-Cloud Local Syncing</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
              Decentralized scan sync
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Transfer your daily food diaries and metabolic statistics directly between devices offline. No accounts or cloud sync required.
            </p>

            <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl space-y-4 shadow-sm">
              <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                Calories to Sync (kcal)
              </label>
              <input 
                type="number" 
                value={calorieTransferAmount}
                onChange={(e) => setCalorieTransferAmount(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-3 text-sm text-neutral-800 dark:text-white focus:outline-none focus:border-brand-500 font-extrabold"
              />
              <p className="text-[10px] text-neutral-400 leading-normal">
                Modifying the calorie amount instantly updates the cryptographic signature inside the rotating QR code below.
              </p>
            </div>
          </div>

          {/* Right Side Phone Mockup with rotating QR code */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xs bg-[#0e0e0e] rounded-[44px] p-3 border-2 border-neutral-800 shadow-xl">
              <div className="rounded-[34px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-5 text-center">
                
                {/* Top status */}
                <div className="flex justify-between items-center text-[9px] text-neutral-500 pt-0.5">
                  <span>Local Sync Portal</span>
                  <div className="flex items-center gap-1 text-[8px] uppercase tracking-wider font-extrabold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-full">
                    <span>ZKP Sync</span>
                  </div>
                </div>

                {/* QR Screen */}
                <div className="flex-1 flex flex-col justify-center items-center py-4">
                  
                  {/* Outer QR box */}
                  <div className="relative p-3.5 bg-white border-4 border-brand-500 rounded-3xl flex items-center justify-center shadow-lg shadow-brand-500/5">
                    {/* Simulated pixelated QR pattern */}
                    <div className="w-32 h-32 flex flex-wrap gap-[2px]">
                      {Array.from({ length: 144 }).map((_, i) => {
                        const isBorderPixel = 
                          (i % 12 < 3 && Math.floor(i / 12) < 3) || // top-left corner
                          (i % 12 >= 9 && Math.floor(i / 12) < 3) || // top-right corner
                          (i % 12 < 3 && Math.floor(i / 12) >= 9);  // bottom-left corner
                        const isRandomPixel = Math.random() > 0.45;
                        return (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-[1px] ${
                              isBorderPixel ? 'bg-black' : isRandomPixel ? 'bg-black' : 'bg-neutral-100'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 space-y-1">
                    <span className="text-[8px] font-black text-neutral-500 uppercase tracking-widest block">Rotating Handshake Code</span>
                    <code className="text-[9px] font-mono text-neutral-400 bg-neutral-950 px-2 py-1.5 rounded-md border border-neutral-900 break-all select-all block max-w-[210px] mx-auto">
                      {qrRotatorCode}
                    </code>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-1.5 text-[8px] uppercase tracking-widest font-black text-neutral-500">
                    <RefreshCw className="h-3 w-3 animate-spin text-brand-500" />
                    <span>Regenerates every 4s</span>
                  </div>

                </div>

                {/* Bottom info */}
                <p className="text-[8px] text-neutral-500 leading-relaxed max-w-[190px] mx-auto border-t border-neutral-900/60 pt-2.5">
                  Scan this code with a secondary CaLidar device to pull logged food metrics instantly.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
