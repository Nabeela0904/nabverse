import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const PortfolioOverview: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'Web Applications', label: 'Web Engineering' },
    { id: 'Dashboards', label: 'Dashboards' },
    { id: 'BI & Analytics', label: 'BI & Analytics' },
    { id: 'AI & Automation', label: 'AI & Automation' }
  ];

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="container-custom pb-24 space-y-16" style={{ paddingTop: '200px' }}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
          {PORTFOLIO_PROJECTS.length} Featured Client Case Studies
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
          Engineered for Performance. Proven by Profit.
        </h1>
        <p className="text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed pt-2">
          Explore real-world technical architecture, live metric lift, and client success stories across web development, Power BI dashboards, and enterprise automation.
        </p>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                filter === cat.id
                  ? 'bg-[#0284C7] dark:bg-[#00F2FE] text-white dark:text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                  : 'bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-[#0284C7] dark:hover:border-[#00F2FE]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7] dark:hover:border-[#00F2FE]/40 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge badge-primary">
                  {project.category}
                </span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{project.industry}</span>
              </div>

              <h3 className="text-2xl font-black text-slate-950 dark:text-white font-heading group-hover:text-[#0284C7] dark:group-hover:text-[#00F2FE] transition-colors">{project.title}</h3>
              <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{project.shortDesc}</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx}>
                  <span className="text-2xl font-black text-[#0284C7] dark:text-[#00F2FE] font-heading block">{m.value}</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 block font-bold">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2.5">
              <Link
                to={`/portfolio/${project.slug}`}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-950 dark:text-white text-xs font-bold transition-all flex items-center justify-between border border-slate-200 dark:border-slate-800"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" />
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#0284C7] dark:bg-[#00F2FE] text-white dark:text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 shadow-md shrink-0 hover:opacity-90"
                  title="Launch Live Project Site"
                >
                  <span>{project.liveUrl.includes('github.com') ? 'GitHub Code' : 'Live Site'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
