import React from "react";
import {
  FaCheckCircle,
  FaNetworkWired,
  FaHeadset,
  FaLeaf,
  FaProjectDiagram,
} from "react-icons/fa";

const ComparisonMatrix = () => {
  // Data specifically for this table
  const products = [
    {
      name: "MonetX",
      icon: <FaNetworkWired className="text-blue-400" />,
      color: "text-blue-400",
    },
    {
      name: "SupportX",
      icon: <FaHeadset className="text-green-400" />,
      color: "text-green-400",
    },
    {
      name: "GreenX",
      icon: <FaLeaf className="text-emerald-500" />,
      color: "text-emerald-500",
    },
    {
      name: "MapX",
      icon: <FaProjectDiagram className="text-purple-400" />,
      color: "text-purple-400",
    },
  ];

  const rows = [
    {
      label: "Primary Focus",
      values: [
        "Network Observability",
        "Service Management",
        "Sustainability",
        "Project Management",
      ],
    },
    {
      label: "Key Users",
      values: [
        "Network Engineers",
        "Support Agents",
        "Facility Managers",
        "Project Managers",
      ],
    },
    {
      label: "Main Benefits",
      values: [
        "Real-time Monitoring",
        "Faster Resolution",
        "Cost & Emission Reduction",
        "Project Efficiency",
      ],
    },
    {
      label: "ROI Timeline",
      values: ["3-6 months", "1-3 months", "6-12 months", "2-4 months"],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Product Comparison Matrix
          </h2>
          <p className="text-gray-400 mt-2">
            Compare our four powerful platforms at a glance
          </p>
        </div>

        {/* Matrix Table Container */}
        <div className="overflow-x-auto bg-[#111] rounded-2xl p-6 border border-gray-800 shadow-2xl shadow-purple-900/20">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-gray-400 font-medium">Feature</th>
                {products.map((p, idx) => (
                  <th key={idx} className="p-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-2xl p-3 bg-gray-900 rounded-lg border border-gray-700">
                        {p.icon}
                      </div>
                      <span className={`font-bold ${p.color}`}>{p.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="border-t border-gray-800 hover:bg-white/5 transition-colors"
                >
                  <td className="p-6 font-semibold text-gray-300 flex items-center gap-2">
                    {/* Icon for the row label (optional) */}
                    <FaCheckCircle className="text-gray-600" />
                    {row.label}
                  </td>
                  {row.values.map((val, colIdx) => (
                    <td key={colIdx} className="p-6 text-center text-gray-400">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;
