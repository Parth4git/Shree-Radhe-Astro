import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Best Astrologer & Vastu Tips Hanuman Ji Yagna is best. I am very happy with the service.",
    author: "Shree Ram Bhata",
    image: "/image2.jpeg",
  },
  {
    text: "Best. Jo bhi kaha hai muje bilkul vaisa hi hua hai. Thank you so much guruji 🙏🏻🙏🏻🙏🏻",
    author: "Parul Thakkar",
    image: "/image2.jpeg",
  },
  {
    text: "Best astrologer, best vastu tips, best Bhudev Yagna, best Hanuman Ji Yagna.",
    author: "Sumit Gupta",
    image: "/image2.jpeg",
  },
  {
    text: "Best astrologer I ever met. He has great knowledge about astrology and remedies. ",
    author: "Ankit Sharma",
    image: "/image2.jpeg",
  },
  {
    text: "He is very knowledgeable, his predictions are very accurate, remedies are easy and effective.",
    author: "Anjali Verma",
    image: "/image2.jpeg",
  },
];

const Testimonial = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
          What People Say About Us
        </h1>
        <p className={`${props.pColor} text-md md:text-lg font-serif`}>
          We believe astrology is a pure science, and our aim is to create a
          social impact that blends science and astrology through tools like
          kundali and astrology charts.
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
