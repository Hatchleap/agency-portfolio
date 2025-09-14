"use client";
import React from "react";

const Marquee = () => {
  const marqueeWords = [
    "Custom Branding", "✧", "Website Design", "✧", "Digital Marketing", "✧",
    "UI/UX Design", "✧", "E-Commerce", "✧", "SEO Optimization", "✧",
    "Content Strategy", "✧", "Social Media Marketing", "✧", "Brand Identity", "✧",
    "Web Development", "✧", "Creative Solutions", "✧",
    "Custom Branding", "✧", "Website Design", "✧", "Digital Marketing", "✧",
  ];

  return (
    <div className="relative flex overflow-hidden w-full bg-orange-500 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeWords.map((word, index) => (
          <span
            key={`first-${index}`}
            className="mx-8 text-lg md:text-xl font-semibold text-white"
          >
            {word}
          </span>
        ))}
        {marqueeWords.map((word, index) => (
          <span
            key={`second-${index}`}
            className="mx-8 text-lg md:text-xl font-semibold text-white"
          >
            {word}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 80s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
