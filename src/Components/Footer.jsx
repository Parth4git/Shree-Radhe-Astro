import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white pt-12 pb-6 px-4 border-t-2 border-amber-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Call to Action */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-white pb-2">
            Call Us Now
          </h3>
          <p className="mb-2 text-2xl font-bold text-white">
            We are happy to help you and solve your queries
          </p>
          <p className="font-semibold text-white">+91-9727689606</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-white pb-2">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#kundli" className="hover:text-white">
                Kundli Matching
              </a>
            </li>
            <li>
              <a href="#vastu" className="hover:text-white">
                Vastu Shastra
              </a>
            </li>
            <li>
              <a href="#marriage" className="hover:text-white">
                Marriage Puja
              </a>
            </li>
            <li>
              <a href="#gemstones" className="hover:text-white">
                Gemstones
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-white pb-2">
            Get In Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white" />
              Viramgam Gujrat
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-white" />
              +91-9727689606
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              nayanjoshi240@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white mt-10 border-t-2 pt-4 border-white">
        {" "}
        Copyright © 2024 Astrologer Janak Ojha. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
