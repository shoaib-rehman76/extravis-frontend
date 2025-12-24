import React from 'react';

const NetworkAutomation = () => {
    return (
        <div className="py-24 px-4 md:px-12 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* 1. Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold mb-6">
                            Network Automation
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Network Automation Services
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
                            Eliminate Manual Network <br /> Management Forever
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Modern cloud environments are too complex and dynamic for manual network automation. It isn't just about efficiency—it's about reliability, consistency, and enabling your network to support business agility rather than constraining it.
                        </p>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition duration-700"></div>
                        <img
                            src="/assets/services/network-auto.svg"
                            alt="Network Automation"
                            className="w-full h-auto object-contain rounded-xl relative z-10"
                        />
                    </div>
                </div>

                {/* 2. Imperative & Approach Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#0f0f0f]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                        <h4 className="text-xl font-bold text-white mb-4 leading-tight">The Network Automation Imperative</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Modern networks are too complex for manual management. With multiple vendors, cloud connections, security requirements, and constant change, manual processes create bottlenecks, errors, and security vulnerabilities.
                        </p>
                    </div>

                    <div className="bg-[#0f0f0f]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors">
                        <h4 className="text-xl font-bold text-white mb-4 leading-tight">Our Network Automation Approach</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We don't just write scripts; we build intelligent automation platforms. Our approach focuses on intent-based networking, where you define the desired state, and the automation ensures the network matches that state.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NetworkAutomation;
