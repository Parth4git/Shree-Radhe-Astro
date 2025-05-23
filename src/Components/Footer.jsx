import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-4 px-4 border-t-2 border-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Call to Action */}
        <div className=" md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-white pb-2">
            {t("footer.followUs")}
          </h3>
          <p className="mb-2 text-xl font-bold text-white">
            {t("footer.query")}
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.youtube.com/@ShreRadheAstroDrNayanjoshi24"
              target="_blank"
            >
              <FaYoutube className="text-3xl text-white mb-2 hover:text-yellow-300" />
            </a>
            <a href="https://www.instagram.com/nayanjoshi54/#" target="_blank">
              <FaInstagram className="text-3xl text-white mb-2 hover:text-yellow-300" />
            </a>
            <a
              href="https://www.facebook.com/nayan.joshi.33865854"
              target="_blank"
            >
              <FaFacebook className="text-3xl text-white mb-2 hover:text-yellow-300" />
            </a>
            <a href="https://g.co/kgs/9STF3rA" target="_blank">
              <FaGoogle className="text-3xl text-white mb-2 hover:text-yellow-300" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-white pb-2">
            {t("footer.link")}
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-yellow-200 hover:underline">
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-200 hover:underline"
              >
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-yellow-200 hover:underline"
              >
                {t("footer.services")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-200 hover:underline"
              >
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-white pb-2">
            {t("footer.touch")}
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white hover:text-yellow-300" />
              {t("footer.address")}
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-white hover:text-yellow-300" />
              +91-9727689606
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white hover:text-yellow-300" />
              nayanjoshi240@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white mt-10 border-t-1 pt-4 border-white">
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
