import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from '../../Shared/SectionTitle';
import { BrainIcon, BuildingIcon, CloudIcon, CommunicationIcon } from '../../Shared/svg';
import { desc } from 'framer-motion/client';

const AreaOfExpertise = () => {
    const sliderSettings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    const expertise = [
        { title: 'Network Engineering & Automation', icon: <CommunicationIcon /> },
        { title: 'Cloud & Infrastructure', icon: <CloudIcon /> },
        { title: 'Artificial Intelligence & Machine Learning', icon: <BrainIcon /> },
        { title: 'Industry Specialization', icon: <BuildingIcon /> },
    ];

    const certifications = [
        { title: 'ISO 27001:2022', desc: 'Information security management', img: '1' },
        { title: 'ISO 27001:2019', desc: 'Privacy information management', img: '2' },
        { title: 'European data protection standards', desc: '', img: '3' },
        { title: 'Trust services security compliance', desc: '', img: '4' },
    ];

    return (
        <>
            <SectionTitle title="Area of Expertise">
                <p className='text-(--color-text-dimmed) text-2xl mt-6'>
                    Comprehensive solutions across critical technology domains
                </p>
            </SectionTitle>

            <div className="py-24 px-4 md:px-12 w-full overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* 4. Expertise */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Mobile carousel */}
                        <div className="md:hidden mb-6">
                            <Slider {...sliderSettings} aria-label="Area of expertise carousel">
                                {expertise.map((benefit, i) => (
                                    <div key={i} className="px-4">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:bg-[#161616] transition-colors group flex flex-col items-center text-center"
                                        >
                                            <div className="border rounded-[14px] w-[72px] h-[72px] flex items-center justify-center border-gray-800 p-4 mb-4">{benefit.icon}</div>
                                            <h4 className="text-white font-bold mb-2 text-sm">{benefit.title}</h4>
                                        </motion.div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Desktop grid */}
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                            {expertise.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:bg-[#161616] transition-colors group flex flex-col items-center text-center"
                                >
                                    <div className="border rounded-[14px] w-[72px] h-[72px] flex items-center justify-center border-gray-800 p-4 mb-4">{benefit.icon}</div>
                                    <h4 className="text-white font-bold mb-2 text-sm">{benefit.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>

            </div>
            <SectionTitle title="Certifications & Compliance" />
            <div className="py-24 px-4 md:px-12 w-full overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* 4. Certifications */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Mobile carousel for certifications */}
                        <div className="md:hidden mb-6">
                            <Slider {...sliderSettings} aria-label="Certifications carousel">
                                {certifications.map((benefit, i) => (
                                    <div key={i} className="px-4">
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className=" p-6  transition-colors group flex flex-col items-center text-center"
                                        >
                                            <img className='w-[70%] mx-auto' src={`/assets/aboutus/certification${benefit.img}.png`} />
                                            <h4 className="text-(--color-text-dimmed) font-bold mb-2 mt-5 text-[20px]">{benefit.title}</h4>
                                            <p className="text-(--color-text-dimmed) font-bold mb-2 text-[20px]">{benefit.desc}</p>

                                        </motion.div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Desktop grid */}
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                            {certifications.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className=" p-6  transition-colors group flex flex-col items-center text-center"
                                >
                                    <img className='w-[70%] mx-auto' src={`/assets/aboutus/certification${benefit.img}.png`} />
                                    <h4 className="text-(--color-text-dimmed) font-bold mb-2 mt-5 text-[20px]">{benefit.title}</h4>
                                    <p className="text-(--color-text-dimmed) font-bold mb-2 text-[20px]">{benefit.desc}</p>

                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-[#111] p-6 rounded-xl border border-(--color-border-dimmed)  transition-colors group flex flex-col items-center text-center"
                    >

                        <h4 className="text-white font-bold mb-2 text-2xl">Customer Success Drives Everything</h4>
                        <p className="text-(--color-text-dimmed) font-normal text-lg">Our growth and innovation are always guided by our commitment to customer success. As we expand and evolve, we maintain our focus on delivering measurable value and building long-term partnerships that drive mutual success.</p>
                    </motion.div>
                </div>

            </div>
        </>
    );
};

export default AreaOfExpertise;
