import ContentWrapper from "../../Shared/ContentWrapper";
import CustomButton from "../../Shared/CustomButton";
import { Wrapper } from "../../Shared/Wrapper";

const FoundedSection = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-2">
        <div data-aos='fade-up' data-aos-duration="1500" className="">
          <img
            src="../../assets/ai-image.png"
            alt="founded"
            className="w-[80%] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div data-aos='fade-down' data-aos-duration="1500" className="flex items-start justify-center flex-col gap-4">
          <h2 className="text-[1.5rem] font-[500]">
          Founded in 2021 on a simple mission: to eliminate IT complexity. Today, we deliver transformative results through intelligent 
          automation to over 20 enterprises globally, backed by our 98% customer retention rate.
          </h2>
          <CustomButton className="!rounded-full">
            Explore Extravis
          </CustomButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default FoundedSection;
