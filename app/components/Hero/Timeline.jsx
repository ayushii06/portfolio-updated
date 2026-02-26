"use client";
import React from "react";
import Image from "next/image";
import {experience} from '../../lib/timelineData'


export default function Timeline() {
  return (
    <>
      
      <div
        className=" mx-auto
  w-[80%]
  md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
        {experience.map((exp, id) => (
          <div key={id}>
            <div className="relative p-8 group">
              {/* Year */}
              <div className="absolute top-10 right-4 text-sm text-gray-400 tracking-wide">
                {exp.year}
              </div>

              {/* Logo at Top Left */}
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <Image
                  src={exp.logo}
                  height={50}
                  width={50}
                  alt="logo"
                  className="rounded-md object-contain"
                />

                {/* School Name + Hover Icon */}
                <div className="">
                  <div
                    onClick={() => window.open(exp.marksheet, "_blank")}
                    className="flex items-center gap-1 cursor-pointer group/title"
                  >
                    <h3 className="md:text-lg text-sm font-semibold transition-colors duration-300 group-hover/title:text-blue-400">
                      {exp.school_name}
                    </h3>

                    {/* External Icon */}
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

                  <p className="text-gray-400 text-sm">
                    {exp.degree} · Grade {exp.grade}
                  </p>
                </div>
              </div>

              {/* Courses */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.Courses.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
              bg-white/5 text-gray-300 
              border border-white/5 
              hover:border-white/20 
              transition"
                  >
                    {course}
                  </span>
                ))}
              </div>

              {/* Activities */}
              <ul className="mt-4 space-y-2 text-sm text-gray-400 list-disc list-inside">
                {exp.coCurricular.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            {id !== experience.length - 1 && (
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
