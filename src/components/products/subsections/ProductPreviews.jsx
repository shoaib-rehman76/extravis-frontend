import React, { useState } from "react";
import { ourFlagShipProducts } from "../../../utils/data"; // Ensure path is correct!
import CustomButton from "../../../Shared/CustomButton"; // Your shared button

const ProductPreviews = () => {
  const [activeTab, setActiveTab] = useState(ourFlagShipProducts[0].id);

  // Find the currently active product data
  const activeProduct = ourFlagShipProducts.find((p) => p.id === activeTab);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-12 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Product Previews <span className="text-purple-500">Dashboards</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {ourFlagShipProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(product.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeTab === product.id
                  ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/40"
                  : "bg-transparent border-gray-600 text-gray-400 hover:border-purple-400 hover:text-white"
              }`}
            >
              {product.title}
            </button>
          ))}
        </div>

        {/* Content Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0a0a0a] rounded-3xl p-8 border border-gray-800">
          {/* Left: Dashboard Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
              {/* Note: Ensure the image path in your data.js is importable or an absolute path */}
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right: Content & Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              {/* Product Logo/Icon placeholder */}
              <div className="w-10 h-10 bg-purple-900 rounded-lg flex items-center justify-center text-purple-300 font-bold">
                {activeProduct.title.charAt(0)}
              </div>
              <h3 className="text-3xl font-bold">{activeProduct.title}</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {activeProduct.description}
            </p>

            {/* Feature List */}
            <div className="space-y-3 mt-6">
              {activeProduct.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  <h4 className="text-purple-400 font-semibold mb-1">
                    ⚡ {feature.title}
                  </h4>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <CustomButton className="px-8 py-3 w-full md:w-auto">
                {activeProduct.button}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreviews;
