import React from 'react';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { FaFile, FaUserDoctor, FaChartBar, FaNetworkWired } from 'react-icons/fa6';
import { TbAlignBoxCenterStretch, TbHierarchy } from 'react-icons/tb';
import { PiBrainThin, PiHandTapLight } from 'react-icons/pi';
import { LuUsersRound } from 'react-icons/lu';
import { GoServer } from 'react-icons/go';
import { CiGlobe } from 'react-icons/ci';
import { FiKey, FiShield, FiFileText, FiAward } from 'react-icons/fi';

export const supportxContent = {
  hero: {
    subtitle: "Enterprise Support",
    title: (
      <>
        <span className="text-white/90">Intelligent <br /> Support</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400">
          Optimization &
        </span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400">
          Efficiency
        </span>
      </>
    ),
    description: "Empower your support teams with AI-driven insights, automated ticketing, and proactive resolution tracking across your global support infrastructure.",
    buttonText: "Explore SupportX",
    backgroundImage: "../assets/montex/hero-bg.png", // Reuse bg for consistency
    heroImage: "../assets/montex/hero-img.png", // Reuse or replace
    featureTags: [
      { position: "bottom-8 left-0", icon: "🛠️", label: "Auto-Resolution" },
      { position: "bottom-8 right-0", icon: "📈", label: "Predictive Ticketing" }
    ]
  },
  modernNetworks: {
    title: "Support Operations Are More Critical Than Ever",
    description: "Modern customer expectations demand instant resolution. Static help desks and manual ticket routing can't keep up with the volume and complexity of today's enterprise demands. You need a platform that thinks as fast as your customers.",
    cards: [
      { icon: "LuUsersRound", title: "Response Lag", description: "Delayed ticket handling causing customer friction." },
      { icon: "FiAlertTriangle", title: "Siloed Knowledge", description: "Expertise locked in individual heads rather than the platform." },
      { icon: "FaNetworkWired", title: "Workflow Chaos", description: "Inconsistent processes across different support tiers." },
      { icon: "HiOutlineBolt", title: "Manual Overload", description: "Agents spending 40% of time on repetitive data entry." },
      { icon: "IoMdCloudOutline", title: "Opaque Metrics", description: "Difficulty tracking the true cost of resolution." }
    ]
  },
  commandCenter: {
    title: { prefix: "Your Support", highlight: "Intelligence Command", suffix: "Center" },
    steps: [
      { color: "blue", icon: "TbHierarchy3", title: "Deep Integration", description: "SupportX connects with all your customer touchpoints, CRM, and internal telemetry." },
      { color: "purple", icon: "PiBrainThin", title: "Smart Routing", description: "AI analyzes intent and sentiment to route cases to the perfect agent automatically." },
      { color: "yellow", icon: "HiOutlineBolt", title: "Proactive Fixes", description: "System identifies recurring issues and triggers automated fixes before tickets are even opened." },
      { color: "green", icon: "RxTarget", title: "Feedback Loop", description: "Continuously refines help articles and bot logic based on successful resolutions." }
    ]
  },
  keyFeatures: {
    title: "SupportX Core Capabilities",
    row1: {
      card1: {
        icon: "FaRegChartBar",
        title: "Sentiment & Intent Analysis",
        description: "Understand the urgency and mood of every customer interaction in real-time.",
        features: ["Multi-language NLP", "Urgency scores", "Historical context", "Agent guidance"]
      },
      image: "../assets/montex/key-features.png", // Replace with support specific if available
      card2: {
        icon: "CiFileOn",
        title: "Automated Knowledge Gen",
        description: "Automatically convert successful resolutions into searchable help center articles.",
        features: ["Auto-drafting", "Version control", "SEO optimization", "Review workflows"]
      }
    },
    row2: [
      {
        icon: "TbHierarchy",
        title: "Unified Agent Desktop",
        description: "One interface for voice, chat, email, and social media with full customer history.",
        features: ["Omnichannel sync", "Integrated KB", "Real-time collab", "Presence management"]
      },
      {
        icon: "PiBrainThin",
        title: "Predictive Load Balancing",
        description: "Forecast support volumes and suggest staffing adjustments before surges occur.",
        features: ["Seasonal modeling", "Shift optimization", "Burndown charts", "Capacity alerts"]
      },
      {
        icon: "RxTarget",
        title: "Custom SLA Orchestrator",
        description: "Define and enforce complex SLAs for different customer tiers and product lines.",
        features: ["Tiered alerts", "Auto-escalation", "Executive reporting", "Breach forecasting"]
      }
    ]
  },
  industrySpecs: {
    title: "Support Industry",
    highlight: "Verticals",
    tabs: [
      { 
        id: 'saas', 
        label: 'SaaS Platforms', 
        icon: <VscTypeHierarchySub />,
        title: 'B2B SaaS Support',
        description: 'Designed for high-growth software companies managing complex user bases and API integrations.',
        features: [
          'Direct integration with dev task managers (Jira/GitHub)',
          'Feature request aggregation from support tickets',
          'Trial-to-Paid conversion support triggers',
          'Multi-tenant account health dashboards'
        ]
      },
      { 
        id: 'ecommerce', 
        label: 'E-commerce', 
        icon: <FaFile />,
        title: 'Retail & E-commerce',
        description: 'Scalable support for high-volume consumer interactions and order logistics.',
        features: [
          'Order tracking and refund automation',
          'Peak season surge management',
          'Social commerce message integration',
          'Post-purchase feedback automation'
        ]
      },
      { 
        id: 'fintech', 
        label: 'Fintech', 
        icon: <FaUserDoctor />,
        title: 'Financial Tech',
        description: 'Compliance-first support for regulated financial services and digital banking.',
        features: [
          'Verified identity support channels',
          'Secure document exchange and review',
          'Regulatory reporting export tools',
          'Fraud alert escalation workflows'
        ]
      },
      { 
        id: 'managed', 
        label: 'Managed Services', 
        icon: <TbAlignBoxCenterStretch />,
        title: 'MSPs & Outsourcing',
        description: 'Efficiency tools for teams supporting multiple third-party clients and SLAs.',
        features: [
          'Client-specific branding and portals',
          'Billable time tracking and export',
          'Standardized global workflows',
          'Internal agent bench-strength metrics'
        ]
      }
    ]
  },
  technicalSpecs: {
    title: "SupportX Infrastructure",
    card1: {
      title: "AI-Driven Reporting & Analytics",
      platforms: [
        { icon: "💻", label: "On-Premises", bgColor: "bg-cyan-500/20", borderColor: "border-cyan-500/40" },
        { icon: <PiBrainThin />, label: "Cloud", bgColor: "bg-green-500/20", borderColor: "border-green-500/40" },
        { icon: "📡", label: "Edge", bgColor: "bg-purple-500/20", borderColor: "border-purple-500/40" },
        { icon: "🔄", label: "Hybrid", bgColor: "bg-orange-500/20", borderColor: "border-orange-500/40" }
      ],
      support: [
        { label: "Windows" }, { label: "Linux" }, { label: "VMare" }, { label: "Container" }
      ]
    },
    card2: {
      title: "Scalability Matrix",
      sizes: [
        { icon: <LuUsersRound />, label: "Small", value: "1K", percentage: "25%" },
        { icon: <GoServer />, label: "Medium", value: "10K", percentage: "50%" },
        { icon: <CiGlobe />, label: "Large", value: "100K+", percentage: "75%" },
        { icon: <TbAlignBoxCenterStretch />, label: "Enterprise", value: "1M+", percentage: "100%" }
      ],
      flexibility: [
        { icon: <PiHandTapLight />, label: "Single" },
        { icon: <TbHierarchy />, label: "Cluster" },
        { icon: <FaNetworkWired />, label: "Distributed" }
      ]
    },
    card3: {
      title: "Security Framework",
      features: [
        { icon: <FiKey />, label: "AES-256", value: "100%", color: "yellow" },
        { icon: <FiShield />, label: "Multi-Factor", value: "Enable", color: "green" },
        { icon: <FiFileText />, label: "Audit Logs", value: "24/7", color: "blue" },
        { icon: <FiAward />, label: "Compliance", value: "4 Certificates", color: "purple" }
      ],
      badges: [
        { type: "ISO 27001:2022", img: "/assets/montex/first_badge.svg" },
        { type: "ISO 27701", img: "/assets/montex/second_badge.svg" },
        { type: "GDPR Compliant", img: "/assets/montex/third_badge.svg" },
        { type: "SOC 2 Type II", img: "/assets/montex/forth_badge.svg" }
      ]
    }
  },
  implementationTraining: {
    title: "Implementation & Training",
    description: "Our Proven implementation methodology ensures quick time to value with minimal disruption",
    phases: [
      { 
        title: "Assessment & Planning", 
        icon: "wrench",
        iconBg: "bg-blue-600",
        points: ["Current state analysis and requirement gathering", "Integration planning and technical architecture review", "User training plan development", "Success criteria definition and measurement planning"]
      },
      { 
        title: "Configuration & Integration", 
        icon: "chat",
        iconBg: "bg-purple-600",
        points: ["SupportX configuration and customization", "Integration with existing systems and workflows", "Data migration from legacy systems", "User acceptance testing and feedback incorporation"]
      },
      { 
        title: "Training & Go-Live", 
        icon: "stats",
        iconBg: "bg-cyan-500",
        points: ["Comprehensive user training for all roles", "Go-live support with dedicated success manager", "Performance monitoring and optimization", "Post-implementation review and optimization planning"]
      }
    ],
    ongoing: {
      title: "Ongoing Support & Success",
      items: [
        { icon: "users", text: "Dedicated customer success manager" },
        { icon: "search", text: "Regular health checks and optimization reviews" },
        { icon: "stack", text: "Feature adoption guidance and best practice sharing" },
        { icon: "bolt", text: "24/7 technical support with guaranteed response times" }
      ]
    }
  },
  deploymentOptions: {
    title: "Deployment Options",
    description: "Cloud-first architecture designed for modern environments while supporting traditional deployment models",
    options: [
      {
        id: "saas",
        title: "SaaS Deployment",
        highlightBg: "bg-blue-600/10 border-blue-500/20",
        highlightTitle: "Fastest Time to Value",
        bulletColor: "bg-blue-500",
        points: ["No infrastructure requirements", "Automatic updates and features", "Built-in security certifications", "Global availability options"]
      },
      {
        id: "cloud",
        title: "Private Cloud",
        highlightBg: "bg-green-600/10 border-green-500/20",
        highlightTitle: "Enhanced Security & Control",
        bulletColor: "bg-green-500",
        points: ["Dedicated instances", "Full data location control", "Custom integrations", "Dedicated SLAs"]
      },
      {
        id: "onprem",
        title: "On Premises",
        highlightBg: "bg-yellow-600/10 border-yellow-500/20",
        highlightTitle: "Complete Infrastructure Control",
        bulletColor: "bg-yellow-500",
        points: ["Complete data control", "Existing system integration", "Custom compliance support", "Hybrid connectivity options"]
      }
    ]
  },
  securityCompliance: {
    title: "Security & Compliance",
    description: "Enterprise-grade security and compliance standards to protect your data and meet regulatory requirements",
    security: {
      title: "Enterprise-Grade Security",
      items: [
        { title: "Data Encryption", description: "AES-256 encryption for all data at rest and in transit" },
        { title: "Access Control", description: "Role-based access with multi-factor authentication" },
        { title: "Audit Logging", description: "Comprehensive audit trails for all system activities" },
        { title: "Network Security", description: "VPN and private connectivity options" }
      ]
    },
    privacy: {
      title: "Data Privacy & Protection",
      items: [
        { title: "Data Residency", description: "Choose where your data is stored and processed" },
        { title: "Privacy Controls", description: "Granular privacy settings and data retention policies" },
        { title: "Right to Deletion", description: "Complete data removal capabilities" },
        { title: "Anonymization", description: "Automatic PII removal for analytics and reporting" },
        { title: "Consent Management", description: "User consent tracking and management" }
      ]
    },
    compliance: {
      title: "Compliance Standards",
      items: ["SOC Type II", "ISO 27001", "GDPR", "HIPAA"]
    }
  },
  integrationEcosystem: {
    title: "Integration Ecosystem",
    description: "Seamlessly connect with your existing tools and workflows through our comprehensive integration platform",
    categories: [
      {
        id: "itsm",
        title: "ITSM Platform Integration",
        items: ["ServiceNow (certified integration partner)", "Jira Service Management", "BMC Remedy", "Freshservice", "Microsoft System Center"]
      },
      {
        id: "communication",
        title: "Communication Platform Integration",
        items: ["Microsoft Teams", "Slack", "Zoom", "WebEx", "PagerDuty"]
      },
      {
        id: "monitoring",
        title: "Monitoring & Infrastructure Integration",
        items: ["Native integration with MonetX for proactive issue detection", "SIEM system integration for security incident management", "Network monitoring tool integration for automatic ticket creation", "Application performance monitoring integration"]
      }
    ]
  },
  pricing: {
    title: "Tailored Support Plans",
    description: "Scale your customer success operations with pricing that grows as you do.",
    cards: [
      {
        title: "Growth Support",
        features: [
          "Up to 20 full-time agents",
          "Standard AI routing core",
          "Business hours email & chat",
          "Standard reporting dashboard"
        ]
      },
      {
        title: "Enterprise Success",
        features: [
          "Unlimited agent seats",
          "Advanced NLP & Sentiment hub",
          "24/7 Global coverage",
          "Custom integration engineering"
        ]
      },
      {
        title: "Managed Resolution",
        features: [
          "Our experts run your desk",
          "Guaranteed SLA results",
          "Weekly strategy reviews",
          "Full CX transformation audit"
        ]
      }
    ]
  },
  gettingStarted: {
    title: { prefix: "Go", highlight: "Live" },
    description: "Deployment Journey",
    steps: [
      { title: "Infrastructure Audit", points: ["Tooling inventory and data audit", "KPI and SLA benchmarking", "System security review"] },
      { title: "AI Training & Config", points: ["Historical data labeling", "Intent model training", "Workflow pathing setup"] },
      { title: "Agent Rollout", points: ["Tier-1 team onboarding", "Side-by-side verification", "Full production cutover"] }
    ]
  },
  cta: {
    title: "Elevate Your Customer Experience",
    description: "Join the next generation of support leaders using SupportX to drive efficiency.",
    buttonText: "Request Support Audit"
  }
};
