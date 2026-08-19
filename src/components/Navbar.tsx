import { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'LiDAR Scanner', href: '#scanner' },
    { label: 'Sync & Wrapped', href: '#wrapped' },
    { label: 'Progress', href: '#progress' },
    { label: 'AI Coach', href: '#coach' },
    { label: 'Why CaLidar', href: '#compare' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo & Beta badge */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer" aria-label="CaLidar Home">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-neutral-200 dark:border-neutral-800 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
            <img 
              src="/calidar_icon_only_1x1_2048.png" 
              alt="CaLidar Logo" 
              className="h-full w-full object-cover" 
            />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black tracking-tight text-[#08060d] dark:text-white leading-none">
                CaLidar
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                v1.0 Beta
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-bold text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black dark:hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer shadow-sm"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4 text-amber-400" />
            )}
          </button>

          {/* Early Access Button */}
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-sm group"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-500 dark:text-brand-600" />
            <span>Join Beta</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-black dark:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black/95 backdrop-blur-xl px-6 py-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 py-2 text-sm font-bold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2 text-neutral-700 dark:text-neutral-200 hover:text-brand-500 border-b border-neutral-100 dark:border-neutral-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={handleLinkClick}
              className="mt-2 w-full py-3 rounded-xl bg-brand-500 text-black font-black uppercase tracking-wider text-center text-xs flex items-center justify-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reserve Closed Beta Spot</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
