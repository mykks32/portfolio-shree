"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Button from "@/components/button";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const title = "Drop a Message";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();
    const [status, setStatus] = useState<string | null>(null);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const current = title;
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

    const onSubmit = async (data: FormData) => {
        setStatus(null);
        try {
            const response = await fetch("https://formspree.io/f/mgvabvbo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                reset();
            } else {
                setStatus("Something went wrong. Try again.");
            }
        } catch (err) {
            setStatus("Failed to send message.");
        }
    };

    return (
        <section className="px-8 md:px-16 lg:px-32 py-12 max-w-7xl mx-auto">
            <div className="flex justify-between">
                <div className="text-5xl font-bold flex items-center text-center text-fuchsia-400 mb-8">
                    <span className="text-fuchsia-300">
                        {displayedText}
                        <span className="animate-pulse">|</span>
                    </span>
                </div>

                {/* <div className="flex justify-center"> */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 w-full max-w-sm"
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            className="w-full p-2 border border-white/15 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            className="w-full p-2 border border-white/15 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            {...register("message", {
                                required: "Message is required",
                            })}
                            className="w-full p-2 border border-white/15 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <Button
                        size="md"
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {status && (
                        <p className="text-sm text-center mt-2 text-green-600 dark:text-green-400">
                            {status}
                        </p>
                    )}
                </form>
                {/* </div> */}
            </div>
        </section>
    );
}
