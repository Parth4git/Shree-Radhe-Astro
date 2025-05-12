import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className=" mx-auto bg-violet-700 shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Logo.jpeg"
            alt="Company Logo"
            className="h-14 w-16 border-rounded"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 pr-44 text-gray-50 font-serif text-lg">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-cyan-50">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <a
          href="tel:+919727689606"
          className="hidden md:block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        >
          Contact Us
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

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-black px-4 pb-4 space-y-2 text-gray-50 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block hover:text-cyan-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
