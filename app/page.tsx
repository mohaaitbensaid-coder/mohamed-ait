"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  Globe2,
  GraduationCap,
  MessageCircle,
  CreditCard,
  Wallet,
  Check,
  Copy,
  Download,
  Star,
  Quote
} from "lucide-react";
import React, { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Card = ({ children, className = "", noPadding = false }: { children: React.ReactNode; className?: string; noPadding?: boolean }) => (
  <motion.div
    variants={item}
    className={`bg-[#0a0a0a] rounded-[2.5rem] ${noPadding ? "" : "p-6 md:p-8"} flex flex-col justify-start border border-white/[0.05] hover:border-white/[0.1] transition-colors relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
    {children}
  </motion.div>
);

const Tag = ({ icon, text }: { icon?: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] rounded-xl border border-white/[0.05] text-[11px] font-medium text-zinc-400 hover:text-white transition-colors">
    {icon}
    {text}
  </div>
);

const ProjectCard = ({ title, desc, tag, img, link }: { title: string; desc: string; tag: string; img: string; link: string }) => (
  <Card noPadding className="h-full">
    <div className="relative aspect-video overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-6 right-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">{tag}</span>
        <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      </div>
    </div>
    <div className="p-6">
      <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{desc}</p>
      <div className="flex items-center justify-between">
        <a href={link} target="_blank" className="flex items-center gap-2 text-xs font-bold text-white hover:text-blue-400 transition-colors">
          View Project <ExternalLink className="w-3 h-3" />
        </a>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <div className="w-2 h-2 rounded-full bg-zinc-800" />
        </div>
      </div>
    </div>
  </Card>
);

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mohamedait684912@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-black min-h-screen text-white p-4 md:p-10 font-sans selection:bg-blue-500/30">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto flex flex-col gap-6"
      >
        {/* Top Section: Avatar and Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Avatar Area */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              variants={item}
              className="relative aspect-square rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/[0.05] group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-950 flex items-center justify-center">
                <span className="text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors">MA</span>
                <div className="absolute inset-4 rounded-[2.5rem] bg-zinc-900/50 backdrop-blur-xl border border-white/[0.05] flex items-center justify-center overflow-hidden">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9n3Ou54TLUf_pvwcziXrhcnZbWCcmKIiu7sIA8jj3MijqsEssl93P18-jCXZT9hCPaob68p4m6GTw0CAaHAuTMaDSWri4DF8jHeetpJApzc73KTZvDgdo60ItW0k7KgDoAWvvhVeuUhSfILm1lvjXHyN-NJnQ6YpQuayUDo6I-C3pQetLu3VGRIxC/s1080/profile.jpg.jpeg"
                    alt="Mohamed"
                    className="w-full h-full object-cover grayscale opacity-60 contrast-[110%] brightness-[70%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-700"
                  />
                </div>
                {/* Availability Badge */}
                <div className="absolute top-8 right-8 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.1] z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Available</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
               <button 
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 bg-[#0a0a0a] border border-white/[0.05] hover:border-white/[0.1] rounded-2xl p-4 transition-all active:scale-95 group"
               >
                 <AnimatePresence mode="wait">
                   {copied ? (
                     <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                       <Check className="w-4 h-4 text-green-500" />
                       <span className="text-xs font-bold">Copied!</span>
                     </motion.div>
                   ) : (
                     <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                       <Copy className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                       <span className="text-xs font-bold text-zinc-500 group-hover:text-white">Copy Email</span>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </button>
               <button className="flex items-center justify-center gap-2 bg-white text-black rounded-2xl p-4 font-bold text-xs hover:bg-zinc-200 transition-all active:scale-95">
                 <Download className="w-4 h-4" />
                 CV
               </button>
            </div>
          </div>

          {/* Bio and Interests */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <Card className="flex-1 flex flex-col justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                Building <span className="text-blue-500">digital</span> experiences that <span className="italic">matter</span>.
              </h1>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-zinc-400 max-w-2xl">
                I'm <span className="text-white">Mohamed</span>, a self-taught <span className="text-white">Front-end Engineer</span> from Morocco. I specialize in crafting high-performance, pixel-perfect interfaces for the modern web.
              </p>
            </Card>

            <div className="bg-[#0a0a0a] rounded-[2.5rem] p-6 flex flex-wrap items-center gap-4 border border-white/[0.05]">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-xl border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                Interests
              </div>
              <div className="flex flex-wrap gap-2">
                <Tag text="Generative AI" icon={<Cpu className="w-3 h-3" />} />
                <Tag text="UI/UX Architecture" icon={<Palette className="w-3 h-3" />} />
                <Tag text="Open Source" icon={<Globe2 className="w-3 h-3" />} />
                <Tag text="Scalable CSS" icon={<Zap className="w-3 h-3" />} />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard 
            title="Nexus SaaS"
            desc="A premium enterprise dashboard with real-time analytics and user management."
            tag="SaaS Platform"
            img="/saas-dashboard.png"
            link="#"
          />
          <ProjectCard 
            title="LuxeCommerce"
            desc="Luxury e-commerce experience with focus on smooth transitions and performance."
            tag="E-commerce"
            img="/ecommerce-app.png"
            link="#"
          />
          <ProjectCard 
            title="Cognitive AI"
            desc="AI-powered tool for developers to generate and optimize code snippets."
            tag="AI / Tools"
            img="/ai-platform.png"
            link="#"
          />
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">Freelance</h3>
                  <p className="text-zinc-500 text-sm">Full-stack Engineer</p>
                </div>
                <span className="bg-blue-500/10 px-3 py-1 rounded-lg text-[10px] font-bold text-blue-400 border border-blue-500/20">2024 - Present</span>
              </div>
              <ul className="space-y-3 text-zinc-400 text-sm list-disc pl-4 marker:text-blue-500">
                <li>Optimizing Core Web Vitals for global startups.</li>
                <li>Building design systems from scratch using Tailwind CSS.</li>
                <li>Integrating modern payment systems like Stripe & Binance.</li>
              </ul>
            </Card>

            <Card>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">Meetzed</h3>
                  <p className="text-zinc-500 text-sm">Web Developer</p>
                </div>
                <span className="bg-zinc-800/50 px-3 py-1 rounded-lg text-[10px] font-bold text-zinc-500 border border-white/5">2022 - 2024</span>
              </div>
              <ul className="space-y-3 text-zinc-400 text-sm list-disc pl-4 marker:text-zinc-600">
                <li>Modernized legacy jQuery applications to React.</li>
                <li>Improved site load speeds by 40% through lazy loading.</li>
                <li>Collaborated on building complex API integrations.</li>
              </ul>
            </Card>
          </div>

          {/* Testimonial / Quote */}
          <Card className="lg:col-span-4 flex flex-col justify-center items-center text-center relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-white/5" />
            <div className="flex gap-1 mb-6">
               {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
            </div>
            <p className="text-lg font-medium italic text-zinc-300 mb-6 leading-relaxed">
              "Mohamed has a rare eye for detail. He doesn't just build websites; he builds experiences that feel premium."
            </p>
            <div>
              <p className="font-bold text-white">Sarah Jenkins</p>
              <p className="text-xs text-zinc-500">CEO @ Nexa Systems</p>
            </div>
          </Card>
        </div>

        {/* Tech Stack & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <Card className="flex flex-col gap-6">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Core Tech Stack</span>
              <div className="grid grid-cols-2 gap-3">
                 <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.05] rounded-2xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">R</div>
                    <span className="text-xs font-bold">React 19</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.05] rounded-2xl">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-xs">N</div>
                    <span className="text-xs font-bold">Next.js 16</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.05] rounded-2xl">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-xs">T</div>
                    <span className="text-xs font-bold">Tailwind 4</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.05] rounded-2xl">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-xs">J</div>
                    <span className="text-xs font-bold">JavaScript</span>
                 </div>
              </div>
           </Card>

           <Card className="flex flex-col gap-6">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Education & Growth</span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/[0.05] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Self-Taught Path</h4>
                  <p className="text-xs text-zinc-500">10,000+ hours of coding & research</p>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Focused on mastery through real-world projects and deep-diving into documentation.
              </p>
           </Card>

           <Card className="flex flex-col gap-6">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Personal Details</span>
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Location</span>
                    <span className="font-bold">Taroudant, Morocco</span>
                 </div>
                 <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Experience</span>
                    <span className="font-bold">3+ Years</span>
                 </div>
                 <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Age</span>
                    <span className="font-bold">20 Years</span>
                 </div>
              </div>
           </Card>
        </div>

        {/* Footer Links */}
        <div className="bg-[#0a0a0a] rounded-[2.5rem] p-8 border border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex gap-6">
             <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
             <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
             <a href="#" className="text-zinc-500 hover:text-sky-400 transition-colors"><Twitter className="w-5 h-5" /></a>
             <a href="#" className="text-zinc-500 hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5" /></a>
           </div>

           <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 rounded-2xl border border-white/[0.05] text-xs font-bold">
                 <Wallet className="w-4 h-4 text-yellow-500" />
                 Binance: 1140524483
              </div>
              <a href="https://www.paypal.me/mohamed684912" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-2xl font-bold text-xs hover:bg-blue-600 transition-all">
                 <CreditCard className="w-4 h-4" />
                 Support via PayPal
              </a>
           </div>
        </div>

      </motion.div>
    </main>
  );
}
