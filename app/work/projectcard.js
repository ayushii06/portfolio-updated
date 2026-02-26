"use client";

import Image from "next/image";
import Link from "next/link";
import calendar from "../public/Calendar.png";
import { ArrowRightCircle, GithubIcon, Link2Icon } from "lucide-react";

export default function ProjectCard(props) {
  const { title, id, desc, date, image, preview, github, stacks } = props;

  return (
    <div className="bg-[#0b1120] my-12 border border-neutral-800 rounded-3xl 
                    p-5 sm:p-6 shadow-xl hover:shadow-2xl 
                    transition-all duration-300 hover:-translate-y-1">

      {/* Project Image */}
      <div className="relative w-full h-36 sm:h-56 rounded-2xl 
                      overflow-hidden mb-5 border border-neutral-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
        {desc}
      </p>

      {/* Date */}
      <div className="flex items-center gap-2 text-xs text-gray-300 mb-5">
        <Image src={calendar} alt="calendar" width={16} height={16} />
        <span>{date}</span>
      </div>

      {/* Tech Stack */}
      {stacks?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {stacks.map((stack, index) => (
            <span
              key={index}
              className="text-[10px] sm:text-xs bg-neutral-800 
                         text-neutral-200 px-3 py-1 
                         rounded-full border border-neutral-700"
            >
              {stack}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">

        {preview && (
          <Link
            href={preview}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 
                       bg-white text-black py-2 rounded-xl 
                       text-xs sm:text-sm font-medium 
                       hover:opacity-90 transition"
          >
            <Link2Icon size={16} />
            Website
          </Link>
        )}

        <Link
          href={github}
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 
                     border border-neutral-600 text-white 
                     py-2 rounded-xl text-xs sm:text-sm 
                     font-medium hover:bg-neutral-800 transition"
        >
          <GithubIcon size={16} />
          Github
        </Link>

        <Link
          href={`/projects/${id}`}
          className="flex-1 flex items-center justify-center gap-2 
                     border border-neutral-600 text-white 
                     py-2 rounded-xl text-xs sm:text-sm 
                     font-medium hover:bg-neutral-800 transition"
        >
          <ArrowRightCircle size={16} />
          View More
        </Link>
      </div>
    </div>
  );
}