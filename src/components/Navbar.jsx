import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utils/data";
import CustomButton from "../Shared/CustomButton";
import { RiArrowDropDownFill, RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="my-6 flex justify-between items-center">
      <div>
        <img src="../assets/logo.svg" alt="logo" className="w-[140px] h-[140]" />
      </div>
      <nav className="flex gap-8 mt-1">
        {navLinks.map((link) => (
          <div key={link.id} className="flex items-center gap-0">

          <NavLink to={link.url} className={({isActive}) => `text-white pb-1 text-[.9rem] font-[400] ${isActive ? 'border-b-primary-purple w-max' : ''}`}>
            {link.title}
          </NavLink>
          {link.isChild && <RiArrowDropDownLine  className="w-6 h-6" />}
          </div>
        ))}
      </nav>
      <div>
       <CustomButton className="px-4 py-2 !rounded-full">
        Schedule a Demo
       </CustomButton>
      </div>
    </div>
  );
}
