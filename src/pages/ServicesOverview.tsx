import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { ArrowRight, CheckCircle2, ShieldCheck, Code, Database, Zap } from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  return (
    <div className="container-custom pb-24 space-y-16" style={{ paddingTop: '200px' }}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
          18 Core Service Practices
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
          Full Stack Digital Architecture & Data Solutions
        </h1>
        <p className="text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed pt-2">
          From custom Next.js web applications to C-suite Power BI dashboards and AI agent automation, we engineer every asset for speed, security, and measurable ROI.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7] dark:hover:border-[#00F2FE]/40 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-[#0284C7] dark:text-[#00F2FE] group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <span className="badge badge-primary">
                  {service.category}
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading mb-3 group-hover:text-[#0284C7] dark:group-hover:text-[#00F2FE] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed mb-6 font-semibold">
                {service.shortDesc}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-bold">Investment Starts:</span>
                <span className="text-slate-950 dark:text-white font-black font-heading text-sm">${service.priceStarting}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-[#0A0F1D] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to={`/services/${service.slug}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-950 dark:text-white text-xs font-bold transition-all flex items-center justify-between border border-slate-200 dark:border-slate-800"
              >
                <span>Explore Service Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00F2FE] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
