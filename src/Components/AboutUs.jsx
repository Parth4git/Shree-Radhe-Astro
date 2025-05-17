import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-2/5 pd-28">
          <img
            src="/Untitled design (1).png" // Replace with your image path
            alt="About Us"
            className="rounded-4xl  w-full h-[400px] md:h-[500px] lg:h-[700px] object-cover "
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-3/5">
          <h2 className="text-5xl font-semibold text-gray-800 md:mt-44">
            About Dr. Nayan Joshi
          </h2>
          <p className="text-gray-600 text-lg mt-6">
            We believe astrology is pure science, and we aim to create such a
            social impact of the organization on you that{" "}
            <span className="font-bold text-amber-400">
              science and astrology{" "}
            </span>
            through its resources of the astrology chart, kundali, etc,. As we
            dive into our 50th year, we strive to build a community where we are
            a part of your daily routine right from our astrology by date of
            <span className="font-bold text-amber-400">
              {" "}
              birth, name, time, palm reading, and face reading,
            </span>{" "}
            to all other online astrology, numerology, palmistry services.
          </p>
          <p className="text-gray-600 text-lg mt-6">
            He is helping people to solve their life problems related to
            government jobs, health, marriage, love, career, and business. As we
            dive into our 20th year, we strive to build a community where we are
            a part of your daily routine right from our astrology by date of
            birth, name, time, palm reading, and face reading, to all other
            online astrology, numerology, palmistry services.
          </p>
          <button
            className="mt-4 bg-yellow-400 hover:bg-amber-400 text-white font-bold py-4 px-6 rounded"
            onClick={() => {
              window.open("tel:+919727689606", "_blank");
            }}
          >
            <span className="text-2xl">📞 </span>
            Get a Consultation on Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
