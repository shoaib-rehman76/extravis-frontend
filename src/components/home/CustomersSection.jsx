import ContentWrapper from "../../Shared/ContentWrapper"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";


const testimonials = [
    {
        id: 1,
        company: "MonetX",
        review: "Extravis MonetX helped us identify and resolve network issues 3x faster than our previous solution, directly contributing to our best uptime performance in company history.\" — Network Operations Manager, Major Telecom Provider",
        result: "Telecommunications Leader Achieves 99.9% Uptime.",
        user: {
            name: "Patrick, Lubbock, TX",
            date: "Dec 2024",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" // Using a placeholder for now
        }
    },
    {
        id: 2,
        company: "MonetX", // Using consistent naming based on image
        review: "Extravis MonetX helped us identify and resolve network issues 3x faster than our previous solution, directly contributing to our best uptime performance in company history.\" — Network Operations Manager, Major Telecom Provider",
        result: "Telecommunications Leader Achieves 99.9% Uptime.",
        user: {
            name: "Patrick, Lubbock, TX",
            date: "July 2024",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e"
        }
    },
    {
        id: 3,
        company: "MonetX",
        review: "Extravis MonetX helped us identify and resolve network issues 3x faster than our previous solution, directly contributing to our best uptime performance in company history.\" — Network Operations Manager, Major Telecom Provider",
        result: "Telecommunications Leader Achieves 99.9% Uptime.",
        user: {
            name: "Patrick, Lubbock, TX",
            date: "July 2024",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f"
        }
    },
    {
        id: 4,
        company: "MonetX",
        review: "Extravis MonetX helped us identify and resolve network issues 3x faster than our previous solution, directly contributing to our best uptime performance in company history.\" — Network Operations Manager, Major Telecom Provider",
        result: "Telecommunications Leader Achieves 99.9% Uptime.",
        user: {
            name: "Patrick, Lubbock, TX",
            date: "Aug 2024",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704g"
        }
    }
];

const CustomersSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        appendDots: dots => (
            <div style={{ bottom: "-40px" }}>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300 dot-custom"
            />
        )
    };

    return (
        <ContentWrapper>
            <div className="py-10">
                <div className="mx-auto mb-12 text-center">
                    <h1 className="text-[2.5rem] font-bold text-white mb-3">
                        Why Customer Love Extravis
                    </h1>
                    <p className="text-gray-400 text-lg">
                        We believe on customer come first and their satisfaction
                    </p>
                </div>

                <div className="customer-slider-container px-2">
                    <Slider {...settings}>
                        {testimonials.map((item) => (
                            <div key={item.id} className="px-3">
                                <div className="bg-[#0A0A0E] border border-white/10 rounded-xl p-8 h-full flex flex-col justify-between relative group hover:border-purple-500/30 transition-colors duration-300">
                                    {/* Gradient Glow Effect */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div>
                                        <div className="flex gap-1 mb-4 text-yellow-400 text-sm">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>

                                        <div className="mb-4">
                                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                                                {item.company}
                                            </span>
                                        </div>

                                        <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-6">
                                            {item.review}
                                        </p>

                                        <p className="text-gray-400 text-xs mb-6 border-l-2 border-purple-500/50 pl-3">
                                            {item.result}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                                            <img src={item.user.avatar} alt={item.user.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-sm font-semibold">{item.user.name}</h4>
                                            <p className="text-gray-500 text-xs">{item.user.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default CustomersSection