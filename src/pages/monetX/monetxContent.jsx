import React from 'react';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { FaFile, FaUserDoctor, FaChartBar, FaNetworkWired } from 'react-icons/fa6';
import { TbAlignBoxCenterStretch, TbHierarchy } from 'react-icons/tb';
import { PiBrainThin, PiHandTapLight } from 'react-icons/pi';
import { LuUsersRound } from 'react-icons/lu';
import { GoServer } from 'react-icons/go';
import { CiGlobe } from 'react-icons/ci';
import { FiKey, FiShield, FiFileText, FiAward } from 'react-icons/fi';

export const monetxContent = {
  hero: {
    subtitle: "Unified Network Observability",
    title: (
      <>
        <span className="text-white/90">AI-Powered Network</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
          Observability &  Automation
        </span>
      </>
    ),
    description: "MonetX provides real‑time performance monitoring, unified infrastructure insights and AI‑driven analytics. Discover an observability platform that transforms your IT operations.",
    buttonText: "Start Your Free Trial",
    secondaryButtonText: "Schedule a Custom Demo",
    backgroundImage: "../assets/montex/hero-bg.png",
    heroImage: "../assets/montex/hero-img.png",
    featureTags: [
      { position: "bottom-8 left-0", icon: "📊", label: "Automated Reports" },
      { position: "bottom-8 right-0", icon: "📈", label: "Interactive Dashboards" }
    ]
  },
  modernNetworks: {
    title: "Challenges We Solve",
    description: "Modern networks span multiple clouds, on‑premises infrastructure and hybrid environments. Manual processes create vendor chaos, alert fatigue, resource drain and limited visibility. Without intelligent monitoring, problems may be discovered only after they impact users.",
    cards: [
      { icon: "FaNetworkWired", title: "Vendor Chaos", description: "Managing equipment from multiple vendors with different interfaces." },
      { icon: "FiAlertTriangle", title: "Alert Fatigue", description: "Too many false alarms drowning out real issues." },
      { icon: "LuUsersRound", title: "Resource Drain", description: "Manual processes consuming valuable engineering time." },
      { icon: "IoMdCloudOutline", title: "Limited Visibility", description: "Gaps in monitoring across hybrid environments." },
      { icon: "HiOutlineBolt", title: "Reactive Operations", description: "Finding out about problems after users complain." }
    ]
  },
  commandCenter: {
    title: { prefix: "How MonetX", highlight: "Works", suffix: "" },
    steps: [
      { color: "blue", icon: "TbHierarchy3", title: "Universal Discovery", description: "MonetX automatically scans and maps your entire network across vendors, clouds and environments, cataloguing everything for continuous monitoring." },
      { color: "purple", icon: "PiBrainThin", title: "Intelligent Analysis", description: "The AI engine contextualises metrics, detects patterns, predicts potential issues and recommends optimisations." },
      { color: "yellow", icon: "HiOutlineBolt", title: "Automated Response", description: "When issues arise, MonetX executes predetermined remediation procedures and notifies the right teams, shifting from reactive firefighting to proactive optimisation." },
      { color: "green", icon: "RxTarget", title: "Continuous Learning", description: "The system evolves over time, learning from each incident to become a smarter partner that understands your environment better than anyone else." }
    ]
  },
  keyFeatures: {
    title: "Key Features & Capabilities",
    row1: {
      card1: {
        icon: "FaRegChartBar",
        title: "Real‑Time Metrics & Monitoring",
        description: "Sub‑second visibility into the health and performance of your infrastructure, with intelligent alerting and predictive forecasting. Supports standard and custom protocols.",
        features: ["Sub-second monitoring", "Custom protocols", "Anomalous forecasting", "Intelligent alerting"]
      },
      image: "../assets/montex/key-features.png",
      card2: {
        icon: "CiFileOn",
        title: "Seamless Integration Platform",
        description: "Connect MonetX with existing tools via robust APIs, ITSM support and real‑time notifications.",
        features: ["API support", "Webhook support", "ITSM integration", "Real-time notifications"]
      }
    },
    row2: [
      {
        icon: "TbHierarchy",
        title: "Unified Infrastructure Insights",
        description: "Vendor‑agnostic visibility into all network devices, unified alerts, topology discovery and cross‑platform correlation.",
        features: ["Vendor-agnostic", "Unified alerting", "Topology discovery", "Cross-platform correlation"]
      },
      {
        icon: "PiBrainThin",
        title: "AI‑Driven Reporting & Analytics",
        description: "Machine‑learning algorithms transform raw data into actionable insights; anomaly detection, automated reporting and predictive planning are built in.",
        features: ["Anomaly detection", "Automated reporting", "Predictive planning", "BI integration"]
      },
      {
        icon: "RxTarget",
        title: "Advanced Customisation Engine",
        description: "Tailor dashboards, alerts and workflow automation to your unique environment.",
        features: ["Custom dashboards", "Role-based access", "Flexible alerting", "Workflow automation"]
      }
    ]
  },
  industrySpecs: {
    title: "Industry Applications",
    highlight: "Sectors",
    tabs: [
      { 
        id: 'telecoms', 
        label: 'Telecoms & ISPs', 
        icon: <VscTypeHierarchySub />,
        title: 'Telecommunications & ISPs',
        description: 'MonetX supports service provider network management, addressing the complexities of managing subscriber networks and meeting SLAs.',
        features: [
          'Real-time monitoring and troubleshooting of subscriber endpoints',
          'Network capacity planning and performance optimization.',
          'Prioritization of issues based on revenue impact.',
          'SLA reporting and service quality metrics.',
          'Multi-tenant isolation for secure, segmented monitoring.'
        ]
      },
      { 
        id: 'financial', 
        label: 'Financial Services', 
        icon: <FaFile />,
        title: 'Financial Services',
        description: 'Secure, high-performance monitoring for mission-critical financial infrastructure with SLA reporting and quality metrics.',
        features: [
          'Ultra-low latency network monitoring',
          'Audit trails and compliance reporting',
          'Fraud detection pattern analysis',
          'Secure multi-site connectivity mapping'
        ]
      },
      { 
        id: 'healthcare', 
        label: 'Healthcare', 
        icon: <FaUserDoctor />,
        title: 'Healthcare Systems',
        description: 'Ensuring 100% uptime for life-critical healthcare systems and IoT devices with asset monitoring and regulatory compliance.',
        features: [
          'Biomedical device connectivity monitoring',
          'HIPAA compliance ready auditing',
          'Emergency response network prioritization',
          'Secure guest and staff network isolation'
        ]
      },
      { 
        id: 'enterprise', 
        label: 'Enterprise DC', 
        icon: <TbAlignBoxCenterStretch />,
        title: 'Enterprise Data Centers',
        description: 'Unified management for complex hybrid-cloud and on-premise data center environments.',
        features: [
          'Software-defined network (SDN) visibility',
          'Power and cooling metrics integration',
          'Zero-trust network architecture mapping',
          'Automated disaster recovery pathing'
        ]
      }
    ]
  },
  technicalSpecs: {
    title: "Technical Specifications",
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
  pricing: {
    title: "Pricing & Licensing",
    description: "Offer subscription and managed service licensing options so you can choose the model that best fits your budget and resource strategy.",
    cards: [
      {
        title: "Subscription Licensing",
        features: [
          "Monthly or annual billing cycles",
          "Includes all updates and support",
          "Flexible scaling based on monitored devices",
          "Predictable operational expenditures"
        ]
      },
      {
        title: "Perpetual Licensing",
        features: [
          "One-time purchase with ongoing maintenance",
          "Optional support and update subscriptions",
          "Traditional capital expense model",
          "Long-term cost savings for stable environments"
        ]
      },
      {
        title: "Managed Service Options",
        features: [
          "Fully managed monitoring service",
          "Expert analysis and reporting",
          "24/7 operations center monitoring",
          "Perfect for organizations without dedicated NOC"
        ]
      }
    ]
  },
  gettingStarted: {
    title: { prefix: "Implementation &", highlight: "Onboarding" },
    description: "Extravis guides you from Discovery & Planning, through Implementation & Configuration to Evaluation & Optimisation, ensuring a smooth transition with minimal disruption and measurable ROI.",
    steps: [
      { title: "Discovery & Planning", points: ["Network assessment and requirement gathering", "POC scope definition and success criteria", "Installation process and preparation"] },
      { title: "Implementation & Configuration", points: ["MonetX installation and initial configuration", "Device discovery and integration setup", "Custom dashboard and alert configuration"] },
      { title: "Evaluation & Optimisation", points: ["User training and hands-on evaluation", "Performance tuning and optimization", "Business case development and ROI analysis"] }
    ]
  },
  cta: {
    title: "Ready to monitor smarter?",
    description: "Get started today and experience the power of intelligent network automation",
    buttonText: "Start your free trial",
    secondaryButtonText: "Schedule a demo"
  }
};
