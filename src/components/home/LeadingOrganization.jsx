import ContentWrapper from "../../Shared/ContentWrapper";

const LeadingOrganization = () => {
  return (
    <ContentWrapper>
      <div className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-[2.2rem] font-[700] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4 inline-block">
            Why Leading Organizations Choose Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three core principles that drive our approach to intelligent IT solutions.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Card 1: Simplified Yet Powerful (Top Left) */}
          <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0E] h-[300px] md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=50&w=1472&h=600&auto=format&fit=crop"
              alt="Cloud Technology"
              className="w-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-bold text-white mb-2">Simplified Yet Powerful:</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our platform simplifies complex technical workflows into an intuitive interface.
              </p>
            </div>
          </div>

          {/* Right Column Container */}
          <div className="flex gap-6 h-full">
            {/* Card 2: Efficiently Intelligent (Top Right) */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0E] flex-1 min-h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=60&w=1600&auto=format&fit=crop"
                alt="AI Intelligence"
                className="w-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">Efficiently Intelligent:</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Built on advanced AI algorithms that learn and adapt to your unique needs.
                </p>
              </div>
            </div>

            {/* Card 3: Cost-Effective Innovation (Bottom Right) */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0E] flex-1 min-h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1400&auto=format&fit=crop"
                alt="Innovation"
                className="w-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">Cost-Effective Innovation:</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Delivering state-of-the-art tech features without the premium price tag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
export default LeadingOrganization