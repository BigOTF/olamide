"use client"
import { Icon } from "@iconify/react"
import Link from "next/link"
import AnimatedCard from "@/components/UI/AnimatedCard"
import { ScrollDownArrow } from "@/components/UI/ScrollAnimation"
import AnimatedCardScroll from "@/components/UI/CardAnimation"
import { projects} from "@/data/ProjectData"

const socialLinks = [
  { icon: "mdi:github", href: "https://github.com/BigOTF" },
  { icon: "proicons:x-twitter", href: "https://twitter.com/olamide957" },
  { icon: "line-md:linkedin", href: "https://www.linkedin.com/in/olorunfemi-olamide-9b4037222/" },
]

export default function Home() {
  return (
    <main className="max-w-360 w-full flex flex-col">
      <section className="px-7 pt-5 lg:py-10 lg:px-25 flex flex-col gap-8 lg:gap-14">
        <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">

          <AnimatedCard>
            <div className="flex flex-col gap-2 lg:gap-2.25 lg:w-234">
              <h3 className="text-[#FAFBFF]/65 text-base lg:text-2xl">Hi, I’m OLAMIDE OLORUNFEMI</h3>
              <h2 className="text-4xl lg:text-[52px] lg:leading-[60.8px] tracking-[0%]">I bring designs to life with clean, responsive code. 4 years of building web products that are fast, accessible, and built to solve real user problems.</h2>
            </div>
          </AnimatedCard>

          <div className="flex lg:flex-col gap-5 lg:gap-[34.49]">
            {socialLinks.map((link) => (
                <button key={link.icon} className="w-[46.9px] h-[46.5px] px-[13.79px] py-[13.79px] bg-[#2E2E2E] text-white rounded-[68.97px] flex items-center justify-center">
                  <Link href={link.href}>
                    <Icon icon={link.icon} width="24" height="24" color="white" />
                  </Link>
              </button>
            ))}
          </div>

        </div>

        <button className="bg-[#292929] text-white h-14 w-46.25 lg:h-[63.93px] px-3 py-3 lg:px-[19.66px] lg:py-[19.66px] rounded-[3.33px] flex items-center justify-center">
          <p className="font-medium text-base lg:text-[19.96px]">Hire me</p>
        </button>
      </section>

      <section className="px-7 pt-16 lg:py-10 lg:px-25 flex items-center justify-center">
        <ScrollDownArrow />
      </section>

      <section className="px-7 pt-16 lg:py-10 lg:px-25 flex flex-col gap-10 lg:gap-20">
        <div className="flex flex-col gap-3">
          <p className="text-4xl lg:text-[42px] lg:leading-[60.8px]">Best projects</p>
          <div className="w-full border border-white" />
        </div>

        <div className="flex flex-col gap-10 lg:gap-20">
          {projects.map((project, index: number) => (
            <AnimatedCardScroll key={index} index={index}>
              <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center lg:gap-20">
                <div className="flex flex-col gap-5 lg:gap-10">
                  <p className="font-semibold text-xs text-[#FAFBFF]/70">{project.time}</p>

                  <div className="flex flex-col gap-6 lg:gap-12">

                    <div className="flex flex-col gap-4 lg:gap-6">
                      <div className="flex flex-col gap-3 lg:gap-3.5">
                        <p className="text-4xl lg:text-[42px] lg:leading-[60.8px]">{project.title}</p>
                        <p className="text-sm lg:text-base text-[#FAFBFF]/70">{project.description}</p>
                      </div>

                      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="w-34.25 p-[9.79px] rounded-[49.06px] bg-[#181818] flex items-center justify-center gap-3">
                        <Icon icon="uil:link" width="20" height="20" color="#6C6C6C" />
                        <p className="font-medium text-[10px]">Visit Site</p>
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-col-1 items-center gap-[7.3px]">
                      {project.stack.map((stack, index) => (
                        <button key={index} className="h-14 px-3.5 py-[10.93px] bg-[#181818] rounded-[5px] flex items-center justify-center hover:border border-white transition-all duration-300">
                          <p className="font-semibold text-sm">{stack}</p>
                        </button>
                      ))}
                    </div>

                  </div>
                </div>

                <div className="">
                  <img src={project.image} alt={project.title} className="object-contain" />
                </div>
              </div>
            </AnimatedCardScroll>
          ))}

        </div>
      </section>
    </main>
  )
}