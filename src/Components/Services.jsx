import React from "react";
import serviceData from "../assets/data";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Services = (props) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-8xl mx-auto px-6 py-12 bg-gray-100">
      <h1 className="text-5xl font-semibold mb-4 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {serviceData.slice(`${props.value}`).map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md shadow-amber-300 rounded-lg p-4"
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl shadow-lg object-cover w-full h-52 mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-8">{service.description}</p>
            <button
              className="asolute bottom-4 right-4 bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Book a Consultation
            </button>
          </div>
        ))}
      </div>

      {props.show && (
        <div className="flex items-center justify-center gap-2 mt-16">
          <Link
            to="/services"
            className="text-gray-700 text-2xl font-bold hover:underline"
          >
            See All Services
          </Link>
          <FaArrowRight size={24} className="text-gray-800 " />
        </div>
      )}
    </div>
  );
};

export default Services;
