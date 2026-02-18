import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-700 font-semibold border-b-2 border-green-700 pb-1"
      : "hover:text-green-600 transition";

  return (
    <div className="bg-gradient-to-b from-[#f7f3ea] to-white shadow-md px-6 py-3 flex items-center justify-between relative">
      {/* Logo */}
      <h1 className="text-green-700 font-bold text-xl">
        🇨🇦 CANADIAN PRODUCT
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-gray-800">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/benefits" className={linkClass}>
            Benefits
          </NavLink>
        </li>
        <li>
          <NavLink to="/how-to-use" className={linkClass}>
            How to Use
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* QR Code Button */}
      <NavLink to="/codes" className="hidden md:block">
        <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
          Get Codes
        </button>
      </NavLink>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gradient-to-b from-[#f7f3ea] to-white shadow-md flex flex-col gap-4 p-6 md:hidden z-50">
          <li>
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/benefits" className={linkClass} onClick={() => setIsOpen(false)}>
              Benefits
            </NavLink>
          </li>
          <li>
            <NavLink to="/how-to-use" className={linkClass} onClick={() => setIsOpen(false)}>
              How to Use
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/codes" onClick={() => setIsOpen(false)}>
              <button className="bg-red-600 w-full text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
                Get Codes
              </button>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
