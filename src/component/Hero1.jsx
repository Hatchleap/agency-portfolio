// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   FaTwitter,
//   FaFacebookF,
//   FaDribbble,
//   FaPinterestP,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const Hero = () => {
//   const words = ["Web Design", "Branding", "E-commerce", "Graphic Design"];
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Cycle words
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setIndex((i) => (i + 1) % words.length);
//         setFade(true);
//       }, 250);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Lock scroll when menu open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   // Close on Escape
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") setMenuOpen(false);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const currentWord = words[index];
//   const menuItems = ["Home", "About", "Services", "Work", "Blog", "Contact"];

//   return (
//     <div className="relative min-h-screen text-black overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src="/image/hero.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>
//       {/* Header (new design) */}
//       <header className="relative z-30 w-full bg-[#f7f7f7] flex items-center justify-between px-4 md:px-16 py-5 border-b border-[#eaeaea]">
//         {/* Logo and Brand */}
//         <div className="flex items-center gap-3">
//           <Image
//             src="/image/logo.png"
//             alt="Logo"
//             width={40}
//             height={40}
//             className="object-contain"
//             priority
//           />
//           <span className="font-bold text-2xl tracking-widest text-[#222]">DEEP</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-[#888]">
//           <a href="#" className="text-[#222] border-b-2 border-[#222] pb-1">HOME</a>
//           <a href="#">ABOUT</a>
//           <a href="#">SERVICES</a>
//           <a href="#">WORK</a>
//           <a href="#">BLOG</a>
//           <a href="#">CONTACT</a>
//         </nav>

//         {/* Desktop Social Icons */}
//         <div className="hidden md:flex items-center gap-5 text-[#222] text-base">
//           <FaTwitter />
//           <FaFacebookF />
//           <FaDribbble />
//           <FaPinterestP />
//           <FaInstagram />
//           <FaLinkedinIn />
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           aria-expanded={menuOpen}
//           aria-controls="mobile-menu"
//           onClick={() => setMenuOpen((s) => !s)}
//           className="md:hidden flex items-center justify-center w-12 h-12 focus:outline-none"
//         >
//           <span className="relative w-8 h-8 block">
//             <span className="absolute left-0 right-0 top-2 h-[2.5px] bg-[#888] rounded transition-all duration-300" style={{}}></span>
//             <span className="absolute left-0 right-0 top-7 h-[2.5px] bg-[#888] rounded transition-all duration-200" style={{}}></span>
//             <span className="absolute left-0 right-0 top-12 h-[2.5px] bg-[#888] rounded transition-all duration-300" style={{}}></span>
//           </span>
//         </button>
//       </header>

//       {/* Fixed Toggle Button */}
//       <button
//         aria-expanded={menuOpen}
//         aria-controls="mobile-menu"
//         onClick={() => setMenuOpen((prev) => !prev)}
//         className={`fixed top-5 right-5 z-50 w-12 h-12 md:hidden flex items-center justify-center rounded-full focus:outline-none ${
//           menuOpen ? "text-white" : "text-black"
//         }`}
//       >
//         <svg
//           className="absolute inset-0 w-full h-full text-black"
//           viewBox="0 0 50 50"
//           width="48"
//           height="48"
//           aria-hidden="true"
//         >
//           <circle
//             cx="25"
//             cy="25"
//             r="23"
//             stroke="currentColor"
//             strokeWidth="3"
//             fill="none"
//             strokeDasharray="145"
//             strokeDashoffset={menuOpen ? "0" : "145"}
//             style={{ transition: "stroke-dashoffset 0.45s linear" }}
//           />
//         </svg>

//         <span className="relative z-10 w-6 h-6 block text-black">
//           <span
//             className={`absolute left-0 right-0 h-[2px] bg-current transform transition-all duration-300 ${
//               menuOpen ? "top-2 rotate-45" : "top-0"
//             }`}
//           />
//           <span
//             className={`absolute left-0 right-0 h-[2px] bg-current transform transition-all duration-200 ${
//               menuOpen ? "top-2 opacity-0" : "top-2 opacity-100"
//             }`}
//           />
//           <span
//             className={`absolute left-0 right-0 h-[2px] bg-current transform transition-all duration-300 ${
//               menuOpen ? "top-2 -rotate-45" : "bottom-0"
//             }`}
//           />
//         </span>
//       </button>

//       {/* Splash Circle */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none fixed top-5 right-5 z-40 w-[1px] h-[1px] md:hidden"
//       >
//         <div
//           className={`absolute rounded-full bg-white w-[284vmax] h-[284vmax] -top-[142vmax] -left-[142vmax] transform transition-transform duration-500 ${
//             menuOpen ? "scale-100" : "scale-0"
//           }`}
//         />
//       </div>

//       {/* Mobile Menu */}
//       <div
//         id="mobile-menu"
//         className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-400 md:hidden ${
//           menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         <nav className="flex flex-col items-center text-xl uppercase tracking-widest text-black">
//           {menuItems.map((label, i) => (
//             <a
//               key={label}
//               href="#"
//               onClick={() => setMenuOpen(false)}
//               className={`py-3 px-6 block transform transition-all duration-500 ${
//                 menuOpen
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 -translate-y-6 pointer-events-none"
//               }`}
//               style={{ transitionDelay: `${menuOpen ? i * 80 + 150 : 0}ms` }}
//             >
//               {label}
//             </a>
//           ))}
//         </nav>

//         <div
//           className={`flex space-x-5 mt-8 text-2xl transition-opacity duration-500 ${
//             menuOpen ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <FaTwitter />
//           <FaFacebookF />
//           <FaDribbble />
//           <FaPinterestP />
//           <FaInstagram />
//           <FaLinkedinIn />
//         </div>
//       </div>

//       {/* HERO CONTENT */}
//       <main className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
//         <p className="uppercase text-xs tracking-[0.3em] font-medium">
//           Branding / Design / Development
//         </p>

//         <h1
//           className={`mt-6 text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest transition-opacity duration-300 ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {currentWord}
//         </h1>

//         <p className="mt-6 text-xs sm:text-sm tracking-wider uppercase">
//           Where vision becomes visual
//         </p>

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-2xl">
//           ↓
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Hero;



"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaDribbble,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Hero = () => {
  const words = ["Web Design", "Branding", "E-commerce", "Graphic Design"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Cycle words
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFade(true);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const currentWord = words[index];
  const menuItems = ["Home", "About", "Services", "Work", "Blog", "Contact"];

  return (
    <div className="relative min-h-screen text-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/image/hero.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <header className="relative z-20 w-full flex items-center justify-center px-4 md:px-16 py-5">
        {/* Logo (absolutely positioned) */}
        <div className="absolute left-4 md:left-8 top-8 -translate-y-1/2 w-40 h-32 md:w-44 md:h-44">
          <Image
            src="/image/lo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-[#888]">
          <a href="#" className="text-[#222] border-b-2 border-[#222] pb-1">
            HOME
          </a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICES</a>
          <a href="#">WORK</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-5 text-[#222] text-base absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
          <FaTwitter />
          <FaFacebookF />
          <FaDribbble />
          <FaPinterestP />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((s) => !s)}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 focus:outline-none"
        >
          {/* <span className="relative w-8 h-8 block">
            <span className="absolute left-0 right-0 top-2 h-[2.5px] bg-[#888] rounded transition-all duration-300"></span>
            <span className="absolute left-0 right-0 top-7 h-[2.5px] bg-[#888] rounded transition-all duration-200"></span>
            <span className="absolute left-0 right-0 top-12 h-[2.5px] bg-[#888] rounded transition-all duration-300"></span>
          </span> */}
        </button>
      </header>

      {/* Fixed Toggle Button */}
      {/* <button
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        className={`fixed top-2 right-5 z-50 w-12 h-12 md:hidden flex items-center justify-center rounded-full focus:outline-none ${
          menuOpen ? "text-white" : "text-black"
        }`}
      > */}

      <button
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        className={`absolute top-2 right-5 z-50 w-12 h-12 md:hidden flex items-center justify-center rounded-full focus:outline-none ${
          menuOpen ? "text-white" : "text-black"
        }`}
      >
        <svg
          className="absolute inset-0 w-full h-full text-black"
          viewBox="0 0 50 50"
          width="48"
          height="48"
          aria-hidden="true"
        >
          <circle
            cx="25"
            cy="25"
            r="23"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeDasharray="145"
            strokeDashoffset={menuOpen ? "0" : "145"}
            style={{ transition: "stroke-dashoffset 0.45s linear" }}
          />
        </svg>

        <span className="relative z-10 w-6 h-6 block text-black">
          <span
            className={`absolute left-0 right-0 h-[2px] bg-current transform transition-all duration-300 ${
              menuOpen ? "top-2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 right-0 h-[2px] bg-current transform transition-all duration-200 ${
              menuOpen ? "top-2 opacity-0" : "top-2 opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 right-0 h-[2px] bg-current transform transition-all duration-300 ${
              menuOpen ? "top-2 -rotate-45" : "bottom-0"
            }`}
          />
        </span>
      </button>

      {/* Splash Circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-5 right-5 z-40 w-[1px] h-[1px] md:hidden"
      >
        <div
          className={`absolute rounded-full bg-white w-[284vmax] h-[284vmax] -top-[142vmax] -left-[142vmax] transform transition-transform duration-500 ${
            menuOpen ? "scale-100" : "scale-0"
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-400 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center text-xl uppercase tracking-widest text-black">
          {menuItems.map((label, i) => (
            <a
              key={label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className={`py-3 px-6 block transform transition-all duration-500 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-6 pointer-events-none"
              }`}
              style={{ transitionDelay: `${menuOpen ? i * 80 + 150 : 0}ms` }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div
          className={`flex space-x-5 mt-8 text-2xl transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <FaTwitter />
          <FaFacebookF />
          <FaDribbble />
          <FaPinterestP />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>

      {/* HERO CONTENT */}
      <main className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
        <p className="uppercase text-zinc-800 text-xs md:text-2xl tracking-[0.3em] font-medium">
          Branding / Design / Development
        </p>

        <h1
          className={`mt-6 text-3xl sm:text-5xl md:text-8xl font-bold tracking-widest transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentWord}
        </h1>

        <p className="mt-6 text-xs sm:text-sm tracking-wider uppercase">
          Where vision becomes visual
        </p>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-2xl">
          ↓
        </div>
      </main>
    </div>
  );
};

export default Hero;
