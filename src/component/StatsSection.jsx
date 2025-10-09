// "use client";

// import React from "react";
// import { FaUserFriends, FaProjectDiagram, FaUsers, FaThumbsUp } from "react-icons/fa";

// const StatsSection = () => {
//   return (
//     <section className="w-full bg-white text-black py-12 px-6 md:px-16">
//       {/* Top Heading Section */}
//       <div className="text-center max-w-5xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
//           BRAND VISION{" "}
//           <span className="bg-yellow-300 px-3 py-1 rounded-full font-bold text-black text-sm align-middle mx-2">
//             + DREAM IDEAS +
//           </span>{" "}
//           DESIGN CULTURE YOUR DREAM BUSINESS{" "}
//           <span className="inline-flex items-center mx-2">
//             <img
//               src="/your-image1.png"
//               alt="icon"
//               className="w-10 h-10 inline-block rounded-full"
//             />
//           </span>{" "}
//           AND TECHNICAL{" "}
//           <span className="inline-flex items-center mx-2">
//             <img
//               src="/your-image2.png"
//               alt="icon"
//               className="w-10 h-10 inline-block rounded-full"
//             />
//           </span>{" "}
//           BUILD YOUR BRAND THAT NEED ATTENTION{" "}
//           <span className="bg-yellow-300 px-3 py-1 rounded-full font-bold text-black text-lg align-middle">
//             Ⓟ
//           </span>{" "}
//           & PROMOTION
//         </h2>
//         <p className="text-gray-500 mt-6 text-sm md:text-base">
//           Consequat id porta nibh venenatis cras sed felis eget velit. Ac placerat vestibulum lectus
//           mauris ultrices eros in. Eget mauris pharetra et ultrices neque ornare aenean. Ut ornare
//           lectus sit amet est. Erat imperdiet sed euismod nisi porta. Id venenatis a condimentum
//           vitae. Id aliquet risus feugiat in ante metus dictum at. Accumsan sit amet nulla facilisi
//           morbi tempus iaculis. Platea dictumst quisque sagittis purus sit amet volutpat consequat
//           mauris.
//         </p>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
//         {/* Clients */}
//         <div className="border rounded-lg p-6 flex flex-col items-center  md:flex-row md:justify-center md:text-left md:border-none">
//           <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 mb-4 md:mb-0 md:mr-4">
//             <FaUserFriends className="text-2xl md:text-3xl text-gray-800" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">CLIENTS</h3>
//             <p className="text-xl font-bold">400+</p>
//           </div>
//         </div>

//         {/* Projects */}
//         <div className="border rounded-lg p-6 flex flex-col items-center  md:flex-row md:justify-center md:text-left md:border-none">
//           <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 mb-4 md:mb-0 md:mr-4">
//             <FaProjectDiagram className="text-2xl md:text-3xl text-gray-800" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">PROJECTS</h3>
//             <p className="text-xl font-bold">625+</p>
//           </div>
//         </div>

//         {/* Followers */}
//         <div className="border rounded-lg p-6 flex flex-col items-center  md:flex-row md:justify-center md:text-left md:border-none">
//           <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 mb-4 md:mb-0 md:mr-4">
//             <FaUsers className="text-2xl md:text-3xl text-gray-800" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">FOLLOWERS</h3>
//             <p className="text-xl font-bold">1249+</p>
//           </div>
//         </div>

//         {/* Happy Clients */}
//         <div className="border rounded-lg p-6 flex flex-col items-center  md:flex-row md:justify-center md:text-left md:border-none">
//           <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 mb-4 md:mb-0 md:mr-4">
//             <FaThumbsUp className="text-2xl md:text-3xl text-gray-800" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">HAPPY CLIENTS</h3>
//             <p className="text-xl font-bold">100%</p>
//           </div>
//         </div>
//       </div>

//       {/* Button */}
//       <div className="text-center mt-10">
//         <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition">
//           EXPLORE MORE →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;



"use client";

import React from "react";
import { FaUserFriends, FaProjectDiagram, FaUsers, FaThumbsUp } from "react-icons/fa";

const StatsSection = () => {
  return (
    <section className="w-full bg-white text-black py-8 md:py-12 2xl:py-20 3xl:py-28 5xl:py-40 px-4 sm:px-6 md:px-16 5xl:px-32">
      {/* Top Heading Section */}
      <div className="text-center max-w-4xl md:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 5xl:max-w-[90rem] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 5xl:text-7xl font-extrabold leading-snug">
          BRAND VISION{" "}
          <span className="bg-yellow-300 px-2 sm:px-3 py-1 rounded-full font-bold text-black text-xs sm:text-sm md:text-sm lg:text-base align-middle mx-2">
            + DREAM IDEAS +
          </span>{" "}
          DESIGN CULTURE YOUR DREAM BUSINESS{" "}
          <span className="inline-flex items-center mx-2">
            <img
              src="/your-image1.png"
              alt="icon"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
            />
          </span>{" "}
          AND TECHNICAL{" "}
          <span className="inline-flex items-center mx-2">
            <img
              src="/your-image2.png"
              alt="icon"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
            />
          </span>{" "}
          BUILD YOUR BRAND THAT NEED ATTENTION{" "}
          <span className="bg-yellow-300 px-2 sm:px-3 py-1 rounded-full font-bold text-black text-base sm:text-lg md:text-lg align-middle">
            Ⓟ
          </span>{" "}
          & PROMOTION
        </h2>
        <p className="text-gray-500 mt-4 sm:mt-6 text-xs sm:text-sm md:text-base 2xl:text-lg 3xl:text-xl 5xl:text-3xl 5xl:px-36 leading-relaxed">
          Consequat id porta nibh venenatis cras sed felis eget velit. Ac placerat vestibulum lectus
          mauris ultrices eros in. Eget mauris pharetra et ultrices neque ornare aenean. Ut ornare
          lectus sit amet est. Erat imperdiet sed euismod nisi porta. Id venenatis a condimentum
          vitae. Id aliquet risus feugiat in ante metus dictum at. Accumsan sit amet nulla facilisi
          morbi tempus iaculis. Platea dictumst quisque sagittis purus sit amet volutpat consequat
          mauris.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 2xl:mt-16 3xl:mt-20 5xl:mt-28 text-center">
        {[
          { icon: FaUserFriends, label: "CLIENTS", value: "400+" },
          { icon: FaProjectDiagram, label: "PROJECTS", value: "625+" },
          { icon: FaUsers, label: "FOLLOWERS", value: "1249+" },
          { icon: FaThumbsUp, label: "HAPPY CLIENTS", value: "100%" },
        ].map((stat, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 sm:p-6 md:p-6 flex flex-col items-center md:flex-row md:justify-center md:text-left md:border-none"
          >
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 mb-3 md:mb-0 md:mr-4">
              <stat.icon className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl 5xl:text-8xl text-gray-800" />
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg md:text-lg 2xl:text-xl 3xl:text-2xl 5xl:text-3xl">{stat.label}</h3>
              <p className="text-lg sm:text-xl md:text-xl 2xl:text-2xl 3xl:text-3xl 5xl:text-4xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-6 sm:mt-8 md:mt-10 2xl:mt-12 3xl:mt-16 5xl:mt-20">
        <button className="bg-black text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-3 5xl:px-14 5xl:py-5 rounded-full hover:bg-gray-900 transition text-sm sm:text-base md:text-base 2xl:text-lg 3xl:text-xl 5xl:text-2xl">
          EXPLORE MORE →
        </button>
      </div>
    </section>
  );
};

export default StatsSection;

