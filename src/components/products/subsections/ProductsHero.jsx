import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomButton from "../../../Shared/CustomButton";

const ProductsHero = () => {
  // Initialize Animation Library
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed (1 second)
      once: false, // Animation happens every time you scroll to it
    });
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-black overflow-hidden pt-20 pb-10">
      {/* --- Background Image Layer --- */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: "url('/assets/products/Banner.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
      </div>

      {/* Background Effects (Glows & Grid) */}
      {/* --- UPDATED LINE BELOW: Made the gradient much lighter --- */}
      {/* Changed from 'from-purple-900/60 via-black/80 to-black' TO 'from-purple-900/30 via-black/40 to-black/90' */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-black/40 to-black/90" />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      {/* Network Lines Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] -translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] translate-x-1/2 animate-pulse" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Main Headline - Fades up immediately */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          data-aos="fade-up"
        >
         
          Extravis Solutions <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            MonetX & SupportX Platform Comparison
          </span>
        </h1>

        {/* Subtext - Fades up with 200ms delay */}
        <p
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Compare Extravis’s integrated platforms, network observability (MonetX) and service management (SupportX). Discover which solution fits your needs.
        </p>

        {/* CTA Button - Zooms in with 400ms delay */}
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <CustomButton className="px-10 py-4 text-lg shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-shadow duration-300">
            Get Started <span className="ml-2">→</span>
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
