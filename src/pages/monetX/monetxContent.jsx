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
    description: "Unify visibility, automate operations, and optimize performance across hybrid, multi-cloud, and on-premise networks with AI-driven intelligence.",
    buttonText: "Let’s Begin",
    secondaryButtonText: "Schedule a Custom Demo",
    backgroundImage: "../assets/montex/hero-bg.png",
    heroImage: "../assets/montex/hero-img.png",
    // featureTags: [
    //   { position: "bottom-8 left-0", icon: "📊", label: "Automated Reports" },
    //   { position: "bottom-8 right-0", icon: "📈", label: "Interactive Dashboards" }
    // ]
  },
  modernNetworks: {
    title: "Modern Networks Are More Complex Than Ever",
    description: "Modern networks span multiple clouds, on-premises infrastructure, and hybrid environments. Manual processes create vendor chaos, alert fatigue, resource drain, and limited visibility. Without intelligent monitoring, issues are often discovered only after they impact users, business operations, and service quality.",
    cards: [
      { icon: "FaNetworkWired", title: "Vendor & Tool Sprawl", description: "Too many disconnected tools across multiple vendors create visibility gaps, slow troubleshooting, and increase operational overhead." },
      { icon: "FiAlertTriangle", title: "Alert Fatigue", description: "Too many false alerts overwhelm teams and slow down incident response." },
      { icon: "HiOutlineBolt", title: "Manual & Reactive Operations", description: "Reliance on manual monitoring and reactive firefighting leads to delayed incident response, prolonged downtime, and higher business risk." },
      // { icon: "LuUsersRound", title: "Resource Drain", description: "Manual processes consuming valuable engineering time." },
      // { icon: "IoMdCloudOutline", title: "Limited Visibility", description: "Gaps in monitoring across hybrid environments." },
       ]
  },
  commandCenter: {
    title: { prefix: "Your Network Intelligence ", highlight: "Command Center", suffix: "" },
    description:'MonetX acts as a centralized command center for your entire digital infrastructure, transforming raw network data into real-time intelligence. It brings together discovery, monitoring, analytics, and automation into a single unified view, enabling faster decisions, proactive operations, and complete visibility across your hybrid, multi-cloud, and on-prem environments.',
    steps: [
      { color: "blue", icon: "TbHierarchy3", title: "Universal Discovery", description: "MonetX automatically scans and maps your entire network across vendors, clouds, and environments cataloguing everything for continuous, real-time monitoring." },
      { color: "purple", icon: "PiBrainThin", title: "Intelligent Analysis", description: "The AI engine contextualizes metrics, detects patterns, predicts potential issues, and recommends performance optimizations before failures occur." },
      { color: "yellow", icon: "HiOutlineBolt", title: "Predictive Performance Intelligence", description: "MonetX continuously analyzes performance patterns to predict capacity risks, performance degradation, and potential outages, allowing teams to act before issues impact users." },
      { color: "green", icon: "RxTarget", title: "Unified Topology & Dependency Mapping", description:"Gain real-time visibility into how devices, applications, and services are interconnected with dynamic topology and dependency maps that accelerate root-cause analysis." }
    ]
  },
  keyFeatures: {
    title: "Key Features",
    description: "Enterprise-grade visibility, intelligent automation and seamless integration, designed to simplify operations and enable data-driven decisions at scale.",
    row1: {
      card1: {
        icon: "FaRegChartBar",
        title: "Real-Time Metrics & Monitoring",
        description: "Live performance tracking with sub-second polling accuracy, dynamic alert thresholds based on real usage patterns, and predictive forecasting for capacity and performance risks. Supports standard protocols (SNMP, ICMP, API) and custom integrations.",
        features: ["Sub-second polling accuracy", "Dynamic alert thresholds", "Predictive forecasting", "Standard & custom protocols"]
      },
      image: "../assets/montex/key-features.png",
      card2: {
        icon: "TbHierarchy",
        title: "Unified Infrastructure Insights",
        description: "Single-pane-of-glass visibility across multi-vendor environments with automated topology discovery, real-time link mapping, cross-platform correlation, and a unified alerting engine to eliminate duplicate and noisy alerts.",
        features: ["Single-pane-of-glass visibility", "Automated topology discovery", "Cross-platform correlation", "Unified alerting engine"]
      }
    },
    row2: [
      {
        icon: "PiBrainThin",
        title: "AI-Driven Reporting & Analytics",
        description: "Automated anomaly detection utilizing machine learning, instant executive and technical trend reports, predictive planning dashboards for performance and capacity, and root-cause intelligence powered by behavioral pattern recognition.",
        features: ["Automated anomaly detection", "Trend analysis reports", "Predictive planning dashboards", "Root-cause intelligence"]
      },
      {
        icon: "RxTarget",
        title: "Advanced Customization Engine",
        description: "Fully customizable dashboards for NOC, SOC, and leadership with rule-based alert customization by device, service, or location. Includes a workflow automation builder and Role-based access control (RBAC).",
        features: ["Fully customizable dashboards", "Rule-based alert customization", "Workflow automation builder", "Role-based access control"]
      },
      {
        icon: "CiFileOn",
        title: "Seamless Integration Platform",
        description: "Connect MonetX with existing tools via robust APIs, ITSM support and real‑time notifications.",
        features: ["API support", "Webhook support", "ITSM integration", "Real-time notifications"]
      }
    ]
  },
  industrySpecs: {
    title: "Industry Specific",
    highlight: "", // Using empty highlight as user provided a single string title, or I can split "Industry" and "Specific"
    description: "MonetX adapts seamlessly across industries like telecom, finance, healthcare and enterprise data centres, delivering tailored observability, compliance and scalable performance for every deployment.",
    tabs: [
      { 
        id: 'telecoms', 
        label: 'Telecommunications & ISPs', 
        icon: <VscTypeHierarchySub />,
        title: 'Telecommunications & ISPs',
        description: 'Unified service provider network monitoring, traffic visibility, performance optimization, and fault automation.',
        features: [
          'Monitor core, access, and aggregation networks in real time to ensure high availability and reduce service outages.',
          'Instantly detect fiber cuts, device failures, and traffic congestion with AI-driven root-cause analysis and auto-remediation.',
          'Predict traffic growth trends and optimize network expansion without service disruption.'
        ]
      },
      { 
        id: 'financial', 
        label: 'Financial Services', 
        icon: <FaFile />,
        title: 'Financial Services',
        description: 'SLA reporting, high-availability infrastructure monitoring, regulatory compliance, and secure performance analytics.',
        features: [
          'Ensure 24/7 availability of transaction systems, databases, and middleware platforms.',
          'Monitor ATM networks, mobile banking apps, and online portals to maintain seamless customer experiences.',
          'Generate automated SLA and regulatory compliance reports for internal audits and regulatory authorities.'
        ]
      },
      { 
        id: 'healthcare', 
        label: 'Healthcare', 
        icon: <FaUserDoctor />,
        title: 'Healthcare',
        description: 'Critical asset monitoring, medical device visibility, regulatory compliance, and secure network segmentation.',
        features: [
          'Monitor imaging systems, patient monitors, and connected medical devices for continuous uptime.',
          'Ensure separate, protected network zones for ICUs, labs, administrative systems, and public services.',
          'Maintain continuous compliance with healthcare security and data protection regulations.',
        ]
      },
      { 
        id: 'enterprise', 
        label: 'Enterprise Data Centers', 
        icon: <TbAlignBoxCenterStretch />,
        title: 'Enterprise Data Centers',
        description: 'Full infrastructure visibility, capacity optimization, and performance forecasting across large-scale environments.',
        features: [
          'Monitor servers, storage, network devices, and virtual environments from a single unified dashboard.',
          'Forecast CPU, memory, storage, and network utilization to prevent performance bottlenecks.',
          'Detect early warning signs of failures and trigger automated recovery workflows.'
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
    title: { prefix: "Getting", highlight: "Started" },
    description: "", // No explicit description provided in user prompt for this section, aside from the steps. Keeping empty or defaulting if preferred. User didn't provide a description, so I will remove the old one.
    steps: [
      { title: "Discovery & Planning", points: ["Network assessment, requirement gathering, and solution alignment."] },
      { title: "Implementation & Configuration", points: ["Network onboarding, rule configuration, device discovery, and system integration."] },
      { title: "Ongoing Optimization", points: ["Continuous tuning, user training, and workflow refinement for maximum ROI."] }
    ]
  },
  cta: {
    title: "Ready to Transform Your Network Management?",
    description: "Get started with MonetX today and experience the power of unified network monitoring, automation, and AI-driven insights.",
    buttonText: "Free Trial",
    secondaryButtonText: "Schedule a Demo"
  }
};
