
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTimes, FaPinterestP } from "react-icons/fa";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Innovating The Digital Landscape",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
          service: formData.interest,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "Innovating The Digital Landscape",
          message: "",
        });
      } else {
        setSubmitted(false);
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setSubmitted(false);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center py-10 px-2 md:px-0">
      <div className="w-full max-w-6xl bg-white/70 rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight">GET IN TOUCH</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-400 text-2xl mt-1" />
                <div>
                  <div className="font-bold">Email:</div>
                  <div className="text-gray-500">hello@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-orange-400 text-2xl mt-1" />
                <div>
                  <div className="font-bold">Phone Call:</div>
                  <div className="text-gray-500">208-6666-0112 308</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-400 text-2xl mt-1" />
                <div>
                  <div className="font-bold">Address:</div>
                  <div className="text-gray-500">4517 Washington Ave.<br />Manchester, Kentucky 39495</div>
                </div>
              </div>
            </div>
          </div>
          {/* Image with Socials */}
          <div className="mt-8">
            <div className="relative rounded-xl overflow-hidden">
              <Image src="/image/foot3.jpg" alt="Building" width={500} height={200} className="w-full h-48 object-cover grayscale" />
              <div className="absolute inset-0 flex items-center justify-center gap-6">
                <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 shadow hover:bg-orange-400 transition"><FaFacebookF /></a>
                <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 shadow hover:bg-orange-400 transition"><FaInstagram /></a>
                <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 shadow hover:bg-orange-400 transition"><FaTimes /></a>
                <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 shadow hover:bg-orange-400 transition"><FaPinterestP /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side (Form) */}
        <div className="md:w-1/2 bg-white/60 p-8 md:p-10 flex flex-col justify-center">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border-b border-gray-200 focus:outline-none focus:border-orange-400 py-3 bg-transparent"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border-b border-gray-200 focus:outline-none focus:border-orange-400 py-3 bg-transparent"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border-b border-gray-200 focus:outline-none focus:border-orange-400 py-3 bg-transparent"
            />
            <div>
              <div className="text-gray-500 mb-2">What Are You Interested In?</div>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="interest"
                    value="Innovating The Digital Landscape"
                    checked={formData.interest === "Innovating The Digital Landscape"}
                    onChange={handleChange}
                    className="accent-orange-400"
                  />
                  <span className="text-gray-700 font-semibold">Innovating The Digital Landscape</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="interest"
                    value="Digital Marketing Consulting"
                    checked={formData.interest === "Digital Marketing Consulting"}
                    onChange={handleChange}
                    className="accent-orange-400"
                  />
                  <span className="text-gray-700 font-semibold">Digital Marketing Consulting</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="interest"
                    value="Custom Software Solutions"
                    checked={formData.interest === "Custom Software Solutions"}
                    onChange={handleChange}
                    className="accent-orange-400"
                  />
                  <span className="text-gray-700 font-semibold">Custom Software Solutions</span>
                </label>
              </div>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              className="w-full border-b border-gray-200 focus:outline-none focus:border-orange-400 py-3 bg-transparent resize-none min-h-[60px]"
            />
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-black font-bold px-7 py-3 rounded-full shadow transition text-base"
                disabled={loading}
              >
                {loading ? "Sending..." : "SUBMIT NOW!"}
              </button>
              <span className="bg-orange-400 hover:bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
            {submitted && (
              <p className="text-orange-500 font-semibold">ᯓ➤ Message Sent Successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}