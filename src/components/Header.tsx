"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`max-w-360 w-full px-4 py-4 h-19 lg:h-24 lg:py-6 lg:px-15 sticky top-0 z-30 flex items-center justify-between transition-all duration-300 ${
            scrolled
                ? "bg-[#111111]/80 backdrop-blur-md border-b border-white/10"
                : "bg-transparent"
            }`}
        >
            <h1>
                <Link href="/" className="font-bebas text-[28px] lg:text-[32px] lg:leading-[150%] tracking-[-1%] text-[#C7C7C7]">Olamide Olorunfemi</Link>
            </h1>

            <nav className="lg:flex items-center lg:gap-8 hidden">
                {
                    navLinks.map((nav, index: number) => (
                        <Link key={index} href={nav.href} className="font-medium lg:text-base text-[#C7C7C7]">{nav.label}</Link>
                    ))
                }
            </nav>

            <button onClick={() => setIsOpen(true)} className="lg:hidden w-11 h-11 flex items-center justify-center text-[#C7C7C7]">
                <Icon icon="tabler:menu" width="32" height="32" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="relative z-10 bg-white w-70 h-full flex flex-col py-8 px-6 gap-6 overflow-y-auto"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="flex items-center justify-between text-black">

                                <h1>
                                    <Link href="/" className="font-bebas text-[28px] tracking-[-1%] text-[#0A0A0A]">Olamide</Link>
                                </h1>
                            
                                <button onClick={() => setIsOpen(false)} className="w-11 h-11 flex items-center justify-center text-[#0A0A0A]">
                                    <Icon icon="ic:baseline-close" width="28" height="288" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 my-5">
                                {navLinks.map((nav, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <Link
                                            href={nav.href}
                                            className="font-medium text-lg text-black"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {nav.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}