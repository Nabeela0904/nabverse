import React from 'react';
import { PRICING_TIERS } from '../data/generalData';
import { Check, ArrowRight, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCurrency, CURRENCIES, CurrencyCode } from '../context/CurrencyContext';

export const Pricing: React.FC = () => {
  const { formatPrice, currency, setCurrency, detectedCountry } = useCurrency();

  return (
    <div className="container-custom pb-32 space-y-16" style={{ paddingTop: '200px' }}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
          TRANSPARENT VALUE-BASED PRICING
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
          Predictable Fixed Investment. Zero Hidden Costs.
        </h1>
        <p className="text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed pt-2">
          Every tier includes full source code ownership, 95+ speed score compliance, responsive UX design, and dedicated post-launch support.
        </p>

        {/* Dynamic Country & Currency Switcher Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 max-w-2xl mx-auto shadow-lg">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
            <Coins className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" />
            <span>Localized Pricing for: </span>
            <span className="font-black text-[#0284C7] dark:text-[#00F2FE]">{detectedCountry || 'Global / Automatic'}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {Object.keys(CURRENCIES).map((cCode) => {
              const c = CURRENCIES[cCode as CurrencyCode];
              return (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                    currency === c.code
                      ? 'bg-[#0284C7] dark:bg-[#00F2FE] text-white dark:text-slate-950 shadow-md'
                      : 'bg-slate-100 dark:bg-[#04060C] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-[#0284C7]'
                  }`}
                >
                  {c.code} ({c.symbol})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`card bg-white dark:bg-[#0F172A] flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              tier.popular
                ? 'border-2 border-[#0284C7] dark:border-[#00F2FE] shadow-[0_0_35px_rgba(0,242,254,0.25)] scale-105'
                : 'border border-slate-200 dark:border-slate-800'
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#00F2FE] to-[#8A2BE2] text-white text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl tracking-widest shadow-md">
                MOST POPULAR
              </div>
            )}

            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-950 dark:text-white font-heading mb-1">{tier.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">{tier.subtitle}</p>
              </div>

              <div className="mb-8">
                <span className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white font-heading">
                  {currency === 'INR' && tier.priceInr
                    ? `₹${tier.priceInr.toLocaleString('en-IN')}`
                    : formatPrice(tier.price)}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-bold ml-1.5">
                  {tier.period === '/month' ? '/ month' : 'Fixed Investment'}
                </span>
                {currency === 'INR' && tier.priceInr && (
                  <span className="block text-[11px] font-extrabold text-[#059669] dark:text-[#00FF87] mt-1">
                    Special Indian Client Regional Discount
                  </span>
                )}
              </div>

              <div className="space-y-3 mb-8 text-xs font-semibold">
                {tier.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-800 dark:text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              <Link
                to="/book"
                className={`w-full text-center ${tier.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                <span>Select {tier.name} Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
