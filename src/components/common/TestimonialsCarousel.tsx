import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/generalData';

export const TestimonialsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[current];

  return (
    <div className="card bg-white dark:bg-[#0F172A] p-8 sm:p-12 md:p-14 rounded-3xl relative overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
      <div className="absolute top-6 right-8 opacity-10 text-[#0284C7] dark:text-[#00F2FE] pointer-events-none">
        <Quote className="w-24 h-24 sm:w-32 sm:h-32" />
      </div>

      <div className="flex items-center gap-1.5 text-amber-400 mb-6">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-400" />
        ))}
      </div>

      <p className="text-lg sm:text-xl md:text-2xl text-slate-950 dark:text-white leading-relaxed font-bold mb-10 max-w-3xl italic">
        "{item.quote}"
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-200 dark:border-slate-800/80">
        <div className="flex items-center gap-4">
          {(item as any).useIcon || !item.image ? (
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0284C7]/20 via-[#6D28D9]/20 to-[#00F2FE]/20 border-2 border-[#0284C7] dark:border-[#00F2FE] flex items-center justify-center text-[#0284C7] dark:text-[#00F2FE] shadow-lg shrink-0">
              <Building2 className="w-7 h-7" />
            </div>
          ) : (
            <img
              src={item.image}
              alt={item.author}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#0284C7] dark:border-[#00F2FE] shadow-lg shrink-0"
            />
          )}
          <div>
            <h5 className="text-base font-black text-slate-950 dark:text-white font-heading">{item.author}</h5>
            <p className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-0.5">
              {item.role} • <span className="text-[#0284C7] dark:text-[#00F2FE] font-black">{item.company}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-3 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-[#00F2FE] hover:border-[#0284C7] dark:hover:border-[#00F2FE] transition-all shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-3 rounded-xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-[#00F2FE] hover:border-[#0284C7] dark:hover:border-[#00F2FE] transition-all shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
