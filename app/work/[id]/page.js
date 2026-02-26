"use client";

import { usePathname } from "next/navigation";
import { projectData } from "../../lib/projectData";

import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Section({ title, content }) {
  return (
    <div className="mb-8">
      <h3 className="text-base sm:text-lg font-semibold
                     text-white/90 mb-3 tracking-wide">
        {title}
      </h3>

      <p className="text-sm sm:text-[15px]
                    text-white/70 leading-relaxed
                    max-w-3xl">
        {content}
      </p>
    </div>
  );
}

export default function ProjectDesc() {
  const pathname = usePathname();

  const id = pathname.split("/").pop();

  //1st data
  const id_find = id - 1;

  const project = projectData[id_find];

  return (
    <>
       <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group w-full max-w-5xl mx-auto
                 bg-white/5 backdrop-blur-md
                 border mb-24 border-white/10
                 rounded-2xl
                 p-6 sm:p-8 md:p-10
                 transition-all duration-500
                 hover:border-blue-500/40
                 hover:-translate-y-1"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center
                      gap-6 border-b border-white/10 pb-6 mb-8">
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight
                       bg-gradient-to-r from-white via-white/90 to-white/70
                       bg-clip-text text-transparent">
          {project.name}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.github}
            target="_blank"
            className="px-5 flex justify-center items-center gap-2 cursor-pointer py-2 text-sm font-medium rounded-lg
                       bg-white/5 border border-white/20
                       backdrop-blur-md
                       hover:border-blue-400/60
                       hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                       transition-all duration-300 text-center"
          >
            <Github width={14} height={14}/>
            Source Code
          </a>

          <a
            href={project.live}
            target="_blank"
            className="px-5 flex justify-center items-center gap-2 cursor-pointer py-2 text-sm font-medium rounded-lg
                       bg-white/5 border border-white/20
                       backdrop-blur-md
                       hover:border-blue-400/60
                       hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                       transition-all duration-300 text-center"
          >
            <Link width={14} height={14}/>
           Live Link
          </a>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-3 mb-10">
        {project.stacks.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-1.5 text-xs font-medium
                       rounded-full
                       bg-white/5 border border-white/20
                       hover:border-blue-400/50
                       hover:bg-blue-500/10
                       transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Sections */}
      <Section title="Why I built this project?" content={project.description.why} />
      <Section title="How I built this?" content={project.description.how} />
      <Section title="Tech Stack" content={project.description.techStack} />
      <Section title="Difficulties I faced" content={project.description.difficulties} />
      <Section title="Learnings" content={project.description.learnings} />
      <Section title="What's Next?" content={project.description.next} />
    </motion.div>
    </>
  );
}
