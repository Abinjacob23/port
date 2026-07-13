import React from "react";

// TODO: replace with your real work / internship history
const experience = [
  {
    role: "Job Title",
    company: "Company Name",
    duration: "Month Year — Month Year",
    points: [
      "A key responsibility or achievement from this role.",
      "Another accomplishment, ideally with a measurable result.",
      "A technology, process, or skill you used or learned here.",
    ],
  },
  {
    role: "Job Title",
    company: "Company Name",
    duration: "Month Year — Month Year",
    points: [
      "A key responsibility or achievement from this role.",
      "Another accomplishment, ideally with a measurable result.",
    ],
  },
  {
    role: "Job Title",
    company: "Company Name",
    duration: "Month Year — Month Year",
    points: [
      "A key responsibility or achievement from this role.",
      "Another accomplishment, ideally with a measurable result.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-6 md:px-12 lg:px-24 py-20 pb-40 relative z-10"
    >
      <div className="w-full text-center mb-16">
        <span className="font-['Anonymous_Pro',sans-serif] uppercase tracking-[4px] text-sm text-[#86981D]">
          Where I've Worked
        </span>
        <h2 className="mt-4 font-['Iceland',sans-serif] text-4xl sm:text-5xl md:text-6xl tracking-[4px] sm:tracking-[6px] uppercase break-words">
          <span className="text-white">MY </span>
          <span className="text-[#D5FF01]">EXPERIENCE</span>
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#86981D]/30 md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-14">
          {experience.map((job, i) => (
            <div key={i} className="relative pl-12 md:pl-0">
              {/* Timeline dot */}
              <span className="absolute left-[9px] md:left-1/2 top-2 w-4 h-4 rounded-full bg-[#D5FF01] md:-translate-x-1/2 ring-4 ring-black"></span>

              <div
                className={`
                  md:w-1/2
                  ${i % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"}
                `}
              >
                <span className="font-['Anonymous_Pro',sans-serif] uppercase tracking-[2px] text-sm text-[#86981D]">
                  {job.duration}
                </span>

                <h3 className="mt-2 font-['Iceland',sans-serif] text-2xl md:text-3xl text-white tracking-[2px] uppercase">
                  {job.role}
                </h3>

                <p className="font-['Anonymous_Pro',sans-serif] text-[#D5FF01] text-lg mb-3">
                  {job.company}
                </p>

                <ul
                  className={`
                    font-['Anonymous_Pro',sans-serif] text-gray-400 text-base leading-7
                    flex flex-col gap-1
                    ${i % 2 === 0 ? "md:items-end" : "md:items-start"}
                  `}
                >
                  {job.points.map((point, j) => (
                    <li key={j} className={i % 2 === 0 ? "md:text-right" : "md:text-left"}>
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}