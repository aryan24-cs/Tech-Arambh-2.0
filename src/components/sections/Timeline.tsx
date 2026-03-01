"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { ScrollText, Swords, Target, Crosshair, BookOpen, Shield, Crown } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const events: { date: string; title: string; description: string; icon: LucideIcon; color: string }[] = [
    {
        date: "Mar 10, 2026",
        title: "Registration Deadline",
        description: "Last date to register your teams for the hackathon.",
        icon: ScrollText,
        color: "text-tech-gold",
    },
    {
        date: "Mar 11, 2026 (Evening)",
        title: "Round 1 Results",
        description: "Announcement of shortlisted teams from the initial screening.",
        icon: Target,
        color: "text-tech-blue",
    },
    {
        date: "Mar 14 - 15, 2026",
        title: "Round 2 (Virtual)",
        description: "Online hackathon phase to evaluate skills and choose finalists.",
        icon: Swords,
        color: "text-tech-text",
    },
    {
        date: "Mar 16, 2026",
        title: "Round 2 Results",
        description: "The top teams advancing to the offline finale are revealed.",
        icon: Shield,
        color: "text-tech-blue",
    },
    {
        date: "Mar 20 - 21, 2026",
        title: "Final Hackathon",
        description: "The 24-hour grand finale offline event. Code, pitch, and win.",
        icon: Crown,
        color: "text-tech-gold",
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className="py-24 px-4 relative bg-tech-dark overflow-hidden font-tech">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 dotted-grid opacity-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-tech-blue" />
                            <p className="text-tech-blue text-xs sm:text-sm tracking-[0.3em] uppercase font-tech font-bold">
                                OPERATION TIMELINE
                            </p>
                            <span className="w-8 h-[2px] bg-tech-blue" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-tech-text">
                            THE <span className="text-tech-blue">PATH</span> FORWARD
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="relative">
                    {/* Center vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px]">
                        <motion.div
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="w-full bg-tech-border"
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        {/* A glowing moving element on the timeline */}
                        <motion.div
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                            className="absolute left-1/2 -translate-x-1/2 w-1 h-8 bg-tech-blue shadow-[0_0_10px_rgba(230,57,70,0.8)] z-10"
                        />
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        {events.map((event, index) => {
                            const isLeft = index % 2 === 0;
                            const EventIcon = event.icon;

                            return (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="relative flex items-start"
                                >
                                    {/* Mobile & Desktop Layout */}
                                    <div className={`w-full flex items-start flex-row md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>

                                        {/* Content Card */}
                                        <div className={`flex-1 ml-12 md:ml-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                                            <div className="tech-container p-6 inline-block w-full md:max-w-md group relative overflow-hidden clip-path-cyber text-left">

                                                <div className="absolute top-0 right-0 w-16 h-16 bg-tech-blue/5 blur-2xl group-hover:bg-tech-blue/10 transition-colors" />

                                                <div className="relative z-10 flex flex-col">
                                                    <div className={`text-xs tracking-widest uppercase mb-2 font-bold ${event.color} flex items-center gap-2`}>
                                                        <span className="w-3 h-[2px] bg-current" />
                                                        {event.date}
                                                    </div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-tech-text mb-3 uppercase">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-sm text-tech-muted font-bold tracking-wide">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Center Node — Hidden on mobile, shown md+ */}
                                        <div className="hidden md:flex flex-col items-center justify-center w-0 relative">
                                            <div className="absolute w-10 h-10 bg-tech-gray border-2 border-tech-border flex items-center justify-center shadow-[0_0_10px_rgba(39,39,42,0.5)] z-20 group-hover:border-tech-blue transition-all duration-300 clip-path-cyber text-tech-muted group-hover:text-tech-blue">
                                                <EventIcon className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Spacer for the other side on desktop */}
                                        <div className="hidden md:block flex-1" />
                                    </div>

                                    {/* Mobile Node */}
                                    <div className="absolute left-6 -translate-x-1/2 top-4 md:hidden w-8 h-8 bg-tech-gray border-2 border-tech-border flex items-center justify-center z-10 text-tech-muted clip-path-cyber">
                                        <EventIcon className="w-3 h-3" />
                                    </div>
                                    {/* Mobile horizontal connector */}
                                    <div className="absolute left-[24px] top-8 md:hidden h-[2px] w-6 bg-tech-border border-b border-tech-border" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
