"use client";

import React from "react";

const Footer = () => {
  return (
    <section
      className="bg-cover bg-center rounded-lg overflow-hidden h-full min-h-[400px]"
      style={{ backgroundImage: "url('/image/foot5.png')" }}
    >
      <div className=" p-6 md:p-12 rounded-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-md">
              RAISE SMART. GROW FAST. LET'S START TODAY!
            </h2>
            
            {/* Input and Button */}
            <div className="flex flex-row sm:flex-row gap-3">
              <input
                type="email"
                placeholder="enter your email..."
                className="p-3 rounded-full border-2 border-gray-600 text-white w-72 sm:w-96"
              />
              <button className="bg-orange-500 hover:bg-orange-600 w-12 h-12 flex items-center justify-center rounded-full transition text-2xl">
                ➔
              </button>
            </div>

            {/* Checkbox */}
            {/* <div className="flex items-center space-x-2 text-white text-sm">
              <input type="checkbox" id="subscribe" className="accent-orange-500" />
              <label htmlFor="subscribe">stay tuned and subscribe to our newsletter</label>
            </div> */}
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-sm mt-4 md:mt-0">
            <div>
              <h3 className="font-bold mb-2 text-lg md:text-lg">Main home</h3>
              <ul className="space-y-1 text-sm md:text-sm">
                <li>Home</li>
                <li>About us</li>
                <li>Portfolio</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-lg md:text-lg">Location</h3>
              <p className="text-sm md:text-sm">ranchview dr.</p>
              <p className="text-sm md:text-sm">richardson california</p>
              <p className="text-sm md:text-sm">62536</p>
              <h3 className="font-bold mt-4 mb-2 text-lg md:text-lg">Contat us</h3>
              <p className="text-sm md:text-sm">infoorvio@gmail.com</p>
              <p className="text-sm md:text-sm">(999) 000 2343</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-lg md:text-lg">Follow Us</h3>
              <ul className="space-y-1 text-sm md:text-sm">
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
    </section>
  );
};

export default Footer;
