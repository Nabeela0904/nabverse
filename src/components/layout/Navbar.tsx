import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon, Coins } from 'lucide-react';
import { useCurrency, CurrencyCode, CURRENCIES } from '../../context/CurrencyContext';

export const Navbar: React.FC<{ isDark: boolean; toggleTheme: () => void }> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const location = useLocation();

  const { currency, setCurrency, config, detectedCountry } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Tools Hub', path: '/tools' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300">
      <nav aria-label="Main Navigation">
        <div
          className={`max-w-7xl mx-auto transition-all duration-300 ${
            scrolled ? 'mt-2' : 'mt-4'
          }`}
        >
          <div className="px-5 py-3 rounded-2xl bg-white/95 dark:bg-[#0A0F1D]/95 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-2xl flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="NabVerse Homepage">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00F2FE] via-[#8A2BE2] to-[#FF007F] flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.4)] group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-lg font-black tracking-wider font-heading">N</span>
              </div>
              <div>
                <span className="font-extrabold text-sm md:text-base leading-none block tracking-wide text-slate-950 dark:text-white font-heading">
                  NABVERSE
                </span>
                <span className="text-[8px] sm:text-[9px] font-black text-[#0284C7] dark:text-[#00F2FE] uppercase tracking-[0.18em] leading-none block mt-0.5 font-heading">
                  THINK BIGGER. BUILD BETTER.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-5">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <Link
                      to={link.path}
                      className={`text-xs font-black tracking-wide transition-colors py-1 ${
                        location.pathname === link.path
                          ? 'text-[#0284C7] dark:text-[#00F2FE]'
                          : 'text-slate-800 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-[#00F2FE]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
                {/* Currency Selector */}
                <div className="relative">
                  <button
                    onClick={() => setCurrencyDropdown(!currencyDropdown)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#04060C] border border-slate-200 dark:border-slate-800 text-xs font-extrabold text-slate-950 dark:text-white hover:border-[#0284C7] dark:hover:border-[#00F2FE] transition-all"
                    title={`Current currency: ${config.code} (${config.symbol})`}
                  >
                    <Coins className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00F2FE]" />
                    <span>{config.code} ({config.symbol})</span>
                  </button>

                  {currencyDropdown && (
                    <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 shadow-2xl p-1.5 space-y-1 z-50">
                      {Object.keys(CURRENCIES).map((cCode) => {
                        const c = CURRENCIES[cCode as CurrencyCode];
                        return (
                          <button
                            key={c.code}
                            onClick={() => {
                              setCurrency(c.code);
                              setCurrencyDropdown(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold flex items-center justify-between ${
                              currency === c.code
                                ? 'bg-cyan-500/10 text-[#0284C7] dark:text-[#00F2FE] font-black'
                                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <span>{c.code}</span>
                            <span className="font-extrabold">{c.symbol}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Language Switcher */}
                <button
                  onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
                  className="flex items-center gap-1 text-xs font-black text-slate-950 dark:text-white hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors"
                  aria-label="Switch interface language"
                >
                  <Globe className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" aria-hidden="true" />
                  <span>{lang}</span>
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-slate-950 dark:text-white hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors shadow-sm"
                  title="Toggle Light and Dark Theme"
                  aria-label="Toggle Light and Dark Theme"
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" /> : <Moon className="w-4 h-4 text-[#0284C7]" aria-hidden="true" />}
                </button>

                {/* CTA Button */}
                <Link to="/book" className="btn-primary !py-2 !px-4 text-xs font-bold tracking-wide">
                  <span>Scoping Session</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-slate-950 dark:text-white flex items-center justify-center"
                title="Toggle Theme"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" /> : <Moon className="w-4 h-4 text-[#0284C7]" aria-hidden="true" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-h-[44px] min-w-[44px] rounded-xl flex items-center justify-center bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-slate-950 dark:text-white"
                title="Toggle Navigation Menu"
                aria-label="Toggle Mobile Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0A0F1D]/95 border border-slate-200 dark:border-slate-800 flex flex-col gap-3 shadow-2xl backdrop-blur-2xl max-h-[calc(100vh-100px)] overflow-y-auto">
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm sm:text-base font-extrabold px-3 min-h-[44px] flex items-center rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#0284C7] dark:text-[#00F2FE] bg-cyan-500/10 font-black'
                        : 'text-slate-950 dark:text-white hover:text-[#0284C7] dark:hover:text-[#00F2FE] hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Currency Selector */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block px-3">Select Currency</span>
                <div className="grid grid-cols-3 gap-2 px-1">
                  {Object.keys(CURRENCIES).map((cCode) => {
                    const c = CURRENCIES[cCode as CurrencyCode];
                    return (
                      <button
                        key={c.code}
                        onClick={() => {
                          setCurrency(c.code);
                        }}
                        className={`py-2 px-2 rounded-xl text-xs font-black transition-all ${
                          currency === c.code
                            ? 'bg-[#0284C7] dark:bg-[#00F2FE] text-white dark:text-slate-950'
                            : 'bg-slate-100 dark:bg-[#04060C] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        {c.code} ({c.symbol})
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-3 mt-1 gap-3">
                <button
                  onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
                  className="min-h-[44px] flex items-center gap-1.5 text-xs sm:text-sm font-black text-slate-950 dark:text-white px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Switch Language"
                >
                  <Globe className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" aria-hidden="true" />
                  <span>Language: {lang}</span>
                </button>

                <Link
                  to="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary min-h-[44px] !py-2.5 !px-5 text-xs font-bold tracking-wide flex items-center justify-center shrink-0"
                >
                  <span>Scoping Session</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
