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
import Hero from "../../Shared/HeroSection";

const AboutUs = () => {
    return (
        <div className="min-h-screen text-white  bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/assets/services/service-bg.jpg')" }}>
            <div className="bg-black/80 w-full min-h-screen"> {/* Overlay to ensure text readability */}
                <Hero title="Transforming IT Operations" subtitle={"From Vision to Global Impact"} desc="We don't just offer tools, we deliver transformation. In just four years, we've evolved from an innovative startup to a global leader in IT automation and observability, serving over 100 customers worldwide and maintaining a 98% customer retention rate—testament to our unwavering commitment to customer success." />
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
            </div>
        </div>
    );
};

export default AboutUs;

