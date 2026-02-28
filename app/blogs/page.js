"use client";
import React from "react";
import { blogs } from "../lib/blogData";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import IntroText from "../components/ui/IntroText";
import cardBG from "../public/grid-ellipsis.svg";

function page() {
  return (
    <>
      <IntroText
        className={"sm:mt-14 mt-24 mb-5"}
        text={
          "Writing helps me think clearly and learn deeply. I share blogs on topics I explore — from core computer science concepts to modern technologies."
        }
      />
      <section className="min-h-screen md:w-1/2 w-[90%] mx-auto text-white pt-10 pb-20 md:px-6 px-4">
        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <div
              style={{ backgroundImage: `url(${cardBG.src})` }}
              className="size-full bg-repeat rounded-3xl bg-[length:35px_35px]"
            >
              <div className="size-full rounded-3xl bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950">
                <div
                  key={index}
                  className=" group relative p-8 rounded-3xl border border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
                >
                  {/* Title */}
                  <h2 className="md:text-md text-sm font-semibold mb-4 ">
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {blog.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blog.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {blog.readTime}
                    </div>
                  </div>

                  {/* Link */}
                  <button
                    onClick={() => window.open(blog.link, "_blank")}
                    className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex justify-center items-center gap-2 text-black font-semibold hover:scale-105 transition"
                  >
                    Read on Medium
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default page;
