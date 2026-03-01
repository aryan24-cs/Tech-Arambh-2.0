"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/common/ParticleBackground";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4">
            {/* Cyberpunk Grid Background */}
            <div className="absolute inset-0 bg-tech-dark z-0">
                <div className="absolute inset-0 dotted-grid opacity-20" />
            </div>

            <ParticleBackground />

            {/* Main Cyber Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto tech-border-box p-1 sm:p-2 mt-8">
                {/* Inner actual container */}
                <div className="bg-tech-gray/80 backdrop-blur-md p-8 md:p-12 min-h-[60vh] flex flex-col justify-end relative overflow-hidden clip-path-cyber">

                    {/* Decorative Top Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-50" />
                    <div className="absolute top-4 left-4 text-[10px] text-tech-blue uppercase tracking-widest font-tech opacity-60">
                        SYS. INIT // 2026.03.20
                    </div>

                    {/* Central Cityscape / Abstract Illustration Area */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
                        {/* A massive abstract circle and lines representing the cyber shield/warrior bow */}
                        <div className="w-[800px] h-[800px] rounded-full border border-tech-blue/20 border-dashed animate-spin-slow absolute top-1/2 -translate-y-1/2" />
                        <div className="w-[600px] h-[600px] rounded-full border border-tech-gold/10 absolute top-1/2 -translate-y-1/2" />
                    </div>

                    <div className="relative z-10 max-w-4xl">
                        {/* Organizer Pre-title */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="inline-flex items-center gap-2 mb-4"
                        >
                            <span className="w-8 h-[2px] bg-tech-blue" />
                            <p className="text-tech-blue text-xs sm:text-sm tracking-[0.3em] uppercase font-tech font-bold">
                                Aravali College of Engineering &amp; Management Presents
                            </p>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-none mb-2 text-glow-blue uppercase"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            <span className="text-white">TECH AARAMBH</span>
                            <span className="text-tech-blue ml-2 relative">
                                2.0
                                {/* Little tech accent */}
                                <span className="absolute -top-4 -right-6 text-[12px] tracking-widest text-tech-gold font-tech border border-tech-gold/30 px-2 py-1">
                                    V.2
                                </span>
                            </span>
                        </motion.h1>

                        {/* Subtitle / Techitude */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-tech-muted text-lg sm:text-2xl tracking-[0.2em] font-tech uppercase mb-8"
                        >
                            A 24 Hour National Level Hackathon
                        </motion.p>

                        {/* Information Grid Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-3xl"
                        >
                            <div>
                                <h3 className="text-tech-white text-xl md:text-2xl font-bold uppercase mb-2">Registrations Open</h3>
                                <p className="text-tech-muted text-sm uppercase tracking-wider mb-1">Win Exciting Rewards and Goodies.</p>
                                <p className="text-tech-gold text-xs uppercase tracking-widest font-bold">( Accommodation Provided )</p>
                            </div>
                            <div className="border-l-2 border-tech-blue/40 pl-6">
                                <div className="text-tech-gold text-2xl md:text-3xl font-bold">CASH PRIZE UPTO</div>
                                <div className="text-tech-text text-xl md:text-2xl font-bold">RS 50,000</div>
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-6 mt-8"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="https://forms.gle/kcPyofH7qG9agxwS9" target="_blank" rel="noopener noreferrer" className="cyber-btn text-lg px-10 py-4">
                                    Register Now
                                </Link>
                            </motion.div>
                            <Link href="/#about" className="cyber-btn-outline text-lg px-10 py-4">
                                View Details
                            </Link>
                        </motion.div>
                    </div>

                    {/* Bottom Right Decorative Elements */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="w-1 h-1 bg-tech-blue" />
                        <div className="w-1 h-1 bg-tech-blue" />
                        <div className="w-1 h-1 bg-tech-blue text-transparent">.</div>
                        <div className="w-4 h-1 bg-tech-gold" />
                    </div>
                </div>
            </div>

            {/* Coordinators Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4"
            >
                <div className="text-tech-muted text-sm tracking-widest uppercase mb-4 md:mb-0">
                    <span className="text-tech-blue">///</span> CONNECT WITH COORDINATORS
                </div>
                <div className="flex gap-6 text-sm tracking-wider font-bold">
                    <div className="flex items-center gap-2">
                        <span className="text-tech-gold">ARYAN</span>
                        <span className="text-white">8510882886</span>
                    </div>
                    <div className="text-tech-border">|</div>
                    <div className="flex items-center gap-2">
                        <span className="text-tech-gold">SUNIL</span>
                        <span className="text-white">9310065542</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
