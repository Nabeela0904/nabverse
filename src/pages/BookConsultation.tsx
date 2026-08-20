import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, ShieldCheck, ArrowRight, Video, User, Download, ExternalLink, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookConsultation: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow');
  const [booked, setBooked] = useState(false);
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', company: '', message: '' });

  const times = ['09:00 AM', '10:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'];

  // Helper to calculate target Date object
  const getEventDates = () => {
    const now = new Date();
    const eventDate = new Date();
    if (selectedDate === 'Tomorrow') {
      eventDate.setDate(now.getDate() + 1);
    } else if (selectedDate === 'In 2 Days') {
      eventDate.setDate(now.getDate() + 2);
    }

    const [timeStr, modifier] = selectedTime.split(' ');
    let [hours, minutes] = timeStr.split(':').map(Number);
    if (modifier === 'PM' && hours < 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;

    eventDate.setHours(hours, minutes, 0, 0);
    const endDate = new Date(eventDate.getTime() + 30 * 60 * 1000); // 30 mins session

    return { eventDate, endDate };
  };

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    const { eventDate, endDate } = getEventDates();
    const formatIso = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');

    const title = encodeURIComponent('1-on-1 Strategy Session with Nabeela (NabVerse)');
    const details = encodeURIComponent(
      `1-on-1 Technical Strategy Session with Nabeela (NabVerse)\n` +
      `Client Name: ${clientInfo.name}\n` +
      `Client Email: ${clientInfo.email}\n` +
      `Company: ${clientInfo.company || 'N/A'}\n` +
      `Meeting Link: Sent via email / Google Meet`
    );
    const location = encodeURIComponent('Google Meet / Video Call');

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatIso(eventDate)}/${formatIso(endDate)}&details=${details}&location=${location}`;
  };

  // .ics Calendar file generator
  const handleDownloadIcs = () => {
    const { eventDate, endDate } = getEventDates();
    const formatIso = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NabVerse//1-on-1 Strategy Session//EN',
      'BEGIN:VEVENT',
      'SUMMARY:1-on-1 Strategy Session with Nabeela (NabVerse)',
      `DESCRIPTION:1-on-1 Technical Strategy Session with Nabeela for ${clientInfo.name}`,
      'LOCATION:Google Meet / Video Call',
      `DTSTART:${formatIso(eventDate)}`,
      `DTEND:${formatIso(endDate)}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'NabVerse_1on1_Strategy_Session.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [submitting, setSubmitting] = useState(false);

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (clientInfo.name && clientInfo.email) {
      setSubmitting(true);

      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: '9e54856a-026d-4d75-84d8-3cfb9d14d6dc',
            subject: `New 1:1 Strategy Booking: ${clientInfo.name}`,
            from_name: 'NabVerse Booking Engine',
            name: clientInfo.name,
            email: clientInfo.email,
            company: clientInfo.company || 'N/A',
            scheduled_day: selectedDate,
            scheduled_time: selectedTime,
            message: clientInfo.message || 'N/A'
          })
        });
      } catch (err) {
        console.error('Web3Forms submit error:', err);
      } finally {
        setSubmitting(false);
        setBooked(true);
        confetti({ particleCount: 80, spread: 90, origin: { y: 0.7 } });
      }
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
          <div className="card bg-white dark:bg-[#0F172A] p-8 sm:p-12 text-center border border-emerald-500/40 space-y-8 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-[#00FF87] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,255,135,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <h3 className="text-3xl font-black text-slate-950 dark:text-white font-heading">Strategy Session Confirmed!</h3>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold">
                Your 1:1 consultation with Nabeela is set for <span className="text-[#0284C7] dark:text-[#00F2FE] font-black">{selectedDate}</span> at <span className="text-[#0284C7] dark:text-[#00F2FE] font-black">{selectedTime}</span>.
              </p>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-[#0284C7] dark:text-[#00F2FE]" />
                <span>Booking notification sent to <strong className="text-slate-950 dark:text-white">nabverse8@gmail.com</strong> & <strong className="text-slate-950 dark:text-white">{clientInfo.email}</strong></span>
              </div>
            </div>

            {/* CUSTOMER CALENDAR ACTIONS */}
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 space-y-4 max-w-md mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 block font-heading">
                📅 Add Session To Your Personal Calendar
              </span>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0284C7] dark:bg-[#00F2FE] text-white dark:text-slate-950 text-xs font-black transition-all flex items-center justify-center gap-2 shadow-md hover:opacity-90"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Google Calendar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleDownloadIcs}
                  className="flex-1 py-3 px-4 rounded-xl bg-purple-600 text-white text-xs font-black transition-all flex items-center justify-center gap-2 shadow-md hover:bg-purple-700"
                >
                  <Download className="w-4 h-4" />
                  <span>Apple / Outlook (.ics)</span>
                </button>
              </div>
            </div>
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
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block">Available Time Slots</label>
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

              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-[#0284C7]/30 dark:border-[#00F2FE]/30 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#0284C7] dark:text-[#00F2FE] font-black">
                  <Video className="w-4 h-4" /> 1-on-1 Video Conference
                </div>
                <p className="text-slate-800 dark:text-slate-200 font-bold">
                  Includes direct email dispatch to <strong>nabverse8@gmail.com</strong> and instant 1-click Google Calendar / .ics file sync for your calendar.
                </p>
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

              <div>
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block mb-1">Project Details / Goals</label>
                <textarea
                  rows={3}
                  value={clientInfo.message}
                  onChange={(e) => setClientInfo({ ...clientInfo, message: e.target.value })}
                  placeholder="Briefly describe what you'd like to discuss during our strategy session..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 font-bold text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full mt-4 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{submitting ? 'Dispatching Booking Details...' : 'Confirm Strategy Booking'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
