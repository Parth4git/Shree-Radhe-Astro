import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const slides = ["/image1.jpeg", "/cover2.jpeg", "/cover3.jpeg"];

const Hero = () => {
  return (
    <div className="relative h-[750px] w-full overflow-hidden">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full mt-1 "
      >
        {slides.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-full w-full bg-cover bg-center "
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-amber-200"> Nayan Joshi</span>- The most
            TRUSTED name in the field of Astrology
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto font-light mb-6">
            a Vedic astrologer for all human problems and solutions-Famous for
            Marriage, career, business, past life readings and child astrology.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
