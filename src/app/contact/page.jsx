import ContactHero from "./ContactHero";
import Contactus from "./Contactus";
import Blog from '../../component/Blog';
import FAQSection from '../../component/FAQSection';
import Contact from '../../component/Contact';
import Call from '../../component/call';
import Marquee from '../../component/Marquee';
import Footer from '../../component/Footer';

export default function About() {
  return (
    <main>
      <ContactHero />
      <Contactus />
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