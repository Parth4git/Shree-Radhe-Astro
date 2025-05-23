import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    text: "Best Astrologer & Vastu Tips Hanuman Ji Yagna is best. I am very happy with the service.",
    author: "Shree Ram Bhata",
    image:
      "https://images.unsplash.com/photo-1659528403950-659feec1ac8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwaW5kaWFufGVufDB8fDB8fHww",
  },
  {
    text: "Best. Jo bhi kaha hai muje bilkul vaisa hi hua hai. Thank you so much guruji 🙏🏻🙏🏻🙏🏻",
    author: "Parul Thakkar",
    image:
      "https://plus.unsplash.com/premium_photo-1661964274927-84559011dd89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uJTIwaW5kaWFufGVufDB8fDB8fHww",
  },
  {
    text: "Best astrologer, best vastu tips, best Bhudev Yagna, best Hanuman Ji Yagna.",
    author: "Sumit Gupta",
    image:
      "https://images.unsplash.com/photo-1655047134643-8a5dd0b0e6ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    text: "Best astrologer I ever met. He has great knowledge about astrology and remedies. ",
    author: "Ankit Sharma",
    image:
      "https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwaW5kaWFufGVufDB8fDB8fHww",
  },
  {
    text: "He is very knowledgeable, his predictions are very accurate, remedies are easy and effective.",
    author: "Anjali Verma",
    image:
      "https://plus.unsplash.com/premium_photo-1723568666044-1b066e26b1fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbiUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Testimonial = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useTranslation();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section className={`${props.bgColor} py-12 px-4`}>
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1
          className={`text-3xl md:text-4xl ${props.textColor} font-semibold mb-4`}
        >
          {t("testimonial.title")}
        </h1>
        <p className={`${props.pColor} text-md md:text-lg font-serif`}>
          {t("testimonial.description")}
        </p>
      </div>

      <div
        className="relative overflow-hidden max-w-4xl mx-auto"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-full px-4 py-6 flex justify-center"
            >
              <div className="bg-white flex flex-col sm:flex-row items-center shadow-xl rounded-lg py-8 px-2 gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-20 h-20 rounded-full object-cover shadow-md"
                />
                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium italic text-gray-800">
                    "{t.text}"
                  </p>
                  <p className="text-sm text-gray-500 mt-3 font-semibold">
                    — {t.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-50 p-2 rounded-full shadow hover:bg-yellow-100"
        >
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-50 p-2 rounded-full shadow hover:bg-yellow-100"
        >
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-yellow-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
