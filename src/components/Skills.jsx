import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import { SiTailwindcss, SiMui } from "react-icons/si"; // Correct icons

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-16 h-16" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-16 h-16" /> },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500 w-16 h-16" />,
    },
    { name: "React", icon: <FaReact className="text-blue-400 w-16 h-16" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white w-16 h-16" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 w-16 h-16" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 w-16 h-16" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-500 w-16 h-16" />,
    },
    { name: "SQL", icon: <SiMysql className="text-blue-500 w-16 h-16" /> },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-500 w-16 h-16" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-red-500 w-16 h-16" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-400 w-16 h-16" /> },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-500 w-16 h-16" />,
    },
    {
      name: "Material UI",
      icon: <SiMui className="text-blue-600 w-16 h-16" />,
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 pt-20 pb-16 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center space-y-3"
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
