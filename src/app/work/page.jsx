import WorkHero from "./WorkHero";
import WorkTeam from "./WorkTeam";
import WorkMission from "./WorkMission";

export default function About() {
  return (
    <main>
      <WorkHero />
      <WorkMission />
      <WorkTeam />
      {/* Add more sections as needed */}
    </main>
  );
}