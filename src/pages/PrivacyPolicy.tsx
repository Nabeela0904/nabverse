import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container-custom max-w-4xl pb-24 space-y-8" style={{ paddingTop: '200px' }}>
      <div className="space-y-4">
        <h1 className="text-4xl font-black text-slate-950 dark:text-white font-heading">Privacy Policy</h1>
        <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">Last updated: August 2026</p>
      </div>

      <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 space-y-6 text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
        <h3 className="text-lg font-black text-slate-950 dark:text-white font-heading">1. Data Collection & Privacy</h3>
        <p>At NabVerse, we respect your privacy and protect client intellectual property and analytics data under strict non-disclosure parameters.</p>

        <h3 className="text-lg font-black text-slate-950 dark:text-white font-heading">2. Information We Collect</h3>
        <p>We collect form submissions (name, email, project specifications) solely to assess project feasibility and deliver custom software or BI solutions.</p>

        <h3 className="text-lg font-black text-slate-950 dark:text-white font-heading">3. Contact & Inquiries</h3>
        <p>For privacy inquiries, contact our executive team at <a href="mailto:nabverse8@gmail.com" className="text-[#0284C7] dark:text-[#00F2FE] underline font-bold">nabverse8@gmail.com</a>.</p>
      </div>
    </div>
  );
};
