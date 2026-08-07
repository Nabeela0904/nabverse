import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { ArrowRight, ChevronLeft, Quote, ExternalLink } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="container-custom pb-24 space-y-16" style={{ paddingTop: '200px' }}>
      {/* Back Button */}
      <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back to Case Studies
      </Link>

      {/* PROJECT HERO */}
      <div className="card bg-white dark:bg-[#0F172A] rounded-3xl p-8 sm:p-14 border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="max-w-3xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-primary">
              {project.category}
            </span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">• {project.industry}</span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">• Client: {project.clientName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
            {project.tagline}
          </p>

          {/* External Live Link if Available */}
          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 !py-3 !px-6"
              >
                <span>Launch Live Project Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800">
                <span className="text-2xl sm:text-3xl font-black text-[#0284C7] dark:text-[#00F2FE] font-heading block">{m.value}</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 block font-bold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VIDEO WALKTHROUGH PLAYER */}
      {project.videoUrl && (
        <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading">Interactive Video Walkthrough</h3>
            <span className="badge badge-primary">HD Screen Recording</span>
          </div>
          <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
            <video controls controlsList="nodownload" preload="metadata" className="w-full h-auto max-h-[550px] object-contain">
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>
          </div>
        </div>
      )}

      {/* OVERVIEW & TECH STACK */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 space-y-6">
          <h3 className="text-2xl font-black text-slate-950 dark:text-white font-heading">Technical Challenge & Architecture</h3>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{project.challenge}</p>

          <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading pt-4">Engineering Development</h3>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{project.development}</p>
        </div>

        <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 space-y-6">
          <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading">Technologies Deployed</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-[#0A0F1D] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <Link to="/book" className="btn-primary w-full">
              <span>Book Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL QUOTE */}
      {project.testimonial && (
        <div className="card bg-white dark:bg-[#0F172A] p-8 sm:p-12 border border-[#0284C7]/40 dark:border-[#00F2FE]/40 relative">
          <Quote className="w-10 h-10 text-[#0284C7] dark:text-[#00F2FE] mb-4" />
          <p className="text-base sm:text-xl text-slate-800 dark:text-slate-200 font-bold leading-relaxed italic mb-6">
            "{project.testimonial.quote}"
          </p>
          <div className="flex items-center gap-4">
            <div>
              <span className="font-black text-slate-950 dark:text-white block font-heading">{project.testimonial.author}</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-bold">{project.testimonial.role} • {project.testimonial.company}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
