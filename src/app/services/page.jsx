import ServiceHero from "./ServiceHero";
import ServiceMission from "./ServiceMission";
import Blog from '../../component/Blog';
import FAQSection from '../../component/FAQSection';
import Contact from '../../component/Contact';
import Call from '../../component/call';
import Marquee from '../../component/Marquee';
import Footer from '../../component/Footer';
import ServiceCollection from "./ServiceCollection";
import ServiceMarquee from "./ServiceMarquee";

export default function About() {
  return (
    <main>
      <ServiceHero />
      <ServiceMission />
      <ServiceMarquee />
      <ServiceCollection />
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