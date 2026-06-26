import { useState } from 'react';
import { Coffee, Sun, Moon, Check } from 'lucide-react';

export default function SectionRecommendation() {
  const [loggedMeals, setLoggedMeals] = useState({
    breakfast: false,
    lunch: false,
    dinner: false
  });

  const meals = [
    {
      id: 'breakfast',
      title: 'Breakfast Recommendation',
      mealName: 'Avocado Toast & Boiled Eggs',
      calories: '380 kcal',
      macros: '18g Protein • 24g Carbs • 14g Fat',
      icon: Coffee,
      time: 'Best before 9:00 AM'
    },
    {
      id: 'lunch',
      title: 'Lunch Recommendation',
      mealName: 'Grilled Chicken Quinoa Bowl',
      calories: '540 kcal',
      macros: '42g Protein • 38g Carbs • 12g Fat',
      icon: Sun,
      time: 'Best before 2:00 PM'
    },
    {
      id: 'dinner',
      title: 'Dinner Recommendation',
      mealName: 'Baked Salmon with Asparagus',
      calories: '490 kcal',
      macros: '38g Protein • 12g Carbs • 22g Fat',
      icon: Moon,
      time: 'Best before 8:00 PM'
    }
  ];

  const handleLogMeal = (id: 'breakfast' | 'lunch' | 'dinner') => {
    setLoggedMeals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="layout-section" id="recommendations">
      {/* Header */}
      <h2 className="text-3xl sm:text-[40px] font-black tracking-tight leading-[1.2] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Daily meal recommendations
      </h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-lg mb-12">
        Get tailored nutritional plans every morning. Hand-picked options balanced to fit your daily metabolic limits and personal target budget.
      </p>

      {/* Grid Layout of 3 meal recommendation cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 text-left">
        {meals.map((meal) => {
          const Icon = meal.icon;
          const isLogged = loggedMeals[meal.id as keyof typeof loggedMeals];
          return (
            <div 
              key={meal.id} 
              className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 rounded-[32px] p-6 flex flex-col justify-between hover:border-brand-500/40 dark:hover:border-brand-500/20 transition-all duration-300 group shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-2xl text-neutral-500 dark:text-neutral-400 group-hover:text-brand-500 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[8px] uppercase font-black px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    {meal.calories}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider block">{meal.title}</span>
                  <h3 className="text-base font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
                    {meal.mealName}
                  </h3>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">
                    {meal.macros}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col gap-3">
                <span className="text-[9px] text-neutral-400 font-semibold">{meal.time}</span>
                <button 
                  onClick={() => handleLogMeal(meal.id as 'breakfast' | 'lunch' | 'dinner')}
                  className={`w-full py-2.5 rounded-xl font-bold text-[9px] uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isLogged 
                      ? 'bg-brand-950/40 text-brand-400 border border-brand-500/30' 
                      : 'bg-black text-white hover:bg-neutral-900 dark:bg-neutral-100 dark:hover:bg-white dark:text-black shadow-sm'
                  }`}
                >
                  {isLogged ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Meal Logged</span>
                    </>
                  ) : (
                    <span>Add to Log</span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
