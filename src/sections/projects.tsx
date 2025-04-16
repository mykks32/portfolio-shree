"use client";

import { motion } from "motion/react";
import ProjectCard from "../components/project-card";
import TutooreeImage from "@/assets/tutooree.png"
import ChatAppImage from "@/assets/chat_app.png"
import EcommerceImage from "@/assets/ecommerce.png"
import RealStateImage from "@/assets/real-state.png"
import TypewriterText from "@/components/type-write-text";

const projects = [
  {
    title: "Tutooree - Find Tutors",
    description:
      "Built a full-stack tutoring platform with REST APIs, authentication, job postings, and real-time features using modern TypeScript stack.",
    tech: ["TypeScript", "PostgreSQL", "Express.js", "Next.js", "Node.js"],
    github: "https://github.com/mykks32/tutooree-backend",
    live: "https://tutooree-new-landing.vercel.app/",
    status: "Ongoing",
    image: TutooreeImage.src
  },
  {
    title: "Realtime Chat App",
    description:
      "Developed a secure chat app with JWT, Zod validation, TypeORM, Zustand state management, and React Query.",
    tech: ["TypeScript", "PostgreSQL", "Express.js", "Next.js", "Node.js"],
    github: "https://github.com/mykks32/chat-app-ts",
    live: "https://chat-app-ts-nine.vercel.app/",
    status: "Ongoing",
    image: ChatAppImage.src
  },
  {
    title: "E-commerce Website",
    description:
      "Implemented full e-commerce functionality: product listings, filtering, authentication, cart, order tracking & vendor analytics.",
    tech: ["React", "Django", "DRF", "Bootstrap", "PostgreSQL"],
    github:
      "https://github.com/mykks32/ecommerce-website-django-react-rest-Project-1.git",
    live: "https://ecommerce-website-django-react-rest-project-1.vercel.app/",
    status: "completed",
    image: EcommerceImage.src
  },
  {
    title: "Real State Website",
    description:
      "Implemented core features including property listing, profile management, and inquiry form submissions.",
    tech: ["React", "Django", "Redux", "Bootstrap", "PostgreSQL"],
    github:
      "https://github.com/mykks32/real-state-django-react",
    live: "https://real-state-django-react.vercel.app/",
    status: "completed",
    image: RealStateImage.src
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-8 md:px-16 lg:px-32 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-fuchsia-400 mb-8">
      <TypewriterText titles={["Projects"]} />
      </h2>
      
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
