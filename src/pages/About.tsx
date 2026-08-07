import React from 'react';
import { TECH_STACK_ITEMS } from '../data/generalData';
import { Rocket, Target, Sparkles, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="container-custom pb-24 space-y-24" style={{ paddingTop: '200px' }}>
      {/* HERO */}
      <div className="text-center space-y-5 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
          OUR BRAND IDENTITY
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-3">
          Where Innovation Meets Digital Precision
        </h1>

        <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-semibold leading-relaxed pt-2">
          NabVerse was built to bridge creative digital design with powerful business intelligence, helping ambitious startups, clinics, schools, and enterprise brands establish market authority.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4 p-8">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-[#0284C7]/30 dark:border-[#00F2FE]/30 text-[#0284C7] dark:text-[#00F2FE] w-fit">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-slate-950 dark:text-white font-heading">Our Mission</h3>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
            To empower startups, healthcare providers, educational institutions, restaurants, and growing enterprises with world-class digital assets—merging Next.js web engineering, Power BI analytics, and AI automation to deliver measurable revenue growth.
          </p>
        </div>

        <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4 p-8">
          <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-[#6D28D9] dark:text-[#C084FC] w-fit">
            <Rocket className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-slate-950 dark:text-white font-heading">Our Vision</h3>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
            To become the global gold standard for multi-million dollar technology studios—recognized for setting Awwwards-caliber visual benchmarks while maintaining bulletproof data integrity.
          </p>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-black text-slate-950 dark:text-white font-heading">Core Operating Principles</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">The values that govern every line of code and pixel we deliver.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Obsessive Quality', desc: 'No placeholders, no generic templates, zero compromises on 95+ speed scores.' },
            { title: 'Single Source of Truth', desc: 'Every data chart and metric must be 100% audit-proof and accurate.' },
            { title: 'Human-Centered Luxury', desc: 'Complex workflows simplified into elegant, frictionless user experiences.' }
          ].map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-base font-black text-slate-950 dark:text-white font-heading">{val.title}</h4>
              <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOUNDER & ARCHITECT STORY */}
      <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2 space-y-5">
          <span className="text-xs font-black text-[#0284C7] dark:text-[#00F2FE] uppercase tracking-wider block font-heading">
            Founder & Architect Story
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white font-heading">
            Meet Nabeela (Nab)
          </h3>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[#6D28D9] dark:text-[#C084FC] text-xs font-extrabold uppercase tracking-wider">
            Founder & Innovation Architect of NabVerse
          </span>

          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
            NabVerse was founded by Nabeela with a vision to blend technology, creativity, and innovation to build meaningful digital experiences.
          </p>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
            She believes great ideas become powerful solutions when paired with the right strategy, design, and technology.
          </p>
          <blockquote className="p-4 sm:p-5 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border-l-4 border-[#0284C7] dark:border-[#00F2FE] text-sm sm:text-base text-slate-900 dark:text-slate-100 font-bold italic">
            "At NabVerse, we transform ideas into digital experiences that create impact, inspire growth, and shape the future."
          </blockquote>
          <span className="text-xs sm:text-sm font-black text-[#0284C7] dark:text-[#00F2FE] font-heading block pt-1">
            NabVerse — Think Big. Build Better.
          </span>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-xl relative overflow-hidden flex flex-col items-center justify-center">
          <div className="w-36 h-36 shrink-0 rounded-full bg-gradient-to-tr from-[#00F2FE] via-[#8A2BE2] to-[#FF007F] p-1 shadow-[0_0_25px_rgba(0,242,254,0.35)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <img
                src="/images/profile_pic.jpeg"
                alt="Nabeela (Nab) — Founder & Innovation Architect"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-black text-slate-950 dark:text-white font-heading">Nabeela (Nab)</h4>
            <span className="text-xs text-[#0284C7] dark:text-[#00F2FE] font-black uppercase tracking-wider block font-heading">
              Founder & Innovation Architect
            </span>
          </div>
        </div>
      </div>

      {/* THE NABVERSE STORY */}
      <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-black text-[#0284C7] dark:text-[#00F2FE] uppercase tracking-wider block font-heading">
            The NabVerse Story
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white font-heading">
            NabVerse was born from a simple belief: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#8A2BE2] to-[#FF007F]">Great ideas deserve great technology.</span>
          </h3>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
          <p>
            Our journey began with curiosity, exploring how technology, programming, artificial intelligence, and data can solve everyday challenges and create opportunities for growth.
          </p>
          <p>
            The world is constantly evolving, and we believe technology should not just follow change, it should help create it.
          </p>
          <p className="p-5 rounded-2xl bg-cyan-500/10 border border-[#0284C7]/30 dark:border-[#00F2FE]/30 text-slate-950 dark:text-white font-bold text-base sm:text-lg">
            NabVerse represents a universe of possibilities where imagination meets innovation, and every idea has the potential to become something extraordinary.
          </p>
        </div>
      </div>

      {/* TECH STACK RADAR */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-black text-slate-950 dark:text-white font-heading">Modern Technology Radar</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">Battle-tested tools and frameworks powering our digital applications.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_STACK_ITEMS.map((item) => (
            <div key={item.name} className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between">
              <div>
                <span className="text-sm font-black text-slate-950 dark:text-white block font-heading">{item.name}</span>
                <span className="text-[10px] text-slate-600 dark:text-slate-400 block font-bold">{item.desc}</span>
              </div>
              <span className="badge badge-primary !text-[9px]">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
