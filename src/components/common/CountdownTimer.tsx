"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-03-20T09:00:00+05:30").getTime();

function getTimeLeft() {
    const now = Date.now();
    const diff = TARGET_DATE - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

function TimerBlock({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                {/* Outer border frame */}
                <div className="w-20 h-24 sm:w-28 sm:h-32 md:w-32 md:h-36 border border-tech-border bg-tech-gray/60 backdrop-blur-sm clip-path-cyber flex items-center justify-center relative group hover:border-tech-blue/50 transition-colors duration-500">
                    {/* Corner accents */}
                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-tech-blue/40" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-tech-blue/40" />

                    {/* Value */}
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-tech-text tabular-nums tracking-tight" style={{ fontFamily: "var(--font-tech)" }}>
                        {String(value).padStart(2, "0")}
                    </span>
                </div>
            </div>
            <span className="mt-3 text-[10px] sm:text-xs text-tech-blue uppercase tracking-[0.3em] font-bold">
                {label}
            </span>
        </div>
    );
}

function Separator() {
    return (
        <div className="flex flex-col items-center gap-2 pt-2 sm:pt-4">
            <div className="w-1.5 h-1.5 bg-tech-blue animate-pulse" />
            <div className="w-1.5 h-1.5 bg-tech-blue animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
    );
}

export default function CountdownTimer() {
    const [time, setTime] = useState(getTimeLeft);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(interval);
    }, []);

    // Prevent hydration mismatch by not rendering values until client mount
    const display = mounted ? time : { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return (
        <section className="py-16 sm:py-20 px-4 relative bg-tech-dark font-tech overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 dotted-grid opacity-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-tech-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-tech-blue" />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-tech-blue animate-pulse" />
                            <span className="text-tech-blue text-xs tracking-[0.3em] uppercase font-bold">
                                COUNTDOWN ACTIVE
                            </span>
                        </div>
                        <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-tech-blue" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-tech-text tracking-wide">
                        THE ARENA <span className="text-tech-blue text-glow-blue">OPENS IN</span>
                    </h2>
                </motion.div>

                {/* Timer Blocks */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start justify-center gap-3 sm:gap-5 md:gap-6"
                >
                    <TimerBlock value={display.days} label="Days" />
                    <Separator />
                    <TimerBlock value={display.hours} label="Hours" />
                    <Separator />
                    <TimerBlock value={display.minutes} label="Minutes" />
                    <Separator />
                    <TimerBlock value={display.seconds} label="Seconds" />
                </motion.div>

                {/* Date info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-8 text-tech-muted text-xs sm:text-sm uppercase tracking-widest font-bold"
                >
                    MARCH 20 – 21, 2026 <span className="text-tech-blue mx-2">///</span> 09:00 AM IST
                </motion.p>
            </div>
        </section>
    );
}
