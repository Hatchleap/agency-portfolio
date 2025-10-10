// "use client";
// import React, { useState } from "react";

// const faqs = [
//   {
//     question: "WHAT YOU MEAN BY AN END PRODUCT?",
//     answer:
//       "An end product is the final work that you build using the item purchased.",
//   },
//   {
//     question: "WHERE IS THE LICENSE?",
//     answer:
//       "You can find the license in your purchase confirmation email or in your account dashboard.",
//   },
//   {
//     question: "DO I NEED TO BUY A LICENSE PER WEBSITE?",
//     answer:
//       "Yes, each website requires a separate license unless you purchased a multi-site license.",
//   },
//   {
//     question: "IS MY LICENSE TRANSFERABLE?",
//     answer:
//       "No, licenses are not transferable between users or organizations.",
//   },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full bg-white text-black py-12 px-6 md:px-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
//             pulvinar vitae neque et porttitor. Integer non dapibus diam, ac
//             eleifend lectus. In maximus ligula semper metus pellentesque
//             mattis. Maecenas volutpat, diam enim sagittis quam.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col space-y-2">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border-t border-gray-300 py-3 cursor-pointer"
//             >
//               <div
//                 className="flex justify-between items-center"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <h3 className="font-semibold text-sm md:text-base">
//                   {faq.question}
//                 </h3>
//                 <span className="text-xl">
//                   {openIndex === index ? "−" : "+"}
//                 </span>
//               </div>
//               {openIndex === index && (
//                 <p className="mt-2 text-gray-600 text-sm leading-relaxed">
//                   {faq.answer}
//                 </p>
//               )}
//             </div>
//           ))}
//           <div className="border-t border-gray-300" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;










"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What type of clients do you usually work with?",
      answer:
        "We partner with a diverse range of clients, from ambitious startups to established corporations. Our focus is on helping any business looking to elevate its brand and achieve significant growth.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "The timeline depends on the scope and complexity of the project, but we always ensure timely delivery without compromising on quality.",
    },
    {
      question: "Do you offer ongoing support after a project ends?",
      answer:
        "Yes, we provide ongoing support and maintenance services to ensure your digital presence continues to thrive.",
    },
    {
      question: "How do I get started or request a proposal?",
      answer:
        "You can reach out to us through our contact page or request a proposal directly. We'll get back to you promptly with the next steps.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
           Frequently Asked Questions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          YOU ASKED, WE ANSWERED
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-10">
          We offer you a comprehensive range of digital marketing services designed.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl p-5 cursor-pointer transition hover:bg-neutral-800"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-medium">
                  {faq.question}
                </h3>
                <span className="ml-4 text-orange-500">
                  {openIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-3 text-gray-400 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
