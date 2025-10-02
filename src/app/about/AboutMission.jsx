import { FaRegUser, FaRegStar, FaRegLightbulb as FaLamp } from "react-icons/fa";

const features = [
  {
    icon: <FaRegUser className="mx-auto text-black" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }} />, 
    title: "Bold Innovators",
    desc: "We’re always on the lookout for new ideas, methods, and technologies that can break the mold and elevate your brand.",
  },
  {
    icon: <FaRegStar className="mx-auto text-black" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }} />, 
    title: "Storytelling Architects",
    desc: "Stories are the foundation of all great brands, and we’re architects of those stories. Telling Stories That Inspire Action.",
  },
  {
    icon: <FaLamp className="mx-auto text-black" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }} />, 
    title: "Creative Visionaries",
    desc: "Turning imagination into reality. We craft unique, inspiring solutions.",
  },
];

export default function AboutMission() {
  return (
    <section className="w-full max-w-7xl 2xl:max-w-screen-2xl 4xl:max-w-[1800px] mx-auto px-4 sm:px-8 2xl:px-16 4xl:px-24 py-12 md:py-20 2xl:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-12 2xl:gap-x-24 4xl:gap-x-32 text-center">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center max-w-md mx-auto">
            <div className="mb-6">{f.icon}</div>
            <h2
              className="font-extrabold text-black mb-4"
              style={{ fontSize: "clamp(2rem,4vw,2.8rem)", lineHeight: 1.1 }}
            >
              {f.title}
            </h2>
            <p
              className="text-gray-700"
              style={{ fontSize: "clamp(1.1rem,2vw,1.35rem)", lineHeight: 1.5 }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}