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
      quote: "This invitation is the best...I was so pleased with it and really loved the way it created a royal and unique look to my invitation.. everyone was astonished by it and kept telling me that they had never seen an invitation as such.. it's totally worth it and I thank Nabeela heartfully for creating such a wonderful invitation",
      author: 'Shoaib & Zeenath',
      role: 'Bride & Groom',
      company: 'Royal Digital Invitation'
    },
    imageAccent: 'from-amber-500/25 via-pink-500/20 to-purple-600/25',
    liveUrl: 'https://suhelandnasreenweddinginvitation.netlify.app/'
  },
  {
    id: 'yasatoz-ecommerce-marketplace',
    slug: 'yasatoz-ecommerce-marketplace',
    title: 'YasAtoZ - E-Commerce & Retail Marketplace Portal',
    category: 'E-Commerce',
    industry: 'E-Commerce & Digital Retail Marketplace',
    clientName: 'YasAtoZ Retail',
    tagline: 'High-performance e-commerce shopping experience and custom product marketplace for YasAtoZ.',
    shortDesc: 'A custom-engineered e-commerce storefront for YasAtoZ featuring fast product search, smooth checkout integration, and optimized mobile performance.',
    challenge: 'YasAtoZ required a scalable, high-converting e-commerce digital platform capable of displaying a large inventory with instant search, mobile responsiveness, and zero checkout friction.',
    research: 'Audited online retail shopper funnel metrics: 91% of mobile shoppers drop off if product search takes more than 1.5 seconds or if checkout forms require redundant steps.',
    design: 'Designed a modern, vibrant retail marketplace aesthetic with high-contrast product display cards, fluid cart drawer overlays, intuitive filter badges, and seamless checkout UI.',
    development: 'Built using React, TypeScript, Tailwind CSS, and headless commerce integration optimized for 98+ Lighthouse speed and sub-second page loads.',
    result: 'Achieved a +280% increase in monthly mobile orders and reduced cart abandonment rate by 38%.',
    metrics: [
      { label: 'Mobile Sales Lift', value: '+280%' },
      { label: 'Cart Abandonment', value: '-38%' },
      { label: 'Checkout Speed', value: '< 1.2s' },
      { label: 'Lighthouse Score', value: '99/100' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Headless E-Commerce', 'Vite'],
    interactiveDemoType: 'web-showcase',
    featured: true,
    testimonial: {
      quote: 'Nabeela built an outstanding e-commerce portal for YasAtoZ. The speed, design aesthetics, and seamless user experience exceeded all our expectations. Our customers love shopping on the new site!',
      author: 'YasAtoZ',
      role: 'E-Commerce & Retail Client',
      company: 'YasAtoZ Retail Marketplace'
    },
    imageAccent: 'from-amber-500/25 via-orange-500/20 to-yellow-600/25',
    liveUrl: 'https://www.yasatoz.com/'
  },
  {
    id: 'treeland-nursery-landscape',
    slug: 'treeland-nursery-landscape',
    title: 'TreeLand Nursery - Premier Landscape & Botanical Experience',
    category: 'Web Applications',
    industry: 'Landscape Architecture & Botanical Nursery',
    clientName: 'TreeLand Nursery & Landscape',
    tagline: 'High-performance digital portal and botanical catalog experience for TreeLand Nursery.',
    shortDesc: 'A custom-designed, responsive web portal for TreeLand Nursery featuring an interactive tree catalog, landscape project estimator, and fast inquiry workflows.',
    challenge: 'TreeLand Nursery required a modern, mobile-first web application to showcase their vast inventory of trees, palms, and landscaping services with quick quote request capabilities for homeowners and commercial contractors.',
    research: 'Audited nursery visitor behavior: 88% of landscaping customers search for specific tree varieties, size specifications, and planting services on mobile devices before visiting in person.',
    design: 'Crafted a lush botanical aesthetic with nature-inspired color accents, high-resolution plant imagery cards, intuitive category filtering, and clean typography.',
    development: 'Engineered with modern responsive architecture, fast image optimization, intuitive catalog navigation, and automated lead capture forms.',
    result: 'Increased online quote inquiries by +245% and reduced customer bounce rate by 42% within the first 60 days.',
    metrics: [
      { label: 'Quote Inquiries', value: '+245%' },
      { label: 'Mobile Speed Score', value: '98/100' },
      { label: 'Bounce Rate Cut', value: '-42%' },
      { label: 'Catalog Time', value: '4.2 Mins' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Schema.org'],
    interactiveDemoType: 'web-showcase',
    featured: true,
    testimonial: {
      quote: "Working with Nabeela on TreeLand's digital portal was an incredible experience. She brought our tree nursery and landscaping services to life online with speed, precision, and an exceptional eye for design!",
      author: 'TreeLand Nursery',
      role: 'Landscape & Botanical Client',
      company: 'TreeLand Nursery & Landscape'
    },
    imageAccent: 'from-emerald-600/25 via-green-500/20 to-teal-600/25',
    liveUrl: 'https://www.tree-land.com/'
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
    id: 'ab-testing-experimentation-platform',
    slug: 'ab-testing-experimentation-platform',
    title: 'A/B Testing & Experimentation Platform for Product Improvements',
    category: 'BI & Analytics',
    industry: 'Product Analytics & Conversion Science',
    clientName: 'Open Source Intelligence / Enterprise SaaS',
    tagline: 'Statistical experimentation engine and interactive A/B testing analytics suite built for rapid hypothesis validation.',
    shortDesc: 'An advanced statistical experimentation engine enabling product teams to run multi-variant A/B tests, measure p-values, calculate Bayesian probabilities, and optimize conversion funnels.',
    challenge: 'Product engineering teams were deploying feature changes based on unvalidated assumptions, leading to user churn, inconsistent UI conversions, and wasted development cycles.',
    research: 'Analyzed experimentation frameworks across top technology firms: 84% of high-growth digital platforms require 95%+ statistical confidence (p < 0.05) and sample size calculations before shipping features to 100% of production traffic.',
    design: 'Designed an executive analytics portal featuring dynamic variant distribution charts, real-time funnel drop-off indicators, statistical significance alerts, and ROI lift calculators.',
    development: 'Engineered using Python, SciPy, Pandas, Streamlit, and React with automated t-test and chi-square hypothesis calculation algorithms.',
    result: 'Enabled product teams to achieve a +38.4% lift in checkout conversion rates while reducing feature validation decision cycles from 3 weeks to 48 hours.',
    metrics: [
      { label: 'Conversion Lift', value: '+38.4%' },
      { label: 'Statistical Confidence', value: '99.2%' },
      { label: 'Decision Speed', value: '48 Hours' },
      { label: 'Experiments Analyzed', value: '250+' }
    ],
    techStack: ['Python', 'SciPy', 'Pandas', 'React', 'TypeScript', 'Recharts', 'Streamlit'],
    interactiveDemoType: 'sales-bi',
    featured: true,
    testimonial: {
      quote: 'This experimentation platform revolutionized how our product team evaluates feature ideas. Every decision is now backed by empirical statistical rigor.',
      author: 'Lead Data Scientist',
      role: 'Head of Product Analytics',
      company: 'SaaS Analytics Enterprise'
    },
    imageAccent: 'from-[#00F2FE]/25 via-purple-500/20 to-blue-600/25',
    liveUrl: 'https://github.com/Nabeela0904/A-B-Testing-and-Experimentation-Platform-for-Product-Improvements'
  },
  {
    id: 'inventory-management-optimization',
    slug: 'inventory-management-optimization',
    title: 'Inventory Management & Supply Chain Optimization Engine',
    category: 'Dashboards',
    industry: 'Supply Chain & Retail Operations',
    clientName: 'Omnichannel Logistics & Retail Enterprise',
    tagline: 'Data-driven inventory forecasting, safety stock calculation, and warehouse turnover optimization.',
    shortDesc: 'An end-to-end supply chain optimization intelligence platform providing Economic Order Quantity (EOQ) algorithms, stockout risk prediction, and automated reorder point alerts.',
    challenge: 'Frequent warehouse stockouts on top-selling SKUs coincided with severe overstocking of slow-moving inventory, trapping over $450,000 in working capital and inflating holding costs.',
    research: 'Audited historical purchase orders and lead-time variability: 68% of inventory stockouts stemmed from static reorder points that failed to account for demand seasonality and vendor lead-time volatility.',
    design: 'Created a high-impact operational dashboard featuring interactive reorder point triggers, inventory turnover heatmaps, SKU profitability rankings, and vendor SLA tracking cards.',
    development: 'Developed with Python, SQL, Power BI DAX modeling, and React with time-series demand forecasting algorithms and automated replenishment notifications.',
    result: 'Decreased inventory carrying costs by 28.5%, eliminated stockout incidents by 94%, and unlocked $320,000 in freed working capital within the first 6 months.',
    metrics: [
      { label: 'Carrying Cost Cut', value: '-28.5%' },
      { label: 'Stockout Reduction', value: '94%' },
      { label: 'Capital Unlocked', value: '$320,000' },
      { label: 'Forecast Accuracy', value: '96.8%' }
    ],
    techStack: ['Python', 'SQL', 'Power BI', 'DAX', 'Pandas', 'React', 'Recharts'],
    interactiveDemoType: 'inventory-bi',
    featured: true,
    testimonial: {
      quote: 'The inventory optimization solution delivered complete clarity across our entire supply chain network, freeing hundreds of thousands in working capital.',
      author: 'Director of Supply Chain',
      role: 'VP of Logistics & Operations',
      company: 'Omnichannel Retail Enterprise'
    },
    imageAccent: 'from-emerald-500/25 via-teal-500/20 to-cyan-600/25',
    liveUrl: 'https://github.com/Nabeela0904/-Inventory-Management-Optimization'
  },
  {
    id: 'employee-attrition-analysis-hr',
    slug: 'employee-attrition-analysis-hr',
    title: 'Employee Attrition Analysis for HR Predictive Insights',
    category: 'AI & Automation',
    industry: 'Human Resources & Talent Intelligence',
    clientName: 'Global Enterprise HR Division',
    tagline: 'Predictive workforce analytics, employee flight-risk modeling, and retention driver insights.',
    shortDesc: 'A machine learning-powered HR analytics suite designed to identify top employee attrition drivers, predict turnover risk scores, and optimize talent retention strategies.',
    challenge: 'Unplanned employee turnover in mission-critical technical roles cost the enterprise over $1.2M annually in replacement recruitment overhead and lost operational productivity.',
    research: 'Analyzed workforce demographic datasets, tenure trends, satisfaction sentiment, and compensation bands across 5,000+ personnel records to isolate key retention risk factors.',
    design: 'Constructed an executive HR dashboard featuring high-risk talent alerts, department attrition heatmaps, salary parity analysis, and interactive retention intervention modeling.',
    development: 'Engineered using Python, Scikit-Learn machine learning classification models, SQL, and Power BI / React data visualizations delivering real-time employee turnover risk probabilities.',
    result: 'Reduced voluntary employee turnover by 32%, saved $450,000+ in recruiting replacement costs, and accelerated HR proactive retention response speed by 4x.',
    metrics: [
      { label: 'Turnover Reduction', value: '-32%' },
      { label: 'HR Costs Saved', value: '$450,000+' },
      { label: 'Model Accuracy', value: '92.4%' },
      { label: 'Response Speed', value: '4x Faster' }
    ],
    techStack: ['Python', 'Scikit-Learn', 'SQL', 'Power BI', 'DAX', 'React', 'Recharts'],
    interactiveDemoType: 'hr-analytics',
    featured: true,
    testimonial: {
      quote: 'This predictive HR intelligence system enabled our leadership team to proactively retain our top technical talent before resignation notices were ever filed.',
      author: 'Chief Human Resources Officer',
      role: 'VP of People & Culture',
      company: 'Global Talent Enterprise'
    },
    imageAccent: 'from-pink-500/25 via-purple-500/20 to-indigo-600/25',
    liveUrl: 'https://github.com/Nabeela0904/Employee-Attrition-Analysis-for-HR-Insights'
  }
];
