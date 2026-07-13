import React, { useState } from "react";

// Google Form submission endpoint + field mapping
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScpdervKd0phlBcDw1sGwx3XzZ_-pg_ittDut0L72hQtCiCpA/formResponse";

const GOOGLE_FORM_ENTRIES = {
  name: "entry.439128533",
  email: "entry.1720288174",
  phone: "entry.395292673",
  subject: "entry.1577934026",
  message: "entry.260309457",
};

export function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const body = new URLSearchParams();
    Object.entries(GOOGLE_FORM_ENTRIES).forEach(([field, entryId]) => {
      body.append(entryId, form[field]);
    });

    try {
      // Google Forms doesn't allow reading the response cross-origin,
      // so "no-cors" is required. The request still goes through and
      // the response lands in the linked Sheet even though we can't
      // inspect the result here.
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      setStatus("sent");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset back to idle after a while so the person can send another message
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-transparent">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[200px] bg-[#86981D]/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative w-full px-6 md:px-12 lg:px-24 pt-2">

        {/* Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-28 h-[3px] rounded-full bg-[#86981D]"></div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start mt-0">

          {/* Left: Info */}
          <div>

            <span className="font-['Anonymous_Pro',sans-serif] uppercase tracking-[4px] text-sm text-[#86981D]">
              Get In Touch
            </span>

            <h2 className="mt-2 font-['Iceland',sans-serif] text-5xl md:text-6xl tracking-[6px] uppercase text-white leading-tight">
              READY TO CREATE
            </h2>

            <h2 className="font-['Iceland',sans-serif] text-5xl md:text-6xl tracking-[6px] uppercase text-[#D5FF01] leading-tight">
              SOMETHING AMAZING?
            </h2>

            <p className="mt-4 max-w-md font-['Anonymous_Pro',sans-serif] text-lg leading-9 text-gray-400">
              Whether it's building scalable software, crafting intuitive user
              experiences, or solving complex problems, I'm always excited to
              collaborate on meaningful ideas and create impactful digital
              solutions.
            </p>

            {/* Status */}
            <div className="flex items-center gap-3 mt-4">
              <span className="w-3 h-3 rounded-full bg-[#D5FF01] animate-pulse"></span>
              <span className="font-['Anonymous_Pro',sans-serif] text-gray-300 text-lg">
                Available for Full-Time Opportunities
              </span>
            </div>

            {/* Contact List */}
            <div className="mt-6 flex flex-col gap-5">

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abinjacob258@gmail.com"
                className="flex items-center gap-4 font-['Anonymous_Pro',sans-serif] text-gray-300 hover:text-[#D5FF01] transition-colors"
              >
                <span className="w-9 h-9 shrink-0 rounded-full border border-[#86981D]/60 flex items-center justify-center text-[#86981D]">
                  ✓
                </span>
                abinjacob258@gmail.com
              </a>

              <a
                href="tel:+919400956727"
                className="flex items-center gap-4 font-['Anonymous_Pro',sans-serif] text-gray-300 hover:text-[#D5FF01] transition-colors"
              >
                <span className="w-9 h-9 shrink-0 rounded-full border border-[#86981D]/60 flex items-center justify-center text-[#86981D]">
                  ✓
                </span>
                +91 9400956727
              </a>

              <div className="flex items-center gap-4 font-['Anonymous_Pro',sans-serif] text-gray-300">
                <span className="w-9 h-9 shrink-0 rounded-full border border-[#86981D]/60 flex items-center justify-center text-[#86981D]">
                  ✓
                </span>
                Kerala, Karnataka
              </div>

            </div>

          </div>

          {/* Right: Form */}
          <div>

            <h3 className="font-['Iceland',sans-serif] text-3xl text-white tracking-[6px] uppercase mb-8">
              Contact
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block font-['Anonymous_Pro',sans-serif] text-sm text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-[#86981D]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-['Anonymous_Pro',sans-serif] focus:outline-none focus:border-[#D5FF01] transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block font-['Anonymous_Pro',sans-serif] text-sm text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-[#86981D]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-['Anonymous_Pro',sans-serif] focus:outline-none focus:border-[#D5FF01] transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block font-['Anonymous_Pro',sans-serif] text-sm text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="+91 (123) 45678"
                    className="w-full bg-white/5 border border-[#86981D]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-['Anonymous_Pro',sans-serif] focus:outline-none focus:border-[#D5FF01] transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block font-['Anonymous_Pro',sans-serif] text-sm text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="Subject"
                    className="w-full bg-white/5 border border-[#86981D]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-['Anonymous_Pro',sans-serif] focus:outline-none focus:border-[#D5FF01] transition-colors disabled:opacity-50"
                  />
                </div>

              </div>

              <div>
                <label className="block font-['Anonymous_Pro',sans-serif] text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full bg-white/5 border border-[#86981D]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-['Anonymous_Pro',sans-serif] focus:outline-none focus:border-[#D5FF01] transition-colors resize-none disabled:opacity-50"
                />
              </div>

              <div className="flex items-center gap-4">

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="self-start flex items-center gap-3 bg-[#D5FF01] text-black font-['Anonymous_Pro',sans-serif] font-bold px-8 py-3 rounded-lg hover:bg-[#86981D] hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <span>➤</span>}
                </button>

                {status === "sent" && (
                  <span className="font-['Anonymous_Pro',sans-serif] text-[#D5FF01] text-sm">
                    ✓ Message sent — thanks for reaching out!
                  </span>
                )}

                {status === "error" && (
                  <span className="font-['Anonymous_Pro',sans-serif] text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </span>
                )}

              </div>

            </form>

          </div>

        </div>

        {/* Back To Top */}
        <div className="flex justify-center mt-10">

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center"
          >

            <div className="
              w-16
              h-16
              rounded-full
              border-2
              border-[#86981D]
              flex
              items-center
              justify-center
              text-[#86981D]
              text-3xl
              transition-all
              duration-300
              group-hover:bg-[#86981D]
              group-hover:text-black
              group-hover:-translate-y-1
            ">
              ↑
            </div>

            <span className="mt-3 font-['Anonymous_Pro',sans-serif] text-sm text-gray-500 group-hover:text-[#D5FF01] transition-colors">
              Back to Top
            </span>

          </button>

        </div>

        {/* Signature */}
        <div className="mt-6 text-center">

          <p className="font-['Anonymous_Pro',sans-serif] uppercase tracking-[4px] text-gray-500 text-sm">
            Designed & Developed By
          </p>

          <h3 className="mt-3 font-['Kolker_Brush',sans-serif] text-6xl md:text-7xl">
            <span className="text-[#D5FF01]">A</span>
            <span className="text-white/80">bin </span>
            <span className="text-[#D5FF01]">J</span>
            <span className="text-white/80">acob</span>
          </h3>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#86981D]/20">

        <div className="px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="font-['Anonymous_Pro',sans-serif] text-gray-500 text-sm">
            © {new Date().getFullYear()} Abin Jacob. All Rights Reserved.
          </p>

          <p className="font-['Anonymous_Pro',sans-serif] text-gray-500 text-sm">
            Built with React • Tailwind CSS • Vite • Figma
          </p>

        </div>

      </div>

    </footer>
  );
}