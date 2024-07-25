import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Card from "./card";

function ProjectCard() {
  const projectsRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start((i) => ({
              y: 0,
              opacity: 1,
              transition: { delay: i * 0.1 + 0.5, duration: 0.8, ease: "easeOut" },
            }));
          } else {
            controls.start({
              y: 20,
              opacity: 0,
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [controls]);

  const projects = [
    {
      image: 'offblog',
      tags: [
        { name: "react", color: "bg-blue-500" },
        { name: "tailwind", color: "bg-sky-400" },
        { name: "laravel", color: "bg-orange-400" }
      ],
      data: {
        title: "offblog",
        cover: 'blogcover',
        details: "Created a Blog website with a Beautiful Design",
        description: "I built a blog website with a beautiful design and many features like comments, likes, and more. I used React for the frontend and Laravel for the backend."
      },
        title: "offblog",

    },
    {
      image: 'naghma',
      tags: [
        { name: "react", color: "bg-blue-500" },
        { name: "tailwind", color: "bg-sky-400" }
      ],
      data: {
        title: "Naghma Coffee",
        cover: 'naghma',
        details: "A beautiful website for a coffee shop built with React and Tailwind CSS."
      },
      title: "Naghma Coffee",
      details: "A beautiful website for a coffee shop built with React and Tailwind CSS."
    },
    {
      image: 'gomanga',
      tags: [
        { name: "laravel", color: "bg-orange-400" },
        { name: "tailwind", color: "bg-sky-400" },
        { name: "mysql", color: "bg-blue-900" }
      ],
      data: {
        title: "GoManga",
        cover: 'gomanga',
        details: "An online manga reading platform developed with Laravel, Tailwind, and MySQL."
      },
      title: "GoManga",
      details: "An online manga reading platform developed with Laravel, Tailwind, and MySQL."
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };


  return (
    <div className="mt-5 mx-5 md:mt-20 flex flex-col justify-center items-center">
      <h1 className="text-2xl pb-1 md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         my projects
        </h1>
      <div ref={projectsRef} className="grid grid-cols-1 max-w-6xl md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5 md:mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            className="project-card"
          >
            <Card project={project} onClick={handleCardClick} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
