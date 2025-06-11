import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          DJ
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-blue-400 transition ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-700 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)} // close on click
              className={({ isActive }) =>
                `block py-2 text-sm hover:text-blue-400 ${
                  isActive ? "text-blue-400" : "text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
