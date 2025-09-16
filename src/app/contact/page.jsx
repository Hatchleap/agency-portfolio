import ContactHero from "./ContactHero";
import ContactTeam from "./ContactTeam";
import ContactMission from "./ContactMission";

export default function About() {
  return (
    <main>
      <ContactHero />
      <ContactMission />
      <ContactTeam />
      {/* Add more sections as needed */}
    </main>
  );
}