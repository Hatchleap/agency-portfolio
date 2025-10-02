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

const Home = ({ logoWidth = 180, logoHeight = 80 }) => {
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
  <section className="w-full bg-[#FDECE2] text-black px-6 md:px-16 pt-5 pb-28 md:pb-40 relative overflow-hidden min-h-screen md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[100vh]">
      {/* NAVBAR */}
      <header className="absolute top-0 left-0 w-full z-30 bg-[#FDECE2]/90 backdrop-blur-md flex items-center justify-center px-4 md:px-16 py-8">
        {/* Logo */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2">
          <Image
            src="/image/lo.png"
            alt="Logo"
            width={logoWidth}
            height={logoHeight}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs md:text-sm 2xl:text-base font-semibold tracking-widest text-[#444]">
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
        <div className="hidden md:flex items-center gap-5 text-[#222] text-base 2xl:text-lg absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
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
            className={`py-3 px-6 block transform transition-all duration-500 ${
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


      {/* HERO CONTENT - Vertically Centered */}
      <div className="flex flex-col flex-grow justify-center md:justify-center z-10 relative min-h-[75vh] md:min-h-[60vh] lg:min-h-[60vh] xl:min-h-[60vh]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 mt-10 md:mt-16 lg:mt-24">
          {/* Left Side - Heading */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-6xl font-bold leading-snug">
              Let’s sharpen your brand with <br className="hidden md:block" />
              quality work
            </h2>
          </div>

          {/* Right Side - Stats + Paragraph */}
          <div className="flex flex-col space-y-6 md:w-1/2">
            <div>
              <p className="text-3xl md:text-4xl font-bold">98%</p>
              <p className="text-gray-700">
                Average clients satisfied and repeating
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">120+</p>
              <p className="text-gray-700">
                Successfully projects done in 24 countries
              </p>
            </div>
            <p className="text-gray-700">
              We’re a digital products design & development agency that works
              passionately with the digital experiences.
            </p>
          </div>
        </div>
      </div>


      {/* REDOX Text - Background */}
      <div className="absolute bottom-5 md:bottom-16 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none">
        <h1
          className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-extrabold text-[#FF5722] leading-none"
          style={{ transform: "scaleY(2)" }}
        >
          REDOX
        </h1>
      </div>
    </section>
  );
};

export default Home;
