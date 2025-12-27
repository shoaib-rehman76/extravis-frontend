import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContentWrapper from "../../../Shared/ContentWrapper";
import { FaCheckCircle, FaNetworkWired, FaHeadset } from "react-icons/fa";

const ComparisonMatrix = () => {
  // Initialize Animation Library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Data specifically for this table
  const products = [
    {
      name: "MonetX",
      icon: <FaNetworkWired className="text-blue-400" />,
      color: "text-blue-400",
    },
    {
      name: "SupportX",
      icon: <FaHeadset className="text-purple-400" />,
      color: "text-purple-400",
    },
   
  ];

  // Updated row values to match MonetX, SupportX, and GreenX
  const rows = [
    {
      label: "Primary Focus",
      values: ["Network Observability", "Service Management", ],
    },
    {
      label: "Key Users",
      values: ["Network Engineers", "Support Agents", ],
    },
    {
      label: "Main Benefits",
      values: ["Real-time Monitoring", "Faster Resolution", ],
    },
    {
      label: "ROI Timeline",
      values: ["3-6 months", "1-3 months", ],
    },
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('/assets/products/content-bg.png')" }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />

      {/* Decorative Glow behind title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/40 blur-[100px] rounded-full pointer-events-none" />

      {/* Using ContentWrapper for alignment */}
      <ContentWrapper className="relative z-10">
        {/* Header Section with Animation */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Product Comparison <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              Matrix
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Find the right solution for your business needs
          </p>
        </div>

        {/* Matrix Table Container with Animation */}
        <div
          className="overflow-x-auto bg-[#0B0B0F]/90 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-2xl shadow-purple-900/20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="p-4 text-gray-400 font-medium text-lg w-1/3">
                  Feature
                </th>
                {products.map((p, idx) => (
                  <th key={idx} className="p-4 text-center w-1/3">
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-3xl p-4 bg-gray-900/50 rounded-2xl border border-gray-700/50 shadow-lg">
                        {p.icon}
                      </div>
                      <span className={`font-bold text-lg ${p.color}`}>
                        {p.name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="border-t border-gray-800 hover:bg-white/5 transition-colors duration-300"
                >
                  <td className="p-6 font-medium text-gray-300 flex items-center gap-3">
                    <FaCheckCircle className="text-gray-600 text-xl" />
                    {row.label}
                  </td>
                  {row.values.map((val, colIdx) => (
                    <td
                      key={colIdx}
                      className="p-6 text-center text-gray-400 font-light"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default ComparisonMatrix;
