import React, { useState } from 'react';
import { TrendingUp, Coins, Users, ArrowUpRight } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useCurrency } from '../../context/CurrencyContext';

export const RoiCalculator: React.FC = () => {
  const { formatPrice } = useCurrency();
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(35000);
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(10000);
  const [currentConvRate, setCurrentConvRate] = useState<number>(1.5);
  const [targetConvRate, setTargetConvRate] = useState<number>(3.2);

  // Calculations
  const averageOrderValue = monthlyVisitors > 0 && currentConvRate > 0 
    ? monthlyRevenue / (monthlyVisitors * (currentConvRate / 100))
    : 200;

  const currentMonthlyConversions = Math.round(monthlyVisitors * (currentConvRate / 100));
  const projectedMonthlyConversions = Math.round(monthlyVisitors * (targetConvRate / 100));
  
  const projectedMonthlyRevenue = Math.round(projectedMonthlyConversions * averageOrderValue);
  const monthlyRevenueGain = projectedMonthlyRevenue - monthlyRevenue;
  const annualRevenueGain = monthlyRevenueGain * 12;

  const estimatedAgencyInvestment = 2499;
  const roiMultiple = Math.round((annualRevenueGain / estimatedAgencyInvestment) * 10) / 10;

  const chartData = [
    { name: 'Current Monthly', revenue: monthlyRevenue },
    { name: 'Projected Monthly', revenue: projectedMonthlyRevenue },
  ];

  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-heading">ROI & Business Growth Calculator</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Project your additional monthly and annual revenue gain from conversion rate optimization.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Monthly Revenue Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <Coins className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Current Monthly Revenue
              </label>
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{formatPrice(monthlyRevenue)}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="250000"
              step="5000"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 dark:accent-emerald-400"
            />
          </div>

          {/* Monthly Visitors Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00F2FE]" /> Monthly Website Visitors
              </label>
              <span className="text-sm font-bold text-[#0284C7] dark:text-[#00F2FE]">{monthlyVisitors.toLocaleString()} Visitors</span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0284C7] dark:accent-[#00F2FE]"
            />
          </div>

          {/* Conversion Rates Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-2">Current Conversion Rate</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="10"
                  value={currentConvRate}
                  onChange={(e) => setCurrentConvRate(parseFloat(e.target.value) || 1)}
                  className="w-20 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0A0F1D] border border-slate-300 dark:border-slate-800 text-slate-950 dark:text-white font-bold text-sm"
                />
                <span className="text-slate-600 dark:text-slate-400 text-sm">%</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-2 block">~{currentMonthlyConversions} conversions/mo</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-emerald-500/30">
              <label className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-2">Target Conversion Rate</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.1"
                  min="0.5"
                  max="15"
                  value={targetConvRate}
                  onChange={(e) => setTargetConvRate(parseFloat(e.target.value) || 2)}
                  className="w-20 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0A0F1D] border border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold text-sm"
                />
                <span className="text-emerald-600 dark:text-emerald-400 text-sm">%</span>
              </div>
              <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 block">~{projectedMonthlyConversions} conversions/mo</span>
            </div>
          </div>

          {/* Recharts Revenue Bar Visualizer */}
          <div className="overflow-x-auto h-48 pt-4">
            <div className="min-w-[280px] h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} tickFormatter={(v) => formatPrice(v)} />
                  <Tooltip
                    labelStyle={{ color: '#00F2FE', fontWeight: '800', fontSize: '13px', marginBottom: '4px' }}
                    itemStyle={{ color: '#38bdf8', fontWeight: '700', fontSize: '12px' }}
                    contentStyle={{
                      backgroundColor: '#0A0F1D',
                      borderColor: '#0284C7',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                      padding: '10px 14px'
                    }}
                    formatter={(val: any) => [formatPrice(Number(val)), 'Revenue']}
                  />
                  <Bar dataKey="revenue" fill="#0284C7" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Growth Projection Card */}
        <div className="bg-white dark:bg-[#0A0F1D] rounded-2xl p-6 border border-emerald-500/30 flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-4">Projected Growth Impact</span>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Additional Monthly Revenue</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-heading">+{formatPrice(monthlyRevenueGain)}</span>
              </div>

              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Projected Annual Revenue Gain</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0284C7] dark:text-[#00F2FE] font-heading">+{formatPrice(annualRevenueGain)}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400 block">Estimated ROI</span>
                  <span className="text-lg font-bold text-amber-600 dark:text-amber-400 font-heading">{roiMultiple}x Return</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400 block">Avg Order Value</span>
                  <span className="text-lg font-bold text-slate-950 dark:text-white font-heading">{formatPrice(Math.round(averageOrderValue))}</span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
          >
            <span>Unlock Your Growth Plan</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
