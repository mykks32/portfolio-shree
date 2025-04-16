import ContactForm from "@/sections/contact-me";
import Experience from "@/sections/experience";
import Hero from "@/sections/home";
import Navbar from "@/sections/navbar";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Experience />
    <Skills />
    <Projects />
    <ContactForm />
    </>
  );
}
