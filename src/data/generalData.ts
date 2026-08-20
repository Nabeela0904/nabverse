export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceInr?: number;
  period: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  category: 'web' | 'bi' | 'retainer';
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'web-startup',
    name: 'Growth Web Package',
    subtitle: 'Ideal for startups, restaurants, and small businesses needing a high-converting web presence.',
    price: 1499,
    priceInr: 34999,
    period: 'one-time',
    features: [
      'Up to 5 Custom React / Next.js Pages',
      'Mobile-First Responsive Design',
      '95+ Google Lighthouse Speed Score',
      'Headless CMS Integration',
      'Technical SEO & Schema Markup',
      'Lead Form & WhatsApp Sync',
      '30 Days Post-Launch Support'
    ],
    ctaText: 'Start Web Project',
    category: 'web'
  },
  {
    id: 'web-enterprise',
    name: 'Enterprise Web & App',
    subtitle: 'Tailored full-stack platforms, client portals, and custom SaaS web applications.',
    price: 3499,
    priceInr: 69999,
    period: 'one-time',
    popular: true,
    features: [
      'Unlimited Custom Dynamic Pages',
      'Full Stack Auth & Supabase Database',
      'Custom Interactive Calculators & Demos',
      'Headless E-Commerce & Stripe Checkout',
      'Custom AI Chatbot Integration',
      'Awwwards-Grade Motion & Animations',
      'Priority 90-Day VIP SLA Support'
    ],
    ctaText: 'Build Enterprise Platform',
    category: 'web'
  },
  {
    id: 'bi-starter',
    name: 'BI & Excel Automation',
    subtitle: 'Streamline departmental reports and automate manual spreadsheet workflows.',
    price: 1199,
    priceInr: 29999,
    period: 'one-time',
    features: [
      'Custom Power BI Report or Excel Tool',
      'Up to 3 Data Source Connections',
      'Automated Power Query & DAX Measures',
      'Interactive Recharts Dashboard View',
      'Executive PDF & Excel Exporters',
      'User Video Walkthrough Guide'
    ],
    ctaText: 'Automate Business Data',
    category: 'bi'
  },
  {
    id: 'bi-executive',
    name: 'C-Suite BI Command Suite',
    subtitle: 'Comprehensive multi-entity data warehouse, SQL modeling, and executive BI portals.',
    price: 2899,
    priceInr: 59999,
    period: 'one-time',
    features: [
      'Enterprise Power BI & SQL Architecture',
      'Star Schema Data Modeling',
      'Unlimited Data Source Connectors',
      'Real-Time Automated ETL Pipelines',
      'Row-Level Security & Role Permissions',
      'Custom Executive Web Dashboard',
      'Dedicated Data Governance Training'
    ],
    ctaText: 'Deploy C-Suite BI',
    category: 'bi'
  },
  {
    id: 'retainer-growth',
    name: 'Growth Care Retainer',
    subtitle: 'Continuous digital evolution, 24/7 security, backups, and monthly feature development.',
    price: 499,
    priceInr: 18999,
    period: '/month',
    features: [
      '10 Hours Monthly Dev & Design Time',
      '24/7 Uptime & Security Monitoring',
      'Daily Automated Offsite Backups',
      'Core Package & Security Patches',
      'Monthly Speed & SEO Diagnostics',
      '24-Hour SLA Emergency Turnaround'
    ],
    ctaText: 'Subscribe to Care Plan',
    category: 'retainer'
  }
];

export const TESTIMONIALS = [
  {
    quote: "This invitation is the best...I was so pleased with it and really loved the way it created a royal and unique look to my invitation.. everyone was astonished by it and kept telling me that they had never seen an invitation as such.. it's totally worth it and I thank Nabeela heartfully for creating such a wonderful invitation",
    author: "Shoaib & Zeenath",
    role: "Bride & Groom",
    company: "Royal Digital Invitation",
    image: "/images/client_feedback_shoaib.jpg",
    rating: 5
  },
  {
    quote: "Working with Nabeela was easily the best experience I’ve had with a freelance developer. From our first call, communication was clear, proactive, and jargon-free. I was never left guessing about timelines or progress. When standard templates couldn't handle our project's unique requirements, they built robust, custom coded features that run seamlessly and load at lightning speed. Their deep technical skill, combined with an exceptional eye for detail and reliability, made the entire build effortless. If you need clean, custom code and a developer who genuinely takes ownership of the outcome, look no further.",
    author: "Suhail",
    role: "Website Building Client",
    company: "Custom Web Application",
    useIcon: true,
    rating: 5
  },
  {
    quote: "NabVerse didn't just build us a website; they transformed our entire digital acquisition pipeline. Direct online reservations jumped 215% and third-party fees were cut completely.",
    author: "Chef Antoine Laurent",
    role: "Executive Chef & Owner",
    company: "Gourmet Bistro Group",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    quote: "The Power BI executive suite built by NabVerse gives our C-suite total real-time clarity across $45M in sales operations. What used to take 15 hours weekly is now instant.",
    author: "Marcus Brody",
    role: "Chief Revenue Officer",
    company: "Nexus Global SaaS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    quote: "The level of design aesthetics and technical precision is unmatched. They delivered an Awwwards-quality corporate portal that established our firm as a global authority.",
    author: "Jonathan Sterling",
    role: "VP Corporate Communications",
    company: "Aegis Global Holdings",
    useIcon: true,
    rating: 5
  },
  {
    quote: "The HIPAA-compliant telemedicine web portal they built handles 50,000+ patient consults with zero downtime. NabVerse is our trusted technology partner.",
    author: "Dr. Elena Rostova",
    role: "Chief Medical Officer",
    company: "ApexCare Health System",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5
  }
];

export const AGENCY_STATS = [
  { value: '15-Day', label: 'Post Launch Support' },
  { value: '99.8%', label: 'On-Time SLA Delivery' },
  { value: '3.4x', label: 'Average Client Lead Lift' },
  { value: '95+', label: 'Lighthouse Performance Score' }
];

export const INDUSTRIES_SERVED = [
  { name: 'Startups & SaaS', desc: 'High-growth digital products, client portals & conversion engines.', icon: 'Rocket' },
  { name: 'Healthcare & Medical', desc: 'HIPAA-compliant telemedicine, clinic portals & appointment schedulers.', icon: 'Activity' },
  { name: 'Education & Schools', desc: 'Student enrollment hubs, parent portals & course LMS systems.', icon: 'GraduationCap' },
  { name: 'Hospitality & Dining', desc: 'Direct online ordering, table reservation systems & interactive menus.', icon: 'Utensils' },
  { name: 'Corporate Enterprise', desc: 'Multi-entity corporate portals, investor relations & ESG dashboards.', icon: 'Building2' },
  { name: 'Real Estate & Luxury', desc: 'Property marketplaces, virtual tour embeds & VIP buyer capture.', icon: 'Home' },
  { name: 'Legal & Professional', desc: 'High-authority law firm portals, case victory tickers & consult booking.', icon: 'Scale' },
  { name: 'Finance & Banking', desc: 'Real-time CFO cash flow dashboards, DAX modeling & expense trackers.', icon: 'Coins' }
];

export const COMPANY_TIMELINE = [
  { year: '2020', title: 'Studio Inception', desc: 'Founded with a vision to merge luxury Silicon Valley UI design with deep business intelligence engineering.' },
  { year: '2022', title: 'BI & Analytics Expansion', desc: 'Launched enterprise Power BI, SQL data solutions, and automated financial modeling practices.' },
  { year: '2024', title: 'AI & Automation Suite', desc: 'Integrated custom LLM agents, vector databases, and Make/Zapier workflow automation.' },
  { year: '2026', title: 'Global Multi-Million Brand', desc: 'Serving 150+ international clients across healthcare, SaaS, corporate, and luxury hospitality.' }
];

export const TECH_STACK_ITEMS = [
  { name: 'React', category: 'Frontend', desc: 'Component-driven UI library' },
  { name: 'Next.js', category: 'Framework', desc: 'Server-side rendering & SSG' },
  { name: 'TypeScript', category: 'Language', desc: 'Type-safe full stack code' },
  { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-first luxury styling' },
  { name: 'Framer Motion', category: 'Animation', desc: 'Fluid UI motion & physics' },
  { name: 'Power BI', category: 'Analytics', desc: 'Enterprise data visualization' },
  { name: 'PostgreSQL / SQL', category: 'Database', desc: 'ACID relational data store' },
  { name: 'Supabase', category: 'Backend', desc: 'Serverless Auth & Realtime DB' },
  { name: 'Recharts', category: 'Data Vis', desc: 'Interactive React charts' },
  { name: 'Node.js', category: 'Runtime', desc: 'Scalable backend API services' },
  { name: 'OpenAI API', category: 'AI Tools', desc: 'GPT-4 & Embeddings integration' },
  { name: 'Vercel', category: 'Hosting', desc: 'Global edge network delivery' }
];

export const FAQ_ITEMS = [
  {
    question: "What makes NabVerse different from traditional agencies?",
    answer: "We bridge the gap between creative luxury design and hard business intelligence. Most agencies only build pretty websites; we engineer data-driven web platforms, automated Power BI dashboards, and AI workflows that directly measure and accelerate revenue growth."
  },
  {
    question: "How long does a typical web or BI project take?",
    answer: "Landing pages and automated Excel workbooks are delivered in 5 to 10 days. Full custom website builds and Power BI dashboard suites typically take between 2 to 4 weeks."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes! We offer dedicated monthly Growth Care retainers covering 24/7 security monitoring, daily backups, speed optimizations, and ongoing design/feature enhancements."
  },
  {
    question: "How do we get started on a project?",
    answer: "You can use our online Website Cost Calculator or BI Estimator for an instant proposal, or click 'Book Consultation' to schedule a 1-on-1 strategy call with our leadership team."
  }
];
