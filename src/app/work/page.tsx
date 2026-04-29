"use client"
import { useState } from "react"
import { Icon } from "@iconify/react"
import Link from "next/link"
import FadeUp from "@/components/UI/FadeUpAnimation"
import { projects} from "@/data/ProjectData"
import ContactMe from "@/components/ContactMe"

export default function Work() {
    return (
        <main className="max-w-360 w-full flex flex-col">
           <section className="px-4 py-5 lg:py-10 lg:px-25 flex flex-col gap-16 lg:gap-20 border-b border-[#484848]">

                <div className="flex flex-col gap-3 lg:gap-2 lg:w-150">
                    <FadeUp delay={0.1}>
                        <p className="font-bebas text-[43px] lg:text-[76px] leading-[100%] tracking-[-2%] lg:tracking-[0%] text-white">My Projects</p>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <p className="text-base lg:text-lg text-[#C7C7C7]">A curated selection of projects that reflect how I think and build.</p>
                    </FadeUp>
                </div>

                <div className="flex flex-col gap-24 lg:gap-30">
                    {projects.map((project, index: number) => (
                        <FadeUp key={index} delay={index * 0.15}>
                        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
                            <div className="w-full h-85.75 lg:w-150 lg:h-150 flex items-end lg:items-center justify-center bg-[#1A1A1A] rounded-xl">
                            <img src={project.image} alt={project.title} className="object-contain rounded-xl w-82.5 h-62.5 lg:w-122 lg:h-86.75" />
                            </div>

                            <div className="flex flex-col gap-10 lg:gap-12 lg:w-xl">

                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                <p className="font-medium text-2xl lg:text-[32px] text-white">{project.title}</p>
                                <p className="text-base lg:text-lg text-[#C7C7C7]">{project.description}</p>
                                </div>

                                <div className="flex flex-col gap-4">
                                <p className="font-semibold text-base text-white">Project Info</p>
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between h-14.5 py-4 border-y border-[#484848]">
                                    <p className="font-medium text-base text-white">Year</p>
                                    <p className="font-medium text-base text-[#C7C7C7]">{project.time}</p>
                                    </div>
                                    <div className="flex items-center justify-between h-14.5 py-4 border-b border-[#484848]">
                                    <p className="font-medium text-base text-white">Role</p>
                                    <p className="font-medium text-base text-[#C7C7C7]">Front-end Developer</p>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">

                                <div className="flex flex-col gap-1 border-b-2 border-[#D3E97A]">
                                    <Link 
                                        href={project.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 font-bold text-sm lg:text-base text-[#D3E97A] uppercase"
                                    >
                                        Live Demo
                                        <span className="w-5.5 h-5.5 lg:w-6 lg:h-6 flex items-center justify-center">
                                            <Icon icon="prime:arrow-up-right" width="24" height="24" />
                                        </span>
                                    </Link>
                                </div>

                                <div className="flex flex-col gap-1 border-b-2 border-[#D3E97A]">
                                    <Link 
                                        href={project.github} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 font-bold text-sm lg:text-base text-[#D3E97A] uppercase"
                                    >
                                        See on Github
                                        <span className="w-5.5 h-5.5 lg:w-6 lg:h-6 flex items-center justify-center">
                                            <Icon icon="mdi:github" width="24" height="24" />
                                        </span>
                                    </Link>
                                </div>


                            </div>

                            </div>

                        </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            <ContactMe />
        </main>
    )
}