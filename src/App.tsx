import { useRef } from 'react';
import Home from "./components/sections/Home";
import Navbar from "./components/ui/Navbar";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
   const homeRef = useRef(null);
   const aboutRef = useRef(null);
   const skillsRef = useRef(null);
   const projectsRef = useRef(null);
   const contactRef = useRef(null);
   
	return (
      <>
         <Navbar />
         <section id="home" ref={homeRef}>
            <Home />
         </section>

         <section id="about" ref={aboutRef}>
            <About />
         </section>

         <section id="skills" ref={skillsRef}>
            <Skills />
         </section>

         <section id="projects" ref={projectsRef}>
            <Projects />
         </section>

         <section id="contact" ref={contactRef}>
            <Contact />
         </section>
      </>
	);
}

export default App;
