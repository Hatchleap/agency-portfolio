"use client";

import React from "react";

const blogPosts = [
  {
    id: 1,
    img: "/image/m.jpeg",
    category: "Responsive",
    title: "Why minimalist design is taking over",
    date: "31 July",
  },
  {
    id: 2,
    img: "/image/b.jpeg",
    category: "Creative",
    title: "The power of Motion in branding",
    date: "31 July",
  },
  {
    id: 3,
    img: "/image/e.jpeg",
    category: "Strategy",
    title: "Creative branding mistakes to avoid",
    date: "31 July",
  },
  {
    id: 4,
    img: "/image/m.jpeg",
    category: "Creative",
    title: "Every Brand needs creative strategy",
    date: "31 July",
  },
];

const Blog = () => {
  return (
    <section className="py-10 px-4 md:px-16 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">Our Blogs & News</p>
        <h2 className="text-3xl font-bold mb-8">Our latest insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="rounded-lg overflow-hidden group cursor-pointer">
              {/* Image Section */}
              <div className={index === 0 ? "relative h-[200px] md:h-[400px]" :
                               index === 1 ? "relative h-[200px] md:h-[450px]" :
                               index === 2 ? "relative h-[200px] md:h-[350px]" :
                                             "relative h-[200px] md:h-[400px]"}>
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                {/* Date Badge Positioned on Top Right */}
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-lg text-xs border border-gray-200">
                  {post.date}
                </div>
              </div>
              {/* Text Section Below the Image */}
              <div className="p-4 bg-white">
                <p className="text-base font-bold text-black mb-1">• {post.category}</p>
                <h3 className="text-lg font-thin">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
