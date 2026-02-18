import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-green-50 to-green-100 text-gray-800 mt-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            🇨🇦 CANADIAN PRODUCT
          </h2>
          <p className="text-gray-700 text-sm leading-6">
            Premium quality health supplement made with trusted Canadian
            ingredients. Designed to improve your performance and lifestyle.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition flex items-center justify-center">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition flex items-center justify-center">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition flex items-center justify-center">
              <FaTwitter size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-red-600 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/" className="hover:text-red-600 transition">Home</NavLink>
            </li>
            <li>
              <NavLink to="/benefits" className="hover:text-red-600 transition">Benefits</NavLink>
            </li>
            <li>
              <NavLink to="/how-to-use" className="hover:text-red-600 transition">How To Use</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-red-600 transition">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-red-600 font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-600" />
              2nd Floor Darul-Rahmant Plaza Hall Road, Lahore
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-600" />
              +92 343 9391344<span className="text-red-600 text-xl text-f">|</span>+92 314 6469196
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-600" />
              ishtiqdani@gmail.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-200 py-5 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} CANADIAN PRODUCT. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
