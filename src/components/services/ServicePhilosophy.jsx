import React from 'react';
import { motion } from 'framer-motion';

const philosophyItems = [
    {
        title: "Domain Expertise",
        desc: "Deep technical knowledge combined with real-world operational experience",
        icon: "/assets/services/domain.svg",
        color: "bg-purple-600"
    },
    {
        title: "Long-Term Partnership",
        desc: "Ongoing relationships that evolve with your business needs",
        icon: "/assets/services/partnership.svg",
        color: "bg-purple-600"
    },
    {
        title: "Tailored Approach",
        desc: "Every engagement is customized to your specific environment and goals",
        icon: "/assets/services/tailored.svg",
        color: "bg-blue-600"
    },
    {
        title: "Proven Methodology",
        desc: "Structured approaches refined through hundreds of successful implementations",
        icon: "/assets/services/methodology.svg",
        color: "bg-blue-600"
    },
    {
        title: "Knowledge Transfer",
        desc: "We build your team's capabilities rather than creating dependencies",
        icon: "/assets/services/konw-transfer.svg",
        color: "bg-purple-600"
    },
    {
        title: "Innovation Focus",
        desc: "Continuous exploration of emerging technologies and innovative solutions",
        icon: "/assets/services/innov-foucs.svg",
        color: "bg-pink-600"
    }
];

const ServicePhilosophy = () => {
    return (
        <div className="bg-black py-24 px-4 md:px-12 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

                {/* Left Side - Text Content */}
                <div className="lg:col-span-2 sticky top-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        Our Service <br />
                        <span className="text-purple-400">Philosophy</span>
                    </h2>

                    <h3 className="text-blue-500 font-semibold text-lg mb-6 mt-4">
                        Partnership, Not Just Implementation
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        At Extravis, we believe that technology is only as good as the team that implements and operates it. Our services are designed to transfer knowledge, build capabilities, and create lasting partnerships that drive continuous improvement and innovation.
                    </p>
                </div>

                {/* Right Side - Grid Items */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {philosophyItems.map((item, index) => (
                        <div key={index} className="bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors group">
                            <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center ${item.color} text-white`}>
                                <img src={item.icon} alt={item.title} className="" />
                            </div>

                            <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicePhilosophy;
