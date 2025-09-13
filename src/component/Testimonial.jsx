// 'use client';

// import Image from 'next/image';

// const Testimonial = () => {
//   return (
//     <section className="bg-neutral-900 text-white min-h-screen flex items-center justify-center p-8 relative overflow-visible">
//       {/* Main content container with two columns */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 z-10 relative">
//         {/* Left column: Image */}
//         <div className="flex justify-center md:justify-end items-start md:items-start">
//           <div className="relative w-full max-w-lg md:max-w-none md:w-[300px] lg:w-[300px]">
//             <div className="md:absolute md:-top-16 md:-left-56 md:z-20">
//               <Image
//                 src="/image/o.png"
//                 alt="Maria Whun"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//                 style={{ objectFit: "cover" }}
//                 priority
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right column: Text content */}
//         <div className="flex flex-col justify-center text-center md:text-left mt-12 md:mt-0">
//           {/* Top heading with a decorative circle */}
//           <h2 className="text-4xl lg:text-5xl font-extrabold flex items-center justify-center md:justify-start space-x-2 mb-4">
//             <span className="text-lime-400 text-6xl">•</span>
//             <span>Clients</span>
//             <span className="font-light">Stories</span>
//           </h2>

//           {/* Quote */}
//           <div className="relative p-6 lg:p-8">
//             <p className="text-lg lg:text-xl italic max-w-xl mx-auto md:mx-0">
//               Beautiful, flexible theme. Much more robust than what I needed for this project, but so chic I couldn't resist. Support was also really responsive and even have a code change for me in the next update. Will definitely consider more themes from this developer!
//             </p>
//             {/* Quote icon */}
//             <span className="absolute top-0 left-0 text-7xl font-serif text-gray-500 opacity-20 transform -translate-x-4 -translate-y-4">“</span>
//           </div>

//           {/* Separator */}
//           <hr className="w-16 h-1 mt-6 mb-4 bg-gray-600 border-0 self-center md:self-start" />

//           {/* Author info */}
//           <div className="flex items-center justify-center md:justify-start mt-4">
//             <Image
//               src="/image/p.png"
//               alt="Maria Whun"
//               width={48}
//               height={48}
//               className="rounded-full mr-4"
//             />
//             <div>
//               <p className="text-lg font-bold">Maria Whun</p>
//               <p className="text-sm text-gray-400">Company / CEO</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;