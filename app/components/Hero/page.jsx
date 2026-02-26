"use client";
import React from "react";
import profile from "../../public/ayushi.jpg";
import Image from "next/image";
import India from "../../public/india.svg";
import { links } from "../../lib/contactData";

const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK;

function page() {
  return (
    <>
      <div className="flex md:flex-nowrap flex-wrap-reverse justify-center gap-10 w-[80%] sm:w-[80%] md:w-1/2 mx-auto  mt-12 ">
        {/* Left Side - Includes Profile Photo, Links, Resume Link, About Me Short desc, Age */}
        <div className="w-full ">
          <p className="text-2xl text-white font-medium ">
            Hi, I am Ayushi!
            <span className="wave">👋</span>
          </p>
          <p className="py-4 text-sm  flex items-center justify-start gap-2 text-gray-400 font-medium">
            <Image alt="Indian-Flag" src={India} width={18} height={18} />{" "}
            <span>Based in India | 21 Years Old</span>
          </p>
          <p className=" text-sm text-gray-300">
            I have done my Bachelor's of technology in Computer Science from
            Rajiv Gandhi Institute Of Petroleum Technology. I am exploring
            opportunities in the field of technoloy, where I can contribute to
            shipping valuable products. I am a quick learner and a team player.
          </p>
          <div className="flex flex-wrap py-8 justify-start gap-4 items-center">
            <button
              className="flex border text-sm text-[#ffda00cc] px-4 py-2 group relative p-8 rounded-2xl bg-[#0b1220]/60 backdrop-blur-lg  border-[#dad115c2] hover:border-[#e2d709] transition-all duration-300 hover:text-[#ffd900cd] shadow-[0_0_40px_-10px_#ffc200b8] hover:scale-105 font-normal"
              onClick={() => window.open(RESUME_LINK, "_blank")}
            >
              Resume{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-down ml-2 size-5"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M12 18v-6"></path>
                  <path d="m9 15 3 3 3-3"></path>
                </svg>
              </span>
            </button>

            <div className="flex justify-start gap-2 items-center">
            {links.map((link) => {
              return (
                <div
                  className="cursor-pointer text-gray-400 hover:text-white"
                  onClick={() => {
                    window.open(link.url, "_blank");
                  }}
                  key={link.id}
                >
                  {link.logo}
                </div>
              );
            })}
            </div>
          </div>
        </div>

        {/* Right Side - Includes Photo */}
        <div className="">
          <Image alt="Profile Photo" src={profile} className=" rounded-md" width={300} height={300}/>
        </div>
      </div>
    </>
  );
}

export default page;
