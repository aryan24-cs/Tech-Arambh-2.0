"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Trophy, GraduationCap, MapPin } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 px-4 relative bg-tech-dark">
            <div className="max-w-6xl mx-auto">
                {/* Header Split Section */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20 items-start">
                    {/* Left: Title */}
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold uppercase font-tech leading-tight"
                        >
                            What Is <br />
                            <span className="text-glow-blue text-tech-blue">Tech Aarambh?</span>
                        </motion.h2>
                    </div>

                    {/* Right: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-2/3"
                    >
                        <p className="text-tech-muted text-lg font-tech leading-relaxed mb-6">
                            Tech Aarambh 2.0 is a 24-hour national level hackathon that brings together the brightest minds to forge solutions for tomorrow&apos;s challenges. Like the warriors of ancient India, step into the arena with your bow of code and arrows of innovation.
                        </p>
                        <p className="text-tech-muted text-lg font-tech leading-relaxed">
                            Presented by <span className="text-tech-text border-b border-tech-blue/50 pb-1">Aravali College of Engineering &amp; Management</span>, this hackathon invites innovators to compete, build, and conquer with a cash prize of upto <strong className="text-tech-gold">₹50,000</strong>.
                        </p>
                    </motion.div>
                </div>

                {/* Tech Data Panel (Stats) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="tech-border-box p-1 relative w-full"
                >
                    <div className="bg-tech-gray/50 backdrop-blur-sm p-8 md:p-12 min-h-[300px] flex flex-col justify-center clip-path-cyber relative overflow-hidden">

                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-tech-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tech-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="absolute top-4 right-4 flex gap-1">
                            <span className="w-1 h-1 bg-tech-blue block"></span>
                            <span className="w-1 h-1 bg-tech-blue block"></span>
                            <span className="w-1 h-1 bg-tech-blue block"></span>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10 w-full">

                            {/* Stat 01 */}
                            <div className="flex flex-col relative group">
                                <div className="text-[10px] text-tech-muted uppercase tracking-[0.2em] mb-4 font-bold font-tech flex items-center justify-between">
                                    <span>STAT 01</span>
                                    <Clock className="w-3 h-3 text-tech-blue opacity-50" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-tech-blue font-tech mb-2">
                                    24<span className="text-2xl text-tech-blue/50">H</span>
                                </div>
                                <div className="text-xs text-tech-text uppercase tracking-widest font-tech opacity-80 border-t border-tech-border pt-4">
                                    Duration
                                </div>
                            </div>

                            {/* Divider (Desktop) */}
                            <div className="hidden md:block absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-[2px] bg-tech-border">
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-tech-blue text-[10px]"></span>
                            </div>

                            {/* Stat 02 */}
                            <div className="flex flex-col relative group">
                                <div className="text-[10px] text-tech-muted uppercase tracking-[0.2em] mb-4 font-bold font-tech flex items-center justify-between">
                                    <span>STAT 02</span>
                                    <Users className="w-3 h-3 text-tech-gold opacity-50" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-tech-gold font-tech mb-2">
                                    350<span className="text-2xl text-tech-gold/50">+</span>
                                </div>
                                <div className="text-xs text-tech-text uppercase tracking-widest font-tech opacity-80 border-t border-tech-border pt-4">
                                    Participants
                                </div>
                            </div>

                            {/* Divider (Desktop) */}
                            <div className="hidden md:block absolute left-2/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-[2px] bg-tech-border">
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-tech-blue text-[10px]"></span>
                            </div>

                            {/* Stat 03 */}
                            <div className="flex flex-col relative group">
                                <div className="text-[10px] text-tech-muted uppercase tracking-[0.2em] mb-4 font-bold font-tech flex items-center justify-between">
                                    <span>STAT 03</span>
                                    <Trophy className="w-3 h-3 text-tech-text opacity-50" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-tech-text font-tech mb-2 whitespace-nowrap">
                                    <span className="text-2xl text-tech-text/50 mr-1">₹</span>50<span className="text-2xl text-tech-text/50">K</span>
                                </div>
                                <div className="text-xs text-tech-text uppercase tracking-widest font-tech opacity-80 border-t border-tech-border pt-4">
                                    Prize Pool
                                </div>
                            </div>

                            {/* Divider (Desktop) */}
                            <div className="hidden md:block absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-[2px] bg-tech-border">
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-tech-blue text-[10px]"></span>
                            </div>

                            {/* Stat 04 */}
                            <div className="flex flex-col relative group">
                                <div className="text-[10px] text-tech-muted uppercase tracking-[0.2em] mb-4 font-bold font-tech flex items-center justify-between">
                                    <span>STAT 04</span>
                                    <GraduationCap className="w-3 h-3 text-tech-blue opacity-50" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-tech-blue font-tech mb-2">
                                    100<span className="text-2xl text-tech-blue/50">+</span>
                                </div>
                                <div className="text-xs text-tech-text uppercase tracking-widest font-tech opacity-80 border-t border-tech-border pt-4">
                                    Colleges
                                </div>
                            </div>

                            {/* Divider (Desktop) */}
                            <div className="hidden md:block absolute left-[80%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-[2px] bg-tech-border">
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-tech-blue text-[10px]"></span>
                            </div>

                            {/* Stat 05 */}
                            <div className="flex flex-col relative group">
                                <div className="text-[10px] text-tech-muted uppercase tracking-[0.2em] mb-4 font-bold font-tech flex items-center justify-between">
                                    <span>STAT 05</span>
                                    <MapPin className="w-3 h-3 text-tech-gold opacity-50" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-tech-gold font-tech mb-2">
                                    15<span className="text-2xl text-tech-gold/50">+</span>
                                </div>
                                <div className="text-xs text-tech-text uppercase tracking-widest font-tech opacity-80 border-t border-tech-border pt-4">
                                    States
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
