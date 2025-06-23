"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent (placeholder)");
    setForm({ name: "", email: "", subject: "", message: "" });

    // Optional: remove message after a while
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gold mb-8 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-gold font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block mb-1 text-gold font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-gold font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Subject of your message"
            />
          </div>

          <div>
            <label className="block mb-1 text-gold font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-black py-2 px-4 rounded-md hover:bg-yellow-400 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-green-400 text-sm mt-2 text-center">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}
