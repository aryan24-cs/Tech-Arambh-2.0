"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/common/ParticleBackground";
import { Clock, Terminal, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface WaitingListTeam {
  teamName: string;
  leaderName: string;
}

export default function WaitingListClient({ results }: { results: WaitingListTeam[] }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [delayedSearchTerm, setDelayedSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  useEffect(() => {
    if (!searchTerm && !delayedSearchTerm) return;

    setIsSearching(true);
    const timer = setTimeout(() => {
      setDelayedSearchTerm(searchTerm);
      setIsSearching(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [searchTerm, delayedSearchTerm]);

  const sortedResults = [...results].sort((a, b) => 
    a.teamName.toLowerCase() > b.teamName.toLowerCase() ? 1 : -1
  );

  const filteredResults = sortedResults.filter((r) => {
    return (
      r.teamName.toLowerCase().includes(delayedSearchTerm.toLowerCase()) ||
      r.leaderName.toLowerCase().includes(delayedSearchTerm.toLowerCase())
    );
  });


  return (
    <div className="relative pt-32 pb-20 px-4 z-10">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <div className="mb-8">
          <Link
            href="/results/round2"
            className="inline-flex items-center gap-2 text-tech-blue hover:text-tech-gold transition-colors tracking-widest text-sm uppercase font-bold group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Round 2 Results
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center p-4 mb-6 relative"
          >
            <div className="absolute inset-0 border border-tech-gold/30 rotate-45 animate-spin-slow" />
            <Clock className="w-12 h-12 text-tech-gold relative z-10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-glow-gold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-white">Waiting</span>{" "}
            <span className="text-tech-gold">List</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 text-tech-muted tracking-widest uppercase text-sm mt-6"
          >
            <span className="w-12 h-[1px] bg-tech-gold/50" />
            <p className="text-glow-gold">
              Round 2 Queue: {results.length} Teams
            </p>
            <span className="w-12 h-[1px] bg-tech-gold/50" />
          </motion.div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col gap-8 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-lg relative"
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-tech-gold opacity-70 group-focus-within:opacity-100 transition-opacity" />
              </div>
              <input
                type="text"
                placeholder="Find team in waiting list..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-12 pr-12 py-4 bg-tech-gray/60 border border-tech-gold/30 rounded-none text-white placeholder-tech-muted/70 focus:outline-none focus:border-tech-gold focus:ring-1 focus:ring-tech-gold transition-all text-lg tracking-wider font-tech"
              />
              {/* Decorative cyber corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-tech-gold z-10" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-tech-gold z-10" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-tech-gold z-10" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-tech-gold z-10" />
            </div>
            {isSearching && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-0 h-[2px] bg-tech-gold"
              />
            )}
          </motion.div>
        </div>

        {/* Results Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={delayedSearchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[300px]"
          >
            {filteredResults.length > 0 ? (
              filteredResults.map((result, idx) => (
                <motion.div
                  key={`${result.teamName}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03, duration: 0.4 }}
                  className="bg-tech-gray/60 backdrop-blur-md border border-tech-gold/20 p-6 relative group overflow-hidden transition-all duration-500"
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-tech-gold/10 rounded-bl-full transition-transform group-hover:scale-150 duration-500" />

                  {/* Icon */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-lg relative z-10 transition-colors duration-300 bg-tech-gold/10 text-tech-gold group-hover:bg-tech-gold group-hover:text-tech-dark">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 border border-tech-gold/20 text-tech-gold/60 group-hover:text-tech-gold group-hover:border-tech-gold/40 transition-colors">
                      In Waiting
                    </span>
                  </div>

                  {/* Team Name */}
                  <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-widest group-hover:text-glow-gold transition-colors relative z-10 leading-tight">
                    {result.teamName}
                  </h3>

                  {/* Leader Name */}
                  <div className="mt-4 pt-4 border-t border-tech-gold/10 relative z-10">
                    <div className="flex items-center gap-2 text-tech-muted text-sm group-hover:text-tech-gold transition-colors">
                      <Terminal className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate uppercase tracking-wider text-xs font-bold">
                        {result.leaderName}
                      </span>
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border border-tech-gold/0 group-hover:border-tech-gold/50 transition-all duration-300 pointer-events-none" />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-tech-muted tracking-widest uppercase border border-tech-gold/10 bg-tech-gray/40 backdrop-blur-md flex flex-col items-center justify-center">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50 text-tech-gold" />
                <p className="text-lg font-tech">
                  {isSearching
                    ? "Searching..."
                    : "No matches found."}
                </p>
                <p className="text-xs mt-2 text-tech-gold/50">
                  Search by team name or leader name
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
