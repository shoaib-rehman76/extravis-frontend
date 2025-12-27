import React from 'react';
import Hero from '../../components/services/hero';
import ServicePhilosophy from '../../components/services/ServicePhilosophy';
import ServiceDeliveryModels from '../../components/services/ServiceDeliveryModels';
import CloudSecurity from '../../components/services/CloudSecurity';
import NetworkAutomation from '../../components/services/NetworkAutomation';
import ServiceOfferings from '../../components/services/ServiceOfferings';
import AISolutions from '../../components/services/AISolutions';
import WhyChooseUs from '../../components/services/WhyChooseUs';
import CTA from '../../components/services/CTA';

export const Services = () => {
    return (
        <div className="min-h-screen text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/assets/services/service-bg.jpg')" }}>
            <div className="bg-black/80 w-full min-h-screen"> {/* Overlay to ensure text readability */}
                <Hero />
                <ServicePhilosophy />
                
                <CloudSecurity />
                <NetworkAutomation />
                <ServiceOfferings />
                <AISolutions />
                <WhyChooseUs />
                <ServiceDeliveryModels />
                <CTA />
            </div>
        </div>
    );
};


