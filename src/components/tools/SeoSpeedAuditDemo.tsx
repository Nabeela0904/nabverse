import React, { useState } from 'react';
import { Gauge, CheckCircle2, AlertTriangle, ArrowRight, Zap, Globe, Sparkles, RefreshCw } from 'lucide-react';

export const SeoSpeedAuditDemo: React.FC = () => {
  const [url, setUrl] = useState('mybusinesswebsite.com');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsScanning(true);
    setScanComplete(false);
    setProgress(15);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          return 100;
        }
        return prev + 20;
      });
    }, 400);
  };

  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-cyan-500/10 border border-[#0284C7]/30 dark:border-[#00F2FE]/30 text-[#0284C7] dark:text-[#00F2FE]">
          <Gauge className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-heading">Website Speed & SEO Audit Simulator</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Simulate a live Google Core Web Vitals & Technical SEO audit for your site.</p>
        </div>
      </div>

      <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Globe className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="enter-your-domain.com"
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-mono text-sm focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE] transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={isScanning}
          className="py-3 px-6 rounded-xl bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
        >
          {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
          {isScanning ? `Analyzing (${progress}%)` : 'Run 95+ Audit'}
        </button>
      </form>

      {/* Scanning Bar */}
      {isScanning && (
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-cyan-500/30 space-y-3">
          <div className="flex justify-between text-xs text-[#0284C7] dark:text-[#00F2FE] font-semibold">
            <span>Profiling Core Web Vitals & Schema...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#0284C7] dark:bg-[#00F2FE] h-full transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Results Gauge */}
      {scanComplete && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center">
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-heading block">98</span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 block">Performance Score</span>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center">
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-heading block">100</span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 block">SEO Compliance</span>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center">
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-heading block">96</span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 block">Accessibility</span>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center">
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-heading block">0.8s</span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 block">Largest Paint (LCP)</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Next.js Edge Pre-rendering & Image Compression Passed
            </div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Structured Schema.org JSON-LD Markup Detected
            </div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold">
              <AlertTriangle className="w-4 h-4" /> Recommended: Upgrade legacy WordPress plugins to modern React components.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
