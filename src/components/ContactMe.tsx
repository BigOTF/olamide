"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"

const socialLinks = [
  { icon: "mdi:github", href: "https://github.com/BigOTF" },
  { icon: "proicons:x-twitter", href: "https://twitter.com/olamide957" },
  { icon: "line-md:linkedin", href: "https://www.linkedin.com/in/olorunfemi-olamide-9b4037222/" },
]

export default function ContactMe() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        try {
            // Send to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmitted(true);
                e.currentTarget.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }

        } catch(err) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="px-4 py-16 lg:px-25 lg:py-20 flex flex-col gap-16 lg:gap-20">

            <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

                <div className="flex flex-col justify-between lg:h-152.75">
                    <div className="flex flex-col gap-6 lg:gap-10">
                        <div className="flex flex-col gap-4">
                            <p className="font-bebas text-[43px] lg:text-[76px] leading-[100%] tracking-[-2%] lg:tracking-[0%] text-white">Let’s connect</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-0.75">
                                    <p className="text-[#C7C7C7] text-base lg:text-lg">Say hello at</p>
                                    <span>
                                        <Link 
                                            href="mailto:olamideolorunfemi14@gmail.com?subject=Hello from your portfolio&body=Hi Olamide,%0A%0AI really liked your work and would love to get in touch." 
                                            className="text-white underline decoration-[#D3E97A] underline-offset-6 transition-colors"
                                        >
                                            olamideolorunfemi14@gmail.com
                                        </Link>
                                    </span>
                                </div>

                                <div className="flex items-center gap-0.75">
                                    <p className="text-[#C7C7C7] text-base lg:text-lg">For more info, here’s my</p>
                                    <span>
                                        <Link 
                                            href="/resume/olorunfemi_olamide_frontend_resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white underline decoration-[#D3E97A] underline-offset-6 transition-colors"
                                        >
                                            resume
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 lg:gap-6">
                            {socialLinks.map((link) => (
                                <button key={link.icon} className="w-12 h-12 lg:w-13.5 lg:h-13.5 bg-[#222222] text-[#D3E97A] rounded-full flex items-center justify-center">
                                <Link href={link.href}>
                                    <Icon icon={link.icon} width="24" height="24" />
                                </Link>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block mt-auto">
                        <p className="font-medium lg:text-base text-[#C7C7C7]">&copy; 2026 Olamide Olorunfemi</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8 lg:gap-10">
                    <input type="hidden" name="access_key" value="6950ba85-f75a-438b-99a6-f25f80cf44d0" />

                    <div className="flex flex-col gap-6">

                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-base text-[#C7C7C7]">Name</p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full h-11.5 lg:w-150 lg:h-12.75 px-4 py-2.5 lg:py-3 rounded-sm bg-[#1A1A1A] border border-[#484848] focus:outline-none text-white text-base lg:text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-base text-[#C7C7C7]">Email</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full h-11.5 lg:w-150 lg:h-12.75 px-4 py-2.5 lg:py-3 rounded-sm bg-[#1A1A1A] border border-[#484848] focus:outline-none text-white text-base lg:text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-base text-[#C7C7C7]">Subject</p>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject (optional)"
                                className="w-full h-11.5 lg:w-150 lg:h-12.75 px-4 py-2.5 lg:py-3 rounded-sm bg-[#1A1A1A] border border-[#484848] focus:outline-none text-white text-base lg:text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-base text-[#C7C7C7]">Message</p>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={6}
                                required
                                className="w-full h-37 lg:w-150 lg:h-39 px-4 py-2.5 lg:py-3 rounded-sm bg-[#1A1A1A] border border-[#484848] focus:outline-none text-white text-base lg:text-lg"
                            />
                        </div>

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-35 h-13.5 flex items-center justify-center bg-[#D3E97A] px-10 py-5 rounded-full font-bold text-base text-[#0A0A0A] disabled:opacity-50 "
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
                
            </div>


            <div className="lg:hidden">
                <p className="font-medium lg:text-base text-[#C7C7C7]">&copy; 2026 Olamide Olorunfemi</p>
            </div>
      </section>
    )
}