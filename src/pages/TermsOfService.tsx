import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="container-custom max-w-4xl pb-24 space-y-8" style={{ paddingTop: '200px' }}>
      <div className="space-y-4">
        <h1 className="text-4xl font-black text-slate-950 dark:text-white font-heading">Terms of Service</h1>
        <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">Last updated: August 2026</p>
      </div>

      <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 space-y-6 text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
        <h3 className="text-lg font-black text-slate-950 dark:text-white font-heading">1. Scope of Work & Deliverables</h3>
        <p>All web development, Power BI dashboards, and AI integrations delivered by NabVerse are governed by signed statement-of-work (SOW) documents.</p>

        <h3 className="text-lg font-black text-slate-950 dark:text-white font-heading">2. Intellectual Property Ownership</h3>
        <p>Upon final milestone payment, full source code, repository access, and database credentials are transferred 100% to the client.</p>

        <h3 className="text-lg font-black text-slate-950 dark:text-white font-heading">3. Executive Contact</h3>
        <p>Questions regarding service agreements can be sent to <a href="mailto:nabverse8@gmail.com" className="text-[#0284C7] dark:text-[#00F2FE] underline font-bold">nabverse8@gmail.com</a> or phone <a href="tel:+918838811746" className="text-[#0284C7] dark:text-[#00F2FE] underline font-bold">+91 8838811746</a>.</p>
      </div>
    </div>
  );
};
