"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-Stack E-Commerce Solution Powered by Next.js.",
      tags: ["Next.js", "Tailwind CSS", "Sanity", "TypeScript"],
      imageUrl: "/images/Ecommerce.jpeg",
      githubUrl: "https://github.com/TalhaJawaid143/7_Days_Hackton",
      liveUrl: "https://7-days-hackton-giaic.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Modern, Animated, and Fully Responsive Portfolio.",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      imageUrl: "/images/portfolio.webp",
      githubUrl: "https://github.com/TalhaJawaid143",
    },
    {
      id: 3,
      title: "Ai-assistant",
      description: "AI-Powered Smart Search Assistant",
      tags: ["HTML", "Vanilla CSS", "JavaScript"],
      imageUrl: "/images/AI-assistant.jpeg",
      liveUrl: "https://ai-assistant-sooty-six.vercel.app/",
      githubUrl: "https://github.com/TalhaJawaid143/Ai-assistant",
    },
    {
      id: 4,
      title: "Website Design",
      description: "Real-Time Productivity App for Seamless Workflow.",
      tags: ["HTML", "Tailwand CSS"],
      imageUrl: "/images/hackton.jpeg",
      githubUrl: "https://github.com/TalhaJawaid143/SMIT-Hackathon01",
      liveUrl: "https://smit-hackathon01.vercel.app/",
    },
    {
      id: 5,
      title: "File Converter",
      description: "Excel file converter.",
      tags: ["Python", "Streamlit", "Pandas"],
      imageUrl: "/images/file-converter.jpg",
      githubUrl: "https://github.com/TalhaJawaid143/File-Converter",
      liveUrl: "https://syedfaiezahmed-file-converter-file-converter-rwjusx.streamlit.app/",
    },
    {
      id: 6,
      title: "Simple Calculator",
      description: "Minimalist & Efficient Calculator.",
      tags: ["Html", "Tailwand Css", "JavaScript"],
      imageUrl: "/images/calculator.jpg",
      githubUrl: "https://github.com/TalhaJawaid143/Simple_Calculator",
      liveUrl: "https://simple-calculator-xi-jade.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-8 md:py-12 lg:py-8 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-[#d1c9c3] max-w-2xl mx-auto">
          A Showcase of My Latest Projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(245, 158, 11, 0.2)"
              }}
              className="group rounded-xl overflow-hidden border border-amber-900/50 bg-[#181818] hover:border-amber-500/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id <= 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <p className="text-white text-sm md:text-base">
                      {project.description}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {project.title}
                </motion.h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs px-3 py-1 rounded-full bg-amber-900/30 text-amber-100"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-[#d1c9c3] hover:text-amber-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-[#d1c9c3] hover:text-orange-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      Live Demo.
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.p 
            className="text-lg text-[#d1c9c3] mb-6"
            whileInView={{ opacity: [0.6, 1] }}
            transition={{ duration: 0.5 }}
          >
            Interested in working together?
          </motion.p>
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-red-600 text-white font-medium hover:shadow-lg transition-all"
          >
            Contact Me
            <motion.span 
              className="ml-2"
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <Rocket className="w-5 h-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;