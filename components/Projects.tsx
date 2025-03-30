"use client";

import React, { useRef } from "react";
import ProjectComponent from "./ProjectCard";
import { useOnScreen } from "./additionalhook";

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(projectsRef);

  const projectData = [
    {
      projectName: "Paytm App",
      description:
        "A secure and efficient payments application built with the MERN stack.",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "ExpressJs",
        "Node.js",
        "Recoil",
      ],
      github: "https://github.com/singhxanubhav/Paytm-App",
      live: "https://paytm-app-rho.vercel.app/",
    },

    {
      projectName: "Medium",
      description:
        "This project is a clone of the popular blogging platform Medium, built using a modern tech stack to deliver a scalable, performant, and secure application.",
      technologies: [
        "React.js",
        "TypeScript",
        "Express",
        "Node.js",
        "Postgres",
        "Prisma",
        "Tailwind"
      ],
      github: "https://github.com/singhxanubhav/medium",
      live: "https://medium-blog-bice.vercel.app/",
    },    
  ];

  return (
    <section
      ref={projectsRef}
      id="projects"
      className={`text-black p-2 bg-black mt-8 mb-16 transition-opacity duration-1000 px-4 md:px-16 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className=" text-4xl font-bold text-white dark:text-neutral-300 my-8">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectComponent
            key={index}
            projectName={project.projectName}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
