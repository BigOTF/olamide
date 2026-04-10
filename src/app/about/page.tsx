"use client"
import { useState, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import ContactMe from "@/components/ContactMe";
import FadeUp from "@/components/UI/FadeUpAnimation";

const socialLinks = [
  { icon: "mdi:github", href: "https://github.com/BigOTF" },
  { icon: "proicons:x-twitter", href: "https://twitter.com/olamide957" },
  { icon: "line-md:linkedin", href: "https://www.linkedin.com/in/olorunfemi-olamide-9b4037222/" },
]

const skillLists = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "HTML5",
  "CSS3",
  "REST APIs",
  "Git & GitHub",
  "Figma",
  "Responsive Design",
  "Context API",
  "Redux",
]

const workExperience = [
  {
    role: "Frontend Developer",
    company: "Solbase",
    startDate: "Oct 2024",
    endDate: "Feb 2026",
    workDescription:
      "Built and shipped the Solbase Web3 landing page from the ground up, owning both design decisions and implementation without a dedicated designer. Migrated the codebase from React to Next.js for better performance and SEO, and resolved critical image optimization issues that were slowing down the entire experience.",
  },
  {
    role: "Frontend Engineer",
    company: "DeySpeak",
    startDate: "Oct 2025",
    endDate: "Present",
    workDescription:
      "Took full ownership of the frontend rebuild for an Urhobo language learning platform, redesigning and developing key pages from scratch with no design handoff. Migrated the codebase from JavaScript to TypeScript, fixed performance bottlenecks from unoptimized images, and shipped the Blog, Privacy Policy, and Terms of Use pages end to end.",
  },
]



export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-80px" })

    return (
        <main className="max-w-360 w-full flex flex-col pb-[100000px] lg:pb-0">
            <section className="px-4 py-5 lg:py-10 lg:px-25 flex flex-col gap-6 lg:gap-9 border-b border-[#484848]">
                <FadeUp>
                <div>
                    <p className="font-bebas text-[57px] leading-[100%] lg:text-[101px] lg:leading-[90%] tracking-[-2%] lg:tracking-[0%] text-white">About me</p>
                </div>
                </FadeUp>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-20">
                    <div className="flex flex-col gap-10 lg:gap-12 lg:w-227.5">
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <FadeUp delay={0.1}>
                                <p className="text-base lg:text-lg text-[#C7C7C7]">I am Olamide Olorunfemi, a frontend developer based in Lagos, Nigeria. My journey into tech is a little unconventional. I studied Quantity Surveying at the Federal University of Technology Akure (FUTA), but somewhere along the way I discovered frontend development and never looked back. That background taught me precision, attention to detail, and how to think about structure, skills that quietly make me a better developer every day.</p>
                            </FadeUp>
                            <FadeUp delay={0.2}>
                                <p className="text-base lg:text-lg text-[#C7C7C7]">Over the past 4 years I have built responsive, high-performance web products across e-commerce, Web3, creative agencies, and SaaS platforms. I work primarily with Next.js, TypeScript, Tailwind CSS and Framer Motion, and I care deeply about the details that separate a good interface from a great one. Whether I am translating a Figma design pixel by pixel or architecting a project from scratch, I bring the same commitment to clean code, smooth animations, and real user experience.</p>
                            </FadeUp>
                            <FadeUp delay={0.3}>
                                <p className="text-base lg:text-lg text-[#C7C7C7]">I am currently open to internships, full-time roles, and freelance opportunities. If you have something worth building, I would love to be part of it.</p>
                            </FadeUp>
                            <FadeUp delay={0.4}>
                                <p className="text-base lg:text-lg text-[#C7C7C7]">Outside of code, you will find me watching football, keeping up with music and movies, or looking for the next interesting problem to solve.</p>
                            </FadeUp>
                        </div>

                        <FadeUp delay={0.5}>
                            <div className="flex items-center gap-3 lg:gap-4">
                            
                                <a
                                href="/resume/olorunfemi_olamide_frontend_resume.pdf"
                                    download="olorunfemi_olamide_frontend_resume.pdf"
                                    className="w-53 h-12 pl-4 pr-1.25 lg:w-61 lg:h-13.5 lg:pl-6 lg:pr-1.5 lg:py-5 flex items-center justify-center gap-3 rounded-[100px] bg-[#D3E97A] text-[#0A0A0A]"
                                >
                                    <p className="font-bold text-sm lg:text-base text-nowrap">Download Resume</p>
                                    <span className="w-10 h-10 bg-[#0A0A0A] rounded-full lg:bg-transparent lg:w-10.5 lg:h-10.5 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-[#0A0A0A] hidden lg:block" />
                                        <Icon icon="material-symbols:download-rounded" width="24" height="24" className="text-white lg:hidden" />
                                    </span>
                                </a>
                    
                                {socialLinks.map((link) => (
                                    <button key={link.icon} className="w-12 h-12 lg:w-13.5 lg:h-13.5 bg-[#222222] text-[#D3E97A] rounded-full flex items-center justify-center">
                                        <Link href={link.href}>
                                        <Icon icon={link.icon} width="24" height="24" />
                                        </Link>
                                    </button>
                                ))}
                                
                            </div>
                        </FadeUp>
                        
                    </div>

                    <FadeUp delay={0.3}>
                        <div className="">
                            <img src={"/images/me.jpeg"} className="object-contain rounded-2xl" />
                        </div>
                    </FadeUp>
                </div>
            </section>

            <section className="px-4 py-16 lg:py-20 lg:px-25 flex flex-col lg:flex-row gap-3 lg:gap-6 border-b border-[#484848]">
                <FadeUp delay={0.1}>
                <   p className="font-bebas text-[43px] leading-[100%] lg:text-[76px] tracking-[-2%] lg:tracking-[0%] text-white">My Capabilities</p>
                </FadeUp>

                <div className="flex flex-col gap-6 lg:gap-8 lg:w-150 lg:ml-auto">
                    <p className="text-base lg:text-lg text-[#C7C7C7]">I am always looking to grow and add new tools to my craft. I have built across e-commerce, Web3, SaaS, and creative platforms bringing both technical depth and an eye for detail that modern frontend development demands. Clean code, smooth animations, and responsive layouts are not just skills but standards I hold myself to on every project.</p>
                    <div ref={ref} className="flex gap-3 lg:gap-4 flex-wrap">
                        {skillLists.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="h-11.5 px-6 py-4 lg:h-14 lg:px-10 lg:py-5 rounded-full border border-[#484848] flex items-center justify-center"
                                initial={{ opacity: 0, y: -40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                                transition={{
                                    duration: 0.4,
                                    delay: isInView ? index * 0.08 : 0,
                                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                                }}
                            >
                                <p className="font-bold uppercase text-sm lg:text-base text-white">{skill}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 lg:py-20 lg:px-25 flex flex-col lg:flex-row gap-8 lg:gap-6 border-b border-[#484848]">
                <FadeUp delay={0.1}>
                    <p className="font-bebas text-[43px] leading-[100%] lg:text-[76px] tracking-[-2%] lg:tracking-[0%] text-white">My Experience</p>
                </FadeUp>

                <div className="flex flex-col gap-10 lg:gap-20 lg:w-150 lg:ml-auto">
                    {workExperience.map((work, index) => (
                        <FadeUp key={index} delay={index * 0.15}>
                            <div className="flex flex-col gap-3 lg:gap-4">
                                <div className="flex flex-col gap-1 lg:gap-2">
                                    <div className="flex flex-col items-start gap-1 lg:flex-row lg:items-center lg:justify-between lg:gap-2">
                                        <p className="font-medium text-lg lg:text-2xl text-white">{work.role}</p>
                                        <p className="text-[#C7C7C7] text-base lg:text-lg">{work.startDate} - {work.endDate}</p>
                                    </div>
                                    <p className="text-[#D3E97A] font-semibold text-base lg:text-lg">{work.company}</p>
                                </div>
                                <p className="text-[#C7C7C7] text-base lg:text-lg">{work.workDescription}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            <ContactMe />
        </main>
    )
}