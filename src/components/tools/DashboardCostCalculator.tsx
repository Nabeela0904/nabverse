import React, { useState } from 'react';
import { Database, CheckCircle2, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCurrency } from '../../context/CurrencyContext';

export const DashboardCostCalculator: React.FC = () => {
  const { formatPrice, config } = useCurrency();
  const [engine, setEngine] = useState<'powerbi' | 'excel' | 'custom-web' | 'warehouse'>('powerbi');
  const [dataSources, setDataSources] = useState<number>(2);
  const [selectedServices, setSelectedServices] = useState<string[]>(['dax', 'etl']);
  const [copied, setCopied] = useState(false);

  const biServices = [
    { id: 'dax', label: 'Advanced DAX & Time Intelligence', price: 300, desc: 'YTD, MoM, YoY dynamic measures' },
    { id: 'etl', label: 'Automated ETL & Power Query', price: 400, desc: 'Multi-source automated data pipelines' },
    { id: 'rls', label: 'Row-Level Security (RLS)', price: 350, desc: 'Role-based access permissions' },
    { id: 'sql', label: 'SQL Query Optimization', price: 450, desc: 'Index tuning & fast database views' },
    { id: 'export', label: 'Automated PDF/Excel Exporter', price: 250, desc: '1-click executive email scorecards' },
    { id: 'embed', label: 'Web Application Embedding', price: 500, desc: 'Embedded inside React web portal' }
  ];

  const engineBases = {
    excel: 699,
    powerbi: 1199,
    'custom-web': 1999,
    warehouse: 2899
  };

  const calculateTotal = () => {
    const base = engineBases[engine];
    const sourceCost = (dataSources - 1) * 200;
    const servicesTotal = selectedServices.reduce((acc, sId) => {
      const s = biServices.find(item => item.id === sId);
      return acc + (s ? s.price : 0);
    }, 0);

    return base + sourceCost + servicesTotal;
  };

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const total = calculateTotal();

  const handleCopyQuote = () => {
    const summary = `NABVERSE - BI & DASHBOARD COST ESTIMATE
BI Engine: ${engine.toUpperCase()}
Data Sources: ${dataSources} Connected Sources
Included Services: ${selectedServices.map(s => biServices.find(item => item.id === s)?.label).join(', ')}
ESTIMATED TOTAL: ${formatPrice(total)}
Website: https://nabverse.com`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-[#6D28D9] dark:text-[#C084FC]">
          <Database className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-heading">Dashboard & BI Cost Estimator</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Estimate your investment for custom Power BI, Excel automation, or web BI suites.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Engine Selection */}
          <div>
            <label className="text-xs font-semibold text-[#6D28D9] dark:text-[#C084FC] uppercase tracking-wider block mb-3">1. Select BI Visualization Engine</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'excel', label: 'Excel Workbooks', basePrice: 699 },
                { id: 'powerbi', label: 'Power BI Suite', basePrice: 1199 },
                { id: 'custom-web', label: 'React BI Portal', basePrice: 1999 },
                { id: 'warehouse', label: 'SQL Warehouse', basePrice: 2899 }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setEngine(item.id as any)}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    engine === item.id
                      ? 'bg-purple-500/15 border-purple-500 text-slate-950 dark:text-white shadow-lg'
                      : 'bg-white dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-purple-400'
                  }`}
                >
                  <span className="text-xs font-bold block font-heading">{item.label}</span>
                  <span className="text-[11px] font-black text-purple-600 dark:text-purple-400 mt-1 block">
                    {formatPrice(item.basePrice)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Data Sources Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-[#6D28D9] dark:text-[#C084FC] uppercase tracking-wider">2. Number of Data Sources</label>
              <span className="text-xs font-bold text-slate-950 dark:text-white">{dataSources} Data Feeds</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={dataSources}
              onChange={(e) => setDataSources(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1">
              <span>1 Source (Included)</span>
              <span>5 Sources</span>
              <span>10+ Enterprise Sources</span>
            </div>
          </div>

          {/* Step 3: DAX & ETL Services */}
          <div>
            <label className="text-xs font-semibold text-[#6D28D9] dark:text-[#C084FC] uppercase tracking-wider block mb-3">3. Specialized BI Services</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {biServices.map((s) => (
                <button
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  className={`p-3 rounded-xl border text-left flex items-start justify-between transition-all ${
                    selectedServices.includes(s.id)
                      ? 'bg-slate-100 dark:bg-[#0A0F1D] border-purple-500 text-slate-950 dark:text-slate-100'
                      : 'bg-white dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                  }`}
                >
                  <div>
                    <span className="text-sm font-medium block">{s.label}</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 block">{s.desc}</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 ml-2">+{formatPrice(s.price)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white dark:bg-[#0A0F1D] rounded-2xl p-6 border border-purple-500/30 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Estimated BI Investment</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-[#6D28D9] dark:text-[#C084FC] border border-purple-500/30">Live Quote</span>
            </div>

            <div className="mb-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-heading tracking-tight">
                {formatPrice(total)}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Includes data modeling, report deployment & documentation.</p>
            </div>

            <div className="space-y-2 mb-6 text-xs text-slate-800 dark:text-slate-200">
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/50">
                <span className="text-slate-600 dark:text-slate-400">Visualization Engine:</span>
                <span className="font-medium capitalize">{engine}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/50">
                <span className="text-slate-600 dark:text-slate-400">Connected Sources:</span>
                <span className="font-medium">{dataSources} Data Feeds</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/50">
                <span className="text-slate-600 dark:text-slate-400">DAX / ETL Add-ons:</span>
                <span className="font-medium">{selectedServices.length} Selected</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/50">
                <span className="text-slate-600 dark:text-slate-400">Delivery SLA:</span>
                <span className="font-medium">10 - 14 Days</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-700 dark:text-purple-300 flex items-start gap-2 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#6D28D9] dark:text-[#C084FC] shrink-0 mt-0.5" />
              <span>Includes 100% data audit compliance and user video training session.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCopyQuote}
              className="w-full sm:w-1/2 min-h-[44px] py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
            >
              {copied ? <CheckCircle2 className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy BI Spec'}
            </button>

            <a
              href="#contact"
              className="w-full sm:w-1/2 min-h-[44px] py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700"
            >
              <span>Consult BI Architect</span>
              <ArrowRight className="w-4 h-4 text-[#6D28D9] dark:text-[#C084FC]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
