import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, Cpu, Layers } from 'lucide-react';

export const TechRecommendationQuiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    goal: '',
    traffic: '',
    data: '',
    hosting: ''
  });

  const questions = [
    {
      key: 'goal',
      title: 'What is your primary digital objective?',
      options: [
        { label: 'High-Converting Marketing & Lead Generation Site', val: 'lead' },
        { label: 'Full-Stack Web App, Client Portal or SaaS', val: 'saas' },
        { label: 'Direct E-Commerce Storefront', val: 'ecom' },
        { label: 'Executive BI Dashboard & Data Automation', val: 'bi' }
      ]
    },
    {
      key: 'traffic',
      title: 'What is your expected monthly visitor volume?',
      options: [
        { label: 'Under 10,000 Visitors / Month', val: 'small' },
        { label: '10,000 - 100,000 Visitors / Month', val: 'medium' },
        { label: '100,000+ Enterprise Concurrent Traffic', val: 'large' }
      ]
    },
    {
      key: 'data',
      title: 'What type of backend data architecture is required?',
      options: [
        { label: 'Content Management (CMS) Only', val: 'cms' },
        { label: 'Relational Database (PostgreSQL / SQL Server)', val: 'sql' },
        { label: 'Real-Time Power BI / BigQuery Analytics Pipeline', val: 'warehouse' }
      ]
    }
  ];

  const handleSelect = (key: string, val: string) => {
    setAnswers({ ...answers, [key]: val });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Result screen
    }
  };

  const getRecommendation = () => {
    if (answers.goal === 'bi' || answers.data === 'warehouse') {
      return {
        stack: 'Power BI + PostgreSQL + SQL Server + Recharts + React',
        reason: 'Recommended for enterprise data modeling, high DAX performance, and custom live web dashboard visualization.'
      };
    }
    if (answers.goal === 'saas' || answers.data === 'sql') {
      return {
        stack: 'Next.js + TypeScript + Supabase + Tailwind CSS + Vercel',
        reason: 'Ideal for scalable full-stack web applications with authentication, serverless database backends, and sub-second rendering.'
      };
    }
    return {
      stack: 'Next.js + Tailwind CSS + Sanity Headless CMS + Framer Motion',
      reason: 'Perfect for luxury brand aesthetics, 95+ speed scores, and effortless non-technical content management.'
    };
  };

  const rec = getRecommendation();

  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-[#6D28D9] dark:text-[#C084FC]">
          <Cpu className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-heading">Technology Recommendation Wizard</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Answer 3 quick questions to discover your optimal software architecture.</p>
        </div>
      </div>

      {step < questions.length ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center text-xs font-semibold text-[#6D28D9] dark:text-[#C084FC]">
            <span>Question {step + 1} of {questions.length}</span>
            <span>{Math.round(((step + 1) / questions.length) * 100)}% Completed</span>
          </div>

          <h4 className="text-xl font-bold text-slate-950 dark:text-white font-heading">{questions[step].title}</h4>

          <div className="grid grid-cols-1 gap-3">
            {questions[step].options.map(opt => (
              <button
                key={opt.val}
                onClick={() => handleSelect(questions[step].key, opt.val)}
                className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 text-left text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all flex items-center justify-between group"
              >
                <span>{opt.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#6D28D9] dark:group-hover:text-[#C084FC] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0A0F1D] border border-purple-500/40 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" /> Recommended Architecture Stack
          </div>
          <div className="text-2xl font-extrabold text-slate-950 dark:text-white font-heading">{rec.stack}</div>
          <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">{rec.reason}</p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="py-2.5 px-5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all flex items-center justify-center min-h-[44px]"
            >
              Discuss Architecture Spec
            </a>
            <button
              onClick={() => { setStep(0); setAnswers({ goal: '', traffic: '', data: '', hosting: '' }); }}
              className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-300 dark:border-slate-700 min-h-[44px]"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
