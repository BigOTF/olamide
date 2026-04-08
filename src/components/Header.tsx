"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
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
        <header className={`max-w-360 w-full px-7 py-5 lg:py-7 lg:px-25 sticky top-0 z-30 flex items-center justify-between transition-all duration-300 ${
            scrolled
                ? "bg-[#111111]/80 backdrop-blur-md border-b border-white/10"
                : "bg-transparent"
            }`}
        >
            <h1>
                <Link href="/" className="helvetica-heading font-bold tracking-[5%] uppercase">Olamide.</Link>
            </h1>

            <nav className="lg:flex items-center lg:gap-25 hidden">
                {
                    navLinks.map((nav, index: number) => (
                        <Link key={index} href={nav.href} className="font-medium lg:text-base">{nav.label}</Link>
                    ))
                }
            </nav>

            <button onClick={() => setIsOpen(true)} className="lg:hidden">
                <Icon icon="ci:hamburger-lg" width="24" height="24" />
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
                                    <Link href="/" className="helvetica-heading font-bold tracking-[5%] uppercase">Olamide.</Link>
                                </h1>
                            
                                <button onClick={() => setIsOpen(false)}>
                                    <Icon icon="ic:baseline-close" width="24" height="24" color="" />
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