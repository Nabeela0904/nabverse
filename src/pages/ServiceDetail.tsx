import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, ShieldCheck, Code, HelpCircle, PhoneCall, ChevronLeft } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export const ServiceDetail: React.FC = () => {
  const { formatPrice } = useCurrency();
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="container-custom pb-24 space-y-20" style={{ paddingTop: '200px' }}>
      {/* Back Button */}
      <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back to All Services
      </Link>

      {/* SERVICE HERO */}
      <div className="card bg-white dark:bg-[#0F172A] rounded-3xl p-8 sm:p-14 border border-slate-200 dark:border-slate-800 relative overflow-hidden space-y-6">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] border border-[#0284C7]/40 dark:border-[#00F2FE]/40 capitalize">
            <Sparkles className="w-3.5 h-3.5" /> {service.category.replace('-', ' ')} Service Blueprint
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
            {service.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-bold text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-slate-600 dark:text-slate-400 block font-semibold">Investment Starting From</span>
              <span className="text-2xl font-black text-slate-950 dark:text-white font-heading">{formatPrice(service.priceStarting)}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link to="/book" className="btn-primary">
              <span>Book Service Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* PAIN vs SOLUTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-white dark:bg-[#0F172A] p-8 space-y-4 border border-rose-500/30 bg-rose-500/5">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-black">
            <AlertCircle className="w-5 h-5" /> The Common Market Problem
          </div>
          <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{service.problem}</p>
        </div>

        <div className="card bg-white dark:bg-[#0F172A] p-8 space-y-4 border border-emerald-500/40 bg-emerald-500/10">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-[#00FF87] font-black">
            <CheckCircle2 className="w-5 h-5" /> Nab Digital Studio Solution
          </div>
          <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{service.solution}</p>
        </div>
      </div>

      {/* DELIVERABLES & PROCESS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 space-y-6">
          <h3 className="text-2xl font-black text-slate-950 dark:text-white font-heading">Key Technical Deliverables</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE] shrink-0 mt-0.5" />
                <span className="text-slate-800 dark:text-slate-200">{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 space-y-6">
          <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading">Execution Phases</h3>
          <div className="space-y-4">
            {service.process.map((stepItem, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-[#0284C7] dark:text-[#00F2FE] font-black flex items-center justify-center shrink-0">
                  {stepItem.step}
                </div>
                <div>
                  <h4 className="font-black text-slate-950 dark:text-white font-heading">{stepItem.title}</h4>
                  <p className="text-[11px] text-slate-800 dark:text-slate-200 font-semibold">{stepItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
