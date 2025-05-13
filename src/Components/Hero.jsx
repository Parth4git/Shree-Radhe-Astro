import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/image1.jpeg",
    heading: "Nayan Joshi Astrology",
    subtext: " The most TRUSTED name in the field of Astrology",
  },
  {
    image:
      "https://img.freepik.com/free-photo/mystical-numerology-scene_52683-107762.jpg",
    heading: "Vastu Solutions that Work",
    subtext: "Balance your space for peace, health, and prosperity.",
  },
  {
    image:
      "https://www.rynow.in/assets/img/slider/astro-webiste-development.jpg",
    heading: "Personalized Kundali Readings",
    subtext: "Let the stars guide your future with clarity and purpose.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, []);

  const { image, heading, subtext } = slides[currentSlide];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <img
        src={image}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0  bg-opacity-50"></div>

      <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-12 lg:px-24">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
          <p className="text-lg md:text-2xl mb-6 font-serif mt-8">{subtext}</p>
          <div className="space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded shadow">
              Get Started
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
