import React from 'react';
import { Wrapper } from '../../../Shared/Wrapper';
import SectionHeader from '../common/SectionHeader';
import { LuWrench } from 'react-icons/lu';
import { BsChatDots } from 'react-icons/bs';
import { IoStatsChartOutline } from 'react-icons/io5';

const IntegrationEcosystem = ({ title, description, categories }) => {
  const iconMap = {
    itsm: <LuWrench />,
    communication: <BsChatDots />,
    monitoring: <IoStatsChartOutline />
  };

  return (
    <section className="py-20 border-t border-gray-800">
      <SectionHeader title={title} description={description} />
      
      <Wrapper>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0d0d1f] border border-blue-500/20 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl mb-8 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                {iconMap[cat.id]}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-8 pr-12">{cat.title}</h3>
              
              <ul className="space-y-4">
                {cat.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default IntegrationEcosystem;
