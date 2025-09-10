"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "Web Design",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          contact: "",
          service: "Web Design",
          message: "",
        });
      } else {
        const data = await res.json();
        alert(data.error || "Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center md:text-left">
          <span className="font-bold">Get</span> in touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Contact"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Service Desired</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option>Web Design</option>
                  <option>App Development</option>
                  <option>SEO Optimization</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Your Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <p className="text-xs text-gray-500">
              ⚠ All the fields are required. By sending the form you agree to the{" "}
              <a href="#" className="text-blue-600 underline">Terms & Conditions</a> and{" "}
              <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="bg-zinc-800 border-2 border-zinc-600 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
            {submitted && (
              <p className="text-green-600 font-semibold">✅ Message Sent Successfully!</p>
            )}
          </form>

          {/* Contact Info Section (unchanged) */}
          <div className="space-y-6 w-full">
            <h3 className="text-lg font-bold">CONTACTS</h3>
            <p className="text-gray-600">
              Come visit us waiting for you in our office, let’s bring your idea to life!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-400 text-white p-3 rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p>123 King Street, London W60 10250</p>
                  <p>United Kingdom</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-400 text-white p-3 rounded-full">
                  <FaEnvelope />
                </div>
                <div>
                  <p>support@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-400 text-white p-3 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p>+61 383 767 284</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
