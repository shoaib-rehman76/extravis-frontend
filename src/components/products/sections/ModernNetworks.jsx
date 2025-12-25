import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Wrapper } from '../../../Shared/Wrapper';
import { FaNetworkWired } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import { LuUsersRound } from 'react-icons/lu';
import { HiOutlineBolt } from 'react-icons/hi2';
import { IoMdCloudOutline } from 'react-icons/io';

const ModernNetworks = ({ title, subtitle, description, cards }) => {
  const iconMap = {
    FaNetworkWired: <FaNetworkWired />,
    FiAlertTriangle: <FiAlertTriangle />,
    LuUsersRound: <LuUsersRound />,
    HiOutlineBolt: <HiOutlineBolt />,
    IoMdCloudOutline: <IoMdCloudOutline />
  };

  return (
    <section className="py-20 border-t border-gray-800 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent">
      <div className="w-full">
        <SectionHeader title={title} description={description} />

        <Wrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <div 
                key={index} 
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group p-6 rounded-2xl bg-[#19192e5c] border border-[#6260b430] backdrop-blur-sm hover:border-[#6260b430] transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                    <span className="text-2xl text-red-700">
                      {typeof card.icon === 'string' ? iconMap[card.icon] : card.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default ModernNetworks;
