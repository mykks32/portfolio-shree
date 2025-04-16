import { FC } from "react";
import { ExternalLink, Github } from "lucide-react";
import Button from "./button";
import Link from "next/link";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    status?: string;
    image?: string;
}

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="flex flex-col justify-between max-h-fit p-6 border border-white/15 rounded-2xl hover:scale-105 transition duration-500">
            <div>
                {/* Conditionally render the image if it exists */}
                {project.image && (
                    <Image
                        height={1000}
                        width={1000}
                        src={project.image}
                        alt={project.title}
                        className="w-full border border-white/15 h-48 object-fit rounded-lg mb-4"
                    />
                )}

                <div className="flex flex-col mb-2">
                    <h3 className="text-xl font-semibold text-white">
                        {project.title}
                    </h3>
                    {project.status && (
                        <span className="text-xs text-yellow-400">
                            {project.status}
                        </span>
                    )}
                </div>

                <p className="text-sm text-neutral-400 mb-4">
                    {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-neutral-800 border border-neutral-700 px-2 py-1 rounded-full text-white hover:-rotate-6 transition duration-500 hover:bg-fuchsia-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-3 mt-auto pt-4">
                {project.github && (
                  <Button variant='secondary' size="md">
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"  
                        className="flex items-center gap-2"                  >
                        <Github size={18} /> GitHub
                    </Link>
                    </Button>
                )}
                {project.live && (
                    <Button variant="primary" size="md">
                        <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <ExternalLink size={18} /> Live
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
