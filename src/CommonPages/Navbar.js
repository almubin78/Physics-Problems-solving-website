import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        isScrolled ? "bg-yellow-300  text-purple-600" : "bg-green-400 "
        // isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900 shadow-md rounded-b-lg">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-serif tracking-wide transition duration-300 hover:scale-105"
        >
          Phy&Tech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          
          {[
            { path: "/", label: "Home" },
            { path: "/find-laws", label: "🔍 Find Laws" },
            { path: "/physics-calculator", label: "🧮 Calculator" },
            { path: "/playAnimation", label: "🎞️ Animation" },
            { path: "/chatWithSir", label: "💬 Chat" },
          ].map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition duration-300 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-500"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center space-x-2 text-lg font-semibold px-3 py-2 bg-blue-500 text-white rounded-lg shadow-md transition duration-300 hover:bg-blue-600 active:scale-95"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖ Close" : "☰ Menu"}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-yellow-300 to-yellow-100 shadow-lg flex flex-col items-center py-6 z-50"
        >
          <ul className="space-y-6 text-center w-full">
            <li>
              <NavLink
                to="/"
                className="block w-11/12 text-xl font-semibold text-gray-800 bg-green-400 hover:bg-green-500 px-4 py-3 rounded-lg shadow-md transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                🏠 প্রধান পেজ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-laws"
                className="block w-11/12 text-xl font-semibold text-gray-800 bg-green-400 hover:bg-green-500 px-4 py-3 rounded-lg shadow-md transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                🔍 Find Laws
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/physics-calculator"
                className="block w-11/12 text-xl font-semibold text-gray-800 bg-green-400 hover:bg-green-500 px-4 py-3 rounded-lg shadow-md transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                🧮 Calculator
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/playAnimation"
                className="block w-11/12 text-xl font-semibold text-gray-800 bg-green-400 hover:bg-green-500 px-4 py-3 rounded-lg shadow-md transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                ⚡ Animation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chatWithSir"
                className="block w-11/12 text-xl font-semibold text-gray-800 bg-green-400 hover:bg-green-500 px-4 py-3 rounded-lg shadow-md transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                💬 Chat
              </NavLink>
            </li>
          </ul>

          {/* Close Button */}
          <button
            className="mt-6 text-white bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full text-lg font-semibold shadow-lg transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            ✖ Close
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
