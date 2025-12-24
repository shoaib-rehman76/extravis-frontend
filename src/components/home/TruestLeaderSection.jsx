import Marquee from "react-fast-marquee";
import ContentWrapper from "../../Shared/ContentWrapper";

const TruestLeader = () => {
  return (
    <div className="my-5">
      <ContentWrapper>
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-center text-[1.9rem] font-[500]">
            Trusted by leading B2B Industry Leaders WorldWide
          </h2>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Marquee>
              <div className="flex items-center justify-center gap-20">

              <img src="../../assets/home/trusted-assets/1.svg" alt="trusted" className="w-[100px] h-[100px]" />
              <img src="../../assets/home/trusted-assets/2.svg" alt="trusted" className="w-[80px] h-[80px]" />
              <img src="../../assets/home/trusted-assets/3.svg" alt="trusted" className="w-[80px] h-[80px]" />
              <img src="../../assets/home/trusted-assets/4.svg" alt="trusted" className="w-[100px] h-[100px]" />
              <img src="../../assets/home/trusted-assets/5.svg" alt="trusted" className="w-[70px] h-[70px]" />
              <img src="../../assets/home/trusted-assets/6.svg" alt="trusted" className="w-[100px] h-[80px]" />
              <img src="../../assets/home/trusted-assets/7.svg" alt="trusted" className="w-[100px] h-[100px]" />
              </div>
            {/* <h3 className="text-[1.3rem] font-[500]">MParticle</h3> */}
            </Marquee>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default TruestLeader;
