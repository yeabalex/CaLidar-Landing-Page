import { useState } from 'react';
import { Globe, Watch, Camera, Smartphone, User, Key, ShieldCheck, RefreshCw } from 'lucide-react';

export default function SectionDatabase() {
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
    <div className="layout-section" id="database">
      {/* Title */}
      <h2 className="text-3xl sm:text-[40px] font-black tracking-tight leading-[1.2] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Verify from databases<br />
        or active logs
      </h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-lg mb-12">
        Consensus verification across multiple nodes ensures your calorie data is correct before committing it to your local diary.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl px-4">
        
        {/* Toggle Panel */}
        <div className="w-full md:w-5/12 p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-left shadow-sm">
          <h3 className="text-xs font-black text-neutral-500 uppercase tracking-widest mb-3">Verification Shards</h3>
          <div className="space-y-2">
            {guardians.map((g) => {
              const Icon = g.icon;
              return (
                <div 
                  key={g.id} 
                  onClick={() => toggleGuardian(g.id)}
                  className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all ${
                    g.status 
                      ? 'bg-brand-500/5 border-brand-500/30 text-neutral-900 dark:text-white font-semibold' 
                      : 'bg-white dark:bg-black/40 border-neutral-200 dark:border-neutral-950 text-neutral-400 dark:text-neutral-700'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-4 h-4 ${g.status ? 'text-brand-500' : 'text-neutral-500'}`} />
                    <span className="text-[11px]">{g.name}</span>
                  </div>
                  <span className={`text-[8px] uppercase font-black px-2 py-0.5 rounded-full ${
                    g.status ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400'
                  }`}>
                    {g.status ? 'Active' : 'Offline'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verification Status Phone Screen */}
        <div className="w-full md:w-6/12 flex justify-center">
          <div className="relative w-full max-w-[280px] bg-[#0a0a0a] rounded-[44px] p-3 border border-neutral-900 shadow-xl">
            <div className="rounded-[32px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-5 text-center">
              
              <div className="flex justify-between items-center text-[9px] text-neutral-500 pt-0.5">
                <span>Verification Consensus</span>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center py-4">
                <Key className="w-7 h-7 text-neutral-500 mb-2 animate-pulse" />
                <h4 className="text-[11px] font-black text-white uppercase tracking-widest">Verify Food Shards</h4>
                <p className="text-[8px] text-neutral-500 mt-0.5 uppercase tracking-wide">Syncing local consensus</p>

                {/* Progress bar card */}
                <div className="mt-5 w-full bg-neutral-950 border border-neutral-900 p-3.5 rounded-2xl space-y-3">
                  <div className="flex justify-between text-[9px] font-bold text-neutral-400">
                    <span>Database Status</span>
                    <span>{getActiveGuardiansCount()} / {requiredGuardians}</span>
                  </div>

                  <div className="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 rounded-full ${
                        getActiveGuardiansCount() >= requiredGuardians ? 'bg-brand-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${Math.min(100, (getActiveGuardiansCount() / requiredGuardians) * 100)}%` }}
                    />
                  </div>

                  {getActiveGuardiansCount() >= requiredGuardians ? (
                    <div className="text-[9px] font-black text-brand-400 bg-brand-500/10 border border-brand-500/20 py-1 rounded-full flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>LOG AUTHORIZED</span>
                    </div>
                  ) : (
                    <div className="text-[9px] font-black text-amber-500 bg-amber-500/10 border border-amber-500/20 py-1 rounded-full flex items-center justify-center gap-1.5">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      <span>AWAITING SOURCES</span>
                    </div>
                  )}
                </div>

                {/* Shards Visualization */}
                <div className="mt-5 flex justify-center space-x-2">
                  {guardians.map((g) => {
                    const Icon = g.icon;
                    return (
                      <div 
                        key={g.id}
                        className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                          g.status 
                            ? 'bg-neutral-950 border-white text-white' 
                            : 'bg-black border-neutral-900 text-neutral-700'
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                      </div>
                    );
                  })}
                </div>

              </div>

              <div>
                <button 
                  disabled={getActiveGuardiansCount() < requiredGuardians}
                  className={`w-full py-2.5 rounded-xl font-bold text-[9px] uppercase tracking-widest transition-all ${
                    getActiveGuardiansCount() >= requiredGuardians 
                      ? 'bg-white text-black hover:bg-neutral-200 cursor-pointer shadow-md' 
                      : 'bg-neutral-950 text-neutral-600 cursor-not-allowed border border-neutral-900/60'
                  }`}
                >
                  Commit Shards to Log
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
