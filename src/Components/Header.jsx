import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="mx-auto bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Logo.jpeg"
            alt="Company Logo"
            className="h-14 w-16 border-rounded"
          />
          <div className="block">
            <h1 className="text-xl font-bold text-gray-50">
              {t("header.title")}
            </h1>
            <p className="text-lg font-bold text-gray-50">{t("header.name")}</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8  text-gray-50 font-serif text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="hover:text-yellow-300"
            >
              {t(`header.${link.name.toLowerCase()}`)}
            </Link>
          ))}
        </nav>

        <div className="block md:flex space-x-2 text-white">
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("hi")}>हिंदी</button>
        </div>

        {/* Contact Button */}
        <a
          href="tel:+919727689606"
          className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
        >
          {t("header.callUs")}
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-50 hover:text-cyan-50 focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <marquee
        className="bg-gray-800 text-yellow-200 py-2 text-center font-serif"
        behavior="scroll"
        direction="left"
      >
        <p>
          {t("header.marquee")}
          <span className="text-amber-200 font-bold">
            {t("header.marqueeHighlight")}
          </span>
        </p>
      </marquee>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900 px-4 pb-4 space-y-2 text-gray-50 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block hover:text-cyan-50"
              onClick={() => setIsOpen(false)}
            >
              {t(`header.${link.name.toLowerCase()}`)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
