"use client";
import React from "react";
import Image from "next/image";
import { experience } from "../../lib/timelineData";

export default function Timeline() {
  return (
    <div className="mx-auto mt-14 w-[80%] md:w-1/2 space-y-10">
      {experience.map((exp, id) => (
        <div key={id} className="relative group rounded-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={exp.background}
            alt="college background"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />

          {/* Glass Layer */}
          <div className="relative z-10 p-8 ">
            {/* Year */}
            <div className="absolute top-10 right-8 text-sm text-[#00c6ff] tracking-wide">
              {exp.year}
            </div>

            {/* Logo + School Info */}
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <Image
                src={exp.logo}
                height={50}
                width={50}
                alt="logo"
                className="rounded-md object-contain"
              />

              <div>
                <div
                  onClick={() => window.open(exp.marksheet, "_blank")}
                  className="flex items-center gap-1 cursor-pointer group/title"
                >
                  <h3 className="md:text-lg text-sm font-semibold text-white transition-colors duration-300 group-hover/title:text-blue-400">
                    {exp.school_name}
                  </h3>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-300 group-hover/title:opacity-100 group-hover/title:translate-x-0 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H9M17 7V15"
                    />
                  </svg>
                </div>

                <p className="text-[#00c6ff] text-sm">
                  {exp.degree} · Grade {exp.grade}
                </p>
              </div>
            </div>

            {/* Courses */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.Courses.map((course, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-xs rounded-full 
                    bg-white/10 text-gray-200
                    border border-white/10
                    hover:border-[#0e75ffa8]
                    transition
                  "
                >
                  {course}
                </span>
              ))}
            </div>

            {/* Activities */}
            <ul className="mt-4 space-y-2 text-sm text-[#eb7df1] list-disc list-inside">
              {exp.coCurricular.map((activity, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#f800ff]"></span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
