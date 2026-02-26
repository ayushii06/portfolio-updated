import React from "react";
import Image from "next/image";
import {skills} from '../../lib/skillsData'
import IntroText from "../ui/IntroText";


function Skills() {
  return (
    <>
    <IntroText text={"My core stack revolves around building modern, scalable full-stack applications with these technologies."}/>
      
      <div className="py-8 w-[80%] md:w-1/2 mx-auto text-left">
        {skills.map((skillItem) => (
          <div key={skillItem.id}>
            <p className="pb-6 pt-6 text-white font-semibold">
              {skillItem.skill}
            </p>

            <div className="flex gap-4 flex-wrap text-gray-500">
              {skillItem.tech.map((tech) => (
                <div
                  key={tech.id}
                  className="group px-4 py-2 relative text-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
                >
                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={tech.logo}
                    width={30}
                    height={30}
                    alt={tech.name}
                    className=" relative my-3 transition-transform duration-300 "
                  />
                  <p className="relative text-sm text-gray-300 group-hover:text-white transition">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
