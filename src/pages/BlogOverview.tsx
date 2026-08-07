import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';

export const BlogOverview: React.FC = () => {
  return (
    <div className="container-custom pb-24 space-y-16" style={{ paddingTop: '200px' }}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0284C7]/40 dark:border-[#00F2FE]/40 bg-cyan-500/15 text-[#0284C7] dark:text-[#00F2FE] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
          EXECUTIVE THOUGHT LEADERSHIP
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
          Engineering Insights, BI Strategies & AI Growth
        </h1>
        <p className="text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed pt-2">
          Actionable technical breakdowns, CRO frameworks, and data architecture guides written by our senior engineering team.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7] dark:hover:border-[#00F2FE]/40 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge badge-primary">
                  {post.category}
                </span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-950 dark:text-white font-heading group-hover:text-[#0284C7] dark:group-hover:text-[#00F2FE] transition-colors">{post.title}</h3>
              <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">{post.excerpt}</p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <span className="text-xs font-black text-slate-950 dark:text-white block font-heading">{post.author.name}</span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 font-bold">{post.date}</span>
                </div>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="text-xs font-black text-[#0284C7] dark:text-[#00F2FE] hover:underline flex items-center gap-1"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
