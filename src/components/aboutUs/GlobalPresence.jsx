import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BulbIcon, GlobeIcon, HandshakeIcon, HeartIcon, LeafIcon, MinusIcon, PlusIcon, TrustIcon } from '../../Shared/svg';
import SectionTitle from '../../Shared/SectionTitle';
const philosophyItems = [
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
const data = [
    {
        icon: <GlobeIcon />, title: "Europe", desc: <>
            <p className="text-white text-base">United Kingdom</p>
            <p className="text-(--color-text-dimmed) text-sm mt-1 mb-4">Global headquarters and European operations center</p>
            <p className="text-white text-base">Germany</p>
            <p className="text-(--color-text-dimmed) text-sm mt-1 mb-4">Central European hub serving DACH region</p>
            <p className="text-white text-base">Italy</p>
            <p className="text-(--color-text-dimmed) text-sm mt-1 mb-4">Southern European operations and partnerships</p>
        </>
    },
    {
        icon: <GlobeIcon />, title: "North America", desc: <>
            <p className="text-white text-base">Canada</p>
            <p className="text-(--color-text-dimmed) text-sm mt-1 mb-4">North American headquarters and development center</p>
            <p className="text-white text-base">United States</p>
            <p className="text-(--color-text-dimmed) text-sm mt-1 mb-4">Enterprise sales and customer success operations.</p>
        </>
    },
    {
        icon: <GlobeIcon />, title: "Middle East", desc: <>
            <p className="text-white text-base">UAE</p>
            <p className="text-(--color-text-dimmed) text-sm mt-1 mb-4">Regional headquarters for Middle East and Africa</p>
            <p className="text-white text-base">Oman</p>
            <p className="text-(--color-text-dimmed) text-sm mt-1 mb-4">Telecommunications sector partnerships and operations</p>
            <p className="text-white text-base">Saudi Arabia</p>
            <p className="text-(--color-text-dimmed) text-sm mt-1 mb-4">Government and enterprise sector operations</p>
        </>
    },
    {
        icon: <GlobeIcon />, title: "Asia", desc: <>
            <p className="text-white text-base">Pakistan</p>
            <p className="text-(--color-text-dimmed) text-sm mt-1 mb-4">Primary development and engineering center</p>

        </>
    },
]

const globalPresenceItems = [
    { icon: <BulbIcon />, title: "Local Expertise", desc: "Understanding of regional regulations, business practices, and cultural requirements" },
    { icon: <GlobeIcon />, title: "Time Zone Coverage", desc: "24/7 support and development across global time zones" },
    { icon: <TrustIcon />, title: "Regulatory Compliance", desc: "Local compliance with data protection and industry regulations" },
    { icon: <HandshakeIcon />, title: "Partnership Networks", desc: "Strategic partnerships with local systems integrators and technology providers" },
    { icon: <LeafIcon />, title: "Cultural Understanding", desc: "Deep knowledge of local business practices and customer expectations." },
    { icon: <HandshakeIcon />, title: "Customer Proximity", desc: "Local sales, support, and success teams in major markets." }
]
const GlobalPresence = () => {
    // Keep first item open by default; null means all collapsed
    const [openIndex, setOpenIndex] = useState(0);

    // Slider settings for mobile carousels
    const sliderSettings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false
    };

    return (
        <>
            <SectionTitle title="Strategic" subtitle="Global Expansion" >
                <p className='text-(--color-text-dimmed)'>Operating in 9 countries across 4 continents with local expertise and 24/7 coverage.</p>
            </SectionTitle>
            <div className="bg-black  px-4 md:px-12 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side - Text Content */}
                    <div className="lg:col-span-1 lg:sticky lg:top-24">
                        <div className="max-w-prose">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                From Local Startup to   <br />
                                <span className="text-purple-400">Global Leader</span>
                            </h2>
                            <p className="text-(--color-text-dimmed) text-lg leading-relaxed">
                                Extravis operates across Europe, North America, the Middle East and Asia, combining global best practices with local expertise. We invest in regional offices, partnerships and support teams to ensure customers receive timely, culturally aligned service. This global presence enables local expertise, around‑the‑clock coverage, regulatory compliance, partnership networks, cultural understanding and customer proximity.
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto  relative   z-2  w-full overflow-hidden"
                >
                    {/* Mobile carousel */}
                    <div className="md:hidden mb-8">
                        <Slider {...sliderSettings}>
                            {data.map((item, idx) => (
                                <div key={idx} className="px-4">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 transition-all"
                                    >
                                        <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                        <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                                        <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Desktop / Tablet grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-24 mt-20 z-2">
                        {data.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                            >
                                <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
            {/* Global Presence Section */}
            <SectionTitle title="Why" subtitle="Global Presence Matters" />

            <div className="bg-black py-24 px-4 md:px-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto  relative   z-2  w-full overflow-hidden"
                >
                    {/* Mobile carousel for Global Presence */}
                    <div className="md:hidden mb-8">
                        <Slider {...sliderSettings}>
                            {globalPresenceItems.map((item, idx) => (
                                <div key={idx} className="px-4">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 transition-all"
                                    >
                                        <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                        <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Desktop / Tablet grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-24 mt-20 z-2">
                        {globalPresenceItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                            >
                                <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </>
    );
};

export default GlobalPresence;
