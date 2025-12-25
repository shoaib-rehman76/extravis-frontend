import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import { FaRegChartBar } from 'react-icons/fa';
import { CiFileOn } from 'react-icons/ci';
import { TbHierarchy } from 'react-icons/tb';
import { PiBrainThin } from 'react-icons/pi';
import { RxTarget } from 'react-icons/rx';

const KeyFeatures = ({ title, row1, row2 }) => {
  const iconMap = {
    FaRegChartBar: <FaRegChartBar />,
    CiFileOn: <CiFileOn />,
    TbHierarchy: <TbHierarchy />,
    PiBrainThin: <PiBrainThin />,
    RxTarget: <RxTarget />
  };

  return (
    <section className="py-20 border-t border-gray-800">
      <SectionHeader title={title} />

      <Wrapper>
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Row 1: Custom Asymmetric Layout */}
          <div className="flex flex-wrap gap-6">
            {/* Card 1 */}
            <div className="flex-[1] min-w-[280px] lg:w-[calc(25%-18px)] group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-cyan-400">
                  {typeof row1.card1.icon === 'string' ? iconMap[row1.card1.icon] : row1.card1.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{row1.card1.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{row1.card1.description}</p>
              <ul className="space-y-2">
                {row1.card1.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Image */}
            <div className="flex-[2] min-w-[280px] lg:w-[calc(50%-12px)] group rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm overflow-hidden hover:border-purple-500/40 transition-all">
              <img src={row1.image} alt="Feature Preview" className="w-full h-full object-cover" />
            </div>

            {/* Card 2 */}
            <div className="flex-[1] min-w-[280px] lg:w-[calc(25%-18px)] group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-cyan-400">
                  {typeof row1.card2.icon === 'string' ? iconMap[row1.card2.icon] : row1.card2.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{row1.card2.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{row1.card2.description}</p>
              <ul className="space-y-2">
                {row1.card2.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <span className="text-purple-400 mr-2">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {row2.map((card, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-[#0a0a1a] border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl text-cyan-400">
                    {typeof card.icon === 'string' ? iconMap[card.icon] : card.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{card.description}</p>
                <ul className="space-y-2">
                  {card.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <span className="text-purple-400 mr-2">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default KeyFeatures;
