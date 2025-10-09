// "use client";

// import { useEffect, useRef, useState } from "react";
// import { FaStar } from "react-icons/fa";

// const steps = [
//   {
//     title: "OUR TEAM EXPLORES CREATIVE IDEAS AND BRINGS THEM TO LIFE THROUGH",
//     desc:
//       "This is where the magic happens. Our team explores creative ideas and brings them to life through mood boards, sketches, and digital design.",
//   },
//   {
//     title: "WE TRANSLATE INSIGHTS INTO ACTION. THIS PHASE LAYS THE FOUNDATION",
//     desc:
//       "Once the concept is approved, we build. Whether it’s a brand identity, a website, a campaign, or a video — we execute with care and precision.",
//   },
//   {
//     title: "IMPLEMENT, REFINE, AND DELIVER",
//     desc:
//       "We turn plans into action with consistent feedback loops, ensuring that the final outcome exceeds expectations while staying aligned with your vision.",
//   },
// ];

// const ProcessSection = () => {
//   const imageRef = useRef();
//   const lineRef = useRef();
//   const greenRef = useRef();
//   const containerRef = useRef();
//   const [activeStep, setActiveStep] = useState(0);

//   const stepRefs = [useRef(), useRef(), useRef()];

//   useEffect(() => {
//     let lastScroll = window.scrollY;

//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       const direction = currentScroll > lastScroll ? "down" : "up";

//       if (imageRef.current) {
//         const rotation = direction === "down" ? 5 : -5;
//         imageRef.current.style.transform = `rotate(${
//           rotation + parseInt(imageRef.current.dataset.rotation || 0)
//         }deg)`;
//         imageRef.current.dataset.rotation = (
//           rotation + parseInt(imageRef.current.dataset.rotation || 0)
//         ).toString();
//       }

//       if (lineRef.current && greenRef.current && containerRef.current) {
//         const containerTop =
//           containerRef.current.getBoundingClientRect().top + window.scrollY;
//         const containerHeight = containerRef.current.scrollHeight;
//         const scrollPercent = Math.min(
//           Math.max(
//             (currentScroll - containerTop + window.innerHeight / 2) /
//               containerHeight,
//             0
//           ),
//           1
//         );
//         greenRef.current.style.height = `${scrollPercent * 100}%`;
//       }

//       lastScroll = currentScroll;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const observers = stepRefs.map((ref, index) => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveStep(index);
//             }
//           });
//         },
//         {
//           root: null,
//           rootMargin: "-50% 0px -50% 0px",
//           threshold: 0,
//         }
//       );
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//       return observer;
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full bg-black text-white py-20 px-4 md:px-8 lg:px-12 xl:px-24 overflow-hidden min-h-screen"
//     >
//       <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center mb-24">
//         <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
//           OUR PROCESS
//         </h2>
//         <p className="text-gray-300 max-w-2xl text-base md:text-lg">
//           We believe in turning ideas into reality. From ideation to execution, our process ensures every step is purposeful and impactful.
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl mx-auto w-full">
//         {/* Left spinning image */}
//         <div className="md:w-1/3 w-full flex justify-center items-center mb-12 md:mb-0">
//           <img
//             ref={imageRef}
//             data-rotation="0"
//             src="/image/sphere2.png"
//             alt="Sphere"
//             className="w-48 h-48 md:w-72 md:h-72 transition-transform duration-100 ease-linear"
//           />
//         </div>

//         {/* Timeline and Steps */}
//         <div className="md:w-2/3 w-full relative flex flex-col">
//           {/* Timeline Line */}
//           <div
//             ref={lineRef}
//             className="absolute left-10 top-0 w-1 bg-gray-700 h-full"
//             style={{ zIndex: 0 }}
//           >
//             <div
//               ref={greenRef}
//               className="absolute top-0 left-0 w-1 bg-green-500 h-0 transition-all duration-300 ease-linear"
//             />
//           </div>

//           {/* Steps */}
//           <div className="flex flex-col gap-20 relative z-10">
//             {steps.map((step, idx) => (
//               <div
//                 key={idx}
//                 ref={stepRefs[idx]}
//                 className="flex items-start"
//                 style={{ minHeight: "150px" }}
//               >
//                 {/* Star */}
//                 <div
//                   className="relative w-12 flex flex-col items-center mr-2"
//                   style={{ left: '13px', marginRight: '32px', minWidth: '48px' }}
//                 >
//                   {/* Connecting line below the star */}
//                   {idx < steps.length - 1 && (
//                     <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full" />
//                   )}
//                   {/* Star circle */}
//                   <div
//                     className="w-8 h-8 bg-black border-2 border-white rounded-full flex items-center justify-center z-10 absolute top-0 left-1/2 transform -translate-x-1/2"
//                     style={{ left: '60%' }}
//                   >
//                     <FaStar className="text-white" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div
//                   className={`transition-all duration-500 ${
//                     activeStep >= idx
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-10"
//                   }`}
//                 >
//                   <h3 className="text-green-500 font-bold mb-2">{`STEP 0${
//                     idx + 1
//                   }`}</h3>
//                   <h2 className="text-xl font-bold mb-2">{step.title}</h2>
//                   <p className="text-gray-300 max-w-xl">{step.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;



"use client";

import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const steps = [
  {
    title: "OUR TEAM EXPLORES CREATIVE IDEAS AND BRINGS THEM TO LIFE THROUGH",
    desc:
      "This is where the magic happens. Our team explores creative ideas and brings them to life through mood boards, sketches, and digital design.",
  },
  {
    title: "WE TRANSLATE INSIGHTS INTO ACTION. THIS PHASE LAYS THE FOUNDATION",
    desc:
      "Once the concept is approved, we build. Whether it’s a brand identity, a website, a campaign, or a video — we execute with care and precision.",
  },
  {
    title: "IMPLEMENT, REFINE, AND DELIVER",
    desc:
      "We turn plans into action with consistent feedback loops, ensuring that the final outcome exceeds expectations while staying aligned with your vision.",
  },
];

const ProcessSection = () => {
  const imageRef = useRef();
  const lineRef = useRef();
  const greenRef = useRef();
  const containerRef = useRef();
  const [activeStep, setActiveStep] = useState(0);

  const stepRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll ? "down" : "up";

      if (imageRef.current) {
        const rotation = direction === "down" ? 5 : -5;
        imageRef.current.style.transform = `rotate(${
          rotation + parseInt(imageRef.current.dataset.rotation || 0)
        }deg)`;
        imageRef.current.dataset.rotation = (
          rotation + parseInt(imageRef.current.dataset.rotation || 0)
        ).toString();
      }

      if (lineRef.current && greenRef.current && containerRef.current) {
        const containerTop =
          containerRef.current.getBoundingClientRect().top + window.scrollY;
        const containerHeight = containerRef.current.scrollHeight;
        const scrollPercent = Math.min(
          Math.max(
            (currentScroll - containerTop + window.innerHeight / 2) /
              containerHeight,
            0
          ),
          1
        );
        greenRef.current.style.height = `${scrollPercent * 100}%`;
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = stepRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          root: null,
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white text-white py-12 sm:py-16 md:py-20 2xl:py-28 3xl:py-28 5xl:py-40 px-4 md:px-8 lg:px-12 xl:px-24 overflow-hidden min-h-screen 3xl:min-h-10 5xl:min-h-10"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center mb-16 sm:mb-20 md:mb-24 2xl:mb-28 3xl:mb-32 5xl:mb-40">
        <h2 className="text-[clamp(1.875rem,5vw,2.5rem)] md:text-[clamp(2rem,4vw,3rem)] font-bold text-green-500 mb-4">
          OUR PROCESS
        </h2>
        <p className="text-gray-600 max-w-2xl text-[clamp(0.875rem,2.5vw,1.125rem)] md:text-lg 5xl:text-xl">
          We believe in turning ideas into reality. From ideation to execution, our
          process ensures every step is purposeful and impactful.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl mx-auto w-full">
        {/* Left spinning image */}
        <div className="md:w-1/3 w-full flex justify-center items-center mb-12 md:mb-0">
          <img
            ref={imageRef}
            data-rotation="0"
            src="/image/sphere2.png"
            alt="Sphere"
            className="w-[12rem] h-[12rem] md:w-[10rem] md:h-[10rem] 2xl:w-[15rem] 2xl:h-[15rem] 3xl:w-[20rem] 3xl:h-[20rem] 5xl:w-[20rem] 5xl:h-[20rem] max-w-full object-cover transition-transform duration-100 ease-linear"
          />
        </div>

        {/* Timeline and Steps */}
        <div className="md:w-2/3 w-full relative flex flex-col">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className="absolute left-10 top-0 w-[0.25rem] bg-gray-700 h-full 5xl:h-[102%]"
            style={{ zIndex: 0 }}
          >
            <div
              ref={greenRef}
              className="absolute top-0 left-0 w-full bg-green-500 h-0 transition-all duration-300 ease-linear"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap- 5xl:gap-28 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                ref={stepRefs[idx]}
                className="flex items-start 5xl:items-center min-h-[10rem] 5xl:min-h-[10rem]"
              >
                {/* Star */}
                <div
                  className="relative w-12 flex flex-col items-center mr-2 5xl:mr-8 left-[13px] min-w-[3rem]"
                >
                  {idx < steps.length - 1 && (
                    <div className="absolute top-8 5xl:top-16 left-1/2 transform -translate-x-1/2 w-[0.25rem] bg-gray-700 h-full 5xl:h-[100%]" />
                  )}
                  <div className="w-8 h-8 bg-black border-2 border-white rounded-full flex items-center justify-center z-10 absolute top-0 5xl:top-0 left-1/2 transform -translate-x-1/2">
                    <FaStar className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`transition-all duration-500 ${
                    activeStep >= idx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } 5xl:translate-y-0`}
                >
                  <h3 className="text-green-500 font-bold mb-4 5xl:mb-14 text-[clamp(0.875rem,2.5vw,1rem)] md:text-[clamp(1rem,2.5vw,1.125rem)] 5xl:text-2xl">{`STEP 0${idx + 1}`}</h3>
                  <h2 className="text-black text-[clamp(1.25rem,3vw,1.75rem)] md:text-[clamp(1.5rem,3vw,2rem)] 3xl:text-2xl 5xl:text-3xl font-bold mb-2">{step.title}</h2>
                  <p className="text-gray-700 max-w-xl text-[clamp(0.875rem,2.5vw,1rem)] md:text-[clamp(1rem,2.5vw,1.125rem)] 5xl:text-xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
