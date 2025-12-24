import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 px-4 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">

            {/* Ambient Background Glow */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto"
            >
                <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-wide">
                    Future-Ready IT Services
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Transforming Visions <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                        Into Digital Reality
                    </span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth for your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1">
                        Explore Our Services
                    </button>
                    <button className="bg-transparent border border-gray-700 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                        Contact Sales
                    </button>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path></svg>
            </motion.div>
        </div>
    );
};

export default Hero;
