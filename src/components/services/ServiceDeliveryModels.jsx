import { BsBoundingBox } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { RxTarget } from "react-icons/rx";

const ServiceDeliveryModels = () => {
    const serviceCards = [
        {
            id: 1,
            icon: <BsBoundingBox />,
            title: "Professional Services",
            description: "Engage our experts for project-based implementations, migrations, and custom solutions.",
            features: [
                "Defined timeline & scope",
                "Project-based engagement",
                "Defined timeline"
            ],
            color: "from-purple-600 to-purple-800"
        },
        {
            id: 2,
            icon: <LuSettings />,
            title: "Managed Services",
            description: "Ongoing management and optimization of implemented solutions with proactive monitoring.",
            features: [
                "Continuous care",
                "Proactive monitoring",
                "24/7 monitoring"
            ],
            color: "from-blue-600 to-blue-800"
        },
        {
            id: 3,
            icon: <RxTarget />,
            title: "Consulting & Advisory",
            description: "Strategic consulting to help organizations plan their digital transformation journeys.",
            features: [
                "Road maps & budget",
                "Strategic guidance",
                "Expert insights"
            ],
            color: "from-purple-600 to-pink-600"
        }
    ];

    const featureCards = [
        {
            id: 1,
            title: "Enterprise Infrastructure",
            image: "../../assets/services/enterprise-infra.jpg"
        },
        {
            id: 2,
            title: "Smart Automation",
            image: "../../assets/services/smart-auto.jpg"
        },
        {
            id: 3,
            title: "Advanced Security",
            image: "../../assets/services/advance-security.jpg"
        },
       
    ];

    return (
        <div className="py-24 px-4 md:px-12 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Services Delivery Models
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Flexible engagement options
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {serviceCards.map((service) => (
                        <div
                            key={service.id}
                            className="group bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl shadow-lg`}>
                                {service.icon}
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                                        <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featureCards.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative h-64 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url(${feature.image})`,
                                    backgroundColor: '#1a1a2e'
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    {feature.title}
                                </h4>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDeliveryModels;
