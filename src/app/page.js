import Contact from "../component/Contact";
import About from "../component/About";
import Home from "../component/Home";
import Hero from "../component/Hero";
import WhereCreateSection from "../component/Wherecreatesection";
import Image from "next/image";
import StatsSection from "../component/StatsSection";
import ProcessSection from "../component/ProcessSection";
import Project from "../component/Project";
import Blog from "../component/Blog";
import Footer from "../component/Footer";
import FAQSection from "../component/FAQSection";
import Testimonial from "../component/Testimonial";
import Call from "../component/call";
import Marquee from "../component/Marquee";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <WhereCreateSection />
      <ProcessSection />
      <StatsSection />
      <Project />
      <Testimonial />
      <Blog />
      <FAQSection />
      <Contact />
      <Call />
      <Marquee />
      <Footer />
    </div>
  );
}
