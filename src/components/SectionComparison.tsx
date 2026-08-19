import { Check, X, Sparkles, Scale, Zap, Shield, Brain, Smartphone } from 'lucide-react';

export default function SectionComparison() {
  const comparisonData = [
    {
      feature: 'Portion Size Estimation',
      icon: Scale,
      calidar: 'Millimeter 3D LiDAR volumetric scanning (cm³ accuracy)',
      traditional: 'Guesswork, cups, or carrying a physical kitchen scale',
      highlight: true
    },
    {
      feature: 'Meal Logging Speed',
      icon: Zap,
      calidar: '0.4 seconds (point, hold & scan)',
      traditional: '3 to 5 minutes manual searching and typing',
      highlight: true
    },
    {
      feature: 'Privacy & Data Ownership',
      icon: Shield,
      calidar: '100% On-device hardware enclave (zero cloud leaks)',
      traditional: 'Diet and photos uploaded to cloud ad networks',
      highlight: true
    },
    {
      feature: 'AI Nutrition & Coaching',
      icon: Brain,
      calidar: 'Adaptive AI persona matching your lifestyle & goals',
      traditional: 'Generic static calorie limits and rigid templates',
      highlight: false
    },
    {
      feature: 'Multi-Device Sync',
      icon: Smartphone,
      calidar: 'Real-time peer-to-peer sync across Watch, Phone, Mac',
      traditional: 'Cloud latency and frequent sync disconnects',
      highlight: false
    }
  ];

  return (
    <section id="compare" className="layout-section">
      {/* Title */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 border border-brand-500/20 text-xs font-black uppercase tracking-wider mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>The CaLidar Advantage</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] text-[#08060d] dark:text-[#f3f4f6] mb-4">
        Why traditional calorie<br className="hidden sm:inline" /> apps don't work
      </h2>

      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-12">
        90% of people abandon calorie counting because manual food weighing is exhausting. CaLidar eliminates friction with spatial computing.
      </p>

      {/* Comparison Table */}
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg text-left">
        
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 text-xs font-black uppercase tracking-wider">
          <div className="md:col-span-4 text-neutral-500 dark:text-neutral-400">Feature</div>
          <div className="md:col-span-4 text-brand-600 dark:text-brand-400 flex items-center gap-1.5 mt-2 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span>CaLidar (Next-Gen)</span>
          </div>
          <div className="md:col-span-4 text-neutral-400 dark:text-neutral-500 mt-2 md:mt-0">
            Traditional Apps (Legacy)
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-900 text-xs sm:text-sm">
          {comparisonData.map((row) => {
            const Icon = row.icon;
            return (
              <div 
                key={row.feature} 
                className={`grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 transition-colors ${
                  row.highlight ? 'bg-brand-500/[0.02] dark:bg-brand-500/[0.04]' : 'hover:bg-neutral-50 dark:hover:bg-neutral-900/40'
                }`}
              >
                {/* Feature Name */}
                <div className="md:col-span-4 flex items-center gap-2.5 font-extrabold text-neutral-900 dark:text-white mb-2 md:mb-0">
                  <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{row.feature}</span>
                </div>

                {/* CaLidar Value */}
                <div className="md:col-span-4 flex items-start gap-2 text-neutral-900 dark:text-white font-bold mb-2 md:mb-0">
                  <div className="mt-0.5 p-0.5 rounded-full bg-brand-500/20 text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{row.calidar}</span>
                </div>

                {/* Legacy Value */}
                <div className="md:col-span-4 flex items-start gap-2 text-neutral-500 dark:text-neutral-400">
                  <div className="mt-0.5 p-0.5 rounded-full bg-red-500/10 text-red-500 flex-shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>{row.traditional}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Action CTA */}
      <div className="mt-10">
        <a 
          href="#waitlist"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-extrabold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-500" />
          <span>Switch to Frictionless Scanning</span>
        </a>
      </div>

    </section>
  );
}
