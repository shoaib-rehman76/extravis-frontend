import React from 'react';
import ProductHero from '../../components/products/common/ProductHero';
import ModernNetworks from '../../components/products/sections/ModernNetworks';
import CommandCenter from '../../components/products/sections/CommandCenter';
import KeyFeatures from '../../components/products/sections/KeyFeatures';
import IndustrySpecs from '../../components/products/sections/IndustrySpecs';
import TechnicalSpecs from '../../components/products/sections/TechnicalSpecs';
import DeploymentOptions from '../../components/products/sections/DeploymentOptions';
import SecurityCompliance from '../../components/products/sections/SecurityCompliance';
import IntegrationEcosystem from '../../components/products/sections/IntegrationEcosystem';
import ImplementationTraining from '../../components/products/sections/ImplementationTraining';
import CTASection from '../../components/products/common/CTASection';
import Footer from '../../components/Footer';
import { supportxContent } from './supportxContent.jsx';
import Pricing from '../../components/products/sections/Pricing.jsx';
import ROIImpact from '../../components/products/sections/ROIImpact';
import UserExperience from '../../components/products/sections/UserExperience';
import GettingStarted from '../../components/products/sections/GettingStarted';

const SupportxProductPage = () => {
  return (
    <div className="bg-[#090A0C] min-h-screen text-white">
      <ProductHero {...supportxContent.hero} onButtonClick={() => {}} />

      <ModernNetworks {...supportxContent.modernNetworks} />

      <CommandCenter {...supportxContent.commandCenter} />

      <KeyFeatures {...supportxContent.keyFeatures} />

      <IndustrySpecs {...supportxContent.industrySpecs} />

      {/* <TechnicalSpecs {...supportxContent.technicalSpecs} /> */}
       <UserExperience {...supportxContent.userExperience} />

      <IntegrationEcosystem {...supportxContent.integrationEcosystem} />

      <DeploymentOptions {...supportxContent.deploymentOptions} />

       <SecurityCompliance {...supportxContent.securityCompliance} />

        <ImplementationTraining {...supportxContent.implementationTraining} />

      <ROIImpact {...supportxContent.roiImpact} />

     
      {/* <Pricing {...supportxContent.pricing} /> */}

      <GettingStarted {...supportxContent.gettingStarted} />

      <CTASection {...supportxContent.cta} />

      {/* <Footer /> */}
    </div>
  );
};

export default SupportxProductPage;
