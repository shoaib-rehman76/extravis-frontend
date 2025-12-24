import ContentWrapper from "../../Shared/ContentWrapper";
import { Wrapper } from "../../Shared/Wrapper";
import { automationAndDigitalSolution } from "../../utils/data";

const AutomationAndDigitalSolution = () => {
  return (
    <>
      <ContentWrapper>
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/2">
            <h1 className="text-[2.2rem] font-[700]">
              Automation and <br />{" "}
              <span className="text-white">Digital Solution</span>
            </h1>
          </div>
          <div className="w-1/2">
            <p>
              We are a comprehensive DIGITAL automation company with 4+ years of
              experience in the automation of network Infrastructure and built
              custom automation software.
            </p>
          </div>
          <div></div>
        </div>
        <div></div>
      </ContentWrapper>
      <Wrapper>
        <div className="flex items-center justify-between gap-4 mt-10">
          {automationAndDigitalSolution.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={index * 150}
              key={item.id}
              className="cursor-pointer w-1/4 h-[430px] bg-purple-300 p-3 rounded hover:flagship-card shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt="automation-and-digital-solution"
                className="rounded"
              />
              <h1 className="text-[1rem] font-[700] gradient-text my-2">{item.title}</h1>
              <p className="text-black text-[.9rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default AutomationAndDigitalSolution;
