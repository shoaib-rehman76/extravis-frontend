import Hero from "../../components/aboutUs/hero";
import GlobalImpact from "../../components/aboutUs/GlobalImpact";
import VisionMission from "../../components/aboutUs/VisionMission";
import WhatDrivesUs from "../../components/aboutUs/WhatDrivesUs";
import MakesUsDifferent from "../../components/aboutUs/MakesUsDifferent";
import GlobalPresence from "../../components/aboutUs/GlobalPresence";
import LeadersWorldwide from "../../components/aboutUs/LeadersWorldwide";
import CustomersSection from "../../components/home/CustomersSection";
import AreaOfExpertise from "../../components/aboutUs/AreaOfExpertise";
import FutureInnovation from "../../components/aboutUs/FutureInnovation";
import ContactLeadership from "../../components/aboutUs/ContactLeadership";

const AboutUs = () => {
    return (
        <div className="min-h-screen text-white  bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/assets/services/service-bg.jpg')" }}>
            <div className="bg-black/80 w-full min-h-screen"> {/* Overlay to ensure text readability */}
                <Hero />
                <GlobalImpact />
                <VisionMission />
                <WhatDrivesUs />
                <MakesUsDifferent />
                <GlobalPresence />
                <LeadersWorldwide />
                <CustomersSection />
                <AreaOfExpertise />
                <FutureInnovation />
                <ContactLeadership />
                {/* <CloudSecurity />
                <NetworkAutomation />
                <ServiceOfferings />
                <AISolutions />
                <WhyChooseUs />
                <CTA /> */}
            </div>
        </div>
    );
};

export default AboutUs;

