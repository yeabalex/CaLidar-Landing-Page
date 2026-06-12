import React, { useState } from 'react';
import { Ban, ArrowRight, Check } from 'lucide-react';

export default function SectionFooter() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleAccordion = (name: string) => {
    setActiveAccordion(prev => (prev === name ? null : name));
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="w-full">
      
      {/* Section 7: B&W No-List */}
      <div className="layout-section">
        {/* Circle-Slash icon */}
        <div className="h-14 w-14 rounded-full border-2 border-black dark:border-neutral-800 flex items-center justify-center mb-8">
          <Ban className="h-7 w-7 text-black dark:text-neutral-300" />
        </div>

        <div className="space-y-4 text-xl sm:text-2xl font-black tracking-tight text-[#08060d] dark:text-[#f3f4f6]">
          <p className="line-through decoration-brand-500 decoration-2">No kitchen scales</p>
          <p className="line-through decoration-brand-500 decoration-2">No online accounts</p>
          <p className="line-through decoration-brand-500 decoration-2">No manual logs</p>
          <p className="text-brand-500 dark:text-brand-400">Just scan</p>
        </div>
      </div>

      {/* Section 8: Large Link Accordion List */}
      <div className="w-full">
        
        {/* Row 1: Waitlist */}
        <div className="border-b border-black dark:border-neutral-900 w-full transition-colors duration-200">
          <button 
            onClick={() => toggleAccordion('waitlist')}
            className="w-full py-6 px-8 flex justify-between items-center text-lg font-black uppercase tracking-wider text-left hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all cursor-pointer"
          >
            <span>Waitlist</span>
            <span className="text-xl font-bold">{activeAccordion === 'waitlist' ? '−' : '+'}</span>
          </button>
          {activeAccordion === 'waitlist' && (
            <div className="px-8 pb-8 pt-2 animate-in fade-in duration-200 text-left max-w-xl">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                We are currently in a closed beta with limited spots weekly. Drop your email below to reserve your slot and receive your LiDAR scanner invite code.
              </p>
              {submitted ? (
                <div className="flex items-center gap-3 bg-brand-500/10 border border-brand-500/30 text-brand-600 dark:text-brand-400 p-4 rounded-2xl">
                  <Check className="h-4.5 w-4.5" />
                  <span className="text-xs font-bold">You are on the waitlist! We'll email you soon.</span>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow h-11 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 text-xs dark:text-white placeholder-neutral-400 shadow-sm focus:outline-none focus:border-brand-500"
                  />
                  <button
                    type="submit"
                    className="h-11 px-5 bg-black hover:bg-neutral-900 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-black font-extrabold text-[10px] uppercase tracking-widest rounded-xl transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span>Join</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Row 2: Follow */}
        <div className="border-b border-black dark:border-neutral-900 w-full transition-colors duration-200">
          <button 
            onClick={() => toggleAccordion('follow')}
            className="w-full py-6 px-8 flex justify-between items-center text-lg font-black uppercase tracking-wider text-left hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all cursor-pointer"
          >
            <span>Follow</span>
            <span className="text-xl font-bold">{activeAccordion === 'follow' ? '−' : '+'}</span>
          </button>
          {activeAccordion === 'follow' && (
            <div className="px-8 pb-8 pt-2 animate-in fade-in duration-200 text-left text-xs text-neutral-500 dark:text-neutral-400 space-x-6">
              <a href="#" className="hover:text-brand-500 font-bold transition-colors">Twitter / X</a>
              <a href="#" className="hover:text-brand-500 font-bold transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-500 font-bold transition-colors">GitHub</a>
            </div>
          )}
        </div>

        {/* Row 3: Contact */}
        <div className="border-b border-black dark:border-neutral-900 w-full transition-colors duration-200">
          <button 
            onClick={() => toggleAccordion('contact')}
            className="w-full py-6 px-8 flex justify-between items-center text-lg font-black uppercase tracking-wider text-left hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all cursor-pointer"
          >
            <span>Contact</span>
            <span className="text-xl font-bold">{activeAccordion === 'contact' ? '−' : '+'}</span>
          </button>
          {activeAccordion === 'contact' && (
            <div className="px-8 pb-8 pt-2 animate-in fade-in duration-200 text-left text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Have questions or suggestions? Email us at:{' '}
              <a href="mailto:hello@calidar.app" className="text-brand-500 dark:text-brand-400 font-extrabold hover:underline">
                hello@calidar.app
              </a>
            </div>
          )}
        </div>

        {/* Row 4: Help */}
        <div className="border-b border-black dark:border-neutral-900 w-full transition-colors duration-200">
          <button 
            onClick={() => toggleAccordion('help')}
            className="w-full py-6 px-8 flex justify-between items-center text-lg font-black uppercase tracking-wider text-left hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all cursor-pointer"
          >
            <span>Help</span>
            <span className="text-xl font-bold">{activeAccordion === 'help' ? '−' : '+'}</span>
          </button>
          {activeAccordion === 'help' && (
            <div className="px-8 pb-8 pt-2 animate-in fade-in duration-200 text-left text-xs text-neutral-500 dark:text-neutral-400 space-y-3 max-w-xl leading-relaxed">
              <div>
                <p className="font-extrabold text-[#08060d] dark:text-white">Does it require LiDAR sensors?</p>
                <p className="mt-0.5">LiDAR is supported on iPhone Pro/iPad Pro and provides the highest volumetric scan accuracy, but standard camera stereo-vision is also supported on other devices!</p>
              </div>
              <div>
                <p className="font-extrabold text-[#08060d] dark:text-white">Where is my data stored?</p>
                <p className="mt-0.5">CaLidar is fully self-custodial. Your meal logs and weights are stored locally inside your device enclaves and synchronized only when you scan sync-QRs offline.</p>
              </div>
            </div>
          )}
        </div>

        {/* Row 5: Privacy */}
        <div className="border-b border-black dark:border-neutral-900 w-full transition-colors duration-200">
          <button 
            onClick={() => toggleAccordion('privacy')}
            className="w-full py-6 px-8 flex justify-between items-center text-lg font-black uppercase tracking-wider text-left hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all cursor-pointer"
          >
            <span>Privacy</span>
            <span className="text-xl font-bold">{activeAccordion === 'privacy' ? '−' : '+'}</span>
          </button>
          {activeAccordion === 'privacy' && (
            <div className="px-8 pb-8 pt-2 animate-in fade-in duration-200 text-left text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              We collect exactly zero data. All portion mapping, database checks, and active sync handshakes occur purely local to your secure hardware.
            </div>
          )}
        </div>

        {/* Row 6: Terms */}
        <div className="border-b border-black dark:border-neutral-900 w-full transition-colors duration-200">
          <button 
            onClick={() => toggleAccordion('terms')}
            className="w-full py-6 px-8 flex justify-between items-center text-lg font-black uppercase tracking-wider text-left hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all cursor-pointer"
          >
            <span>Terms</span>
            <span className="text-xl font-bold">{activeAccordion === 'terms' ? '−' : '+'}</span>
          </button>
          {activeAccordion === 'terms' && (
            <div className="px-8 pb-8 pt-2 animate-in fade-in duration-200 text-left text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              By using CaLidar's offline portion mapping, you take full ownership of your diet logs, local enclaves, and verification consensus rules.
            </div>
          )}
        </div>

      </div>

      {/* Footer Logo */}
      <div className="py-16 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm mx-auto mb-4">
          <div className="h-12 w-12 rounded-full bg-brand-500 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
              <path d="M17 8C8 10 7 19 7 19S16 18 17 8Z" />
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 8.5C16.8 9.5 16 11.2 14.5 12.8C13 14.4 11.2 15.5 10 16C9 15.5 7.8 14.4 7.2 12.8C6.6 11.2 6.5 9.5 6.5 9C7 9 8.8 9.1 10.4 9.7C12 10.3 13.5 11.3 14.5 12.5C15.3 11.5 16.3 10 17 8.5Z" opacity="0.3" fill="white" />
            </svg>
          </div>
        </div>
        <span className="text-[10px] uppercase font-black tracking-widest text-neutral-400 block">
          © {new Date().getFullYear()} CaLidar App
        </span>
      </div>

    </div>
  );
}
