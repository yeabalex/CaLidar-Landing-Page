import { useState } from 'react';
import { Ban, ArrowRight, Check, Sparkles, Copy, HelpCircle, Shield, Send } from 'lucide-react';

export default function SectionFooter() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('faq-1');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [userReferralCode, setUserReferralCode] = useState('');

  const toggleAccordion = (name: string) => {
    setActiveAccordion(prev => (prev === name ? null : name));
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const refCode = 'CALI-' + Math.random().toString(36).substring(2, 7).toUpperCase();
    setUserReferralCode(refCode);
    setSubmitted(true);
  };

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(`https://calidar.app/?invite=${userReferralCode}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const faqs = [
    {
      id: 'faq-1',
      question: 'Does CaLidar require a phone with hardware LiDAR sensors?',
      answer:
        'LiDAR is natively supported on iPhone Pro and iPad Pro models for millimeter-accurate 3D volumetric mapping. However, CaLidar also supports AI dual-camera stereo-vision and spatial depth estimation on standard iPhone and Android devices so anyone can log meals with spatial accuracy!'
    },
    {
      id: 'faq-2',
      question: 'How does CaLidar calculate calories and macros from a 3D scan?',
      answer:
        'CaLidar maps the physical 3D volume (cubic centimeters) of your food plate using LiDAR point clouds, identifies each ingredient with AI visual neural networks, and calculates accurate weight and nutritional macros using standardized density matrices (USDA & European Food Safety database calibrated).'
    },
    {
      id: 'faq-3',
      question: 'Is my health and meal photo data private?',
      answer:
        'Yes, 100%. All 3D scans, AI inference models, and progress photos are processed strictly on-device inside your hardware enclave. We do not sell user data, train public models on your private meals, or upload photos to external cloud servers.'
    },
    {
      id: 'faq-4',
      question: 'How does workout logging and multi-device sync work?',
      answer:
        'Workouts logged on your Apple Watch, Garmin, or phone automatically synchronize in real time to dynamically adjust your daily active metabolic allowance and macro targets across all connected devices.'
    },
    {
      id: 'faq-5',
      question: 'How can I join the CaLidar closed beta?',
      answer:
        'Simply submit your email in the waitlist form below to reserve your invite spot. New beta batches are released every week on TestFlight and Google Play Beta.'
    }
  ];

  return (
    <footer className="w-full">
      
      {/* Section: B&W No-List Statement */}
      <div className="layout-section">
        {/* Circle-Slash icon */}
        <div className="h-16 w-16 rounded-full border-2 border-black dark:border-neutral-800 flex items-center justify-center mb-8 shadow-sm">
          <Ban className="h-8 w-8 text-black dark:text-neutral-300" />
        </div>

        <div className="space-y-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#08060d] dark:text-[#f3f4f6]">
          <p className="line-through decoration-brand-500 decoration-4">No kitchen scales</p>
          <p className="line-through decoration-brand-500 decoration-4">No portion guessing</p>
          <p className="line-through decoration-brand-500 decoration-4">No manual logs</p>
          <p className="text-brand-500 dark:text-brand-400 font-black">Just scan.</p>
        </div>
      </div>

      {/* Section: Dedicated High-Converting Beta Waitlist Card */}
      <div id="waitlist" className="layout-section bg-neutral-50/70 dark:bg-neutral-950">
        <div className="w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[36px] p-8 sm:p-12 shadow-xl text-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Closed Beta Access</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#08060d] dark:text-white mb-3">
            Be the first to scan food in 3D
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">
            Reserve your early-bird spot for the iOS TestFlight & Android Beta release.
          </p>

          {submitted ? (
            <div className="bg-brand-500/10 border border-brand-500/30 rounded-3xl p-6 text-left animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-3 text-brand-600 dark:text-brand-400 mb-2 font-black text-sm">
                <Check className="h-5 w-5" />
                <span>You're on the priority waitlist!</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-4">
                We sent an invite code confirmation to your inbox. Share your private link to jump 100 spots in line:
              </p>
              <div className="flex items-center gap-2 bg-white dark:bg-black p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <input 
                  type="text" 
                  readOnly 
                  value={`https://calidar.app/?invite=${userReferralCode}`}
                  className="flex-grow bg-transparent text-xs font-mono text-neutral-700 dark:text-neutral-300 px-2 outline-none"
                />
                <button
                  onClick={handleCopyReferral}
                  className="px-3.5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow h-12 bg-neutral-100 dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl px-5 text-sm dark:text-white placeholder-neutral-400 focus:outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                className="h-12 px-6 bg-black hover:bg-neutral-900 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black font-black text-xs uppercase tracking-widest rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md hover:scale-105"
              >
                <span>Get Invite</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-4 text-[10px] font-bold text-neutral-400">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-brand-500" /> No spam guaranteed
            </span>
            <span>•</span>
            <span>Weekly rollout batches</span>
          </div>

        </div>
      </div>

      {/* Section: Comprehensive FAQ Accordions (SEO & Schema Synced) */}
      <div id="faq" className="layout-section text-left">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs font-black uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-brand-500" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#08060d] dark:text-white">
              Got questions? We've got answers.
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = activeAccordion === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="border border-neutral-200 dark:border-neutral-800/80 rounded-2xl bg-white dark:bg-neutral-950 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full py-4 px-6 flex justify-between items-center text-left text-sm sm:text-base font-extrabold text-[#08060d] dark:text-white hover:text-brand-500 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-lg font-black ml-4 text-neutral-400">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Accordion Navigation Links (Contact, Privacy, Terms) */}
      <div className="w-full">
        
        {/* Row: Contact */}
        <div className="border-b border-black dark:border-neutral-900 w-full transition-colors">
          <button 
            onClick={() => toggleAccordion('contact')}
            className="w-full py-6 px-8 flex justify-between items-center text-base sm:text-lg font-black uppercase tracking-wider text-left hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all cursor-pointer"
          >
            <span>Contact & Support</span>
            <span className="text-xl font-bold">{activeAccordion === 'contact' ? '−' : '+'}</span>
          </button>
          {activeAccordion === 'contact' && (
            <div className="px-8 pb-8 pt-2 animate-in fade-in duration-200 text-left text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed flex items-center gap-2">
              <Send className="w-3.5 h-3.5 text-brand-500" />
              <span>Have questions, press inquiries, or feature requests? Email us at: </span>
              <a href="mailto:hello@calidar.app" className="text-brand-600 dark:text-brand-400 font-extrabold hover:underline">
                hello@calidar.app
              </a>
            </div>
          )}
        </div>

        {/* Row: Privacy */}
        <div className="border-b border-black dark:border-neutral-900 w-full transition-colors">
          <button 
            onClick={() => toggleAccordion('privacy')}
            className="w-full py-6 px-8 flex justify-between items-center text-base sm:text-lg font-black uppercase tracking-wider text-left hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all cursor-pointer"
          >
            <span>Privacy Policy</span>
            <span className="text-xl font-bold">{activeAccordion === 'privacy' ? '−' : '+'}</span>
          </button>
          {activeAccordion === 'privacy' && (
            <div className="px-8 pb-8 pt-2 animate-in fade-in duration-200 text-left text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
              We collect zero personal data. All 3D scans, personal AI coach parameters, and progress photos remain strictly encrypted on your local device. We never sell, transmit, or share your nutritional data.
            </div>
          )}
        </div>

        {/* Row: Terms */}
        <div className="border-b border-black dark:border-neutral-900 w-full transition-colors">
          <button 
            onClick={() => toggleAccordion('terms')}
            className="w-full py-6 px-8 flex justify-between items-center text-base sm:text-lg font-black uppercase tracking-wider text-left hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-all cursor-pointer"
          >
            <span>Terms of Service</span>
            <span className="text-xl font-bold">{activeAccordion === 'terms' ? '−' : '+'}</span>
          </button>
          {activeAccordion === 'terms' && (
            <div className="px-8 pb-8 pt-2 animate-in fade-in duration-200 text-left text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
              By using CaLidar, you own 100% of your nutrition logs and private body transformation imagery. CaLidar provides dietary insights for informational and wellness purposes.
            </div>
          )}
        </div>

      </div>

      {/* Footer Branding & Status Section */}
      <div className="py-16 text-center">
        {/* System Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] font-bold text-neutral-600 dark:text-neutral-300 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>All Systems Operational • Privacy Enclave Active</span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden">
            <img 
              src="/calidar_icon_only_1x1_2048.png" 
              alt="CaLidar Logo" 
              className="h-full w-full object-cover" 
            />
          </div>
        </div>

        <p className="text-xs font-black text-[#08060d] dark:text-white tracking-tight mb-1">
          CaLidar — 3D LiDAR & AI Calorie Tracker
        </p>

        <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
          © {new Date().getFullYear()} CaLidar App Inc. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
