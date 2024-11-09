import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application with user authentication, data analytics, and interactive UI.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 2", 
      description: "RESTful API development for managing product data in an e-commerce application.",
      tech: ["FastAPI", "Python", "MongoDB"],
    },
    {
      title: "Project 3",
      description: "Frontend development for a storytelling app with collaborative writing features.",
      tech: ["Angular", "TypeScript", "Bootstrap"],
    },
  ];

  const skills = [
    { name: "Python", level: 90 },
    { name: "Flask/FastAPI", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Angular", level: 85 },
    { name: "MongoDB", level: 85 },
    { name: "React", level: 40 },
    { name: "Problem Solving", level: 70 },
  ];

  const renderSection = (section) => {
    return `transform transition-all duration-500 ease-in-out ${
      activeSection === section ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 hidden'
    }`;
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Navigation */}
{/* Navigation */}
<nav className="sticky top-0 z-50 bg-black border-b border-[#ffcc66]/20 p-4">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center">
      <h1 className="text-lg sm:text-base font-bold text-[#ffcc66]">Dhruv Sharma</h1>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden hover:bg-[#ffcc66]/10 p-2 rounded-lg transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X size={24} className="text-[#ffcc66]" />
        ) : (
          <Menu size={24} className="text-[#ffcc66]" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex space-x-3">
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`capitalize px-1 py-1 rounded-lg transition-all duration-300 text-xs sm:text-sm ${
              activeSection === section
                ? "bg-[#ffcc66] text-black font-medium"
                : "text-[#ffcc66] hover:bg-[#ffcc66]/10"
            }`}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-[#ffcc66]/20 z-40">
      <div className="max-w-6xl mx-auto px-4 py-2 space-y-1">
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => {
              setActiveSection(section);
              setIsMenuOpen(false);
            }}
            className={`w-full text-left capitalize px-3 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
              activeSection === section
                ? "bg-[#ffcc66] text-black font-medium"
                : "text-[#ffcc66] hover:bg-[#ffcc66]/10"
            }`}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>


      {/* Main Content Wrapper */}
      <div className="flex flex-col min-h-screen pt-20 bg-black">
        {/* Portfolio Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex-1">
          {/* Home Section */}
          <div className={renderSection("home")}>
            <div className="flex flex-col items-center">
              <img src="/pic.jpg" alt="Dhruv Sharma" className="w-40 h-40 rounded-full mb-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-lg font-bold text-[#ffcc66]">
                Dhruv Sharma
              </h2>
              <p className="mt-4 text-lg sm:text-base text-gray-300 text-center">
                Hello! I'm Dhruv Sharma, a passionate backend developer with a love for building robust applications.
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className={renderSection("about")}>
            <h2 className="text-2xl sm:text-3xl text-lg font-bold text-[#ffcc66]">About Me</h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base">
              I am a backend developer with a knack for designing APIs, handling complex data flows, and ensuring performance optimization. I enjoy leveraging technologies like Node.js and Python frameworks (Flask, FastAPI) to build applications that prioritize efficiency and scalability.
            </p>
            <p className="mt-4 text-gray-300 text-sm sm:text-base">
              I am currently pursuing my studies in Computer Engineering and continue to expand my skills through hands-on projects and challenges.
            </p>
          </div>

          {/* Skills Section */}
          <div className={renderSection("skills")}>
            <h2 className="text-2xl sm:text-3xl text-lg font-bold text-[#ffcc66]">Skills</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-black border border-[#ffcc66]/20 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm sm:text-base">{skill.name}</span>
                    <span className="text-[#ffcc66] text-sm sm:text-base">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#ffcc66]/10 rounded-full h-2">
                    <div
                      className="bg-[#ffcc66] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className={renderSection("projects")}>
            <h2 className="text-2xl sm:text-3xl text-lg font-bold text-[#ffcc66]">Projects</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-black border border-[#ffcc66]/20 rounded-lg p-6 hover:border-[#ffcc66] transition-colors">
                  <h3 className="text-xl font-semibold text-[#ffcc66] text-sm sm:text-base">{project.title}</h3>
                  <p className="mt-2 text-gray-300 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-[#ffcc66]/10 text-[#ffcc66] px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className={renderSection("contact")}>
            <h2 className="text-2xl sm:text-3xl text-lg font-bold text-[#ffcc66]">Contact</h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base">Feel free to reach out to me through any of the following links.</p>
            <div className="mt-4 flex gap-4">
              <a href="https://github.com/dhruv" target="_blank" rel="noopener noreferrer" className="text-[#ffcc66]">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/dhruv" target="_blank" rel="noopener noreferrer" className="text-[#ffcc66]">
                <Linkedin size={24} />
              </a>
              <a href="mailto:dhruv@example.com" className="text-[#ffcc66]">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
