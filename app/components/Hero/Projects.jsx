"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";
import { projectData } from "../../lib/projectData";
import { CardWithGridEllipsis } from "../ui/projectCard";
import { GlowingEffect } from "../ui/GlowEffect";

export default function ProjectSlider() {
  const router = useRouter();
  return (
    <section className="mx-auto flex flex-col items-center pb-14 pt-8 w-[80%] md:w-1/2">
      <div className="flex justify-center sm:justify-between w-full items-center mb-10">
        <p className="font-medium hidden sm:flex text-sm text-yellow-400 ">
          Products I’ve built from the ground up -
        </p>
        <button onClick={() => router.push("/work")} className="">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectData.slice(0, 2).map((project) => (
          <div className="relative rounded-2xl" key={project.id}>
            <GlowingEffect
              spread={60}
              glow={true}
              disabled={false}
              proximity={84}
              inactiveZone={0.01}
            />

            <CardWithGridEllipsis>
              <div
                key={project.id}
                className="border border-neutral-700 rounded-2xl p-5 cursor-pointer shadow-lg"
              >
                <div className="relative w-full h-40 overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <h3 className="text-md font-semibold text-white">
                  {project.name}
                </h3>

                <p className="text-xs text-neutral-400 mt-1">
                  {project.duration}
                </p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.stacks.map((stack, index) => (
                    <span
                      key={index}
                      className="text-xs bg-neutral-800 text-neutral-200 px-2 py-1 rounded-full border border-neutral-700"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="flex sm:flex-nowrap flex-wrap gap-3 text-xs">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex w-full items-center justify-center gap-2 bg-white text-black py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
                  >
                    <Link2Icon width={18} />
                    Website
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex w-full items-center justify-center gap-2 border border-neutral-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 transition"
                  >
                    <Github width={18} />
                    Source
                  </a>
                </div>
              </div>
            </CardWithGridEllipsis>
          </div>
        ))}
      </div>
    </section>
  );
}
