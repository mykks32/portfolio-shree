import { FC } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status?: string;
}

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-neutral-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-lg"
    >
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>
          {project.status && (
            <span className="text-xs text-yellow-400">● {project.status}</span>
          )}
        </div>

        <p className="text-sm text-neutral-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-neutral-800 border border-neutral-700 px-2 py-1 rounded-full text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between gap-3 mt-auto pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-white bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-xl text-sm hover:bg-neutral-700 transition"
          >
            <Github size={18} /> GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-white bg-green-600 hover:bg-green-500 transition px-3 py-2 rounded-xl text-sm"
          >
            <ExternalLink size={18} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
