import React from "react";
import Header from "../Components/Header";
import Counter from "../Components/Counter";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";

const TestimonialPage = () => {
  return (
    <div>
      <Header />
      <Counter bgColor={"bg-gray-50"} textColor={"text-gray-800"} />
      <Testimonial
        bgColor={"bg-gray-50"}
        textColor={"text-gray-800"}
        pColor={"text-gray-600"}
      />
      <Footer />
    </div>
  );
};

export default TestimonialPage;
