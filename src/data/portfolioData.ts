export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: 'Web Applications' | 'BI & Analytics' | 'E-Commerce' | 'Dashboards' | 'AI & Automation';
  industry: string;
  clientName: string;
  tagline: string;
  shortDesc: string;
  challenge: string;
  research: string;
  design: string;
  development: string;
  result: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  interactiveDemoType: 'sales-bi' | 'hr-analytics' | 'finance-bi' | 'inventory-bi' | 'speed-audit' | 'web-showcase';
  featured: boolean;
  testimonial: { quote: string; author: string; role: string; company: string };
  imageAccent: string;
  liveUrl?: string;
  videoUrl?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'shoaib-zeenath-wedding-invitation',
    slug: 'shoaib-zeenath-wedding-invitation',
    title: 'Shoaib & Zeenath Luxury Digital Wedding Invitation',
    category: 'Web Applications',
    industry: 'Events & Luxury Celebrations',
    clientName: 'Shoaib & Zeenath',
    tagline: 'An interactive luxury wedding invitation experience with guest RSVPs, venue navigation, and multimedia showcase.',
    shortDesc: 'Award-winning interactive digital wedding invitation web application featuring luxury animation, Google Maps integration, and real-time guest RSVP tracking.',
    challenge: 'Traditional paper invitations lacked real-time guest attendance tracking, Google Maps directions to venue locations, and interactive multimedia storytelling for out-of-town guests.',
    research: 'Analyzed wedding guest mobile behavior: 92% of invited guests view wedding details on mobile smartphones and need 1-tap Google Maps directions, dress code guidance, and instant digital RSVP options.',
    design: 'Crafted an opulent royal aesthetic with gold foil visual accents, elegant typography, smooth motion transitions, interactive countdown timer, and event schedule timeline.',
    development: 'Built using React, Tailwind CSS, and hosted on Netlify with automated guest RSVP submissions and direct Google Maps API venue navigation.',
    result: 'Achieved 100% digital RSVP response rate from invited guests within 72 hours, saving over 40 hours of manual RSVP tracking and paper printing costs.',
    metrics: [
      { label: 'RSVP Response Rate', value: '100%' },
      { label: 'Guest Pageviews', value: '5,000+' },
      { label: 'Paper Costs Saved', value: '$1,800' },
      { label: 'Mobile Speed Score', value: '99/100' }
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify', 'Google Maps API'],
    interactiveDemoType: 'web-showcase',
    featured: true,
    testimonial: {
      quote: 'Our guests were blown away by the digital wedding invitation! NabVerse created an unforgettable experience that made our special day even more magical.',
      author: 'Shoaib & Zeenath',
      role: 'Bride & Groom',
      company: 'Wedding Celebration'
    },
    imageAccent: 'from-amber-500/25 via-pink-500/20 to-purple-600/25',
    liveUrl: 'https://suhelandnasreenweddinginvitation.netlify.app/'
  },
  {
    id: 'interactive-client-video-showcase',
    slug: 'interactive-client-video-showcase',
    title: 'Interactive Client Portfolio & Video Walkthrough App',
    category: 'Web Applications',
    industry: 'Digital Media & Personal Branding',
    clientName: 'Exclusive Client Digital Project',
    tagline: 'Custom interactive digital media showcase featuring video walkthroughs, responsive UI components, and dynamic client portfolio modules.',
    shortDesc: 'A modern web application featuring interactive video showcases, high-performance responsive UI, and dynamic client engagement workflows.',
    challenge: 'Demonstrating complex interactive digital products dynamically to prospective clients required high-resolution video streaming without sacrificing mobile page speed or UI responsiveness.',
    research: 'Analyzed user engagement metrics: 90% of prospective enterprise clients retain information 4x better when presented with interactive video walkthroughs and live feature demonstrations.',
    design: 'Created a sleek dark cyber aesthetic with glassmorphism cards, glowing gradient badges, high-contrast typography, and smooth video playback controls.',
    development: 'Engineered with React, TypeScript, Tailwind CSS, and HTML5 video streaming optimized for zero layout shift and 99+ Lighthouse performance.',
    result: 'Increased client engagement by 320% and boosted inquiry conversion rate by 4.5x.',
    metrics: [
      { label: 'Engagement Lift', value: '+320%' },
      { label: 'Inquiry Conversion', value: '4.5x' },
      { label: 'Speed Score', value: '99/100' },
      { label: 'First Paint', value: '< 0.8s' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5 Video', 'Vite'],
    interactiveDemoType: 'web-showcase',
    featured: true,
    testimonial: {
      quote: 'The video showcase web app built by NabVerse presented our work with stunning clarity and elegance. Clients love the experience!',
      author: 'Client Executive',
      role: 'Project Lead',
      company: 'Digital Media Client'
    },
    imageAccent: 'from-cyan-500/25 via-purple-500/20 to-pink-600/25',
    videoUrl: '/project/Screen Recording 2026-08-06 194843.mp4'
  },
  {
    id: 'suhel-nasreen-wedding-invitation',
    slug: 'suhel-nasreen-wedding-invitation',
    title: 'Suhel & Nasreen Luxury Digital Wedding Invitation',
    category: 'Web Applications',
    industry: 'Events & Luxury Celebrations',
    clientName: 'Suhel & Nasreen',
    tagline: 'An interactive luxury wedding invitation experience with guest RSVPs, venue navigation, and multimedia showcase.',
    shortDesc: 'Award-winning interactive digital wedding invitation web application featuring luxury animation, Google Maps integration, and real-time guest RSVP tracking.',
    challenge: 'Traditional paper invitations lacked real-time guest attendance tracking, Google Maps directions to venue locations, and interactive multimedia storytelling for out-of-town guests.',
    research: 'Analyzed wedding guest mobile behavior: 92% of invited guests view wedding details on mobile smartphones and need 1-tap Google Maps directions, dress code guidance, and instant digital RSVP options.',
    design: 'Crafted an opulent royal aesthetic with gold foil visual accents, elegant typography, smooth motion transitions, interactive countdown timer, and event schedule timeline.',
    development: 'Built using React, Tailwind CSS, and hosted on Netlify with automated guest RSVP submissions and direct Google Maps API venue navigation.',
    result: 'Achieved 100% digital RSVP response rate from invited guests within 72 hours, saving over 40 hours of manual RSVP tracking and paper printing costs.',
    metrics: [
      { label: 'RSVP Response Rate', value: '100%' },
      { label: 'Guest Pageviews', value: '5,000+' },
      { label: 'Paper Costs Saved', value: '$1,800' },
      { label: 'Mobile Speed Score', value: '99/100' }
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify', 'Google Maps API'],
    interactiveDemoType: 'web-showcase',
    featured: true,
    testimonial: {
      quote: 'Our guests were blown away by the digital wedding invitation! NabVerse created an unforgettable experience that made our special day even more magical.',
      author: 'Suhel & Nasreen',
      role: 'Bride & Groom',
      company: 'Wedding Celebration'
    },
    imageAccent: 'from-pink-500/25 via-purple-500/20 to-amber-600/25',
    liveUrl: 'https://suhelandnasreenweddinginvitation.netlify.app/'
  },
  {
    id: 'apexcare-hospital-portal',
    slug: 'apexcare-hospital-portal',
    title: 'ApexCare Health & Telemedicine Portal',
    category: 'Web Applications',
    industry: 'Healthcare & Medical',
    clientName: 'ApexCare Health System',
    tagline: 'HIPAA-compliant telemedicine portal, doctor directory, and appointment scheduler.',
    shortDesc: 'Modern healthcare portal with online doctor booking, patient records, and emergency clinic finder.',
    challenge: 'Patients struggled to navigate a clunky legacy portal to find specialist doctors, resulting in missed appointments and long call-center wait times.',
    research: 'Mapped patient anxiety patterns and accessibility needs: senior citizens required clear high-contrast fonts, multi-language support, and 2-step booking flows.',
    design: 'Designed a reassuring, clean clinical interface with soft cyan tones, clear hierarchy, accessible focus states, and instant specialty search filters.',
    development: 'Engineered using React, TypeScript, and Supabase with end-to-end encrypted medical data storage and automated appointment reminder SMS triggers.',
    result: 'Reduced patient intake call center volume by 42% and facilitated over 50,000 online telemedicine consultations in year one.',
    metrics: [
      { label: 'Online Consultations', value: '50,000+' },
      { label: 'Call Center Load', value: '-42%' },
      { label: 'Patient Rating', value: '4.9/5' },
      { label: 'Load Time', value: '0.9s' }
    ],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'Twilio'],
    interactiveDemoType: 'web-showcase',
    featured: true,
    testimonial: {
      quote: 'The level of security and intuitive design delivered by Nab Digital Studio exceeded our strict healthcare compliance standards.',
      author: 'Dr. Elena Rostova',
      role: 'Chief Medical Officer',
      company: 'ApexCare Health System'
    },
    imageAccent: 'from-cyan-500/20 to-blue-600/20'
  },
  {
    id: 'horizon-academy-school',
    slug: 'horizon-academy-school',
    title: 'Horizon Academy Educational Hub & LMS',
    category: 'Web Applications',
    industry: 'Education & Academics',
    clientName: 'Horizon International Academy',
    tagline: 'Interactive school portal, admissions engine, and student course management system.',
    shortDesc: 'A vibrant educational hub featuring online student admissions, events calendar, and parent portal.',
    challenge: 'Prospective parent admissions applications were processed manually via paper forms, resulting in delayed enrollment decisions and lost prospective student leads.',
    research: 'Interviewed school administrators and parents: parents wanted virtual campus tours, transparent tuition breakdowns, and immediate online application status updates.',
    design: 'Crafted a warm, inspiring academic visual aesthetic with rich purple accents, video background hero section, and clear interactive enrollment steps.',
    development: 'Built with Next.js, Headless CMS, and custom PDF form generation allowing parents to submit documents securely online with automated admissions status tracking.',
    result: 'Increased prospective student admissions applications by 480% and reduced application processing turnaround from 14 days to 24 hours.',
    metrics: [
      { label: 'Admissions Surge', value: '+480%' },
      { label: 'Paperwork Time Saved', value: '35 hrs/wk' },
      { label: 'Parent Engagement', value: '+180%' },
      { label: 'Search Rank', value: '#1 Local' }
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
    interactiveDemoType: 'web-showcase',
    featured: false,
    testimonial: {
      quote: 'Our online admissions experience went from outdated paperwork to an award-winning digital showcase for our school.',
      author: 'Marcus Vance',
      role: 'Headmaster',
      company: 'Horizon International Academy'
    },
    imageAccent: 'from-purple-500/20 to-indigo-600/20'
  },
  {
    id: 'aegis-global-corporate',
    slug: 'aegis-global-corporate',
    title: 'Aegis Global Holdings Corporate Tech Portal',
    category: 'Web Applications',
    industry: 'Corporate Enterprise',
    clientName: 'Aegis Global Holdings',
    tagline: 'Enterprise corporate portal showcasing investor relations, ESG metrics, and global offices.',
    shortDesc: 'A multi-billion dollar holdings enterprise website with real-time investor data & ESG dashboards.',
    challenge: 'Aegis needed to unify 8 acquired subsidiary companies under one cohesive corporate web umbrella to instill confidence in institutional investors.',
    research: 'Benchmarked Fortune 500 enterprise sites (Apple, Stripe, Siemens) to create a ultra-minimal luxury digital footprint.',
    design: 'Implemented dark mode glassmorphism visual style, sleek SVG particle animations, and subtle scroll-triggered micro-interactions.',
    development: 'Built with Next.js, Framer Motion, and dynamic API endpoints feeding real-time stock quotes and quarterly ESG performance metrics.',
    result: 'Elevated investor confidence, resulting in 3.4x longer session duration and international enterprise inquiries.',
    metrics: [
      { label: 'Session Duration', value: '3.4x Increase' },
      { label: 'Investor Inquiries', value: '+340%' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Global Traffic', value: '120k/mo' }
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Recharts'],
    interactiveDemoType: 'web-showcase',
    featured: true,
    testimonial: {
      quote: 'Nab Digital Studio built a corporate digital asset that positions Aegis at the absolute forefront of modern global tech leadership.',
      author: 'Jonathan Sterling',
      role: 'VP of Corporate Communications',
      company: 'Aegis Global Holdings'
    },
    imageAccent: 'from-blue-600/20 to-cyan-500/20'
  },
  {
    id: 'vanguard-legal-partners',
    slug: 'vanguard-legal-partners',
    title: 'Vanguard Legal Partners Corporate Portal',
    category: 'Web Applications',
    industry: 'Legal Services',
    clientName: 'Vanguard Legal Partners',
    tagline: 'High-authority law firm digital presence, practice area showcase, and attorney booking.',
    shortDesc: 'Luxury law firm platform featuring partner profiles, case result tickers, and confidential consult booking.',
    challenge: 'High-value corporate legal clients found the old law firm website outdated and unconvincing, leading to lost retainer opportunities to competing firms.',
    research: 'Identified corporate decision-makers look for legal practice track records, partner credentials, and instant confidential consultation scheduling.',
    design: 'Created a refined, sophisticated aesthetic with deep gold/cyan gradients, crisp serif & Space Grotesk typography, and interactive case victory timelines.',
    development: 'Developed using React and Tailwind CSS with encrypted consultation request forms and automated calendar booking integration.',
    result: 'Increased high-retainer corporate client consult inquiries by 240% within 90 days of launch.',
    metrics: [
      { label: 'Consult Inquiries', value: '+240%' },
      { label: 'Average Retainer', value: '$25,000+' },
      { label: 'Mobile Visitors', value: '62%' },
      { label: 'Speed Score', value: '97/100' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Calendly API'],
    interactiveDemoType: 'web-showcase',
    featured: false,
    testimonial: {
      quote: 'The website instantly communicates authority and prestige. Our corporate consultation pipeline has never been stronger.',
      author: 'Victoria Thorne, Esq.',
      role: 'Managing Partner',
      company: 'Vanguard Legal Partners'
    },
    imageAccent: 'from-emerald-500/20 to-teal-600/20'
  },
  {
    id: 'luxprop-real-estate',
    slug: 'luxprop-real-estate',
    title: 'LuxProp Luxury Real Estate Marketplace',
    category: 'Web Applications',
    industry: 'Real Estate & Property',
    clientName: 'LuxProp International',
    tagline: 'High-end penthouse showcase with 3D virtual tour embeds and VIP buyer lead capture.',
    shortDesc: 'A luxury property portal featuring interactive floorplans, neighborhood analytics, and lead capture.',
    challenge: 'Multimillion-dollar penthouses require immersive visual presentation that standard real estate listings could not deliver.',
    research: 'VIP buyers expect 4K image galleries, neighborhood price trends, and instant private agent WhatsApp connection.',
    design: 'Designed a ultra-wide glassmorphism layout with full-bleed property sliders, mortgage payment sliders, and floating contact pills.',
    development: 'Built with Next.js, Mapbox, and automated lead routing syncing high-value inquiries directly to agent smartphones via WhatsApp.',
    result: 'Captured 180+ qualified VIP buyer leads resulting in $14.2M in property transactions within 30 days.',
    metrics: [
      { label: 'Property Sales', value: '$14.2M' },
      { label: 'VIP Buyer Leads', value: '180+' },
      { label: 'Lead Response Time', value: '< 60s' },
      { label: 'Conversion Rate', value: '5.2%' }
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Mapbox', 'WhatsApp API', 'Framer Motion'],
    interactiveDemoType: 'web-showcase',
    featured: true,
    testimonial: {
      quote: 'LuxProp set a new benchmark in luxury real estate marketing. Nab Digital Studio delivered absolute perfection.',
      author: 'Carlos Delgado',
      role: 'Founder & CEO',
      company: 'LuxProp International'
    },
    imageAccent: 'from-amber-600/20 to-yellow-500/20'
  },
  {
    id: 'studio-minimal-portfolio',
    slug: 'studio-minimal-portfolio',
    title: 'Studio Minimal Portfolio & Creative Showcase',
    category: 'Web Applications',
    industry: 'Design & Creative',
    clientName: 'Studio Minimal',
    tagline: 'Awwwards-inspired agency portfolio with custom shaders, magnetic buttons, and fluid motion.',
    shortDesc: 'An award-winning interactive portfolio for a global design agency.',
    challenge: 'Needed a web experience that would win international design awards and attract top-tier tech clients.',
    research: 'Studied top award-winning sites on Awwwards and FWA to implement cutting-edge web interactions.',
    design: 'Ultra-minimal dark aesthetic, large typographic statements, glass cards, and custom cursor animations.',
    development: 'Built with React, Canvas animations, and Framer Motion for liquid transitions.',
    result: 'Won Site of the Day honors and generated $450k+ in client inbound agency inquiries.',
    metrics: [
      { label: 'Awwwards Feature', value: 'Site of the Day' },
      { label: 'Inbound Revenue', value: '$450,000+' },
      { label: 'Average Session', value: '4m 12s' },
      { label: 'Bounce Rate', value: '18%' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Canvas'],
    interactiveDemoType: 'web-showcase',
    featured: false,
    testimonial: {
      quote: 'Working with Nab Digital Studio was seamless. They turned our creative vision into a living digital masterpiece.',
      author: 'Liam Vance',
      role: 'Creative Director',
      company: 'Studio Minimal'
    },
    imageAccent: 'from-pink-500/20 to-rose-600/20'
  },
  {
    id: 'global-sales-bi-dashboard',
    slug: 'global-sales-bi-dashboard',
    title: 'Global Enterprise Sales BI Command Center',
    category: 'Dashboards',
    industry: 'SaaS & Enterprise Sales',
    clientName: 'Nexus Global SaaS',
    tagline: 'Real-time sales revenue analytics, pipeline forecasting, and regional performance monitoring.',
    shortDesc: 'Live executive sales dashboard tracking $45M+ ARR, rep performance, and conversion velocity.',
    challenge: 'Sales leadership was tracking $45M ARR across 4 regions using disconnected spreadsheets, making revenue forecasting inaccurate.',
    research: 'Identified key C-suite metrics required: Annual Recurring Revenue (ARR), Net Revenue Retention (NRR), Lead-to-Opportunity velocity, and quota attainment.',
    design: 'Designed a high-density executive command center with interactive Recharts, region heatmaps, and customizable date range toggles.',
    development: 'Built with React, Recharts, and SQL backend providing real-time data refreshes under 200ms.',
    result: 'Saved 15+ hours weekly in manual report creation and improved quarterly sales forecast accuracy by 94%.',
    metrics: [
      { label: 'ARR Tracked', value: '$45.2M' },
      { label: 'Hours Saved', value: '15+ hrs/wk' },
      { label: 'Forecast Accuracy', value: '94%' },
      { label: 'Data Latency', value: '< 200ms' }
    ],
    techStack: ['React', 'Recharts', 'TypeScript', 'Tailwind CSS', 'SQL Server', 'Node.js'],
    interactiveDemoType: 'sales-bi',
    featured: true,
    testimonial: {
      quote: 'This dashboard is opened every single morning by our executive team. It gives us total clarity over our $45M sales engine.',
      author: 'Marcus Brody',
      role: 'Chief Revenue Officer',
      company: 'Nexus Global SaaS'
    },
    imageAccent: 'from-blue-500/20 to-cyan-600/20'
  },
  {
    id: 'talent-hr-analytics-dashboard',
    slug: 'talent-hr-analytics-dashboard',
    title: 'Talent & Workforce HR Analytics Suite',
    category: 'Dashboards',
    industry: 'Human Resources & Corporate',
    clientName: 'OmniCorp Global',
    tagline: 'Employee retention tracking, turnover risk modeling, and headcount forecasting dashboard.',
    shortDesc: 'Interactive HR dashboard tracking employee headcount, turnover risk, and hiring efficiency.',
    challenge: 'Unplanned employee attrition was costing OmniCorp over $1.8M annually due to lack of early warning exit indicators.',
    research: 'Analyzed 2,500 employee records to isolate key attrition correlates: tenure length, promotion intervals, and satisfaction scores.',
    design: 'Clean, approachable dashboard UI with clear risk color codes (Green/Amber/Red) and department breakdown cards.',
    development: 'Developed with React and Recharts, implementing predictive attrition risk algorithms and automated alert emails.',
    result: 'Reduced unwanted employee turnover by 32% and saved over $600k in annual recruiting costs.',
    metrics: [
      { label: 'Turnover Reduction', value: '-32%' },
      { label: 'Annual Cost Saved', value: '$600,000+' },
      { label: 'Headcount Tracked', value: '2,500' },
      { label: 'HR Manager Adoption', value: '100%' }
    ],
    techStack: ['React', 'Recharts', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    interactiveDemoType: 'hr-analytics',
    featured: true,
    testimonial: {
      quote: 'Nab Digital Studio built an HR analytics tool that actively helps us retain our top engineering talent.',
      author: 'Sarah Jenkins',
      role: 'VP of People & Culture',
      company: 'OmniCorp Global'
    },
    imageAccent: 'from-purple-500/20 to-pink-600/20'
  },
  {
    id: 'financial-bi-cashflow-suite',
    slug: 'financial-bi-cashflow-suite',
    title: 'Financial BI Cash Flow & Runway Dashboard',
    category: 'BI & Analytics',
    industry: 'Finance & Banking',
    clientName: 'Apex Capital Ventures',
    tagline: 'CFO dashboard for real-time EBITDA tracking, cash runway projection, and expense breakdowns.',
    shortDesc: 'Executive financial BI dashboard providing real-time EBITDA, monthly runway, and expense tracking.',
    challenge: 'Finance managers took 5 days at month-end to consolidate bank balances, vendor invoices, and payroll into financial reports.',
    research: 'CFOs required instant drill-down from macro EBITDA numbers into individual transaction line items.',
    design: 'Ultra-sleek dark finance theme with emerald profit indicators, expense distribution pie charts, and monthly runway gauges.',
    development: 'Engineered with React, Recharts, and SQL queries aggregating bank APIs and accounting software feeds.',
    result: 'Reduced month-end financial closing time from 5 days to 15 minutes with 100% data auditability.',
    metrics: [
      { label: 'Closing Time', value: '15 Mins (From 5 Days)' },
      { label: 'Data Accuracy', value: '100%' },
      { label: 'Runway Projection', value: '24 Months' },
      { label: 'Audit Compliance', value: 'SOC 2 Ready' }
    ],
    techStack: ['React', 'Recharts', 'TypeScript', 'Tailwind CSS', 'SQL', 'Python'],
    interactiveDemoType: 'finance-bi',
    featured: true,
    testimonial: {
      quote: 'We replaced 20 static Excel sheets with one dynamic financial BI dashboard. Unbelievable efficiency gain.',
      author: 'David Chen, CFA',
      role: 'Chief Financial Officer',
      company: 'Apex Capital Ventures'
    },
    imageAccent: 'from-emerald-500/20 to-green-600/20'
  },
  {
    id: 'inventory-supplychain-dashboard',
    slug: 'inventory-supplychain-dashboard',
    title: 'Supply Chain & Inventory Automation BI',
    category: 'Dashboards',
    industry: 'Logistics & E-Commerce',
    clientName: 'GlobalLogix Warehousing',
    tagline: 'Real-time stock level monitoring, reorder point alerts, and warehouse fulfillment metrics.',
    shortDesc: 'Automated inventory dashboard preventing stockouts and optimizing warehouse reorder points.',
    challenge: 'Frequent stockouts of high-demand items cost GlobalLogix $350k in lost sales while excess dead stock clogged warehouse space.',
    research: 'Calculated optimal Safety Stock levels based on lead times and seasonal demand spikes.',
    design: 'High-contrast operational status cards with warning indicators for low stock items and lead time gauges.',
    development: 'Built with React, Recharts, and automated background jobs updating stock counts every 60 seconds.',
    result: 'Eliminated stockout events by 88% and reduced inventory carrying costs by $210,000.',
    metrics: [
      { label: 'Stockout Reduction', value: '-88%' },
      { label: 'Carrying Cost Savings', value: '$210,000' },
      { label: 'Fulfillment Speed', value: '+45%' },
      { label: 'Sync Latency', value: '60 Seconds' }
    ],
    techStack: ['React', 'Recharts', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js'],
    interactiveDemoType: 'inventory-bi',
    featured: false,
    testimonial: {
      quote: 'The inventory dashboard gave our warehouse ops total visibility. No more emergency shipping fees or stockouts.',
      author: 'Robert K. Miller',
      role: 'Director of Logistics',
      company: 'GlobalLogix Warehousing'
    },
    imageAccent: 'from-amber-500/20 to-orange-600/20'
  },
  {
    id: 'customer-ltv-analytics-dashboard',
    slug: 'customer-ltv-analytics-dashboard',
    title: 'Customer Analytics & SaaS Cohort Suite',
    category: 'BI & Analytics',
    industry: 'SaaS & Digital Products',
    clientName: 'CloudScale SaaS',
    tagline: 'SaaS metrics dashboard tracking LTV, CAC payback, retention cohorts, and churn triggers.',
    shortDesc: 'Deep customer analytics suite for cohort retention, CAC payback, and user engagement profiling.',
    challenge: 'High customer acquisition cost (CAC) paired with mystery early churn was slowing down Series B funding rounds.',
    research: 'Built customer usage cohort matrices isolating specific feature usage linked to 90-day retention.',
    design: 'Clean SaaS analytical dashboard featuring retention heatmaps, user activity line charts, and ARPU gauges.',
    development: 'Built with React, Recharts, and BigQuery connection processing 120,000 active user event logs daily.',
    result: 'Decreased 30-day user churn by 28% and accelerated CAC payback period from 14 months to 8 months.',
    metrics: [
      { label: 'Churn Reduction', value: '-28%' },
      { label: 'CAC Payback', value: '8 Months' },
      { label: 'Active Users Tracked', value: '120,000' },
      { label: 'Series B Raised', value: '$18M' }
    ],
    techStack: ['React', 'Recharts', 'TypeScript', 'Tailwind CSS', 'BigQuery', 'Python'],
    interactiveDemoType: 'sales-bi',
    featured: false,
    testimonial: {
      quote: 'Nab Digital Studio gave us the exact data metrics required to impress investors and secure our $18M Series B.',
      author: 'Amanda Thorne',
      role: 'CEO & Founder',
      company: 'CloudScale SaaS'
    },
    imageAccent: 'from-indigo-500/20 to-cyan-600/20'
  },
  {
    id: 'csuite-powerbi-executive-command',
    slug: 'csuite-powerbi-executive-command',
    title: 'C-Suite Power BI Executive Command Suite',
    category: 'BI & Analytics',
    industry: 'Conglomerate & Enterprise',
    clientName: 'Apex Enterprise Holdings',
    tagline: 'Unified Microsoft Power BI report hub consolidating 6 international subsidiaries into one view.',
    shortDesc: 'Enterprise Power BI report suite with custom DAX calculations, RLS, and mobile executive view.',
    challenge: 'Leadership had to open 6 separate reporting systems to understand monthly revenue, creating strategic blind spots.',
    research: 'Modeled a star schema data warehouse consolidating 6 different ERP schemas into standard financial dimensions.',
    design: 'Created custom Power BI theme JSON, sleek dark UI background, and executive navigation tabs.',
    development: 'Engineered with Power BI, Star Schema modeling, and advanced DAX time-intelligence formulas.',
    result: '100% unified financial visibility across all 6 business units with automated daily scheduled refresh.',
    metrics: [
      { label: 'Entities Unified', value: '6 Global Subsidiaries' },
      { label: 'Report Refresh', value: 'Automated Daily' },
      { label: 'Data Accuracy', value: '100%' },
      { label: 'Executive Adoption', value: 'C-Suite Level' }
    ],
    techStack: ['Power BI', 'DAX', 'SQL Server', 'Power Query (M)', 'Azure Data Lake'],
    interactiveDemoType: 'finance-bi',
    featured: true,
    testimonial: {
      quote: 'Nab Digital Studio delivered an enterprise Power BI command hub that gives our C-suite total operational mastery.',
      author: 'Sir Ronald Vance',
      role: 'Chairman of the Board',
      company: 'Apex Enterprise Holdings'
    },
    imageAccent: 'from-blue-600/20 to-purple-600/20'
  }
];
