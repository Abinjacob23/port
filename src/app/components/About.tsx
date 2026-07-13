import React from "react";

export function About() {
  return (
    <section id="about" className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 px-6 md:px-12 lg:px-24 pt-2 text-white pb-20">
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="font-['Inter',sans-serif] tracking-[1.6px] text-xl uppercase">
          <span className="text-white/65">HELLO, </span>
          <span className="text-white/65">MY NAME IS</span>
        </div>
        
        <h2 className="font-['Inter',sans-serif] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[3px] sm:tracking-[5px] uppercase">
          <span className="text-[#d5ff01]">ABIN</span> JACOB
        </h2>
        
        <p className="font-['Anonymous_Pro',sans-serif] text-xl md:text-2xl leading-[1.8] text-gray-300">
          From Kerala, India. Skilled in web development, application development, and UX/UI design, with a strong foundation in creating responsive, user-focused digital solutions. Passionate about technology, innovation, and delivering clean, efficient, and intuitive experiences.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col gap-6 justify-center">
        <h3 className="font-['Inter',sans-serif] font-semibold text-3xl md:text-[40px] leading-[1.4] tracking-[1.2px]">
          <span className="text-[#e1ff01]">Driven,</span> Innovative<br/>
          Software <span className="text-[#e1ff01]">Engineer</span>
        </h3>
        
        <p className="font-['Anonymous_Pro',sans-serif] text-xl md:text-2xl leading-[1.8] text-gray-300">
          Enthusiastic and detail-oriented aspiring software developer with a strong passion for technology and software development. Eager to learn new programming languages, tools, and concepts while continuously improving technical skills. A quick learner with good problem-solving abilities, teamwork skills, and a positive attitude. Committed to contributing effectively to organizational goals and building a successful career in software development.
        </p>
      </div>
    </section>
  );
}