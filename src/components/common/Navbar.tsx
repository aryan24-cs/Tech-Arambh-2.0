"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#tracks", label: "Tracks" },
    { href: "/#timeline", label: "Timeline" },
    { href: "/#prizes", label: "Prizes" },
    { href: "/#mentors", label: "Mentors" },
    { href: "/#faq", label: "FAQ" },
    { href: "https://forms.gle/kcPyofH7qG9agxwS9", label: "Register" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [open]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-tech-dark/90 backdrop-blur-md border-b-2 border-tech-blue shadow-[0_4px_30px_rgba(230,57,70,0.15)]"
                    : "bg-transparent border-b border-transparent"
                    }`}
            >
                {/* Techy Accent Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <span className="text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase text-tech-text group-hover:text-tech-blue transition-colors drop-shadow-[0_0_8px_rgba(230,57,70,0.4)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                TECH AARAMBH <span className="text-tech-blue">2.0</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target={link.label === "Register" ? "_blank" : undefined}
                                    rel={link.label === "Register" ? "noopener noreferrer" : undefined}
                                    className={`px-4 py-2 text-sm tracking-widest uppercase transition-all duration-300 ${link.label === "Register"
                                        ? "cyber-btn text-sm !py-2 !px-5 ml-3"
                                        : "text-tech-text hover:text-tech-blue relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-tech-blue after:transition-all hover:after:w-full font-tech font-bold"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden text-tech-blue p-2 z-[60]"
                            aria-label="Toggle menu"
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
                            onClick={() => setOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-tech-gray border-l border-tech-blue/50 z-50 flex flex-col clip-path-cyber-left"
                        >
                            {/* Decorative top border */}
                            <div className="h-1 bg-gradient-to-r from-tech-dark via-tech-blue to-tech-dark" />

                            <div className="flex flex-col items-center pt-20 pb-8 relative">
                                <span className="text-4xl font-bold tracking-[0.15em] uppercase text-tech-text drop-shadow-[0_0_10px_rgba(230,57,70,0.5)] relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                                    TECH AARAMBH <span className="text-tech-blue">2.0</span>
                                </span>
                            </div>

                            <nav className="flex flex-col px-6 gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            target={link.label === "Register" ? "_blank" : undefined}
                                            rel={link.label === "Register" ? "noopener noreferrer" : undefined}
                                            className={`block py-3 px-4 text-sm tracking-widest uppercase font-tech font-bold transition-all duration-300 ${link.label === "Register"
                                                ? "cyber-btn w-full text-center mt-4"
                                                : "text-tech-muted hover:text-tech-blue border-l-2 border-transparent hover:border-tech-blue hover:bg-tech-blue/10 hover:pl-6"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Bottom decoration */}
                            <div className="mt-auto px-6 pb-8">
                                <div className="h-[2px] bg-tech-blue/50 w-full mb-4" />
                                <p className="text-xs text-center text-tech-muted tracking-widest font-tech font-bold uppercase">
                                    SYS_ONLINE // 2026.03.20
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
