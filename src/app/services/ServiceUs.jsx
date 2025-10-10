
// "use client";
// import React from "react";
// import {
//   FaCheckCircle,
//   FaCogs,
//   FaUserTie,
//   FaComments,
//   FaHeadset,
//   FaIndustry,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaCheckCircle />,
//     title: "Proven Track Record",
//     desc: "We have built a reputation as a trusted and reliable partner in achieving business success.",
//   },
//   {
//     icon: <FaCogs />,
//     title: "Tailored Solutions",
//     desc: "We offer personalized solutions tailored to your specific goals, audience, and industry.",
//   },
//   {
//     icon: <FaUserTie />,
//     title: "Client-Centric Focus",
//     desc: "Your success is our priority. We prioritize understanding your business goals.",
//   },
//   {
//     icon: <FaComments />,
//     title: "Transparent Communication",
//     desc: "We believe in open and honest communication every step of the way.",
//   },
//   {
//     icon: <FaHeadset />,
//     title: "Dedicated Support",
//     desc: "Your success is our priority, and we’re here to support you every step of the way.",
//   },
//   {
//     icon: <FaIndustry />,
//     title: "Expertise Across Industries",
//     desc: "Our team has extensive experience working across various industries.",
//   },
// ];

// export default function ServiceUs() {
//   return (
//     <section className="w-full bg-white text-gray-900 py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
//       <div className="max-w-[1600px] mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <p className="text-orange-500 tracking-widest font-semibold mb-2 text-sm md:text-base">
//             WHY CHOOSE US
//           </p>
//           <h2
//             className="font-extrabold leading-tight"
//             style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
//           >
//             Why we are your best choice
//           </h2>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center bg-white rounded-2xl p-6 sm:p-8 hover:bg-orange-50 transition-all duration-300 border border-gray-200 w-full min-h-[180px] md:min-h-[200px] lg:min-h-[220px]"
//             >
//               {/* Icon */}
//               <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-orange-100 text-orange-500 text-3xl sm:text-4xl md:text-5xl mb-4">
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3
//                 className="font-semibold mb-2 text-gray-900"
//                 style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}
//               >
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p
//                 className="text-gray-600 leading-relaxed max-w-[90%]"
//                 style={{ fontSize: "clamp(0.9rem, 1vw, 1.1rem)" }}
//               >
//                 {service.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";
import React from "react";
import {
  FaCheckCircle,
  FaCogs,
  FaUserTie,
  FaComments,
  FaHeadset,
  FaIndustry,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCheckCircle />,
    title: "Proven Track Record",
    desc: "We have built a reputation as a trusted and reliable partner in achieving business success.",
  },
  {
    icon: <FaCogs />,
    title: "Tailored Solutions",
    desc: "We offer personalized solutions tailored to your specific goals, audience, and industry.",
  },
  {
    icon: <FaUserTie />,
    title: "Client-Centric Focus",
    desc: "Your success is our priority. We prioritize understanding your business goals.",
  },
  {
    icon: <FaComments />,
    title: "Transparent Communication",
    desc: "We believe in open and honest communication every step of the way.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    desc: "Your success is our priority, and we’re here to support you every step of the way.",
  },
  {
    icon: <FaIndustry />,
    title: "Expertise Across Industries",
    desc: "Our team has extensive experience working across various industries.",
  },
];

export default function ServiceUs() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 tracking-widest font-semibold mb-2 text-sm md:text-base 5xl:text-2xl">
            WHY CHOOSE US
          </p>
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
          >
            Why we are your best choice
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-6 sm:p-8 hover:bg-orange-50 transition-all duration-300 border border-gray-200 w-full min-h-[180px] md:min-h-[200px] lg:min-h-[220px]"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-orange-100 text-orange-500 text-3xl sm:text-4xl md:text-5xl mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-semibold mb-2 text-gray-900 text-[clamp(1.1rem, 1.5vw, 1.4rem)] 3xl:text-2xl 5xl:text-4xl"
                // style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-600 leading-relaxed max-w-[90%] text-[clamp(0.9rem, 1vw, 1.1rem)] 3xl:text-xl 5xl:text-2xl"
                // style={{ fontSize: "clamp(0.9rem, 1vw, 1.1rem)" }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
