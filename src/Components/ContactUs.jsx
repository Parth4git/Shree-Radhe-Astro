import React from "react";
import { FaCheckCircle, FaMobile, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6  md:mt-25">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-amber-400 text-xl" />
                <p className="text-xl md:text-2xl font-bold">24 X 7 Support</p>
              </div>
              <p className="text-base md:text-lg font-serif text-gray-700">
                We provide 24*7 real-time support for our customers.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-amber-400 text-xl" />
                <p className="text-xl md:text-2xl font-bold">Online Booking</p>
              </div>
              <p className="text-base md:text-lg font-serif text-gray-700">
                You can book all types of puja services online.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="flex-1 bg-purple-700 hover:bg-amber-500 text-white font-bold py-3 px-4 rounded flex items-center justify-center gap-2 text-sm sm:text-base md:mt-5">
              <FaMobile className="text-amber-400" />
              Call Us for Free Consultation
            </button>

            <button className="flex-1 bg-purple-700 hover:bg-amber-500 text-white font-bold py-3 px-4 rounded flex items-center justify-center gap-2 text-sm sm:text-base md:mt-5">
              <FaWhatsapp className="text-amber-400" />
              WhatsApp us to Book
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <form className="bg-white shadow-lg rounded-lg p-6 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded py-2 px-3 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-6 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
