import React from "react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full mt-40 border-t border-[#86981D]/20 overflow-hidden bg-transparent">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[500px] bg-[#86981D]/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative w-full px-6 md:px-12 lg:px-24 py-28">

        {/* Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-28 h-[3px] rounded-full bg-[#86981D]"></div>
        </div>

        {/* Heading */}
        <div className="text-center">

          <h2 className="font-['Iceland',sans-serif] text-5xl md:text-7xl tracking-[8px] uppercase text-white">
            READY TO CREATE
          </h2>

          <h2 className="mt-3 font-['Iceland',sans-serif] text-5xl md:text-7xl tracking-[8px] uppercase text-[#D5FF01]">
            SOMETHING AMAZING?
          </h2>

          <p className="mt-10 max-w-3xl mx-auto font-['Anonymous_Pro',sans-serif] text-lg md:text-xl leading-9 text-gray-400">
            Whether it's building scalable software, crafting intuitive user
            experiences, or solving complex problems, I'm always excited to
            collaborate on meaningful ideas and create impactful digital
            solutions.
          </p>

          {/* Status */}
          <div className="flex justify-center items-center gap-3 mt-10">

            <span className="w-3 h-3 rounded-full bg-[#D5FF01] animate-pulse"></span>

            <span className="font-['Anonymous_Pro',sans-serif] text-gray-300 text-lg">
              Available for Full-Time Opportunities
            </span>

          </div>

        </div>
        {/* Contact Section */}
{/* Contact */}
<div className="mt-16">

  <div className="flex justify-center mb-8">
    <div className="w-24 h-[2px] bg-[#86981D]/50 rounded-full"></div>
  </div>

  <h3 className="font-['Iceland',sans-serif] text-center text-4xl text-white tracking-[6px] uppercase mb-10">
    Contact
  </h3>

  <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">

    <a
      href="mailto:abinjacob258@gmail.com"
      className="font-['Anonymous_Pro',sans-serif] text-gray-300 hover:text-[#D5FF01] transition-colors"
    >
      📧 &nbsp;abinjacob258@gmail.com
    </a>

    <span className="hidden md:block text-[#86981D]/40 text-xl">|</span>

    <a
      href="tel:+91XXXXXXXXXX"
      className="font-['Anonymous_Pro',sans-serif] text-gray-300 hover:text-[#D5FF01] transition-colors"
    >
      📞 &nbsp;+91 9400956727
    </a>

    <span className="hidden md:block text-[#86981D]/40 text-xl">|</span>

    <span className="font-['Anonymous_Pro',sans-serif] text-gray-300">
      📍 &nbsp;Kerala, India
    </span>

  </div>

</div>

        {/* Back To Top */}
        <div className="flex justify-center mt-20">

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
        <div className="mt-24 text-center">

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
            Built with React • Tailwind CSS • Vite
          </p>

        </div>

      </div>

    </footer>
  );
}