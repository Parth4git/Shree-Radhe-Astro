import React from "react";
import serviceData from "../assets/data";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = (props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="max-w-8xl mx-auto px-6 py-12 bg-gray-100">
      <h1 className="text-5xl font-semibold mb-4 text-center">
        {t("services.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {serviceData.slice(0, props.value).map((service, index) => {
          let title = service.titleEn;
          let description = service.descriptionEn;

          if (lang === "hi") {
            title = service.titleHi;
            description = service.descriptionHi;
          } else if (lang === "gu") {
            title = service.titleGu;
            description = service.descriptionGu;
          }

          return (
            <div
              key={index}
              className="bg-white shadow-md shadow-amber-300 rounded-lg p-4"
            >
              <img
                src={service.image}
                alt={title}
                className="rounded-2xl shadow-lg object-cover w-full h-52 mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-700 mb-8">{description}</p>
              <button
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  navigate("/services");
                }}
              >
                {t("services.button")}
              </button>
            </div>
          );
        })}
      </div>

      {props.show && (
        <div className="flex items-center justify-center gap-2 mt-16">
          <Link
            to="/services"
            className="text-gray-700 text-2xl font-bold hover:underline"
          >
            {t("services.viewAll")}
          </Link>
          <FaArrowRight size={24} className="text-gray-800" />
        </div>
      )}
    </div>
  );
};

export default Services;
