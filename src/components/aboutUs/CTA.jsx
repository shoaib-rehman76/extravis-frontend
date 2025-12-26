import React from 'react';

const CTA = () => {
    return (
        <div className="w-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 py-24 px-4 relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your <br /> Operations?
                </h2>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                    Join hundreds of forward-thinking companies that have partnered with Extravis to accelerate their digital journey.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                        Book a Consultation
                    </button>
                    <button className="bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold py-4 px-10 rounded-full transition-all duration-300">
                        View Case Studies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTA;
