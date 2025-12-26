import { motion } from 'framer-motion';

const VisionMission = () => {

    return (
        <div className="py-24 px-4 md:px-12 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0f0f0f]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors"
                    >
                        <h3 className="text-5xl font-bold text-white mb-4">Our Vision</h3>
                        <h3 className="text-5xl font-bold text-purple-400 mb-4">Global Leader in IT Automation</h3>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            To become the global leader in IT automation, delivering innovative, sustainable and customer‑centric solutions that drive digital transformation. We envision a world where intelligent systems predict and prevent problems before they occur, and where sustainability and efficiency go hand in hand.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-[#0f0f0f]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors"
                    >
                        <h3 className="text-5xl font-bold text-white mb-4">Our Mission</h3>
                        <h3 className="text-5xl font-bold text-purple-400 mb-4">Simplify Complex IT Operations</h3>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            To simplify complex IT operations through intelligent platforms, delivering measurable value through automation, performance optimisation and strategic insights. We focus on eliminating complexity while enhancing capabilities and outcomes.
                        </p>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default VisionMission;
