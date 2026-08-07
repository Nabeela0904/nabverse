import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCurrency } from '../../context/CurrencyContext';

export const WebsiteCostCalculator: React.FC = () => {
  const { formatPrice } = useCurrency();
  const [projectType, setProjectType] = useState<'website' | 'app' | 'ecommerce' | 'landing'>('website');
  const [designLevel, setDesignLevel] = useState<'standard' | 'luxury' | 'awwwards'>('luxury');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'cms', 'seo', 'speed'
  ]);
  const [timeline, setTimeline] = useState<'flexible' | 'standard' | 'rush'>('standard');
  const [copied, setCopied] = useState(false);

  const featureOptions = [
    { id: 'cms', label: 'Headless CMS Integration', price: 400, desc: 'Easy content publishing without code' },
    { id: 'auth', label: 'User Auth & Database', price: 700, desc: 'Login, registration & user roles' },
    { id: 'payments', label: 'Stripe & Payment Gateway', price: 500, desc: 'Accept credit cards & subscriptions' },
    { id: 'ai', label: 'AI Chatbot Assistant', price: 600, desc: '24/7 lead capture & support bot' },
    { id: 'seo', label: 'Advanced Technical SEO', price: 350, desc: 'Schema markup & rank targeting' },
    { id: 'speed', label: '95+ Speed Guarantee', price: 300, desc: 'Sub-second mobile loading optimization' },
    { id: 'animation', label: 'Advanced Motion & GSAP', price: 450, desc: '3D micro-interactions & parallax' }
  ];

  const basePrices = {
    landing: 899,
    website: 1499,
    ecommerce: 2499,
    app: 2999
  };

  const designMultipliers = {
    standard: 1,
    luxury: 1.25,
    awwwards: 1.5
  };

  const timelineMultipliers = {
    flexible: 0.95,
    standard: 1,
    rush: 1.3
  };

  const calculateTotal = () => {
    const base = basePrices[projectType];
    const featuresTotal = selectedFeatures.reduce((acc, featId) => {
      const feat = featureOptions.find(f => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);

    const subtotal = (base + featuresTotal) * designMultipliers[designLevel];
    return Math.round(subtotal * timelineMultipliers[timeline]);
  };

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const totalEst = calculateTotal();

  const handleCopyQuote = () => {
    const summary = `NAB DIGITAL STUDIO - PROJECT COST ESTIMATE
Project Type: ${projectType.toUpperCase()}
Design Tier: ${designLevel.toUpperCase()}
Selected Features: ${selectedFeatures.map(f => featureOptions.find(opt => opt.id === f)?.label).join(', ')}
Timeline: ${timeline.toUpperCase()}
ESTIMATED TOTAL: $${totalEst.toLocaleString()} USD
Website: https://nabdigitalstudio.com`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-cyan-500/10 border border-[#0284C7]/30 dark:border-[#00F2FE]/30 text-[#0284C7] dark:text-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-heading">Website & Web App Cost Calculator</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Configure your exact specifications for an instant real-time quote estimate.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1 */}
          <div>
            <label className="text-xs font-bold text-[#0284C7] dark:text-[#00F2FE] uppercase tracking-wider block mb-3 font-heading">1. Select Project Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'landing', label: 'Landing Page', basePrice: 899 },
                { id: 'website', label: 'Custom Website', basePrice: 1499 },
                { id: 'ecommerce', label: 'E-Commerce', basePrice: 2499 },
                { id: 'app', label: 'Web Application', basePrice: 2999 }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setProjectType(item.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    projectType === item.id
                      ? 'bg-cyan-500/15 border-[#0284C7] dark:border-[#00F2FE] text-slate-950 dark:text-white shadow-[0_0_15px_rgba(0,242,254,0.3)] font-bold'
                      : 'bg-slate-100 dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                  }`}
                >
                  <span className="text-sm font-semibold block font-heading">{item.label}</span>
                  <span className="text-xs text-[#0284C7] dark:text-[#00F2FE] font-bold mt-1 block">{formatPrice(item.basePrice)}+</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <label className="text-xs font-bold text-[#6D28D9] dark:text-[#C084FC] uppercase tracking-wider block mb-3 font-heading">2. Design & Aesthetics Tier</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'standard', label: 'Clean Modern', desc: 'Sleek, responsive & minimal' },
                { id: 'luxury', label: 'Minimal Luxury', desc: 'Glassmorphism & smooth motion' },
                { id: 'awwwards', label: 'Awwwards Caliber', desc: 'Bespoke 3D & custom graphics' }
              ].map(tier => (
                <button
                  key={tier.id}
                  onClick={() => setDesignLevel(tier.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    designLevel === tier.id
                      ? 'bg-purple-500/20 border-[#6D28D9] dark:border-[#C084FC] text-slate-950 dark:text-white shadow-[0_0_15px_rgba(138,43,226,0.3)] font-bold'
                      : 'bg-slate-100 dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                  }`}
                >
                  <span className="text-sm font-semibold block font-heading">{tier.label}</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 mt-1 block font-medium">{tier.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <label className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-3 font-heading">3. Additional Features & Capabilities</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {featureOptions.map(feat => (
                <button
                  key={feat.id}
                  onClick={() => toggleFeature(feat.id)}
                  className={`p-3 rounded-xl border text-left flex items-start justify-between transition-all ${
                    selectedFeatures.includes(feat.id)
                      ? 'bg-slate-100 dark:bg-[#0A0F1D] border-emerald-500 text-slate-950 dark:text-slate-100'
                      : 'bg-white dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                  }`}
                >
                  <div>
                    <span className="text-sm font-semibold block font-heading">{feat.label}</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 block font-medium">{feat.desc}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 ml-2">+{formatPrice(feat.price)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="card bg-white dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider font-heading">Estimated Investment</span>
              <span className="badge badge-primary">Live Quote</span>
            </div>

            <div className="mb-6">
              <div className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white font-heading tracking-tight">
                {formatPrice(totalEst)}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">Includes source code, deployment & post-launch warranty.</p>
            </div>

            <div className="space-y-2 mb-6 text-xs text-slate-800 dark:text-slate-200 font-medium">
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">Project Type:</span>
                <span className="font-bold text-slate-950 dark:text-white capitalize">{projectType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">Design Tier:</span>
                <span className="font-bold text-slate-950 dark:text-white capitalize">{designLevel}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400">Add-on Features:</span>
                <span className="font-bold text-[#0284C7] dark:text-[#00F2FE]">{selectedFeatures.length} Included</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-cyan-500/10 border border-[#0284C7]/30 dark:border-[#00F2FE]/30 text-xs text-[#0284C7] dark:text-[#00F2FE] flex items-start gap-2 mb-6 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Includes 100% money-back satisfaction guarantee and 95+ speed score compliance.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCopyQuote}
              className="btn-primary w-full sm:w-1/2 flex items-center justify-center min-h-[44px]"
            >
              <span>{copied ? 'Quote Spec Copied!' : 'Copy Quote Spec'}</span>
            </button>
            
            <a
              href="#contact"
              className="btn-outline w-full sm:w-1/2 text-center flex items-center justify-center min-h-[44px]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
