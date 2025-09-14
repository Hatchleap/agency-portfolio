"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      company: "Clutch",
      companyIcon: "📊",
      rating: 5.0,
      stars: 5,
      quote:
        "They don't just design pretty things—they understand our market, our audience, and our goals. Every deliverable had purpose behind it. We saw a 40% bump in engagement after launch",
      author: "BRISH JHONSON",
      role: "Web Developer",
    },
    {
      id: 2,
      company: "Dropbox",
      companyIcon: "📦",
      rating: 4.5,
      stars: 4,
      quote:
        "Working with Creative Agency changed the game for our brand. From our new visual identity to a killer campaign rollout, they nailed every detail. Clients now feel our message before we even say it",
      author: "MARRY JAEN",
      role: "Web Designer",
    },
    {
      id: 3,
      company: "Google",
      companyIcon: "🔍",
      rating: 5.0,
      stars: 5,
      quote:
        "Their team delivered beyond expectations. The new site is fast, beautiful, and converts better than ever. We’re thrilled!",
      author: "SAMUEL LEE",
      role: "Product Manager",
    },
    {
      id: 4,
      company: "Amazon",
      companyIcon: "🛒",
      rating: 4.8,
      stars: 5,
      quote:
        "Professional, creative, and always on time. Our e-commerce sales increased by 30% after the redesign.",
      author: "LINDA SMITH",
      role: "Marketing Lead",
    },
  ];

  const [itemsToShow, setItemsToShow] = useState(2);
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 1024 ? 1 : 2); // < lg = 1, else 2
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalSets = Math.ceil(testimonials.length / itemsToShow);
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsToShow, testimonials.length]);

  const renderStars = (count, filled) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-sm md:text-base lg:text-xl ${
          i < filled ? "text-orange-400" : "text-gray-600"
        }`}
      >
        ★
      </span>
    ));
  };

  const visibleTestimonials = testimonials.slice(
    currentSet * itemsToShow,
    currentSet * itemsToShow + itemsToShow
  );

  const totalSets = Math.ceil(testimonials.length / itemsToShow);
  const prevTestimonial = () => {
    setCurrentSet((prev) => (prev === 0 ? totalSets - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setCurrentSet((prev) => (prev === totalSets - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-8 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12 mb-12 md:mb-16">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
                WHAT
              </h1>
              <div className="bg-lime-400 rounded-full p-2 sm:p-3">
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <button className="bg-lime-400 text-black px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-lime-300 transition-colors">
                VIEW ALL REVIEWS
              </button>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
              OUR CLIENTS SAY
            </h2>
          </div>

          <div className="text-left lg:text-right text-gray-300 max-w-md">
            <p className="text-base sm:text-lg leading-relaxed">
              Global brands, disruptive startups, nonprofits,
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
              tech innovators, lifestyle labels, and more
            </p>
            <p className="text-sm sm:text-base">
              Want to see what we can create together.
            </p>
          </div>
        </div>

        {/* Stats + Testimonials */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
          {/* Left - Stats */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="text-center lg:text-left mb-8">
                <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-3">
                  25K
                </div>
                <div className="text-base sm:text-lg md:text-xl font-semibold tracking-wide">
                  CUSTOMER REVIEWS
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
                  Clutch
                </div>
                <div className="flex justify-center lg:justify-start items-center gap-1 sm:gap-2 mb-6">
                  {renderStars(5, 5)}
                  <span className="text-sm sm:text-base md:text-xl ml-1 sm:ml-2">
                    5.0
                  </span>
                </div>

                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-lime-400 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-lime-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Testimonials */}
          <div className="lg:w-2/3 w-full flex flex-col md:flex-row gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="transition-all duration-500 flex-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl">
                    {testimonial.companyIcon}
                  </div>
                  <div className="flex">{renderStars(5, testimonial.stars)}</div>
                </div>

                <blockquote className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div>
                  <div className="font-bold text-sm sm:text-base md:text-lg mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm md:text-base">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
