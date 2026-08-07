export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'web-development' | 'data-bi' | 'ai-automation' | 'growth-design';
  shortDesc: string;
  tagline: string;
  problem: string;
  solution: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  deliverables: string[];
  techStack: string[];
  priceStarting: number;
  faqs: { question: string; answer: string }[];
  caseStudyPreview: { title: string; resultMetric: string; description: string };
  iconName: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-website-development',
    slug: 'custom-website-development',
    title: 'Custom Website Development',
    category: 'web-development',
    tagline: 'Hand-crafted high-performance digital experiences built for maximum conversion and lightning speed.',
    shortDesc: 'Hand-crafted Next.js & React websites built for performance, conversion, and brand elevation.',
    problem: 'Generic templates, slow load times, and clunky WordPress themes dilute your brand authority, lose 40%+ of mobile visitors, and fail to generate predictable qualified sales leads.',
    solution: 'We build bespoke, ultra-fast web applications using Next.js, React, and TypeScript engineered with pixel-perfect design, dynamic micro-interactions, and 95+ Google Lighthouse speed scores.',
    benefits: [
      'Load speeds under 1.2 seconds for superior SEO rankings',
      'Custom luxury UI design tailormade for your exact target demographic',
      'Headless CMS integration for effortless content management',
      'Built-in security, scalable cloud hosting & conversion funnel architecture'
    ],
    process: [
      { step: '01', title: 'Strategy & UX Blueprint', description: 'In-depth audit of your competitors, audience personas, and conversion goals.' },
      { step: '02', title: 'High-Fidelity Wireframing', description: 'Interactive Figma prototypes crafted with pixel-perfect alignment and typography.' },
      { step: '03', title: 'Full Stack Development', description: 'Clean TypeScript code, responsive Tailwind CSS layouts, and smooth animations.' },
      { step: '04', title: 'QA & Speed Deployment', description: 'Rigorously tested across 15+ browser devices and deployed on Vercel/AWS.' }
    ],
    deliverables: [
      'Bespoke Next.js / React Source Code',
      'Mobile-First Responsive Layouts',
      'Headless CMS (Sanity / Strapi / Decap)',
      'SEO Metadata & Schema Markup',
      'Analytics & Conversion Tracking Setup'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    priceStarting: 1499,
    faqs: [
      { question: 'How long does custom website development take?', answer: 'Typical custom web builds take between 2 to 4 weeks depending on feature scope and CMS integration requirements.' },
      { question: 'Will I be able to update content myself?', answer: 'Yes! We configure user-friendly Headless CMS editors so your team can publish blog posts, team profiles, and case studies without touching code.' }
    ],
    caseStudyPreview: {
      title: 'Aegis Global Enterprise Rebrand',
      resultMetric: '+340% Lead Inquiries',
      description: 'Engineered an Awwwards-caliber corporate portal resulting in 1.1s load time and 3.4x conversion bump.'
    },
    iconName: 'Code'
  },
  {
    id: 'web-applications',
    slug: 'web-applications',
    title: 'Web Applications',
    category: 'web-development',
    tagline: 'Scalable full-stack SaaS platforms, portals, and web software built with resilient cloud architecture.',
    shortDesc: 'Complex web platforms, client portals, and SaaS products built with modern full-stack tech.',
    problem: 'Off-the-shelf software lacks flexibility, charges exorbitant monthly seat fees, and cannot handle custom business workflows.',
    solution: 'We architect end-to-end full-stack web applications with authentication, database backends, real-time sync, and API integrations tailor-made to automate your operations.',
    benefits: [
      'Full IP ownership with zero monthly vendor lock-in fees',
      'Real-time data synchronization and multi-tenant security',
      'Seamless API integrations with Stripe, CRMs, and AI endpoints',
      'High concurrency infrastructure scaling up to millions of users'
    ],
    process: [
      { step: '01', title: 'System Architecture', description: 'Database schema design, state management planning, and security modeling.' },
      { step: '02', title: 'API & Backend Engineering', description: 'RESTful / GraphQL APIs built with Node.js, Express, or Next.js API routes.' },
      { step: '03', title: 'Frontend Interface', description: 'Component-driven UI built with React, TypeScript, and state management.' },
      { step: '04', title: 'CI/CD & Cloud Launch', description: 'Automated deployment pipelines, database backups, and SSL configuration.' }
    ],
    deliverables: [
      'Full Stack Web Application Codebase',
      'PostgreSQL / Supabase Database Architecture',
      'User Authentication & Role-Based Access Control',
      'Payment Gateway Integration (Stripe)',
      'Comprehensive API Documentation'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    priceStarting: 2999,
    faqs: [
      { question: 'Can you scale the application as our user base grows?', answer: 'Absolutly. We design serverless and containerized cloud backends that automatically scale resource allocation based on real-time traffic.' }
    ],
    caseStudyPreview: {
      title: 'ApexCare Telemedicine Portal',
      resultMetric: '50,000+ Active Patients',
      description: 'Built a HIPAA-compliant web app for virtual doctor bookings and encrypted health record access.'
    },
    iconName: 'Cpu'
  },
  {
    id: 'landing-pages',
    slug: 'landing-pages',
    title: 'High-Converting Landing Pages',
    category: 'growth-design',
    tagline: 'Hyper-focused landing pages engineered for high ad CTR, low bounce rate, and maximum ROAS.',
    shortDesc: 'Conversion-driven landing pages optimized for ad campaigns, product launches, and lead gen.',
    problem: 'Paid PPC and social campaigns waste money driving traffic to confusing websites with low conversion rates.',
    solution: 'We craft high-impact landing pages leveraging persuasive copy hierarchy, strategic friction-free forms, and irresistible trust signals that turn cold traffic into sales.',
    benefits: [
      'Increased Conversion Rates by 40% to 150%',
      'Sub-second mobile loading for lower Google Ads CPC',
      'A/B testing ready architecture and event tracking',
      'High urgency visual design with clear value props'
    ],
    process: [
      { step: '01', title: 'Offer & Persona Alignment', description: 'Deep dive into audience pain points and high-converting offer positioning.' },
      { step: '02', title: 'Copywriting & Wireframing', description: 'Strategic section breakdown focusing on problem, proof, and friction-free CTA.' },
      { step: '03', title: 'Visual Design & Motion', description: 'Eye-catching glassmorphism visual elements, hero badges, and micro-interactions.' },
      { step: '04', title: 'Analytics Integration', description: 'Meta Pixel, Google Tag Manager, and Hotjar tracking setup.' }
    ],
    deliverables: [
      'High-converting single page application',
      'Custom micro-animations and sticky CTA elements',
      'Lead capture form with instant email / CRM sync',
      'Speed optimization & Google Ads compliance'
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Google Tag Manager', 'Vercel'],
    priceStarting: 899,
    faqs: [
      { question: 'Can you integrate the landing page with our CRM?', answer: 'Yes! We sync forms directly with HubSpot, Salesforce, ActiveCampaign, Mailchimp, or custom webhooks.' }
    ],
    caseStudyPreview: {
      title: 'LuxProp Penthouse Launch',
      resultMetric: '$14.2M Property Sales',
      description: 'Created a high-converting luxury landing page that captured 180+ qualified VIP buyer leads in 30 days.'
    },
    iconName: 'Zap'
  },
  {
    id: 'website-redesign',
    slug: 'website-redesign',
    title: 'Website Redesign',
    category: 'web-development',
    tagline: 'Transform outdated, clunky websites into sleek enterprise digital assets.',
    shortDesc: 'Modernize legacy websites into sleek, responsive enterprise powerhouses.',
    problem: 'Outdated websites look unprofessional, alienate mobile users, rank poorly on Google, and lose sales to modern competitors.',
    solution: 'We execute complete digital visual & technical overhauls—refining your brand identity, upgrading the tech stack, and restructuring user flows for modern aesthetics.',
    benefits: [
      'Instant boost in brand perception and industry authority',
      '100% mobile responsive redesign tailored for modern smartphones',
      'Preservation and improvement of existing SEO search rankings',
      'Modern UI/UX matching top tier Silicon Valley design standards'
    ],
    process: [
      { step: '01', title: 'Audit & SEO Preservation', description: 'Mapping old URLs, preserving 301 redirects, and identifying UX bottlenecks.' },
      { step: '02', title: 'Brand Elevation', description: 'Refreshing typography, color palettes, micro-interactions, and visual assets.' },
      { step: '03', title: 'Modern Tech Rebuild', description: 'Migrating legacy code into lightning-fast React / Next.js architecture.' },
      { step: '04', title: 'Relaunch & Validation', description: 'Flawless DNS migration without downtime.' }
    ],
    deliverables: [
      'Complete Visual & Technical Redesign',
      '301 SEO Redirect Matrix',
      'Updated Asset Library & Design System',
      'Performance Benchmark Report'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    priceStarting: 1799,
    faqs: [
      { question: 'Will a redesign hurt my Google ranking?', answer: 'No! We execute strict 301 redirect mapping and technical SEO migration so your rankings stay intact and improve.' }
    ],
    caseStudyPreview: {
      title: 'Vanguard Legal Partners Overhaul',
      resultMetric: '2.8x Time-on-Site Increase',
      description: 'Redesigned a 10-year-old law firm website into a sleek modern authority portal.'
    },
    iconName: 'RefreshCw'
  },
  {
    id: 'e-commerce-development',
    slug: 'e-commerce-development',
    title: 'E-Commerce Development',
    category: 'web-development',
    tagline: 'High-speed headless e-commerce platforms designed to maximize average order value (AOV) and conversion.',
    shortDesc: 'Headless storefronts and custom e-commerce platforms built for high sales velocity.',
    problem: 'Slow Shopify themes, high cart abandonment rates, and inflexible store plugins hinder online revenue growth.',
    solution: 'We craft high-speed e-commerce stores leveraging Headless Shopify or custom React storefronts with instant checkout flows and dynamic product discovery.',
    benefits: [
      'Sub-second product page loads for zero lag shopping',
      'Custom 1-click upsells and smart cart drawer features',
      'Multi-currency, international localization & tax automation',
      'Seamless inventory & ERP sync'
    ],
    process: [
      { step: '01', title: 'Catalog & Funnel Architecture', description: 'Designing high-converting product detail pages and cart drawers.' },
      { step: '02', title: 'Headless Storefront Code', description: 'Building custom React / Next.js storefronts connected to Shopify/Stripe APIs.' },
      { step: '03', title: 'Checkout & Payment Setup', description: 'Integrating Apple Pay, Google Pay, credit cards, and local gateways.' },
      { step: '04', title: 'Optimization & Launch', description: 'Load testing checkout pipelines under heavy traffic spikes.' }
    ],
    deliverables: [
      'Custom Headless E-Commerce Storefront',
      'Smart Cart & Dynamic Cross-Sell Engine',
      'Payment Gateway & Tax API Integration',
      'Product Import & Analytics Setup'
    ],
    techStack: ['Next.js', 'Shopify Storefront API', 'Stripe', 'Tailwind CSS', 'TypeScript'],
    priceStarting: 2499,
    faqs: [
      { question: 'Can you migrate my existing store data?', answer: 'Yes! We migrate products, customer accounts, and order history seamlessly from Shopify, WooCommerce, or Magento.' }
    ],
    caseStudyPreview: {
      title: 'Gourmet Bistro Direct Store',
      resultMetric: '+215% Direct Online Orders',
      description: 'Built a custom food ordering e-commerce app with real-time kitchen printer integration.'
    },
    iconName: 'ShoppingBag'
  },
  {
    id: 'dashboard-development',
    slug: 'dashboard-development',
    title: 'Dashboard Development',
    category: 'data-bi',
    tagline: 'Custom web-based operational dashboards providing real-time data clarity for decision makers.',
    shortDesc: 'Custom executive dashboards giving real-time operational visibility and control.',
    problem: 'Executives waste hours manually compiling scattered spreadsheets with stale data, leading to delayed decisions and missed revenue opportunities.',
    solution: 'We design custom web dashboards featuring interactive KPI cards, live chart visualizations, automated reporting pipelines, and granular role permissions.',
    benefits: [
      'Real-time automated data updates from databases, APIs, and CRMs',
      'Custom intuitive data visualizer using Recharts & Chart.js',
      'Role-based access control (Admin, Manager, Client views)',
      'Exportable PDF & Excel executive report generation'
    ],
    process: [
      { step: '01', title: 'Data Source Audit', description: 'Mapping SQL databases, REST APIs, Google Sheets, and CRM endpoints.' },
      { step: '02', title: 'UX & KPI Design', description: 'Wireframing clean, uncluttered dashboard layouts focused on actionable metrics.' },
      { step: '03', title: 'Frontend & Recharts Build', description: 'Developing responsive UI components with interactive charts and dynamic filters.' },
      { step: '04', title: 'Data Pipeline Sync', description: 'Connecting automated background query fetching and caching layers.' }
    ],
    deliverables: [
      'Web-Based Interactive Dashboard',
      'Live Recharts / Chart.js Visualizations',
      'Custom Date Range & Filter Engine',
      'SQL Query & API Connection Layer',
      'User Auth & Permission Control'
    ],
    techStack: ['React', 'Recharts', 'TypeScript', 'Tailwind CSS', 'SQL', 'Node.js'],
    priceStarting: 1999,
    faqs: [
      { question: 'Can the dashboard connect to multiple data sources?', answer: 'Yes! We can combine data from SQL databases, Stripe, Google Analytics, Salesforce, and custom APIs into one unified view.' }
    ],
    caseStudyPreview: {
      title: 'Global Enterprise Sales BI Dashboard',
      resultMetric: '15+ Hours Saved Weekly',
      description: 'Built a real-time sales pipeline dashboard monitoring $45M+ in regional recurring revenue.'
    },
    iconName: 'LayoutDashboard'
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    title: 'Data Analytics & Insights',
    category: 'data-bi',
    tagline: 'Transform raw, unorganized company data into clear profit-driving actionable intelligence.',
    shortDesc: 'Turn raw unstructured business data into strategic revenue-driving insights.',
    problem: 'Companies collect mountains of customer and operational data but lack the analytical tools to extract meaningful strategic value.',
    solution: 'We clean, model, analyze, and visualize your historical data to uncover hidden trends, customer churn signals, product performance patterns, and margin bottlenecks.',
    benefits: [
      'Uncover hidden profit leaks and high-margin product opportunities',
      'Identify customer churn triggers before revenue is lost',
      'Accurate statistical forecasting for demand and inventory',
      'Comprehensive data hygiene and structured warehouse schemas'
    ],
    process: [
      { step: '01', title: 'Data Extraction & Cleaning', description: 'In-depth audit, missing value treatment, and deduplication.' },
      { step: '02', title: 'Exploratory Data Analysis', description: 'Statistical analysis, cohort grouping, and trend modeling.' },
      { step: '03', title: 'Visualization & Reporting', description: 'Creating executive summaries with clear visual charts and narrative insights.' },
      { step: '04', title: 'Action Plan Delivery', description: 'Presenting concrete recommendations to optimize pricing, retention, and operations.' }
    ],
    deliverables: [
      'Cleaned & Structured Dataset Schemas',
      'Statistical Cohort & Trend Analysis Report',
      'Executive Insights Deck & Key Recommendations',
      'Automated Analytics Pipeline Script'
    ],
    techStack: ['Python', 'Pandas', 'SQL', 'BigQuery', 'Recharts', 'Excel'],
    priceStarting: 1299,
    faqs: [
      { question: 'What formats can our raw data be in?', answer: 'We accept raw CSVs, Excel workbooks, SQL databases, BigQuery datasets, JSON logs, or direct API exports.' }
    ],
    caseStudyPreview: {
      title: 'Customer Churn & LTV Optimization',
      resultMetric: '-28% Churn Reduction',
      description: 'Analyzed 120,000 SaaS customer logs to pinpoint friction points and boost lifetime value.'
    },
    iconName: 'BarChart3'
  },
  {
    id: 'business-intelligence',
    slug: 'business-intelligence',
    title: 'Business Intelligence (BI) Solutions',
    category: 'data-bi',
    tagline: 'Enterprise-grade BI architecture that empowers leadership with single-source-of-truth clarity.',
    shortDesc: 'Enterprise BI architecture creating a single source of truth for your leadership team.',
    problem: 'Different departments operate in silos with conflicting numbers, leading to misaligned goals and poor strategic execution.',
    solution: 'We architect enterprise BI systems establishing unified metrics, data modeling, automated ETL pipelines, and executive dashboards across marketing, sales, HR, and finance.',
    benefits: [
      'Unified single source of truth across all departments',
      'Elimination of manual reporting bottlenecks and human error',
      'Automated daily/weekly executive email scorecards',
      'Scalable data warehouse integration (BigQuery / Snowflake / SQL)'
    ],
    process: [
      { step: '01', title: 'Stakeholder Discovery', description: 'Defining cross-departmental KPIs and reporting standards.' },
      { step: '02', title: 'Data Warehouse & Modeling', description: 'Building dimensional Star Schema models and automated ETL jobs.' },
      { step: '03', title: 'BI Dashboard Deployment', description: 'Designing interactive drill-down executive views.' },
      { step: '04', title: 'Governance & Training', description: 'Documenting data definitions and onboarding your leadership team.' }
    ],
    deliverables: [
      'Enterprise Data Model Architecture',
      'Automated ETL / ELT Ingestion Pipelines',
      'Interactive Multi-Department BI Suite',
      'Data Dictionary & Governance Documentation'
    ],
    techStack: ['Power BI', 'SQL Server', 'PostgreSQL', 'Python', 'BigQuery', 'Tableau'],
    priceStarting: 2499,
    faqs: [
      { question: 'Do we need an expensive data warehouse?', answer: 'Not necessarily! We design BI solutions tailored to your business scale—from lightweight PostgreSQL to full cloud warehouses.' }
    ],
    caseStudyPreview: {
      title: 'C-Suite Power BI Command Hub',
      resultMetric: '100% Data Accuracy',
      description: 'Unified 6 regional business entities into a single live Power BI executive portal.'
    },
    iconName: 'TrendingUp'
  },
  {
    id: 'power-bi-dashboard-development',
    slug: 'power-bi-dashboard-development',
    title: 'Power BI Dashboard Development',
    category: 'data-bi',
    tagline: 'Custom Microsoft Power BI reports engineered with advanced DAX formulas, Star Schema modeling, and sleek UX.',
    shortDesc: 'Bespoke Power BI reports featuring advanced DAX modeling and interactive visual design.',
    problem: 'Standard Power BI reports look clunky, run slowly due to unoptimized DAX measures, and fail to provide quick visual comprehension.',
    solution: 'We design custom Power BI reports with custom brand themes, optimized Star Schema relationships, fast DAX calculations, and intuitive mobile-friendly drill-downs.',
    benefits: [
      'Ultra-fast report response times with optimized DAX',
      'Luxury brand-matched Power BI custom themes',
      'Interactive drill-through and cross-filtering capabilities',
      'Automated daily scheduled data refresh'
    ],
    process: [
      { step: '01', title: 'Data Modeling', description: 'Transforming tables into clean Star Schema relationships.' },
      { step: '02', title: 'DAX Engineering', description: 'Writing efficient Time Intelligence, YTD, and dynamic measures.' },
      { step: '03', title: 'Report Layout & Styling', description: 'Applying custom UI grids, navigation bars, and tooltip pages.' },
      { step: '04', title: 'Power BI Service Publish', description: 'Publishing to workspace with row-level security (RLS) setup.' }
    ],
    deliverables: [
      '.PBIX Master Report Files',
      'Custom Power BI Theme JSON',
      'Advanced DAX Measure Library',
      'Scheduled Refresh & Row-Level Security Config'
    ],
    techStack: ['Power BI', 'DAX', 'Power Query (M)', 'SQL Server', 'Excel'],
    priceStarting: 1199,
    faqs: [
      { question: 'Can Power BI report be embedded into our web app?', answer: 'Yes! We configure Power BI Embedded with secure token authentication for web apps.' }
    ],
    caseStudyPreview: {
      title: 'Financial BI Cash Flow Suite',
      resultMetric: 'Zero Manual Prep Time',
      description: 'Created an automated Power BI suite tracking real-time EBITDA, cash runway, and department expenses.'
    },
    iconName: 'PieChart'
  },
  {
    id: 'excel-dashboard-automation',
    slug: 'excel-dashboard-automation',
    title: 'Excel Dashboard Automation',
    category: 'data-bi',
    tagline: 'Automate tedious Excel tasks, VBA scripts, and Power Query workflows into 1-click executive dashboards.',
    shortDesc: 'Transform messy spreadsheets into automated 1-click Excel dashboards with VBA & Power Query.',
    problem: 'Employees burn hours copying and pasting data between messy Excel workbooks, leading to broken formulas and calculation errors.',
    solution: 'We turn manual spreadsheets into robust automated Excel tools using Power Query, dynamic formulas, VBA macros, and sleek executive dashboard tabs.',
    benefits: [
      '1-Click automated data import & refresh',
      'Error-proof automated calculations & data validation',
      'Executive-ready visual dashboard interfaces inside Excel',
      'VBA automation scripts for instant PDF report generation'
    ],
    process: [
      { step: '01', title: 'Workbook Audit', description: 'Reviewing current formulas, data linkages, and repetitive manual steps.' },
      { step: '02', title: 'Power Query & Data Cleaning', description: 'Automating multi-file consolidation and transformation.' },
      { step: '03', title: 'Dashboard UI Design', description: 'Designing clean, professional KPI cards and chart tabs.' },
      { step: '04', title: 'VBA Scripting & Testing', description: 'Writing background macros and user instruction guides.' }
    ],
    deliverables: [
      'Automated Master Excel Workbook (.XLSM)',
      'Power Query Data Pipeline Scripts',
      'Custom VBA Automation Macros',
      'User Video Walkthrough & Documentation'
    ],
    techStack: ['Microsoft Excel', 'Power Query', 'VBA / Office Scripts', 'PivotTables'],
    priceStarting: 699,
    faqs: [
      { question: 'Will this work on both Mac and Windows Excel?', answer: 'Yes! We construct cross-platform workbooks using modern Power Query & compatible Office Scripts.' }
    ],
    caseStudyPreview: {
      title: 'Supply Chain & Inventory Tracker',
      resultMetric: '90% Time Reduction',
      description: 'Automated daily inventory restocking calculations for a regional retail network.'
    },
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'sql-data-solutions',
    slug: 'sql-data-solutions',
    title: 'SQL Data Solutions & Database Engineering',
    category: 'data-bi',
    tagline: 'High-performance SQL database architecture, query optimization, and automated data pipelines.',
    shortDesc: 'Scalable SQL database design, query optimization, and automated data pipelines.',
    problem: 'Slow SQL queries, redundant data structures, and unindexed tables cause application timeouts and reporting delays.',
    solution: 'We design normalized SQL database schemas, write complex analytical queries, optimize indexing execution plans, and build reliable ETL scripts.',
    benefits: [
      'Query execution times reduced by up to 90%',
      'Robust ACID compliant data modeling (PostgreSQL / MySQL / SQL Server)',
      'Automated database backups and disaster recovery',
      'Secure stored procedures and views for reporting'
    ],
    process: [
      { step: '01', title: 'Schema & Query Analysis', description: 'Analyzing slow query logs, indexes, and execution plans.' },
      { step: '02', title: 'Database Optimization', description: 'Adding targeted indexes, refactoring CTEs/joins, and partitioning tables.' },
      { step: '03', title: 'ETL & Pipeline Scripts', description: 'Writing automated Python / SQL migration and sync scripts.' },
      { step: '04', title: 'Validation & Stress Test', description: 'Simulating high query concurrency workloads.' }
    ],
    deliverables: [
      'Optimized SQL Schema DDL Scripts',
      'Indexed & Performance-Tuned Database',
      'Automated Backup & Sync Pipelines',
      'Custom Stored Procedures & Analytical Views'
    ],
    techStack: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'BigQuery', 'Python'],
    priceStarting: 999,
    faqs: [
      { question: 'Can you optimize our existing live production database?', answer: 'Yes! We safely analyze execution plans and apply non-locking index updates without taking your system offline.' }
    ],
    caseStudyPreview: {
      title: 'Financial System Database Refactor',
      resultMetric: '15ms Query Response',
      description: 'Refactored a 50M row database schema, reducing report loading times from 45 seconds to 15 milliseconds.'
    },
    iconName: 'Database'
  },
  {
    id: 'seo-optimization',
    slug: 'seo-optimization',
    title: 'Technical & Strategic SEO Optimization',
    category: 'growth-design',
    tagline: 'Dominate search results with technical SEO perfection, keyword targeting, and schema markup.',
    shortDesc: 'Technical SEO, schema markup, and keyword strategy to dominate Google search results.',
    problem: 'Your business is invisible on Google while competitors steal high-intent organic leads every day.',
    solution: 'We implement comprehensive technical SEO, optimize site architecture, write rich JSON-LD schema markup, and build keyword-targeted content funnels.',
    benefits: [
      'Rank #1 for high-intent profitable keywords',
      'Enhanced Google Rich Snippets with Schema.org markup',
      '100% crawlability & indexability compliance',
      'Sustained organic traffic growth without paid ad reliance'
    ],
    process: [
      { step: '01', title: 'Technical Audit', description: 'Crawling site for broken links, duplicate tags, and indexing issues.' },
      { step: '02', title: 'Keyword Strategy', description: 'Identifying high-volume buyer keywords with manageable competition.' },
      { step: '03', title: 'On-Page & Schema Code', description: 'Injecting structured data, meta titles, ALT attributes, and heading hierarchy.' },
      { step: '04', title: 'Search Console & Monitoring', description: 'Submitting sitemaps and monitoring rank progress.' }
    ],
    deliverables: [
      'Technical SEO Audit & Fix Report',
      'Custom JSON-LD Schema Code',
      'On-Page Keyword Optimization Plan',
      'Google Search Console & Sitemap Setup'
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'Schema.org', 'Next.js SEO', 'Lighthouse'],
    priceStarting: 799,
    faqs: [
      { question: 'How long until we see SEO results?', answer: 'Technical fixes often yield improvements within 2 to 4 weeks, with significant keyword rank growth maturing over 60-90 days.' }
    ],
    caseStudyPreview: {
      title: 'Horizon Academy Organic Growth',
      resultMetric: '+480% Organic Search Leads',
      description: 'Implemented local school schema and structured keyword hubs driving 12,000+ monthly visits.'
    },
    iconName: 'Search'
  },
  {
    id: 'website-performance-optimization',
    slug: 'website-performance-optimization',
    title: 'Website Performance Optimization',
    category: 'web-development',
    tagline: 'Accelerate slow websites to 95+ Core Web Vitals and sub-second load times.',
    shortDesc: 'Accelerate slow sites to 95+ Google Lighthouse scores and sub-second loads.',
    problem: 'Every 1-second delay in page load time reduces conversions by 7% and causes Google to downgrade your search rankings.',
    solution: 'We audit and optimize your site assets, script execution, image compression, caching headers, and bundle sizes to achieve 95+ Lighthouse scores.',
    benefits: [
      'Instant load times under 1 second',
      'Pass Google Core Web Vitals (LCP, INP, CLS)',
      'Reduced server bandwidth costs',
      'Higher mobile user engagement & lower bounce rate'
    ],
    process: [
      { step: '01', title: 'Diagnostic Profiling', description: 'Analyzing network waterfalls, main-thread blocking scripts, and bundle weights.' },
      { step: '02', title: 'Asset & Script Compression', description: 'Converting images to WebP/AVIF, minifying JS/CSS, and lazy loading.' },
      { step: '03', title: 'Caching & CDN Setup', description: 'Configuring edge caching, HTTP headers, and Gzip/Brotli compression.' },
      { step: '04', title: 'Verification', description: 'Benchmarking on mobile 4G networks via PageSpeed Insights.' }
    ],
    deliverables: [
      'Full Site Speed & CWV Optimization',
      'Converted Modern Image Assets',
      'Minified Bundle & Script Strategy',
      'Before / After Lighthouse Report'
    ],
    techStack: ['Lighthouse', 'Vite', 'WebP/AVIF', 'Cloudflare', 'Next.js'],
    priceStarting: 599,
    faqs: [
      { question: 'Do you guarantee 90+ Lighthouse scores?', answer: 'Yes! We guarantee passing Core Web Vitals and scoring 90-100 on desktop & mobile.' }
    ],
    caseStudyPreview: {
      title: 'ApexCare Mobile Speed Upgrade',
      resultMetric: '0.8s Load Time (From 5.2s)',
      description: 'Optimized script bundles and asset compression for a seamless emergency clinic portal.'
    },
    iconName: 'Zap'
  },
  {
    id: 'website-maintenance',
    slug: 'website-maintenance',
    title: 'Website Maintenance & Retainers',
    category: 'web-development',
    tagline: 'Peace of mind digital management with 24/7 uptime monitoring, security patches, and monthly enhancements.',
    shortDesc: '24/7 security monitoring, backups, updates, and monthly design/feature additions.',
    problem: 'Unmaintained websites get hacked, suffer from broken plugins, and slowly become outdated while internal teams are too busy to fix them.',
    solution: 'We provide dedicated monthly retainer services covering continuous backups, malware scanning, core package updates, content updates, and priority design tweaks.',
    benefits: [
      'Guaranteed 99.9% uptime and zero security breaches',
      'Priority turnaround for new feature requests within 24 hours',
      'Automated daily cloud offsite backups',
      'Monthly performance & health diagnostic reports'
    ],
    process: [
      { step: '01', title: 'System Onboarding', description: 'Setting up monitoring tools, repository backups, and SSL alerts.' },
      { step: '02', title: 'Weekly Maintenance', description: 'Applying dependency updates, security patches, and broken link checks.' },
      { step: '03', title: 'Monthly Hours', description: 'Executing requested design updates, banner changes, or new page builds.' },
      { step: '04', title: 'Reporting', description: 'Delivering detailed monthly traffic, speed, and health summaries.' }
    ],
    deliverables: [
      '24/7 Security & Uptime Sentinel',
      'Daily Cloud Backups with 1-Click Restore',
      'Dedicated Monthly Developer Hours',
      'Monthly Health & Security Report'
    ],
    techStack: ['Vercel', 'AWS', 'GitHub', 'Sentry', 'UptimeRobot'],
    priceStarting: 399,
    faqs: [
      { question: 'What is included in monthly maintenance hours?', answer: 'You can use your hours for new page additions, text updates, graphic changes, form updates, or speed tweaks.' }
    ],
    caseStudyPreview: {
      title: 'Studio Minimal Retainer',
      resultMetric: '99.99% Uptime Over 3 Years',
      description: 'Maintained seamless web performance and security for an award-winning creative studio.'
    },
    iconName: 'ShieldCheck'
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Prototyping',
    category: 'growth-design',
    tagline: 'World-class digital product design that wows users and turns complex workflows into effortless delight.',
    shortDesc: 'Figma visual design, interactive prototypes, and design systems for web apps & websites.',
    problem: 'Confusing user interfaces irritate visitors, result in high drop-off rates, and make complex web software feel impossible to navigate.',
    solution: 'We design intuitive UI/UX experiences backed by user psychology, interactive Figma prototypes, design tokens, and rigorous accessibility standards.',
    benefits: [
      'Awwwards-grade visual aesthetic that elevates brand equity',
      'Frictionless user flows tested for maximum conversion rate',
      'Scalable Figma Design System with reusable components',
      'WCAG AA accessibility compliance'
    ],
    process: [
      { step: '01', title: 'User Research & Personas', description: 'Mapping user journeys and defining key interaction goals.' },
      { step: '02', title: 'Wireframing', description: 'Structuring low-fidelity layouts focused on content hierarchy.' },
      { step: '03', title: 'High-Fidelity Figma UI', description: 'Crafting luxury visual components, dark/light themes, and glassmorphism.' },
      { step: '04', title: 'Interactive Prototype', description: 'Building clickable prototypes ready for user testing and dev handoff.' }
    ],
    deliverables: [
      'Complete Figma Design File (.FIG)',
      'Interactive Clickable Figma Prototype',
      'Design System & Typography Token Library',
      'Developer Handoff Documentation'
    ],
    techStack: ['Figma', 'Framer', 'Protopie', 'Storybook', 'Tailwind Tokens'],
    priceStarting: 1299,
    faqs: [
      { question: 'Do we receive editable design files?', answer: 'Yes! You get full ownership of organized Figma files with auto-layout components and color tokens.' }
    ],
    caseStudyPreview: {
      title: 'Talent & HR Analytics UI',
      resultMetric: '98% User Satisfaction',
      description: 'Designed an intuitive enterprise HR portal simplified for non-technical managers.'
    },
    iconName: 'Palette'
  },
  {
    id: 'ai-integrations',
    slug: 'ai-integrations',
    title: 'AI Integrations & Smart Agents',
    category: 'ai-automation',
    tagline: 'Integrate LLMs, OpenAI, and custom AI chatbots into your web applications for 24/7 intelligent automation.',
    shortDesc: 'Integrate custom AI chatbots, OpenAI, LLMs, and intelligent automation into your app.',
    problem: 'Customer support teams are overwhelmed with repetitive inquiries, leading to delayed response times and lost sales after business hours.',
    solution: 'We build and embed custom AI assistants, conversational chatbots, and automated content generators powered by OpenAI GPT, Gemini, and custom vector databases.',
    benefits: [
      '24/7 instant customer consultation and lead qualification',
      'Automated customer support resolution rates up to 70%',
      'Custom AI trained on your exact documentation and product specs',
      'Seamless integration into React & Next.js applications'
    ],
    process: [
      { step: '01', title: 'AI Use Case Scoping', description: 'Identifying high-impact opportunities for conversational AI and automation.' },
      { step: '02', title: 'Knowledge Base Embeddings', description: 'Vectorizing your company PDFs, FAQs, and product catalogs.' },
      { step: '03', title: 'Agent Development', description: 'Configuring prompt architecture, system tools, and guardrails.' },
      { step: '04', title: 'Web App Widget Embed', description: 'Integrating sleek UI chat widgets into your live site.' }
    ],
    deliverables: [
      'Custom Web AI Chat Widget / Assistant',
      'Vector Database & Knowledge Embeddings',
      'OpenAI / Gemini API Integration',
      'Lead Qualification & CRM Transfer Workflow'
    ],
    techStack: ['OpenAI API', 'LangChain', 'Pinecone', 'React', 'TypeScript', 'Python'],
    priceStarting: 1599,
    faqs: [
      { question: 'Will the AI hallucinate incorrect pricing or info?', answer: 'We implement strict Retrieval-Augmented Generation (RAG) system prompts and guardrails so the AI only uses verified data.' }
    ],
    caseStudyPreview: {
      title: 'Nab AI Studio Consult Widget',
      resultMetric: '4.9/5 Client Rating',
      description: 'Integrated an instant project cost estimator AI chatbot capturing 45+ leads weekly.'
    },
    iconName: 'Sparkles'
  },
  {
    id: 'business-automation',
    slug: 'business-automation',
    title: 'Business Process Automation',
    category: 'ai-automation',
    tagline: 'Eliminate repetitive manual tasks by connecting your tools with automated Make/Zapier/Python workflows.',
    shortDesc: 'Automate repetitive workflows by connecting CRMs, email, spreadsheets, and APIs.',
    problem: 'Manual data entry between forms, email inboxes, spreadsheets, and billing software creates bottlenecks and wastes hundreds of staff hours.',
    solution: 'We build custom automated workflows using Make.com, Zapier, and Python scripts to automatically route leads, generate invoices, send notifications, and update databases.',
    benefits: [
      'Save 20+ staff hours every week per team member',
      'Zero manual data entry errors between apps',
      'Instant real-time lead notification via Slack / WhatsApp / Email',
      'Automated PDF invoice generation and contract sending'
    ],
    process: [
      { step: '01', title: 'Workflow Mapping', description: 'Mapping manual touchpoints across your sales, operations, and billing tools.' },
      { step: '02', title: 'Automation Engineering', description: 'Building webhooks, Zapier/Make scenarios, and custom Python API scripts.' },
      { step: '03', title: 'Testing & Error Handler', description: 'Setting up automated retry mechanisms and error alerts.' },
      { step: '04', title: 'Team Deployment', description: 'Onboarding your operational staff to seamless automated flows.' }
    ],
    deliverables: [
      'Automated Cross-App Scenarios (Make / Zapier / Python)',
      'Instant Lead Router & CRM Sync Workflow',
      'Automated Document & Invoice Generator',
      'Workflow Error Alerting System'
    ],
    techStack: ['Make.com', 'Zapier', 'Python', 'Webhooks', 'REST APIs', 'HubSpot'],
    priceStarting: 899,
    faqs: [
      { question: 'What tools can you connect together?', answer: 'We can connect almost any tool with an API including HubSpot, Google Sheets, Stripe, QuickBooks, Slack, and WhatsApp.' }
    ],
    caseStudyPreview: {
      title: 'Real Estate Lead Automation Pipeline',
      resultMetric: '< 60sec Lead Response Time',
      description: 'Automated instant SMS, email, and CRM routing for high-value buyer inquiries.'
    },
    iconName: 'Workflow'
  },
  {
    id: 'technical-consulting',
    slug: 'technical-consulting',
    title: 'Technical Consulting & CTO Advisory',
    category: 'web-development',
    tagline: 'Expert architectural guidance, tech stack selection, and code audits for ambitious founders and leaders.',
    shortDesc: 'Strategic tech stack selection, code reviews, and architecture planning for founders.',
    problem: 'Non-technical founders and executives struggle to make the right software architecture choices, risking costly rewrites down the road.',
    solution: 'We serve as your fractional CTO and senior architects—auditing existing codebases, planning database schemas, selecting optimal tech stacks, and vetting engineering teams.',
    benefits: [
      'Prevent costly technical debt and architectural mistakes',
      'Objective vendor & developer code evaluation',
      'Comprehensive Cloud & Security Infrastructure Strategy',
      'Actionable technology roadmap tailored to your 3-year growth plan'
    ],
    process: [
      { step: '01', title: 'Architecture Discovery', description: 'Reviewing current code, server setup, and technical challenges.' },
      { step: '02', title: 'Code & Security Audit', description: 'Evaluating code quality, performance bottlenecks, and security vulnerabilities.' },
      { step: '03', title: 'Strategy & Roadmap Blueprint', description: 'Authoring a comprehensive architecture document and stack recommendation.' },
      { step: '04', title: 'Ongoing Advisory', description: 'Bi-weekly strategic alignment calls and team code reviews.' }
    ],
    deliverables: [
      'Technical Code & Security Audit Report',
      'System Architecture Blueprint Document',
      'Technology Stack Recommendation Matrix',
      'Fractional CTO Consultation Sessions'
    ],
    techStack: ['Next.js', 'AWS', 'Supabase', 'PostgreSQL', 'Docker', 'Vercel'],
    priceStarting: 999,
    faqs: [
      { question: 'Can you advise our internal development team?', answer: 'Yes! We act as fractional tech advisors, guiding your engineers on best practices and architecture decisions.' }
    ],
    caseStudyPreview: {
      title: 'Horizon Academy Cloud Migration',
      resultMetric: '40% Lower Hosting Cost',
      description: 'Guided an educational institution through cloud modernization and database migration.'
    },
    iconName: 'Headphones'
  }
];
