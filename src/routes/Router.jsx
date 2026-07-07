import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ScrollTop from "../components/layout/ScrollTop";
import Footer from "../components/layout/Footer";
import Home from "../pages/Home";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Gallery from "../components/home/Gallery";
import Contact from "../pages/Contact";





export default function Router() {
  return (
    <>
      <ScrollTop />
      <Navbar />

         <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>

      <Footer />
    </>
  );
}