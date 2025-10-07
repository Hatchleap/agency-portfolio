// "use client";
// import { FaRegUser, FaRegStar, FaRegLightbulb as FaLamp } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaRegUser />,
//     title: "Bold Innovators",
//     desc: "We’re always on the lookout for new ideas, methods, and technologies that can break the mold and elevate your brand.",
//   },
//   {
//     icon: <FaRegStar />,
//     title: "Storytelling Architects",
//     desc: "Stories are the foundation of all great brands, and we’re architects of those stories. Telling Stories That Inspire Action.",
//   },
//   {
//     icon: <FaLamp />,
//     title: "Creative Visionaries",
//     desc: "Turning imagination into reality. We craft unique, inspiring solutions.",
//   },
// ];

// export default function AboutMission() {
//   return (
//     <section
//       className="
//         w-full 
//         max-w-7xl 
//         2xl:max-w-screen-2xl 
//         3xl:max-w-[2000px] 
//         5xl:max-w-[2800px]
//         mx-auto 
//         px-[5%] sm:px-[8%] lg:px-[10%] 3xl:px-[1%] 5xl:px-[1%]
//         py-[10vw] sm:py-[8vw] lg:py-[6vw]
//       "
//     >
//       <div
//         className="
//           grid grid-cols-1 md:grid-cols-3 
//           gap-y-[10vw] md:gap-y-0 
//           md:gap-x-[6vw] 2xl:gap-x-[10vw] 3xl:gap-x-[12vw] 5xl:gap-x-[20vw]
//           text-center
//         "
//       >
//         {features.map((f, i) => (
//           <div
//             key={i}
//             className="flex flex-col items-center max-w-[100%] md:max-w-md 5xl:max-w-xl mx-auto"
//           >
//             {/* ICON */}
//             <div
//               className="
//                 text-black mb-[3vw] 3xl:mb-[2vw] 
//                 text-[clamp(2.5rem,8vw,3.5rem)]
//                 md:text-[clamp(3rem,6vw,1rem)]
//                 2xl:text-[clamp(3.5rem,5vw,1rem)]
//                 3xl:text-[clamp(4rem,4vw,5rem)]
//                 5xl:text-[clamp(4.5rem,3vw,6rem)]
//               "
//             >
//               {f.icon}
//             </div>

//             {/* TITLE */}
//             <h2
//               className="
//               max-w-[100%] 5xl:max-w-[3000px] mx-auto
//                 font-extrabold text-black mb-[1vw]
//                 text-[clamp(1.5rem,6vw,2rem)]
//                 md:text-[clamp(1.8rem,4vw,2rem)]
//                 2xl:text-[clamp(2rem,3vw,2rem)]
//                 3xl:text-[clamp(2.2rem,2.5vw,3rem)]
//                 5xl:text-[clamp(2.5rem,5vw,3.4rem)]
//               "
//               style={{ lineHeight: 1.1 }}
//             >
//               {f.title}
//             </h2>

//             {/* DESCRIPTION */}
//             <p
//               className="
//                 text-gray-700 max-w-[100%] mx-auto
//                 text-[clamp(1rem,4vw,1.1rem)]
//                 md:text-[clamp(1.05rem,2.5vw,1.25rem)]
//                 2xl:text-[clamp(1.15rem,2vw,1rem)]
//                 3xl:text-[clamp(1.2rem,1.8vw,1.7rem)]
//                 5xl:text-[clamp(1.3rem,7vw,2.5rem)]
//               "
//               style={{ lineHeight: 1.6 }}
//             >
//               {f.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }











"use client";
import { FaRegUser, FaRegStar, FaRegLightbulb as FaLamp } from "react-icons/fa";

const features = [
  {
    icon: <FaRegUser />,
    title: "Bold Innovators",
    desc: "We’re always on the lookout for new ideas, methods, and technologies that can break the mold and elevate your brand.",
  },
  {
    icon: <FaRegStar />,
    title: "Storytelling Architects",
    desc: "Stories are the foundation of all great brands, and we’re architects of those stories. Telling Stories That Inspire Action.",
  },
  {
    icon: <FaLamp />,
    title: "Creative Visionaries",
    desc: "Turning imagination into reality. We craft unique, inspiring solutions.",
  },
];

export default function AboutMission() {
  return (
    <section
      className="
        w-full 
        max-w-7xl 
        2xl:max-w-screen-2xl 
        3xl:max-w-[2000px] 
        5xl:max-w-[90vw]   /* ✅ Stretch wider on 5XL */
        mx-auto 
        px-[5%] sm:px-[8%] lg:px-[10%] 3xl:px-[4%] 5xl:px-[2%] /* ✅ Reduced side padding for 5XL */
        py-[10vw] sm:py-[8vw] lg:py-[6vw]
      "
    >
      <div
        className="
          grid grid-cols-1 md:grid-cols-3 
          gap-y-[10vw] md:gap-y-0 
          md:gap-x-[6vw] 2xl:gap-x-[10vw] 3xl:gap-x-[12vw] 5xl:gap-x-[1vw] /* ✅ Wider gap for 5XL */
          text-center
        "
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center 
              max-w-[100%] md:max-w-md 3xl:max-w-lg 5xl:max-w-[100%] mx-auto /* ✅ Allow content to stretch */
            "
          >
            {/* ICON */}
            <div
              className="
                text-black mb-[3vw] 3xl:mb-[2vw] 
                text-[clamp(2.5rem,8vw,3.5rem)]
                md:text-[clamp(3rem,6vw,1rem)]
                2xl:text-[clamp(3.5rem,5vw,1.5rem)]
                3xl:text-[clamp(4rem,4vw,5rem)]
                5xl:text-[clamp(4.5rem,3vw,10rem)]
              "
            >
              {f.icon}
            </div>

            {/* TITLE */}
            <h2
              className="
                font-extrabold text-black mb-[1vw]
                text-[clamp(1.5rem,6vw,2rem)]
                md:text-[clamp(1.8rem,4vw,2.4rem)]
                2xl:text-[clamp(2rem,3vw,2rem)]
                3xl:text-[clamp(2.2rem,2.5vw,3rem)]
                5xl:text-[clamp(2.5rem,2vw,5rem)]
              "
              style={{ lineHeight: 1.1 }}
            >
              {f.title}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-gray-700 mx-auto
                max-w-[90%] md:max-w-[100%] 2xl:max-w-[100%] 3xl:max-w-[100%] 5xl:max-w-[70%] 5xl/* ✅ Stretch text width gradually */
                text-[clamp(1rem,4vw,1.1rem)]
                md:text-[clamp(1.05rem,2.5vw,1.25rem)]
                2xl:text-[clamp(1.15rem,2vw,1rem)]
                3xl:text-[clamp(1.2rem,1.8vw,1.45rem)]
                5xl:text-[clamp(1.3rem,1.5vw,3rem)]
              "
              style={{ lineHeight: 1.6 }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
