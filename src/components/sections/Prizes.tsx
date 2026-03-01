"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Crown, Medal, Award, Gift } from "lucide-react";

const mainPrizes = [
    {
        place: "2ND PLACE",
        amount: "₹15,000",
        icon: Medal,
        color: "text-tech-text",
        borderColor: "border-tech-text",
        bgColor: "bg-tech-text/10",
        order: "order-1 md:order-0",
        scale: "md:mt-12",
        shadow: "shadow-[0_0_15px_rgba(250,250,250,0.1)]",
    },
    {
        place: "1ST PLACE",
        amount: "₹25,000",
        icon: Crown,
        color: "text-tech-gold",
        borderColor: "border-tech-gold",
        bgColor: "bg-tech-gold/10",
        order: "order-0 md:order-1",
        scale: "",
        shadow: "shadow-[0_0_20px_rgba(244,162,97,0.2)]",
    },
    {
        place: "TRACK PRIZES",
        amount: "₹2,000 / EA",
        icon: Award,
        color: "text-tech-blue",
        borderColor: "border-tech-blue",
        bgColor: "bg-tech-blue/10",
        order: "order-2",
        scale: "md:mt-12",
        shadow: "shadow-[0_0_15px_rgba(0,68,255,0.2)]",
    },
];

export default function Prizes() {
    return (
        <section id="prizes" className="py-24 px-4 relative bg-tech-dark font-tech">
            {/* Background cyber grid */}
            <div className="absolute inset-0 dotted-grid opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-tech-blue" />
                            <p className="text-tech-blue text-xs sm:text-sm tracking-[0.3em] uppercase font-tech font-bold">
                                REWARDS & RECOGNITION
                            </p>
                            <span className="w-8 h-[2px] bg-tech-blue" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-tech-text">
                            WIN <span className="text-tech-blue">EXCITING</span> <br /> REWARDS & GOODIES
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Main Prizes - Podium in Tech Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-end">
                    {mainPrizes.map((prize, index) => (
                        <motion.div
                            key={prize.place}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className={`${prize.order} ${prize.scale} w-full`}
                        >
                            <div
                                className={`tech-container p-8 text-center relative group flex flex-col items-center justify-center min-h-[300px] transition-all bg-tech-gray/50 backdrop-blur-sm ${prize.shadow}`}
                            >
                                {/* Crosshairs */}
                                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-tech-border" />
                                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-tech-border" />
                                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-tech-border" />
                                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-tech-border" />

                                <div className="relative z-10 flex flex-col items-center w-full">
                                    <div className="absolute top-0 right-0 text-[10px] text-tech-muted tracking-widest font-bold">
                                        PRZ_{index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className={`w-20 h-20 flex items-center justify-center clip-path-cyber mb-6 ${prize.bgColor} ${prize.color} border border-current`}
                                    >
                                        <prize.icon className="w-10 h-10" />
                                    </div>

                                    <h3 className={`text-xl font-bold mb-2 tracking-widest uppercase ${prize.color}`}>
                                        {prize.place}
                                    </h3>

                                    <p className={`text-4xl md:text-5xl font-bold ${prize.color} drop-shadow-lg`}>
                                        {prize.amount}
                                    </p>

                                    <div className="w-full h-px bg-tech-border my-6 relative">
                                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[2px] ${prize.bgColor}`} />
                                    </div>

                                    <p className="text-xs tracking-wider uppercase text-tech-muted font-bold">
                                        REWARD LOGGED
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Prizes List */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap"
                >
                    <div className="flex items-center gap-2 text-xs text-tech-muted uppercase tracking-widest font-bold">
                        <div className="w-2 h-2 bg-pink-500 animate-pulse" />
                        BEST GIRLS TEAM: ₹2,000
                    </div>
                    <div className="hidden sm:block w-[1px] h-4 bg-tech-border" />
                    <div className="flex items-center gap-2 text-xs text-tech-muted uppercase tracking-widest font-bold">
                        <div className="w-2 h-2 bg-tech-gold animate-pulse" />
                        TOTAL POOL: ₹50,000+
                    </div>
                    <div className="hidden sm:block w-[1px] h-4 bg-tech-border" />
                    <div className="flex items-center gap-2 text-xs text-tech-muted uppercase tracking-widest font-bold">
                        <div className="w-2 h-2 bg-tech-blue animate-pulse" />
                        CERTIFICATES FOR ALL
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
