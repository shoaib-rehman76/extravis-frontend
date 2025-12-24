import ContentWrapper from "../../Shared/ContentWrapper";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

const blogs = [
    {
        id: 1,
        tag: "Technology",
        title: "The Future of SAAS: AI Powered Automation",
        desc: "Discover how artificial intelligence is revolutionizing the SaaS industry and transforming business operations.",
        date: "Oct 24, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop"
    },
    {
        id: 2,
        tag: "Analytics",
        title: "Data Analytics Practices for Growing Teams",
        desc: "Learn the essential strategies for implementing data-driven decision making in your team.",
        date: "Oct 22, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
    },
    {
        id: 3,
        tag: "Culture",
        title: "Building a Collaborative Workspace Culture",
        desc: "Explore proven methods to enhance team collaboration and productivity in remote roles.",
        date: "Oct 20, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
    }
];

const BlogSection = () => {
    return (
        <ContentWrapper>
            <div className="py-10">
                <div className="text-center mb-12">
                    <h2 className="text-[2.2rem] font-[700] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4 inline-block">
                        From Our Blog
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Stay updated with the latest trends, insights, and best practices in SaaS technology
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="group bg-[#0A0A0E] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-purple-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                                        {blog.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaClock />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {blog.desc}
                                </p>

                                <a href="#" className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                                    Read More <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="btn-primary-gradient px-8 py-3 rounded-full text-white font-semibold shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:scale-105 transition-all duration-300">
                        View All Blogs
                    </button>
                </div>
            </div>
        </ContentWrapper>
    )
}
export default BlogSection
