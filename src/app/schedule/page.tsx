"use client";

import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";
import GoldDivider from "@/components/common/GoldDivider";

const schedule = [
    {
        day: "Phase 1: Registration",
        events: [
            { time: "Mar 10, 2026", title: "Registration Deadline", desc: "Last date to form your squads and register for the hackathon." },
            { time: "Mar 11, 2026", title: "Round 1 Results (Evening)", desc: "Announcement of shortlisted teams proceeding to the next round." },
        ],
    },
    {
        day: "Phase 2: Virtual Round",
        events: [
            { time: "Mar 14 & 15", title: "Round 2 (Virtual)", desc: "Virtual hackathon sessions to test your skills." },
            { time: "Mar 16, 2026", title: "Round 2 Results", desc: "Announcement of the top finalists." },
        ],
    },
    {
        day: "Phase 3: Grand Finale",
        events: [
            { time: "Mar 20 & 21, 2026", title: "Final Hackathon", desc: "The grand offline 24-hour event at Aravali College of Engineering & Management." },
        ],
    },
];

export default function SchedulePage() {
    return (
        <>
            <main className="min-h-screen pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gold-light text-glow mb-4"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            Battle Schedule
                        </h1>
                        <p className="text-center text-foreground/60">
                            The complete timeline of Tech Aarambh 2.0 — every moment, every milestone.
                        </p>
                        <GoldDivider />
                    </motion.div>

                    <div className="space-y-10">
                        {schedule.map((block, blockIdx) => (
                            <motion.div
                                key={block.day}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: blockIdx * 0.15, duration: 0.5 }}
                            >
                                <h2
                                    className="text-xl md:text-2xl font-bold text-gold-light mb-6 pb-2 border-b border-gold/20"
                                    style={{ fontFamily: "var(--font-cinzel)" }}
                                >
                                    {block.day}
                                </h2>

                                <div className="relative ml-4 pl-6 border-l border-gold/20 space-y-6">
                                    {block.events.map((event, eventIdx) => (
                                        <motion.div
                                            key={event.title}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: blockIdx * 0.15 + eventIdx * 0.05, duration: 0.4 }}
                                            className="relative"
                                        >
                                            {/* Node dot */}
                                            <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-gold/60 border-2 border-[#0A0A0A]" />

                                            <div className="ornate-card rounded-lg p-4">
                                                <p
                                                    className="text-xs text-ember tracking-widest uppercase mb-1"
                                                    style={{ fontFamily: "var(--font-cinzel)" }}
                                                >
                                                    {event.time}
                                                </p>
                                                <h3
                                                    className="text-base font-bold text-gold-light mb-1"
                                                    style={{ fontFamily: "var(--font-cinzel)" }}
                                                >
                                                    {event.title}
                                                </h3>
                                                <p className="text-sm text-foreground/50">{event.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
