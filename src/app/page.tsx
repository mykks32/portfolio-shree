import Experience from "@/sections/experience";
import Hero from "@/sections/home";
import Navbar from "@/sections/navbar";
import Skills from "@/sections/skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Experience />
    <Skills />
    </>
  );
}
