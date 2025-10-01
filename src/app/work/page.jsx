import WorkHero from "./WorkHero";
import Project from "@/component/Project";
import Blog from '../../component/Blog';
import FAQSection from '../../component/FAQSection';
import Contact from '../../component/Contact';
import Call from '../../component/call';
import Marquee from '../../component/Marquee';
import Footer from '../../component/Footer';

export default function About() {
  return (
    <main>
      <WorkHero />
      <Project />
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