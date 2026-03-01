"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Linkedin, Cpu } from "lucide-react";

const mentors: any[] = [
    // Judges to be revealed soon
];

export default function Mentors() {
    return (
        <section id="mentors" className="py-24 px-4 relative bg-tech-dark font-tech overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 dotted-grid opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-tech-blue" />
                            <p className="text-tech-blue text-xs sm:text-sm tracking-[0.3em] uppercase font-tech font-bold">
                                EXPERT ADVISORS
                            </p>
                            <span className="w-8 h-[2px] bg-tech-blue" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-tech-text leading-tight">
                            THE <span className="text-tech-blue">WAR COUNCIL</span>
                        </h2>
                    </div>
                </ScrollReveal>

                {mentors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {mentors.map((mentor, index) => (
                            <motion.div
                                key={mentor.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="tech-container p-6 text-center group relative overflow-hidden clip-path-cyber flex flex-col items-center bg-tech-gray/50 backdrop-blur-sm"
                            >
                                {/* Hover glow */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl ${mentor.bg}`} />

                                <div className="relative z-10 w-full flex flex-col items-center">
                                    {/* ID Badge */}
                                    <div className="absolute top-0 right-0 text-[10px] text-tech-muted font-bold tracking-widest">
                                        ADV_0{index + 1}
                                    </div>

                                    {/* Avatar */}
                                    <div className="relative w-20 h-20 mb-6 mt-4">
                                        <div
                                            className={`w-full h-full clip-path-cyber flex items-center justify-center transition-all duration-500 group-hover:scale-110 border ${mentor.border} bg-tech-gray`}
                                        >
                                            <span className={`text-2xl font-bold uppercase ${mentor.accent}`}>
                                                {mentor.name.split(" ").map((n: string) => n[0]).join("")}
                                            </span>
                                        </div>
                                        <div className={`absolute -bottom-2 -right-2 w-6 h-6 flex items-center justify-center bg-tech-gray border ${mentor.border} clip-path-cyber z-20`}>
                                            <Cpu className={`w-3.5 h-3.5 ${mentor.accent}`} />
                                        </div>
                                    </div>

                                    <h3 className={`text-xl font-bold mb-1 uppercase tracking-wider ${mentor.accent}`}>
                                        {mentor.name}
                                    </h3>
                                    <p className="text-sm text-tech-text font-bold uppercase tracking-widest mb-1">{mentor.title}</p>
                                    <p className="text-xs text-tech-muted uppercase tracking-widest mb-6 border-b border-tech-border pb-4 w-full text-center">
                                        {mentor.company}
                                    </p>

                                    <a
                                        href={mentor.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 text-xs px-4 py-2 border transition-all duration-300 uppercase font-bold tracking-widest hover:bg-opacity-20 hover:scale-105 ${mentor.border} ${mentor.accent} hover:${mentor.bg}`}
                                    >
                                        <Linkedin size={14} />
                                        CONNECT_LINK
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-center p-12 mt-8 border border-tech-blue/30 tech-container bg-tech-gray/20 backdrop-blur-sm min-h-[300px]"
                    >
                        <div className="w-20 h-20 rounded-full border border-tech-blue/50 border-dashed animate-spin-slow mb-8 flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full blur-md bg-tech-blue/20" />
                            <div className="w-8 h-8 rounded-full border-[3px] border-tech-gold animate-pulse shadow-[0_0_15px_rgba(244,162,97,0.8)]" />
                        </div>
                        <h3 className="text-3xl md:text-5xl tracking-[0.3em] font-bold text-tech-text uppercase text-glow-blue text-center drop-shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                            REVEALING SOON
                        </h3>
                        <p className="text-tech-muted uppercase tracking-[0.2em] text-sm md:text-base mt-6 font-bold text-center border-t border-tech-blue/30 pt-4 w-full max-w-md">
                            CLASSIFIED IDENTITIES PENDING DECRYPTION
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
