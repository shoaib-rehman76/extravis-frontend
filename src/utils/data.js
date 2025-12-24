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
                title: "About",
                url: "/about",
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
        id: 4,
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
    }
]

export const ourFlagShipProducts = [
    {
        id: 1,
        title: "Monetx",
        sub_title:'Automated Ticket Routing',
        sub_description:'Uses AI to assign tickets to the right experts instantly, eliminating delays and manual guesswork. With NLP and machine learning, it ensures smart routing, balanced workloads, timely escalations, and seamless integration with your existing ticketing systems.',
        description: "Meet your sustainability goals while reducing operational costs. MonetX provides real-time energy monitoring, carbon footprint tracking, and intelligent optimization for more environmentally responsible IT operations.",
        image:'../../assets/home/products/monetx.svg',
        button:'Explore Monetx',
        features:[
            {
                title:'Real-Time Metrics & Monitoring',
                description:'Unified, live visibility across infrastructure health, performance, and SLA adherence with AI-powered alerts.'
            },
            {
                title:'Unified Infrastructure Insights',
                description:'Correlate application, network, and cloud telemetry in one command center for faster issue isolation.'
            },
            {
                title:'AI-Driven Reporting & Analytics',
                description:'Generate predictive capacity models and business-ready reports with drag-and-drop dashboards.'
            },
            {
                title:'Seamless Integration Platform',
                description:'100+ pre-built connectors and low-code workflows plug MonetX into existing ITSM, APM, and observability stacks.'
            },
            {
                title:'Advanced Customization Engine',
                description:'Design bespoke runbooks, KPIs, and visualizations with reusable widgets and role-based views.'
            },
        ]
    },
    {
        id: 2,
        title: "Supportx",
        sub_title:'Automated Ticket Routing',
        sub_description:'Uses AI to assign tickets to the right experts instantly, eliminating delays and manual guesswork. With NLP and machine learning, it ensures smart routing, balanced workloads, timely escalations, and seamless integration with your existing ticketing systems.',
        description: "Revolutionize your IT support operations with intelligent automation that routes tickets perfectly, tracks SLAs automatically, and reduces response times by up to 50% while improving team efficiency.",
        image:'../../assets/home/products/supportx.svg',
        button:'Explore Supportx',
        features:[
            {
                title:'AI Ticket Prioritization',
                description:'Natural language processing classifies urgency and impact before tickets hit the queue.'
            },
            {
                title:'Self-Healing Knowledge Hub',
                description:'Surface contextual runbooks to agents and trigger auto-remediation for known issues.'
            },
            {
                title:'Omni-Channel Experience',
                description:'Seamless support across chat, email, voice, and embedded widgets with unified history.'
            },
            {
                title:'SLA Guardian',
                description:'Predictive breach alerts and automated escalations keep commitments intact.'
            },
            {
                title:'Team Performance Analytics',
                description:'Track utilization, CSAT, and backlog velocity with live coachable insights.'
            },
        ]
    },
    {
        id: 3,
        title: "Greenx",
        sub_title:'Real-Time Energy Usage Analytics',
        sub_description:'Delivers granular, real-time visibility into power consumption across your data center, enabling precise optimization. With smart PDU, server, and environmental sensor integration, it supports efficiency, sustainability, and cost control efforts.',
        description: "Meet your sustainability goals while reducing operational costs. GreenX provides real-time energy monitoring, carbon footprint tracking, and intelligent optimization for more environmentally responsible IT operations.",
        image:'../../assets/home/products/greenx.svg',
        button:'Explore Greenx',
        features:[
            {
                title:'Energy & Carbon Dashboard',
                description:'Real-time PUE, CUE, and emissions insights down to rack-level granularity.'
            },
            {
                title:'Smart Workload Placement',
                description:'AI recommendations shift workloads to the cleanest, most cost-efficient regions.'
            },
            {
                title:'Cooling Optimization',
                description:'Digital twins and IoT sensors maintain optimal thermal envelopes automatically.'
            },
            {
                title:'Compliance & Reporting',
                description:'Generate audit-ready ESG disclosures aligned to GRI, SEC, and CSRD frameworks.'
            },
            {
                title:'Sustainability Forecasting',
                description:'Model initiatives and investments to hit medium and long-term reduction targets.'
            },
        ]
    }
]

export const automationAndDigitalSolution = [
    {
        id: 1,
        title: 'Cloud & Security Automation',
        description: 'Drive a continuous cloud security posture across multi-cloud environments, and automate incident response for faster agility and speed.',
        image: '../../assets/home/digital-solution/1.png',
    },
    {
        id: 2,
        title: 'Network Automation',
description:'We provide comprehensive network flow automation covering provisioning, monitoring, troubleshooting, and optimization.',        image: '../../assets/home/digital-solution/2.png',
    },
    {
        id: 3,
        title: 'DevSecOps Enablement',
        description: 'We integrate security into the Dev Ops pipeline to assure rapid, compliant, and secure software delivery.',
        image: '../../assets/home/digital-solution/3.png',
    },
    {
        id: 4,
        title: 'Custom Software',
        description: 'We integrate security containers to ensure rapid, compliant, and secure service.',
        image: '../../assets/home/digital-solution/4.png',
    }
]