import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-2/5 pd-28">
          <img
            src="/Untitled design (1).png" // Replace with your image path
            alt="About Us"
            className="rounded-4xl  w-full h-[560px] md:h-[500px] lg:h-[700px] object-cover "
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-3/5">
          <h2 className="text-5xl font-semibold text-gray-800 md:mt-44">
            {t("aboutus.title")}
          </h2>
          <p className="text-gray-600 text-lg mt-6">
            {t("aboutus.description1")}
          </p>
          <p className="text-gray-600 text-lg mt-6">
            {t("aboutus.description2")}
          </p>
          <button
            className="mt-4 bg-yellow-400 hover:bg-amber-400 text-white font-bold py-4 px-6 rounded"
            onClick={() => {
              window.open("tel:+919727689606", "_blank");
            }}
          >
            <span className="text-2xl">📞 </span>
            {t("aboutus.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
