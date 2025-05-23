import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Choose = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              {t("choose.title")}
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              {t("choose.description1")}
            </p>
            <p className="text-gray-600 text-lg">{t("choose.description2")}</p>
            <button
              className="mt-4 bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <span className="text-2xl">📞 </span>
              {t("choose.button")}
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
