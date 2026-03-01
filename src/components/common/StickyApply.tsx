"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TerminalSquare } from "lucide-react";

export default function StickyApply() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 right-6 z-40"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="https://forms.gle/kcPyofH7qG9agxwS9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-btn text-sm px-4 md:px-6 py-2 md:py-3 shadow-lg flex items-center gap-2"
                        >
                            <TerminalSquare size={16} />
                            REGISTER NOW
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
