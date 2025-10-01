import BlogHero from "./BlogHero";
import BlogTeam from "./BlogTeam";
import BlogMission from "./BlogMission";
import FAQSection from '../../component/FAQSection';
import Contact from '../../component/Contact';
import Call from '../../component/call';
import Marquee from '../../component/Marquee';
import Footer from '../../component/Footer';

export default function About() {
  return (
    <main>
      <BlogHero />
      <BlogTeam />
      <BlogMission />
      <FAQSection />
      <Contact />
      <Call />
      <Marquee />
      <Footer />
      {/* Add more sections as needed */}
    </main>
  );
}