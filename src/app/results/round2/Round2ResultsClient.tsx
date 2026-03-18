"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/common/ParticleBackground";
import { Trophy, Terminal, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Round2Result {
  rank: number;
  teamName: string;
  leaderName: string;
  collegeName?: string;
}

export default function Round2ResultsClient({ results }: { results: Round2Result[] }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [delayedSearchTerm, setDelayedSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!searchTerm && !delayedSearchTerm) return;

    setIsSearching(true);
    const timer = setTimeout(() => {
      setDelayedSearchTerm(searchTerm);
      setIsSearching(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [searchTerm, delayedSearchTerm]);

  if (!hasMounted) {
    return null;
  }

  const sortedResults = [...results].sort((a, b) => 
    a.teamName.toLowerCase() > b.teamName.toLowerCase() ? 1 : -1
  );

  const filteredResults = sortedResults.filter((r) => {
    const searchLow = delayedSearchTerm.toLowerCase();
    return (
      r.teamName.toLowerCase().includes(searchLow) ||
      r.leaderName.toLowerCase().includes(searchLow) ||
      r.collegeName?.toLowerCase().includes(searchLow)
    );
  });


  return (
    <div className="relative pt-32 pb-20 px-4 z-10">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <div className="mb-8">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-tech-blue hover:text-tech-gold transition-colors tracking-widest text-sm uppercase font-bold group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Results
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
            <div className="absolute inset-0 border border-tech-blue/30 rotate-45 animate-spin-slow" />
            <Trophy className="w-12 h-12 text-tech-gold relative z-10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-glow-blue"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-white">Round 2</span>{" "}
            <span className="text-tech-blue">Selections</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6 mt-6"
          >
            <div className="flex items-center justify-center gap-4 text-tech-muted tracking-widest uppercase text-sm">
              <span className="w-12 h-[1px] bg-tech-blue/50" />
              <p className="text-glow-blue">
                {results.length} Teams Finalized
              </p>
              <span className="w-12 h-[1px] bg-tech-blue/50" />
            </div>

            <Link
              href="/results/round2/waiting-list"
              className="inline-flex items-center gap-2 px-6 py-2 bg-tech-blue/10 border border-tech-blue/30 text-tech-blue hover:bg-tech-blue hover:text-tech-dark transition-all duration-300 tracking-[0.2em] text-xs font-bold uppercase group relative overflow-hidden"
            >
              <span className="relative z-10">Check Waiting List</span>
              <Terminal className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-tech-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none opacity-20" />
            </Link>
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
                <Search className="h-5 w-5 text-tech-blue opacity-70 group-focus-within:opacity-100 transition-opacity" />
              </div>
              <input
                type="text"
                placeholder="Find your team..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-12 pr-12 py-4 bg-tech-gray/60 border border-tech-blue/30 rounded-none text-white placeholder-tech-muted/70 focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue transition-all text-lg tracking-wider font-tech"
              />
              {/* Decorative cyber corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-tech-blue z-10" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-tech-blue z-10" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-tech-blue z-10" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-tech-blue z-10" />
            </div>
            {isSearching && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-0 h-[2px] bg-tech-blue"
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
                  className="bg-tech-gray/60 backdrop-blur-md border border-tech-blue/20 p-6 relative group overflow-hidden transition-all duration-500"
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-tech-blue/10 rounded-bl-full transition-transform group-hover:scale-150 duration-500" />

                  {/* Icon */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-lg relative z-10 transition-colors duration-300 bg-tech-blue/10 text-tech-blue group-hover:bg-tech-blue group-hover:text-tech-dark">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 border border-tech-blue/20 text-tech-blue/60 group-hover:text-tech-blue group-hover:border-tech-blue/40 transition-colors">
                      Qualified
                    </span>
                  </div>

                  {/* Team Name */}
                  <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-widest group-hover:text-glow-blue transition-colors relative z-10 leading-tight">
                    {result.teamName}
                  </h3>

                  {/* Leader and College Name */}
                  <div className="mt-4 pt-4 border-t border-tech-blue/10 relative z-10 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-tech-muted text-sm group-hover:text-tech-gold transition-colors">
                      <Terminal className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate uppercase tracking-wider text-xs font-bold">
                        {result.leaderName}
                      </span>
                    </div>
                    {result.collegeName && (
                      <div className="flex items-center gap-2 text-tech-blue/60 text-sm group-hover:text-tech-blue transition-colors">
                        <Trophy className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate uppercase tracking-wider text-[10px] font-medium leading-tight">
                          {result.collegeName}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border border-tech-blue/0 group-hover:border-tech-blue/50 transition-all duration-300 pointer-events-none" />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-tech-muted tracking-widest uppercase border border-tech-blue/10 bg-tech-gray/40 backdrop-blur-md flex flex-col items-center justify-center">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50 text-tech-blue" />
                <p className="text-lg font-tech">
                  {isSearching
                    ? "Searching..."
                    : "No matches found."}
                </p>
                <p className="text-xs mt-2 text-tech-blue/50">
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
