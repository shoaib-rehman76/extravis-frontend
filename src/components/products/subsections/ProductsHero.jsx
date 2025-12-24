import React from "react";
import CustomButton from "../../../Shared/CustomButton";

const ProductsHero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Effects (Glows & Grid) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      {/* Network Lines Decoration (CSS Only representation) */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] translate-x-1/2" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          World-Class <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Automation, Observability,
          </span>
          <br />
          and IT Service Solutions
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Four powerful platforms designed to transform every aspect of your IT
          operations. Each solution works independently or as part of an
          integrated ecosystem that grows with your business.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <CustomButton className="px-10 py-4 text-lg shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-shadow duration-300">
            Get Started <span className="ml-2">→</span>
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
