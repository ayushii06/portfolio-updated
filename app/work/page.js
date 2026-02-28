import ProjectCard from "./projectcard";
import { projectData } from "../lib/projectData.js";
import IntroText from "../components/ui/IntroText";

export default function Projects() {
  return (
    <>
      <IntroText
        className={"sm:mt-20 mt-28"}
        text={
          "I believe in building with purpose, not just chasing outcomes. Every project here represents a problem I chose to solve, a challenge I decided to embrace, and a skill I intentionally sharpened."
        }
      />

      <section className="min-h-screen md:w-1/2 w-[90%] mx-auto py-8 px-2 sm:px-6">
        {/* Projects Grid */}
        <div className=" mx-auto ">
          {projectData.map((item, index) => (
            <ProjectCard
              key={index}
              id={item.id}
              title={item.name}
              desc={item.desc}
              date={item.duration}
              image={item.image}
              preview={item.live}
              github={item.github}
              stacks={item.stacks}
            />
          ))}
        </div>
      </section>
    </>
  );
}
