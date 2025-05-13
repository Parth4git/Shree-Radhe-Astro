import React from "react";

const Filler = (props) => {
  return (
    <section className="bg-purple-700 py-12 items-center flex flex-col justify-center">
      <h3 className="text-3xl font-bold text-center text-white mb-4">
        {props.title}
      </h3>
      <p className="text-white text-lg">{props.description}</p>
      <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded">
        Book a Consultation
      </button>
    </section>
  );
};

export default Filler;
