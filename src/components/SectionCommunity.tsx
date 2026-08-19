import { useState } from 'react';
import { Users, Flame, Heart, Plus } from 'lucide-react';

export default function SectionCommunity() {
  const [friends, setFriends] = useState([
    { id: 'alex', name: 'Alex M.', avatar: '🏋️‍♂️', meal: 'Grilled Salmon & Rice', kcal: 540, time: '12m ago', cheered: false, streak: 14 },
    { id: 'sarah', name: 'Sarah K.', avatar: '🏃‍♀️', meal: 'Avocado Sourdough & Egg', kcal: 380, time: '45m ago', cheered: true, streak: 28 },
    { id: 'marcus', name: 'Marcus D.', avatar: '🚴‍♂️', meal: 'Berry Whey Protein Shake', kcal: 320, time: '2h ago', cheered: false, streak: 9 },
    { id: 'emma', name: 'Emma W.', avatar: '🧘‍♀️', meal: 'Quinoa Buddha Bowl', kcal: 460, time: '4h ago', cheered: false, streak: 21 },
  ]);

  const toggleCheer = (id: string) => {
    setFriends(prev => prev.map(f => f.id === id ? { ...f, cheered: !f.cheered } : f));
  };

  return (
    <section className="layout-section" id="community">
      {/* Title */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 border border-brand-500/20 text-xs font-black uppercase tracking-wider mb-4">
        <Users className="w-3.5 h-3.5" />
        <span>Social Discover & 24hr Stories</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        See other people's progress
      </h2>

      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-12">
        Browse live community meal stories, cheer friends on their daily macro streaks, and stay accountable together.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-4xl px-2">
        
        {/* Left Side: Friends Feed List & Cheer Interaction */}
        <div className="w-full lg:w-5/12 p-6 sm:p-7 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[32px] text-left shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Live Activity Feed</span>
            <span className="text-[10px] font-black text-brand-600 dark:text-brand-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping"></span> Live Stream
            </span>
          </div>

          <div className="space-y-2.5">
            {friends.map((f) => (
              <div 
                key={f.id}
                className="p-3.5 rounded-2xl bg-white dark:bg-black/50 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between hover:border-brand-500/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-brand-500 flex items-center justify-center text-base">
                    {f.avatar}
                    <div className="absolute -bottom-1 -right-1 bg-black text-white text-[7px] font-black px-1 rounded-full border border-neutral-700 flex items-center gap-0.5">
                      <Flame className="w-2 h-2 text-amber-400" />
                      <span>{f.streak}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-black text-neutral-900 dark:text-white leading-tight flex items-center gap-1">
                      <span>{f.name}</span>
                      <span className="text-[9px] text-neutral-400 font-normal">• {f.time}</span>
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                      {f.meal} <span className="font-mono font-bold text-neutral-700 dark:text-neutral-300">({f.kcal} kcal)</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleCheer(f.id)}
                  className={`p-2 rounded-xl transition-all cursor-pointer ${
                    f.cheered 
                      ? 'bg-red-500/10 text-red-500 scale-110' 
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 hover:text-red-500'
                  }`}
                  aria-label="Cheer friend"
                >
                  <Heart className={`w-4 h-4 ${f.cheered ? 'fill-red-500' : ''}`} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-400 flex items-center justify-between font-bold">
            <span>Tap heart to cheer active streaks</span>
            <span className="text-brand-600 dark:text-brand-400">+50 XP Bonus</span>
          </div>
        </div>

        {/* Right Side: Mock Phone Screen with 24hr Stories Feed */}
        <div className="w-full lg:w-6/12 flex justify-center">
          <div className="relative w-full max-w-[300px] bg-[#0d0d0d] rounded-[48px] p-3 border-[3.5px] border-neutral-800 shadow-2xl">
            <div className="rounded-[36px] bg-black overflow-hidden border border-neutral-900 aspect-[9/19] flex flex-col justify-between p-4 text-white">
              
              {/* Top Bar */}
              <div className="flex justify-between items-center border-b border-neutral-900 pb-2 pt-0.5 px-1">
                <span className="text-xs font-black">Community Stories</span>
                <span className="text-[8px] font-black uppercase tracking-wider bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full border border-brand-500/30">
                  24h Feed
                </span>
              </div>

              {/* Stories Avatar Circles Row */}
              <div className="flex items-center gap-2.5 py-3 overflow-x-auto border-b border-neutral-900 px-1">
                {/* Your Story */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center relative">
                    <span className="text-sm">😎</span>
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-brand-500 rounded-full flex items-center justify-center text-black">
                      <Plus className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <span className="text-[7px] text-neutral-400 font-bold">Your Story</span>
                </div>

                {/* Friend Stories */}
                {friends.map((f) => (
                  <div key={f.id} className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-brand-500 to-lime-300">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-sm border border-black">
                        {f.avatar}
                      </div>
                    </div>
                    <span className="text-[7px] text-neutral-300 font-bold">{f.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>

              {/* Active Story Card Preview */}
              <div className="flex-1 flex flex-col justify-center items-center py-3">
                <div className="w-full bg-neutral-950 border border-neutral-800/80 rounded-2xl p-3 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-xs">
                        🏃‍♀️
                      </div>
                      <div>
                        <div className="text-[9px] font-black text-white">Sarah K.</div>
                        <div className="text-[7px] text-neutral-400">Post-workout lunch</div>
                      </div>
                    </div>
                    <span className="text-[8px] font-mono text-brand-400 font-black">380 kcal</span>
                  </div>

                  {/* Food visual */}
                  <div className="w-full h-24 bg-neutral-900 rounded-xl flex items-center justify-center text-3xl border border-neutral-800 relative overflow-hidden">
                    🥑
                    <div className="absolute bottom-1 right-1.5 bg-black/80 px-1.5 py-0.5 rounded text-[7px] font-mono text-brand-400">
                      LiDAR Verified
                    </div>
                  </div>

                  {/* Reaction preview */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-900 text-[8px] text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-red-500 text-red-500" /> 18 cheers
                    </span>
                    <span className="text-brand-400 font-bold">28 day streak 🔥</span>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="w-20 h-1 bg-neutral-700 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
