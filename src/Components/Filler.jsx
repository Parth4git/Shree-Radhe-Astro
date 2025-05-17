import React from "react";
import { useNavigate } from "react-router-dom";

const Filler = (props) => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-800 py-12 items-center flex flex-col justify-center">
      <h3 className="text-3xl font-bold text-center text-white mb-4">
        {props.title}
      </h3>
      <p className="text-white text-lg">{props.description}</p>
      <button
        className="mt-4 bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded"
        onClick={() => {
          navigate("/contact");
        }}
      >
        Book a Consultation
      </button>
    </section>
  );
};

export default Filler;
