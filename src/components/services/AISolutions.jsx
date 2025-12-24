import React, { useState } from 'react';

const aiOfferings = [
    {
        title: "The AI Opportunity in IT",
        features: [
            "Understanding, reasoning, and creativity capabilities",
            "Handles complex, context-dependent challenges",
            "Generates network configurations automatically",
            "Analyzes complex problems intelligently",
            "Amplifies human expertise",
            "Goes beyond repetitive task automation"
        ]
    },
    {
        title: "Generative AI for NetOps",
        features: [
            "Automated anomaly detection and root cause analysis",
            "Natural language network querying",
            "Predictive capacity planning",
            "Self-healing network infrastructure",
            "Intelligent alert correlation and noise reduction",
            "Automated documentation generation"
        ]
    },
    {
        title: "AI-Driven SecOps",
        features: [
            "Real-time threat hunting and neutralization",
            "Automated incident response playbooks",
            "Behavioral analysis for zero-day threats",
            "Intelligent vulnerability prioritization",
            "Phishing detection and prevention",
            "Automated compliance reporting"
        ]
    }
];

const AISolutions = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % aiOfferings.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + aiOfferings.length) % aiOfferings.length);
    };

    const currentOffering = aiOfferings[activeIndex];

    return (
        <div className="py-24 px-4 md:px-12 w-full overflow-hidden border-t border-gray-900/50">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* 1. Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image - Left */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-pink-600/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition duration-700"></div>
                        <img
                            src="/assets/services/ai.svg"
                            alt="Generative AI Solutions"
                            className="w-full h-auto object-contain rounded-xl relative z-10"
                        />
                    </div>

                    {/* Content - Right */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-900/30 border border-pink-500/30 text-pink-400 text-xs font-semibold tracking-wide uppercase mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span>
                            Generative AI Solutions
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                            Generative AI Solutions
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
                            Harness AI to Transform IT <br /> Operations
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Generative AI represents the next frontier in IT automation, moving beyond rule-based automation to intelligent systems that can understand context, generate solutions, and continuously learn from experience.
                        </p>
                    </div>
                </div>

                {/* 2. Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#0f0f0f]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-colors">
                        <h4 className="text-xl font-bold text-white mb-4">AI-Powered IT Transformation</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Our AI solutions bridge the gap between traditional automation and true intelligence, enabling your IT operations to adapt, learn, and evolve with your business needs.
                        </p>
                    </div>
                    <div className="bg-[#0f0f0f]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors">
                        <h4 className="text-xl font-bold text-white mb-4">Our Approach</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We start by assessing your IT operations, automation maturity, and key challenges. Then we design and implement generative AI solutions that deliver immediate value through intelligent problem-solving while creating a foundation for continuous learning and future innovation.
                        </p>
                    </div>
                </div>

                {/* 3. Service Offerings Carousel */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Service Offerings</h2>

                    <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px]">
                        {/* Glow */}
                        <div className="absolute top-0 right-0 p-32 bg-pink-600/10 blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="flex flex-col h-full justify-between gap-8">
                            {/* Card Header & Content */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                    </div>
                                    <div>
                                        <div className="text-pink-400 text-xs font-bold uppercase tracking-wider mb-1">Service {activeIndex + 1} of {aiOfferings.length}</div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">{currentOffering.title}</h3>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {currentOffering.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[#111] border border-gray-800/50">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-between pt-6 border-t border-gray-800/50 mt-auto">
                                <div className="flex gap-2">
                                    {aiOfferings.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveIndex(idx)}
                                            className={`transition-all duration-300 rounded-full ${idx === activeIndex ? 'w-8 h-2 bg-pink-500' : 'w-2 h-2 bg-gray-700 hover:bg-gray-600'}`}
                                        />
                                    ))}
                                </div>
                                <div className="flex gap-3">
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

            </div>
        </div>
    );
};

export default AISolutions;
