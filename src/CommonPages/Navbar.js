import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-yellow-500  text-purple-600" : "bg-green-400 "
        // isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 font-serif ">
          Phy&Tech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/simple-calculate"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              Simple Calculate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/laws-integrations"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              Laws & Integrations
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white font-serif font-bold" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Hide'  : 'Menu' }
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-0 left-0 w-full py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <NavLink
                to="/"
                className="text-gray-700 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/simple-calculate"
                className="text-gray-700 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Simple Calculate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/laws-integrations"
                className="text-gray-700 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Laws & Integrations
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
