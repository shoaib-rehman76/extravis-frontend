
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { StarIcon, ArrowUpIcon, TrustIcon } from '../../Shared/svg';

const cards = [
    { icon: <StarIcon />, title: 'Expert Consultation', desc: 'Our team brings decades of combined experience across multiple industries and technologies.' },
    { icon: <ArrowUpIcon />, title: 'Proven Success', desc: "With 98% customer retention and over 100 successful implementations we bring the experience and expertise to ensure your success." },
    { icon: <TrustIcon fill="var(--color-icon-purple)" />, title: 'Customized Solutions', desc: 'Every engagement is tailored — we design the right solution for your environment and objectives.' },
    { icon: <TrustIcon fill="var(--color-icon-purple)" />, title: 'Global Support', desc: 'Operating in 9 countries we provide local expertise and 24/7 support coverage.' }
];

const WhyContact = () => {
    return (
        <div className="bg-black py-24 px-4 md:px-12 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Side - Text Content */}
                <div className="lg:col-span-1 lg:sticky lg:top-24">
                    <div className="max-w-prose">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Why Contact  <br />
                            <span className="text-purple-400">Extravis?</span>
                        </h2>
                        <p className="text-purple-400 font-medium text-3xl mb-6">Four reasons to partner with us</p>
                        <p className="text-(--color-text-dimmed) text-lg leading-relaxed">
                            At Extravis, we combine expertise and innovation to deliver tailored IT automation solutions. With a 98% customer retention rate and 100+ global implementations, we empower teams through knowledge, collaboration, and lasting partnerships that drive continuous improvement.
                        </p>
                    </div>
                </div>

                {/* Right Side - Stacked Items */}
                <div className="lg:col-span-1 flex flex-col gap-6">
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
                            {cards.map((item, idx) => (
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
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-24 mt-16 z-2">
                        {cards.map((item, idx) => (
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
                </div>
            </div>
        </div>
    );
};

export default WhyContact;