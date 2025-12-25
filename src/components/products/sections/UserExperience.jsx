import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import { FiUser, FiHeadphones, FiSettings } from 'react-icons/fi';

const UserExperience = ({ title, subtitle, columns }) => {
  const iconMap = {
    user: <FiUser />,
    headphones: <FiHeadphones />,
    settings: <FiSettings />
  };

  return (
    <section className="py-20 border-t border-gray-800 bg-[#090A0C]">
      <SectionHeader title={title} highlight={subtitle} />

      <Wrapper>
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {columns.map((col, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col h-full p-6 rounded-3xl bg-[#0d0d1f] border border-purple-500/10"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-lg bg-transparent border border-gray-700 flex items-center justify-center text-blue-400 text-xl">
                  {iconMap[col.icon]}
                </div>
                <h3 className="text-xl font-bold text-white">{col.title}</h3>
              </div>

              {/* Cards Stack */}
              <div className="space-y-4 flex-grow">
                {col.items.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#13132b] border border-gray-800 hover:border-gray-700 transition-colors">
                    <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default UserExperience;
