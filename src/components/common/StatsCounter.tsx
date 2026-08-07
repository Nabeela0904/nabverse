import React from 'react';
import { AGENCY_STATS } from '../../data/generalData';

export const StatsCounter: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {AGENCY_STATS.map((stat, idx) => (
        <div
          key={idx}
          className="card bg-white dark:bg-[#0F172A] text-center border border-slate-200 dark:border-slate-800 hover:border-[#0284C7] dark:hover:border-[#00F2FE]/40 transition-all"
        >
          <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#8A2BE2] to-[#FF007F] font-heading">
            {stat.value}
          </div>
          <span className="text-xs font-extrabold text-slate-600 dark:text-slate-400 mt-2 block tracking-wide uppercase font-heading">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};
