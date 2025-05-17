import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const counters = [
  { value: 2000, label: "Kundli Served" },
  { value: 20, label: "Year's Of Legacy", suffix: "+" },

  { value: 100_00, label: "Consultations Given", suffix: "k+" },
  { value: 20, label: "Awards in the field of Occult", suffix: "+" },
];

const Count = ({ value, label, suffix = "", textColor, labelColor }) => {
  const [count, setCount] = useState(0);
  const duration = 4000; // ms

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = Math.ceil(end / (duration / 16)); // ~60fps

    const step = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(start);
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  const formatCount = () => {
    if (value >= 1000 && suffix.includes("k")) {
      return `${Math.floor(count / 1000)}k${suffix.includes("+") ? "+" : ""}`;
    }
    return `${count}${suffix}`;
  };

  return (
    <div className="text-center">
      <motion.h3
        className={`text-4xl font-bold ${textColor} `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {formatCount()}
      </motion.h3>
      <p className={`${labelColor} mt-2 text-lg max-w-xs mx-auto font-serif`}>
        {label}
      </p>
    </div>
  );
};

const Counter = (props) => {
  return (
    <section
      className={` ${props.bgColor} py-10 items-center flex flex-col justify-center `}
    >
      <h2
        className={`text-5xl font-semibold ${props.textColor} text-center mb-12`}
      >
        Our Success Stories
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {counters.map((item, idx) => (
          <Count
            key={idx}
            value={item.value}
            label={item.label}
            suffix={item.suffix || ""}
            textColor={
              props.textColor === "text-white" ? "text-white" : "text-amber-400"
            }
            labelColor={
              props.textColor === "text-white"
                ? "text-amber-300"
                : "text-gray-700"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Counter;
