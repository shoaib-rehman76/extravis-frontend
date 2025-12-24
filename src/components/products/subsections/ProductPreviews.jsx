import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContentWrapper from "../../../Shared/ContentWrapper";
import CustomButton from "../../../Shared/CustomButton";
import { ourFlagShipProducts } from "../../../utils/data";

const ProductPreviews = () => {
  // Initialize Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Filter out "Greenx" from the products list
  const visibleProducts = ourFlagShipProducts.filter(
    (product) => product.title !== "Greenx"
  );

  // State for active tab - default to the first visible product
  const [activeTab, setActiveTab] = useState(visibleProducts[0].id);

  // Find active product data
  const activeProduct = visibleProducts.find((p) => p.id === activeTab);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none mix-blend-lighten"
        style={{ backgroundImage: "url('/assets/products/content-bg.png')" }}
      />

      {/* Gradient overlays for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none" />

      <ContentWrapper className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-5xl font-bold">
            Product Previews &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Dashboards
            </span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
        >
          {visibleProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(product.id)}
              className={`px-8 py-3 rounded-full text-sm md:text-base font-medium border transition-all duration-300 ${
                activeTab === product.id
                  ? "bg-purple-600 border-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-purple-400 hover:text-white"
              }`}
            >
              {product.title}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div
          key={activeTab} // Key forces react to re-animate when tab changes
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0B0B0F]/80 backdrop-blur-md rounded-3xl p-8 border border-white/10"
          data-aos="zoom-in-up"
        >
          {/* Left: Dashboard Image */}
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            {/* Ensure the image path matches your public folder structure */}
            <img
              src={activeProduct.image}
              alt={activeProduct.title}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* Right: Content & Features */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {activeProduct.title.charAt(0)}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  {activeProduct.title}
                </h3>
              </div>
              <h4 className="text-purple-400 text-lg mb-3">
                {activeProduct.sub_title}
              </h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                {activeProduct.description}
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {activeProduct.features.slice(0, 4).map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors"
                >
                  <div className="mt-1 text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.577l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.577l7-10a1 1 0 011.12-.377z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">
                      {feature.title}
                    </h5>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <CustomButton className="px-10 py-4 text-lg w-full md:w-auto shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-shadow">
                {activeProduct.button}
              </CustomButton>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default ProductPreviews;
