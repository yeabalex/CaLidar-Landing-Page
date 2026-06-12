import { useState, useEffect } from 'react';
import { Globe, Watch, Camera, Smartphone, User, Key, ShieldCheck, RefreshCw } from 'lucide-react';

export default function RecoverySection() {
  const [guardians, setGuardians] = useState([
    { id: 'usda', name: 'USDA Food Database Shard', icon: Globe, status: true },
    { id: 'apple', name: 'Apple Health Portal Sync', icon: Watch, status: true },
    { id: 'vision', name: 'AI Vision Engine Model', icon: Camera, status: false },
    { id: 'barcode', name: 'UPC Barcode scanner', icon: Smartphone, status: true },
    { id: 'user', name: 'Manual User override', icon: User, status: false }
  ]);
  const requiredGuardians = 3;

  const toggleGuardian = (id: string) => {
    setGuardians(prev => prev.map(g => g.id === id ? { ...g, status: !g.status } : g));
  };

  const getActiveGuardiansCount = () => {
    return guardians.filter(g => g.status).length;
  };

  return (
    <section id="database" className="border-y border-neutral-200/80 dark:border-neutral-900/60 bg-[#f8faf6] dark:bg-neutral-950/40 py-24 md:py-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
            Verify nutrition with multi-source databases
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            To ensure calorie tracking accuracy without cloud storage, CaLidar cross-references 3D spatial volumes against decentralized food verification sources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls list */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl shadow-sm">
              <h3 className="text-base font-extrabold text-neutral-900 dark:text-white mb-2">Configure Verification Sources</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                Toggle verification sources below to simulate database consensus threshold. (Requires {requiredGuardians} out of 5 active sources)
              </p>
              
              <div className="space-y-2">
                {guardians.map((g) => {
                  const Icon = g.icon;
                  return (
                    <div 
                      key={g.id} 
                      onClick={() => toggleGuardian(g.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        g.status 
                          ? 'bg-brand-500/5 dark:bg-brand-500/10 border-brand-500/40 text-neutral-900 dark:text-white font-semibold' 
                          : 'bg-white dark:bg-black/40 border-neutral-200 dark:border-neutral-950 text-neutral-400 dark:text-neutral-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 ${g.status ? 'text-brand-500' : 'text-neutral-400 dark:text-neutral-700'}`} />
                        <span className="text-xs">{g.name}</span>
                      </div>
                      <span className={`text-[9px] uppercase font-black px-2.5 py-0.5 rounded-full ${
                        g.status ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400 dark:text-neutral-600'
                      }`}>
                        {g.status ? 'Active' : 'Excluded'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Verification indicator Phone screen */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-sm bg-[#0a0a0a] rounded-[48px] p-3.5 border border-neutral-900 shadow-xl">
              <div className="rounded-[36px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-6">
                
                {/* Phone top */}
                <div className="flex justify-between items-center text-[10px] text-neutral-500 pt-1 font-semibold">
                  <span>Verification Consensus</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
                </div>

                {/* Core content */}
                <div className="flex-1 flex flex-col justify-center items-center py-4 text-center">
                  <div className="mb-4">
                    <Key className="w-8 h-8 mx-auto text-neutral-500 animate-pulse" />
                    <h4 className="text-sm font-bold text-white mt-2">Computing Food Shards</h4>
                    <p className="text-[10px] text-neutral-500">Cross-referencing database sources</p>
                  </div>

                  {/* Progress Card */}
                  <div className="relative w-full max-w-[240px] bg-neutral-950 border border-neutral-900 p-4 rounded-2xl flex flex-col items-center space-y-3">
                    <div className="flex justify-between w-full text-[11px] font-semibold text-neutral-400">
                      <span>Verification Progress</span>
                      <span>{getActiveGuardiansCount()} / {requiredGuardians} Sources</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-neutral-900 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 rounded-full ${
                          getActiveGuardiansCount() >= requiredGuardians ? 'bg-brand-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${Math.min(100, (getActiveGuardiansCount() / requiredGuardians) * 100)}%` }}
                      />
                    </div>

                    {/* Active Consensus Badge */}
                    {getActiveGuardiansCount() >= requiredGuardians ? (
                      <div className="flex items-center space-x-1.5 text-[11px] font-bold text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full w-full justify-center">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>NUTRITION VERIFIED</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1.5 text-[11px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full w-full justify-center">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>AWAITING {requiredGuardians - getActiveGuardiansCount()} MORE SOURCE(S)</span>
                      </div>
                    )}
                  </div>

                  {/* Network Map Visual */}
                  <div className="mt-6 flex justify-center space-x-2">
                    {guardians.map((g) => {
                      const Icon = g.icon;
                      return (
                        <div 
                          key={g.id}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                            g.status 
                              ? 'bg-neutral-950 border-white text-white scale-105' 
                              : 'bg-black border-neutral-900 text-neutral-700'
                          }`}
                          title={g.name}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Bottom Action */}
                <div>
                  <button 
                    disabled={getActiveGuardiansCount() < requiredGuardians}
                    className={`w-full py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${
                      getActiveGuardiansCount() >= requiredGuardians 
                        ? 'bg-white text-black hover:bg-neutral-200 cursor-pointer' 
                        : 'bg-neutral-950 text-neutral-600 cursor-not-allowed border border-neutral-900/60'
                    }`}
                  >
                    Commit Calories to Log
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
