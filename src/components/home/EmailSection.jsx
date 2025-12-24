import ContentWrapper from "../../Shared/ContentWrapper";
import { FaStar } from "react-icons/fa";

const EmailSection = () => {
    return (
        <ContentWrapper>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0A0A0E] via-purple-900/20 to-[#0A0A0E] p-8 md:p-12">
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Start with your infrastructure
                        </h2>
                        <p className="text-gray-300 text-lg mb-6">
                            to build faster and today
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <button className="btn-primary-gradient px-6 py-3 rounded-full text-white font-semibold shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:scale-105 transition-all duration-300">
                                Start for free
                            </button>
                            <button className="px-6 py-3 rounded-full text-white font-semibold border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                                Contact us
                            </button>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        {/* Sparkle decoration */}
                        <div className="absolute -top-4 -right-4 text-yellow-400 text-2xl animate-pulse">
                            <FaStar />
                        </div>

                        {/* Envelope Icon */}
                        <div className="relative w-48 h-48 md:w-56 md:h-56">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl shadow-2xl shadow-purple-900/50 transform rotate-6 hover:rotate-12 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center">
                                {/* Envelope SVG */}
                                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    )
}
export default EmailSection