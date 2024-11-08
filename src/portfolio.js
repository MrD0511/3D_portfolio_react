import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const personalInfo = {
    name: "Dhruv Sharma",
    title: "Software Developer",
    email: "your.email@example.com",
    location: "Your Location",
    about: "Passionate software developer with expertise in building scalable web applications and solving complex problems.",
    links: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
    }
  };

  const experience = [
    {
      company: "Company Name",
      position: "Senior Software Developer",
      duration: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "Previous Company",
      position: "Software Engineer",
      duration: "2020 - 2022",
      description: [
        "Developed and maintained REST APIs using Node.js",
        "Optimized database queries improving performance by 40%",
        "Collaborated with cross-functional teams to deliver features"
      ]
    }
  ];

  const skills = {
    technical: ["React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB", "SQL", "AWS", "Docker"],
    soft: ["Leadership", "Problem Solving", "Communication", "Team Collaboration", "Agile Methodologies"]
  };

  const projects = [
    {
      name: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      link: "https://project-link.com"
    },
    {
      name: "Task Management System",
      description: "Developed a real-time task management system with collaborative features",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "https://project-link.com"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University",
      year: "2016 - 2020",
      achievements: ["Graduated with Honors", "GPA: 3.8/4.0"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 sm:mb-12 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-3">{personalInfo.name}</h1>
          </div>
          <p className="text-xl sm:text-2xl text-gray-700 mb-3 sm:mb-4 font-semibold">{personalInfo.title}</p>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">{personalInfo.about}</p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href={personalInfo.links.github} className="transform transition-all duration-300 hover:scale-110 hover:text-indigo-600">
              <Github className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href={personalInfo.links.linkedin} className="transform transition-all duration-300 hover:scale-110 hover:text-indigo-600">
              <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="transform transition-all duration-300 hover:scale-110 hover:text-indigo-600">
              <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {/* Experience Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Professional Experience
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                onMouseEnter={() => setHoveredCard(`exp-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{exp.position}</h3>
                  <p className="text-sm sm:text-lg text-indigo-600">{exp.company} | {exp.duration}</p>
                  <ul className="space-y-1 sm:space-y-2 mt-3 sm:mt-4">
                    {exp.description.map((desc, i) => (
                      <li 
                        key={i} 
                        className={`flex items-center space-x-1 sm:space-x-2 transform transition-all duration-300 ${
                          hoveredCard === `exp-${index}` ? 'translate-x-2' : ''
                        }`}
                      >
                        <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-indigo-500" />
                        <span className="text-sm sm:text-base">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Skills & Expertise
            </span>
          </h2>
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 transform transition-all duration-300 hover:shadow-2xl">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.technical.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full text-xs sm:text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.soft.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-xs sm:text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center justify-between">
                    {project.name}
                    <a 
                      href={project.link}
                      className="text-indigo-600 hover:text-indigo-800 transform transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm transform transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Education
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-sm sm:text-lg text-indigo-600">{edu.institution} | {edu.year}</p>
                  <ul className="space-y-1 sm:space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li 
                        key={i}
                        className="flex items-center space-x-1 sm:space-x-2"
                      >
                        <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-purple-500" />
                        <span className="text-sm sm:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;