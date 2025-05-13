import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">
        {" "}
        Contact Us
      </h2>
      <div className="max-w-8xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <div className="mt-4 flex flex-col gap-4">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <FaCheckCircle className="text-amber-400" />
                <p className="text-xl font-bold">24 X 7 Support</p>
              </div>
              <p className="font-serif">
                We Provide 24*7 Real Time Support For Our Customers
              </p>
            </div>
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <FaCheckCircle className="text-amber-400" />
                <p className="text-xl font-bold">Online Booking</p>
              </div>
              <p className="font-serif">
                You can book all types of puja services online.
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-4 mt-4">
            <button className="bg-purple-700 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded">
              Call Us for Free Consultation
            </button>
            <button className="bg-purple-700 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded">
              Whatapp us to Book a Consultation
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border rounded py-2 px-3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded"
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
