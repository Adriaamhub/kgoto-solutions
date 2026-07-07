import About from "../components/home/About";
import CTA from "../components/home/CTA";
import Gallery from "../components/home/Gallery";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}