import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Best Astrologer & Vastu Tips Hanuman Ji Yagna",
    author: "Shree Ram Bhata",
    image: "/image2.jpeg",
  },
  {
    text: "Best. Jo bhi kaha hai muje bilkul vaisa hi hua hai. Thank you so much guruji 🙏🏻🙏🏻🙏🏻",
    author: "Parul Thakkar",
    image: "/image2.jpeg",
  },
  {
    text: "Best astrologer, best vastu tips, best Bhudev",
    author: "Sumit Gupta",
    image: "/image2.jpeg",
  },
  {
    text: "Best astrologer I ever met. He has great knowledge about astrology and remedies. My all problems went away. Thanks for your guidance!",
    author: "Ankit Sharma",
    image: "/image2.jpeg",
  },
  {
    text: "He is very knowledgeable, his predictions are very accurate, remedies are easy and effective. Results are quick and positive!",
    author: "Anjali Verma",
    image: "/image2.jpeg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // trigger fade-in
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { text, author, image } = testimonials[currentIndex];

  return (
    <section className="bg-purple-700 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">
          What People Say About Us
        </h1>
        <p className="text-amber-200 text-md md:text-lg mb-10">
          We believe astrology is a pure science, and our aim is to create a
          social impact that blends science and astrology through tools like
          kundali and astrology charts.
        </p>
      </div>

      <div
        className={`max-w-2xl mx-auto transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-white flex flex-col sm:flex-row items-center shadow-xl rounded-lg p-6 gap-4">
          <img
            src={image}
            alt={`Testimonial by ${author}`}
            className="w-20 h-20 rounded-full object-cover shadow-md"
          />
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium italic text-gray-800">"{text}"</p>
            <p className="text-sm text-gray-500 mt-3 font-semibold">
              — {author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
