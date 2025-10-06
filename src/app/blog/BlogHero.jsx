'use client';

import React, { useState } from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaDribbble,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
} from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function ServiceHero({ logoWidth = 180, logoHeight = 80 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section
      className="relative w-full text-black bg-no-repeat bg-center bg-cover 
      h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] 
      2xl:h-[50vh] 3xl:h-[60vh] 4xl:h-[50vh] 5xl:h-[45vh]"
      style={{ backgroundImage: 'url(/image/pagebg.jpg)' }}
    >
      {/* NAVBAR */}
  <header className="absolute top-0 left-0 w-full z-30 flex items-center justify-center px-4 md:px-16 py-8">
        {/* Logo */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2">
         <a href="/">
          <Image
            src="/image/lo.png"
            alt="Logo"
            width={logoWidth}
            height={logoHeight}
            className="object-contain 3xl:w-[200px] 3xl:h-[190px] 5xl:w-[250px] 5xl:h-[210px]"
            style={{ filter: 'brightness(0) invert(1) contrast(1.2)' }}
            priority
          />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm md:text-sm 2xl:text-sm 3xl:text-xl 5xl:text-3xl font-semibold tracking-widest text-white">
          <a href="/" className="text-white">HOME</a>
          <a href="/about" className="text-white">ABOUT</a>
          <a href="/services" className="text-white">SERVICES</a>
          <a href="/work" className="text-white">WORK</a>
          <a href="/blog" className="text-white border-b-2 border-white pb-1">BLOG</a>
          <a href="/contact" className="text-white">CONTACT</a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-5 text-white text-sm 2xl:text-sm 3xl:text-xl 5xl:text-3xl absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
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
            <IoMdClose className="w-7 h-7 text-white" />
          ) : (
            <IoMdMenu className="w-7 h-7 text-white" />
          )}
        </button>
      </header>

      {/* Splash Circle Animation (mobile only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-5 right-5 z-40 w-[1px] h-[1px] md:hidden"
      >
        <div
          className={`absolute rounded-full bg-[#FDECE2] w-[284vmax] h-[284vmax] -top-[142vmax] -left-[142vmax] 
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
        style={{ willChange: 'opacity' }}
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
          {/* Use correct hrefs for mobile nav */}
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`py-3 px-6 block transform transition-all duration-500 text-black ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }`}
            style={{ transitionDelay: `${menuOpen ? 0 * 80 + 150 : 0}ms` }}
          >
            HOME
          </a>
          <a
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={`py-3 px-6 block transform transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }`}
            style={{ transitionDelay: `${menuOpen ? 1 * 80 + 150 : 0}ms` }}
          >
            ABOUT
          </a>
          <a
            href="/services"
            onClick={() => setMenuOpen(false)}
            className={`py-3 px-6 block transform transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }`}
            style={{ transitionDelay: `${menuOpen ? 2 * 80 + 150 : 0}ms` }}
          >
            SERVICES
          </a>
          <a
            href="/work"
            onClick={() => setMenuOpen(false)}
            className={`py-3 px-6 block transform transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }`}
            style={{ transitionDelay: `${menuOpen ? 3 * 80 + 150 : 0}ms` }}
          >
            WORK
          </a>
          <a
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className={`py-3 px-6 block transform transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }`}
            style={{ transitionDelay: `${menuOpen ? 4 * 80 + 150 : 0}ms` }}
          >
            BLOG
          </a>
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`py-3 px-6 block transform transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }`}
            style={{ transitionDelay: `${menuOpen ? 5 * 80 + 150 : 0}ms` }}
          >
            CONTACT
          </a>
        </nav>

        <div
          className={`flex space-x-5 mt-8 text-2xl text-black transition-opacity duration-500 ${
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

      {/* Hero Content */}
  <div className="flex flex-col items-start justify-center h-full pl-4 sm:pl-8 md:pl-16 pt-36 md:pt-40 5xl:pt-72">
        <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-6xl 3xl:text-7xl 5xl:text-[10rem] font-extrabold text-white mb-4 sm:mb-6">BLOG</h1>
        <div className="flex items-center space-x-3 text-base sm:text-lg md:text-lg 5xl:text-[2rem] font-semibold">
          <a href="/" className="flex items-center text-orange-400 hover:text-orange-500 transition-colors">
            <FaHome className="w-5 h-5 md:w-6 md:h-6 5xl:w-7 5xl:h-7 mr-1 5xl:mr-2 text-orange-400" />
            <span className="font-bold">Scalefiction</span>
          </a>
          <span className="text-orange-400">&#187;</span>
          <span className="text-white font-semibold">Blog</span>
        </div>
      </div>
    </section>
  );
}