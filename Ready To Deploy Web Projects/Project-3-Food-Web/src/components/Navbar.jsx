import { useState } from "react";
import { navItems } from "../constants/index"; // Ensure navItems is correctly structured
import{Menu , X} from 'lucide-react'
import { MdOutlineDarkMode } from "react-icons/md";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-2   p-2 border-b border-neutral-700/80 max-w-[2560px] ">
      <div className="container px-2 mx-auto relative md:px-8 lg:text-sm  max-w-[2560px] ">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <div className="flex justify-end  gap-6 " >
              
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <MdOutlineDarkMode size={18} className="mr-3  " />
            </div>
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end gap-2">
            <div className=" flex justify-between items-center " >
              <MdOutlineDarkMode size={20} className="mr-3  " />

              <button
              onClick={toggleNavbar}
              aria-label="Toggle navigation"
              className="transition-transform duration-300 ease-in-out"
            >
              {mobileDrawerOpen ? (
                <X className="w-6 h-6 transform transition-transform duration-300 ease-in-out rotate-180 opacity-100" />
              ) : (
                <Menu className="w-6 h-6 transform transition-transform duration-300 ease-in-out rotate-0 opacity-100" />
              )}
            </button>
              </div>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gray-400 w-full p-2 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;