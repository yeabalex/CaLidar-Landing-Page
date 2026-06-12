import HoldToScanMockup from './HoldToScanMockup';

export default function SectionHero() {
  return (
    <div className="layout-section">
      {/* App Logo */}
      <div className="flex justify-center mb-8">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md">
          <div className="h-12 w-12 rounded-full bg-brand-500 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
              <path d="M17 8C8 10 7 19 7 19S16 18 17 8Z" />
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 8.5C16.8 9.5 16 11.2 14.5 12.8C13 14.4 11.2 15.5 10 16C9 15.5 7.8 14.4 7.2 12.8C6.6 11.2 6.5 9.5 6.5 9C7 9 8.8 9.1 10.4 9.7C12 10.3 13.5 11.3 14.5 12.5C15.3 11.5 16.3 10 17 8.5Z" opacity="0.3" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-[54px] font-black tracking-tight leading-[1.15] text-[#08060d] dark:text-[#f3f4f6] mb-8">
        Your meals.<br />
        Your metrics.<br />
        Your world.
      </h1>

      {/* App Download Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        {/* Apple App Store */}
        <a 
          href="#"
          className="flex items-center gap-3 bg-black text-white hover:bg-neutral-900 border border-neutral-800 rounded-2xl px-5 py-2.5 transition-all text-left shadow-sm min-w-[170px]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.12.02.24.03.36.03.85 0 1.93-.48 2.46-1.36"/>
          </svg>
          <div>
            <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-bold leading-none">Download on the</div>
            <div className="text-sm font-black mt-0.5 leading-none">App Store</div>
          </div>
        </a>

        {/* Google Play Store */}
        <a 
          href="#"
          className="flex items-center gap-3 bg-black text-white hover:bg-neutral-900 border border-neutral-800 rounded-2xl px-5 py-2.5 transition-all text-left shadow-sm min-w-[170px]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M5 3.22c-.22.2-.36.52-.36.93v15.7c0 .41.14.73.36.93l.05.05L14.71 12v-.12L5.05 3.17l-.05.05zM17.89 15.19l-3.18-3.18v-.02l3.18-3.18.06.03 3.77 2.14c1.08.61 1.08 1.62 0 2.24l-3.77 2.14-.06-.17zM14.21 11.5L5.86 3.15C6.18 2.81 6.84 2.8 7.62 3.24l9.77 5.56-3.18 3.18-.02-.48zM14.21 12.5l3.18 3.18-9.77 5.56c-.78.44-1.44.43-1.76.09l8.35-8.35v.52z"/>
          </svg>
          <div>
            <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-bold leading-none">Get it on</div>
            <div className="text-sm font-black mt-0.5 leading-none">Google Play</div>
          </div>
        </a>
      </div>

      {/* Centered Phone Mockup */}
      <div className="w-full flex justify-center">
        <HoldToScanMockup />
      </div>
    </div>
  );
}
