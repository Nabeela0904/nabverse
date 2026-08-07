import React, { useState } from 'react';
import { X, Send, Sparkles, Bot, User } from 'lucide-react';

export const AiAssistantModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: 'Hello! I am Nab AI Studio Assistant. How can I assist you today with web development, Power BI dashboards, SQL solutions, or project cost estimates?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Thank you for reaching out! Nab Digital Studio specializes in Next.js web applications, Power BI dashboards, SQL optimization, and AI automation. Would you like to schedule a 1-on-1 consultation or calculate a custom project cost?";
      
      const lower = userMsg.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) {
        botResponse = "Our custom Web Development starts from $1,499, Power BI Dashboards from $1,199, and High-Converting Landing Pages from $899. You can use our interactive Website Cost Calculator on this page for an instant itemized spec!";
      } else if (lower.includes('power bi') || lower.includes('dashboard') || lower.includes('bi') || lower.includes('sql')) {
        botResponse = "We build custom enterprise Power BI reports with advanced DAX formulas, Star Schema data modeling, and 1-click executive web dashboards. Check out our live BI Sandbox demo!";
      } else if (lower.includes('contact') || lower.includes('book') || lower.includes('call') || lower.includes('hire')) {
        botResponse = "Awesome! You can book a direct strategy consultation call using the 'Book Consultation' button or contact us directly via WhatsApp at +91 8838811746.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Nab AI Studio Assistant"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl shadow-cyan-500/40 hover:scale-105 transition-all flex items-center gap-2.5 font-bold text-sm border border-cyan-400/50"
      >
        <Sparkles className="w-5 h-5 animate-pulse" aria-hidden="true" />
        <span className="hidden sm:inline">Ask Nab AI</span>
      </button>

      {/* Modal Chat Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div role="dialog" aria-modal="true" aria-label="Nab AI Chat Modal" className="w-full sm:w-[440px] h-[550px] bg-white dark:bg-[#0F172A] rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-8">
            {/* Header */}
            <div className="p-4 bg-white dark:bg-[#0A0F1D] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-[#0284C7]/30 dark:border-[#00F2FE]/30 text-[#0284C7] dark:text-[#00F2FE]">
                  <Bot className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white font-heading flex items-center gap-1.5">
                    Nab AI Studio Assistant <Sparkles className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00F2FE]" aria-hidden="true" />
                  </h4>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping inline-block" /> Online 24/7 Consultation
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close AI Chat Assistant"
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'bot' && (
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-[#0284C7] dark:text-[#00F2FE] shrink-0">
                      <Bot className="w-4 h-4" aria-hidden="true" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      m.sender === 'user'
                        ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-medium rounded-tr-none'
                        : 'bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.sender === 'user' && (
                    <div className="p-1.5 rounded-lg bg-purple-500/10 text-[#6D28D9] dark:text-[#C084FC] shrink-0">
                      <User className="w-4 h-4" aria-hidden="true" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 italic text-xs">
                  <Bot className="w-3.5 h-3.5 animate-spin text-[#0284C7] dark:text-[#00F2FE]" aria-hidden="true" /> Nab AI is typing...
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-white dark:bg-[#0A0F1D] border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about web dev, Power BI, pricing..."
                aria-label="Type your message to Nab AI"
                className="flex-1 px-3 py-2 rounded-xl bg-white dark:bg-[#0A0F1D] text-slate-950 dark:text-white border border-slate-300 dark:border-slate-800 placeholder:text-slate-500 dark:placeholder:text-slate-400 text-xs focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00F2FE]"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="p-2 rounded-xl bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
