"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Brain, Globe, HeartPulse, GraduationCap, Building2, Leaf, BookOpen, Ambulance, Truck, Recycle, Lightbulb } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const tracks: { icon: LucideIcon; title: string; description: string; accent: string; bg: string; border: string; tag: string }[] = [
    {
        icon: BookOpen,
        title: "Education",
        description: "Reimagine the future of learning with accessible, adaptive, and immersive educational technologies.",
        accent: "text-tech-blue",
        bg: "bg-tech-blue/10",
        border: "border-tech-blue/30",
        tag: "ED-TECH",
    },
    {
        icon: Ambulance,
        title: "Healthcare",
        description: "Innovate medical systems, patient care, diagnostic tools, and accessible health platforms.",
        accent: "text-tech-gold",
        bg: "bg-tech-gold/10",
        border: "border-tech-gold/30",
        tag: "HEALTH-TECH",
    },
    {
        icon: Truck,
        title: "Transportation & Logistics",
        description: "Optimize supply chains, smart routing, and innovative delivery solutions for a connected world.",
        accent: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/30",
        tag: "TRANS-LOG",
    },
    {
        icon: Recycle,
        title: "Sustainability",
        description: "Build eco-friendly solutions addressing climate change, renewable energy, and resource management.",
        accent: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/30",
        tag: "GREEN-TECH",
    },
    {
        icon: Lightbulb,
        title: "Open Innovation",
        description: "No constraints. Build wildly creative solutions to any problem you envision. The only limit is your imagination.",
        accent: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/30",
        tag: "ANYTHING GOES",
    },
];

export default function Tracks() {
    return (
        <section id="tracks" className="py-28 px-4 relative bg-tech-dark font-tech overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 dotted-grid opacity-10" />
            {/* Ambient glows */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-tech-blue/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-tech-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-20">
                        <div className="inline-flex items-center gap-3 mb-5">
                            <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-tech-blue" />
                            <p className="text-tech-blue text-xs sm:text-sm tracking-[0.3em] uppercase font-tech font-bold">
                                SELECT YOUR DOMAIN
                            </p>
                            <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-tech-blue" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-tech-text leading-tight">
                            BATTLE <span className="text-tech-blue text-glow-blue">TRACKS</span>
                        </h2>
                        <p className="text-tech-muted text-center max-w-xl mt-4 tracking-wide text-sm uppercase font-bold">
                            Choose your arena. Each track is a unique battlefield demanding specialized skills and creative solutions.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            {/* Outer glow on hover */}
                            <div className={`absolute -inset-[1px] ${track.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none`} />

                            <div className={`relative tech-container p-0 overflow-hidden clip-path-cyber bg-tech-gray/40 backdrop-blur-sm border ${track.border} group-hover:border-opacity-80 transition-all duration-500`}>

                                {/* Top Accent Bar */}
                                <div className={`h-1 w-full ${track.bg}`}>
                                    <motion.div
                                        className={`h-full ${track.accent.replace('text-', 'bg-')}`}
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                                    />
                                </div>

                                <div className="p-6 md:p-8">
                                    {/* Header Row */}
                                    <div className="flex justify-between items-start mb-6">
                                        {/* Icon */}
                                        <div className={`relative w-16 h-16 flex items-center justify-center`}>
                                            {/* Animated ring */}
                                            <div className={`absolute inset-0 ${track.border} border rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`} />
                                            <div className={`w-12 h-12 ${track.bg} border ${track.border} flex items-center justify-center clip-path-cyber group-hover:scale-110 transition-all duration-300`}>
                                                <track.icon className={`w-6 h-6 ${track.accent}`} />
                                            </div>
                                        </div>

                                        {/* Track ID Badge */}
                                        <div className="flex flex-col items-end gap-1">
                                            <span className={`text-[10px] ${track.accent} font-bold tracking-widest uppercase px-2 py-0.5 border ${track.border} ${track.bg}`}>
                                                {track.tag}
                                            </span>
                                            <span className="text-[10px] text-tech-muted font-bold tracking-widest">
                                                TRK_0{index + 1}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-2xl font-bold uppercase mb-3 ${track.accent} tracking-wide`}>
                                        {track.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-tech-muted leading-relaxed tracking-wide mb-6">
                                        {track.description}
                                    </p>

                                    {/* Bottom Bar */}
                                    <div className="flex items-center justify-between border-t border-tech-border pt-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${track.accent.replace('text-', 'bg-')} animate-pulse`} />
                                            <span className="text-[10px] tracking-widest uppercase font-bold text-tech-text">
                                                SYS.ACTIVE
                                            </span>
                                        </div>

                                        {/* Signal bars */}
                                        <div className="flex items-end gap-[3px]">
                                            {[1, 2, 3, 4, 5].map((bar) => (
                                                <motion.span
                                                    key={bar}
                                                    className={`w-[3px] bg-tech-border block group-hover:${track.accent.replace('text-', 'bg-')} transition-colors duration-300`}
                                                    style={{ height: `${bar * 4}px` }}
                                                    initial={{ opacity: 0.3 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.5 + bar * 0.1 }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom info strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
                >
                    <div className="flex items-center gap-2 text-xs text-tech-muted uppercase tracking-widest font-bold">
                        <div className="w-2 h-2 bg-tech-blue animate-pulse" />
                        5 DOMAINS ACTIVE
                    </div>
                    <div className="hidden sm:block w-[1px] h-4 bg-tech-border" />
                    <div className="flex items-center gap-2 text-xs text-tech-muted uppercase tracking-widest font-bold">
                        <div className="w-2 h-2 bg-tech-gold animate-pulse" />
                        OPEN FOR ALL SKILL LEVELS
                    </div>
                    <div className="hidden sm:block w-[1px] h-4 bg-tech-border" />
                    <div className="flex items-center gap-2 text-xs text-tech-muted uppercase tracking-widest font-bold">
                        <div className="w-2 h-2 bg-emerald-400 animate-pulse" />
                        CROSS-TRACK ALLOWED
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
