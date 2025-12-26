import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BulbIcon, GlobeIcon, HandshakeIcon, HeartIcon, LeafIcon, MinusIcon, PlusIcon, TrustIcon } from '../../Shared/svg';
import SectionTitle from '../../Shared/SectionTitle';
const items = [
    {
        year: "2021",
        title: "Foundation",
        desc: "Established headquarters in Horsham, England and launched development center in Islamabad, Pakistan.",
        icon: "/assets/services/domain.svg",
        color: "bg-purple-600",
        listItems: ["Established headquarters in Horsham, England", "Launched development center in Islamabad, Pakistan", "Initial focus on European and South Asian markets", "Built foundational team of 15 professionals"]
    },
    {
        year: "2022",
        title: "Middle East Expansion",
        desc: "Intelligent automation adapts to changing conditions; knowledge capture ensures systematic reuse of operational knowledge;process integration aligns workflows and procedures; continuous improvement makes automation smarter over time.",
        icon: "/assets/services/partnership.svg",
        color: "bg-purple-600",
        listItems: ["Opened regional office in Dubai, UAE", "Established partnerships in Oman for telecommunications sector", "Began serving major regional telecommunications providers", "Achieved regional compliance certifications"]
    },
    {
        year: "2023",
        title: "European Growth",
        desc: "Expanded operations to Central and Southern Europe with dedicated partnerships and localized support.",
        icon: "/assets/services/tailored.svg",
        color: "bg-blue-600",
        listItems: ["Expanded operations to Frankfurt, Germany", "Established Italian partnerships for financial services sector", "Achieved GDPR compliance for European operations", "Launched localized support in multiple European languages"]
    },
    {
        year: "2024",
        title: "North American Entry",
        desc: "Opened North American headquarters in Toronto and established US operations for enterprise markets.",
        icon: "/assets/services/methodology.svg",
        color: "bg-blue-600",
        listItems: ["Opened North American headquarters in Toronto, Canada, Canada", "Established US operations for enterprise and cloud service provider markets", "Built strategic partnerships with major systems integrators", "Achieved SOC 2 Type II compliance for North American markets"]
    },
    {
        year: "2025",
        title: "Middle East Growth",
        desc: "Expanded to Saudi Arabia supporting Vision 2030 digital transformation initiatives.",
        icon: "/assets/services/methodology.svg",
        color: "bg-blue-600",
        listItems: ["Expanded to Riyadh, Saudi Arabia", "Established partnerships for Vision 2030 digital transformation initiatives", "Began serving major government and enterprise customers", "Localized solutions for regional regulatory requirements."]
    },
];


const LeadersWorldwide = () => {
    return (
        <>
            <SectionTitle title="Trusted by Industry" subtitle="Leaders Worldwide" />
            <div className="bg-black py-24 px-4 md:px-12 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-7xl mx-auto  relative   z-2  w-full overflow-hidden"
                    >
                        <div
                            className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-24 mt-20 z-2" >
                            {items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-start">
                                        <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                        <p>{item.title}</p>
                                    </div>

                                    <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>



                </div>

            </div>

        </>
    );
};

export default LeadersWorldwide;
