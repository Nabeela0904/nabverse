import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AiAssistantModal } from './components/tools/AiAssistantModal';
import { CursorEffect } from './components/layout/CursorEffect';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

import { Home } from './pages/Home';

// Lazy-loaded routes for code splitting & minimal bundle size
const ServicesOverview = lazy(() => import('./pages/ServicesOverview').then(m => ({ default: m.ServicesOverview })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const PortfolioOverview = lazy(() => import('./pages/PortfolioOverview').then(m => ({ default: m.PortfolioOverview })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then(m => ({ default: m.ProjectDetail })));
const ToolsPage = lazy(() => import('./pages/ToolsPage').then(m => ({ default: m.ToolsPage })));
const Pricing = lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const BookConsultation = lazy(() => import('./pages/BookConsultation').then(m => ({ default: m.BookConsultation })));
const Resources = lazy(() => import('./pages/Resources').then(m => ({ default: m.Resources })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center pt-32">
    <div className="w-8 h-8 border-2 border-[#0284C7] dark:border-[#00F2FE] border-t-transparent rounded-full animate-spin" />
  </div>
);

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('nab_theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
      localStorage.setItem('nab_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      body.classList.add('light');
      body.classList.remove('dark');
      localStorage.setItem('nab_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <Router>
      <ScrollToTop />
      <CursorEffect />
      <div className={`min-h-screen flex flex-col justify-between transition-colors duration-200 ${isDark ? 'dark bg-[#04060C] text-white' : 'light bg-white text-slate-950'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="flex-1">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesOverview />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/portfolio" element={<PortfolioOverview />} />
              <Route path="/portfolio/:slug" element={<ProjectDetail />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<BookConsultation />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <AiAssistantModal />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
