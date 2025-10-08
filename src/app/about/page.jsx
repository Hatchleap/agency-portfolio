import AboutHero from "./AboutHero";
import AboutTeam from "./AboutTeam";
import AboutMission from "./AboutMission";
import Blog from '../../component/Blog';
import FAQSection from '../../component/FAQSection';
import Contact from '../../component/Contact';
import Call from '../../component/call';
import Marquee from '../../component/Marquee';
import Footer from '../../component/Footer';
import ServiceCollection from "../services/ServiceCollection";
import ServiceMission from "../services/ServiceMission";
import ServiceMarquee from "../services/ServiceMarquee";
import Testimonial from "../../component/Testimonial";
import AboutEmp from "./AboutEmp";
import AboutUs from "./AboutUs";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutUs />
      <AboutTeam />
      <ServiceCollection />
      <ServiceMission />
      <ServiceMarquee />
      <Testimonial />
      <AboutEmp />
      <Blog />
      <FAQSection />
      <Contact />
      <Call />
      <Marquee />
      <Footer />
      {/* Add more sections as needed */}
    </main>
  );
}