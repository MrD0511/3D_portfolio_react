import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Astro AI",
      description: "An AI powered astrologer you can chat with anonymously. Built with React and FastAPI, it provides personalized astrological insights.",
      tech: ["React", "FastAPI", "Python", "Tailwind CSS"],
      link: "https://astroai.dhruvsharma.me/",
    },
    {
      title: "AI personal assistant",
      description: "An AI personal assistant that can help you with emails, calender etc. Remebers things you tell it.",
      tech: ["Python", "Flask", "React", "MCP", "Mem0"],
      link: "https://github.com/MrD0511/AI-agent"
    },
    {
      title: "Super Me Game",
      description: "A platform game that is inspired by classic Super Mario Bros game made with python.",
      tech: ["Python", "Pygame"],
      link: "https://github.com/MrD0511/Super_Me"
    },
    {
      title: "Deck - Dockerfile Generator",
      description: "A tool to generate Dockerfiles for various programming languages and frameworks. It simplifies the process of containerizing applications.",
      tech: ["GO", "Docker", "CLI"],
      link: "https://github.com/MrD0511/deck"
    },
    {
      title: "3D Portfolio",
      description: "A 3D portfolio built with Three.js and React JS, showcasing my projects and skills in an interactive manner.",
      tech: ["Three.js", "React", "JavaScript"],
      link: "https://dhruvsharma.me/",
    },
    {
      title: "CipherChats - Encrypted Chat App",
      description: "Building a Chat App using React, FastAPI, and MongoDB. Adding encryption and multi-device support.",
      tech: ["React", "FastAPI", "MongoDB"],
      link: "https://cipherchats.vercel.app/",
    }
  ];

  const skills = [
    { name: "Python", level: 80 },
    { name: "Flask/FastAPI", level: 70 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "React", level: 40 },
    { name: "Problem Solving", level: 70 },
    { name: "DSA", level: 70 },
  ];

  const renderSection = (section) => {
    return `transform transition-all duration-500 ease-in-out ${
      activeSection === section ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 hidden'
    }`;
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-[#ffcc66]/20 p-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-bold text-[#ffcc66]">Dhruv Sharma</h1>

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
            <div className="hidden sm:flex space-x-2">
              {["home", "skills", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
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
          <div className="sm:hidden absolute top-full left-0 right-0 bg-black border-b border-[#ffcc66]/20 z-40">
            <div className="max-w-6xl mx-auto px-4 py-2 space-y-1">
              {["home", "skills", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left capitalize px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
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
      <div className="min-h-screen bg-black">
        {/* Portfolio Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {/* Home Section */}
          <div className={renderSection("home")}>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <img src="/pic.jpg" alt="Dhruv Sharma" className="w-40 h-40 rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffcc66] mb-4">
                Dhruv Sharma
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
                Hello! I'm Dhruv Sharma, a passionate developer and a student at SVIT Vasad College in Gujarat. I'm currently in my prefinal year, pursuing Computer Engineering.
              </p>
              <a href="/Dhruv_Sharma_Resume.pdf" download className="bg-[#ffcc66] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#ffcc66]/90 transition-colors mb-4">
                Download Resume
              </a>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActiveSection("projects")}
                  className="bg-[#ffcc66] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#ffcc66]/90 transition-colors"
                >
                  View Projects
                </button>
                <button
                  onClick={() => setActiveSection("about")}
                  className="border border-[#ffcc66] text-[#ffcc66] px-6 py-3 rounded-lg font-medium hover:bg-[#ffcc66]/10 transition-colors"
                >
                  About Me
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className={renderSection("about")}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#ffcc66] mb-6">About Me</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I love to explore things and am always learning every day. Problem-solving is one of my strengths, and I enjoy tackling challenges with creative solutions. I'm continuously improving my skills through hands-on projects and real-world experience.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className={renderSection("skills")}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#ffcc66] mb-8">Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-black border border-[#ffcc66]/20 rounded-lg p-6 hover:border-[#ffcc66] transition-colors">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 text-lg font-medium">{skill.name}</span>
                      <span className="text-[#ffcc66] text-lg font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#ffcc66]/10 rounded-full h-3">
                      <div
                        className="bg-[#ffcc66] h-3 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className={renderSection("projects")}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#ffcc66] mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-black border border-[#ffcc66]/20 rounded-lg p-6 hover:border-[#ffcc66] transition-colors flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-[#ffcc66] flex-1 pr-2">{project.title}</h3>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='text-gray-300 hover:text-[#ffcc66] transition-colors flex-shrink-0'
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
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
          </div>

          {/* Experience Section */}
          <div className={renderSection("experience")}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#ffcc66] mb-8">Experience</h2>
              <div className="bg-black border border-[#ffcc66]/20 rounded-lg p-8 hover:border-[#ffcc66] transition-colors">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#ffcc66] mb-2">Full Stack Developer Intern</h3>
                    <p className="text-gray-400 text-lg">Pintube Pvt Ltd, London (Remote)</p>
                  </div>
                  <span className="text-gray-400 text-lg mt-2 sm:mt-0 bg-[#ffcc66]/10 px-3 py-1 rounded-full">8 months</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-[#ffcc66] mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">Built a scalable full-stack web application from scratch</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-[#ffcc66] mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">Implemented complex features using AngularJS and Node.js</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-[#ffcc66] mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300 text-lg">Managed both MongoDB and SQL databases for different application components</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="bg-[#ffcc66]/10 text-[#ffcc66] px-4 py-2 rounded-full text-sm font-medium">AngularJS</span>
                  <span className="bg-[#ffcc66]/10 text-[#ffcc66] px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
                  <span className="bg-[#ffcc66]/10 text-[#ffcc66] px-4 py-2 rounded-full text-sm font-medium">MongoDB</span>
                  <span className="bg-[#ffcc66]/10 text-[#ffcc66] px-4 py-2 rounded-full text-sm font-medium">SQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className={renderSection("contact")}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#ffcc66] mb-6">Contact</h2>
              <p className="text-lg text-gray-300 mb-8">
                Feel free to reach out to me through any of the following links.
              </p>
              <div className="flex justify-center space-x-8">
                <a 
                  href="https://github.com/MrD0511" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ffcc66] hover:text-[#ffcc66]/80 transition-colors"
                >
                  <Github size={32} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/dhruvsharma005/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ffcc66] hover:text-[#ffcc66]/80 transition-colors"
                >
                  <Linkedin size={32} />
                </a>
                <a 
                  href="mailto:sharmadhruv00005@gmail.com"
                  className="text-[#ffcc66] hover:text-[#ffcc66]/80 transition-colors"
                >
                  <Mail size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;