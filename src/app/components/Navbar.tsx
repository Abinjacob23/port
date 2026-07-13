import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Track which section is active, for the underline indicator
  useEffect(() => {
    const allIds = ["home", "about", "skills", "projects", "contact"];
    const sections = allIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        px-6 md:px-12 lg:px-24 py-3
        bg-black/70 backdrop-blur-lg
        shadow-[0_4px_30px_rgba(0,0,0,0.4)]
        border-b border-[#86981D]/20
      "
    >
      {/* Logo */}
      <div className="font-['Kolker_Brush',sans-serif] text-4xl md:text-5xl cursor-pointer transition-transform duration-300 hover:opacity-80 hover:scale-105">
        <span className="text-[#d5ff01]">A</span>
        <span className="text-white/80">bin </span>
        <span className="text-[#d5ff01]">J</span>
        <span className="text-white/80">acob</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8 lg:gap-16">
        {NAV_LINKS.map(({ href, label }) => {
          const isActive = activeSection === href.replace("#", "");

          return (
            <a
              key={href}
              href={href}
              className={`
                relative font-['Iceland',sans-serif] tracking-[2px]
                text-xl lg:text-2xl
                transition-colors duration-300 ease-in-out
                ${isActive ? "text-[#d5ff01]" : "text-white hover:text-[#d5ff01]"}
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-[#d5ff01]
                after:transition-all after:duration-300 after:ease-in-out
                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
              `}
            >
              {label}
            </a>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden flex flex-col gap-[5px] w-8 z-50 relative"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`h-[2px] w-full bg-[#d5ff01] transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        ></span>
        <span
          className={`h-[2px] w-full bg-[#d5ff01] transition-all duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-[2px] w-full bg-[#d5ff01] transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Panel */}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen
          bg-black/95 backdrop-blur-lg
          flex flex-col items-center justify-center gap-10
          transition-all duration-500 ease-in-out
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {NAV_LINKS.map(({ href, label }) => {
          const isActive = activeSection === href.replace("#", "");

          return (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className={`
                font-['Iceland',sans-serif] tracking-[4px] text-4xl
                transition-colors duration-300
                ${isActive ? "text-[#d5ff01]" : "text-white hover:text-[#d5ff01]"}
              `}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}