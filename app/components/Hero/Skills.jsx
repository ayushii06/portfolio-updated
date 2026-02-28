import React from "react";
import { skills } from "../../lib/skillsData";
import IntroText from "../ui/IntroText";
import { CardBody, CardWithGridEllipsis } from "../ui/skillsBg";
import { GlowingEffect } from "../ui/GlowEffect";

function Skills() {
  return (
    <>
      <IntroText
        text={
          "My core stack revolves around building modern, scalable full-stack applications with these technologies."
        }
      />

      <div className="py-8 w-[80%] md:w-1/2 mx-auto text-left">
        {skills.map((skillItem) => (
          <div key={skillItem.id}>
            <p className="pb-6 pt-6 text-white font-semibold">
              {skillItem.skill}
            </p>

            <div className="flex gap-4 flex-wrap text-gray-500">
              {skillItem.tech.map((tech) => (
                <div className="relative rounded-xl" key={tech.id}>
                  <GlowingEffect
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={84}
                    inactiveZone={0.01}
                  />

                  <CardWithGridEllipsis>
                    <CardBody icon={tech.logo} title={tech.name}>
                    </CardBody>
                  </CardWithGridEllipsis>
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
