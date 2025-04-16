"use client";
import Image from "next/image";
import Photo from "@/assets/photo.jpg";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const titles = ["Computer Engineer", "Fullstack Developer", "Problem Solver"];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = titles[index % titles.length];
        const speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (isDeleting) {
                setDisplayedText((prev) => prev.slice(0, -1));
            } else {
                setDisplayedText((prev) => current.slice(0, prev.length + 1));
            }

            if (!isDeleting && displayedText === current) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index]);

    return (
        <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-32 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left: Typing Text and Name */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 2, ease: "easeIn" }}
                    className="space-y-2"
                >
                    {/* Name */}
                    <motion.h1
                        className="text-md font-extrabold leading-snug text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                             Hi, my name is{" "}
                        <span className="hero-name text-lime-300 text-4xl lg:whitespace-nowrap inline-block uppercase">
                            Shree Krishna Yadav
                        </span>
                    </motion.h1>

                    {/* Typing Text */}
                    <h2 className="text-lg sm:text-xl font-bold leading-snug text-white">
                        I&apos;m a{" "}
                        <span className="text-fuchsia-300">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-white/70 max-w-md">
                        Passionate about building robust and scalable software,
                        solving real-world problems, and constantly evolving
                        through challenges and learning.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="mailto:srikri5462ydv@gmail.com"
                            target="_blank"
                            className="text-fuchsia-500"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/mykks32"
                            target="_blank"
                            className="text-fuchsia-500"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </Link>
                        <Link
                            href="https://github.com/mykks32"
                            target="_blank"
                            className="text-fuchsia-500"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </Link>
                    </div>
                </motion.div>

                {/* Right: Profile Image */}
                <div className="relative flex justify-end">
                    <motion.div
                        drag
                        dragConstraints={{
                            left: -10,
                            right: 10,
                            top: -10,
                            bottom: 10,
                        }}
                        whileHover={{ scale: 1.05 }}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="shadow-lg overflow-hidden border border-lime-400/70 rounded-full w-[300px] h-[300px] hover:border-fuchsia-400"
                    >
                        <Image
                            src={Photo}
                            draggable="false"
                            alt="Portfolio profile photo"
                            height={300}
                            width={300}
                            className="object-cover w-full h-full rounded-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
