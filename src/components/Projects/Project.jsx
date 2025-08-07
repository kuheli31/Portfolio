import React from 'react';

const projects = [
  {
    title: "EchoPlex Music App",
    description: "A lightweight music streaming app built using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/kuheli31/echoplex",
  },
  {
    title: "Fake News Detector",
    description: "GNN-based tool to detect and trace fake news sources across social media.",
    technologies: ["Python", "GNN", "Flask"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing projects, skills, and resume.",
    technologies: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing projects, skills, and resume.",
    technologies: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing projects, skills, and resume.",
    technologies: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing projects, skills, and resume.",
    technologies: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing projects, skills, and resume.",
    technologies: ["React", "Tailwind CSS"],
    link: "#",
  },
];

function Project() {
  return (
    <div className="bg-black py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <h1 className="text-3xl sm:text-5xl text-blue-400 font-bold mb-12 text-center">
        My Projects
      </h1>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] aspect-square bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-3 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-2 ml-1">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
