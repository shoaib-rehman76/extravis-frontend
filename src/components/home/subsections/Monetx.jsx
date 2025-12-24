import CustomButton from "../../../Shared/CustomButton";

const Monetx = () => {
  return (
    <div className="flex items-center justify-center gap-5 ">
     <div className="flex flex-col gap-2 mt-5">
        <CustomButton>Real-Time Metrics & Monitoring</CustomButton>
        <CustomButton>Unified Infrastructure Insights</CustomButton>
        <CustomButton>AI-Driven Reporting & Analytics</CustomButton>
        <CustomButton>Seamless Integration Plateform</CustomButton>
        <CustomButton>Advance customization Engine</CustomButton>
     </div>
     <div className="flex items-center justify-center gap-5">
        <div >
            <h3>Monetx</h3>
            <p>MonetX is a comprehensive solution for modern enterprises that provides real-time metrics and monitoring, unified infrastructure insights, AI-driven reporting and analytics, seamless integration platform, and advanced customization engine.</p>
        </div>
        <div>
            <img src="../../../assets/products/monetx.svg" alt="monetx" />
        </div>
     </div>
    </div>
  );
};

export default Monetx;
