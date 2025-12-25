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
    subtitle: "AI-Powered",
    title: (
      <>
        <span className="text-white/90">AI-Powered <br /> Networks</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
          Observability &
        </span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
          Automation
        </span>
      </>
    ),
    description: "Transform network complexity into competitive advantage with unified visibility, intelligent automation, and comprehensive analytics across your entire infrastructure.",
    buttonText: "Get Started",
    backgroundImage: "../assets/montex/hero-bg.png",
    heroImage: "../assets/montex/hero-img.png",
    featureTags: [
      { position: "bottom-8 left-0", icon: "📊", label: "Automated Reports" },
      { position: "bottom-8 right-0", icon: "📈", label: "Interactive Dashboards" }
    ]
  },
  modernNetworks: {
    title: "Modern Networks Are More Complex Than Ever",
    description: "Today's enterprise networks span multiple vendors, cloud providers, and geographic locations. Traditional monitoring tools create silos of information, leaving you blind to critical issues until they impact your users. You need more than just monitoring—you need intelligence.",
    cards: [
      { icon: "FaNetworkWired", title: "Vendor Chaos", description: "Managing equipment from multiple vendors with different interfaces." },
      { icon: "FiAlertTriangle", title: "Alert Fatigue", description: "Too many false alarms drowning out real issues." },
      { icon: "LuUsersRound", title: "Reactive Operations", description: "Finding out about problems after users complain." },
      { icon: "HiOutlineBolt", title: "Resource Drain", description: "Manual processes consuming valuable engineering time." },
      { icon: "IoMdCloudOutline", title: "Limited Visibility", description: "Gaps in monitoring across hybrid environments." }
    ]
  },
  commandCenter: {
    title: { prefix: "Your Network", highlight: "Intelligence Command", suffix: "Center" },
    steps: [
      { color: "blue", icon: "TbHierarchy3", title: "Universal Discovery", description: "MonetX automatically discovers and maps your entire network infrastructure, regardless of vendor or location." },
      { color: "purple", icon: "PiBrainThin", title: "Intelligent Analysis", description: "Our AI engine doesn't just collect metrics—it understands what they mean in the context of your specific environment." },
      { color: "yellow", icon: "HiOutlineBolt", title: "Automated Response", description: "When issues are detected, MonetX can automatically execute predefined remediation procedures and notify the right teams." },
      { color: "green", icon: "RxTarget", title: "Continuous Learning", description: "The system gets smarter over time, learning from every incident, optimization, and change in your environment." }
    ]
  },
  keyFeatures: {
    title: "Key Features & Capabilities",
    row1: {
      card1: {
        icon: "FaRegChartBar",
        title: "Real-Time Metrics and Monitoring",
        description: "Delivers continuous, up-to-the-second data into the health and performance of your entire IT infrastructure.",
        features: ["Sub-second monitoring", "Custom protocols", "Anomalous forecasting", "Intelligent alerting"]
      },
      image: "../assets/montex/key-features.png",
      card2: {
        icon: "CiFileOn",
        title: "Seamless Integration Platform",
        description: "Connects effortlessly with your existing tools and workflows, enhancing your current IT investments.",
        features: ["API support", "Webhook support", "ITSM integration", "Real-time notifications"]
      }
    },
    row2: [
      {
        icon: "TbHierarchy",
        title: "Unified Infrastructure Insights",
        description: "Provides complete visibility into all network devices through a single dashboard.",
        features: ["Vendor-agnostic", "Unified alerting", "Topology discovery", "Cross-platform correlation"]
      },
      {
        icon: "PiBrainThin",
        title: "AI-Driven Reporting & Analytics",
        description: "Transforms raw data into actionable insights using machine learning.",
        features: ["Anomaly detection", "Automated reporting", "Predictive planning", "BI integration"]
      },
      {
        icon: "RxTarget",
        title: "Advanced Customization Engine",
        description: "Tailors your monitoring experience to match your unique workflows.",
        features: ["Custom dashboards", "Role-based access", "Flexible alerting", "Workflow automation"]
      }
    ]
  },
  industrySpecs: {
    title: "Industry-Specifications",
    highlight: "Applications",
    tabs: [
      { 
        id: 'telecoms', 
        label: 'Telecoms & ISPs', 
        icon: <VscTypeHierarchySub />,
        title: 'Telecommunications & ISPs',
        description: 'MonetX is built for service providers, addressing the complexities of managing subscriber networks and meeting SLAs.',
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
        description: 'Secure, high-performance monitoring for mission-critical financial infrastructure.',
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
        description: 'Ensuring 100% uptime for life-critical healthcare systems and IoT devices.',
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
    description: "We understand that different organizations have different preferences for software acquisition and budgeting",
    cards: [
      {
        title: "Subscription Licensing",
        features: [
          "Monthly or annual billing cycles Accordingly.",
          "Includes all updates and support",
          "Access to all/flexible scaling based on monitored devices basic feat Predictable operational expenditures",
          "Access to all basic feat Predictable operational expenditures"
        ]
      },
      {
        title: "Perpetual Licensing",
        features: [
          "One-time purchase with ongoing maintenance.",
          "Optional support and update subscriptions.",
          "Traditional capital expense model",
          "Long-term cost savings for stable environments"
        ]
      },
      {
        title: "Managed Service Options",
        features: [
          "Fully managed Professionally monitoring service.",
          "Expert analysis and reporting.",
          "24/7 operations center monitoring.",
          "Perfect for organizations without dedicated network operations teams."
        ]
      }
    ]
  },
  gettingStarted: {
    title: { prefix: "Getting", highlight: "Started" },
    description: "Evaluation Options",
    steps: [
      { title: "Discovery & Planning", points: ["Network assessment and requirement gathering", "POC scope definition and success criteria", "Installing process and preparation"] },
      { title: "Implementation & Configuration", points: ["MonetX installation and initial configuration", "Device discovery and integration setup", "Custom dashboard and alert configuration"] },
      { title: "Evaluation & Optimization", points: ["User training and hands-on evaluation", "Performance tuning and optimization", "Business case development and ROI analysis"] }
    ]
  },
  cta: {
    title: "Ready to Transform Your Network?",
    description: "Get started today and experience the power of intelligent network automation",
    buttonText: "Get Started Today"
  }
};
