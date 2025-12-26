import React from 'react';
import ProductHero from '../../components/products/common/ProductHero';
import ModernNetworks from '../../components/products/sections/ModernNetworks';
import CommandCenter from '../../components/products/sections/CommandCenter';
import KeyFeatures from '../../components/products/sections/KeyFeatures';
import IndustrySpecs from '../../components/products/sections/IndustrySpecs';
import TechnicalSpecs from '../../components/products/sections/TechnicalSpecs';
import Pricing from '../../components/products/sections/Pricing';
import GettingStarted from '../../components/products/sections/GettingStarted';
import CTASection from '../../components/products/common/CTASection';
import Footer from '../../components/Footer';
import { monetxContent } from './monetxContent.jsx';

const MontexProductPage = () => {
  return (
    <div className="bg-[#090A0C] min-h-screen text-white">
      <ProductHero {...monetxContent.hero} onButtonClick={() => {}} />

      <ModernNetworks {...monetxContent.modernNetworks} />

      <CommandCenter {...monetxContent.commandCenter} />

      <KeyFeatures {...monetxContent.keyFeatures} />

      {/* <section className="py-20 border-t border-gray-800"> */}
        <IndustrySpecs {...monetxContent.industrySpecs} />
      {/* </section> */}

      <TechnicalSpecs {...monetxContent.technicalSpecs} />

      <Pricing {...monetxContent.pricing} />

      <GettingStarted {...monetxContent.gettingStarted} />

      <CTASection {...monetxContent.cta} />

      {/* <Footer /> */}
    </div>
  );
};

export default MontexProductPage;