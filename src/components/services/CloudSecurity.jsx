import React from 'react';

const CloudSecurity = () => {
    return (
        <div className="py-24 px-4 md:px-12 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* 1. Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-purple-600/30 blur-2xl rounded-full opacity-40 group-hover:opacity-60 transition duration-700"></div>
                        <img
                            src="/assets/services/cloud-security.svg"
                            alt="Cloud Security Automation"
                            className="relative w-full h-auto object-contain rounded-xl shadow-2xl z-10"
                        />
                    </div>

                    {/* Text Side */}
                    <div>
                        <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold mb-6">
                            Cloud & Security Automation
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Transform Your Cloud <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                Operations with Intelligent Automation
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Modern cloud environments are too complex and dynamic for manual management.
                            Our cloud and security automation services help you build resilient, scalable, and secure cloud infrastructure that adapts to your business needs automatically.
                        </p>
                    </div>
                </div>

                {/* 2. Why it matters & Approach */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#0f0f0f]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-4">Why Cloud Automation Matters</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Cloud environments change constantly—new services launch, security threats evolve, compliance requirements update, and business needs shift.
                            Manual management can't keep pace with this rate of change, leading to security gaps, operational inefficiencies, and missed opportunities.
                        </p>
                    </div>
                    <div className="bg-[#0f0f0f]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We start by understanding your current cloud architecture, security posture, and operational challenges.
                            Then we design and implement automation solutions that address your immediate needs while building a foundation for future growth and evolution.
                        </p>
                    </div>
                </div>

                {/* 3. Features & IaC */}
                <div className="bg-[#0a0a0a]/90 backdrop-blur-md rounded-3xl border border-gray-800 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Key Features */}
                        <div>
                            <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="w-6 h-6 rounded border border-purple-500 flex items-center justify-center text-purple-500 text-xs">🛡️</span>
                                Key Features
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Automated security policy enforcement across all cloud environments',
                                    'Real-time threat detection and automated response',
                                    'Compliance monitoring for multiple frameworks (SOC 2, ISO 27001, GDPR, HIPAA)',
                                    'Vulnerability management and automated patching',
                                    'Identity and access management automation'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                        <div className="mt-1 w-4 h-4 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/50 text-purple-400 text-[10px]">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Infrastructure as Code */}
                        <div>
                            <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="w-6 h-6 rounded border border-purple-500 flex items-center justify-center text-purple-500 text-xs">⚡</span>
                                Infrastructure as Code
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Development of comprehensive Infrastructure as Code strategies',
                                    'Creation of reusable infrastructure templates and modules',
                                    'CI/CD pipeline setup for infrastructure deployment',
                                    'Implementation of infrastructure version control',
                                    'Comprehensive documentation and knowledge transfer'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                        <div className="mt-1 w-4 h-4 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/50 text-purple-400 text-[10px]">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. Benefits */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8">Benefits You'll Experience</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            {
                                title: 'Reduced Security Risk',
                                desc: 'Automated security controls reduce human error and improve consistency.',
                                icon: (
                                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Faster Deployment',
                                desc: 'Infrastructure as Code enables rapid, repeatable deployments.',
                                icon: (
                                    <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Lower Costs',
                                desc: 'Automation reduces manual effort and optimizes resource utilization.',
                                icon: (
                                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Improved Compliance',
                                desc: 'Automated compliance monitoring ensures continuous adherence to standards.',
                                icon: (
                                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Enhanced Scalability',
                                desc: 'Automated scaling responds to demand changes automatically.',
                                icon: (
                                    <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            }
                        ].map((benefit, i) => (
                            <div key={i} className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:bg-[#161616] transition-colors group">
                                <div className="mb-4 bg-gray-900/50 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-white font-bold mb-2 text-sm">{benefit.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CloudSecurity;
