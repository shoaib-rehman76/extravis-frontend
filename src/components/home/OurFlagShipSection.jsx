import { useMemo, useState } from "react";
import CustomButton from "../../Shared/CustomButton";
import { Wrapper } from "../../Shared/Wrapper";
import { ourFlagShipProducts } from "../../utils/data";

const OurFlagShipSection = () => {
  const [activeProductId, setActiveProductId] = useState(
    ourFlagShipProducts[0].id
  );
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const activeProduct = useMemo(
    () => ourFlagShipProducts.find((item) => item.id === activeProductId),
    [activeProductId]
  );

  const activeFeature = activeProduct.features[activeFeatureIndex];

  const handleChangeProduct = (productId) => {
    setActiveProductId(productId);
    setActiveFeatureIndex(0);
  };

  return (
    <Wrapper>
      <div
        className="flex items-center justify-center flex-col"
        data-aos="fade-up"
      >
        <h2 className="text-[2.2rem] font-[700] gradient-text text-center">
          Our Flagship Products
        </h2>
        <p className="text-[1rem] font-[400] text-center mt-2">
          Comprehensive Solution for modern enterprises
        </p>
        <div className="flex flex-wrap items-center justify-end gap-4 mt-10 flagship-tabs">
          {ourFlagShipProducts.map((product) => {
            const isActive = activeProductId === product.id;
            return (
              <CustomButton
                key={product.id}
                type="button"
                onClick={() => handleChangeProduct(product.id)}
                className={`!rounded-full w-[200px] py-3 flagship-tab ${
                  isActive ? "flagship-tab--active" : ""
                }`}
              >
                {product.title}
              </CustomButton>
            );
          })}
        </div>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-10 w-full">
        <div className="flex flex-col gap-4 w-[40%] " data-aos="fade-right">
          {activeProduct.features.map((feature, index) => {
            const isActive = index === activeFeatureIndex;
            return (
              <CustomButton
                key={feature.title}
                type="button"
                onClick={() => setActiveFeatureIndex(index)}
                className={`feature-tab py-5 ${
                  isActive ? "feature-tab--active" : ""
                }`}
              >
                {feature.title}
              </CustomButton>
            );
          })}
        </div>

        <div className="flex items-center justify-center flagship-card rounded-3xl shadow-xl min-w-[70%] max-w-[70%]">
          <div className="flex-1 p-8 flex flex-col gap-4 " data-aos="zoom-in">
            <div className="uppercase text-xs tracking-[0.4em] text-white/70">
              {activeProduct.title}
            </div>
            <h3 className="text-[1.7rem] font-semibold gradient-text ">
              {activeFeature.title}
            </h3>
            <p className="text-white/80 text-[1rem] leading-relax ed ">
              {activeFeature.description}
            </p>
            <div className="mt-6">
              <CustomButton className="!rounded-full px-6 py-3 text-sm uppercase tracking-wide">
                {activeProduct.button}
              </CustomButton>
            </div>
          </div>
          <div
            //   className="w-full lg:w-[32%] flagship-image rounded-3xl overflow-hidden flex items-center justify-center"
            data-aos="flip-left"
          >
            <img
              key={activeProduct.id}
              src={activeProduct.image}
              alt={activeProduct.title}
              className="flagship-media-img w-[100%] h-[400px] object-cover rounded-tr-3xl rounded-br-3xl"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurFlagShipSection;
