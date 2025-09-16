import ServiceHero from "./ServiceHero";
import ServiceTeam from "./ServiceTeam";
import ServiceMission from "./ServiceMission";

export default function About() {
  return (
    <main>
      <ServiceHero />
      <ServiceMission />
      <ServiceTeam />
      {/* Add more sections as needed */}
    </main>
  );
}