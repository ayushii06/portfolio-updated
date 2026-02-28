import Hero from "../app/components/Hero/page";
import Timeline from "./components/Hero/Timeline";
import Skills from "./components/Hero/Skills";
import DSA from "./components/Hero/DSA";
import Projects from "./components/Hero/Projects";
import ExtraCurricular from "./components/Hero/ExtraCurricular";
import Seperator from "./components/ui/Seperator";

export default function Home() {
  return (
    <>
      <Hero />     

      <Seperator text={"My Education"}/>
      <Timeline />

      <Seperator text={"My Skills"} />
      <Skills />

      <Seperator text={"Featured Projects"} />
      <Projects />
      
      <Seperator text={"Problem Solving Skills"} />
      <DSA />

      <Seperator text={"Extra Curricular Activities"} />
      <ExtraCurricular />
    </>
  );
}
