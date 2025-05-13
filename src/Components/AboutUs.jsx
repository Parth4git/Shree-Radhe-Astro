import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/image3.jpeg" // Replace with your image path
            alt="About Us"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
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
            government jobs, health, marriage, love, career, and business. As we
            dive into our 50th year, we strive to build a community where we are
            a part of your daily routine right from our astrology by date of
            birth, name, time, palm reading, and face reading, to all other
            online astrology, numerology, palmistry services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
