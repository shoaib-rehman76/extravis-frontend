import WhyContact from "../../components/contact/WhyContact";
import ContactInfoGrid from "../../components/contact/ContactInfoGrid";
import RequestCall from "../../components/contact/RequestCall";
import ContactForm from "../../components/contact/ContactForm";
import Hero from "../../Shared/HeroSection";
import LegalSection from "../../components/contact/LegalSection";

const ContactUs = () => {
    return (
        <div className="min-h-screen text-white  bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/assets/services/service-bg.jpg')" }}>
            <div className="bg-black/80 w-full min-h-screen"> {/* Overlay to ensure text readability */}
                <Hero title="Contact Us For" subtitle={" Strategic Partnership and"} subText={'Customized Solutions'} desc="Ready to transform your IT operations? Our experts are here to help you discover the right solution for your specific needs. With global presence and local expertise, we're positioned to support your success wherever you operate." />

                {/* Core contact page sections */}
                <main className="pt-12">
                    <WhyContact />
                    <ContactInfoGrid />

                    <div className="bg-black px-4 md:px-12 py-12">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="md:sticky md:top-24 md:self-start">
                                <RequestCall />
                            </div>
                            <ContactForm />

                        </div>
                        <div className="max-w-7xl mx-auto mt-10">
                            <LegalSection />

                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default ContactUs;

