"use client";

import React from "react";
import { FaUserFriends, FaProjectDiagram, FaUsers, FaThumbsUp } from "react-icons/fa";

const StatsSection = () => {
  return (
    <section className="w-full bg-white text-black py-12 px-6 md:px-16">
      {/* Top Heading Section */}
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
          BRAND VISION{" "}
          <span className="bg-yellow-300 px-3 py-1 rounded-full font-bold text-black text-sm align-middle mx-2">
            + DREAM IDEAS +
          </span>{" "}
          DESIGN CULTURE YOUR DREAM BUSINESS{" "}
          <span className="inline-flex items-center mx-2">
            <img
              src="/your-image1.png"
              alt="icon"
              className="w-10 h-10 inline-block rounded-full"
            />
          </span>{" "}
          AND TECHNICAL{" "}
          <span className="inline-flex items-center mx-2">
            <img
              src="/your-image2.png"
              alt="icon"
              className="w-10 h-10 inline-block rounded-full"
            />
          </span>{" "}
          BUILD YOUR BRAND THAT NEED ATTENTION{" "}
          <span className="bg-yellow-300 px-3 py-1 rounded-full font-bold text-black text-lg align-middle">
            Ⓟ
          </span>{" "}
          & PROMOTION
        </h2>
        <p className="text-gray-500 mt-6 text-sm md:text-base">
          Consequat id porta nibh venenatis cras sed felis eget velit. Ac placerat vestibulum lectus
          mauris ultrices eros in. Eget mauris pharetra et ultrices neque ornare aenean. Ut ornare
          lectus sit amet est. Erat imperdiet sed euismod nisi porta. Id venenatis a condimentum
          vitae. Id aliquet risus feugiat in ante metus dictum at. Accumsan sit amet nulla facilisi
          morbi tempus iaculis. Platea dictumst quisque sagittis purus sit amet volutpat consequat
          mauris.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
        {/* Clients */}
        <div className="border rounded-lg p-6 flex flex-col items-center  md:flex-row md:justify-center md:text-left md:border-none">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 mb-4 md:mb-0 md:mr-4">
            <FaUserFriends className="text-2xl md:text-3xl text-gray-800" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">CLIENTS</h3>
            <p className="text-xl font-bold">400+</p>
          </div>
        </div>

        {/* Projects */}
        <div className="border rounded-lg p-6 flex flex-col items-center  md:flex-row md:justify-center md:text-left md:border-none">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 mb-4 md:mb-0 md:mr-4">
            <FaProjectDiagram className="text-2xl md:text-3xl text-gray-800" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">PROJECTS</h3>
            <p className="text-xl font-bold">625+</p>
          </div>
        </div>

        {/* Followers */}
        <div className="border rounded-lg p-6 flex flex-col items-center  md:flex-row md:justify-center md:text-left md:border-none">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 mb-4 md:mb-0 md:mr-4">
            <FaUsers className="text-2xl md:text-3xl text-gray-800" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">FOLLOWERS</h3>
            <p className="text-xl font-bold">1249+</p>
          </div>
        </div>

        {/* Happy Clients */}
        <div className="border rounded-lg p-6 flex flex-col items-center  md:flex-row md:justify-center md:text-left md:border-none">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 mb-4 md:mb-0 md:mr-4">
            <FaThumbsUp className="text-2xl md:text-3xl text-gray-800" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">HAPPY CLIENTS</h3>
            <p className="text-xl font-bold">100%</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition">
          EXPLORE MORE →
        </button>
      </div>
    </section>
  );
};

export default StatsSection;
