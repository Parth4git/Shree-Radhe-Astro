import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import { FaF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-4 px-4 border-t-2 border-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Call to Action */}
        <div className=" md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-white pb-2">
            Follow Us
          </h3>
          <p className="mb-2 text-xl font-bold text-white">
            We are happy to help you and solve your queries
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.youtube.com/@ShreRadheAstroDrNayanjoshi24"
              target="_blank"
            >
              <FaYoutube className="text-3xl text-white mb-2" />
            </a>
            <a href="https://www.instagram.com/nayanjoshi54/#" target="_blank">
              <FaInstagram className="text-3xl text-white mb-2" />
            </a>
            <a
              href="https://www.facebook.com/nayan.joshi.33865854"
              target="_blank"
            >
              <FaFacebook className="text-3xl text-white mb-2" />
            </a>
            <a href="https://g.co/kgs/9STF3rA" target="_blank">
              <FaGoogle className="text-3xl text-white mb-2" />
            </a>
          </div>
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
      <div className="text-center text-sm text-white mt-10 border-t-1 pt-4 border-white">
        {" "}
        Copyright © 2025 Shree Radhe Astro. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
