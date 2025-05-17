import React from "react";
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Why Choose Dr. Nayan Joshi ?
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              We believe astrology is pure science, and we aim to create such a
              social impact of the organization on you that science and
              astrology through its resources of the astrology chart, kundali,
              etc,. As we dive into our 50th year, we strive to build a
              community where we are a part of your daily routine right from our
              astrology by date of birth, name, time, palm reading, and face
              reading, to all other online astrology, numerology, palmistry
              services.
            </p>
            <p className="text-gray-600 text-lg">
              He is helping people to solve their life problems related to
              <span className="font-bold text-amber-400">
                {" "}
                government jobs, health, marriage, love, career, and business.{" "}
              </span>
              As we strive to build a community where we are a part of your
              daily routine right from our astrology by date of birth, name,
              time, palm reading, and face reading, to all other online
              astrology, numerology, palmistry services.
            </p>
            <button
              className="mt-4 bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Book a Consultation
            </button>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/image1.jpeg" // Replace with your image path
              alt="Choose Us"
              className="rounded-2xl shadow-lg shadow-amber-300 object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
