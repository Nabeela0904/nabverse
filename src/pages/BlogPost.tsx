import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import { ArrowRight, ChevronLeft, Clock, User, Share2, Sparkles } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="container-custom max-w-4xl pb-24 space-y-12" style={{ paddingTop: '200px' }}>
      {/* Back Button */}
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-[#00F2FE] transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back to Knowledge Hub
      </Link>

      {/* Article Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="badge badge-primary">
            {post.category}
          </span>
          <span className="text-xs text-slate-600 dark:text-slate-400 font-bold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white font-heading leading-tight pt-2">
          {post.title}
        </h1>

        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover border border-[#0284C7]/40 dark:border-[#00F2FE]/40" />
            <div>
              <span className="font-black text-slate-950 dark:text-white block font-heading">{post.author.name}</span>
              <span className="text-slate-600 dark:text-slate-400 font-bold">{post.author.role} • Published {post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 space-y-6">
        <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 text-sm leading-relaxed space-y-4 font-semibold">
          <p>{post.excerpt}</p>
          <div className="p-6 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 whitespace-pre-line font-bold">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
};
