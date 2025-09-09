"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    import("splitting").then(({ default: Splitting }) => {
      Splitting();
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 overflow-hidden">
      {/* Left Section */}
      <div className="relative z-20 w-full md:w-1/2 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-2 bg-orange-500 rounded-full"></span>
          <h3 className="text-lg md:text-xl font-medium">About Our Company</h3>
        </div>

        <div className="relative z-20">
          <p className="text-gray-300 max-w-md leading-relaxed mt-4">
            We are not just creators — we are forces of nature. Amet lectus
            sagittis blandit egestas pellentesque molestie odio et massa.
            Facilisis facilisis ac vestibulum tincidunt.
          </p>

          <button className="mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Explore More
          </button>
        </div>

        <div className="absolute top-28 left-0 md:static opacity-20 md:opacity-100 -z-10 md:z-10 mt-6 md:mt-0">
          <Image
            src="/image/shfh.png"
            alt="Vector"
            width={400}
            height={400}
            className="object-contain text-gray-600"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start gap-12 mt-12 md:mt-0">
        <div className="words space-y-3 text-4xl md:text-5xl font-bold">
          <p className="word" data-splitting>
            IDEAS DON’T WORK ALONE. ORVIO WITH
          </p>
          <p className="word" data-splitting>
            YOU IN EVERY STEP, EVERY PIXEL.
          </p>
          <p className="word" data-splitting>
            BIG IDEAS DESERVE BOLD PARTNERS.
          </p>
        </div>

        {/* Video inside text effect */}
        <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
          <video
            src="/image/about.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
          <h1 className="relative z-10 w-full text-center text-[18vw] font-extrabold leading-[1] text-white mix-blend-darken bg-black">
            2016
          </h1>
        </div>
      </div>

      {/* Animation + CSS */}
      <style jsx global>{`
        .word .char {
          display: inline-block;
          transform-origin: center;
          animation: flip 2.2s ease infinite;
          animation-delay: calc(var(--char-index) * 0.05s);
        }

        @keyframes flip {
          0%,
          25% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(90deg);
            opacity: 0.5;
          }
          75%,
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
