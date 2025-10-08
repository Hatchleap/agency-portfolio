"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section
      className="w-full py-16 px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32 2xl:px-48 3xl:px-56 5xl:px-72
      max-w-[2000px] 2xl:max-w-[2000px] 3xl:max-w-[2200px] 5xl:max-w-[3500px] mx-auto"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start 
        3xl:gap-20 5xl:gap-28"
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center space-y-10 3xl:space-y-14 5xl:space-y-16">
          {/* Label */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium tracking-wider text-orange-500 3xl:text-2xl 5xl:text-3xl">
              — WHO WE ARE
            </span>
          </div>

          {/* Arrow Above Stats */}
          <div className="flex justify-start">
            <FaArrowRight
              className="text-5xl md:text-8xl text-gray-700 rotate-[135deg] 
              3xl:text-[9rem] 5xl:text-[15rem]"
              style={{
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            />
          </div>

          {/* Stats Section */}
          <div className="flex flex-col gap-8 3xl:gap-10 5xl:gap-12">
            {[
              {
                value: "100%",
                label: "Service satisfaction guarantee",
              },
              {
                value: "25K",
                label: "Successfully finished project",
              },
              {
                value: "18+",
                label: "Experience engineering members",
              },
            ].map((item, index) => (
              <div key={index}>
                <h2
                  className="font-extrabold text-black text-[clamp(2.5rem, 5vw, 2.5rem)]
                  2xl:text-[2rem] 3xl:text-[3.5rem] 5xl:text-[4.5rem]"
                //   style={{
                //     fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                //   }}
                >
                  {item.value}
                </h2>
                <p className="text-gray-500 text-sm md:text-base 2xl:text-[1rem] 3xl:text-3xl 5xl:text-5xl">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-8 3xl:gap-12 5xl:gap-14">
          {/* Paragraph and Small Arrow */}
          <div className="flex items-start gap-4 3xl:gap-6">
            <div className="mt-2 flex-shrink-0 text-gray-700">
              <FaArrowRight className="text-3xl md:text-4xl rotate-[-45deg] 3xl:text-5xl 5xl:text-7xl" />
            </div>

            <p className="
  text-gray-800 font-medium leading-relaxed
  text-[clamp(1rem,1.5vw,1.3rem)]
  3xl:text-[2rem] 5xl:text-[3.5rem] 5xl:leading-[1.4]
  max-w-[36rem] 3xl:max-w-[100%] 5xl:max-w-[100%]
">
  Orvio believe in the power of creativity to ignite growth. We aim
  to empower businesses to unlock full potential by delivering
  cutting–edge marketing solutions that drive results.
</p>

          </div>

          {/* About Button */}
          <button className="flex items-center gap-2 3xl:gap-5 5xl:gap-12 border border-gray-400 px-5 py-2 5xl:px-10 5xl:py-4 rounded-full text-sm md:text-base 3xl:text-2xl 5xl:text-3xl hover:bg-black hover:text-white transition-all w-fit">
            About Us
            <FaArrowRight className="text-xs md:text-sm 3xl:text-base" />
          </button>

          {/* Image */}
          <div className="w-full max-w-[500px] 2xl:max-w-[100%] 3xl:max-w-[100%] 5xl:max-w-[100%] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/image/b.jpeg"
              alt="Team Meeting"
              width={900}
              height={700}
              className="w-full h-auto object-cover rounded-2xl 2xl:h-[300px] 3xl:h-[500px] 5xl:h-[600px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
