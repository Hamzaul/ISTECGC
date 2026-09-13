"use client";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/FooterCGC";

const initialForm = { name: "", email: "", subject: "", message: "", phone: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Could not reach the server. Please try again.");
    }
  };

  return (
    <div className="mt-14 md:mt-24 overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col items-center px-4">
        <div className="text-[clamp(2rem,9vw,7rem)] font-bold py-4 flex flex-col items-center group w-full hover:text-[#8B0000] text-center">
          CONTACT US
          <hr className="h-1 w-[60%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]" />
        </div>

        <p className="font-hamlin text-center max-w-2xl text-base md:text-lg text-gray-700 mb-8">
          Have a question, a partnership idea, or want to get involved with
          ISTE-CGC? Send us a message and we&apos;ll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl border-4 border-black p-5 sm:p-8 mb-16 bg-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-hamlin text-sm mb-1">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="border-2 border-black px-3 py-2 outline-none focus:border-[#8B0000]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-hamlin text-sm mb-1">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="border-2 border-black px-3 py-2 outline-none focus:border-[#8B0000]"
              />
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="phone" className="font-hamlin text-sm mb-1">
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="border-2 border-black px-3 py-2 outline-none focus:border-[#8B0000]"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="subject" className="font-hamlin text-sm mb-1">
              Subject *
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              className="border-2 border-black px-3 py-2 outline-none focus:border-[#8B0000]"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="message" className="font-hamlin text-sm mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="border-2 border-black px-3 py-2 outline-none focus:border-[#8B0000] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 w-full bg-black text-white py-3 font-anton text-lg tracking-wide hover:bg-[#8B0000] transition-colors duration-300 disabled:opacity-50"
          >
            {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-green-600 font-hamlin text-center">
              Thanks! Your message has been sent -- we&apos;ll get back to you
              soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 font-hamlin text-center">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
