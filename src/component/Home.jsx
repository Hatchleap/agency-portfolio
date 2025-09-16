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

const Home = () => {
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
    <section className="w-full bg-[#FDECE2] text-black px-6 md:px-16 pt-5 pb-28 md:pb-40 relative overflow-hidden">
      {/* NAVBAR */}
      <header className="absolute top-0 left-0 w-full z-30 bg-[#FDECE2]/90 backdrop-blur-md flex items-center justify-center px-4 md:px-16 py-8">
        {/* Logo */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2">
          <Image
            src="/image/lo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-[#444]">
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
        <div className="hidden md:flex items-center gap-5 text-[#222] text-base absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
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
          className={`absolute rounded-full bg-[#FDECE2] w-[284vmax] h-[284vmax] -top-[142vmax] -left-[142vmax] transform transition-transform duration-500 ${
            menuOpen ? "scale-100" : "scale-0"
          }`}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-400 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
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
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 relative z-10 mt-20">
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

      {/* Circle Logo Bottom */}
      <div className="flex justify-start mt-8 relative z-10">
        <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center text-lg font-bold">
          W.
        </div>
      </div>

      {/* REDOX Text - Background */}
      <div className="absolute bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none">
        <h1
          className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-extrabold text-[#FF5722] leading-none"
          style={{ transform: "scaleY(1.4)" }}
        >
          REDOX
        </h1>
      </div>
    </section>
  );
};

export default Home;
