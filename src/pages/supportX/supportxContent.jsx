import React from 'react';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { FaFile, FaUserDoctor, FaChartBar, FaNetworkWired, FaUsers, FaHeadphones, FaRegChartBar } from 'react-icons/fa6';
import { MdOutlineVisibility } from "react-icons/md";
import { TbAlignBoxCenterStretch, TbHierarchy, TbHierarchy3 } from 'react-icons/tb';
import { PiBrainThin, PiHandTapLight } from 'react-icons/pi';
import { LuUsersRound } from 'react-icons/lu';
import { GoServer } from 'react-icons/go';
import { CiGlobe, CiFileOn } from 'react-icons/ci';
import { FiKey, FiShield, FiFileText, FiAward, FiAlertTriangle } from 'react-icons/fi';
import { FaCog } from 'react-icons/fa';
import { IoMdCloudOutline } from "react-icons/io";
import { HiOutlineBolt } from "react-icons/hi2";
import { RxTarget } from "react-icons/rx";

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
    description: "Transform your IT support operations with intelligent ticketing, SLA automation, real-time collaboration, and enterprise-grade control.",
    buttonText: "Get Started",
    secondaryButtonText: "Talk to our sales team",
    backgroundImage: "../assets/montex/hero-bg.png",
    heroImage: "../assets/supportx/hero-img-supportx.png",
  },
  modernNetworks: {
    // title: "Challenges We Solve",
    title:{prefix:"Challenges", highlight:'We Solve'},
    description: "Traditional support models lead to ticket chaos, missed SLAs, wasted resources, user frustration and hidden knowledge gaps. SupportX turns reactive firefighting into proactive service excellence.",
    cards: [
      { icon: <IoMdCloudOutline />, title: "Ticket Chaos", description: "Overwhelming volume of unorganised requests flooding your support queue." },
      { icon: <FiAlertTriangle />, title: "Missed SLAs", description: "Deadlines breached due to manual routing and lack of real-time visibility." },
      { icon: <HiOutlineBolt />, title: "Wasted Resources", description: "Deadlines breached due to manual routing and lack of real-time visibility." },
      { icon: <LuUsersRound />, title: "User Frustration", description: "Slow response times and poor communication impacting satisfaction scores." },
      { icon: <FaNetworkWired />, title: "Knowledge Gaps", description: "Critical solutions locked in individual silos, lost when employees leave." },
      { icon: <MdOutlineVisibility />, title: "Limited Visibility", description: "No real-time insights into ticket status, team performance or bottlenecks." }
    ]
  },
  commandCenter: {
    title: { prefix: "Intelligent Support ", highlight: "That Actually Supports", suffix: "" },
    description: "From intake to resolution, SupportX automates every step, so your team focuses on solving problems, not managing processes.",
    steps: [
      { color: "blue", icon: "TbHierarchy3", title: "Smart Intake", description: "AI analyses incoming requests across all channels to determine issue type, urgency and expertise required." },
      { color: "purple", icon: "PiBrainThin", title: "Intelligent Routing", description: "Tickets automatically assigned to the right agent based on skills, workload and historical performance." },
      { color: "yellow", icon: "HiOutlineBolt", title: "Automated Tracking", description: "Real-time SLA monitoring with proactive escalation and stakeholder notifications." },
      { color: "green", icon: "RxTarget", title: "Knowledge Capture", description: "Every resolution builds your knowledge base, making the entire team smarter over time." }
    ]
  },
  keyFeatures: {
    title: "Key Features & Capabilities",
    description: "Enterprise-grade tools designed to streamline support operations, ensure SLA compliance and empower teams to deliver exceptional service.",
    row1: {
      card1: {
        icon: <PiBrainThin />,
        title: "Automated Ticket Routing",
        description: "Uses AI to assign tickets to the right experts instantly, eliminating delays and manual guesswork. With NLP and machine learning, it ensures smart routing, balanced workloads, timely escalations and seamless integration with your existing ticketing systems.",
        features: ["Smart routing", "Timely escalations", "Balanced workloads", "ITSM integration"]
      },
      image: "../assets/supportx/key-features-supportx.png",
      card2: {
        icon: <FiAlertTriangle />,
        title: "Intelligent SLA Tracking & Escalation",
        description: "Ensures consistent compliance by automatically monitoring SLAs and escalating issues before they breach. With predictive alerts, smart scheduling and real-time tracking, nothing slips through the cracks, building trust and preventing escalations.",
        features: ["Predictive alerts", "Real-time tracking", "Smart scheduling", "Automated escalation"]
      }
    },
    row2: [
      {
        icon: <CiGlobe />,
        title: "Seamless Multi-Region IT Service Management",
        description: "Delivers consistent, high-quality support across time zones and languages with follow-the-sun coverage, automated regional handoffs and localised compliance. It adapts to cultural nuances, business hours and reporting needs worldwide.",
        features: ["Follow-the-sun", "Localised compliance", "Regional handoffs", "Cultural adaptation"]
      },
      {
        icon: <FaRegChartBar />,
        title: "Advanced Analytics & Performance Optimisation",
        description: "Delivers real-time insights into support operations, enabling data-driven decisions for continuous improvement. With trend analysis, satisfaction tracking and predictive planning, it helps optimise team performance and resource allocation.",
        features: ["Trend analysis", "Predictive planning", "Satisfaction tracking", "Resource optimisation"]
      },
      {
        icon: <RxTarget />,
        title: "AI-Powered Knowledge Management",
        description: "Automatically builds and maintains a dynamic knowledge base from resolved tickets, making expertise accessible across the organisation. With smart search, self-service suggestions and continuous updates, it drives faster resolution and empowers users.",
        features: ["Smart search", "Continuous updates", "Self-service", "Knowledge capture"]
      }
    ]
  },
  industrySpecs: {
    title: "Industry-Specific Applications",
    highlight: "",
    description: "Purpose-built support solutions tailored to the unique compliance, workflow and operational demands of your industry.",
    tabs: [
      { 
        id: 'healthcare', 
        label: 'Healthcare IT', 
        icon: <FaUserDoctor />,
        title: 'Healthcare IT Support',
        description: 'Managing IT in healthcare requires understanding that technology directly impacts patient care, with zero tolerance for extended downtime.',
        features: [
          'HIPAA-compliant ticket handling and audit trails',
          'Integration with healthcare-specific systems (EMR, PACS, pharmacy)',
          'Emergency escalation procedures for life-critical systems',
          'Medical device support prioritisation and routing',
          'Regulatory compliance reporting and documentation',
          '24/7 support coverage for round-the-clock patient care'
        ]
      },
      { 
        id: 'financial', 
        label: 'Financial Services', 
        icon: <FaFile />,
        title: 'Financial Services Support',
        description: 'Financial institutions demand secure, auditable and rapid IT support to protect sensitive data, ensure uptime and meet strict regulatory requirements.',
        features: [
          'SOC 2 and PCI-DSS compliant ticket management',
          'Priority routing for trading systems and core banking platforms',
          'Real-time SLA tracking for regulatory reporting',
          'Encrypted communications and full audit logging',
          'Multi-region support for global financial operations',
          'Fraud and security incident escalation workflows'
        ]
      },
      { 
        id: 'manufacturing', 
        label: 'Manufacturing', 
        icon: <TbAlignBoxCenterStretch />,
        title: 'Manufacturing IT Support',
        description: 'Manufacturing environments require responsive support to minimise production downtime, maintain operational continuity and manage complex OT/IT integrations.',
        features: [
          'Priority escalation for production-critical systems',
          'Integration with MES, ERP and SCADA platforms',
          'Shift-based SLA management and 24/7 coverage',
          'Asset tracking and equipment lifecycle support',
          'Downtime impact reporting and root cause analysis',
          'Predictive maintenance ticket automation'
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
    title: { prefix: "Implementation &", highlight: "Training" },
    description: "Our proven implementation methodology ensures quick time to value with minimal disruption.",
    phases: [
      { 
        title: "Assessment & Planning", 
        icon: "wrench",
        iconBg: "bg-blue-600",
        description: "We start by understanding your current environment, requirements and success criteria.",
        points: ["Current state analysis and requirement gathering", "Integration planning and technical architecture review", "User training plan development", "Success criteria definition and measurement planning"]
      },
      { 
        title: "Configuration & Integration", 
        icon: "bolt",
        iconBg: "bg-purple-600",
        description: "We configure SupportX to match your workflows and integrate with your existing tech stack.",
        points: ["SupportX configuration and customisation", "Integration with existing systems and workflows", "Data migration from legacy systems", "User acceptance testing and feedback incorporation"]
      },
      { 
        title: "Training & Go-Live", 
        icon: "stats",
        iconBg: "bg-cyan-500",
        description: "We prepare your teams for success and ensure a smooth transition to production.",
        points: ["Comprehensive user training for all roles", "Go-live support with dedicated success manager", "Performance monitoring and optimisation", "Post-implementation review and optimisation planning"]
      }
    ],
    ongoing: {
      title: "Ongoing Support & Success",
      subtitle: "Your success doesn't end at go-live, we're with you every step of the way.",
      items: [
        { icon: "users", text: "Dedicated customer success manager" },
        { icon: "search", text: "Regular health checks and optimisation reviews" },
        { icon: "stack", text: "Feature adoption guidance and best practice sharing" },
        { icon: "bolt", text: "24/7 technical support with guaranteed response times" }
      ]
    }
  },
  deploymentOptions: {
    title: { prefix: "Deployment", highlight: "Options" },
    description: "Cloud-first architecture designed for modern environments while supporting traditional deployment models.",
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
    title: { prefix: "Security &", highlight: "Compliance" },
    description: "Enterprise-grade security and compliance standards to protect your data and meet regulatory requirements.",
    security: {
      title: "Enterprise-Grade Security",
      items: [
        { title: "Data Encryption", description: "AES-256 encryption for all data at rest and in transit." },
        { title: "Access Control", description: "Role-based access with multi-factor authentication." },
        { title: "Audit Logging", description: "Comprehensive audit trails for all system activities." },
        { title: "Network Security", description: "VPN and private connectivity options." }
      ]
    },
    privacy: {
      title: "Data Privacy & Protection",
      items: [
        { title: "Data Residency", description: "Choose where your data is stored and processed." },
        { title: "Privacy Controls", description: "Granular privacy settings and data retention policies." },
        { title: "Right to Deletion", description: "Complete data removal capabilities on request." },
        { title: "Anonymisation", description: "Automatic PII removal for analytics and reporting." },
        { title: "Consent Management", description: "User consent tracking and management." }
      ]
    },
    compliance: {
      title: "Compliance Standards",
      description: "Certified to meet the highest industry standards for security and data protection.",
      items: ["SOC Type II", "ISO 27001", "GDPR", "HIPAA"]
    }
  },
  integrationEcosystem: {
   
    title:{prefix:"Integration", highlight:"Ecosystem"},
    description: "Seamlessly connect with your existing tools and workflows through our comprehensive integration platform.",
    categories: [
      {
        id: "itsm",
        title: "ITSM Platform Integration",
        items: ["ServiceNow (certified integration partner)", "Jira Service Management", "BMC Remedy", "Freshservice", "Microsoft System Center", "Zendesk"]
      },
      {
        id: "communication",
        title: "Communication Platform Integration",
        items: ["Microsoft Teams", "Slack", "Zoom", "WebEx", "PagerDuty", "Google Chat"]
      },
      {
        id: "monitoring",
        title: "Monitoring & Infrastructure Integration",
        items: ["Native integration with MonetX for proactive issue detection", "SIEM system integration for security incident management", "Network monitoring tool integration for automatic ticket creation", "Application performance monitoring integration", "Cloud infrastructure monitoring (AWS, Azure, GCP)", "Log management platform connectivity"]
      }
    ]
  },
  roiImpact: {
    title: { prefix: "ROI & Business", highlight: "Impact" },
    description: "Measurable results that demonstrate real value, from faster response times to reduced ticket volumes and improved satisfaction.",
    cards: [
      { icon: "clock", title: "Response Reduction", value: "60%", description: "Average reduction in first response time.", color: "green" },
      { icon: "check", title: "Resolution Improvement", value: "45%", description: "Increase in first-contact resolution rate.", color: "blue" },
      { icon: "down", title: "Handling Decrease", value: "35%", description: "Reduction in average ticket handling time.", color: "purple" },
      { icon: "thumbs", title: "Ticket Reduction", value: "40%", description: "Fewer tickets through self-service and automation.", color: "yellow" },
      { icon: "up", title: "Satisfaction Increase", value: "50%", description: "Improvement in customer satisfaction scores.", color: "cyan" }
    ]
  },
  userExperience: {
    title: { prefix: "User Experience &", highlight: "Interface" },
   
    description: "Intuitive interfaces tailored for every role, empowering end users, support teams and managers to work smarter.",
    columns: [
      {
        icon: <FaUsers />,
        title: "For End Users",
        items: [
            { title: "Simple Ticket Creation", description: "Multiple channels (email, web portal, mobile app, phone) for effortless request submission." },
            { title: "Self-Service Portal", description: "Searchable knowledge base with common solutions to resolve issues instantly." },
            { title: "Real-Time Updates", description: "Automatic notifications about ticket progress and status changes." },
            { title: "Mobile Access", description: "Full functionality available on smartphones and tablets." },
            { title: "Feedback Integration", description: "Easy satisfaction rating and improvement suggestions after resolution." }
        ]
      },
      {
        icon: <FaHeadphones />,
        title: "For Support Teams",
        items: [
            { title: "Unified Dashboard", description: "All assigned tickets with priority and SLA information in one view." },
            { title: "Collaboration Tools", description: "Built-in chat, screen sharing and knowledge sharing for team coordination." },
            { title: "Mobile App", description: "Handle urgent tickets from anywhere, anytime." },
            { title: "Performance Metrics", description: "Individual and team performance tracking with real-time insights." },
            { title: "Continuous Learning", description: "Suggested training based on ticket patterns and resolution history." }
        ]
      },
      {
        icon: <FaCog />,
        title: "For Managers",
        items: [
           { title: "Executive Dashboards", description: "High-level KPIs and trend analysis for strategic decision-making." },
           { title: "Resource Planning", description: "Workload distribution and capacity planning across teams." },
           { title: "Quality Monitoring", description: "Ticket quality auditing and coaching opportunities for team improvement." },
           { title: "Budget Planning", description: "Cost per ticket and ROI analysis for financial oversight." },
           { title: "Compliance Reporting", description: "Automated compliance and audit reporting for regulatory requirements." }
        ]
      }
    ]
  },
  gettingStarted: {
    title: { prefix: "Getting", highlight: "Started" },
    description: "Evaluation Options",
    steps: [
      { title: "Discovery & Planning", points: ["Free Trial: 30-day full-featured trial with up to 50 users", "Pilot Program: 90-day pilot with dedicated success manager", "Proof of Concept: Custom POC based on your use cases"] },
      { title: "Implementation & Configuration", points: ["Success criteria definition", "Dedicated setup & configuration", "Custom demo scheduling"] },
      { title: "Evaluation & Optimisation", points: ["Hands-on evaluation with your team", "Performance measurement & ROI analysis", "Continuous feedback integration"] }
    ]
  },
  cta: {
    title: "Ready to Transform Your Support?",
    description: "Join leading organisations using SupportX to deliver exceptional service, meet SLAs and drive customer satisfaction.",
    buttonText: "Start Your Free Trial",
    secondaryButtonText: "Schedule a Custom Demo"
  }
};
