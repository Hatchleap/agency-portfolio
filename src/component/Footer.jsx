"use client";

import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black bg-cover bg-center text-white rounded-t-[10px]" style={{ backgroundImage: "url('/image/foot.jpg')" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Left Section */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold leading-tight mb-6 text-left">
            RAISE SMART. GROW FAST. LET’S START TODAY!
          </h2>
          <div className="flex items-center space-x-3 mb-4">
            <input 
              type="email" 
              placeholder="enter your email.." 
              className="px-4 py-3 rounded bg-gray-800 placeholder-gray-400 text-white outline-none w-full"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded">
              ➔
            </button>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <input type="checkbox" id="subscribe" className="mr-2"/>
            <label htmlFor="subscribe">stay tuned and subscribe to our newsletter</label>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 flex justify-end space-x-28 w-full">
          {/* Column 1 – Main Home */}
          <div>
            <h3 className="font-semibold mb-4">Main home</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Home</li>
              <li>About us</li>
              <li>Portfolio</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 2 – Location */}
          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>ranchview dr.</li>
              <li>richardson california</li>
              <li>62536</li>
              <li className="font-semibold">Contact us</li>
              <li>infoowie@gmail.com</li>
              <li>(999) 000 2343</li>
            </ul>
          </div>

          {/* Column 3 – Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>TikTok</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
