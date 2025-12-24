import ContentWrapper from "../../Shared/ContentWrapper"

const GetStartedSection = () => {
    return (
        <ContentWrapper>
            <div className="text-center mb-12">
                <h2 className="text-[2.2rem] font-[700] mb-4 inline-block">
                    Ready to Get Started?
                </h2>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                    Let's explore how Extravis can transform your business with AI-powered automation and digital solutions.
                </p>
                <div className="mt-4">
                    <button className="btn-primary-gradient px-8 py-2 rounded-full text-white font-semibold shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:scale-105 transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>        </ContentWrapper>
    )
}
export default GetStartedSection