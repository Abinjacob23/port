import React from "react";
import SmartHome from "../../assets/smart.png";
import Campus from "../../assets/campus.png";
import Student from "../../assets/student.png";

// TODO: replace with your real projects
const projects = [
  {
    title: "Smart Home Surveillance & Monitoring System",
    description:
      "Developed a cross-platform IoT mobile application for smart home security using React Native and Python. The system provides real-time monitoring, automated alert notifications, remote device control, and AI-powered crack detection, gas leakage monitoring, and electricity analytics through REST APIs.",
    tags: [
      "React Native",
      "Python",
      "REST API",
      "SQLite",
      "TensorFlow",
      "IoT",
    ],
    githubUrl: "https://github.com/Abinjacob23/smart_home",
    image: SmartHome,
}, 
  {
    title: "Campus Event Management System",
    description:
      "Built a full-stack event management platform that streamlines campus event scheduling and administration. Implemented RESTful APIs, a responsive React interface, authentication, and an admin dashboard for efficient event management.",
    tags: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Node.js",
    ],
    githubUrl: "https://github.com/ANN-MARIA-TOMICHAN/EventHub",
    image: Campus,
  },
  {
    title: "Student Management Portal",
    description:
      "Designed and developed a secure student management portal with role-based authentication and complete CRUD functionality. The application enables faculty and administrators to efficiently manage student records through an intuitive interface.",
    tags: [
      "ASP.NET",
      "C#",
      "SQL Server",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/BasilMathewSanthosh/TeacherApp",
    image: Student,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 md:px-12 lg:px-24 py-20 pb-40 relative z-10"
    >
      <div className="w-full text-center mb-16">
        <span className="font-['Anonymous_Pro',sans-serif] uppercase tracking-[4px] text-sm text-[#86981D]">
          What I've Built
        </span>
        <h2 className="mt-4 font-['Iceland',sans-serif] text-4xl sm:text-5xl md:text-6xl tracking-[4px] sm:tracking-[6px] uppercase break-words">
          <span className="text-white">MY </span>
          <span className="text-[#D5FF01]">PROJECTS</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col bg-white/5 border border-[#86981D]/20 rounded-[24px] overflow-hidden hover:border-[#D5FF01]/50 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Preview area - swap for a real screenshot/image */}
            <div className="w-full h-80 bg-gradient-to-br from-[#86981D]/20 to-black/40 flex  justify-center overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-[100%] h-[100%] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="font-['Iceland',sans-serif] text-2xl text-white tracking-[2px] uppercase mb-3">
                {project.title}
              </h3>

              <p className="font-['Anonymous_Pro',sans-serif] text-gray-400 text-base leading-7 mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="font-['Anonymous_Pro',sans-serif] text-xs uppercase tracking-[1px] text-[#86981D] border border-[#86981D]/40 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-['Anonymous_Pro',sans-serif] text-sm text-white hover:text-[#D5FF01] transition-colors underline underline-offset-4"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}