import { useState } from 'react';
import { Coffee, Sun, Moon, Check, Sparkles, Plus } from 'lucide-react';

export default function SectionRecommendation() {
  const [loggedMeals, setLoggedMeals] = useState({
    breakfast: false,
    lunch: true,
    dinner: false
  });

  const meals = [
    {
      id: 'breakfast',
      title: 'Breakfast Recommendation',
      mealName: 'Avocado Sourdough & Poached Eggs',
      calories: '380 kcal',
      protein: '18g',
      carbs: '28g',
      fat: '18g',
      fiber: '7g',
      icon: Coffee,
      time: 'Best before 9:00 AM',
      tag: 'High Fiber'
    },
    {
      id: 'lunch',
      title: 'Lunch Recommendation',
      mealName: 'Grilled Salmon Quinoa Bowl',
      calories: '540 kcal',
      protein: '44g',
      carbs: '38g',
      fat: '16g',
      fiber: '6g',
      icon: Sun,
      time: 'Best before 1:30 PM',
      tag: 'Lean Protein'
    },
    {
      id: 'dinner',
      title: 'Dinner Recommendation',
      mealName: 'Grass-Fed Ribeye & Charred Asparagus',
      calories: '490 kcal',
      protein: '48g',
      carbs: '8g',
      fat: '28g',
      fiber: '4g',
      icon: Moon,
      time: 'Best before 8:00 PM',
      tag: 'Metabolic Balance'
    }
  ];

  const handleLogMeal = (id: 'breakfast' | 'lunch' | 'dinner') => {
    setLoggedMeals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="layout-section" id="recommendations">
      {/* Title */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 border border-brand-500/20 text-xs font-black uppercase tracking-wider mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Calibrated to Your Daily Deficit</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Daily meal recommendations
      </h2>

      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-12">
        Every morning, Cal AI generates 3 tailored meal suggestions designed around your biometric deficit and remaining macronutrient budget.
      </p>

      {/* Grid Layout of 3 meal recommendation cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-2 text-left">
        {meals.map((meal) => {
          const Icon = meal.icon;
          const isLogged = loggedMeals[meal.id as keyof typeof loggedMeals];
          return (
            <div 
              key={meal.id} 
              className={`bg-white dark:bg-neutral-900 border rounded-[32px] p-6 flex flex-col justify-between transition-all duration-300 shadow-sm relative group ${
                isLogged ? 'border-brand-500/50 dark:border-brand-500/30' : 'border-neutral-200 dark:border-neutral-800 hover:border-brand-500/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-2xl text-neutral-500 dark:text-neutral-400 group-hover:text-brand-500 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] uppercase font-black px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      {meal.calories}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider">{meal.title}</span>
                    <span className="text-[8px] font-bold text-brand-600 dark:text-brand-400">• {meal.tag}</span>
                  </div>
                  <h3 className="text-base font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
                    {meal.mealName}
                  </h3>

                  {/* Macro chips */}
                  <div className="grid grid-cols-3 gap-1 text-center mt-3 text-[8px] font-bold">
                    <div className="bg-neutral-50 dark:bg-neutral-950 p-1.5 rounded-xl border border-neutral-200/50 dark:border-neutral-800">
                      <span className="text-red-400 block font-black">PRO</span>
                      <span className="text-neutral-900 dark:text-white font-extrabold">{meal.protein}</span>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-950 p-1.5 rounded-xl border border-neutral-200/50 dark:border-neutral-800">
                      <span className="text-sky-400 block font-black">CARBS</span>
                      <span className="text-neutral-900 dark:text-white font-extrabold">{meal.carbs}</span>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-950 p-1.5 rounded-xl border border-neutral-200/50 dark:border-neutral-800">
                      <span className="text-amber-400 block font-black">FAT</span>
                      <span className="text-neutral-900 dark:text-white font-extrabold">{meal.fat}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-3">
                <span className="text-[9px] text-neutral-400 font-semibold">{meal.time}</span>
                <button 
                  onClick={() => handleLogMeal(meal.id as 'breakfast' | 'lunch' | 'dinner')}
                  className={`w-full py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isLogged 
                      ? 'bg-brand-500 text-black shadow-sm font-extrabold' 
                      : 'bg-black text-white hover:bg-neutral-900 dark:bg-white dark:hover:bg-neutral-100 dark:text-black shadow-sm'
                  }`}
                >
                  {isLogged ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Meal Logged</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Diary</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
