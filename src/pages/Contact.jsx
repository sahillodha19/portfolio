import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (Hook this to your backend)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white dark:bg-darkMatte py-20 px-6 transition-colors duration-300">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-darkNavy dark:text-textDark mb-8">📬 Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-lightGray dark:bg-darkSurface p-6 rounded-xl shadow-md text-left space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-white dark:bg-darkMatte text-darkNavy dark:text-textDark border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-white dark:bg-darkMatte text-darkNavy dark:text-textDark border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 rounded bg-white dark:bg-darkMatte text-darkNavy dark:text-textDark border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold"
          ></textarea>
          <button
            type="submit"
            className="bg-gold text-white px-6 py-2 rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
