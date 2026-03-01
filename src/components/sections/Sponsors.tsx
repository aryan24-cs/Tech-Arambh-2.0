"use client";


import ScrollReveal from "@/components/common/ScrollReveal";

const organizations = [
    "Aravali College of Engineering & Management",
    "Institution's Innovation Council",
    "IQAC",
];



function SponsorBadge({ name, tier }: { name: string; tier: string }) {
    const sizeMap: Record<string, string> = {
        title: "px-8 py-4 text-lg md:text-xl",
        partner: "px-6 py-3 text-base",
    };

    const borderMap: Record<string, string> = {
        title: "border-tech-blue text-tech-blue bg-tech-blue/5 hover:bg-tech-blue/10",
        partner: "border-tech-border text-tech-muted bg-tech-gray hover:border-tech-text hover:text-tech-text",
    };

    return (
        <div
            className={`inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 clip-path-cyber ${sizeMap[tier]} ${borderMap[tier]}`}
        >
            {name}
        </div>
    );
}

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-24 px-4 relative bg-tech-dark font-tech overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 dotted-grid opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-tech-blue" />
                            <p className="text-tech-blue text-xs sm:text-sm tracking-[0.3em] uppercase font-tech font-bold">
                                NETWORK ALLIANCES
                            </p>
                            <span className="w-8 h-[2px] bg-tech-blue" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-tech-text leading-tight">
                            OUR <span className="text-tech-blue">ALLIES</span>
                        </h2>
                        <p className="text-center text-tech-muted max-w-2xl mx-auto mt-4 uppercase tracking-widest font-bold text-sm">
                            POWERED BY INSTITUTIONS AND LEADERS WHO BELIEVE IN THE NEXT GENERATION OF CODERS.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Organizing Partners */}
                <ScrollReveal delay={0.1}>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-[1px] bg-tech-border" />
                        <h3 className="text-sm tracking-[0.4em] uppercase text-tech-muted font-bold text-center">
                            ORGANIZING BODIES
                        </h3>
                        <span className="w-12 h-[1px] bg-tech-border" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        {organizations.map((s) => (
                            <SponsorBadge key={s} name={s} tier="title" />
                        ))}
                    </div>
                </ScrollReveal>


                <div className="text-center mt-12 pt-10 border-t border-tech-border flex flex-col items-center">
                    <p className="text-sm text-tech-muted font-bold uppercase tracking-widest mb-4">
                        INTERESTED IN FORMING AN ALLIANCE?
                    </p>
                    <a href="mailto:info@aravali.edu.in" className="cyber-btn text-sm px-8 py-3 w-fit">
                        ESTABLISH COMMLINK
                    </a>
                </div>
            </div>
        </section>
    );
}
