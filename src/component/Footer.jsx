// components/FooterCTA.jsx
"use client";

import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-16 relative overflow-hidden">
      {/* Main content wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left: Large heading & newsletter */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            scalefiction
          </h1>

          {/* Email input */}
          <div className="flex items-center max-w-md">
            <input
              type="email"
              placeholder="enter your email..."
              className="flex-1 py-3 px-4 rounded-l-md text-black outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-3 rounded-r-md hover:bg-orange-600 transition">
              &rarr;
            </button>
          </div>

          {/* Checkbox */}
          <div className="mt-3 flex items-center text-sm">
            <input
              type="checkbox"
              id="subscribe"
              className="mr-2 w-4 h-4"
            />
            <label htmlFor="subscribe">stay tuned and subscribe to our newsletter</label>
          </div>
        </div>

        {/* Right: Footer links */}
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-10 text-sm">
          
          {/* Menu */}
          <div>
            <h2 className="font-semibold mb-2">Main home</h2>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About us</li>
              <li>Portfolio</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h2 className="font-semibold mb-2">Location</h2>
            <p>ranchview dr.</p>
            <p>richardson california 62536</p>
            <h2 className="font-semibold mt-4 mb-2">Contact us</h2>
            <p>infoorvio@gmail.com</p>
            <p>(999) 000 2343</p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="font-semibold mb-2">Follow Us</h2>
            <ul className="space-y-1">
              <li>TikTok</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500 text-center">
        Copyright © 2025 Wprealizer
      </div>
    </section>
  );
};

export default Footer;
