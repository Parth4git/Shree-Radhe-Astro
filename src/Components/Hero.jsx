import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/image1.jpeg",
    heading: "Nayan Joshi Astrology",
    subtext: "The most TRUSTED name in the field of Astrology",
  },
  {
    image:
      "https://img.freepik.com/free-photo/mystical-numerology-scene_52683-107762.jpg",
    heading: "Vastu Solutions that Work",
    subtext: "Balance your space for peace, health, and prosperity.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FqxKV5O_yHVqpOO83Fx3AYeCBrmijcGzsw&s",
    heading: "Personalized Kundali Readings",
    subtext: "Let the stars guide your future with clarity and purpose.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { image, heading, subtext } = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Image with fixed aspect ratio */}
      <div className="relative aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] w-full">
        <img
          src={image}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0  bg-opacity-40"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:pl-12 lg:pl-24 text-white text-center md:text-left px-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3">
            {heading}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-serif mb-5 text-amber-200">
            {subtext}
          </p>
          <div className="space-x-3">
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
