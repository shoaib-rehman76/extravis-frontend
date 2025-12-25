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
        <span className="text-white/90">Intelligent IT Service</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400">
         Management &
        </span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400">
         Helpdesk Automation
        </span>
      </>
    ),
    description: "Reduce ticket chaos, improve SLA compliance and deliver exceptional support with SupportX, Extravis’s AI‑powered service management platform.",
    buttonText: "Start a free trial",
    secondaryButtonText: "Talk to our sales team",
    backgroundImage: "../assets/montex/hero-bg.png",
    heroImage: "../assets/supportx/hero-img-supportx.png",
    featureTags: [
      { position: "bottom-8 left-0", icon: "🛠️", label: "Auto-Resolution" },
      { position: "bottom-8 right-0", icon: "📈", label: "Predictive Ticketing" }
    ]
  },
  modernNetworks: {
    title: "Challenges We Solve",
    description: "Traditional support models lead to ticket chaos, missed SLAs, wasted resources, user frustration and hidden knowledge gaps. SupportX turns reactive firefighting into proactive service excellence.",
    cards: [
      { icon: "IoMdCloudOutline", title: "Ticket Chaos", description: "Overwhelming volume of unorganized requests." },
      { icon: "FiAlertTriangle", title: "Missed SLAs", description: "Deadlines breached due to manual routing." },
      { icon: "HiOutlineBolt", title: "Wasted Resources", description: "skilled agents solving repetitive issues." },
      { icon: "LuUsersRound", title: "User Frustration", description: "Slow response times impacting satisfaction." },
      { icon: "FaNetworkWired", title: "Knowledge Gaps", description: "Critical solutions locked in individual silos." }
    ]
  },
  commandCenter: {
    title: { prefix: "Core", highlight: "Features", suffix: "" },
    steps: [
      { color: "blue", icon: "TbHierarchy3", title: "Smart Intake & Routing", description: "AI analyses incoming requests across all channels to determine urgency and assign to the right expert, preventing bottlenecks." },
      { color: "purple", icon: "PiBrainThin", title: "Automated Tracking", description: "Monitors SLA compliance, notifies teams of deadlines, and auto‑escalates tasks so nothing falls through the cracks." },
      { color: "yellow", icon: "HiOutlineBolt", title: "AI‑Powered Knowledge", description: "Builds a dynamic knowledge base that surfaces relevant answers and enables self‑service, keeping solutions current." },
      { color: "green", icon: "RxTarget", title: "Advanced Analytics", description: "Trend analysis, predictive planning, and resource optimisation allow you to continually improve service delivery." }
    ]
  },
  keyFeatures: {
    title: "SupportX Core Capabilities",
    row1: {
      card1: {
        icon: "FaRegChartBar",
        title: "Seamless Multi‑Region Support",
        description: "Follow‑the‑sun support across time zones and languages with cultural adaptation and regulatory compliance.",
        features: ["Time zone sync", "Language translation", "Cultural adaptation", "Regulatory compliance"]
      },
      image: "../assets/supportx/key-features-supportx.png",
      card2: {
        icon: "CiFileOn",
        title: "Integration Ecosystem",
        description: "Pre‑built integrations with ITSM platforms, communication tools, and monitoring systems. API support for custom needs.",
        features: ["ITSM integrations", "Communication tools", "Monitoring systems", "API & Webhooks"]
      }
    },
    row2: [
      {
        icon: "TbHierarchy",
        title: "User Experience & Interface",
        description: "Unified dashboard for teams, collaborative tools, and mobile access. End users allow multi‑channel ticket creation and self‑service.",
        features: ["Unified dashboard", "Collaboration tools", "Mobile access", "Self-service portals"]
      },
      {
        icon: "PiBrainThin",
        title: "Security & Compliance",
        description: "AES‑256 encryption, role‑based access, audit logging, and compliance with SOC 2 Type II, ISO 27001 and GDPR.",
        features: ["AES-256 encryption", "RBAC", "Audit logging", "Compliance ready"]
      },
      {
        icon: "RxTarget",
        title: "ROI & Business Impact",
        description: "Reduce response times, decrease ticket backlogs, improve resolution rates and enhance user satisfaction.",
        features: ["Faster response", "Reduced backlog", "Higher resolution", "Enhanced satisfaction"]
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
      // { 
      //   id: 'fintech', 
      //   label: 'Fintech', 
      //   icon: <FaUserDoctor />,
      //   title: 'Financial Tech',
      //   description: 'Compliance-first support for regulated financial services and digital banking.',
      //   features: [
      //     'Verified identity support channels',
      //     'Secure document exchange and review',
      //     'Regulatory reporting export tools',
      //     'Fraud alert escalation workflows'
      //   ]
      // },
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
    description: "SaaS, private cloud or on‑premises, each with appropriate infrastructure control and support models.",
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
  roiImpact: {
    title: "ROI & Business Impact",
    description: "SupportX helps organisations reduce response times, decrease ticket backlogs, improve resolution rates and enhance user satisfaction.",
    cards: [
      { icon: "clock", title: "Response Reduction", color: "green" },
      { icon: "check", title: "Resolution Rates", color: "blue" },
      { icon: "down", title: "Ticket Backlogs", color: "purple" },
      { icon: "thumbs", title: "User Satisfaction", color: "yellow" },
      { icon: "up", title: "Efficiency Boost", color: "cyan" }
    ]
  },
  userExperience: {
    title: "User Experience &",
    subtitle: "Interface",
    columns: [
      {
        icon: "user",
        title: "For End Users",
        items: [
            { title: "Multi-channel Ticket Creation", description: "Email, portal, mobile app, phone, and chat support." },
            { title: "Self-Service Portals", description: "Searchable knowledge base with common solutions." },
            { title: "Real-Time Updates", description: "Automatic notifications about ticket progress." },
            { title: "Mobile Access", description: "Full functionality available on smartphones and tablets." },
            { title: "Feedback Integration", description: "Easy satisfaction rating and improvement suggestions." }
        ]
      },
      {
        icon: "headphones",
        title: "For Support Teams",
        items: [
            { title: "Unified Dashboard", description: "All assigned tickets with priority and SLA information." },
            { title: "Collaborative Tools", description: "Built-in chat, screen sharing, and knowledge sharing." },
            { title: "Mobile App", description: "Handle urgent tickets from anywhere." },
            { title: "Performance Metrics", description: "Individual and team performance tracking." },
            { title: "Continuous Learning", description: "Suggested training based on ticket patterns." }
        ]
      },
      {
        icon: "settings",
        title: "For Managers",
        items: [
           { title: "Executive Dashboards", description: "High-level KPIs, trend analysis, and predictive planning." },
           { title: "Resource Planning", description: "Workload distribution and capacity planning." },
           { title: "Quality Monitoring", description: "Ticket quality auditing and coaching opportunities." },
           { title: "Budget Planning", description: "Cost per ticket and ROI analysis." },
           { title: "Compliance Reporting", description: "Automated compliance and audit reporting." }
        ]
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
    title: "Ready to Transform Your Projects?",
    description: "Join leading organizations using SupportX to deliver projects on time and within budget",
    buttonText: "Start a free trial",
    secondaryButtonText: "Talk to our sales team"
  }
};
