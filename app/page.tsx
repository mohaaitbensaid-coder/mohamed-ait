"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Cpu,
  Code,
  Palette,
  ExternalLink,
  ChevronRight,
  Briefcase,
  Layers,
  Database,
  Cloud,
  Terminal,
  Activity,
  Rocket,
  Plus
} from "lucide-react";
import React from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-4 md:p-8 min-h-screen bg-black text-white"
    >
      {children}
    </motion.div>
  );
};

const BentoCard = ({
  children,
  className = "",
  title,
  description,
  icon,
  glow = false,
  gradient = false
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  glow?: boolean;
  gradient?: boolean;
}) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`relative group overflow-hidden ${gradient ? 'bg-gradient-to-br from-[#1a1a1a] to-[#262626]' : 'bg-[#1a1a1a]'} border border-[#333333] rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${className}`}
    >
      {glow && (
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {(title || icon) && (
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {icon && <div className="p-2 rounded-xl bg-zinc-800/50 text-zinc-400 group-hover:text-white transition-colors border border-zinc-700/50">{icon}</div>}
              {title && <h3 className="text-lg font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors">{title}</h3>}
            </div>
            {glow && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />}
          </div>
        )}

        <div className="flex-1">
          {children}
        </div>

        {description && (
          <p className="mt-4 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed font-light">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default function Home() {
  const techStack = [
    { name: "React", icon: <Code className="w-5 h-5" />, color: "text-blue-400" },
    { name: "Next.js", icon: <Cpu className="w-5 h-5" />, color: "text-white" },
    { name: "Node.js", icon: <Terminal className="w-5 h-5" />, color: "text-green-400" },
    { name: "Tailwind", icon: <Palette className="w-5 h-5" />, color: "text-sky-400" },
  ];

  const devOpsStack = [
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" />, color: "text-blue-500" },
    { name: "Docker", icon: <Layers className="w-5 h-5" />, color: "text-blue-400" },
    { name: "AWS", icon: <Cloud className="w-5 h-5" />, color: "text-orange-400" },
  ];

  const liveProjects = [
    { name: "EcoTrack AI", desc: "Sustainability monitoring platform", tech: "Next.js + AWS" },
    { name: "Nova Social", desc: "Decentralized messaging app", tech: "React + Node.js" },
    { name: "Pulse Pay", desc: "Fast crypto payment gateway", tech: "TypeScript + Docker" },
  ];

  const experience = [
    { company: "Tech Flow", role: "Senior Frontend Engineer", period: "2023 - Present" },
    { company: "Creative Pixel", role: "UI/UX Designer", period: "2021 - 2023" },
    { company: "Innova Studio", role: "Fullstack Dev", period: "2019 - 2021" },
  ];

  return (
    <main className="bg-black selection:bg-white/20 overflow-x-hidden font-sans">
      {/* Background Decorative Element */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <BentoGrid>
        {/* Profile Card */}
        <BentoCard
          className="md:col-span-2 md:row-span-2 min-h-[450px]"
          glow
          gradient
        >
          <div className="mt-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/50 flex items-center justify-center mb-8 shadow-2xl overflow-hidden group-hover:border-zinc-500 transition-colors"
            >
              <span className="text-5xl text-white font-black tracking-tighter">JD</span>
            </motion.div>
            <motion.h1
              className="text-6xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              John Doe
            </motion.h1>
            <p className="text-xl text-zinc-400 flex items-center gap-3 font-light">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse" />
              Full Stack Engineering Specialist
            </p>
          </div>
          <div className="hidden md:block absolute top-10 right-10">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-white" />
            </div>
          </div>
        </BentoCard>

        {/* Tech Stack Card */}
        <BentoCard
          className="md:col-span-1"
          title="Tech Stack"
          icon={<Cpu className="w-5 h-5 text-blue-400" />}
        >
          <div className="grid grid-cols-2 gap-3">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 group/tech hover:bg-zinc-800/80 transition-all">
                <div className={`text-xl mb-1 ${tech.color}`}>
                  {tech.icon}
                </div>
                <span className="text-[10px] text-zinc-400 group-hover/tech:text-white transition-colors uppercase tracking-widest">{tech.name}</span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Database/DevOps Card */}
        <BentoCard
          className="md:col-span-1"
          title="DB & DevOps"
          icon={<Cloud className="w-5 h-5 text-orange-400" />}
        >
          <div className="flex flex-col gap-3 mt-1">
            {devOpsStack.map((tool) => (
              <div key={tool.name} className="flex items-center gap-3 p-3 bg-zinc-900/40 rounded-2xl border border-zinc-800/50 group/tool hover:bg-zinc-800/80 transition-all">
                <div className={`${tool.color} group-hover/tool:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-zinc-300 group-hover/tool:text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Live Projects Card */}
        <BentoCard
          className="md:col-span-2"
          title="Live Projects"
          icon={<Rocket className="w-5 h-5 text-emerald-400" />}
          gradient
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {liveProjects.map((project) => (
              <div key={project.name} className="flex flex-col p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800/40 hover:border-zinc-600 transition-all group/project cursor-pointer">
                <h4 className="text-sm font-bold text-white mb-1">{project.name}</h4>
                <p className="text-[10px] text-zinc-500 mb-2 font-light line-clamp-1">{project.desc}</p>
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-tighter self-end">{project.tech}</span>
              </div>
            ))}
            <div className="flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-2xl p-4 hover:border-zinc-500 transition-colors opacity-50 hover:opacity-100 cursor-pointer">
              <Plus className="w-6 h-6 text-zinc-500" />
            </div>
          </div>
        </BentoCard>

        {/* GitHub Stats Card */}
        <BentoCard
          className="md:col-span-1"
          title="GitHub Stats"
          icon={<Activity className="w-5 h-5 text-purple-400" />}
        >
          <div className="space-y-4 mt-2">
            <div className="flex justify-between items-center py-2 border-b border-zinc-800/50">
              <span className="text-zinc-500 text-xs font-light">Contributions</span>
              <span className="text-white text-lg font-bold">1,248</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-zinc-800/50">
              <span className="text-zinc-500 text-xs font-light">Repositories</span>
              <span className="text-white text-lg font-bold">42</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-zinc-500 text-xs font-light">Stars Earned</span>
              <span className="text-white text-lg font-bold">350</span>
            </div>
          </div>
        </BentoCard>

        {/* Journey Card */}
        <BentoCard
          className="md:col-span-3"
          title="Journey"
          icon={<Briefcase className="w-5 h-5 text-blue-400" />}
          gradient
        >
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {experience.map((exp, i) => (
              <div key={i} className="flex flex-col p-5 bg-zinc-950/50 rounded-3xl border border-zinc-800/50 group/exp hover:border-zinc-600 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-zinc-200 group-hover/exp:text-white transition-colors">{exp.company}</h4>
                <p className="text-zinc-500 font-light text-sm mt-1">{exp.role}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Connect Card */}
        <BentoCard
          className="md:col-span-3"
          title="Connect"
          icon={<Mail className="w-5 h-5 text-emerald-400" />}
        >
          <div className="flex flex-wrap gap-4 mt-2">
            <a href="#" className="flex-1 flex items-center gap-4 p-5 bg-zinc-900/30 rounded-3xl border border-zinc-800/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all group/link">
              <div className="p-2 rounded-lg bg-zinc-800 group-hover/link:bg-white group-hover/link:text-black transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <span className="font-medium">GitHub</span>
              <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all text-zinc-500" />
            </a>
            <a href="#" className="flex-1 flex items-center gap-4 p-5 bg-zinc-900/30 rounded-3xl border border-zinc-800/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all group/link">
              <div className="p-2 rounded-lg bg-zinc-800 group-hover/link:bg-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </div>
              <span className="font-medium">Twitter</span>
              <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all text-zinc-500" />
            </a>
            <a href="#" className="flex-1 flex items-center gap-4 p-5 bg-zinc-900/30 rounded-3xl border border-zinc-800/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all group/link">
              <div className="p-2 rounded-lg bg-zinc-800 group-hover/link:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="font-medium">LinkedIn</span>
              <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all text-zinc-500" />
            </a>
          </div>
        </BentoCard>
      </BentoGrid>
    </main>
  );
}
