import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'custom-website',
    budget: '$2,500 - $5,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.7 } });

      const mailSubject = encodeURIComponent(`New Studio Inquiry from ${formData.name}`);
      const mailBody = encodeURIComponent(
        `NEW STUDIO INQUIRY\n` +
        `----------------------------------------\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'N/A'}\n` +
        `Company: ${formData.company || 'N/A'}\n` +
        `Service Category: ${formData.service}\n` +
        `Budget Tier: ${formData.budget}\n` +
        `Project Notes:\n${formData.message}\n\n` +
        `Sent to: nabverse8@gmail.com`
      );

      window.open(`mailto:nabverse8@gmail.com?subject=${mailSubject}&body=${mailBody}`, '_blank');
    }
  };

  return (
    <div className="container-custom pb-24 space-y-16" style={{ paddingTop: '200px' }}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
          DIRECT STUDIO ACCESS
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
          Let’s Build Something Exceptional
        </h1>
        <p className="text-base text-slate-800 dark:text-slate-200 font-semibold pt-2">
          Have a project in mind or need executive technical advisory? Fill out the form below or chat directly on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="card bg-white dark:bg-[#0F172A] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading">Studio Direct Info</h3>
            
            <div className="space-y-5 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-[#0284C7] dark:text-[#00F2FE] shrink-0 border border-[#0284C7]/30 dark:border-[#00F2FE]/30">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400 font-bold block">Executive Email</span>
                  <a href="mailto:nabverse8@gmail.com" className="text-slate-950 dark:text-white font-black hover:text-[#0284C7] dark:hover:text-[#00F2FE] text-sm">nabverse8@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-[#6D28D9] dark:text-[#C084FC] shrink-0 border border-purple-500/30">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400 font-bold block">Direct Line</span>
                  <a href="tel:+918838811746" className="text-slate-950 dark:text-white font-black hover:text-[#6D28D9] dark:hover:text-[#C084FC] text-sm">+91 8838811746</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-[#00FF87] shrink-0 border border-emerald-500/30">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400 font-bold block">WhatsApp Direct Chat</span>
                  <a href="https://wa.me/918838811746" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-[#00FF87] font-black hover:underline text-sm">
                    Start Instant WhatsApp Chat →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-white dark:bg-[#0F172A] rounded-3xl p-6 border border-emerald-500/40 bg-emerald-500/10 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-[#00FF87] font-black">
              <Clock className="w-4 h-4" /> SLA Response Time SLA
            </div>
            <p className="text-slate-800 dark:text-slate-200 font-bold">We guarantee an initial response and project feasibility review within 2 hours during business hours.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="card bg-white dark:bg-[#0F172A] rounded-3xl p-12 text-center border border-emerald-500/40 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-[#00FF87] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-950 dark:text-white font-heading">Inquiry Received Successfully!</h3>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold max-w-md mx-auto">
                Thank you, {formData.name}. Our senior architects are reviewing your specifications and will get back to you within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card bg-white dark:bg-[#0F172A] rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-2xl font-black text-slate-950 dark:text-white font-heading">Submit Project Specification</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1.5 font-heading">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1.5 font-heading">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1.5 font-heading">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 8838811746"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1.5 font-heading">Company / Brand Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Aegis Global"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1.5 font-heading">Service Practice Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                  >
                    <option value="custom-website">Custom Website Development</option>
                    <option value="web-app">Web Application / SaaS</option>
                    <option value="power-bi">Power BI & Data Solutions</option>
                    <option value="excel-auto">Excel Dashboard Automation</option>
                    <option value="ai-auto">AI Integrations & Automation</option>
                    <option value="consulting">Technical Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1.5 font-heading">Target Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                  >
                    <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                    <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1.5 font-heading">Project Details & Requirements</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project goals, timelines, and target metrics..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry for Review</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
