import React, { useEffect, useState } from "react";

export function Navbar() {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("about");

    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideNavbar(entry.isIntersecting);
      },
      {
        threshold: 0.25, // Hide when 25% of About is visible
      }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        py-6 px-6 md:px-12 lg:px-24
        bg-black/50 backdrop-blur-md
        transition-all duration-500 ease-in-out
        ${
          hideNavbar
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      {/* Logo */}
      <div className="font-['Kolker_Brush',sans-serif] text-5xl md:text-6xl cursor-pointer hover:opacity-80 transition-opacity">
        <span className="text-[#d5ff01]">A</span>
        <span className="text-white/80">bin </span>
        <span className="text-[#d5ff01]">J</span>
        <span className="text-white/80">acob</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 lg:gap-16">
        <a
          href="#home"
          className="font-['Iceland',sans-serif] text-2xl lg:text-3xl text-white hover:text-[#d5ff01] transition-colors"
        >
          HOME
        </a>

        <a
          href="#about"
          className="font-['Iceland',sans-serif] text-2xl lg:text-3xl text-white hover:text-[#d5ff01] transition-colors"
        >
          ABOUT
        </a>

        <a
          href="mailto:abinjacob258@gmail.com"
          className="font-['Iceland',sans-serif] text-2xl lg:text-3xl text-white hover:text-[#d5ff01] transition-colors"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
}