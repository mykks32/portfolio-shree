import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <section className="my-12 border-t border-white/15 pt-8">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex gap-6">
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
                    {/* Footer Bottom */}
                    <div className="text-sm text-neutral-400">
                        <div className="flex">
                            © {new Date().getFullYear()}{" "}
                            <div className="flex justify-center">
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    className="h-5 w-auto"
                                />
                            </div>{" "}
                            , All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
