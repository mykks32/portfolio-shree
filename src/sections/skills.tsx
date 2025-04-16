import React from "react";
import BullMq from "@/assets/bullmq.png"
import Shadcn from "@/assets/shadcn.png"
import ReactQuery from "@/assets/react-query.webp"
import Zustand from "@/assets/zustand.png"
import Image from "next/image";

const skills = [
    {
        category: "Languages & Frameworks",
        items: [
            { name: "TypeScript", icon: "https://img.icons8.com/color/48/typescript.png" },
            { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript.png" },
            { name: "Python", icon: "https://img.icons8.com/color/48/python.png" },
            { name: "SQL", icon: "https://img.icons8.com/fluency/50/sql.png" },
            { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
            { name: "Express.js", icon: "https://img.icons8.com/officel/40/express-js.png" },
            { name: "Next.js", icon: "https://img.icons8.com/fluency/50/nextjs.png" },
            { name: "React.js", icon: "https://img.icons8.com/color/48/react-native.png" },
            { name: "Django", icon: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/50/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png" },
        ],
    },
    {
        category: "Databases & Tools",
        items: [
            { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
            { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
            { name: "Redis", icon: "https://img.icons8.com/color/48/redis.png" },
            { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
            { name: "Docker", icon: "https://img.icons8.com/color/48/docker.png" },
            { name: "RabbitMQ", icon: "https://static.cdnlogo.com/logos/r/90/rabbitmq.svg" },
            { name: "BullMQ", icon: BullMq.src },
            { name: "Socket.IO", icon: "https://static.cdnlogo.com/logos/s/14/socket-io.svg" },
            { name: "Postman", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png" },
        ],
    },
    {
        category: "Libraries & UI",
        items: [
            { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwind_css.png" },
            { name: "ShadCN/ui", icon: Shadcn.src },
            { name: "React Query", icon: ReactQuery.src },
            { name: "React Hook Form", icon: "https://img.icons8.com/color/48/react-native.png" },
            { name: "Zustand", icon: Zustand.src },
            { name: "Redux", icon: "https://img.icons8.com/color/48/redux.png" },
        ],
    },
];

const SkillsSection = () => {
    return (
        <section className="px-8 md:px-16 lg:px-32 py-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-fuchsia-400 mb-8">Skills</h2>
            <div className="space-y-12">
                {skills.map((group, i) => (
                    <div key={i}>
                        <h3 className="text-xl font-semibold text-lime-300 mb-4">{group.category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {group.items.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-2 p-4 bg-neutral-950 border border-white/15 rounded-xl shadow-md hover:scale-105 transition"
                                >
                                    <Image
                                        height={100}
                                        width={100}
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-auto h-12"
                                    />
                                    <span className="text-sm text-white">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
