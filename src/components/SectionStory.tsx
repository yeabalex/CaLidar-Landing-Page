import { useState, useEffect } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

export default function SectionStory() {
  const [mealCalories, setMealCalories] = useState('320');
  const [storyCode, setStoryCode] = useState('STORY-LOG-X9827B-320');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
      setStoryCode(`STORY-LOG-${randomId}-${mealCalories}`);
    }, 4000);
    return () => clearInterval(interval);
  }, [mealCalories]);

  return (
    <div className="layout-section" id="story">
      {/* Title */}
      <h2 className="text-3xl sm:text-[40px] font-black tracking-tight leading-[1.2] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Instagram-style meal stories
      </h2>
      
      {/* Subtitle Badge */}
      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full mb-8 text-[10px] font-bold text-neutral-500">
        <Camera className="h-3.5 w-3.5 text-brand-500" />
        <span>Share meal of the day instantly</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl px-4">
        
        {/* Customization input */}
        <div className="w-full md:w-4/12 p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-left shadow-sm">
          <label className="text-[10px] font-black text-neutral-500 uppercase tracking-wider block mb-2">
            Calories to post (kcal)
          </label>
          <input 
            type="number" 
            value={mealCalories}
            onChange={(e) => setMealCalories(e.target.value)}
            className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-3 text-sm text-[#08060d] dark:text-white focus:outline-none focus:border-brand-500 font-extrabold"
          />
          <p className="text-[9px] text-neutral-400 mt-2 leading-relaxed">
            Adjusting the calories dynamically updates your meal story signature and generates a new mock share thumbnail.
          </p>
        </div>

        {/* Two Phone mockups side by side */}
        <div className="w-full md:w-8/12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Phone 1: Meal Card Display */}
          <div className="relative w-full max-w-[190px] bg-[#0e0e0e] rounded-[36px] p-2.5 border-2 border-neutral-800 shadow-md">
            <div className="rounded-[28px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-4 text-center">
              <div className="text-[8px] text-neutral-500 pt-0.5">Story Upload</div>
              
              <div className="flex-grow flex flex-col justify-center items-center py-4">
                <span className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest block">Posting Meal</span>
                <span className="text-3xl font-black text-white mt-2 font-mono">
                  {mealCalories}
                </span>
                <span className="text-brand-400 font-extrabold text-[9px] uppercase tracking-wider mt-1">kcal logged</span>
              </div>

              <div className="text-[7px] text-neutral-500 border-t border-neutral-900 pt-2 leading-normal">
                Generating story layout preview...
              </div>
            </div>
          </div>

          {/* Phone 2: Feed grid preview */}
          <div className="relative w-full max-w-[190px] bg-[#0e0e0e] rounded-[36px] p-2.5 border-2 border-neutral-800 shadow-md">
            <div className="rounded-[28px] bg-black overflow-hidden border border-neutral-900 aspect-[9/18.5] flex flex-col justify-between p-4 text-center">
              <div className="text-[8px] text-neutral-500 pt-0.5">Stories Feed</div>

              <div className="flex-1 flex flex-col justify-center items-center py-2">
                {/* QR box -> Stories mosaic grid */}
                <div className="p-2 bg-white border-2 border-brand-500 rounded-2xl flex items-center justify-center">
                  <div className="w-24 h-24 flex flex-wrap gap-[1px]">
                    {Array.from({ length: 144 }).map((_, i) => {
                      const isBorderPixel = 
                        (i % 12 < 3 && Math.floor(i / 12) < 3) ||
                        (i % 12 >= 9 && Math.floor(i / 12) < 3) ||
                        (i % 12 < 3 && Math.floor(i / 12) >= 9);
                      const isRandomPixel = Math.random() > 0.45;
                      return (
                        <div 
                          key={i}
                          className={`w-1.5 h-1.5 rounded-[1px] ${
                            isBorderPixel ? 'bg-black' : isRandomPixel ? 'bg-black' : 'bg-neutral-100'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                <span className="text-[7px] text-neutral-500 uppercase tracking-widest block mt-3">Live Feed Hash</span>
                <code className="text-[8px] font-mono text-neutral-400 bg-neutral-950 px-1 py-0.5 rounded border border-neutral-900 break-all select-all block max-w-[140px] mx-auto mt-1 leading-none">
                  {storyCode.substring(0, 18)}...
                </code>

                <div className="mt-2.5 flex items-center justify-center gap-1 text-[7px] uppercase tracking-widest font-black text-neutral-500">
                  <RefreshCw className="h-2.5 w-2.5 animate-spin text-brand-500" />
                  <span>Feed Active</span>
                </div>
              </div>

              <div className="text-[7px] text-neutral-500 border-t border-neutral-900 pt-2 leading-normal">
                Stories disappear after 24 hours
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
