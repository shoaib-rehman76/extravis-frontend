import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, BulbIcon, CalculatorIcon, CommunicationIcon, EnergyIcon, GlobeIcon, HandshakeIcon, HeartIcon, LeafIcon, MinusIcon, PlusIcon, TrustIcon } from '../../Shared/svg';
import SectionTitle from '../../Shared/SectionTitle';
const items = [
    {
        title: "Telecommunications & Technology",
        desc: "Regional technology partnerships and major service provider relationships.",
        icon: <CommunicationIcon />,
        bg: "linear-gradient(135deg, rgba(43, 127, 255, 0.2) 0%, rgba(0, 184, 219, 0.2) 100%)",
        colorClass: "bg-sky-600",
        listItems: [
            { title: "Cisco", desc: "Global technology partnership and customer relationship" },
            { title: "Etisalat", desc: "Major regional telecommunications provider in UAE" },
            { title: "FullFiber", desc: "UK fiber‑optic network provider" },
            { title: "NETS", desc: "Pakistan telecommunications infrastructure provider" },
            { title: "Multinet", desc: "Regional telecommunications and infrastructure provider" }
        ]
    },
    {
        title: "Financial Services",
        desc: "Technology and infrastructure partnerships across banking and financial institutions.",
        icon: <BriefcaseIcon />,
        bg: "linear-gradient(135deg, rgba(0, 188, 125, 0.2) 0%, rgba(0, 201, 80, 0.2) 100%)",
        colorClass: "bg-emerald-700",
        listItems: [
            { title: "HBL", desc: "Habib Bank Limited, major Pakistani financial institution" },
            { title: "Allied Telesis", desc: "Financial services technology infrastructure" },
            { title: "PTCL", desc: "Pakistan Telecommunications Company Limited" }
        ]
    },
    {
        title: "Healthcare",
        desc: "Strategic partnerships with leading healthcare providers and systems.",
        icon: <HeartIcon />,
        bg: "linear-gradient(135deg, rgba(255, 32, 86, 0.2) 0%, rgba(246, 51, 154, 0.2) 100%)",
        colorClass: "bg-rose-700",
        listItems: [
            { title: "As‑Salam International Hospital", desc: "Major healthcare provider" },
            { title: "Multiple Regional Healthcare Systems", desc: "(confidential relationships)" }
        ]
    },
    {
        title: "Energy & Utilities",
        desc: "Partnerships with regional utilities and asset owners across the Middle East.",
        icon: <EnergyIcon />,
        bg: "linear-gradient(135deg, rgba(254, 154, 0, 0.2) 0%, rgba(255, 105, 0, 0.2) 100%)",
        colorClass: "bg-amber-700",
        listItems: [
            { title: "SAPCO", desc: "Sharjah Asset & Project Company, UAE" },
            { title: "Multiple Regional Utilities", desc: "Across Middle East and South Asia" }
        ]
    },
    {
        title: "Government & Public Sector",
        desc: "Supporting smart city and public sector digital transformation projects.",
        icon: <CalculatorIcon />,
        bg: "linear-gradient(135deg, rgba(97, 95, 255, 0.2) 0%, rgba(173, 70, 255, 0.2) 100%)",
        colorClass: "bg-violet-700",
        listItems: [
            { title: "Dubai Municipality", desc: "Smart city infrastructure management" },
            { title: "Multiple Government Agencies", desc: "(confidential relationships across multiple countries)" }
        ]
    }
];


const LeadersWorldwide = () => {
    return (
        <>
            <SectionTitle title="Trusted by Industry" subtitle="Leaders Worldwide" />
            <div className="bg-black py-24 px-4 md:px-12 w-full">
                <div className="max-w-7xl mx-auto  gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className=" "
                    >
                        <div
                            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-24 mt-20 z-2" >
                            {items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    className="backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                                    style={{ background: item.bg }}
                                >
                                    <div className="flex items-center justify-start gap-4">
                                        <div className={`border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 ${item.colorClass}`}>{item.icon}</div>
                                        <p className='text-white font-bold text-2xl'>{item.title}</p>
                                    </div>
                                    <ul className="mt-6 space-y-4">
                                        {item.listItems.map((x, i) => (
                                            <li
                                                key={i}
                                                className="relative bg-(--color-blue-dimmed) p-4 pl-10 rounded-[10px]"
                                            >
                                                {/* Custom bullet */}
                                                <span className="absolute left-4 top-6 text-(--color-text-dimmed)">
                                                    •
                                                </span>

                                                <h4 className="text-white text-lg font-medium leading-snug">
                                                    {x.title}
                                                </h4>
                                                <p className="text-(--color-text-dimmed) text-base mt-1">
                                                    {x.desc}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>



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
