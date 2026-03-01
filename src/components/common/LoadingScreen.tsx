"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-tech-dark z-[9999] flex flex-col items-center justify-center p-6 font-tech overflow-hidden"
                >
                    {/* Dotted grid background overlay */}
                    <div className="absolute inset-0 dotted-grid opacity-20" />

                    {/* Scanning Line */}
                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                        className="absolute left-0 w-full h-1 bg-tech-blue/50 shadow-[0_0_20px_rgba(230,57,70,0.8)] z-0"
                    />

                    {/* Logo Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 relative z-10 p-6 tech-border-box"
                    >
                        <div className="absolute inset-0 bg-tech-gray/50 backdrop-blur-sm -z-10" />
                        <span className="text-5xl sm:text-7xl font-bold tracking-[0.15em] uppercase text-tech-text drop-shadow-[0_0_15px_rgba(230,57,70,0.5)]" style={{ fontFamily: 'var(--font-heading)' }}>
                            TECH AARAMBH <span className="text-tech-blue">2.0</span>
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-2xl text-tech-text tracking-[0.4em] uppercase font-bold text-glow-blue relative z-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        TECH AARAMBH <span className="text-tech-blue">2.0</span>
                    </motion.h1>

                    {/* Subtitle / Loading text */}
                    <motion.div
                        className="flex items-center gap-3 mt-4 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <div className="w-2 h-2 bg-tech-blue animate-pulse" />
                        <p className="text-xs text-tech-muted tracking-widest uppercase font-bold">
                            SYS.BOOT // INITIATING ARENA...
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
