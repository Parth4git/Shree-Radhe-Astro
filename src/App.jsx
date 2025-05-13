import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";
import Choose from "./Components/Choose";
import Filler from "./Components/Filler";
import Gallery from "./Components/Gallery";
import VideoSection from "./Components/VideoSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Counter />
      <Choose />
      <Testimonial />
      <Services />
      <Filler
        title="Want to know about horoscope ?"
        description="We provide you correct and accurate horoscope."
      />
      {/* <VideoSection /> */}
      <Gallery />
      <ContactUs />

      <Footer />
    </>
  );
}

export default App;
