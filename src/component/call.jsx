"use client";

import Image from "next/image";

const Call = () => {
  return (
    <section className="relative bg-[#ffe6b0] w-full py-24 flex items-center justify-center overflow-hidden">
      {/* Abstract shapes and icons - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* Top left triangle with icon */}
        <div className="absolute top-12 left-32">
          <div className="bg-orange-300 w-36 h-36 rotate-12 rounded-[20%] flex items-center justify-center">
            <Image
              src="/image/p.png"
              alt="icon1"
              width={60}
              height={60}
              className="rounded-xl"
            />
          </div>
        </div>
        {/* Left small triangle */}
        <div className="absolute top-56 left-16">
          <div className="bg-red-200 w-10 h-10 rotate-[-20deg] rounded-[20%]"></div>
        </div>
        {/* Left outlined triangle */}
        <div className="absolute top-72 left-44">
          <svg width="32" height="32">
            <polygon points="16,4 28,28 4,28" fill="none" stroke="#ffb6b6" strokeWidth="3" />
          </svg>
        </div>
        {/* Bottom left circle with icon */}
        <div className="absolute bottom-24 left-72">
          <div className="bg-orange-200 w-28 h-28 rounded-full flex items-center justify-center">
            <Image
              src="/image/p.png"
              alt="icon2"
              width={60}
              height={60}
              className="rounded-xl"
            />
          </div>
        </div>
        {/* Top right outlined diamond */}
        <div className="absolute top-32 right-80">
          <div className="border-2 border-lime-400 w-7 h-7 rotate-45 rounded-sm"></div>
        </div>
        {/* Top right solid diamond */}
        <div className="absolute top-44 right-72">
          <div className="bg-lime-400 w-9 h-9 rotate-45 rounded-sm"></div>
        </div>
        {/* Right diamond with icon */}
        <div className="absolute right-32 top-80">
          <div className="bg-red-200 w-28 h-28 rotate-45 rounded-2xl flex items-center justify-center">
            <Image
              src="/image/p.png"
              alt="icon3"
              width={60}
              height={60}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
          We make your online<br />presence shine
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
          Book a call to see how Web Impetus can help elevate your company’s online presence to the next level.
        </p>
        <button className="border-2 text-black border-black rounded-xl px-8 py-3 text-lg font-medium hover:bg-black hover:text-white transition">
          Schedule a Call
        </button>
      </div>
    </section>
  );
};

export default Call;