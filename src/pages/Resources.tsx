import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Resources: React.FC = () => {
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const handleDownload = (title: string) => {
    setDownloaded(title);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setDownloaded(null), 3000);
  };

  const resources = [
    {
      title: 'Nab Digital Studio Company Profile & Spec (PDF)',
      desc: 'Complete overview of our agency capabilities, tech stack specifications, case study highlights, and service pricing tiers.',
      tag: 'Agency Profile'
    },
    {
      title: 'Enterprise Power BI & Data Warehouse Architecture Blueprint',
      desc: 'A practical guide for C-suite leaders on structuring Star Schema models, DAX measures, and ETL pipelines.',
      tag: 'BI Guide'
    },
    {
      title: '2026 Core Web Vitals & Technical SEO Checklist',
      desc: '15-point checklist for achieving sub-second mobile load times and 95+ Google Lighthouse speed scores.',
      tag: 'SEO Checklist'
    }
  ];

  return (
    <div className="container-custom pb-24 space-y-16" style={{ paddingTop: '200px' }}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
          CLIENT RESOURCES & DOWNLOADS
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
          Free Guides & Technical Blueprints
        </h1>
        <p className="text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed pt-2">
          Download our technical whitepapers, agency spec sheet, and data analytics guides.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((res, idx) => (
          <div key={idx} className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="badge badge-primary">{res.tag}</span>
              <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading">{res.title}</h3>
              <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">{res.desc}</p>
            </div>

            <button
              onClick={() => handleDownload(res.title)}
              className="btn-primary w-full"
            >
              <Download className="w-4 h-4" />
              <span>{downloaded === res.title ? 'Downloaded!' : 'Download Spec PDF'}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
