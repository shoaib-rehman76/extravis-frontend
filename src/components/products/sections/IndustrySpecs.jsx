import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ContentWrapper from '../../../Shared/ContentWrapper';
import { Wrapper } from '../../../Shared/Wrapper';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { FaFile } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { TbAlignBoxCenterStretch } from 'react-icons/tb';

const IndustrySpecs = ({ title, highlight, tabs }) => {
  const [activeTab, setActiveTab ] = useState(tabs[0].id);

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-20 border-t border-gray-800">
      <SectionHeader 
        title={title} 
        highlight={highlight}
        description={activeContent.description} // Using active content description as fallback or keeping standard
      />

      <Wrapper>
        <div 
          data-aos="fade-down"
          className="max-w-7xl flex flex-wrap justify-between mb-12 gap-2 mx-auto mt-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-1 items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600/20 border border-purple-500/50 text-purple-500'
                  : 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="max-w-7xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{activeContent.icon}</span>
              <h3 className="text-2xl font-bold text-white">{activeContent.title}</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {activeContent.description}
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {activeContent.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default IndustrySpecs;
