"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Code,
  Palette,
  ExternalLink,
  MapPin,
  Calendar,
  Smartphone,
  Cpu,
  Figma,
  Dribbble,
  Youtube,
  Instagram,
  Terminal,
  Zap,
  Globe2
} from "lucide-react";
import React from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    variants={item}
    className={`bg-[#121212] rounded-[2rem] p-6 md:p-8 flex flex-col justify-start border border-[#1f1f1f] ${className}`}
  >
    {children}
  </motion.div>
);

const Tag = ({ icon, text }: { icon?: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] text-xs font-medium text-zinc-400">
    {icon}
    {text}
  </div>
);

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white p-4 md:p-10 font-sans selection:bg-white/10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto flex flex-col gap-6"
      >
        {/* Top Section: Avatar and Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Avatar Area */}
          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            <motion.div
              variants={item}
              className="relative aspect-square rounded-[3rem] overflow-hidden bg-[#121212] border border-[#1f1f1f]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-950 flex items-center justify-center">
                <span className="text-8xl font-black text-white/10">MB</span>
                {/* Mock Avatar placeholder logic */}
                <div className="absolute inset-4 rounded-[2.5rem] bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9n3Ou54TLUf_pvwcziXrhcnZbWCcmKIiu7sIA8jj3MijqsEssl93P18-jCXZT9hCPaob68p4m6GTw0CAaHAuTMaDSWri4DF8jHeetpJApzc73KTZvDgdo60ItW0k7KgDoAWvvhVeuUhSfILm1lvjXHyN-NJnQ6YpQuayUDo6I-C3pQetLu3VGRIxC/s1080/profile.jpg.jpeg"
                    alt="Mohamed"
                    className="w-full h-full object-cover grayscale opacity-60 contrast-[110%] brightness-[70%] hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bio and Interests */}
          <div className="md:col-span-8 flex flex-col gap-6 h-full">
            <Card className="flex-1 justify-center">
              <p className="text-lg md:text-2xl font-bold italic leading-relaxed text-zinc-200">
                My name is <span className="text-white not-italic">Mohamed</span> self-taught <span className="text-white not-italic">Front-end Developer</span> with 3+ years of experience creating modern, interactive, and high-performance web applications that make a lasting impression.
              </p>
            </Card>

            <div className="bg-[#121212] rounded-[1.5rem] p-4 flex items-center gap-6 border border-[#1f1f1f]">
              <span className="text-sm font-bold text-zinc-500 pl-4 border-r border-zinc-800 pr-4">Interests</span>
              <div className="flex flex-wrap gap-2">
                <Tag text="Design" />
                <Tag text="Artificial Intelligence" />
                <Tag text="Electronics" />
                <Tag text="Open Source" />
                <Tag text="Clean Code" />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold">Freelancer</h3>
                <p className="text-zinc-500 text-sm">Front-end Engineer</p>
              </div>
              <span className="bg-black/50 px-3 py-1 rounded-lg text-[10px] font-bold text-zinc-500 border border-zinc-800">2024 - 2026</span>
            </div>
            <ul className="space-y-3 text-zinc-400 text-sm list-disc pl-4 marker:text-zinc-600">
              <li>Specialized in performance optimization and Core Web Vitals.</li>
              <li>Collaborated with international teams across UI/UX and Backend.</li>
              <li>Delivered pixel-perfect implementations using Tailwind CSS.</li>
            </ul>
          </Card>

          <Card>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold">Meetzed</h3>
                <p className="text-zinc-500 text-sm">Junior Web Dev</p>
              </div>
              <span className="bg-black/50 px-3 py-1 rounded-lg text-[10px] font-bold text-zinc-500 border border-zinc-800">2022 - 2024</span>
            </div>
            <ul className="space-y-3 text-zinc-400 text-sm list-disc pl-4 marker:text-zinc-600">
              <li>Maintained legacy HTML/CSS sites and migrated to React.</li>
              <li>Developed reusable UI components and design systems.</li>
              <li>Tools used: Git, VS Code, Chrome DevTools.</li>
              <li>Assisted in API integrations and state management.</li>
            </ul>
          </Card>
        </div>

        {/* Tools and Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            {/* Tech Stack */}
            <div className="bg-[#121212] rounded-[1.5rem] p-6 border border-[#1f1f1f] flex items-center justify-between">
              <span className="text-sm font-bold text-zinc-500 border-r border-zinc-800 pr-6 mr-6">Core Stack</span>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs border border-blue-500/30">R</div>
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-xs border border-white/20">N</div>
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-xs border border-sky-500/30">T</div>
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-xs border border-yellow-500/30">J</div>
              </div>
            </div>

            {/* Dev Tools */}
            <div className="bg-[#121212] rounded-[1.5rem] p-6 border border-[#1f1f1f] flex items-center justify-between">
              <span className="text-sm font-bold text-zinc-500 border-r border-zinc-800 pr-6 mr-6">Dev Tools</span>
              <div className="flex gap-4">
                <Terminal className="w-6 h-6 text-zinc-500 hover:text-white transition-colors" title="Terminal" />
                <Github className="w-6 h-6 text-zinc-500 hover:text-white transition-colors" title="GitHub" />
                <Figma className="w-6 h-6 text-zinc-500 hover:text-white transition-colors" title="Figma" />
                <Code className="w-6 h-6 text-zinc-500 hover:text-white transition-colors" title="VS Code" />
                <Globe className="w-6 h-6 text-zinc-500 hover:text-white transition-colors" title="Chrome DevTools" />
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#121212] rounded-[1.5rem] p-6 border border-[#1f1f1f] flex items-center justify-between">
              <span className="text-sm font-bold text-zinc-500 border-r border-zinc-800 pr-6 mr-6">Languages</span>
              <div className="flex gap-3">
                <span className="text-lg">🇲🇦</span>
                <span className="text-lg">🇫🇷</span>
                <span className="text-lg">🇬🇧</span>
              </div>
            </div>
          </div>

          {/* Education Area */}
          <Card className="flex flex-col gap-4 justify-center items-center text-center">
            <span className="text-4xl">🎓</span>
            <p className="text-zinc-300 font-semibold text-base leading-relaxed">
              Entirely self-taught
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Built skills through projects, online courses, and real-world experience.
            </p>
          </Card>
        </div>

        {/* Portfolio Section */}
        <div className="bg-[#121212] rounded-[1.5rem] p-6 border border-[#1f1f1f] flex items-center gap-6">
          <span className="text-sm font-bold text-zinc-500 pl-4 border-r border-zinc-800 pr-4">Portfolio</span>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all">
              <Globe2 className="w-4 h-4 text-zinc-500" />
              <span className="text-xs font-semibold">Bento</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all text-pink-500">
              <Dribbble className="w-4 h-4" />
              <span className="text-xs font-semibold text-white">Dribbble</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all text-red-500">
              <Youtube className="w-4 h-4" />
              <span className="text-xs font-semibold text-white">Youtube</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all text-purple-500">
              <Instagram className="w-4 h-4" />
              <span className="text-xs font-semibold text-white">Instagram</span>
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-[#121212] rounded-[1.5rem] p-6 border border-[#1f1f1f] flex flex-wrap items-center gap-8">
          <span className="text-sm font-bold text-zinc-500 pl-4 border-r border-zinc-800 pr-4">Details</span>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2 text-zinc-400 text-xs py-2 bg-zinc-900 px-4 rounded-xl border border-zinc-800">
              <Zap className="w-3.5 h-3.5" />
              <span>20 years</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-xs py-2 bg-zinc-900 px-4 rounded-xl border border-zinc-800">
              <Mail className="w-3.5 h-3.5" />
              <span>mohamedait684912@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-xs py-2 bg-zinc-900 px-4 rounded-xl border border-zinc-800">
              <Smartphone className="w-3.5 h-3.5" />
              <span>+212 783086770</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-xs py-2 bg-zinc-900 px-4 rounded-xl border border-zinc-800">
              <MapPin className="w-3.5 h-3.5" />
              <span>TAROUDANT, MOROCCO</span>
            </div>
          </div>
        </div>

      </motion.div>
    </main>
  );
}
