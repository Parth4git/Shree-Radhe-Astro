import { t } from "i18next";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image:
      "https://t3.ftcdn.net/jpg/09/97/56/76/240_F_997567661_B1FNxFBi8wsJbH1fzO68cpXUazFDQE3r.jpg",
    headingEn: "Nayan Joshi Astrology",
    headingHi: "नयन जोशी ज्योतिष",
    headingGu: "નયન જોશી જ્યોતિષ", // Added Gujarati
    subtextEn: "The most TRUSTED name in the field of Astrology",
    subtextHi: "ज्योतिष के क्षेत्र में सबसे विश्वसनीय नाम",
    subtextGu: "જ્યોતિષ ક્ષેત્રમાં સૌથી વિશ્વસનીય નામ", // Added Gujarati
  },
  {
    image:
      "https://img.freepik.com/free-photo/mystical-numerology-scene_52683-107762.jpg",
    headingEn: "Vastu Solutions that Work",
    headingHi: "काम करने वाले वास्तु समाधान",
    headingGu: "કાર્યક્ષમ વસ্তু સમાધાન", // Added Gujarati
    subtextEn: "Balance your space for peace, health, and prosperity.",
    subtextHi: "शांति, स्वास्थ्य और समृद्धि के लिए अपने स्थान को संतुलित करें।",
    subtextGu: "શાંતિ, આરોગ્ય અને સમૃદ્ધિ માટે તમારા જગ્યા ને સંતુલિત કરો.", // Added Gujarati
  },
  {
    image:
      "https://img.freepik.com/free-vector/gradient-numerology-background_23-2150001903.jpg?ga=GA1.1.2057785461.1747309138&semt=ais_hybrid&w=740",
    headingEn: "Personalized Kundali Readings",
    headingHi: "व्यक्तिगत कुंडली रीडिंग",
    headingGu: "વ્યક્તિગત કુંડળી વાંચન", // Added Gujarati
    subtextEn: "Let the stars guide your future with clarity and purpose.",
    subtextHi:
      "तारों को आपके भविष्य को स्पष्टता और उद्देश्य के साथ मार्गदर्शन करने दें।",
    subtextGu:
      "તારાઓ તમારા ભવિષ્ય ને સ્પષ્ટતા અને ઉદ્દેશ્ય સાથે માર્ગદર્શન આપે.", // Added Gujarati
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentLanguage = i18n.language;
  const {
    image,
    headingEn,
    headingHi,
    headingGu,
    subtextEn,
    subtextHi,
    subtextGu,
  } = slides[currentSlide];

  let heading = headingEn;
  let subtext = subtextEn;

  if (currentLanguage === "hi") {
    heading = headingHi;
    subtext = subtextHi;
  } else if (currentLanguage === "gu") {
    heading = headingGu;
    subtext = subtextGu;
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Image with fixed aspect ratio */}
      <div className="relative aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] w-full">
        <img
          src={image}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-opacity-40" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:pl-12 lg:pl-24 text-white text-center md:text-left px-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3">
            {heading}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-serif mb-5 text-yellow-200">
            {subtext}
          </p>
          <div className="space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded shadow">
              {t("hero.button1")}
            </button>
            <button
              className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded"
              onClick={() => navigate("/services")}
            >
              {t("hero.button2")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
