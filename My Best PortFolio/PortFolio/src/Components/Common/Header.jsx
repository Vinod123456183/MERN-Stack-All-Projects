import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom
import { navItems } from "./index"; // Ensure navItems is correctly structured

const Navbar = () => {
  const navigate = useNavigate(); // Move useNavigate inside the component
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleClick = () => {
    navigate("/contact"); // Navigate to the contact page
  };

  const homePage = () => {
    navigate("/home"); // Navigate to the home page
  };

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="top-0 z-50 py-2 mx-3 md:mx-14">
      <div className="container px-2 mx-auto relative lg:text-[20px]">
        <div className="flex justify-between items-center p-3">
          <div
            onClick={homePage}
            className="cursor-pointer flex items-center flex-shrink-0"
          >
            <span className="text-2xl tracking-tight font-medium">X</span>
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="font-medium">
                  {" "}
                  {/* Changed to Link */}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop "Let's Talk" button */}
          <div className="hidden lg:block">
            <button
              onClick={handleClick}
              className="bg-[#171616] rounded-xl p-3 px-7 mx-auto font-league-spartan font-semibold"
            >
              Let's <span className="text-blue-500">Talk</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-full p-1 flex flex-col justify-center items-center lg:hidden bg-[#161616]">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-3">
                  <Link to={item.href} className="text-lg">
                    {" "}
                    {/* Changed to Link */}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-1 py-2">
              <button
                onClick={handleClick}
                className="px-4 py-1 rounded bg-[#171616] text-white font-league-spartan font-semibold"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
