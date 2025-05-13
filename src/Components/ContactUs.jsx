import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Form Section */}

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-4">
            We believe astrology is pure science, and we aim to create such a
            social impact of the organization on you that science and astrology
            through its resources of the astrology chart, kundali, etc,. As we
            dive into our 50th year, we strive to build a community where we are
            a part of your daily routine right from our astrology by date of
            birth, name, time, palm reading, and face reading, to all other
            online astrology, numerology, palmistry services.
          </p>
          <p className="text-gray-600 text-lg">
            He is helping people to solve their life problems related to
            government jobs, health, marriage, love, career, and business
          </p>
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
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
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
