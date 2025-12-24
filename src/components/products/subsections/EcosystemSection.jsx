import React from "react";

const EcosystemSection = () => {
  const benefits = [
    { id: 1, text: "Shared data intelligence across all platforms" },
    { id: 2, text: "Unified user experience and training" },
    { id: 3, text: "Consolidated reporting and analytics" },
    { id: 4, text: "Single vendor relationship and support" },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            The Extravis <span className="text-purple-500">Ecosystem</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our products aren't just individual tools—they're part of an
            integrated ecosystem designed to work together seamlessly. Deploy
            one solution to solve an immediate challenge, then expand to create
            a comprehensive IT automation platform that transforms your entire
            operation.
          </p>
        </div>

        {/* Right Column: Benefits Grid */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-xl font-semibold mb-6 text-gray-200">
            Integration Benefits
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="group relative p-6 rounded-2xl bg-[#0f0f11] border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col justify-between h-full min-h-[100px]">
                  <span className="text-xs font-bold text-purple-500 mb-2">
                    0{benefit.id}
                  </span>
                  <p className="font-medium text-gray-300 group-hover:text-white transition-colors">
                    {benefit.text}
                  </p>

                  {/* Decorative dot */}
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
