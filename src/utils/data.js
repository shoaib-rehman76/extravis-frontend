export const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
    isChild: false,
    isActive: false,
  },
  {
    id: 2,
    title: "Products",
    url: "/products",
    isChild: true,
    isActive: false,
    children: [
      {
        id: 1,
        title: "MonetX",
        url: "/montex", // You can change this to /products/monetx later if you make separate pages
      },
      {
        id: 2,
        title: "SupportX",
        url: "/supportx",
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
    isChild: false,
    isActive: false,
  },
  {
    id: 4,
    title: "About Us",
    url: "/about",
    isChild: false,
    isActive: false,
  },
  {
    id: 6,
    title: "FAQS",
    url: "/faqs",
    isChild: false,
    isActive: false,
  },
  {
    id: 5,
    title: "Contact Us",
    url: "/contact-us",
    isChild: false,
    isActive: false,
  },
];

export const ourFlagShipProducts = [
  {
    id: 1,
    title: "MonetX",
    sub_title: "Unified Network Observability & Automation Platform",
    sub_description:
      "Uses AI to assign tickets to the right experts instantly, eliminating delays and manual guesswork. With NLP and machine learning, it ensures smart routing, balanced workloads, timely escalations, and seamless integration with your existing ticketing systems.",
    description: "Perfect for: Network Engineers, NOC Teams, IT Operations",
    image: "../../assets/home/products/monetx.svg",
    button: "Explore MonetX",
    features: [
      {
        title: "Real-Time Multi-Vendor Monitoring",
        description:
          "Unified, live visibility across infrastructure health, performance, and SLA adherence.",
      },
      {
        title: "AI-Driven Anomaly Detection",
        description:
          "Correlate application, network, and cloud telemetry to detect issues before they impact users.",
      },
      {
        title: "Automated Incident Remediation",
        description:
          "Trigger auto-remediation workflows for known issues to reduce MTTR.",
      },
      {
        title: "Unified Topology & Dependency Mapping",
        description:
          "Visualize the entire IT estate and understand dependencies at a glance.",
      },
      {
        title: "Predictive Performance & Capacity Analytics",
        description:
          "Forecast resource needs and optimize capacity planning with AI-driven insights.",
      },
    ],
  },
  {
    id: 2,
    title: "SupportX",
    sub_title: "Intelligent IT Service Management & Helpdesk Automation",
    sub_description:
      "Uses AI to assign tickets to the right experts instantly, eliminating delays and manual guesswork. With NLP and machine learning, it ensures smart routing, balanced workloads, timely escalations, and seamless integration with your existing ticketing systems.",
    description: "Perfect for: IT Support Teams, Service Desk Managers, Enterprises",
    image: "../../assets/home/products/supportx.svg",
    button: "Explore SupportX",
    features: [
      {
        title: "AI-Powered Ticket Categorization & Routing",
        description:
          "Natural language processing classifies urgency and impact before tickets hit the queue.",
      },
      {
        title: "Automated SLA Tracking & Escalations",
        description:
          "Predictive breach alerts and automated escalations keep commitments intact.",
      },
      {
        title: "Intelligent Knowledge Base Automation",
        description:
          "Surface contextual runbooks to agents and trigger auto-remediation for known issues.",
      },
      {
        title: "Multi-Channel Support Integration",
        description:
          "Seamless support across chat, email, voice, and embedded widgets with unified history.",
      },
      {
        title: "Advanced Service Analytics & Performance Insights",
        description:
          "Track utilization, CSAT, and backlog velocity with live coachable insights.",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Greenx",
  //   sub_title: "Real-Time Energy Usage Analytics",
  //   sub_description:
  //     "Delivers granular, real-time visibility into power consumption across your data center, enabling precise optimization. With smart PDU, server, and environmental sensor integration, it supports efficiency, sustainability, and cost control efforts.",
  //   description:
  //     "Meet your sustainability goals while reducing operational costs. GreenX provides real-time energy monitoring, carbon footprint tracking, and intelligent optimization for more environmentally responsible IT operations.",
  //   image: "../../assets/home/products/greenx.svg",
  //   button: "Explore Greenx",
  //   features: [
  //     {
  //       title: "Energy & Carbon Dashboard",
  //       description:
  //         "Real-time PUE, CUE, and emissions insights down to rack-level granularity.",
  //     },
  //     {
  //       title: "Smart Workload Placement",
  //       description:
  //         "AI recommendations shift workloads to the cleanest, most cost-efficient regions.",
  //     },
  //     {
  //       title: "Cooling Optimization",
  //       description:
  //         "Digital twins and IoT sensors maintain optimal thermal envelopes automatically.",
  //     },
  //     {
  //       title: "Compliance & Reporting",
  //       description:
  //         "Generate audit-ready ESG disclosures aligned to GRI, SEC, and CSRD frameworks.",
  //     },
  //     {
  //       title: "Sustainability Forecasting",
  //       description:
  //         "Model initiatives and investments to hit medium and long-term reduction targets.",
  //     },
  //   ],
  // },
];

export const automationAndDigitalSolution = [
  {
    id: 1,
    title: "Cloud & Security Automation",
    description:
      "Enforce cloud security policies, enable real‑time threat detection and automate compliance with frameworks such as ISO 27001 and GDPR.",
    image: "../../assets/home/digital-solution/1.png",
  },
  {
    id: 2,
    title: "Network Automation",
    description:
      "Automate configuration, provisioning, monitoring and troubleshooting to reduce manual effort and mitigate errors.",
    image: "../../assets/home/digital-solution/2.png",
  },
  {
    id: 3,
    title: "DevSecOps Enablement",
    description:
      "Secure your pipelines and ensure rapid, compliant software delivery.",
    image: "../../assets/home/digital-solution/3.png",
  },
  {
    id: 4,
    title: "Custom Software",
    description:
      "Build custom applications and integrations tailored to your unique workflows.",
    image: "../../assets/home/digital-solution/4.png",
  },
];
