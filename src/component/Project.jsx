"use client";

import React from "react";

const projects = [
  {
    id: "01",
    title: "An AI Accounting Assistant",
    subtitle: "Pennidrop",
    img: "/image/e.jpeg",
  },
  {
    id: "02",
    title: "Smart Health Tracker App",
    subtitle: "HealthPlus",
    img: "/image/m.jpeg",
  },
  {
    id: "03",
    title: "AI Powered Marketing Tool",
    subtitle: "MarketEase",
    img: "/image/e.jpeg",
  },
  {
    id: "04",
    title: "Virtual Meeting Platform",
    subtitle: "MeetSphere",
    img: "/image/m.jpeg",
  },
];

const Project = () => {
  // Inline style for parallax
  const parallaxStyle = (imgUrl) => ({
    backgroundImage: `url(${imgUrl})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });

  return (
    <section className="w-full bg-white text-black px-6 md:px-16 py-12 space-y-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <div className="flex items-center mb-3">
              <div className="w-6 h-2 rounded-full bg-orange-500 mr-2"></div>
              <span className="text-gray-700 font-medium text-sm">Our Project</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-snug">
              EXPLORE ALL THE <br /> EXCLUSIVE PROJECT
            </h2>
          </div>
          <button className="mt-6 md:mt-0 border border-orange-500 text-orange-500 px-5 py-2 rounded-full hover:bg-orange-50 transition">
            View All Works
          </button>
        </div>

        {/* Project Items */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="bg-orange-50 p-6 rounded-lg w-full md:w-1/2">
                <p className="text-gray-500 text-sm">//{project.id}</p>
                <h3 className="text-xl font-semibold mt-2 mb-1">{project.title}</h3>
                <p className="text-gray-500 mb-6">{project.subtitle}</p>
                <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
                  Get Started
                </button>
              </div>

              {/* Image Section with Inline Parallax Effect */}
              <div
                className="w-full md:w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow-lg"
                style={parallaxStyle(project.img)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
