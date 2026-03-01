import Link from "next/link";

import { Instagram, Linkedin, Twitter, Mail, MapPin, Send, Phone } from "lucide-react";

const quickLinks = [
    { href: "/#about", label: "About" },
    { href: "/#tracks", label: "Tracks" },
    { href: "/#timeline", label: "Schedule" },
    { href: "/#prizes", label: "Prizes" },
    { href: "/#faq", label: "FAQ" },
    { href: "https://forms.gle/kcPyofH7qG9agxwS9", label: "Register" },
];

const socials = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#E4405F" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0077B5" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter/X", color: "#1DA1F2" },
];

export default function Footer() {
    return (
        <footer className="border-t border-tech-border bg-tech-dark relative overflow-hidden font-tech">
            {/* Subtle background tech pattern */}
            <div className="absolute inset-0 dotted-grid opacity-10" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Brand Section */}
                    <div className="md:col-span-5">
                        <div className="mb-6">
                            <span className="text-3xl font-bold tracking-[0.15em] uppercase text-tech-text drop-shadow-[0_0_8px_rgba(230,57,70,0.3)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                TECH AARAMBH <span className="text-tech-blue">2.0</span>
                            </span>
                        </div>
                        <p className="text-sm text-tech-muted leading-relaxed mb-6 font-bold uppercase tracking-widest max-w-sm">
                            A 24-hour hackathon by Aravali College of Engineering &amp; Management. <br />
                            <span className="text-tech-blue mt-2 inline-block">Arrows of Innovation, Bows of Code.</span>
                        </p>
                        <div className="flex items-center gap-2 text-xs text-tech-muted uppercase tracking-widest font-bold">
                            <MapPin className="w-4 h-4 text-tech-blue" />
                            <span>March 20–21, 2026 <span className="text-tech-blue mx-2">///</span> ₹50,000 Prize Pool</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-bold text-tech-text tracking-[0.2em] uppercase mb-6 flex items-center gap-2 border-b border-tech-border pb-2 inline-flex">
                            <Send className="w-4 h-4 text-tech-blue" />
                            SYS_NAV
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target={link.label === "Register" ? "_blank" : undefined}
                                    rel={link.label === "Register" ? "noopener noreferrer" : undefined}
                                    className="text-sm text-tech-muted hover:text-tech-blue transition-all flex items-center gap-2 group uppercase tracking-widest font-bold font-tech"
                                >
                                    <div className="w-2 h-[2px] bg-tech-border group-hover:bg-tech-blue group-hover:w-4 transition-all" />
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Connect */}
                    <div className="md:col-span-4 flex flex-col items-start md:items-end md:text-right">
                        <h4 className="text-sm font-bold text-tech-text tracking-[0.2em] uppercase mb-6 flex items-center md:flex-row-reverse gap-2 border-b border-tech-border pb-2 inline-flex">
                            <Mail className="w-4 h-4 text-tech-blue" />
                            COMM_LINK
                        </h4>

                        {/* Socials */}
                        <div className="flex gap-3 mb-8">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-tech-gray border border-tech-border flex items-center justify-center text-tech-muted hover:border-tech-blue hover:text-tech-blue transition-all duration-300 clip-path-cyber"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Contacts */}
                        <div className="flex flex-col gap-3 items-start md:items-end w-full">
                            <a href="mailto:info@aravali.edu.in" className="inline-flex items-center md:flex-row-reverse gap-3 text-sm text-tech-muted hover:text-tech-blue transition-colors font-bold uppercase tracking-widest group">
                                <Mail className="w-4 h-4 text-tech-border group-hover:text-tech-blue" />
                                info@aravali.edu.in
                            </a>
                            <div className="inline-flex items-center md:flex-row-reverse gap-3 text-sm text-tech-muted font-bold uppercase tracking-widest group">
                                <Phone className="w-4 h-4 text-tech-border group-hover:text-tech-blue" />
                                ARYAN - 8510882886
                            </div>
                            <div className="inline-flex items-center md:flex-row-reverse gap-3 text-sm text-tech-muted font-bold uppercase tracking-widest group">
                                <Phone className="w-4 h-4 text-tech-border group-hover:text-tech-blue" />
                                SUNIL - 9310065542
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-6 border-t border-tech-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-tech-blue animate-pulse" />
                        <p className="text-xs text-tech-muted uppercase tracking-widest font-bold">
                            SYS_ONLINE // 2026 Tech Aarambh 2.0
                        </p>
                    </div>
                    <p className="text-xs text-tech-muted uppercase tracking-widest font-bold flex items-center gap-2">
                        © 2026 <span className="text-tech-blue">Tech Aarambh 2.0</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
