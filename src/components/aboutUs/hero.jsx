import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
                style={{ backgroundImage: "url('/assets/services/bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center mt-20">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Transforming IT Operations <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                        From Vision to Global Impact
                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-light">
                    We don't just offer tools, we deliver transformation. In just four years, we've evolved from an innovative startup to a global leader in IT automation and observability, serving over 100 customers worldwide and maintaining a 98% customer retention rate—testament to our unwavering commitment to customer success.
                </p>

                <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-lg rounded-full hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] focus:outline-none ring-offset-2 focus:ring-2 ring-blue-400">
                    <span className="mr-2">Get Started</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
