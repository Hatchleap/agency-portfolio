// "use client";

// import { useEffect } from "react";

// const Wherecreatesection = () => {
//   useEffect(() => {
//     if (!("IntersectionObserver" in window)) return;

//     const element = document.querySelector(".js-stack-cards");
//     const items = element.querySelectorAll(".js-stack-cards__item");

//     let marginY = parseInt(getComputedStyle(element).getPropertyValue("--stack-cards-gap"));
//     let cardStyle = getComputedStyle(items[0]);
//     let cardTop = parseInt(cardStyle.getPropertyValue("top"));
//     let cardHeight = parseInt(cardStyle.getPropertyValue("height"));
//     let scrolling = false;

//     const animate = () => {
//       if (scrolling) return;
//       scrolling = true;
//       window.requestAnimationFrame(() => {
//         const top = element.getBoundingClientRect().top;
//         items.forEach((item, i) => {
//           let scrollingValue = cardTop - top - i * (cardHeight + marginY);

//           // ✅ Only translateY (no scaling so all cards remain same size)
//           if (scrollingValue > 0) {
//             item.style.transform = `translateY(${marginY * i}px)`;
//           } else {
//             item.style.transform = `translateY(${marginY * i}px)`;
//           }
//         });
//         scrolling = false;
//       });
//     };

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           window.addEventListener("scroll", animate);
//         } else {
//           window.removeEventListener("scroll", animate);
//         }
//       },
//       { threshold: [0, 1] }
//     );

//     observer.observe(element);

//     return () => {
//       window.removeEventListener("scroll", animate);
//       observer.disconnect();
//     };
//   }, []);

//   const images = [
//     { src: "/image/e.jpeg", alt: "Card 1", num: "01" },
//     { src: "/image/b.jpeg", alt: "Card 2", num: "02" },
//     { src: "/image/m.jpeg", alt: "Card 3", num: "03" },
//   ];

//   return (
//     <section className="w-full bg-black text-white flex flex-col gap-8 px-6 md:px-16 py-12 md:py-14">
//       {/* Top Content */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//         <div className="flex-1 flex flex-col items-start justify-center text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
//             WHERE CREATIVITY<br />MEETS STRATEGY
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-full md:max-w-xl">
//             We’re a full-service creative agency built to help brands grow, evolve, and stand out. From startups finding their voice to global brands launching.
//           </p>
//           {/* <div className="flex justify-center items-center gap-4">
//             <button className="flex items-center gap-2 sm:gap-3 bg-lime-400 hover:bg-lime-500 text-black font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow transition">
//               <span className="text-xl sm:text-2xl">↗</span>
//               VIEW ALL SERVICES
//             </button>
//           </div> */}
//           <div className="flex justify-center md:justify-start items-center gap-4 w-full">
//   <button className="flex items-center gap-2 sm:gap-3 bg-lime-400 hover:bg-lime-500 text-black font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow transition">
//     <span className="text-xl sm:text-2xl">↗</span>
//     VIEW ALL SERVICES
//   </button>
// </div>
//         </div>
//         <div className="flex-1 flex items-center justify-center w-full h-[200px] sm:h-[300px] md:h-[400px] relative">
//           <div className="hidden md:flex w-36 h-34 md:w-36 md:h-36 items-center justify-center">
//             <img
//               src="/image/sphere.png"
//               alt="Rotating Sphere"
//               className="animate-spin-slow object-contain w-full h-full"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Stacking Cards */}
//       <div
//         className="js-stack-cards relative w-full max-w-4xl mx-auto py-12 sm:py-16 px-4 md:px-0 flex flex-col items-center"
//         style={{ "--stack-cards-gap": "2rem" }}
//       >
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="js-stack-cards__item sticky top-20 h-0 pb-[80%] flex justify-center"
//           >
//             <div className="flex items-start">
//               {/* Number */}
//               <div className="mr-1 flex-shrink-0 mt-2 flex justify-center items-center">
//                 <div className="bg-black px-2 py-1 rounded">
//                   <span
//                     className="text-[#fff] text-2xl sm:text-3xl md:text-6xl font-extrabold tracking-tight"
//                     style={{ letterSpacing: "-0.05em" }}
//                   >
//                     {img.num}
//                   </span>
//                 </div>
//               </div>

//               {/* Card */}
//               <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[600px] md:w-[800px] md:h-[600px] rounded-2xl border-[6px] sm:border-[8px] md:border-[20px] border-[#333333] shadow-xl overflow-hidden bg-white ml-4">
//                 <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
//                 <div className="absolute left-4 bottom-4">
//                   <button className="bg-lime-400 text-black px-3 sm:px-4 py-2 rounded font-bold shadow hover:bg-lime-500 transition text-xs sm:text-sm">
//                     WEBSITE DEVELOPMENT
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Spin animation */}
//       <style jsx global>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 12s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Wherecreatesection;





"use client";

import { useEffect } from "react";

const Wherecreatesection = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const element = document.querySelector(".js-stack-cards");
    const items = element.querySelectorAll(".js-stack-cards__item");

    let marginY = parseInt(getComputedStyle(element).getPropertyValue("--stack-cards-gap"));
    let cardStyle = getComputedStyle(items[0]);
    let cardTop = parseInt(cardStyle.getPropertyValue("top"));
    let cardHeight = parseInt(cardStyle.getPropertyValue("height"));
    let scrolling = false;

    const animate = () => {
      if (scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(() => {
        const top = element.getBoundingClientRect().top;
        items.forEach((item, i) => {
          let scrollingValue = cardTop - top - i * (cardHeight + marginY);
          item.style.transform = `translateY(${marginY * i}px)`; // consistent translate
        });
        scrolling = false;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.addEventListener("scroll", animate);
        } else {
          window.removeEventListener("scroll", animate);
        }
      },
      { threshold: [0, 1] }
    );

    observer.observe(element);

    return () => {
      window.removeEventListener("scroll", animate);
      observer.disconnect();
    };
  }, []);

  const images = [
    { src: "/image/e.jpeg", alt: "Card 1", num: "01" },
    { src: "/image/b.jpeg", alt: "Card 2", num: "02" },
    { src: "/image/m.jpeg", alt: "Card 3", num: "03" },
  ];

  return (
    // <section className="w-full bg-black text-white flex flex-col gap-8 px-6 md:px-16 2xl:px-32 3xl:px-48 5xl:px-72 py-12 md:py-14 2xl:py-24 3xl:py-12 5xl:py-28">
    <section className="w-full bg-black text-white flex flex-col gap-8 px-6 md:px-16 2xl:px-32 3xl:px-48 5xl:px-72pt-12 md:pt-14 2xl:pt-12 3xl:pt-24 5xl:pt-28 pb-12 md:pb-10 2xl:pb-0 3xl:pb-6 5xl:pb-6">
      {/* Top Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 2xl:gap-16 3xl:gap-24 5xl:gap-32">
        <div className="flex-1 flex flex-col items-start justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl 5xl:text-9xl font-extrabold leading-tight mb-4 sm:mb-6">
            WHERE CREATIVITY<br />MEETS STRATEGY
          </h1>
          <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl 5xl:text-4xl text-gray-300 mb-6 sm:mb-8 max-w-full md:max-w-xl 2xl:max-w-3xl 3xl:max-w-4xl">
            We’re a full-service creative agency built to help brands grow, evolve, and stand out. From startups finding their voice to global brands launching.
          </p>

          <div className="flex justify-center md:justify-start items-center gap-4 w-full">
            <button className="flex items-center gap-2 sm:gap-3 bg-orange-400 hover:bg-orange-500 text-black font-bold text-sm sm:text-lg 2xl:text-lg 3xl:text-2xl 5xl:text-3xl px-4 sm:px-4 2xl:px-6 3xl:px-12 5xl:px-16 py-3 sm:py-4 2xl:py-4 3xl:py-6 rounded-full shadow transition">
              VIEW ALL SERVICES
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full h-[200px] sm:h-[300px] md:h-[400px] 2xl:h-[500px] 3xl:h-[600px] 5xl:h-[800px] relative">
          <div className="hidden md:flex w-36 h-36 2xl:w-60 2xl:h-60 3xl:w-72 3xl:h-72 5xl:w-96 5xl:h-96 items-center justify-center">
            <img
              src="/image/sphere.png"
              alt="Rotating Sphere"
              className="animate-spin-slow object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Stacking Cards */}
      <div
        className="js-stack-cards relative w-full max-w-4xl 2xl:max-w-6xl 3xl:max-w-7xl 5xl:max-w-[1800px] mx-auto py-12 sm:py-16 2xl:py-16 3xl:py-20 px-4 md:px-0 flex flex-col items-center"
        style={{ "--stack-cards-gap": "2rem" }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="js-stack-cards__item sticky top-20 h-0 pb-[80%] flex justify-center"
          >
            <div className="flex items-start">
              {/* Number */}
              <div className="mr-1 flex-shrink-0 mt-2 flex justify-center items-center">
                <div className="bg-black px-2 py-1 rounded">
                  <span
                    className="text-[#fff] text-2xl sm:text-3xl md:text-6xl 2xl:text-7xl 3xl:text-8xl 5xl:text-9xl font-extrabold tracking-tight"
                    style={{ letterSpacing: "-0.05em" }}
                  >
                    {img.num}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[600px] md:w-[800px] md:h-[600px] 2xl:w-[1000px] 2xl:h-[700px] 3xl:w-[1200px] 3xl:h-[800px] 5xl:w-[1600px] 5xl:h-[1000px] rounded-2xl border-[6px] sm:border-[8px] md:border-[20px] 2xl:border-[24px] 3xl:border-[28px] 5xl:border-[36px] border-[#333333] shadow-xl overflow-hidden bg-white ml-4">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                <div className="absolute left-4 bottom-4 2xl:left-8 3xl:left-12 5xl:left-16">
                  <button className="bg-orange-400 text-black px-3 sm:px-4 2xl:px-6 3xl:px-8 py-2 2xl:py-3 rounded font-bold shadow hover:bg-orange-500 transition text-xs sm:text-sm 2xl:text-base 3xl:text-lg 5xl:text-xl">
                    WEBSITE DEVELOPMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spin animation */}
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
    </section>
  );
};

export default Wherecreatesection;