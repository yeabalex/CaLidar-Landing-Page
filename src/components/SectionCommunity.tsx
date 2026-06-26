import { useState } from 'react';
import { Users, Watch, Camera, Smartphone, User, Heart, ShieldCheck, RefreshCw } from 'lucide-react';

export default function SectionCommunity() {
  const [friends, setFriends] = useState([
    { id: 'alex', name: 'Alex - Weight Goal Tracker', icon: User, status: true },
    { id: 'sarah', name: 'Sarah - Active Gym Logging', icon: Watch, status: true },
    { id: 'marcus', name: 'Marcus - LiDAR Meal Scanner', icon: Camera, status: false },
    { id: 'emma', name: 'Emma - Daily Macro Log', icon: Smartphone, status: true },
    { id: 'dave', name: 'Dave - Powerlifting Journey', icon: User, status: false }
  ]);
  const requiredActive = 3;

  const toggleFriendStatus = (id: string) => {
    setFriends(prev => prev.map(f => f.id === id ? { ...f, status: !f.status } : f));
  };

  const getActiveFriendsCount = () => {
    return friends.filter(f => f.status).length;
  };

  return (
    <div className="layout-section" id="community">
      {/* Title */}
      <h2 className="text-3xl sm:text-[40px] font-black tracking-tight leading-[1.2] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        See other people's progress
      </h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-lg mb-12">
        Browse shared diaries and celebrate daily achievements with friends. Tap peers below to simulate their online activity status.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl px-4">
        
        {/* Toggle Panel */}
        <div className="w-full md:w-5/12 p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-left shadow-sm">
          <h3 className="text-xs font-black text-neutral-500 uppercase tracking-widest mb-3">Community Roster</h3>
          <div className="space-y-2">
            {friends.map((f) => {
              const Icon = f.icon;
              return (
                <div 
                  key={f.id} 
                  onClick={() => toggleFriendStatus(f.id)}
                  className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all ${
                    f.status 
                      ? 'bg-brand-500/5 border-brand-500/30 text-neutral-900 dark:text-white font-semibold' 
                      : 'bg-white dark:bg-black/40 border-neutral-200 dark:border-neutral-950 text-neutral-400 dark:text-neutral-700'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-4 h-4 ${f.status ? 'text-brand-500' : 'text-neutral-500'}`} />
                    <span className="text-[11px]">{f.name}</span>
                  </div>
                  <span className={`text-[8px] uppercase font-black px-2 py-0.5 rounded-full ${
                    f.status ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400'
                  }`}>
                    {f.status ? 'Active' : 'Offline'}
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
                <span>Friend Activity Feed</span>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center py-4">
                <Users className="w-7 h-7 text-neutral-500 mb-2 animate-pulse" />
                <h4 className="text-[11px] font-black text-white uppercase tracking-widest">Community Streak</h4>
                <p className="text-[8px] text-neutral-500 mt-0.5 uppercase tracking-wide">Syncing active friends logs</p>

                {/* Progress bar card */}
                <div className="mt-5 w-full bg-neutral-950 border border-neutral-900 p-3.5 rounded-2xl space-y-3">
                  <div className="flex justify-between text-[9px] font-bold text-neutral-400">
                    <span>Active Streak Bonus</span>
                    <span>{getActiveFriendsCount()} / {requiredActive} Active</span>
                  </div>

                  <div className="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 rounded-full ${
                        getActiveFriendsCount() >= requiredActive ? 'bg-brand-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${Math.min(100, (getActiveFriendsCount() / requiredActive) * 100)}%` }}
                    />
                  </div>

                  {getActiveFriendsCount() >= requiredActive ? (
                    <div className="text-[9px] font-black text-brand-400 bg-brand-500/10 border border-brand-500/20 py-1 rounded-full flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>STREAK UNLOCKED</span>
                    </div>
                  ) : (
                    <div className="text-[9px] font-black text-amber-500 bg-amber-500/10 border border-amber-500/20 py-1 rounded-full flex items-center justify-center gap-1.5">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      <span>AWAITING PEERS</span>
                    </div>
                  )}
                </div>

                {/* Shards Visualization */}
                <div className="mt-5 flex justify-center space-x-2">
                  {friends.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div 
                        key={f.id}
                        className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                          f.status 
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
                  disabled={getActiveFriendsCount() < requiredActive}
                  className={`w-full py-2.5 rounded-xl font-bold text-[9px] uppercase tracking-widest transition-all flex items-center justify-center gap-1 ${
                    getActiveFriendsCount() >= requiredActive 
                      ? 'bg-white text-black hover:bg-neutral-200 cursor-pointer shadow-md' 
                      : 'bg-neutral-950 text-neutral-600 cursor-not-allowed border border-neutral-900/60'
                  }`}
                >
                  <Heart className="w-3 h-3" />
                  <span>Cheer Active Friends</span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
