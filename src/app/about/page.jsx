import AboutHero from "./AboutHero";
import AboutTeam from "./AboutTeam";
import AboutMission from "./AboutMission";
import Blog from '../../component/Blog';
import FAQSection from '../../component/FAQSection';
import Contact from '../../component/Contact';
import Call from '../../component/call';
import Marquee from '../../component/Marquee';
import Footer from '../../component/Footer';

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutTeam />
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