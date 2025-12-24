import ContentWrapper from "../../Shared/ContentWrapper";
import CustomButton from "../../Shared/CustomButton";
import TruestLeader from "./TruestLeaderSection";

export const HeroSection = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="w-full h-screen relative">
          <video
            autoPlay
            muted
            loop
            className="w-full h-max object-cover absolute top-0 left-0"
          >
            <source src="../../assets/banner.mp4" type="video/mp4" />
            <source src="../../assets/banner.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div data-aos="fade-right" className="absolute top-[40%] left-[21.5%] transform -translate-x-1/2 -translate-y-1/2 w-[35%]">
          <h1 className="text-[2.1rem] font-bold">
            Transforming IT Operations for <span className="gradient-text">Modern Enterprises</span>
          </h1>
          <p className="text-justify mt-5 text-white/80">
          Today’s digital landscape demands more than just working infrastructure—it demands an IT stack that adapts, optimises and evolves. Extravis transforms complex operations into streamlined, intelligent systems that drive tangible results. Our AI‑driven network observability, service intelligence and sustainability platforms unify your data‑centre, cloud and edge environments and empower you to innovate faster and operate smarter.
          </p>
          <div className="flex gap-4 mt-5">
            <CustomButton className="!rounded-full">
              Schedule a Demo
            </CustomButton>
            <CustomButton className="!rounded-full border border-white !bg-none hover:!bg-primary-gradient">
              Explore Us
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};
