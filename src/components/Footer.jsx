import { Wrapper } from "../Shared/Wrapper";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const footerLinks = {
        products: [
            { name: "MonetX", href: "/monetx" },
            { name: "GreenX", href: "#" },
            { name: "ViewSMS", href: "#" },
            { name: "SupportX", href: "/supportx" }
        ],
        resources: [
            { name: "SaaS Ally", href: "#" },
            { name: "Blogs", href: "#" },
            { name: "Customer stories", href: "#" },
            { name: "Press release", href: "#" }
        ],
        useCases: [
            { name: "Telecom & ISPs", href: "#" },
            { name: "Integrations for AI Agents", href: "#" },
            { name: "API, SDK, NPM", href: "#" },
            { name: "Startups & Entrepreneurs", href: "#" },
            { name: "Workforce & Talent Firms", href: "#" }
        ]
    };

    return (
        <Wrapper>
            <footer className=" text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                        {/* Logo and Description */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <img src="../assets/logo.svg" alt="logo" className="w-[140px] h-[140]" />
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                We deliver cutting-edge platforms and services that empower enterprises to achieve operational efficiency, security, and sustainability.
                            </p>
                        </div>

                        {/* Products */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Products</h4>
                            <ul className="space-y-2">
                                {footerLinks.products.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                {footerLinks.resources.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Use Cases */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Use Cases</h4>
                            <ul className="space-y-2">
                                {footerLinks.useCases.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-white/10 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            {/* Contact Info */}
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                        <span className="text-xs">📞</span>
                                    </div>
                                    <span>+92 - 347 5457151</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                        <span className="text-xs">✉️</span>
                                    </div>
                                    <span>info@extravis.tech</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                        <span className="text-xs">🇦🇪</span>
                                    </div>
                                    <span>Dubai, United Arab Emirates</span>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">
                                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <FaFacebookF className="text-sm" />
                                </a>
                                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <FaLinkedinIn className="text-sm" />
                                </a>
                                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <FaTwitter className="text-sm" />
                                </a>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                                <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                            </div>
                            <p>Extravis © 2025. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    );
};

export default Footer;