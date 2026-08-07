import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Package, Filter, Code2, RefreshCw, Eye } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { useCurrency } from '../../context/CurrencyContext';

export const InteractiveBiDemo: React.FC = () => {
  const { formatPrice } = useCurrency();
  const [activeTab, setActiveTab] = useState<'sales' | 'hr' | 'finance' | 'inventory'>('sales');
  const [timeRange, setTimeRange] = useState<'q1' | 'q2' | 'ytd'>('ytd');
  const [showSql, setShowSql] = useState(false);

  // Sales Data
  const salesData = [
    { month: 'Jan', revenue: 42000, arr: 38000, target: 40000 },
    { month: 'Feb', revenue: 48000, arr: 45000, target: 42000 },
    { month: 'Mar', revenue: 59000, arr: 54000, target: 45000 },
    { month: 'Apr', revenue: 63000, arr: 60000, target: 50000 },
    { month: 'May', revenue: 75000, arr: 71000, target: 55000 },
    { month: 'Jun', revenue: 84000, arr: 82000, target: 60000 },
  ];

  // HR Data
  const hrData = [
    { dept: 'Engineering', retention: 96, headcount: 45 },
    { dept: 'Sales', retention: 88, headcount: 30 },
    { dept: 'Design', retention: 94, headcount: 15 },
    { dept: 'Marketing', retention: 91, headcount: 12 },
    { dept: 'Operations', retention: 97, headcount: 18 },
  ];

  // Finance Data
  const financeData = [
    { category: 'R&D', value: 35 },
    { category: 'Payroll', value: 40 },
    { category: 'Marketing', value: 15 },
    { category: 'Software/Cloud', value: 10 },
  ];
  const COLORS = ['#38bdf8', '#818cf8', '#c084fc', '#34d399'];

  // Inventory Data
  const inventoryData = [
    { item: 'SKU-101', stock: 450, reorderPoint: 200, status: 'Optimal' },
    { item: 'SKU-204', stock: 120, reorderPoint: 150, status: 'Low Stock Alert' },
    { item: 'SKU-309', stock: 890, reorderPoint: 300, status: 'Optimal' },
    { item: 'SKU-412', stock: 80, reorderPoint: 100, status: 'Critical Reorder' },
  ];

  const sqlQueries = {
    sales: `SELECT 
  DATE_TRUNC('month', created_at) AS month,
  SUM(amount) AS revenue,
  SUM(mrr * 12) AS arr
FROM enterprise_orders
WHERE status = 'completed' AND created_at >= '2026-01-01'
GROUP BY 1 ORDER BY 1 ASC;`,

    hr: `SELECT 
  department,
  COUNT(employee_id) AS headcount,
  ROUND(AVG(retention_score) * 100, 1) AS retention_pct
FROM hr_workforce_master
WHERE status = 'active'
GROUP BY department;`,

    finance: `SELECT 
  expense_category,
  ROUND(SUM(amount) / SUM(SUM(amount)) OVER() * 100, 1) AS pct_share
FROM company_ledger_2026
GROUP BY expense_category;`,

    inventory: `SELECT 
  sku_code,
  current_stock,
  reorder_threshold,
  CASE 
    WHEN current_stock <= reorder_threshold * 0.5 THEN 'Critical'
    WHEN current_stock <= reorder_threshold THEN 'Low Stock Alert'
    ELSE 'Optimal'
  END AS status
FROM warehouse_inventory;`
  };

  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-[#0284C7] dark:text-[#00F2FE] border border-[#0284C7]/30 dark:border-[#00F2FE]/30">
              Live BI Engine Sandbox
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 animate-spin text-[#0284C7] dark:text-[#00F2FE]" /> Real-Time SQL Sync
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-heading">Interactive Business Intelligence Command Suite</h3>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowSql(!showSql)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              showSql
                ? 'bg-amber-500/20 border-amber-400 text-amber-600 dark:text-amber-300'
                : 'bg-slate-100 dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            {showSql ? 'Hide SQL Query' : 'Inspect SQL'}
          </button>

          <div className="flex items-center bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 rounded-xl p-1 text-xs">
            {(['sales', 'hr', 'finance', 'inventory'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg font-medium capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SQL Query Inspector */}
      {showSql && (
        <div className="mb-6 p-4 rounded-2xl bg-slate-900 dark:bg-slate-950 border border-amber-500/30 text-amber-300 font-mono text-xs overflow-x-auto">
          <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800 text-slate-400 font-sans text-xs">
            <span>Executed SQL Query (PostgreSQL / Snowflake Engine)</span>
            <span className="text-emerald-400 font-mono">Status: 200 OK (Execution Time: 14ms)</span>
          </div>
          <pre>{sqlQueries[activeTab]}</pre>
        </div>
      )}

      {/* Dynamic Tab Views */}
      {activeTab === 'sales' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Total YTD Revenue</span>
              <span className="text-2xl font-bold text-[#0284C7] dark:text-[#00F2FE] font-heading">{formatPrice(371000)}</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 block mt-1">+24.5% vs 2025</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Avg Deal Size</span>
              <span className="text-2xl font-bold text-slate-950 dark:text-white font-heading">{formatPrice(14500)}</span>
              <span className="text-xs text-[#0284C7] dark:text-[#00F2FE] block mt-1">+12% vs target</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Quota Attainment</span>
              <span className="text-2xl font-bold text-slate-950 dark:text-white font-heading">140%</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 block mt-1">Tier 1 Target</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Win Rate</span>
              <span className="text-2xl font-bold text-slate-950 dark:text-white font-heading">38.4%</span>
              <span className="text-xs text-[#6D28D9] dark:text-[#C084FC] block mt-1">+5.2% YoY</span>
            </div>
          </div>

          <div className="overflow-x-auto h-64 pt-4">
            <div className="min-w-[300px] h-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0284C7" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#0284C7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" tickFormatter={(v) => formatPrice(v)} />
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
                  <Area type="monotone" dataKey="revenue" stroke="#0284C7" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'hr' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Total Headcount</span>
              <span className="text-2xl font-bold text-slate-950 dark:text-white font-heading">120 Staff</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Retention Rate</span>
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-heading">94.2%</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Avg Tenure</span>
              <span className="text-2xl font-bold text-slate-950 dark:text-white font-heading">3.4 Years</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Open Roles</span>
              <span className="text-2xl font-bold text-[#6D28D9] dark:text-[#C084FC] font-heading">8 Active</span>
            </div>
          </div>

          <div className="overflow-x-auto h-64 pt-4">
            <div className="min-w-[300px] h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hrData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="dept" stroke="#64748b" />
                  <YAxis stroke="#64748b" domain={[70, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
                  <Bar dataKey="retention" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'finance' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={financeData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value">
                  {financeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-bold text-slate-950 dark:text-white font-heading mb-2">Q2 Operating Expense Distribution</h4>
            {financeData.map((item, idx) => (
              <div key={item.category} className="flex justify-between items-center p-3 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }} />
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.category}</span>
                </div>
                <span className="text-sm font-bold text-slate-950 dark:text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'inventory' && (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-800 dark:text-slate-200">
              <thead className="bg-slate-100 dark:bg-[#0A0F1D] text-slate-600 dark:text-slate-400 uppercase font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">SKU Code</th>
                  <th className="p-3">Stock Units</th>
                  <th className="p-3">Reorder Point</th>
                  <th className="p-3">System Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
                {inventoryData.map(item => (
                  <tr key={item.item} className="hover:bg-slate-100/60 dark:hover:bg-slate-900/40">
                    <td className="p-3 font-mono font-bold text-slate-950 dark:text-white">{item.item}</td>
                    <td className="p-3 font-semibold">{item.stock} Units</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">{item.reorderPoint} Units</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        item.status.includes('Critical')
                          ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                          : item.status.includes('Low')
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
