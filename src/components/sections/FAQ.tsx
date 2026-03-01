"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "WHO CAN PARTICIPATE IN TECH AARAMBH 2.0?",
        a: "Students from colleges, schools, and diploma colleges can participate. Gather your squad from anywhere – cross-college teams are completely allowed!",
    },
    {
        q: "WHAT IS THE TEAM SIZE?",
        a: "Each team must consist of a minimum of 2 and a maximum of 4 members. Note: A participant cannot be a member of more than one team. If caught, BOTH teams will be immediately disqualified.",
    },
    {
        q: "WHAT ARE THE GUIDELINES FOR ROUND 1 (IDEA SUBMISSION)?",
        a: "You must submit a PPT (Max 7 slides) during registration by March 10th. The PPT should clearly present your problem statement, proposed solution, basic implementation approach, expected impact, and feasibility.",
    },
    {
        q: "WHAT SHOULD I BRING TO THE CAMPUS FINALE?",
        a: "Bring your own laptops, chargers, any required hardware components, a valid college/school ID card (mandatory), and personal necessities. We provide internet, power, meals, and accommodation.",
    },
    {
        q: "IS ACCOMMODATION PROVIDED?",
        a: "Yes, accommodation and food will be provided by the college during the hackathon. For long-distance participants, early accommodation can be arranged from 19th March after 12:00 PM.",
    },
    {
        q: "CAN I PARTICIPATE SOLO?",
        a: "The rulebook states teams must have a minimum of 2 and maximum of 4 members. You'll need to find at least one buddy to form a team before the registration deadline!",
    },
    {
        q: "ARE THERE ANY DISQUALIFICATION RULES?",
        a: "Yes. Zero tolerance for: cheating/plagiarism, misconduct/violation of campus rules, leaving campus without permission, submitting false info, or participating in multiple teams.",
    },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
        >
            <div
                role="button"
                tabIndex={0}
                onClick={() => setOpen(!open)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpen(!open);
                    }
                }}
                className={`w-full text-left tech-container bg-tech-gray/50 backdrop-blur-sm p-5 md:p-6 flex items-start gap-4 group transition-all duration-300 cursor-pointer ${open ? "border-tech-blue bg-tech-blue/5" : "border-tech-border"}`}
            >
                {/* Question icon */}
                <div className={`flex-shrink-0 w-8 h-8 clip-path-cyber flex items-center justify-center mt-0.5 transition-all duration-300 ${open ? "bg-tech-blue/20 border-tech-blue" : "bg-tech-gray border-tech-border"} border`}>
                    <HelpCircle className={`w-4 h-4 transition-colors duration-300 ${open ? "text-tech-blue" : "text-tech-muted"}`} />
                </div>

                <div className="flex-1 min-w-0">
                    <span
                        className={`text-sm md:text-base font-bold tracking-widest block transition-colors duration-300 uppercase ${open ? "text-tech-blue" : "text-tech-text"}`}
                    >
                        {faq.q}
                    </span>

                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 mt-4 border-t border-tech-border/50">
                                    <p className="text-sm text-tech-muted leading-relaxed font-bold tracking-wide">
                                        {faq.a}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-0.5"
                >
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${open ? "text-tech-blue" : "text-tech-muted group-hover:text-tech-text"}`} />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section id="faq" className="py-24 px-4 relative bg-tech-dark font-tech">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 dotted-grid opacity-10 pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-tech-blue" />
                            <p className="text-tech-blue text-xs sm:text-sm tracking-[0.3em] uppercase font-tech font-bold">
                                QUERY DATABASE
                            </p>
                            <span className="w-8 h-[2px] bg-tech-blue" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-tech-text leading-tight">
                            THE <span className="text-tech-blue">ORACLE</span> SPEAKS
                        </h2>
                        <p className="text-center text-tech-muted max-w-2xl mx-auto mt-4 uppercase tracking-widest font-bold text-sm">
                            COMMON LOGS DECRYPTED — ARM YOURSELF WITH KNOWLEDGE BEFORE ENTERING THE ARENA.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
