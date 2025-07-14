import React from "react";

const projects = [
  {
    title: "Rudflo – Yoga Booking Platform",
    description:
      "A booking management system with client and admin roles where users can book yoga sessions under memberships (group/private), and admins manage slots, memberships, and classes.",
    tech: ["JavaScript", "Firebase", "GoHighLevel", "WordPress", "Airwallex"],
    github: null,
    demo: "https://www.rudflo.com",
  },
  {
    title: "Rapidclaim AI – Claims Management System",
    description:
      "A secure and scalable claims management platform with file uploads, comments, role-based access, RESTful APIs, and real-time alerts via Twilio SMS & email.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "Twilio"],
    github: null,
    demo: "https://app.rapidclaim.ai",
  },
  {
    title: "Tic Tac Toe – React Game",
    description:
      "A responsive Tic Tac Toe game built in React with options to play solo against computer or with another player. Learnt about React hooks and state management while building this project. This project is a great example of how to manage game state.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/sahillodha19/tic-tac-toe",
    demo: "https://tic-tac-toe-delta-nine-12.vercel.app/",
  } ,
  {
    title: "Portfolio Website",
    description:
      "A sleek and fully responsive developer portfolio built with React and Tailwind CSS, showcasing projects, skills, resume, and contact functionality.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/sahillodha19/portfolio",
    demo: "https://portfolio-inky-zeta-23.vercel.app/",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background dark:bg-darkMatte py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-darkNavy dark:text-textDark mb-12">🧩 Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-darkSurface rounded-xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gold mb-2">{project.title}</h3>
              <p className="text-base text-darkNavy dark:text-textDark mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-lightGray dark:bg-darkMatte text-darkNavy dark:text-textDark px-2 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm text-darkNavy dark:text-textDark font-medium">
                {project.github ? (
                  <a href={project.github} className="hover:text-gold" target="_blank" rel="noreferrer">
                    🔗 GitHub
                  </a>
                ) : (
                  <span className="opacity-50">🔒 Private Repo</span>
                )}
                {project.demo && (
                  <a href={project.demo} className="hover:text-gold" target="_blank" rel="noreferrer">
                    🚀 Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
