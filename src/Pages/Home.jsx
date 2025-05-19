import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Choose from "../Components/Choose";
import Counter from "../Components/Counter";
import Testimonial from "../Components/Testimonial";
import Services from "../Components/Services";
import Filler from "../Components/Filler";
import Gallery from "../Components/Gallery";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Choose />
      <Counter bgColor={"bg-gray-800"} textColor={"text-white"} />
      <Testimonial
        bgColor={"bg-gray-800"}
        textColor={"text-white"}
        pColor={"text-amber-200"}
      />
      <Services show={true} value={6} />
      <Filler
        title="Want to know about Horoscope and Astrology of your loved one ?"
        description="We provide you correct and accurate horoscope."
      />
      {/* <VideoSection /> */}
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
