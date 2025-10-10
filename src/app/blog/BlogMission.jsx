// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// // Sample blog data
// const blogPosts = [
//   {
//     id: 1,
//     title: "Building a cinematic mood with just one lens",
//     excerpt: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
//     image: "/image/b.jpeg",
//     date: "11 Aug, 2025",
//     category: "Creative",
//     tags: ["AI CONSULT", "BRANDING", "DESIGN"],
//   },
//   {
//     id: 2,
//     title: "Exploring tension and texture through abstract",
//     excerpt: "Discover how abstract visuals can evoke emotion and spark creativity in your projects.",
//     image: "/image/m.jpeg",
//     date: "11 Aug, 2025",
//     category: "Photography",
//     tags: ["PHOTOGRAPHY", "DESIGN"],
//   },
//   {
//     id: 3,
//     title: "Capturing still moments where new ideas emerge",
//     excerpt: "A look at the process of capturing inspiration in the everyday.",
//     image: "/image/e.jpeg",
//     date: "15 Aug, 2025",
//     category: "Strategy",
//     tags: ["AI DATA", "PHOTOGRAPHY"],
//   },
//   {
//     id: 4,
//     title: "Capturing still moments where new ideas emerge",
//     excerpt: "A look at the process of capturing inspiration in the everyday.",
//     image: "/image/b.jpeg",
//     date: "19 Aug, 2025",
//     category: "Strategy",
//     tags: ["DESIGN", "BRANDING"],
//   },
//   // Add more posts as needed
// ];

// const categories = ["Creative", "Photography", "Strategy"];
// const tags = ["AI CONSULT", "AI DATA", "BRANDING", "DESIGN", "NEWS", "PHOTOGRAPHY"];

// export default function BlogMission() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedTag, setSelectedTag] = useState(null);


//   // Filter posts by category or tag, then sort by newest (highest id) first
//   let filteredPosts = blogPosts;
//   if (selectedCategory) {
//     filteredPosts = filteredPosts.filter((post) => post.category === selectedCategory);
//   }
//   if (selectedTag) {
//     filteredPosts = filteredPosts.filter((post) => post.tags.includes(selectedTag));
//   }
//   // Always sort by newest first
//   filteredPosts = [...filteredPosts].sort((a, b) => b.id - a.id);

//   // Show only the latest 3 for both left content and recent posts
//   const latestPosts = filteredPosts.slice(0, 3);
//   const [featured, ...rest] = latestPosts;
//   const recentPosts = latestPosts;

//   // Parallax refs and logic
//   const containerRefs = useRef([]);
//   const offsetRefs = useRef([]);
//   const animationFrame = useRef(null);

//   const updateParallax = () => {
//     containerRefs.current.forEach((ref, index) => {
//       if (ref) {
//         const rect = ref.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
//         const targetOffset = ((rect.top - windowHeight / 2) / windowHeight) * 30;
//         offsetRefs.current[index] = offsetRefs.current[index] || 0;
//         // Fast easing factor (0.35)
//         offsetRefs.current[index] += (targetOffset - offsetRefs.current[index]) * 0.30;
//         const img = ref.querySelector('.parallax-image');
//         if (img) {
//           img.style.transform = `translateY(${offsetRefs.current[index]}px) scale(1.2)`;
//         }
//       }
//     });
//     animationFrame.current = requestAnimationFrame(updateParallax);
//   };

//   useEffect(() => {
//     animationFrame.current = requestAnimationFrame(updateParallax);
//     return () => cancelAnimationFrame(animationFrame.current);
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto py-10 px-2 md:px-6">
//       {/* Left: Main Content */}
//       <div className="flex-1 min-w-0">
//         {featured && (
//           <div className="mb-8" ref={el => (containerRefs.current[0] = el)}>
//             <div className="rounded-2xl overflow-hidden mb-4 relative w-full h-64 md:h-96 z-0">
//               <div
//                 className="parallax-image absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-300 ease-out pointer-events-none z-0"
//                 style={{
//                   backgroundImage: `url(${featured.image})`,
//                   transform: "translateY(0px) scale(1.2)",
//                 }}
//               ></div>
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold mb-2 truncate">{featured.title}</h2>
//             <p className="text-gray-600 mb-2 truncate">{featured.excerpt}</p>
//             <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:underline group">
//               Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
//             </a>
//           </div>
//         )}
//         {/* Other posts */}
//         <div className="grid gap-8">
//           {rest.map((post, i) => (
//             <div key={post.id} className="rounded-2xl overflow-hidden bg-white" ref={el => (containerRefs.current[i + 1] = el)}>
//               <div className="relative w-full h-64 md:h-80 overflow-hidden z-0">
//                 <div
//                   className="parallax-image absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-300 ease-out pointer-events-none z-0"
//                   style={{
//                     backgroundImage: `url(${post.image})`,
//                     transform: "translateY(0px) scale(1.2)",
//                   }}
//                 ></div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-bold mb-1 truncate">{post.title}</h3>
//                 <p className="text-gray-600 mb-2 truncate">{post.excerpt}</p>
//                 <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:underline group">
//                   Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Right: Sidebar */}
//       <aside className="w-full md:w-80 flex-shrink-0 space-y-10">
//         {/* Categories */}
//         <div>
//           <h4 className="font-bold text-xl md:text-2xl mb-3">Categories</h4>
//           <ul className="space-y-2">
//             {categories.map((cat) => (
//               <li key={cat}>
//                 <button
//                   className={`text-left w-full hover:underline ${selectedCategory === cat ? "font-bold text-lg md:text-xl text-black" : "text-gray-700"}`}
//                   onClick={() => {
//                     setSelectedCategory(cat);
//                     setSelectedTag(null);
//                   }}
//                 >
//                   {cat}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Recent Posts */}
//         <div>
//           <h4 className="font-bold text-xl md:text-2xl mb-3">Recent Posts</h4>
//           <ul className="space-y-4">
//             {recentPosts.map((post) => (
//               <li key={post.id} className="flex items-center gap-3">
//                 <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
//                   <Image src={post.image} alt={post.title} width={56} height={56} className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <div className="text-sm text-gray-400 mb-1">{post.date}</div>
//                   <div className="text-base md:text-lg font-semibold text-black truncate max-w-[120px]">{post.title}</div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Popular Tags */}
//         <div>
//           <h4 className="font-bold text-xl md:text-2xl mb-3">Popular Tags</h4>
//           <div className="flex flex-wrap gap-2">
//             {tags.map((tag) => (
//               <button
//                 key={tag}
//                 className={`px-3 py-1 rounded-full border text-xs ${selectedTag === tag ? "bg-black text-white border-black" : "bg-gray-100 text-gray-700 border-gray-200"}`}
//                 onClick={() => {
//                   setSelectedTag(tag);
//                   setSelectedCategory(null);
//                 }}
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// }




"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Building a cinematic mood with just one lens",
    excerpt: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
    image: "/image/b.jpeg",
    date: "11 Aug, 2025",
    category: "Creative",
    tags: ["AI CONSULT", "BRANDING", "DESIGN"],
  },
  {
    id: 2,
    title: "Exploring tension and texture through abstract",
    excerpt: "Discover how abstract visuals can evoke emotion and spark creativity in your projects.",
    image: "/image/m.jpeg",
    date: "11 Aug, 2025",
    category: "Photography",
    tags: ["PHOTOGRAPHY", "DESIGN"],
  },
  {
    id: 3,
    title: "Capturing still moments where new ideas emerge",
    excerpt: "A look at the process of capturing inspiration in the everyday.",
    image: "/image/e.jpeg",
    date: "15 Aug, 2025",
    category: "Strategy",
    tags: ["AI DATA", "PHOTOGRAPHY"],
  },
  {
    id: 4,
    title: "Capturing still moments where new ideas emerge",
    excerpt: "A look at the process of capturing inspiration in the everyday.",
    image: "/image/b.jpeg",
    date: "19 Aug, 2025",
    category: "Strategy",
    tags: ["DESIGN", "BRANDING"],
  },
  // Add more posts as needed
];

const categories = ["Creative", "Photography", "Strategy"];
const tags = ["AI CONSULT", "AI DATA", "BRANDING", "DESIGN", "NEWS", "PHOTOGRAPHY"];

export default function BlogMission() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);


  // Filter posts by category or tag, then sort by newest (highest id) first
  let filteredPosts = blogPosts;
  if (selectedCategory) {
    filteredPosts = filteredPosts.filter((post) => post.category === selectedCategory);
  }
  if (selectedTag) {
    filteredPosts = filteredPosts.filter((post) => post.tags.includes(selectedTag));
  }
  // Always sort by newest first
  filteredPosts = [...filteredPosts].sort((a, b) => b.id - a.id);

  // Show only the latest 3 for both left content and recent posts
  const latestPosts = filteredPosts.slice(0, 3);
  const [featured, ...rest] = latestPosts;
  const recentPosts = latestPosts;

  // Parallax refs and logic
  const containerRefs = useRef([]);
  const offsetRefs = useRef([]);
  const animationFrame = useRef(null);

  const updateParallax = () => {
    containerRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const targetOffset = ((rect.top - windowHeight / 2) / windowHeight) * 30;
        offsetRefs.current[index] = offsetRefs.current[index] || 0;
        // Fast easing factor (0.35)
        offsetRefs.current[index] += (targetOffset - offsetRefs.current[index]) * 0.30;
        const img = ref.querySelector('.parallax-image');
        if (img) {
          img.style.transform = `translateY(${offsetRefs.current[index]}px) scale(1.2)`;
        }
      }
    });
    animationFrame.current = requestAnimationFrame(updateParallax);
  };

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(updateParallax);
    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto py-10 px-2 md:px-6">
      {/* Left: Main Content */}
      <div className="flex-1 min-w-0">
        {featured && (
          <div className="mb-8" ref={el => (containerRefs.current[0] = el)}>
            <div className="rounded-2xl overflow-hidden mb-4 relative w-full h-64 md:h-96 z-0">
              <div
                className="parallax-image absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-300 ease-out pointer-events-none z-0"
                style={{
                  backgroundImage: `url(${featured.image})`,
                  transform: "translateY(0px) scale(1.2)",
                }}
              ></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 truncate">{featured.title}</h2>
            <p className="text-gray-600 mb-2 truncate">{featured.excerpt}</p>
            <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:underline group">
              Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        )}
        {/* Other posts */}
        <div className="grid gap-8">
          {rest.map((post, i) => (
            <div key={post.id} className="rounded-2xl overflow-hidden bg-white" ref={el => (containerRefs.current[i + 1] = el)}>
              <div className="relative w-full h-64 md:h-80 overflow-hidden z-0">
                <div
                  className="parallax-image absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-300 ease-out pointer-events-none z-0"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    transform: "translateY(0px) scale(1.2)",
                  }}
                ></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 truncate">{post.title}</h3>
                {/* <p className="text-gray-600 mb-2 truncate">{post.excerpt}</p> */}
                <p className="text-gray-600 mb-2 line-clamp-2">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:underline group">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Sidebar */}
      <aside className="w-full md:w-80 flex-shrink-0 space-y-10">
        {/* Categories */}
        <div>
          <h4 className="font-bold text-xl md:text-2xl mb-3">Categories</h4>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`text-left w-full hover:underline ${selectedCategory === cat ? "font-bold text-lg md:text-xl text-black" : "text-gray-700"}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedTag(null);
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Recent Posts */}
        <div>
          <h4 className="font-bold text-xl md:text-2xl mb-3">Recent Posts</h4>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.id} className="flex items-center gap-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={post.image} alt={post.title} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">{post.date}</div>
                  <div className="text-base md:text-base 3xl:text-lg 5xl:text-lg font-semibold text-black leading-tight break-words max-w-[240px] md:max-w-[300px]">
                    {post.title}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Popular Tags */}
        <div>
          <h4 className="font-bold text-xl md:text-2xl mb-3">Popular Tags</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full border text-xs ${selectedTag === tag ? "bg-black text-white border-black" : "bg-gray-100 text-gray-700 border-gray-200"}`}
                onClick={() => {
                  setSelectedTag(tag);
                  setSelectedCategory(null);
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

