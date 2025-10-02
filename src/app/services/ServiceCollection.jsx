// "use client";
// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// // JSON data for cards
// const cards = [
//   {
//     id: 1,
//     title: "PRODUCT DESIGN",
//     features: [
//       "Branding And Identity",
//       "User Interface Design",
//       "Graphic Design",
//       "UI/UX Design",
//       "Information Architecture",
//       "Wireframe",
//     ],
//     image: "/image/b.jpeg",
//   },
//   {
//     id: 2,
//     title: "WEB DEVELOPMENT",
//     features: [
//       "Responsive Websites",
//       "Next.js & React",
//       "Backend Integration",
//       "API Development",
//       "SEO Optimization",
//       "E-commerce Solutions",
//     ],
//     image: "/image/b.jpeg",
//   },
//   {
//     id: 3,
//     title: "DIGITAL MARKETING",
//     features: [
//       "Social Media Marketing",
//       "Email Campaigns",
//       "Pay-Per-Click Ads",
//       "SEO Strategy",
//       "Content Marketing",
//       "Analytics Reports",
//     ],
//     image: "/image/b.jpeg",
//   },
//   {
//     id: 4,
//     title: "MOBILE APP DESIGN",
//     features: [
//       "iOS Apps",
//       "Android Apps",
//       "Cross-platform",
//       "UI/UX for Apps",
//       "App Prototyping",
//       "Testing & QA",
//     ],
//     image: "/image/b.jpeg",
//   },
//   {
//     id: 5,
//     title: "BRANDING SOLUTIONS",
//     features: [
//       "Logo Design",
//       "Brand Guidelines",
//       "Print Design",
//       "Packaging Design",
//       "Corporate Identity",
//       "Creative Strategy",
//     ],
//     image: "/image/b.jpeg",
//   },
// ];

// /* Stacked Card Component */
// const StackedCard = ({ card, index, scrollYProgress, isLast }) => {
//   // Each card moves slightly differently
//   const y = useTransform(scrollYProgress, [0, 1], [index * 60, -index * 30]);

//   // Only first N-1 cards are sticky, last card is static
//   const stickyClass = isLast ? "relative" : "sticky top-20";

//   return (
//     <motion.div
//       style={isLast ? {} : { y }}
//       transition={{ type: "spring", stiffness: 100, damping: 20 }}
//       className={`${stickyClass} z-10 will-change-transform`}
//     >
//       <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-12">
//         {/* Left Text Section */}
//         <div className="flex-1 p-8 md:p-12">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
//             {card.title}
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-gray-700 mb-8">
//             {card.features.map((feature, i) => (
//               <p
//                 key={i}
//                 className="flex items-start space-x-2 text-base md:text-lg"
//               >
//                 <span className="text-black">•</span>
//                 <span>{feature}</span>
//               </p>
//             ))}
//           </div>

//           <button className="flex items-center space-x-2 bg-lime-400 hover:bg-lime-500 transition text-black font-semibold rounded-full px-6 py-3">
//             <span>→</span>
//             <span>MORE DETAILS</span>
//           </button>
//         </div>

//         {/* Right Image Section */}
//         <div className="flex-1 w-full h-[300px] md:h-[400px] 2xl:h-[450px] relative">
//           <Image
//             src={card.image}
//             alt={card.title}
//             fill
//             className="object-cover rounded-2xl p-2"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ServiceSectionHeading = () => (
//   <div className="w-full flex items-center justify-center py-6 md:py-10 bg-transparent">
//     {/* Left spinning sphere (md and up only) */}
//     <div className="hidden md:block md:mr-6 2xl:mr-12 animate-spin-slow">
//       <Image
//         src="/image/sphere.png"
//         alt="Sphere Left"
//         width={64}
//         height={64}
//         className="w-12 h-12 md:w-16 md:h-16 2xl:w-24 2xl:h-24"
//       />
//     </div>
//     {/* Heading */}
//     <h2 className="text-center font-extrabold text-black text-2xl xs:text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl tracking-tight mx-2 md:mx-8 whitespace-nowrap">
//       PROFESSIONAL SERVICES
//     </h2>
//     {/* Right spinning sphere (md and up only) */}
//     <div className="hidden md:block md:ml-6 2xl:ml-12 animate-spin-slow">
//       <Image
//         src="/image/sphere.png"
//         alt="Sphere Right"
//         width={64}
//         height={64}
//         className="w-12 h-12 md:w-16 md:h-16 2xl:w-24 2xl:h-24"
//       />
//     </div>
//     <style jsx global>{`
//       @keyframes spin-slow {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }
//       .animate-spin-slow {
//         animation: spin-slow 12s linear infinite;
//       }
//     `}</style>
//   </div>
// );

// const ServiceCollection = () => {
//   const containerRef = useRef(null);

//   // Only track scroll progress inside this section
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"], // animation stays inside container only
//   });

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12 relative">
//       {/* Heading stays static */}
//       <ServiceSectionHeading />

//       {/* Stack wrapper (sticky area) */}
//       <div ref={containerRef} className="relative mt-12">
//         {cards.map((card, index) => (
//           <StackedCard
//             key={card.id}
//             card={card}
//             index={index}
//             scrollYProgress={scrollYProgress}
//             isLast={index === cards.length - 1}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServiceCollection;










"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "PRODUCT DESIGN",
    features: [
      "Branding And Identity",
      "User Interface Design",
      "Graphic Design",
      "UI/UX Design",
      "Information Architecture",
      "Wireframe",
    ],
    image: "/image/b.jpeg",
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT",
    features: [
      "Responsive Websites",
      "Next.js & React",
      "Backend Integration",
      "API Development",
      "SEO Optimization",
      "E-commerce Solutions",
    ],
    image: "/image/b.jpeg",
  },
  {
    id: 3,
    title: "DIGITAL MARKETING",
    features: [
      "Social Media Marketing",
      "Email Campaigns",
      "Pay-Per-Click Ads",
      "SEO Strategy",
      "Content Marketing",
      "Analytics Reports",
    ],
    image: "/image/b.jpeg",
  },
  {
    id: 4,
    title: "MOBILE APP DESIGN",
    features: [
      "iOS Apps",
      "Android Apps",
      "Cross-platform",
      "UI/UX for Apps",
      "App Prototyping",
      "Testing & QA",
    ],
    image: "/image/b.jpeg",
  },
  {
    id: 5,
    title: "BRANDING SOLUTIONS",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Print Design",
      "Packaging Design",
      "Corporate Identity",
      "Creative Strategy",
    ],
    image: "/image/b.jpeg",
  },
];

const StackedCard = ({ card, index, scrollYProgress, isLast }) => {
  const y = useTransform(scrollYProgress, [0, 1], [index * 60, -index * 30]);
  const stickyClass = isLast ? "relative" : "sticky top-20";

  return (
    <motion.div
      style={isLast ? {} : { y }}
      className={`${stickyClass} z-10 will-change-transform`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-8 sm:mb-12">
        
        {/* Left Text */}
        <div className="flex-1 p-6 sm:p-8 md:p-12">
          <h2
            className="font-extrabold text-black mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            {card.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-gray-700 mb-6 sm:mb-8">
            {card.features.map((feature, i) => (
              <p
                key={i}
                className="flex items-start space-x-2 text-sm sm:text-base md:text-lg"
              >
                <span className="text-black">•</span>
                <span>{feature}</span>
              </p>
            ))}
          </div>

          <button className="flex items-center space-x-2 bg-lime-400 hover:bg-lime-500 transition text-black font-semibold rounded-full px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
            <span>→</span>
            <span>MORE DETAILS</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full relative aspect-[4/3] md:aspect-[16/9] max-h-[450px]">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover rounded-2xl p-2"
          />
        </div>
      </div>
    </motion.div>
  );
};

const ServiceSectionHeading = () => (
  <div className="w-full flex items-center justify-center py-6 md:py-10 bg-transparent">
    <div className="hidden md:block md:mr-6 2xl:mr-12 animate-spin-slow">
      <Image
        src="/image/sphere.png"
        alt="Sphere Left"
        width={64}
        height={64}
        className="w-12 h-12 md:w-16 md:h-16 2xl:w-24 2xl:h-24"
      />
    </div>

    <h2
      className="text-center font-extrabold text-black tracking-tight mx-2 md:mx-8 whitespace-nowrap"
      style={{ fontSize: "clamp(1.5rem, 4vw, 4rem)" }}
    >
      PROFESSIONAL SERVICES
    </h2>

    <div className="hidden md:block md:ml-6 2xl:ml-12 animate-spin-slow">
      <Image
        src="/image/sphere.png"
        alt="Sphere Right"
        width={64}
        height={64}
        className="w-12 h-12 md:w-16 md:h-16 2xl:w-24 2xl:h-24"
      />
    </div>

    <style jsx global>{`
      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .animate-spin-slow {
        animation: spin-slow 12s linear infinite;
      }
    `}</style>
  </div>
);

const ServiceCollection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="max-w-7xl 2xl:max-w-screen-2xl 4xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-16 py-10 sm:py-16 2xl:py-24">
      <ServiceSectionHeading />
      <div ref={containerRef} className="relative mt-8 sm:mt-12">
        {cards.map((card, index) => (
          <StackedCard
            key={card.id}
            card={card}
            index={index}
            scrollYProgress={scrollYProgress}
            isLast={index === cards.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceCollection;
