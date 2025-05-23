import React from "react";
import { useTranslation } from "react-i18next";

const images = [
  "https://globalpanditpooja.com/assets/img/gallery/g2.jpg",
  "https://globalpanditpooja.com/assets/img/gallery/g3.jpg",
  "https://globalpanditpooja.com/assets/img/gallery/g4.jpg",
  "https://globalpanditpooja.com/assets/img/gallery/g7.jpg",
  "https://globalpanditpooja.com/assets/img/gallery/g8.jpg",
];

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <h2 className="text-4xl font-semibold text-center mb-8">
        {t("gallery.title")}
      </h2>
      <div className="marquee-container">
        <div className="marquee-track">
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="marquee-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
