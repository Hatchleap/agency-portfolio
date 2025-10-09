
// "use client";
// import React from "react";

// const MarqueeSlope = () => {
//   return (
//   <div className="w-full overflow-hidden py-8 md:py-20 2xl:py-32 bg-white">
//       {/* Top Marquee: Slope right, white bg, black text, right-to-left */}
//       <div
//         className="relative"
//         style={{ transform: "rotate(7deg)" }}
//       >
//         <div className="absolute inset-0 bg-white" style={{ zIndex: 1 }} />
//         <div
//           className="relative whitespace-nowrap flex items-center"
//           style={{ zIndex: 2, animation: "marquee-rtl 18s linear infinite" }}
//         >
//           <span className="font-bold tracking-tight px-8 py-2 text-black border-2 border-black rounded-full bg-white mr-4" style={{ fontSize: 'clamp(1.1rem, 2vw, 3rem)' }}>
//             UNIQUE DESIGN
//           </span>
//           <span className="font-bold tracking-tight px-8 py-2 text-black border-2 border-black rounded-full bg-white mr-4" style={{ fontSize: 'clamp(1.1rem, 2vw, 3rem)' }}>
//             PREMIUM SUPPORT
//           </span>
//           <span className="font-bold tracking-tight px-8 py-2 text-black border-2 border-black rounded-full bg-white mr-4" style={{ fontSize: 'clamp(1.1rem, 2vw, 3rem)' }}>
//             FAST DELIVERY
//           </span>
//           <span className="font-bold tracking-tight px-8 py-2 text-black border-2 border-black rounded-full bg-white mr-4" style={{ fontSize: 'clamp(1.1rem, 2vw, 3rem)' }}>
//             INNOVATIVE IDEAS
//           </span>
//           <span className="font-bold tracking-tight px-8 py-2 text-black border-2 border-black rounded-full bg-white mr-4" style={{ fontSize: 'clamp(1.1rem, 2vw, 3rem)' }}>
//             UNIQUE DESIGN
//           </span>
//           <span className="font-bold tracking-tight px-8 py-2 text-black border-2 border-black rounded-full bg-white mr-4" style={{ fontSize: 'clamp(1.1rem, 2vw, 3rem)' }}>
//             PREMIUM SUPPORT
//           </span>
//         </div>
//       </div>
//       {/* Bottom Marquee: Slope left, black bg, white/green text */}
//       <div
//         className="relative mt-[-2.5rem] md:mt-[-3.5rem] 2xl:mt-[-5rem]"
//         style={{ transform: "rotate(-7deg)" }}
//       >
//         <div className="absolute inset-0 bg-black" style={{ zIndex: 1 }} />
//         <div
//           className="relative whitespace-nowrap flex items-center"
//           style={{ zIndex: 2, animation: "marquee-ltr 18s linear infinite" }}
//         >
//           <span className="font-extrabold tracking-tight px-8 py-2 text-white" style={{ letterSpacing: "0.02em", fontSize: 'clamp(2rem, 6vw, 7rem)' }}>
//             WHY <span className="text-lime-400">US?</span> WHY <span className="text-lime-400">US?</span> WHY <span className="text-lime-400">US?</span> WHY <span className="text-lime-400">US?</span>
//           </span>
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes marquee-ltr {
//           0% { transform: translateX(-40%); }
//           100% { transform: translateX(0%); }
//         }
//         @keyframes marquee-rtl {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-40%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MarqueeSlope;




"use client";
import React from "react";

const MarqueeSlope = () => {
  return (
    <div
      className={`
        w-full overflow-hidden bg-white py-8 md:py-20 2xl:py-36 3xl:py-44 5xl:py-80
        min-h-[72px] sm:min-h-[96px] md:min-h-[120px]
        2xl:min-h-[250px] 3xl:min-h-[500px] 5xl:min-h-[500px]
      `}
    >
      {/* Top Marquee: Slope right, white bg, black text, right-to-left */}
      <div className="relative" style={{ transform: "rotate(7deg)" }}>
        <div className="absolute inset-0 bg-white" style={{ zIndex: 1 }} />
        <div
          className="relative whitespace-nowrap flex items-center"
          style={{ zIndex: 2, animation: "marquee-rtl 18s linear infinite" }}
        >
          {["UNIQUE DESIGN","PREMIUM SUPPORT","FAST DELIVERY","INNOVATIVE IDEAS","UNIQUE DESIGN","PREMIUM SUPPORT","UNIQUE DESIGN","PREMIUM SUPPORT","FAST DELIVERY","INNOVATIVE IDEAS","UNIQUE DESIGN","PREMIUM SUPPORT"].map((text, idx) => (
            <span
              key={idx}
              className="font-bold tracking-tight px-8 py-2 text-black border-2 border-black rounded-full bg-white mr-4"
              style={{ fontSize: "clamp(1.1rem, 2vw, 3rem)" }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Marquee: Slope left, black bg, white/green text */}
      <div
        className={`
          relative mt-[-2.5rem] md:mt-[-3.5rem] 2xl:mt-[-5rem] 
          3xl:mt-[-6rem] 4xl:mt-[-7rem] 5xl:mt-[-8rem]
        `}
        style={{ transform: "rotate(-7deg)" }}
      >
        <div className="absolute inset-0 bg-black 5xl:bg-black" style={{ zIndex: 1 }} />
        <div
          className="relative whitespace-nowrap flex items-center"
          style={{ zIndex: 2, animation: "marquee-ltr 18s linear infinite" }}
        >
          <span
            className="font-extrabold tracking-tight px-8 py-2 text-white 2xl:text-6xl 3xl:text-9xl 5xl:text-[180px]"
            style={{ letterSpacing: "0.02em" }}
          >
            {Array(16).fill("WHY ").map((word, idx) => (
              <React.Fragment key={idx}>
                {word}<span className="text-lime-400">US?</span>{" "}
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(-40%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-40%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeSlope;

