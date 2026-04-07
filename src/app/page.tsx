"use client"
import { Icon } from "@iconify/react"
import Link from "next/link"

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

          <div className="flex flex-col gap-2 lg:gap-2.25 lg:w-234">
            <h3 className="text-[#FAFBFF]/65 text-base lg:text-2xl">Hi, I’m OLAMIDE OLORUNFEMI</h3>
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60.8px] tracking-[0%]">I implement user interface design and solve user problems using web technologies. I have 5 years of making products that solve user problems and implementing responsive website.</h2>
          </div>

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

        <button className="bg-[#292929] text-white h-14 w-46.25 lg:h-[63.93px] px-3 py-4 lg:px-[19.66px] lg:py-[19.66px] rounded-[3.33px] flex items-center justify-center">
          <p className="font-medium text-[19.96px]">Hire me</p>
        </button>
      </section>

      <section className="px-7 pt-10 lg:py-10 lg:px-25">
        
      </section>
    </main>
  )
}