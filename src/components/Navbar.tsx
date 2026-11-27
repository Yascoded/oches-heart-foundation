import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { OhfFullLogo, OhfLogoStyles } from './OhfFlagshipLogo';

interface NavbarProps {
  onOpenDonate: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonate, isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Our Focus', href: '#focus' },
    { name: 'Impact', href: '#impact' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 dark:bg-[#0A192F]/85 backdrop-blur-md shadow-md dark:shadow-black/30 py-3 border-b border-rose-100/60 dark:border-white/10'
          : 'bg-[#FFFDF9]/80 dark:bg-[#0A192F]/75 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <OhfLogoStyles />
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center group focus:outline-none"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Oche's Heart Foundation Home"
        >
          <OhfFullLogo
            variant={isDark ? 'dark' : 'light'}
            animated={true}
            className="h-10 sm:h-11 w-auto shrink-0"
            idPrefix="navbar-ohf"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold text-slate-700 dark:text-[#CBD5E1] hover:text-[#C51E2E] dark:hover:text-[#F05A4B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C51E2E] dark:after:bg-[#E84C3D] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Theme Toggle & Donate */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#112240] text-slate-700 dark:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#1D3557] transition-all duration-200 shadow-xs cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#0A192F] transition-transform duration-300 rotate-0 hover:-rotate-12" />
            )}
          </button>

          <button
            onClick={onOpenDonate}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-[#D97706] hover:bg-[#B45309] dark:bg-[#E84C3D] dark:hover:bg-[#F05A4B] text-white shadow-lg shadow-amber-600/25 dark:shadow-[#E84C3D]/25 hover:shadow-amber-600/40 dark:hover:shadow-[#E84C3D]/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
            <span>Donate Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <button
            onClick={onOpenDonate}
            className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#D97706] dark:bg-[#E84C3D] text-white shadow-sm"
          >
            Donate
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-[#CBD5E1] hover:text-[#C51E2E] dark:hover:text-[#F05A4B] hover:bg-rose-50 dark:hover:bg-[#112240] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] dark:bg-[#112240] border-b border-rose-100 dark:border-white/10 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 text-base font-semibold text-slate-800 dark:text-[#F8FAFC] hover:text-[#C51E2E] dark:hover:text-[#F05A4B] hover:bg-rose-50 dark:hover:bg-[#1D3557] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 dark:border-white/10 space-y-2.5">
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-full py-2.5 px-4 rounded-xl font-semibold border border-slate-200 dark:border-white/10 bg-white dark:bg-[#1D3557] text-slate-800 dark:text-[#F8FAFC] flex items-center justify-center gap-2 text-sm transition-colors"
              >
                {isDark ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-300" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-[#0A192F]" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-3 rounded-xl font-bold bg-[#D97706] hover:bg-[#B45309] dark:bg-[#E84C3D] dark:hover:bg-[#F05A4B] text-white shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Donate to Oche's Heart</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

