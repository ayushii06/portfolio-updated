"use client";
import React, { useEffect, useState } from "react";
import profile from "../../public/ayushi.jpg";
import Image from "next/image";
import India from "../../public/india.svg";
import { links } from "../../lib/contactData";
import { motion } from "framer-motion";
import IntroText from "../ui/IntroText";
import { FileDown } from "lucide-react";
import { Tiles } from "../ui/tiles";

const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK;

function page() {
  const [grid, setGrid] = useState({ rows: 28, cols: 11 });

useEffect(() => {
  const updateGrid = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const tileSize = 12;

    const rows = Math.floor(width / tileSize);
    const cols = Math.floor(height / tileSize);

    setGrid({ rows, cols });
  };

  updateGrid();
  window.addEventListener("resize", updateGrid);

  return () => window.removeEventListener("resize", updateGrid);
}, []);
  const [wave, setWave] = useState(false);

React.useEffect(() => {
  setWave(true);
}, []);
  return (
    <>
    <div className="relative w-full mx-auto">
    <Tiles 
        rows={grid.rows} 
        cols={grid.cols}
        tileSize="md"
        className="dark"
      />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pb-12 pt-20 mx-auto"
    >
      <div className="flex md:flex-nowrap flex-wrap-reverse justify-center gap-10 w-[80%] sm:w-[80%] md:w-1/2 mx-auto mt-12">
      {/* Left Side */}
      <div className="w-full">
        <p className="text-2xl text-white font-semibold">
          Hi, I am Ayushi! <span className={`wave ${wave ? "animate-once" : ""}`}>👋</span>
        </p>

        <p className="py-4 text-sm flex items-center gap-2 text-gray-400 font-medium">
          <Image alt="Indian-Flag" src={India} width={18} height={18} />
          <span>Based in India | 21 Years Old</span>
        </p>

        <p className="text-sm text-gray-300 leading-relaxed">
          I have done my Bachelor's of technology in Computer Science from
          Rajiv Gandhi Institute Of Petroleum Technology. I am exploring
          opportunities in the field of technology, where I can contribute to
          shipping valuable products. I am a quick learner and a team player.
        </p>

        <div className="flex flex-wrap py-8 justify-start gap-4 items-center">
          <button onClick={() => window.open(RESUME_LINK, "_blank")} variant="variant" className="flex justify-center items-center gap-2">
            <FileDown width={14} height={14}/>
            Resume</button>
          {/* <button
            className="flex items-center gap-2 text-sm text-[#ffda00cc] px-5 py-2 rounded-xl 
            bg-[#0b1220]/60 backdrop-blur-lg border border-[#dad115c2]
            hover:border-[#e2d709] hover:text-[#ffd900cd]
            transition-all duration-300 hover:scale-105
            shadow-[0_0_40px_-10px_#ffc200b8]"
            onClick={() => window.open(RESUME_LINK, "_blank")}
          >
            Resume
          </button> */}

          <div className="flex gap-3 items-center">
            {links.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer text-gray-400 hover:text-white transition"
                onClick={() => window.open(link.url, "_blank")}
              >
                {link.logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.div
       className="relative z-10 "
      >
        <Image
          alt="Profile Photo"
          src={profile}
          className="rounded-xl sm:w-[28vw] shadow-[0_20px_60px_-20px_rgba(255,215,0,0.25)]"
          width={300}
          height={300}
        />
      </motion.div>
      </div>


      <IntroText text={"Those who are motivated only by the desire for the fruit of action are miserable, for they are constantly anxious about the results of what they do."}/>
    </motion.div>
    </div>
    </>

  );
}

export default page;