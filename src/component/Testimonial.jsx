// "use client";

// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// const Testimonial = () => {
//   const testimonials = [
//     {
//       id: 1,
//       company: "Clutch",
//       companyIcon: "📊",
//       rating: 5.0,
//       stars: 5,
//       quote:
//         "They don't just design pretty things—they understand our market, our audience, and our goals. Every deliverable had purpose behind it. We saw a 40% bump in engagement after launch",
//       author: "BRISH JHONSON",
//       role: "Web Developer",
//     },
//     {
//       id: 2,
//       company: "Dropbox",
//       companyIcon: "📦",
//       rating: 4.5,
//       stars: 4,
//       quote:
//         "Working with Creative Agency changed the game for our brand. From our new visual identity to a killer campaign rollout, they nailed every detail. Clients now feel our message before we even say it",
//       author: "MARRY JAEN",
//       role: "Web Designer",
//     },
//     {
//       id: 3,
//       company: "Google",
//       companyIcon: "🔍",
//       rating: 5.0,
//       stars: 5,
//       quote:
//         "Their team delivered beyond expectations. The new site is fast, beautiful, and converts better than ever. We’re thrilled!",
//       author: "SAMUEL LEE",
//       role: "Product Manager",
//     },
//     {
//       id: 4,
//       company: "Amazon",
//       companyIcon: "🛒",
//       rating: 4.8,
//       stars: 5,
//       quote:
//         "Professional, creative, and always on time. Our e-commerce sales increased by 30% after the redesign.",
//       author: "LINDA SMITH",
//       role: "Marketing Lead",
//     },
//   ];

//   const [itemsToShow, setItemsToShow] = useState(2);
//   const [currentSet, setCurrentSet] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setItemsToShow(window.innerWidth < 1024 ? 1 : 2); // < lg = 1, else 2
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const totalSets = Math.ceil(testimonials.length / itemsToShow);
//     const interval = setInterval(() => {
//       setCurrentSet((prev) => (prev + 1) % totalSets);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [itemsToShow, testimonials.length]);

//   const renderStars = (count, filled) => {
//     return [...Array(5)].map((_, i) => (
//       <span
//         key={i}
//         className={`text-sm md:text-base lg:text-xl ${
//           i < filled ? "text-orange-400" : "text-gray-600"
//         }`}
//       >
//         ★
//       </span>
//     ));
//   };

//   const visibleTestimonials = testimonials.slice(
//     currentSet * itemsToShow,
//     currentSet * itemsToShow + itemsToShow
//   );

//   const totalSets = Math.ceil(testimonials.length / itemsToShow);
//   const prevTestimonial = () => {
//     setCurrentSet((prev) => (prev === 0 ? totalSets - 1 : prev - 1));
//   };
//   const nextTestimonial = () => {
//     setCurrentSet((prev) => (prev === totalSets - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-8 py-10 md:py-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12 mb-12 md:mb-16">
//           <div className="flex-1">
//             <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-6">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
//                 WHAT
//               </h1>
//               <div className="bg-lime-400 rounded-full p-2 sm:p-3">
//                 <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
//               </div>
//               <button className="bg-lime-400 text-black px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-lime-300 transition-colors">
//                 VIEW ALL REVIEWS
//               </button>
//             </div>
//             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
//               OUR CLIENTS SAY
//             </h2>
//           </div>

//           <div className="text-left lg:text-right text-gray-300 max-w-md">
//             <p className="text-base sm:text-lg leading-relaxed">
//               Global brands, disruptive startups, nonprofits,
//             </p>
//             <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
//               tech innovators, lifestyle labels, and more
//             </p>
//             <p className="text-sm sm:text-base">
//               Want to see what we can create together.
//             </p>
//           </div>
//         </div>

//         {/* Stats + Testimonials */}
//         <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
//           {/* Left - Stats */}
//           <div className="lg:w-1/3 w-full">
//             <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 md:p-8">
//               <div className="text-center lg:text-left mb-8">
//                 <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-3">
//                   25K
//                 </div>
//                 <div className="text-base sm:text-lg md:text-xl font-semibold tracking-wide">
//                   CUSTOMER REVIEWS
//                 </div>
//               </div>

//               <div className="text-center lg:text-left">
//                 <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
//                   Clutch
//                 </div>
//                 <div className="flex justify-center lg:justify-start items-center gap-1 sm:gap-2 mb-6">
//                   {renderStars(5, 5)}
//                   <span className="text-sm sm:text-base md:text-xl ml-1 sm:ml-2">
//                     5.0
//                   </span>
//                 </div>

//                 <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
//                   <button
//                     onClick={prevTestimonial}
//                     className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-lime-400 transition-colors"
//                   >
//                     <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//                   </button>
//                   <button
//                     onClick={nextTestimonial}
//                     className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-lime-400 transition-colors"
//                   >
//                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right - Testimonials */}
//           <div className="lg:w-2/3 w-full flex flex-col md:flex-row gap-6 md:gap-8">
//             {visibleTestimonials.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="transition-all duration-500 flex-1"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl">
//                     {testimonial.companyIcon}
//                   </div>
//                   <div className="flex">{renderStars(5, testimonial.stars)}</div>
//                 </div>

//                 <blockquote className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
//                   "{testimonial.quote}"
//                 </blockquote>

//                 <div>
//                   <div className="font-bold text-sm sm:text-base md:text-lg mb-1">
//                     {testimonial.author}
//                   </div>
//                   <div className="text-gray-400 text-xs sm:text-sm md:text-base">
//                     {testimonial.role}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;





"use client";

import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaBuilding,
  FaRegSmile,
} from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      company: "Clutch",
      companyIcon: <FaBuilding />,
      rating: 5.0,
      stars: 5,
      quote:
        "They don't just design pretty things—they understand our market, our audience, and our goals. Every deliverable had purpose behind it. We saw a 40% bump in engagement after launch.",
      author: "BRISH JHONSON",
      role: "Web Developer",
    },
    {
      id: 2,
      company: "Dropbox",
      companyIcon: <FaBuilding />,
      rating: 4.5,
      stars: 4,
      quote:
        "Working with Creative Agency changed the game for our brand. From our new visual identity to a killer campaign rollout, they nailed every detail. Clients now feel our message before we even say it.",
      author: "MARRY JAEN",
      role: "Web Designer",
    },
    {
      id: 3,
      company: "Google",
      companyIcon: <FaBuilding />,
      rating: 5.0,
      stars: 5,
      quote:
        "Their team delivered beyond expectations. The new site is fast, beautiful, and converts better than ever. We’re thrilled!",
      author: "SAMUEL LEE",
      role: "Product Manager",
    },
    {
      id: 4,
      company: "Amazon",
      companyIcon: <FaBuilding />,
      rating: 4.8,
      stars: 5,
      quote:
        "Professional, creative, and always on time. Our e-commerce sales increased by 30% after the redesign.",
      author: "LINDA SMITH",
      role: "Marketing Lead",
    },
  ];

  const [itemsToShow, setItemsToShow] = useState(2);
  const [currentSet, setCurrentSet] = useState(0);

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 2560) setItemsToShow(3);
      else if (window.innerWidth >= 1920) setItemsToShow(2);
      else if (window.innerWidth >= 1024) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const totalSets = Math.ceil(testimonials.length / itemsToShow);
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 6000);
    return () => clearInterval(interval);
  }, [itemsToShow, testimonials.length]);

  const renderStars = (count) =>
    [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`${
          i < count ? "text-orange-300" : "text-gray-300"
        } text-base sm:text-lg lg:text-xl`}
      />
    ));

  const visibleTestimonials = testimonials.slice(
    currentSet * itemsToShow,
    currentSet * itemsToShow + itemsToShow
  );

  const totalSets = Math.ceil(testimonials.length / itemsToShow);
  const prevTestimonial = () => {
    setCurrentSet((prev) => (prev === 0 ? totalSets - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setCurrentSet((prev) => (prev === totalSets - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen 3xl:min-h-[60vh] 5xl:min-h-[60vh] px-6 sm:px-10 md:px-14 lg:px-20 3xl:px-40 5xl:px-64 py-12 md:py-20">
      <div className="max-w-7xl 3xl:max-w-[100%] 5xl:max-w-[100%] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 mb-12 md:mb-20">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900">
                WHAT
              </h1>
              <div className="bg-orange-400 rounded-full p-3 shadow-md">
                <FaExternalLinkAlt className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <button className="bg-orange-400 text-black px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-orange-300 transition-colors shadow-md">
                VIEW ALL REVIEWS
              </button>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900">
              OUR CLIENTS SAY
            </h2>
          </div>

          <div className="text-left lg:text-right text-gray-600 max-w-md 3xl:max-w-full 5xl:max-w-full">
            <p className="text-base sm:text-lg 3xl:text-4xl 5xl:text-4xl leading-relaxed">
              Global brands, disruptive startups, nonprofits,
            </p>
            <p className="text-base sm:text-lg 3xl:text-4xl 5xl:text-4xl leading-relaxed mb-4">
              tech innovators, and lifestyle labels.
            </p>
            <p className="text-sm sm:text-base 3xl:text-4xl 5xl:text-4xl">
              Want to see what we can create together?
            </p>
          </div>
        </div>

        {/* Stats + Testimonials */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-14 items-start">
          {/* Left Stats Card */}
          <div className="lg:w-1/3 w-full">
            {/* <div className="bg-gray-100 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 items-center justify-center">
              <div className="text-center lg:text-left mb-8">
                <div className="text-6xl sm:text-8xl font-extrabold mb-3 text-gray-900">
                  25K
                </div>
                <div className="text-lg sm:text-xl font-semibold tracking-wide text-gray-600">
                  CUSTOMER REVIEWS
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 flex items-center justify-center lg:justify-start gap-2">
                  <FaRegSmile className="text-lime-500" /> Clutch
                </div>
                <div className="flex justify-center lg:justify-start items-center gap-2 mb-6">
                  {renderStars(5)}
                  <span className="text-base sm:text-lg text-gray-700 ml-1">5.0</span>
                </div>

                <div className="flex justify-center lg:justify-start gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-lime-400 hover:bg-lime-50 transition-colors"
                  >
                    <FaChevronLeft className="text-gray-700" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-lime-400 hover:bg-lime-50 transition-colors"
                  >
                    <FaChevronRight className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div> */}
            <div className="bg-gray-100 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="mb-8">
                <div className="text-6xl sm:text-8xl font-extrabold mb-3 text-gray-900">
                  25K
                </div>
                <div className="text-lg sm:text-xl font-semibold tracking-wide text-gray-600">
                  CUSTOMER REVIEWS
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 flex items-center justify-center gap-2">
                  <FaRegSmile className="text-orange-500" /> Clutch
                </div>
                <div className="flex justify-center items-center gap-2 mb-6">
                  {renderStars(5)}
                  <span className="text-base sm:text-lg text-gray-700 ml-1">5.0</span>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-colors"
                  >
                    <FaChevronLeft className="text-gray-700" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-colors"
                  >
                    <FaChevronRight className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Testimonials */}
          <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6 3xl:gap-10">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="transition-all duration-500 bg-gray-50 hover:bg-orange-50 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl">
                    {testimonial.companyIcon}
                  </div>
                  <div className="flex">{renderStars(testimonial.stars)}</div>
                </div>

                <blockquote className="text-sm sm:text-base md:text-lg 5xl:text-2xl leading-relaxed text-gray-700 mb-6 italic">
                  “{testimonial.quote}”
                </blockquote>

                <div>
                  <div className="font-bold text-base sm:text-lg 5xl:text-xl text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm sm:text-base 5xl:text-lg">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
