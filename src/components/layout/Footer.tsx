import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className={`relative bg-slate-100 dark:bg-[#030712] border-t border-slate-300 dark:border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-900 dark:text-slate-100 transition-all ${!isHome ? 'mt-20 lg:mt-32' : 'mt-0'}`}>
      {/* Top Neon Ambient Glow & Divider */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F2FE] via-[#8A2BE2] to-transparent opacity-80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/10 dark:bg-[#00F2FE]/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-slate-300 dark:border-slate-800/80">
          {/* Column 1 & 2: Brand Info & Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit" aria-label="NabVerse Homepage">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F2FE] via-[#8A2BE2] to-[#FF007F] flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.4)] group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-xl font-black tracking-wider font-heading">N</span>
              </div>
              <div>
                <span className="font-black text-base md:text-lg leading-none block tracking-wider text-slate-950 dark:text-white font-heading">
                  NABVERSE
                </span>
                <span className="text-[9px] sm:text-[10px] font-black text-[#0284C7] dark:text-[#00F2FE] uppercase tracking-[0.2em] leading-none block mt-1 font-heading">
                  THINK BIGGER. BUILD BETTER.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed max-w-md font-semibold">
              Empowering ambitious brands with awarded Next.js web applications, enterprise Power BI analytics, SQL data warehouses, and AI automation.
            </p>

            {/* Glassmorphism Newsletter Card */}
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-[#0A0F1D]/80 border border-slate-300 dark:border-slate-800 shadow-lg backdrop-blur-xl space-y-3 max-w-md">
              <div className="flex items-center justify-between">
                <label htmlFor="footer-newsletter" className="text-xs font-black text-slate-950 dark:text-white uppercase tracking-wider font-heading flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00F2FE]" />
                  <span>Executive Insights Newsletter</span>
                </label>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Weekly</span>
              </div>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  id="footer-newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter business email..."
                  aria-label="Your Business Email Address"
                  required
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#04060C] border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white text-xs font-bold focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE] placeholder:text-slate-500 dark:placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="btn-primary !py-2.5 !px-5 text-xs font-bold min-h-[44px] flex items-center justify-center shrink-0"
                >
                  <span>{subscribed ? <CheckCircle2 className="w-4 h-4" /> : 'Subscribe'}</span>
                </button>
              </form>
              {subscribed && <span className="text-[11px] text-[#059669] dark:text-[#00FF87] font-bold block">Subscribed successfully! Welcome aboard.</span>}
            </div>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest font-heading text-[#0284C7] dark:text-[#00F2FE] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Core Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-800 dark:text-slate-300">
              <li><Link to="/services/custom-website-development" className="hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">Custom Website Dev</Link></li>
              <li><Link to="/services/web-applications" className="hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">Web Applications & SaaS</Link></li>
              <li><Link to="/services/power-bi-dashboard-development" className="hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">Power BI Dashboards</Link></li>
              <li><Link to="/services/excel-dashboard-automation" className="hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">Excel Automation</Link></li>
              <li><Link to="/services/sql-data-solutions" className="hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">SQL Data Solutions</Link></li>
              <li><Link to="/services/ai-integrations" className="hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">AI & Workflow Automation</Link></li>
            </ul>
          </div>

          {/* Column 4: Interactive Suite */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest font-heading text-[#6D28D9] dark:text-[#C084FC] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>Interactive Tools</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-800 dark:text-slate-300">
              <li><Link to="/tools" className="hover:text-[#6D28D9] dark:hover:text-[#C084FC] transition-colors">Website Cost Calculator</Link></li>
              <li><Link to="/tools" className="hover:text-[#6D28D9] dark:hover:text-[#C084FC] transition-colors">BI Dashboard Estimator</Link></li>
              <li><Link to="/tools" className="hover:text-[#6D28D9] dark:hover:text-[#C084FC] transition-colors">ROI Growth Calculator</Link></li>
              <li><Link to="/tools" className="hover:text-[#6D28D9] dark:hover:text-[#C084FC] transition-colors">Live BI Command Suite</Link></li>
              <li><Link to="/tools" className="hover:text-[#6D28D9] dark:hover:text-[#C084FC] transition-colors">Speed & SEO Simulator</Link></li>
              <li><Link to="/tools" className="hover:text-[#6D28D9] dark:hover:text-[#C084FC] transition-colors">Tech Recommendation Quiz</Link></li>
            </ul>
          </div>

          {/* Column 5: Direct Contact & SLA */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest font-heading text-[#DB2777] dark:text-[#FF007F] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Support</span>
            </h4>
            <ul className="space-y-3.5 text-xs font-bold text-slate-950 dark:text-white">
              <li className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-[#0284C7] dark:text-[#00F2FE]">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <a href="mailto:nabverse8@gmail.com" className="hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">nabverse8@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-[#6D28D9] dark:text-[#C084FC]">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <a href="tel:+918838811746" className="hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">+91 8838811746</a>
              </li>
              <li className="pt-2">
                <span className="badge badge-primary !text-[10px] !py-1 !px-3">
                  SLA Response: Under 2 Hours
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-700 dark:text-slate-400">
          <p>© {new Date().getFullYear()} NabVerse. All rights reserved. Built with precision and passion.</p>
          <div className="flex flex-wrap gap-6 text-slate-800 dark:text-slate-300">
            <Link to="/privacy" className="hover:text-[#0284C7] dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#0284C7] dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/resources" className="hover:text-[#0284C7] dark:hover:text-white transition-colors">Resources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
