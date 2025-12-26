import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utils/data";
import CustomButton from "../Shared/CustomButton";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="my-6 px-4 md:px-0 flex justify-between items-center relative z-50">
      {/* --- LOGO --- */}
      <div>
        <Link to="/">
          <img
            src="../assets/logo.svg"
            alt="logo"
            className="w-[120px] md:w-[140px] h-auto"
          />
        </Link>
      </div>

      {/* --- DESKTOP NAV --- */}
      <nav className="hidden lg:flex gap-8 mt-1">
        {navLinks.map((link) => (
          <div
            key={link.id}
            className="relative flex items-center gap-0 h-full"
            onMouseEnter={() => link.isChild && setOpenDropdown(link.id)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <NavLink
              to={link.url}
              className={({ isActive }) => `
                  text-[.9rem] font-[400] pb-1 transition-all duration-300
                  ${isActive
                  ? "text-white font-medium bg-gradient-to-r from-purple-500 to-blue-500 bg-[length:100%_2px] bg-no-repeat bg-bottom"
                  : "text-gray-300 hover:text-white"
                }
                `}
            >
              {link.title}
            </NavLink>

            {link.isChild && (
              <RiArrowDropDownLine
                className={`w-6 h-6 transition-transform duration-300 ${openDropdown === link.id
                    ? "rotate-180 text-purple-400"
                    : "text-gray-300"
                  }`}
              />
            )}

            {/* --- DESKTOP DROPDOWN MENU --- */}
            {link.isChild && openDropdown === link.id && (
              <div className="absolute top-full left-0 pt-4 w-56">
                <div className="flex flex-col bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(168,85,247,0.4)]">
                  {/* Gradient Top Border on Dropdown */}
                  <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-blue-600"></div>

                  {link.children.map((child) => (
                    <Link
                      key={child.id}
                      to={child.url}
                      className="group flex items-center justify-between px-5 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {child.title}
                      </span>
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* --- DESKTOP BUTTON --- */}
      <div className="hidden lg:block">
        <CustomButton className="px-4 py-2 !rounded-full">
          Schedule a Demo
        </CustomButton>
      </div>

      {/* --- MOBILE CONTROLS (Button + Hamburger) --- */}
      <div className="lg:hidden flex items-center gap-3">
        {/* Mobile Call to Action - Smaller version */}
        <CustomButton className="px-3 py-1.5 !rounded-full text-xs sm:text-sm">
          Schedule Demo
        </CustomButton>
        
        {/* Hamburger Icon */}
        <button 
          onClick={toggleMobileMenu}
          className="text-white text-2xl p-1 focus:outline-none"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#050505] border-t border-white/10 shadow-2xl py-6 px-4 flex flex-col gap-4 lg:hidden animate-fade-in-down z-40">
           {navLinks.map((link) => (
             <div key={link.id} className="flex flex-col">
               <NavLink
                 to={link.url}
                 onClick={() => !link.isChild && setMobileMenuOpen(false)}
                 className={({ isActive }) => `
                   text-[1rem] font-medium py-2 border-b border-gray-800
                   ${isActive ? "text-purple-400" : "text-gray-300"}
                 `}
               >
                 {link.title}
               </NavLink>
               
               {/* Mobile Submenu links */}
               {link.isChild && (
                 <div className="flex flex-col pl-4 mt-2 gap-2">
                   {link.children.map(child => (
                     <Link
                       key={child.id}
                       to={child.url}
                       onClick={() => setMobileMenuOpen(false)}
                       className="text-gray-400 text-sm py-1 hover:text-white"
                     >
                       — {child.title}
                     </Link>
                   ))}
                 </div>
               )}
             </div>
           ))}
        </div>
      )}
    </div>
  );
}
