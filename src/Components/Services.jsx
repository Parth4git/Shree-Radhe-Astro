import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const serviceData = [
  {
    title: "KUNDALI HASTREKHA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7ASXKUSlzZCbGrz8fbs7udGaBN6a4j0SrA&s",
    description:
      'Kundali" refers to a birth chart in Hindu astrology, while "Hastrekha" translates to palmistry. Hastrekha explores the lines and markings on the palm to offer predictions about various aspects of life.',
  },
  {
    title: "VASTU TIPS",
    image: "https://varanasiastrologer.com/assets/img/ser5.jpg",
    description:
      "Vastu tips focus on creating a harmonious living space by aligning with natural energies and cosmic forces, emphasizing proper room placement and positive energy. These tips aim to enhance well-being and prosperity.",
  },
  {
    title: "LAL KITAB",
    image: "/nayan_service_lalKitab.jpg",
    description:
      "Lal Kitab is an ancient astrological text known for practical remedies and Totkes. It predicts fortune based on planetary positions, avoiding mantras and gemstones. It emphasizes simple, effective solutions for life challenges.",
  },
  {
    title: "SATYA NARAYAN KATHA",
    image: "https://onlinepanditg.in/images/resource/s16.jpg",
    description:
      "A Hindu ritual dedicated to Lord Vishnu in his form as Satyanarayan. The katha is recited to seek blessings for prosperity, peace, and happiness.",
  },
  {
    title: "NAVGRAH POOJA",
    image: "/nayan_service_NAVGRAH POOJA.jpg",
    description:
      "Navgrah Pooja is a ritual to align spiritual and physical energies, invoking the nine planetary deities through chants and offerings for cosmic harmony.",
  },
  {
    title: "GRAH PRAVESH",
    image: "/nayan_service_GRAH PRAVESH.jpg",
    description:
      "Griha Pravesh Pooja is a housewarming ritual done before entering a new home, meant to cleanse negativity and bring auspiciousness as per Hindu traditions.",
  },
];

const Services = () => {
  return (
    <div className="max-w-8xl mx-auto px-6 py-12 bg-gray-100">
      <h1 className="text-5xl font-semibold mb-4 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md shadow-amber-300 rounded-lg p-6"
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl shadow-lg object-cover w-full h-52 mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-8">{service.description}</p>
            <button className="asolute bottom-4 right-4 bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded">
              Book a Consultation
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-16">
        <a
          href="/services"
          className="text-gray-700 text-2xl font-bold hover:underline"
        >
          See All Services
        </a>
        <FaArrowRight size={24} className="text-gray-800" />
      </div>
    </div>
  );
};

export default Services;
