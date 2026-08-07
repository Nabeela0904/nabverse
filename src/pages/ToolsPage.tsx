import React, { useState } from 'react';
import { WebsiteCostCalculator } from '../components/tools/WebsiteCostCalculator';
import { DashboardCostCalculator } from '../components/tools/DashboardCostCalculator';
import { RoiCalculator } from '../components/tools/RoiCalculator';
import { InteractiveBiDemo } from '../components/tools/InteractiveBiDemo';
import { SeoSpeedAuditDemo } from '../components/tools/SeoSpeedAuditDemo';
import { TechRecommendationQuiz } from '../components/tools/TechRecommendationQuiz';
import { Wrench, Calculator, BarChart3, TrendingUp, Zap, HelpCircle } from 'lucide-react';

export const ToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'dashboard' | 'roi' | 'bi-demo' | 'seo' | 'quiz'>('calculator');

  const tools = [
    { id: 'calculator', name: 'Website Cost Calculator', icon: Calculator, desc: 'Real-time itemized price estimator for web dev' },
    { id: 'dashboard', name: 'BI Dashboard Estimator', icon: BarChart3, desc: 'Calculate Power BI & SQL modeling investment' },
    { id: 'roi', name: 'ROI Growth Estimator', icon: TrendingUp, desc: 'Project revenue & lead lift with interactive charts' },
    { id: 'bi-demo', name: 'Live BI Command Suite', icon: BarChart3, desc: 'Interactive sandbox demo with SQL inspector' },
    { id: 'seo', name: 'Speed & Core Web Vitals', icon: Zap, desc: 'Diagnostic performance scanner simulator' },
    { id: 'quiz', name: 'Tech Stack Recommender', icon: HelpCircle, desc: '3-question architecture wizard' }
  ];

  return (
    <div className="container-custom pb-24 space-y-16" style={{ paddingTop: '200px' }}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
          STUDIO INTERACTIVE SUITE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
          Value-First Interactive Calculators & Demos
        </h1>
        <p className="text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed pt-2">
          Test our live tools, generate instant itemized cost specifications, project your 12-month ROI, and inspect real SQL queries in our BI command suite.
        </p>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
                  activeTab === t.id
                    ? 'bg-[#0284C7] dark:bg-[#00F2FE] text-white dark:text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                    : 'bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-[#0284C7] dark:hover:border-[#00F2FE]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Tool Display */}
      <div>
        {activeTab === 'calculator' && <WebsiteCostCalculator />}
        {activeTab === 'dashboard' && <DashboardCostCalculator />}
        {activeTab === 'roi' && <RoiCalculator />}
        {activeTab === 'bi-demo' && <InteractiveBiDemo />}
        {activeTab === 'seo' && <SeoSpeedAuditDemo />}
        {activeTab === 'quiz' && <TechRecommendationQuiz />}
      </div>
    </div>
  );
};
