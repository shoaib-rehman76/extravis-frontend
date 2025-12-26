import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MinusIcon, PlusIcon } from '../../Shared/svg';
const philosophyItems = [
    {
        year: "2021",
        title: "The Beginning",
        desc: "Extravis was conceived to deliver complex IT operations simplicity; early innovations unified network monitoring, cloud infrastructure and automation.",
        icon: "/assets/services/domain.svg",
        color: "bg-purple-600",
        listItems: []
    },
    {
        year: "2022",
        title: "Innovation Phase",
        desc: "We launched our core platform architecture and AI logic, proving there is no one‑size‑fits‑all approach to digital transformation.",
        icon: "/assets/services/partnership.svg",
        color: "bg-purple-600"
    },
    {
        year: "2023",
        title: "Building Momentum",
        desc: "With innovative success, we expanded our delivery portfolio and enhanced AI technology, serving customers across multiple measurement frameworks.",
        icon: "/assets/services/tailored.svg",
        color: "bg-blue-600"
    },
    {
        year: "2024",
        title: "Global Expansion",
        desc: "Operations extended across Europe and North America, with dedicated customer access operations and strategic partnerships.",
        icon: "/assets/services/methodology.svg",
        color: "bg-blue-600"
    },
    {
        year: "2025",
        title: "Acceleration Phase",
        desc: "Today, Extravis stands as a global leader with a strong pipeline of innovative solutions and worldwide partnerships—serving hundreds of customers and managing over 20 million API calls daily.",
        icon: "/assets/services/konw-transfer.svg",
        color: "bg-purple-600"
    },
];

const GlobalImpact = () => {
    // Keep first item open by default; null means all collapsed
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="bg-black py-24 px-4 md:px-12 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Side - Text Content */}
                <div className="lg:col-span-1 lg:sticky lg:top-24">
                    <div className="max-w-prose">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Evolution & Milestones  <br />
                            <span className="text-purple-400">From Vision to Global Impact</span>
                        </h2>
                        <p className="text-(--color-text-dimmed) text-lg leading-relaxed">
                            Founded with a simple but powerful belief: complex IT operations shouldn't require complex solutions.
                        </p>
                    </div>
                </div>

                {/* Right Side - Stacked Items */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    {philosophyItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        const headerId = `gi-toggle-${index}`;
                        const panelId = `gi-panel-${index}`;

                        return (
                            <div key={index}>
                                {/* Desktop view - full card */}
                                <div className="hidden md:flex bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 gap-8 transition-colors">
                                    <div>
                                        <div className={`min-w-[73px] h-[70px] mb-4 rounded-[14px] flex flex-col items-center justify-center border-gray-800 border-2 text-white`}>
                                            <p className="text-lg font-bold text-purple-400">{item.year}</p>
                                        </div>
                                        <div className="w-px h-[50%] m-auto bg-(--color-primary-black) mt-3 rounded-sm" />
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold text-2xl mb-2">{item.title}</h4>
                                        <p className="text-(--color-text-dimmed) text-lg leading-relaxed">
                                            {item.desc}
                                        </p>
                                        {item.listItems && item.listItems.length > 0 && (
                                            <ul className="mt-3 grid grid-cols-2 gap-2 list-disc marker:text-[#579FFF] pl-4">
                                                {item.listItems.map((li, i) => (
                                                    <li key={i} className="text-(--color-text-dimmed) text-base">{li}</li>
                                                ))}
                                            </ul>
                                        )}


                                    </div>

                                </div>

                                {/* Mobile view - accordion */}
                                <div className="md:hidden bg-[#0a0a0a] rounded-2xl border border-gray-800 overflow-hidden">
                                    <button
                                        id={headerId}
                                        aria-controls={panelId}
                                        aria-expanded={isOpen}
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full p-4 flex items-center justify-between text-left"
                                    >
                                        <div className="flex items-center">
                                            <div className={`min-w-[73px] h-[70px]  rounded-[14px] flex  items-center justify-center border border-gray-800 text-purple-400`}>
                                                <p className="text-lg font-bold">{item.year}</p>
                                            </div>
                                            <div className="w-full h-px bg-(--color-primary-black) mt-3 rounded-sm" />
                                        </div>
                                        <div className="w-5 h-5  flex items-center justify-center">
                                            {isOpen ? (
                                                <MinusIcon />
                                            ) : (
                                                <PlusIcon />
                                            )}
                                        </div>
                                    </button>

                                    <motion.div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={headerId}
                                        layout
                                        initial={false}
                                        animate={{ opacity: isOpen ? 1 : 0 }}
                                        transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        {isOpen && (
                                            <div className="px-4 pb-4 text-(--color-text-dimmed) text-sm leading-relaxed">
                                                <p className='text-white text-[32px] font-bold'>{item.title}</p>
                                                <p className='text-(--color-text-dimmed) font-normal text-lg'>{item.desc}</p>
                                                {item.listItems && item.listItems.length > 0 && (
                                                    <ul className="mt-3 grid grid-cols-2 gap-2 list-disc marker:text-[#579FFF] pl-4">
                                                        {item.listItems.map((li, i) => (
                                                            <li key={i} className="text-(--color-text-dimmed) text-base">{li}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default GlobalImpact;
