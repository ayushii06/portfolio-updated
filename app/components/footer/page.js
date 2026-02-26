"use client";

import { Github, Linkedin, Mail, ArrowUpRight, LucideYoutube } from "lucide-react";
import logo from '../../favicon.ico'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f19] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -top-40 -right-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">

          <div>
            <div className="flex mb-4 justify-start gap-2 items-center">
            <Image alt="Logo" src={logo} width={32} height={32}/>
            <h2 className="text-2xl font-bold ">Ayushi Pal</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building intelligent systems, scalable web applications,
              and thoughtful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/proof-of-work" className="hover:text-white transition">
                  Proof of Work
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="https://github.com/ayushii06"
                target="_blank"
                className="flex items-center justify-between group text-gray-400 hover:text-white transition"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5" />
                  GitHub
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
              </a>

              <a
                href="https://linkedin.com/in/ayushii06"
                target="_blank"
                className="flex items-center justify-between group text-gray-400 hover:text-white transition"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
              </a>

              <a
                href="mailto:your@email.com"
                className="flex items-center justify-between group text-gray-400 hover:text-white transition"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  Email
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
              </a>
              <a
                href="https://youtube.com/@shecode06?si=a_Or_rmGlI6NeKFi"
                target="_blank"
                className="flex items-center justify-between group text-gray-400 hover:text-white transition"
              >
                <div className="flex items-center gap-3">
                  <LucideYoutube className="h-5 w-5" />
                  Youtube
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ayushi Pal. Built with Next.js.</p>
          <p className="mt-4 md:mt-0">
            Designed & Developed with intention ✨
          </p>
        </div>

      </div>
    </footer>
  );
}