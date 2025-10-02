// "use client";
// import React from "react";
// import Image from "next/image";

// export default function AboutUs() {
//   return (
//     <section className="relative w-full bg-lime-400 py-12 sm:py-16 lg:py-24">
//       <div className="max-w-7xl 2xl:max-w-screen-2xl 4xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 4xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
//         {/* Left Content */}
//         <div className="text-black flex flex-col justify-center">
//           <h1
//             className="font-extrabold leading-tight mb-6"
//             style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
//           >
//             WELCOME TO <br /> BLUNOR INC.
//           </h1>

//           {/* Experience Row */}
//           <div className="flex items-center mb-6 space-x-4">
//             <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-lg font-bold">
//               🌿
//             </div>
//             <div>
//               <p className="font-bold text-lg sm:text-xl md:text-2xl">
//                 30+ <span className="font-medium">Years Experience</span>
//               </p>
//             </div>
//           </div>

//           {/* Description */}
//           <p
//             className="text-base sm:text-lg text-black/80 mb-8 max-w-lg"
//             style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}
//           >
//             We’re brand builders, storytellers, and digital architects crafting
//             experiences that connect, convert, and cut through the noise. From
//             strategy to execution, we blend creativity with precision to help
//             ambitious brands move differently and grow boldly.
//           </p>

//           {/* CTA Button */}
//           <button className="bg-black text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base transition hover:bg-gray-800">
//             START A PROJECT
//           </button>
//         </div>

//         {/* Right Side - Masked Number with Image */}
//         <div className="relative flex items-center justify-center h-full">
//           <div className="relative w-full h-full flex items-center justify-center">
//             <div
//               className="w-full h-full flex items-center justify-center"
//               style={{
//                 WebkitMaskImage:
//                   "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 300%22><text x=%2250%22 y=%22220%22 font-size=%22200%22 font-weight=%22700%22>10</text></svg>')",
//                 WebkitMaskRepeat: "no-repeat",
//                 WebkitMaskPosition: "center",
//                 WebkitMaskSize: "contain",
//                 maskImage:
//                   "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 500 300%22><text x=%2250%22 y=%22220%22 font-size=%22200%22 font-weight=%22700%22>10</text></svg>')",
//                 maskRepeat: "no-repeat",
//                 maskPosition: "center",
//                 maskSize: "contain",
//               }}
//             >
//               <Image
//                 src="/image/b.jpeg"
//                 alt="About Us"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
