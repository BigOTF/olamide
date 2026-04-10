"use client"
import { useState } from "react"
import { Icon } from "@iconify/react"
import Link from "next/link"
import AnimatedCard from "@/components/UI/AnimatedCard"
import { ScrollDownArrow } from "@/components/UI/ScrollAnimation"
import FadeUp from "@/components/UI/FadeUpAnimation"
import AnimatedCardScroll from "@/components/UI/CardAnimation"
import { projects} from "@/data/ProjectData"
import ContactMe from "@/components/ContactMe";

const socialLinks = [
  { icon: "mdi:github", href: "https://github.com/BigOTF" },
  { icon: "proicons:x-twitter", href: "https://twitter.com/olamide957" },
  { icon: "line-md:linkedin", href: "https://www.linkedin.com/in/olorunfemi-olamide-9b4037222/" },
]

export default function Home() {
  return (
    <main className="max-w-360 w-full flex flex-col">

      <section className="px-4 py-5 lg:py-10 lg:px-25 flex flex-col lg:flex-row items-center gap-10 lg:gap-10 border-b border-[#484848]">

        <div className="flex flex-col gap-8 lg:gap-10">

          <div className="flex flex-col gap-3 lg:gap-2">
            <FadeUp delay={0.1}>
              <p className="font-bebas text-[57px] leading-[100%] tracking-[0%] lg:text-[101px] lg:leading-[90%] text-white">Hi, I’m OLAMIDE OLORUNFEMI</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#C7C7C7] text-base lg:text-lg">I bring designs to life with clean, responsive code. 4 years of building web products that are fast, accessible, and built to solve real user problems.</p>
            </FadeUp>
          </div>

          <FadeUp delay={0.3}>
            <div className="flex items-center gap-4">

              <button
                onClick={() => {
                  const email = "olamideolorunfemi14@gmail.com";
                  const subject = "Inquiry from Portfolio";
                  const body = "Hi Olamide,%0A%0AI saw your portfolio and would like to get in touch.";
                  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                }}
                className="w-40.75 h-12 pl-4 pr-1.25 lg:w-46.75 lg:h-13.5 lg:pl-6 lg:pr-1.5 lg:py-5 flex items-center justify-center gap-3 rounded-[100px] bg-[#D3E97A] text-[#0A0A0A]"
              >
                <p className="font-bold text-sm lg:text-base">Contact Me</p>
                <span className="w-10 h-10 bg-[#0A0A0A] rounded-full lg:bg-transparent lg:w-10.5 lg:h-10.5 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#0A0A0A] hidden lg:block" />
                  <Icon icon="prime:arrow-up-right" width="24" height="24" className="text-white lg:hidden" />
                </span>
              </button>

              {socialLinks.map((link, index) => (
                  <FadeUp key={index} delay={index * 0.15}>
                    <button className="w-12 h-12 lg:w-13.5 lg:h-13.5 bg-[#222222] text-[#D3E97A] rounded-full flex items-center justify-center">
                      <Link href={link.href}>
                        <Icon icon={link.icon} width="24" height="24" />
                      </Link>
                    </button>
                </FadeUp>
              ))}
            
            </div>
          </FadeUp>

        </div>

        <FadeUp delay={0.4}>
          <div className="">
            <img src={"/images/me.jpeg"} className="object-contain rounded-2xl" />
          </div>
        </FadeUp>

      </section>

      <section className="px-4 py-16 lg:px-25 lg:py-20 flex flex-col gap-16 lg:gap-20 border-b border-[#484848]">

        <div className="flex flex-col gap-3 lg:gap-2 lg:w-150">
          <FadeUp delay={0.1}>
            <p className="font-bebas text-[43px] lg:text-[76px] leading-[100%] tracking-[-2%] lg:tracking-[0%] text-white">Featured Projects</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-base lg:text-lg text-[#C7C7C7]">Here are some of the selected projects that showcase my passion for front-end development.</p>
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
                      <Link href={project.link} className="flex items-center gap-1 font-bold text-sm lg:text-base text-[#D3E97A] uppercase">
                        Live Demo
                        <span className="w-5.5 h-5.5 lg:w-6 lg:h-6 flex items-center justify-center">
                          <Icon icon="prime:arrow-up-right" width="24" height="24" />
                        </span>
                      </Link>
                    </div>

                    <div className="flex flex-col gap-1 border-b-2 border-[#D3E97A]">
                      <Link href={project.github} className="flex items-center gap-1 font-bold text-sm lg:text-base text-[#D3E97A] uppercase">
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
          )).slice(0,3)}

        </div>
      </section>

      <section className="px-4 py-16 lg:px-25 lg:py-20 flex flex-col gap-16 lg:gap-20 border-b border-[#484848]">
        <FadeUp delay={0.1}>
          <p className="font-bebas text-[43px] lg:text-[76px] leading-[100%] tracking-[-2%] lg:tracking-[0%] text-white">About me</p>
        </FadeUp>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <FadeUp delay={0.2}>
            <div className="hidden lg:block">
              <img src={"/images/me.jpeg"} className="object-contain rounded-2xl" />
            </div>
          </FadeUp>

          <div className="flex flex-col gap-6 lg:gap-12 lg:w-175.75">
            <div className="flex flex-col gap-4">
              <FadeUp delay={0.3}>
              < p className="font-medium text-base lg:text-[32px] text-white">I am a front-end developer based in Lagos, Nigeria.</p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <p className="text-lg text-[#C7C7C7]">I am a frontend developer based in Lagos, Nigeria with 4 years of experience building fast, responsive web interfaces that users love. Quantity Surveying graduate turned code enthusiast, I found my passion in creating digital experiences that are as functional as they are beautiful.</p>
              </FadeUp>
            </div>

            <FadeUp delay={0.5}>
              <div className="flex flex-col gap-1 border-b-2 border-[#D3E97A] w-28.25 lg:w-32.25">
                <Link href={"/about"} className="flex items-center gap-1 font-bold text-sm lg:text-base text-[#D3E97A] uppercase">
                  More about me
                </Link>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.6}>
            <div className="lg:hidden">
              <img src={"/images/me.jpeg"} className="object-contain rounded-2xl" />
            </div>
          </FadeUp>
        </div>

      </section>

      <ContactMe />       

    </main>
  )
}