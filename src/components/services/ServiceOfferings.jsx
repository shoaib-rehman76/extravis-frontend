import React, { useState } from 'react';

const offerings = [
    {
        title: "Network Configuration Automation",
        steps: [
            { title: "Current State Analysis", desc: "Comprehensive analysis of existing network configuration and management processes" },
            { title: "Automation Strategy", desc: "Development of comprehensive network automation strategy and roadmap" },
            { title: "Tool Selection", desc: "Evaluation and selection of appropriate automation tools and platforms" },
            { title: "Implementation", desc: "Deployment of automated configuration management across your network" }
        ],
        features: [
            "Automated device discovery and inventory management",
            "Change management automation with approval workflows",
            "Compliance monitoring and automated remediation",
            "Configuration template development and deployment",
            "Configuration backup and version control"
        ]
    },
    {
        title: "Security Policy Automation",
        steps: [
            { title: "Security Audit", desc: "Review of current security policies and firewall rules" },
            { title: "Policy Definition", desc: "Defining standardized security policies for different zones" },
            { title: "Automation Logic", desc: "Scripting the logic for automatic rule application" },
            { title: "Enforcement", desc: "Continuous monitoring and enforcement of security policies" }
        ],
        features: [
            "Automated firewall rule provisioning",
            "Real-time security threat response",
            "Zero-trust architecture implementation",
            "Audit trail and compliance reporting",
            "Identity-based access control automation"
        ]
    },
    {
        title: "Cloud Network Orchestration",
        steps: [
            { title: "Cloud Assessment", desc: "Analyzing multi-cloud network requirements" },
            { title: "Interconnect Design", desc: "Designing secure interconnects between clouds and on-prem" },
            { title: "Orchestration Setup", desc: "Implementing tools to manage network lifecycle" },
            { title: "Scale Management", desc: "Automating scaling based on traffic patterns" }
        ],
        features: [
            "Multi-cloud connectivity automation",
            "Load balancing configuration management",
            "VPN and Direct Connect automation",
            "Cost optimization through dynamic scaling",
            "Centralized network visibility dashboard"
        ]
    },
    {
        title: "Network Telemetry & Analytics",
        steps: [
            { title: "Data Collection", desc: "Setting up telemetry streams from all devices" },
            { title: "Analytics Engine", desc: "Configuring AI/ML platform for data analysis" },
            { title: "Dashboarding", desc: "Creating real-time visualization dashboards" },
            { title: "Alerting", desc: "Defining intelligent alerts for anomalies" }
        ],
        features: [
            "Real-time bandwidth utilization monitoring",
            "Predictive failure analysis",
            "Application performance monitoring",
            "Root cause analysis automation",
            "Customizable reporting and alerts"
        ]
    }
];

const ServiceOfferings = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % offerings.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + offerings.length) % offerings.length);
    };

    const currentOffering = offerings[activeIndex];

    return (
        <div className="py-24 px-4 md:px-12 w-full">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Service Offerings</h2>

                {/* Main Card Container */}
                <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[600px] flex flex-col justify-between">
                    {/* Glowing Effect */}
                    <div className="absolute top-0 right-0 p-32 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div>
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div>
                                <div className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">Service {activeIndex + 1} of {offerings.length}</div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white transition-all duration-300">{currentOffering.title}</h3>
                            </div>
                        </div>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                            {currentOffering.steps.map((step, idx) => (
                                <div key={idx} className="bg-[#111] p-5 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                                    <h4 className="text-blue-400 font-bold text-sm mb-2">{step.title}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Key Features */}
                        <div>
                            <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-6">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                Key Features
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                                {currentOffering.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                                        <div className="w-4 h-4 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/30 text-blue-400 text-[10px] flex-shrink-0">✓</div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Controls */}
                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-800">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {offerings.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-blue-500 w-6' : 'bg-gray-700 hover:bg-gray-600'}`}
                                ></button>
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-4">
                            <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceOfferings;
