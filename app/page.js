import Hero from "../app/components/Hero/page";
import Timeline from "./components/Hero/timeline";
import Skills from "./components/Hero/skills";
import DSA from "./components/Hero/dsa";
import Projects from "./components/Hero/Projects";
import ExtraCurricular from "./components/Hero/ExtraCurricular";
import Seperator from "./components/ui/Seperator";
import IntroText from "./components/ui/IntroText";

export default function Home() {
  return (
    <>
      <Hero />
      
      <IntroText text={"Those who are motivated only by the desire for the fruit of action are miserable, for they are constantly anxious about the results of what they do."}/>
     

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
