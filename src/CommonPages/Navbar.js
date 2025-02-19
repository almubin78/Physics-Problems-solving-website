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
                isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700"
              }
            >
              এককের রূপান্তর
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/laws-integrations"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              পদার্থ ক্যালকুলেটর
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/laws-selection"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              সূত্র নির্ধারন
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden font-serif font-bold ${
            menuOpen
              ? "text-pink-800 border"
              : "text-red-600 border px-1 rounded"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Hide" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-yellow-100 shadow-lg absolute top-0 left-0 w-full py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <NavLink
                to="/"
                className="text-gray-700 text-lg hover:bg-green-300 rounded px-2 bg-green-300"
                onClick={() => setMenuOpen(false)}
              >
                প্রধান পেজ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/simple-calculate"
                className="text-gray-700 text-lg hover:bg-green-300 rounded px-2 bg-green-300"
                onClick={() => setMenuOpen(false)}
              >
                এককের রূপান্তর
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/laws-integrations"
                className="text-gray-700 text-lg hover:bg-green-300 rounded px-2 bg-green-300"
                onClick={() => setMenuOpen(false)}
              >
                পদার্থ ক্যালকুলেটর
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/laws-selection"
                className="text-gray-700 text-lg hover:bg-green-300 rounded px-2 bg-green-300"
                onClick={() => setMenuOpen(false)}
              >
                সূত্র নির্ধারন
              </NavLink>
            </li>
          </ul>

          <button
            className={` mt-2 font-serif font-bold ${
              menuOpen
                ? "text-pink-800 border bg-slate-300 px-2 py-1 rounded"
                : "text-red-600 border px-2 py-1 rounded"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            close
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
