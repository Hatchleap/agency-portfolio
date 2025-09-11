"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "WHAT YOU MEAN BY AN END PRODUCT?",
    answer:
      "An end product is the final work that you build using the item purchased.",
  },
  {
    question: "WHERE IS THE LICENSE?",
    answer:
      "You can find the license in your purchase confirmation email or in your account dashboard.",
  },
  {
    question: "DO I NEED TO BUY A LICENSE PER WEBSITE?",
    answer:
      "Yes, each website requires a separate license unless you purchased a multi-site license.",
  },
  {
    question: "IS MY LICENSE TRANSFERABLE?",
    answer:
      "No, licenses are not transferable between users or organizations.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-black py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar vitae neque et porttitor. Integer non dapibus diam, ac
            eleifend lectus. In maximus ligula semper metus pellentesque
            mattis. Maecenas volutpat, diam enim sagittis quam.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-gray-300 py-3 cursor-pointer"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-sm md:text-base">
                  {faq.question}
                </h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
          <div className="border-t border-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
