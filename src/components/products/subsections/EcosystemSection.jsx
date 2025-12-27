import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EcosystemSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const benefits = [
    { id: 1, text: "Shared data intelligence across all platforms" },
    { id: 2, text: "Unified user experience and training" },
    { id: 3, text: "Consolidated reporting and analytics" },
    { id: 4, text: "Single vendor relationship and support" },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Container: Handles the 2-Column Split */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* =======================
            LEFT COLUMN: Image
           ======================= */}
        <div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          data-aos="fade-right"
        >
          <img 
            src="/assets/products/ecosystem_img.png" 
            alt="Extravis Ecosystem" 
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>

        {/* =======================
            RIGHT COLUMN: Content (Title, Text, Benefits)
           ======================= */}
        <div className="w-full lg:w-1/2 space-y-12">
          
          {/* Title & Description */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              The Extravis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Ecosystem</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our platforms operate independently or as part of a unified ecosystem—designed to work together seamlessly. Deploy one solution to address an immediate challenge, then scale to build a comprehensive IT automation platform that transforms your entire operation.
            </p>
          </div>

          {/* Integration Benefits Section */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-8 text-white">
              Integration Benefits
            </h3>

            {/* The Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className="group relative p-6 rounded-xl bg-[#08080A] border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Blue Dot (Top Right) */}
                  <div className="absolute top-4 right-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                  </div>

                  {/* Card Content */}
                  <div>
                    <span className="text-xs font-mono text-gray-500 block mb-3">
                      0{benefit.id}
                    </span>
                    <p className="font-medium text-gray-200 text-base leading-snug group-hover:text-white transition-colors">
                      {benefit.text}
                    </p>
                  </div>

                  {/* Subtle Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
