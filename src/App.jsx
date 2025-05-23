import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ServicesPage from "./Pages/ServicesPage";
import TestimonialPage from "./Pages/TestimonialPage";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import LanguageSwitcher from "./Components/LayoutSwitcher";

function App() {
  return (
    <>
      <LanguageSwitcher />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
      </Routes>
    </>
  );
}

export default App;
