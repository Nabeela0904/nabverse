import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, BarChart2, Shield, Sparkles, Code, Database, Zap, ChevronDown } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { INDUSTRIES_SERVED, FAQ_ITEMS } from '../data/generalData';
import { WebsiteCostCalculator } from '../components/tools/WebsiteCostCalculator';
import { InteractiveBiDemo } from '../components/tools/InteractiveBiDemo';
import { RoiCalculator } from '../components/tools/RoiCalculator';
import { StatsCounter } from '../components/common/StatsCounter';
import { TestimonialsCarousel } from '../components/common/TestimonialsCarousel';
import { useCurrency } from '../context/CurrencyContext';

export const Home: React.FC = () => {
  const { formatPrice } = useCurrency();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeToolTab, setActiveToolTab] = useState<'calculator' | 'bi-demo' | 'roi'>('calculator');

  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredProjects = PORTFOLIO_PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. CYBER HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center pt-28 sm:pt-36 md:pt-[140px] pb-16 sm:pb-24 overflow-hidden grid-bg">
        {/* Ambient Neon Blobs */}
        <div className="absolute top-1/4 left-1/10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00F2FE]/15 rounded-full blur-[100px] sm:blur-[140px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#8A2BE2]/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#FF007F]/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] animate-pulse shadow-[0_0_8px_#00F2FE]" />
                THINK BIGGER. BUILD BETTER.
              </span>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.1] font-heading">
                  Building Websites.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#8A2BE2] to-[#FF007F]">
                    Creating Insights.
                  </span>{' '}
                  Growing Businesses.
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-slate-800 dark:text-slate-200 font-semibold leading-relaxed max-w-[42rem] mx-auto lg:mx-0">
                  We help startups, small businesses, healthcare clinics, restaurants, and growing enterprises establish an awarded digital presence with Next.js web3 architectures, Power BI dashboards, and AI automation.
                </p>
              </div>

              {/* Checkpoints */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-2.5 pt-1 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" />
                  <span>95+ Lighthouse Score</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" />
                  <span>Data-Driven ROI Metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" />
                  <span>100% Custom React Dev</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link to="/book" className="btn-primary">
                  <span>Book Scoping Session</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <a href="#interactive-tools" className="btn-outline">
                  <span>Explore Interactive Tools</span>
                </a>
              </div>
            </div>

            {/* Right HUD Floating Visual Cards */}
            <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] md:h-[420px] w-full max-w-[340px] sm:max-w-[420px] md:max-w-[450px] mx-auto flex items-center justify-center select-none overflow-hidden sm:overflow-visible">
              <div className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tr from-[#00F2FE]/30 via-[#8A2BE2]/30 to-[#FF007F]/20 opacity-40 blur-[70px] sm:blur-[90px] rounded-full pointer-events-none" />

              {/* Card 1 */}
              <div className="absolute top-4 sm:top-6 right-0 w-52 sm:w-64 card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[9px] sm:text-[10px] font-black text-[#0284C7] dark:text-[#00F2FE] uppercase tracking-widest font-heading">
                    Monthly Conversion
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 dark:text-[#00FF87] bg-emerald-500/15 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-500/40">
                    +42.3%
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white font-heading">$18,400</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-bold">USD</span>
                </div>
                <div className="h-8 sm:h-10 flex items-end gap-1 sm:gap-1.5">
                  {[40, 55, 48, 65, 50, 75, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-grow bg-gradient-to-t from-[#00F2FE]/30 to-[#00F2FE] rounded-sm shadow-[0_0_8px_#00F2FE]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Card 2 */}
              <div className="absolute bottom-4 sm:bottom-6 left-0 w-48 sm:w-60 card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-2xl">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-full border-2 border-emerald-500 dark:border-[#00FF87] flex items-center justify-center text-xs font-black text-emerald-600 dark:text-[#00FF87] bg-emerald-500/15 shadow-[0_0_15px_rgba(0,255,135,0.3)]">
                    98
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-950 dark:text-white block leading-tight font-heading">
                      Lighthouse Speed
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-extrabold text-[#0284C7] dark:text-[#00F2FE] uppercase tracking-widest font-heading">
                      Next.js Web3 Engine
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 w-40 sm:w-48 card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex items-center gap-2 sm:gap-2.5 shadow-2xl">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-[#FF007F]/15 border border-[#FF007F]/30 flex items-center justify-center text-[#FF007F]">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[9px] font-extrabold text-slate-600 dark:text-slate-400 uppercase tracking-wider block font-heading">
                    ROI Rate
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-950 dark:text-white font-heading">
                    3.5x Return
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 sm:py-16 relative">
        <div className="container-custom">
          <StatsCounter />
        </div>
      </section>

      {/* 3. VALUE-FIRST INTERACTIVE TOOLS SUITE */}
      <section id="interactive-tools" className="py-16 sm:py-24 md:py-28 relative">
        <div className="container-custom">
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
              VALUE-FIRST INTERACTIVE SUITE
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white font-heading">
              Instant Pricing & ROI Intelligence Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold max-w-2xl mx-auto">
              Calculate exact investment specs, simulate business intelligence dashboards, and estimate revenue growth before spending a single dollar.
            </p>

            {/* Tool Tab Controls */}
            <div className="flex justify-center pt-4 sm:pt-6">
              <div className="inline-flex flex-col sm:flex-row bg-slate-100 dark:bg-[#0A0F1D] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 gap-1.5 shadow-lg w-full sm:w-auto">
                <button
                  onClick={() => setActiveToolTab('calculator')}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                    activeToolTab === 'calculator' ? 'bg-[#0284C7] dark:bg-[#00F2FE] text-white dark:text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'text-slate-800 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-white'
                  }`}
                >
                  Website Cost Calculator
                </button>
                <button
                  onClick={() => setActiveToolTab('bi-demo')}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                    activeToolTab === 'bi-demo' ? 'bg-[#6D28D9] dark:bg-[#8A2BE2] text-white shadow-[0_0_15px_rgba(138,43,226,0.4)]' : 'text-slate-800 dark:text-slate-200 hover:text-[#6D28D9] dark:hover:text-white'
                  }`}
                >
                  Live BI Sandbox Demo
                </button>
                <button
                  onClick={() => setActiveToolTab('roi')}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                    activeToolTab === 'roi' ? 'bg-emerald-600 dark:bg-[#00FF87] text-white dark:text-slate-950 shadow-[0_0_15px_rgba(0,255,135,0.4)]' : 'text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-white'
                  }`}
                >
                  ROI Growth Estimator
                </button>
              </div>
            </div>
          </div>

          <div className="transition-all duration-300">
            {activeToolTab === 'calculator' && <WebsiteCostCalculator />}
            {activeToolTab === 'bi-demo' && <InteractiveBiDemo />}
            {activeToolTab === 'roi' && <RoiCalculator />}
          </div>
        </div>
      </section>

      {/* 4. FEATURED CORE SERVICES */}
      <section className="py-16 sm:py-24 md:py-28 relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/15 text-[#6D28D9] dark:text-[#C084FC] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(138,43,226,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#6D28D9] dark:bg-[#C084FC] shadow-[0_0_8px_#8A2BE2]" />
                FULL STACK CAPABILITIES
              </span>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white font-heading">
                Specialized Digital Practices
              </h2>
            </div>

            <Link
              to="/services"
              className="text-xs sm:text-sm font-extrabold text-[#0284C7] dark:text-[#00F2FE] hover:underline flex items-center gap-1.5 shrink-0"
            >
              <span>View All 18 Service Pages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7] dark:hover:border-[#00F2FE]/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-[#0284C7] dark:text-[#00F2FE] group-hover:scale-110 transition-transform">
                      <Code className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Starting from <span className="text-slate-950 dark:text-white font-heading font-black text-sm">{formatPrice(service.priceStarting)}</span></span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading mb-3 group-hover:text-[#0284C7] dark:group-hover:text-[#00F2FE] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed mb-6 font-semibold">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-[#0A0F1D] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-950 dark:text-white text-xs font-bold transition-all flex items-center justify-between border border-slate-200 dark:border-slate-800"
                  >
                    <span>Explore Service Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00F2FE] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO CASE STUDIES */}
      <section className="py-16 sm:py-24 md:py-28 relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#FF007F]/40 bg-[#FF007F]/15 text-[#BE185D] dark:text-[#FF77BC] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(255,0,127,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#FF007F] shadow-[0_0_8px_#FF007F]" />
                PROVEN TRACK RECORD
              </span>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white font-heading">
                Client Success Outcomes
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="text-xs sm:text-sm font-extrabold text-[#0284C7] dark:text-[#00F2FE] hover:underline flex items-center gap-1.5 shrink-0"
            >
              <span>Explore All 6 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7] dark:hover:border-[#00F2FE]/40 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-primary">
                      {project.category}
                    </span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{project.industry}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white font-heading group-hover:text-[#0284C7] dark:group-hover:text-[#00F2FE] transition-colors">{project.title}</h3>
                  <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{project.shortDesc}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <span className="text-xl sm:text-2xl font-black text-[#0284C7] dark:text-[#00F2FE] font-heading block">{m.value}</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 block font-bold">{m.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/portfolio/${project.slug}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-950 dark:text-white text-xs font-bold transition-all flex items-center justify-between border border-slate-200 dark:border-slate-800"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AGILE METHODOLOGY */}
      <section className="py-16 sm:py-24 md:py-28 relative">
        <div className="container-custom">
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
              OUR AGILE PROCESS
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white font-heading">
              From Discovery to 95+ Speed Deployment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Data Audit & Specs', desc: 'Requirements scoping, database schema mapping, and wireframe approval.' },
              { step: '02', title: 'Luxury UI/UX Blueprint', desc: 'Custom glassmorphism design system in Figma with zero templates.' },
              { step: '03', title: 'Next.js & BI Build', desc: 'TypeScript code, Power BI DAX modeling, and automated backend APIs.' },
              { step: '04', title: 'Launch & Growth', desc: '95+ speed score deployment, analytics tracking, and continuous scaling.' }
            ].map((item, idx) => (
              <div key={idx} className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7] dark:hover:border-[#00F2FE]/40 space-y-3">
                <span className="text-3xl sm:text-4xl font-black text-[#0284C7] dark:text-[#00F2FE] font-heading block">{item.step}</span>
                <h4 className="text-base sm:text-lg font-black text-slate-950 dark:text-white font-heading">{item.title}</h4>
                <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES SERVED */}
      <section className="py-16 sm:py-24 relative">
        <div className="container-custom">
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 dark:text-white font-heading">
              Built for High-Growth Verticals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {INDUSTRIES_SERVED.map((ind) => (
              <div key={ind.name} className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7] dark:hover:border-[#00F2FE]/40">
                <h4 className="text-base sm:text-lg font-black text-slate-950 dark:text-white font-heading mb-2">{ind.name}</h4>
                <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS */}
      <section className="py-16 sm:py-24 md:py-28 relative">
        <div className="container-custom">
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/15 text-[#6D28D9] dark:text-[#C084FC] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(138,43,226,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#6D28D9] dark:bg-[#C084FC] shadow-[0_0_8px_#8A2BE2]" />
              CLIENT FEEDBACK
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white font-heading">
              What Founders & Executives Say
            </h2>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="py-16 sm:py-24 relative">
        <div className="container-custom max-w-4xl">
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 dark:text-white font-heading">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 overflow-hidden !p-0">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between font-black text-slate-950 dark:text-white text-xs sm:text-sm font-heading"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#0284C7] dark:text-[#00F2FE] shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs text-slate-800 dark:text-slate-200 leading-relaxed border-t border-slate-200 dark:border-slate-800/60 pt-4 font-semibold">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL LEAD GEN CTA BANNER */}
      <section className="py-16 sm:py-20 relative">
        <div className="container-custom">
          <div className="card bg-white dark:bg-[#0F172A] p-8 sm:p-16 border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white font-heading mb-4 max-w-3xl mx-auto">
              Ready to Build Your Enterprise Digital Asset?
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold mb-8 max-w-2xl mx-auto">
              Schedule an executive scoping call with Nabeela. We will audit your current site, review data sources, and provide a fixed quote estimate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/book" className="btn-primary w-full sm:w-auto">
                <span>Book 30-Min Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-outline w-full sm:w-auto">
                <span>Submit RFP / Inquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
