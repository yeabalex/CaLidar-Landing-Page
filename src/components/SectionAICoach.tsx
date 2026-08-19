import { useState } from 'react';
import { BrainCircuit, Send, Bot, Sparkles, User } from 'lucide-react';

export default function SectionAICoach() {
  const [coachLevel, setCoachLevel] = useState(3);
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  const promptOptions = [
    {
      userQuery: "Suggest a high-protein dinner under 500 kcal with my remaining macros.",
      coachReply: "Based on your 3D lunch scan, you have 480 kcal and 38g protein left! I recommend 180g Pan-Seared Salmon with Steamed Asparagus & lemon vinaigrette (460 kcal, 42g Protein, 4g Carbs)."
    },
    {
      userQuery: "I ate slightly more carbs at lunch. How should I adjust my day?",
      coachReply: "No sweat! Shift your dinner focus to lean protein and fibrous greens. A quick 20-minute brisk walk will also help utilize glycogen stores."
    },
    {
      userQuery: "Can you generate a quick grocery shopping list for cutting phase?",
      coachReply: "Here is your customized list: Grass-fed ribeye, wild salmon, avocados, liquid egg whites, sourdough, baby spinach, and frozen wild blueberries."
    }
  ];

  const getCoachStyleName = () => {
    switch (coachLevel) {
      case 1: return 'Gentle Supporter (Empathetic)';
      case 2: return 'Balanced Nutritionist (Constructive)';
      case 3: return 'Strict Monitor (Direct & Disciplined)';
      case 4: return 'Hardcore Trainer (Demanding)';
      case 5: return 'Goggins Mode (Uncompromising)';
      default: return 'Balanced Nutritionist';
    }
  };

  return (
    <section id="coach" className="layout-section">
      {/* Title */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 border border-brand-500/20 text-xs font-black uppercase tracking-wider mb-4">
        <BrainCircuit className="w-3.5 h-3.5" />
        <span>Sub-Second Nutrition AI</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Personalized AI Coach
      </h2>

      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-12">
        An on-demand nutrition coach that learns your metabolism, adjusts your daily macros in real time, and keeps you accountable with customizable intensity.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-4xl px-2">
        
        {/* Left Side: Coach Controls & Quick Prompts */}
        <div className="w-full lg:w-5/12 p-6 sm:p-7 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[32px] text-left shadow-sm">
          
          {/* Persona Intensity Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Coach Persona Style</span>
              <span className="text-xs font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest">{coachLevel} / 5</span>
            </div>

            <div className="p-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl mb-3">
              <span className="text-xs font-black text-neutral-900 dark:text-white block">{getCoachStyleName()}</span>
            </div>

            <input 
              type="range" 
              min="1" 
              max="5" 
              value={coachLevel}
              onChange={(e) => setCoachLevel(parseInt(e.target.value))}
              className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />

            <div className="flex justify-between text-[8px] font-extrabold text-neutral-400 uppercase tracking-wider px-0.5 mt-2">
              <span>Gentle</span>
              <span>Balanced</span>
              <span>Goggins</span>
            </div>
          </div>

          {/* Quick Prompt Selector */}
          <div>
            <span className="text-[10px] font-black uppercase text-neutral-400 tracking-wider block mb-2">
              Test Instant Prompts
            </span>
            <div className="space-y-2">
              {promptOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setActivePromptIndex(i)}
                  className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    activePromptIndex === i
                      ? 'bg-brand-500/10 border-brand-500 text-neutral-900 dark:text-white font-bold'
                      : 'bg-white dark:bg-black/50 border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-neutral-400 dark:hover:border-neutral-700'
                  }`}
                >
                  <span className="line-clamp-1">💬 {opt.userQuery}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Mock Phone Chat Screen */}
        <div className="w-full lg:w-6/12 flex justify-center">
          <div className="relative w-full max-w-[300px] bg-[#0d0d0d] rounded-[48px] p-3 border-[3.5px] border-neutral-800 shadow-2xl">
            <div className="rounded-[36px] bg-black overflow-hidden border border-neutral-900 aspect-[9/19] flex flex-col justify-between p-4 text-white">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-neutral-900 pb-2 pt-0.5 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-black">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black leading-none">Cal AI Coach</h4>
                    <span className="text-[7px] text-brand-400 font-bold flex items-center gap-0.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> Online
                    </span>
                  </div>
                </div>
                <Sparkles className="w-3 h-3 text-neutral-400" />
              </div>

              {/* Chat Messages */}
              <div className="flex-1 flex flex-col justify-center space-y-3 py-3 overflow-hidden text-left">
                
                {/* User Bubble */}
                <div className="self-end max-w-[85%] bg-neutral-900 border border-neutral-800 rounded-2xl rounded-tr-sm p-2.5 shadow-sm">
                  <div className="text-[8px] font-black uppercase tracking-wider text-neutral-400 mb-0.5 flex items-center gap-1">
                    <User className="w-2.5 h-2.5" /> You
                  </div>
                  <p className="text-[9px] text-white leading-tight font-medium">
                    "{promptOptions[activePromptIndex].userQuery}"
                  </p>
                </div>

                {/* AI Coach Response Bubble */}
                <div className="self-start max-w-[90%] bg-brand-950/40 border border-brand-500/30 rounded-2xl rounded-tl-sm p-3 shadow-md">
                  <div className="text-[8px] font-black uppercase tracking-wider text-brand-400 mb-1 flex items-center gap-1">
                    <Bot className="w-2.5 h-2.5" /> Cal AI
                  </div>
                  <p className="text-[9px] text-neutral-200 leading-normal font-medium">
                    {promptOptions[activePromptIndex].coachReply}
                  </p>
                </div>

              </div>

              {/* Chat Input Bar */}
              <div className="pt-2 border-t border-neutral-900 flex items-center gap-1.5">
                <div className="flex-grow bg-neutral-950 border border-neutral-800 rounded-xl px-2.5 py-1.5 text-[8px] text-neutral-400">
                  Ask Cal AI anything...
                </div>
                <div className="w-7 h-7 rounded-xl bg-brand-500 flex items-center justify-center text-black">
                  <Send className="w-3 h-3" />
                </div>
              </div>

              {/* Home indicator */}
              <div className="w-20 h-1 bg-neutral-700 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
