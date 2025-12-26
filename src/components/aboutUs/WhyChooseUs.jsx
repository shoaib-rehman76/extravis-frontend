import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    return (
        <div className="py-24 px-4 md:px-12 relative w-full overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* 1. Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Choose Extravis Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Proven Expertise Across Industries. Our team brings deep technical expertise combined with real-world operational experience across multiple industries.
                    </p>
                </motion.div>

                {/* 2. Technical Excellence Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    {/* Visual Graphic - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#0f0f0f]/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 h-[400px] relative flex items-center justify-center overflow-hidden group"
                    >
                        {/* Connecting Lines */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rotate-45 absolute"></div>
                            <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -rotate-45 absolute"></div>
                        </div>

                        {/* Central Node */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="relative z-10 w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-500 animate-pulse"></div>
                        </motion.div>

                        {/* Floating Nodes */}
                        <div className="absolute top-12 left-12 p-3 bg-cyan-900/30 rounded-full border border-cyan-500/30 text-cyan-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <div className="absolute top-12 right-12 p-3 bg-green-900/30 rounded-full border border-green-500/30 text-green-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="absolute bottom-12 left-12 p-3 bg-purple-900/30 rounded-full border border-purple-500/30 text-purple-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="absolute bottom-12 right-12 p-3 bg-pink-900/30 rounded-full border border-pink-500/30 text-pink-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </div>
                    </motion.div>

                    {/* Content - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
                            Technical Excellence
                        </h3>
                        <div className="space-y-6">
                            {[
                                { text: "Team members hold industry certifications from major vendors (Cisco, AWS, Microsoft, VMware)", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-blue-400" },
                                { text: "Ongoing investment in training and certification to stay current with evolving technologies", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "text-purple-400" },
                                { text: "Implementation of industry best practices and lessons learned from hundreds of engagements", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "text-indigo-400" },
                                { text: "Continuous exploration of emerging technologies and innovative solutions", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", color: "text-pink-400" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* 3. Industries Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
                >
                    {[
                        { title: "Telecommunications", desc: "Deep understanding of service provider networks and requirements" },
                        { title: "Financial Services", desc: "Experience with regulatory requirements and high-availability systems" },
                        { title: "Healthcare", desc: "Knowledge of HIPAA compliance and medical device networking" },
                        { title: "Manufacturing", desc: "Understanding of operational technology and industrial networks" },
                        { title: "Government", desc: "Experience with security requirements and compliance frameworks" },
                        { title: "Methodology & Approach", desc: "Proven implementation methodologies refined through experience" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                        >
                            <h4 className="text-white font-bold mb-2">{item.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 4. Customer Success Focus */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#0f0f0f]/50 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 md:p-12"
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-12">Customer Success Focus</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Dedicated Success Managers", desc: "Assigned customer success managers for ongoing relationship management", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "text-purple-400" },
                            { title: "Measurable Outcomes", desc: "Clear success criteria and measurement of business impact", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "text-blue-400" },
                            { title: "Long-Term Partnership", desc: "Ongoing relationships that evolve with changing business needs", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "text-pink-400" },
                            { title: "24/7 Support", desc: "Round-the-clock support for critical implementations", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "text-cyan-400" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#111] p-6 rounded-2xl border border-gray-800 flex gap-4 hover:border-gray-700 transition-colors">
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center ${item.color}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default WhyChooseUs;
