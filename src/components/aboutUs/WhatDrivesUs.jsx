import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BulbIcon, GlobeIcon, HandshakeIcon, HeartIcon, LeafIcon, TrustIcon } from '../../Shared/svg';
import SectionTitle from '../../Shared/SectionTitle';
const data = [
    { icon: <BulbIcon />, title: "Innovation with Purpose", desc: "We innovate to solve real problems that create measurable value. Every feature answers a customer need." },
    { icon: <HeartIcon />, title: "Customer Success Obsession", desc: "Your success is our success. We deliver beyond implementation to ensure ongoing value and continuous improvement, reflecting our 98 % retention rate." },
    { icon: <TrustIcon />, title: "Transparency & Trust", desc: "We communicate honestly with realistic timelines and transparent pricing. Our customers know what to expect, when to expect it and what it will cost" },
    { icon: <GlobeIcon />, title: "Global Thinking & Local Understanding", desc: "While we operate globally, each market is unique. Our solutions are globally consistent yet locally adapted." },
    { icon: <LeafIcon />, title: "Sustainable Innovation", desc: "Environmental responsibility and operational excellence go hand in hand." },
    { icon: <HandshakeIcon />, title: "Partnership Mindset", desc: "We measure success not by the features we deliver, but by the outcomes our customers achieve." }
]

const WhatDrivesUs = () => {


    return (
        <div className="overflow-hidden bg-black py-24">
            <SectionTitle title="What Drives" subtitle="Everything We Do" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto  relative  px-4 z-2 md:px-12 w-full overflow-hidden"
            >
                {/* Mobile: carousel (1 card visible) */}
                <div className="md:hidden mb-8">
                    <Slider
                        dots={true}
                        infinite={false}
                        arrows={false}
                        speed={300}
                        slidesToShow={1}
                        slidesToScroll={1}
                        adaptiveHeight={false}
                    >
                        {data.map((item, idx) => (
                            <div key={idx} className="px-4">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 transition-all"
                                >
                                    <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Desktop / Tablet: grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 mt-16 z-2">
                    {data.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                        >
                            <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                            <h4 className="text-white font-bold mb-2">{item.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

export default WhatDrivesUs;
