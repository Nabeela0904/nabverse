import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ShieldCheck, ArrowRight, Video, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookConsultation: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>('10:00 AM');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow');
  const [booked, setBooked] = useState(false);
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', company: '' });

  const times = ['09:00 AM', '10:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientInfo.name && clientInfo.email) {
      setBooked(true);
      confetti({ particleCount: 80, spread: 90, origin: { y: 0.7 } });
    }
  };

  return (
    <div className="container-custom pb-24 space-y-16" style={{ paddingTop: '200px' }}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
          EXECUTIVE STRATEGY SESSION
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
          Schedule Your 1-on-1 Scoping Call
        </h1>
        <p className="text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed pt-2">
          Book a 30-minute technical roadmap session with Nabeela and our lead solution architects. We will evaluate your current digital setup and outline your growth options.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {booked ? (
          <div className="card bg-white dark:bg-[#0F172A] p-12 text-center border border-emerald-500/40 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-[#00FF87] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-slate-950 dark:text-white font-heading">Strategy Session Confirmed!</h3>
            <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold max-w-md mx-auto">
              Calendar invite and Google Meet link sent to <span className="text-[#0284C7] dark:text-[#00F2FE] font-black">{clientInfo.email}</span> for {selectedDate} at {selectedTime}.
            </p>
          </div>
        ) : (
          <div className="card bg-white dark:bg-[#0F172A] p-8 sm:p-12 border border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Slot Picker */}
            <div className="space-y-6">
              <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading">1. Select Consultation Slot</h3>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block">Preferred Day</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Today', 'Tomorrow', 'In 2 Days'].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDate(day)}
                      className={`p-3 rounded-xl text-xs font-black border transition-all ${
                        selectedDate === day
                          ? 'bg-[#0284C7] dark:bg-[#00F2FE] text-white dark:text-slate-950 border-[#0284C7] dark:border-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                          : 'bg-slate-100 dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block">Available Time Slots (EST)</label>
                <div className="grid grid-cols-2 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`p-3 rounded-xl text-xs font-black border transition-all flex items-center gap-2 ${
                        selectedTime === t
                          ? 'bg-[#6D28D9] dark:bg-[#8A2BE2] text-white border-[#6D28D9] dark:border-[#8A2BE2] shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                          : 'bg-slate-100 dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Client Form */}
            <form onSubmit={handleBook} className="space-y-4">
              <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading">2. Your Contact Details</h3>

              <div>
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  placeholder="Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1">Business Email *</label>
                <input
                  type="email"
                  required
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1">Company / Project Name</label>
                <input
                  type="text"
                  value={clientInfo.company}
                  onChange={(e) => setClientInfo({ ...clientInfo, company: e.target.value })}
                  placeholder="Apex Care Telehealth"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full mt-4"
              >
                <span>Confirm Strategy Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
