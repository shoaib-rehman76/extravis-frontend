import AutomationAndDigitalSolution from "../../components/home/AutomationAndDigitalSolution";
import BlogSection from "../../components/home/BlogSection";
import CustomersSection from "../../components/home/CustomersSection";
import FoundedSection from "../../components/home/FoundedSection";
import { HeroSection } from "../../components/home/HeroSection";
import HightLightSection from "../../components/home/HightLightSection";
import LeadingOrganization from "../../components/home/LeadingOrganization";
import OurFlagShipSection from "../../components/home/OurFlagShipSection";
import TruestLeader from "../../components/home/TruestLeaderSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="w-full mt-[18rem]">
        <TruestLeader />
      </div>
      <div className="my-10">
        <FoundedSection />
      </div>
      <div className="my-10">
        <HightLightSection />
      </div>
      <div className="my-10">
        <OurFlagShipSection />
      </div>
      <div className="my-10">
        <AutomationAndDigitalSolution />
      </div>
      <div className="my-10">
        <LeadingOrganization />
      </div>
      <div className="my-10">
        <CustomersSection />
      </div>
      <div className="my-10">
        <BlogSection />
      </div>
    </>
  );
};
