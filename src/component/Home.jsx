"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/image/hero.jpg')" }}
    >
      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 h-20 md:h-24">
        {/* Logo - independent, doesn’t affect navbar height */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2">
          <div className="relative w-20 h-20 md:w-32 md:h-32">
            <Image
              src="/image/lo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-black mx-auto">
          <Link href="#home" className="hover:underline underline-offset-4">
            HOME
          </Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#services">SERVICES</Link>
          <Link href="#work">WORK</Link>
          <Link href="#blog">BLOG</Link>
          <Link href="#contact">CONTACT</Link>
        </nav>

        {/* Social Icons (desktop) */}
        <div className="hidden md:flex items-center space-x-4 text-lg text-black">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full text-black backdrop-blur-md flex flex-col items-center space-y-6 py-6 z-20 text-lg font-medium md:hidden">
          <Link href="#home" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            ABOUT
          </Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>
            SERVICES
          </Link>
          <Link href="#work" onClick={() => setIsOpen(false)}>
            WORK
          </Link>
          <Link href="#blog" onClick={() => setIsOpen(false)}>
            BLOG
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            CONTACT
          </Link>

          {/* Social Icons (mobile) */}
          <div className="flex items-center space-x-6 text-xl pt-4 text-black">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 mt-20 md:mt-32">
        <p className="text-xs md:text-sm tracking-widest font-semibold">
          BRANDING / DESIGN / DEVELOPMENT
        </p>
        <h1 className="text-3xl md:text-6xl font-bold tracking-widest mt-4">
          WEB ARCHITECTS
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          WHERE VISION BECOMES VISUAL
        </p>
        <div className="mt-16 animate-bounce">
          <span className="text-2xl">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
