import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="bg-black py-24 px-4 md:px-12 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Why Choose <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Us?</span>
                </h2>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Content - List */}
                <div className="space-y-8">
                    <div className="flex gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900/20 text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-900/50 group-hover:bg-blue-600 group-hover:text-white transition-all">01</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Future-Proof Solutions</h3>
                            <p className="text-gray-400 leading-relaxed">We build with the future in mind, ensuring your infrastructure can scale and adapt to new technologies.</p>
                        </div>
                    </div>

                    <div className="flex gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-900/20 text-purple-400 flex items-center justify-center font-bold text-xl border border-purple-900/50 group-hover:bg-purple-600 group-hover:text-white transition-all">02</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">End-to-End Expertise</h3>
                            <p className="text-gray-400 leading-relaxed">From initial consultation to final deployment and maintenance, we handle every step of the process.</p>
                        </div>
                    </div>

                    <div className="flex gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-900/20 text-pink-400 flex items-center justify-center font-bold text-xl border border-pink-900/50 group-hover:bg-pink-600 group-hover:text-white transition-all">03</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Security First</h3>
                            <p className="text-gray-400 leading-relaxed">We integrate security best practices into every solution we design and implement.</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - Stats/Visual */}
                <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-blue-600/10 blur-[80px] rounded-full"></div>

                    <div className="grid grid-cols-2 gap-6 relative z-10">
                        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Client Retention</div>
                        </div>
                        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Enterprise Projects</div>
                        </div>
                        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center col-span-2">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Support Availability</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
