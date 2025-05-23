import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Filler = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section className=" mx-auto px-6 bg-gray-800 py-12 items-center flex flex-col justify-center">
      {/* <h3 className="text-3xl font-bold text-center text-white mb-4">
        {props.title}
      </h3> */}
      <p className="text-amber-200 text-2xl font-serif mb-4 max-w-7xl">
        {t("filler.description")}
      </p>

      <button
        className="mt-4 bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded"
        onClick={() => {
          navigate("/contact");
        }}
      >
        <span className="text-2xl">📞 </span>
        {t("choose.button")}
      </button>
    </section>
  );
};

export default Filler;
