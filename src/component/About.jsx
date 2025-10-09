// "use client";

// import React, { useEffect } from "react";
// import Image from "next/image";

// const About = () => {
//   useEffect(() => {
//     import("splitting").then(({ default: Splitting }) => {
//       Splitting();
//     });
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-white text-black flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 overflow-hidden">
//       {/* Left Section */}
//       <div className="relative z-20 w-full md:w-1/2 flex flex-col gap-6">
//         <div className="flex items-center gap-3">
//           <span className="w-8 h-2 bg-orange-500 rounded-full"></span>
//           <h3 className="text-lg md:text-xl font-medium">About Our Company</h3>
//         </div>

//         <div className="relative z-20">
//           <p className="text-gray-800 max-w-md leading-relaxed mt-4">
//             We are not just creators — we are forces of nature. Amet lectus
//             sagittis blandit egestas pellentesque molestie odio et massa.
//             Facilisis facilisis ac vestibulum tincidunt.
//           </p>

//           <button className="mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
//             Explore More
//           </button>
//         </div>

//         <div className="absolute top-28 left-0 md:static opacity-20 md:opacity-100 -z-10 md:z-10 mt-6 md:mt-0">
//           <Image
//             src="/image/shfh.png"
//             alt="Vector"
//             width={400}
//             height={400}
//             className="object-contain text-gray-800"
//           />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start gap-12 mt-12 md:mt-0">
//         <div className="words space-y-3 text-4xl md:text-5xl font-bold">
//           <p className="word" data-splitting>
//             IDEAS DON’T WORK ALONE. ORVIO WITH
//           </p>
//           <p className="word" data-splitting>
//             YOU IN EVERY STEP, EVERY PIXEL.
//           </p>
//           <p className="word" data-splitting>
//             BIG IDEAS DESERVE BOLD PARTNERS.
//           </p>
//         </div>

//         {/* Video inside text effect */}
//         <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
//           <video
//             src="/image/about.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           ></video>
//           <h1 className="relative z-10 w-full text-center text-[18vw] font-extrabold leading-[1] text-white mix-blend-darken bg-black">
//             2016
//           </h1>
//         </div>
//       </div>

//       {/* Animation + CSS */}
//       <style jsx global>{`
//         .word .char {
//           display: inline-block;
//           transform-origin: center;
//           animation: flip 2.2s ease infinite;
//           animation-delay: calc(var(--char-index) * 0.05s);
//         }

//         @keyframes flip {
//           0%,
//           25% {
//             transform: rotateX(0deg);
//           }
//           50% {
//             transform: rotateX(90deg);
//             opacity: 0.5;
//           }
//           75%,
//           100% {
//             transform: rotateX(0deg);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default About;




// "use client";

// import React from "react";
// import Image from "next/image";
// import { Lightbulb, Sparkles, Award } from "lucide-react"; // icons

// const About = () => {
//   return (
//     <section className="w-full bg-white text-black py-12 px-6 md:px-16">
//       {/* Top Text */}
//       <div className="text-center mb-10">
//         <p className="text-xs tracking-widest uppercase mb-2">
//           We bring your <span className="underline">vision</span> to life
//         </p>
//         <h2 className="text-2xl md:text-3xl font-bold">
//           YOUR PARTNERS IN DIGITAL SUCCESS
//         </h2>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-2 md:flex md:justify-center md:gap-8 gap-4 mb-12">
//         {/* Card 1 */}
//         <div className="relative">
//           <div className="absolute -top-2 -left-2 w-full h-full border rounded-xl"></div>
//           <Image
//             src="/image/e.jpeg"
//             alt="Innovation"
//             width={250}
//             height={350}
//             className="rounded-xl object-cover relative z-10"
//           />
//         </div>

//         {/* Card 2 */}
//         <div className="relative">
//           <div className="absolute -top-2 -left-2 w-full h-full border rounded-xl"></div>
//           <Image
//             src="/image/e.jpeg"
//             alt="Creativity"
//             width={280}
//             height={380}
//             className="rounded-xl object-cover relative z-10"
//           />
//         </div>

//         {/* Card 3 */}
//         <div className="relative">
//           <div className="absolute -top-2 -left-2 w-full h-full border rounded-xl"></div>
//           <Image
//             src="/image/e.jpeg"
//             alt="Workspace"
//             width={300}
//             height={220}
//             className="rounded-xl object-cover relative z-10"
//           />
//         </div>

//         {/* Card 4 */}
//         <div className="relative">
//           <div className="absolute -top-2 -left-2 w-full h-full border rounded-xl"></div>
//           <Image
//             src="/image/e.jpeg"
//             alt="Quality"
//             width={280}
//             height={360}
//             className="rounded-xl object-cover relative z-10"
//           />
//         </div>
//       </div>

//       {/* Bottom Features */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//         {/* Innovation */}
//         <div>
//           <Lightbulb className="w-8 h-8 mx-auto mb-4" />
//           <p className="font-bold mb-2">INNOVATION</p>
//           <p className="text-sm text-gray-600">
//             Pushing boundaries and embrace fresh ideas, cutting-edge technology.
//           </p>
//         </div>

//         {/* Creativity */}
//         <div>
//           <Sparkles className="w-8 h-8 mx-auto mb-4" />
//           <p className="font-bold mb-2">CREATIVITY</p>
//           <p className="text-sm text-gray-600">
//             Turning imagination into reality. We craft unique, inspiring
//             solutions.
//           </p>
//         </div>

//         {/* Quality */}
//         <div>
//           <Award className="w-8 h-8 mx-auto mb-4" />
//           <p className="font-bold mb-2">QUALITY</p>
//           <p className="text-sm text-gray-600">
//             We are committed to delivering work that meets highest standards.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




"use client";

import React from "react";
import Image from "next/image";
import { Lightbulb, Sparkles, Award } from "lucide-react";

const About = () => {
  return (
    <section className="w-full bg-white text-black py-12 px-4 sm:px-6 md:px-12 lg:px-20 2xl:px-40">
      {/* Top Text */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <p className="text-[clamp(0.7rem,1.2vw,0.9rem)] 5xl:text-xl tracking-widest uppercase mb-2">
          We bring your <span className="underline">vision</span> to life
        </p>
        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] md:text-[clamp(2rem,3vw,3rem)] font-bold leading-tight">
          YOUR PARTNERS IN DIGITAL SUCCESS
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 justify-items-center">
        {[250, 280, 300, 280].map((width, idx) => (
          <div key={idx} className="relative w-full max-w-[20rem] sm:max-w-[22rem] 5xl:max-w-[45rem] md:max-w-full">
            <div className="absolute -top-2 -left-2 w-full h-full border rounded-xl"></div>
            <Image
              src="/image/e.jpeg"
              alt={`Card ${idx + 1}`}
              width={width}
              height={width * 1.2}
              className="rounded-xl object-cover w-full h-auto relative z-10"
            />
          </div>
        ))}
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center
                max-w-6xl mx-auto 3xl:max-w-full 3xl:px-52 3xl:gap-16
                5xl:max-w-full 5xl:px-40 5xl:gap-16">
  {/* Feature Cards */}
  {[
    { icon: Lightbulb, title: "INNOVATION", desc: "Pushing boundaries and embracing fresh ideas, cutting-edge technology." },
    { icon: Sparkles, title: "CREATIVITY", desc: "Turning imagination into reality. We craft unique, inspiring solutions." },
    { icon: Award, title: "QUALITY", desc: "We are committed to delivering work that meets highest standards." },
  ].map((feature, idx) => (
    <div key={idx} className="px-4 sm:px-6 5xl:px-12 5xl:py-10 5xl:w-full">
      <feature.icon className="w-12 h-12 3xl:w-16 3xl:h-16 5xl:w-20 5xl:h-20 mx-auto mb-4 text-orange-500" />
      <p className="font-bold text-lg sm:text-xl 3xl:text-3xl 5xl:text-5xl mb-2">{feature.title}</p>
      <p className="text-[clamp(0.8rem,1.2vw,1rem)] 3xl:text-xl 5xl:text-3xl text-gray-600">{feature.desc}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default About;
