import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-[#f7f3ea] to-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center space-y-10">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Contact Us
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          For inquiries, reach out to us at{" "}
          <strong className="text-red-600">ishtiqdani@gmail.com</strong> or call{" "}
          <strong className="text-red-600">+92 343 9391344</strong>. We’re here to help you with any questions, feedback, or support.
        </p>

        {/* Contact Info Icons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-800">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <FaEnvelope className="text-red-600 text-xl sm:text-2xl" />
            <span>ishtiqdani@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <FaPhoneAlt className="text-red-600 text-xl sm:text-2xl" />
            <span>+92 343 9391344</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-red-600 text-xl sm:text-2xl" />
            <span>2nd Floor Darul-Rahmant Plaza Hall Road, Lahore</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto mt-10 bg-white p-8 sm:p-10 rounded-2xl shadow-lg space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
