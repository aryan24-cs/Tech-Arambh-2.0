"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Register() {
    return (
        <section id="register" className="py-24 px-4 relative bg-tech-dark overflow-hidden font-tech">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />

            {/* Poster Red/Black Smoke Effect (approximated with radial gradients) */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-tech-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-tech-gray/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">

                {/* Tech Aarambh 2.0 Label */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 flex flex-col items-center w-full"
                >
                    <div className="relative inline-block w-full max-w-4xl flex flex-col items-center px-6">
                        {/* Decorative arrows matching the poster */}
                        <div className="absolute top-1/2 left-0 sm:left-4 -translate-y-1/2 flex flex-col gap-1 text-tech-text opacity-70">
                            <motion.div initial={{ y: 0 }} animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0 }}>
                                <ArrowDown className="w-8 sm:w-16 h-8 sm:h-16" strokeWidth={1.5} />
                            </motion.div>
                            <motion.div initial={{ y: 0 }} animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="-mt-4 sm:-mt-8">
                                <ArrowDown className="w-8 sm:w-16 h-8 sm:h-16" strokeWidth={1.5} />
                            </motion.div>
                            <motion.div initial={{ y: 0 }} animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="-mt-4 sm:-mt-8">
                                <ArrowDown className="w-8 sm:w-16 h-8 sm:h-16" strokeWidth={1.5} />
                            </motion.div>
                            <motion.div initial={{ y: 0 }} animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }} className="-mt-4 sm:-mt-8">
                                <ArrowDown className="w-8 sm:w-16 h-8 sm:h-16" strokeWidth={1.5} />
                            </motion.div>
                        </div>

                        <h2 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-none mb-0 drop-shadow-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                            <span className="text-white">TECH AARAMBH </span>
                            <span className="text-[#DF971B]">2.0</span>
                        </h2>
                    </div>

                    {/* Registrations Open Banner */}
                    <div className="relative w-full max-w-2xl mt-4 mb-4 bg-tech-gray/30 backdrop-blur-md p-4 flex justify-center items-center">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase text-white tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                            REGISTRATIONS <span className="opacity-0">.</span> OPEN
                        </h3>
                        {/* Up arrows on the right side */}
                        <div className="absolute right-0 sm:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-0 text-tech-text opacity-70 rotate-180">
                            <motion.div initial={{ y: 0 }} animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0 }}>
                                <ArrowDown className="w-6 sm:w-12 h-6 sm:h-12" strokeWidth={1.5} />
                            </motion.div>
                            <motion.div initial={{ y: 0 }} animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="-mt-3 sm:-mt-6">
                                <ArrowDown className="w-6 sm:w-12 h-6 sm:h-12" strokeWidth={1.5} />
                            </motion.div>
                            <motion.div initial={{ y: 0 }} animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="-mt-3 sm:-mt-6">
                                <ArrowDown className="w-6 sm:w-12 h-6 sm:h-12" strokeWidth={1.5} />
                            </motion.div>
                            <motion.div initial={{ y: 0 }} animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }} className="-mt-3 sm:-mt-6">
                                <ArrowDown className="w-6 sm:w-12 h-6 sm:h-12" strokeWidth={1.5} />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Registration Ticket Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl px-2"
                >
                    <div className="flex flex-col relative w-full items-center">

                        <div className="w-full max-w-3xl text-white text-xl md:text-2xl font-black uppercase tracking-widest mb-2 px-2 shadow-text">
                            VISIT US AT :
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 items-stretch w-full max-w-3xl relative">
                            {/* Left Prominent Block */}
                            <div className="flex-[3] flex flex-col bg-[#0A0A0A]">
                                <div className="bg-white text-black p-8 md:p-10 text-center flex-1 flex flex-col justify-center items-center w-full min-h-[160px]">
                                    <h4 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none mb-3 font-tech">
                                        Cash Prize <span className="text-tech-gray">upto Rs 50,000</span>
                                    </h4>
                                    <p className="text-black/70 font-black text-lg sm:text-xl md:text-[22px] uppercase tracking-wider font-tech">
                                        (ACCOMMODATION PROVIDED)
                                    </p>
                                </div>
                                {/* Red Footer inside block */}
                                <div className="bg-[#D32F2F] text-white text-center py-4 px-2 flex items-center justify-center font-bold tracking-widest text-sm sm:text-base md:text-lg lg:text-xl uppercase w-full">
                                    WIN EXCITING REWARDS AND GOODIES
                                </div>
                            </div>

                            {/* Right QR Placeholder / CTA Block - matching the white square box */}
                            <div className="flex-[1] flex flex-col items-center justify-center border-2 border-white bg-white min-w-[200px] min-h-[200px] relative group overflow-hidden">
                                <Link href="https://forms.gle/kcPyofH7qG9agxwS9" target="_blank" rel="noopener noreferrer" className="absolute inset-0 w-full h-full z-20" aria-label="Register Portal">
                                    <span className="sr-only">Go to Apply Portal</span>
                                </Link>
                                <div className="absolute inset-0 p-4 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/qr.jpg"
                                            alt="Registration QR Code"
                                            fill
                                            sizes="(max-width: 768px) 200px, 300px"
                                            className="object-contain hover:scale-105 transition-transform duration-500 z-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contacts Footer */}
                        <div className="flex flex-col items-center justify-center w-full mt-12 mb-4">
                            <h3 className="text-white font-bold uppercase tracking-widest text-xl mb-4 text-center">
                                OUR COORDINATORS:
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-white font-tech font-bold text-lg md:text-[22px] tracking-widest uppercase text-center justify-center whitespace-nowrap">
                                <a href="tel:8510882886" className="hover:text-tech-blue transition-colors">
                                    ARYAN - 8510882886
                                </a>
                                <div className="hidden sm:block text-tech-white text-2xl font-light">|</div>
                                <a href="tel:9310065542" className="hover:text-tech-blue transition-colors">
                                    SUNIL - 9310065542
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
