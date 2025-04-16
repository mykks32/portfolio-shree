"use client";

import { motion } from "motion/react";

export default function Experience() {
    const experiences = [
        {
            company: "CloudQuish LLC & A5IT",
            duration: "Dec 2024 – Mar 2025",
            position: "Full Stack Developer",
            location: "Remote",
            points: [
                "Implemented key components for both landing page and email verification service at CloudQuish using Next.js, Clerk authentication, ShadCN/ui components, Zustand state management, and Tailwind CSS.",
                "Improved UI and resolved interface bugs at A5IT, enhancing user experience through navigation optimizations and creating a more intuitive platform.",
                "Developed and integrated RESTful APIs at A5IT using TypeORM, Node.js, and efficient database queries for improved data management.",
                "Collaborated with development team using GitHub for task management and version control."
            ]
        }
    ];

    return (
        <section id="experience" className="bg-neutral-950 py-20 px-8 md:px-16 lg:px-32 text-white">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl font-bold text-center text-fuchsia-400 mb-8"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="bg-neutral-900 p-6 rounded-2xl shadow-md border border-white/10"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <h3 className="text-xl font-semibold text-lime-300">
                                    {exp.company}
                                </h3>
                                <span className="text-sm text-white/60 italic">
                                    {exp.duration} • {exp.location}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">
                                {exp.position}
                            </h4>
                            <ul className="list-disc pl-6 space-y-2 text-white/90 text-sm">
                                {exp.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}