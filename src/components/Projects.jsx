import React from "react";
import { motion } from "framer-motion";
import image2 from "../img/Screenshot from 2024-12-15 20-13-12.png";
import image3 from "../img/Screenshot from 2024-12-22 18-41-49.png";
import image4 from "../img/Screenshot from 2025-03-21 19-23-28.png";


const Projects = () => {
  const projects = [
    {
      title: "Food delivery Web App",
      description:
        "Bhakshanam is a food delivery app that connects homemakers with customers looking for fresh, homemade food.",
      image: image2,
      link: "https://bhakshanam.vercel.app/",
    },
    {
      title: "Calculator",
      description:
        "A simple and user-friendly calculator built with HTML, CSS, and JavaScript.",
        image: image3,
      link: "https://calculator-delta-ebon-77.vercel.app",
    },
    {
      title: "Moto Website",
      description:
        "A bicycle-selling platform that connects cycling enthusiasts with high-quality bikes.",
        image: image4,
      link: "https://moto-website.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white py-16 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-cyan-500 rounded-full opacity-10"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-32 md:pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-cyan-500 text-xl mb-2">My Projects</h2>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">What I've Built</h1>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center mt-8 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1C2A4A] rounded-xl shadow-lg overflow-hidden transform transition-transform hover:shadow-2xl hover:shadow-cyan-500/50 max-w-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
