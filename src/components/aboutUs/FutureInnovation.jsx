import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BulbIcon, GlobeIcon, LeafIcon, BrainIcon, RocketIcon, EyeIcon, HandshakeIcon, BriefcaseIcon, ExpansionIcon, AIIcon, GrowthIcon, PeopleIcon } from '../../Shared/svg';
import SectionTitle from '../../Shared/SectionTitle';
import { Link } from 'react-router-dom';



const globalPresenceItems = [
    { icon: <RocketIcon />, title: "Autonomous Operations", timeline: "Next 12 months", desc: "Automated operations with human oversight" },
    { icon: <BrainIcon width={20} height={20} fill={"var(--color-primary-icon-blue)"} />, title: "Quantum Integration", timeline: "18-24 months", desc: "Quantum computing integration for complex optimization problems" },
    { icon: <LeafIcon />, title: "Sustainable Computing", timeline: "12-18 months", desc: "Zero‑emission IT operations through intelligent optimization" },
    { icon: <EyeIcon />, title: "Hybrid Reality", timeline: "24+ months", desc: "Integration of physical and digital infrastructure management" }
];
const growthItems = [
    { icon: <ExpansionIcon />, title: "Geographic Expansion", subtitle: "Asia-Pacific & Latin America", desc: "Continued expansion into new markets and regions" },
    { icon: <AIIcon />, title: "Product Innovation", subtitle: "AI/ML & Edge Computing", desc: "Continuous innovation driven by customer needs and emerging technologies" },
    { icon: <GrowthIcon />, title: "Partnership Growth", subtitle: "Technology & Channel Partners", desc: "Strategic partnerships to extend our reach and capabilities" },
    { icon: <PeopleIcon />, title: "Talent Investment", subtitle: "Engineering & Customer Success", desc: "Continued investment in attracting and developing top technology talent" }
];
const FutureInnovation = () => {
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
            <SectionTitle title="Future Innovation" subtitle="Technology Roadmap" >
                <p className='text-(--color-text-dimmed)'>Our technology roadmap explores autonomous operations, quantum integration, sustainable computing and hybrid reality. We plan for geographic expansion, product innovation, partnership growth and talent investment. Interested in contributing to our journey? <Link className='text-(--color-primary-blue)' to="/contact">Contact our leadership team</Link>  to discuss how we can transform your IT operations together.</p>
            </SectionTitle>
            <div className="bg-black  px-4 md:px-12 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto  relative   z-2  w-full overflow-hidden"
                >
                    {/* Mobile carousel for roadmap */}
                    <div className="md:hidden mb-8">
                        <Slider {...sliderSettings} aria-label="Future roadmap carousel">
                            {globalPresenceItems.map((item, idx) => (
                                <div key={idx} className="px-4">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 transition-all"
                                    >
                                        <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                        <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                                        {item.timeline && <p className="text-(--color-text-dimmed) text-sm mb-3">{item.timeline}</p>}
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Desktop grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-24 mt-20 z-2" >
                        {globalPresenceItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                            >
                                <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                                {item.timeline && <p className="text-(--color-text-dimmed) text-sm mb-3">{item.timeline}</p>}
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>

            <SectionTitle title="Strategic Direction" subtitle="Growth Strategy" >
                <p className='text-(--color-text-dimmed)'>Pioneering the next generation of IT automation through cutting-edge research and development initiatives.</p>
            </SectionTitle>
            <div className="bg-black  px-4 md:px-12 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto  relative   z-2  w-full overflow-hidden"
                >
                    {/* Mobile carousel for growth strategy */}
                    <div className="md:hidden mb-8">
                        <Slider {...sliderSettings} aria-label="Growth strategy carousel">
                            {growthItems.map((item, idx) => (
                                <div key={idx} className="px-4">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 transition-all"
                                    >
                                        <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                        <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                                        {item.subtitle && <p className="text-(--color-text-dimmed) text-sm mb-3">{item.subtitle}</p>}
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Desktop grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-24 mt-20 z-2" >
                        {growthItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                            >
                                <div className="border rounded-[14px] w-12 h-12 flex items-center justify-center border-gray-800 p-4 mb-4">{item.icon}</div>
                                <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                                {item.subtitle && <p className="text-(--color-text-dimmed) text-sm mb-3">{item.subtitle}</p>}
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </>
    );
};

export default FutureInnovation;
