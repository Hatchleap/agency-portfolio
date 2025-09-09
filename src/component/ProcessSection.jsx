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
//     title: "WE TRANSLATE INSIGHTS INTO ACTION THIS PHASE LAYS THE FOUNDATION",
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
//       className="relative w-full bg-black text-white py-20 px-4 md:px-12 lg:px-24 xl:px-48 overflow-hidden min-h-screen"
//     >
//       <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:space-x-12 max-w-7xl mx-auto w-full">
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

//         {/* Middle Vertical Text */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rotate-90 text-gray-800 hidden md:block">
//           <h2 className="text-2xl font-bold">OUR PROCESS</h2>
//         </div>

//         {/* Timeline and Steps */}
//         <div className="md:w-2/3 w-full relative flex flex-col">
//           {/* Timeline Line */}
//           <div
//             ref={lineRef}
//             className="absolute left-8 top-0 w-1 bg-gray-700 h-full"
//             style={{ zIndex: 0 }}
//           >
//             <div
//               ref={greenRef}
//               className="absolute top-0 left-0 w-1 bg-green-500 h-0 transition-all duration-300 ease-linear"
//             />
//           </div>

//           {/* Steps */}
//           <div className="flex flex-col gap-16 relative z-10">
//             {steps.map((step, idx) => (
//               <div
//                 key={idx}
//                 ref={stepRefs[idx]}
//                 className="flex items-center"
//                 style={{ minHeight: "120px" }}
//               >
//                 {/* Star on top of the line, aligned with step */}
//                 <div className="flex flex-col items-center justify-center mr-6" style={{ width: "48px" }}>
//                   <div className="w-8 h-8 bg-black border-2 border-white rounded-full flex items-center justify-center z-10">
//                     <FaStar className="text-white" />
//                   </div>
//                   {idx < steps.length - 1 && (
//                     <div className="w-1 flex-1 bg-gray-700" style={{ marginTop: "-2px" }} />
//                   )}
//                 </div>
//                 {/* Step Content */}
//                 <div
//                   className={`transition-all duration-500 ${
//                     activeStep >= idx
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-10"
//                   }`}
//                 >
//                   <h3 className="text-green-500 font-bold mb-2">{`STEP 0${idx + 1}`}</h3>
//                   <h2 className="text-xl font-bold mb-2">{step.title}</h2>
//                   <p className="text-gray-300">{step.desc}</p>
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
      className="relative w-full bg-black text-white py-20 px-4 md:px-8 lg:px-12 xl:px-24 overflow-hidden min-h-screen"
    >
      <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl mx-auto w-full">
        {/* Left spinning image */}
        <div className="md:w-1/3 w-full flex justify-center items-center mb-12 md:mb-0">
          <img
            ref={imageRef}
            data-rotation="0"
            src="/image/sphere2.png"
            alt="Sphere"
            className="w-48 h-48 md:w-72 md:h-72 transition-transform duration-100 ease-linear"
          />
        </div>

        {/* Timeline and Steps */}
        <div className="md:w-2/3 w-full relative flex flex-col">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className="absolute left-10 top-0 w-1 bg-gray-700 h-full "
            style={{ zIndex: 0 }}
          >
            <div
              ref={greenRef}
              className="absolute top-0 left-0 w-1 bg-green-500 h-0 transition-all duration-300 ease-linear"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-20 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                ref={stepRefs[idx]}
                className="flex items-start"
                style={{ minHeight: "150px" }}
              >
                {/* Star */}
                <div
                  className="relative w-12 flex flex-col items-center mr-2"
                  style={{ left: '15px', marginRight: '32px', minWidth: '48px' }}
                >
                  {/* Connecting line below the star */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full" />
                  )}
                  {/* Star circle */}
                  <div
                    className="w-8 h-8 bg-black border-2 border-white rounded-full flex items-center justify-center z-10 absolute top-0 left-1/2 transform -translate-x-1/2"
                    style={{ left: '60%' }} // Move star further right for mobile
                  >
                    <FaStar className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`transition-all duration-500 ${
                    activeStep >= idx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h3 className="text-green-500 font-bold mb-2">{`STEP 0${
                    idx + 1
                  }`}</h3>
                  <h2 className="text-xl font-bold mb-2">{step.title}</h2>
                  <p className="text-gray-300 max-w-xl">{step.desc}</p>
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


