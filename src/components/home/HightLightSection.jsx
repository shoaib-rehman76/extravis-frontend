import { useState, useRef, useEffect } from "react";
import { MdOutlinePeople } from "react-icons/md";
import ContentWrapper from "../../Shared/ContentWrapper";
import CountUp from "react-countup";
import { GoPeople } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { BsBox } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";

const HightLightSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ContentWrapper>
      <div
        ref={sectionRef}
        className="flex items-center justify-between flex-col gap-4"
      >
        <h2 className="text-center text-[1.9rem] font-[500] mb-6">
          Extravis Highlights
        </h2>
        <div className="w-full">
          <div className="flex items-center justify-between gap-5 w-[80%] mx-auto">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center h-[20px] mb-4 gap-1 !p-0">
                <GoPeople className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-[2.7rem] font-[600]">
                    {isVisible && <CountUp end={20} duration={2.5} />}+
                  </h3>
                </div>
              </div>
              <small className="text-[1rem] font-[400] m-0 p-0">
                Enterprise Customers
              </small>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center h-[20px] mb-3 gap-1 !p-0">
                <GiProgression className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-[2.8rem] font-[600]">
                    {isVisible && <CountUp end={30} duration={2.5} />}+
                  </h3>
                </div>{" "}
              </div>
              <small className="text-[1rem] font-[400] m-0 p-0">
                Flagship Products
              </small>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center h-[20px] mb-3 gap-1 !p-0">
                <BsBox className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-[2.8rem] font-[600]">
                    {isVisible && <CountUp end={10} duration={2.5} />}
                  </h3>
                </div>{" "}
              </div>
              <small className="text-[1rem] font-[400] m-0 p-0">
                Client Retention
              </small>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center h-[20px] mb-3 gap-1 !p-0">
                <FaRegCircleCheck className="w-6 h-6 mt-1 " />
                <div>
                  <h3 className="text-[2.8rem] font-[600]">
                    {isVisible && <CountUp end={98} duration={2.5} />}%
                  </h3>
                </div>{" "}
              </div>
              <small className="text-[1rem] font-[400] m-0 p-0">
                Strategic Partners
              </small>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default HightLightSection;
