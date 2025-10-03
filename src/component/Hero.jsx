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
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Hero({ logoWidth = 180, logoHeight = 80 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Services", "Work", "Blog", "Contact"];

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="w-full bg-white relative min-h-screen overflow-hidden">
      {/* NAVBAR */}
      <header className="absolute top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-md flex items-center justify-center px-4 md:px-16 py-8">
        {/* Logo */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2">
          <Image
            src="/image/lo.png"
            alt="Logo"
            width={logoWidth}
            height={logoHeight}
            className="object-contain 4xl:w-[280px] 4xl:h-[130px]" // bigger logo on 4xl
            priority
          />
        </div>

        {/* Desktop Nav */}
  <nav className="hidden md:flex items-center gap-8 text-xs md:text-sm 2xl:text-base 4xl:text-2xl font-semibold tracking-widest text-[#444]">
          <a href="#" className="text-[#222] border-b-2 border-[#222] pb-1">
            HOME
          </a>
          <a href="/about">ABOUT</a>
          <a href="/services">SERVICES</a>
          <a href="/work">WORK</a>
          <a href="/blog">BLOG</a>
          <a href="/contact">CONTACT</a>
        </nav>

        {/* Desktop Social Icons */}
  <div className="hidden md:flex items-center gap-5 text-[#222] text-base 2xl:text-lg 4xl:text-2xl absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
          <FaTwitter />
          <FaFacebookF />
          <FaDribbble />
          <FaPinterestP />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        {/* Mobile Hamburger / Close */}
        <button
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((s) => !s)}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 focus:outline-none z-50"
        >
          {menuOpen ? (
            <IoMdClose className="w-7 h-7 text-black" />
          ) : (
            <IoMdMenu className="w-7 h-7 text-black" />
          )}
        </button>
      </header>

      {/* Splash Circle Animation (mobile only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-5 right-5 z-40 w-[1px] h-[1px] md:hidden"
      >
        <div
          className={`absolute rounded-full bg-white w-[284vmax] h-[284vmax] -top-[142vmax] -left-[142vmax] 
            transition-transform duration-[500ms] ease-[cubic-bezier(0.755,0.050,0.855,0.060)] will-change-transform
            ${menuOpen ? "scale-100" : "scale-0"}
          `}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden
          transition-opacity duration-500 ease-[cubic-bezier(0.755,0.050,0.855,0.060)]
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        style={{ willChange: "opacity" }}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
          className="absolute top-6 right-6 text-3xl text-black z-50"
        >
          <IoMdClose />
        </button>

        <nav className="flex flex-col items-center text-xl uppercase tracking-widest text-black">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`py-3 px-6 block transform transition-all duration-500 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-6 pointer-events-none"
              }`}
              style={{ transitionDelay: `${menuOpen ? i * 80 + 150 : 0}ms` }}
            >
              {item}
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

      {/* MAIN HERO CONTENT */}
      <div className="pt-20 md:pt-20 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 w-full">
          {/* Headings Section */}
          <div className="mb-8">
            {/* Mobile Headings */}
            <div className="flex flex-col items-center sm:hidden">
              <h1 className="font-extrabold text-black text-[clamp(2rem,7vw,2.5rem)] 4xl:text-[11rem] leading-tight text-center">
                IGNITING CREATIVITY
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2 mb-2">
                {["/image/b.jpeg", "/image/b.jpeg", "/image/b.jpeg", "/image/b.jpeg"].map(
                  (src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`avatar-${i}`}
                      width={48}
                      height={48}
                      className="w-10 h-10 rounded-full border border-gray-200 object-cover 4xl:w-14 4xl:h-14"
                    />
                  )
                )}
              </div>
              <span className="text-red-500 text-[clamp(2.5rem,10vw,3rem)] 4xl:text-[8rem] font-extrabold leading-none mb-2">
                *
              </span>
              <h2 className="font-extrabold text-black text-[clamp(2rem,7vw,2.5rem)] 4xl:text-8xl leading-tight text-center">
                TRANSFORMING BRANDS
              </h2>
            </div>

            {/* Desktop Headings */}
            <div className="hidden sm:block">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center flex-wrap">
                  <h1 className="font-extrabold text-black text-[clamp(2rem,6vw,4.5rem)] 4xl:text-[8rem] leading-tight mr-2">
                    IGNITING CREATIVITY
                  </h1>
                  <div className="flex items-center">
                    {["/image/b.jpeg", "/image/b.jpeg", "/image/b.jpeg", "/image/b.jpeg"].map(
                      (src, i) => (
                        <Image
                          key={i}
                          src={src}
                          alt={`avatar-${i}`}
                          width={56}
                          height={56}
                          className={
                            `w-12 h-12 sm:w-14 sm:h-14 4xl:w-16 4xl:h-16 rounded-full border border-gray-200 object-cover` +
                            (i !== 0 ? " -ml-2" : "")
                          }
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <span className="text-red-500 text-[clamp(2rem,6vw,4.5rem)] 4xl:text-[8rem] font-extrabold mr-3 leading-none">
                  *
                </span>
                <h2 className="font-extrabold text-black text-[clamp(2rem,6vw,4.5rem)] 4xl:text-[8rem] leading-tight">
                  TRANSFORMING BRANDS
                </h2>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-15">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center items-start gap-6 w-full max-w-xl">
              {/* Play Button + Description */}
              <div className="flex items-start gap-3 w-full">
                <span className="flex items-center justify-center w-12 h-7 sm:w-12 sm:h-12 4xl:w-20 4xl:h-20 rounded-full border-2 border-orange-500">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 sm:w-7 sm:h-7 4xl:w-12 4xl:h-12"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="#FFA500"
                      strokeWidth="2"
                      fill="white"
                    />
                    <polygon points="10,8 16,12 10,16" fill="#FFA500" />
                  </svg>
                </span>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl 4xl:text-3xl max-w-sm">
                  At our agency, we ignite the spark of creativity to transform
                  brands into unforgettable experiences. We help businesses stand
                  out.
                </p>
              </div>
              {/* Service Tags */}
              <div className="grid grid-cols-2 gap-3 mt-2 w-full sm:flex sm:flex-wrap sm:grid-cols-none">
                {[
                  "Brand Design",
                  "Web Development",
                  "Web Design",
                  "Digital Marketing",
                ].map((service, i) => (
                  <button
                    key={i}
                    className="px-4 py-2 rounded-full border border-gray-700 text-gray-900 text-sm 4xl:text-2xl font-medium bg-white hover:bg-gray-100 transition w-full sm:w-auto"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-xl">
              <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/image/b.jpeg"
                  alt="Creative Team"
                  width={1200}
                  height={800}
                  className="w-full h-auto max-w-full object-cover 
                    max-h-[250px] sm:max-h-[450px] md:max-h-[500px] 
                    lg:max-h-[600px] xl:max-h-[700px] 2xl:max-h-[800px] 4xl:max-h-[950px]"
                  priority
                />
              </div>
              {/* Large Arrow Button */}
              <button
                className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-16 h-16 sm:w-20 sm:h-20 4xl:w-32 4xl:h-32 rounded-full bg-black flex items-center justify-center shadow-lg border-4 border-white hover:bg-gray-900 transition sm:left-auto sm:translate-x-0 sm:right-4 sm:-bottom-10"
                aria-label="Go"
                style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" }}
              >
                <span className="text-white text-4xl sm:text-5xl 4xl:text-8xl">
                  &#8599;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
