import React from 'react'
import {blogs} from '../lib/blogData'
import { Calendar, Clock, ExternalLink } from "lucide-react";
import IntroText from '../components/ui/IntroText';


function page() {
  return (
    <>
    <IntroText text={"Writing helps me think clearly and learn deeply. I share blogs on topics I explore — from core computer science concepts to modern technologies — breaking them down into practical, easy-to-understand insights."}/>
    <section className="min-h-screen md:w-1/2 w-[80%] mx-auto text-white pt-10 pb-20 px-6">
      

        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#0b1220]/60 backdrop-blur-lg border border-gray-800 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
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
              <a
                href={blog.link}
                target="_blank"
                className="inline-flex text-sm items-center gap-2 text-blue-400 font-medium hover:text-blue-600 transition"
              >
                Read on Medium
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
    </section>
    </>
  )
}

export default page