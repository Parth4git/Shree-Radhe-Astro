import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Best Astrologer & Vastu Tips Hanuman Ji Yagna",
    author: "Shree Ram Bhata",
    image: "/image2.jpeg",
  },
  {
    text: "Best. Jo bhi kaha hai muje bilkul vaisa hi hua hai . Thank you so much guruji 🙏🏻🙏🏻🙏🏻 ",
    author: "Parul Thakkar",
    image: "/image2.jpeg",
  },
  {
    text: "Best astrologer, best vastu tips, best Bhudev",
    author: "Sumit Gupta",
    image: "/image2.jpeg",
  },
  {
    text: "Best astrologer I Ever met. He has great knowledge about astrology and remedies. My all problem went away. Thanks for your guidance I would recommend him to all my friends and family.",
    author: "Ankit Sharma",
    image: "/image2.jpeg",
  },
  {
    text: " he is very knowledgable his predictons are very accurate , remedies r easy to do and very effictive and results r very quick and positive . I would definitely recommend him to all my freinds and family.",
    author: "Anjali Verma",
    image: "/image2.jpeg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { text, author, image } = testimonials[currentIndex];

  return (
    <section className="max-w-8xl mx-auto bg-purple-700 py-12 h-[400px] flex flex-col items-center justify-center">
      <h1 className="text-3xl  text-white font-bold mb-4 text-center">
        What People Say About Us
      </h1>
      <p className="w-4xl text-amber-200 text-lg mb-10 text-center px-4 md:px-0">
        We believe astrology is pure science, and we aim to create such a social
        impact of the organization on you that science and astrology through its
        resources of the astrology chart, kundali, etc.
      </p>

      <div className="max-w-2xl mx-auto px-6 transition duration-500 ease-in-out">
        <div className="bg-white flex items-center shadow-lg rounded-lg p-6">
          <img
            src={image}
            alt="Testimonial"
            className="rounded-full shadow-md w-18 h-18 object-cover"
          />
          <div className="ml-6">
            <h2 className="text-xl font-semibold mb-1 italic">"{text}"</h2>
            <p className="text-gray-600 font-medium mt-2 bottom-0 right-0">
              — {author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
