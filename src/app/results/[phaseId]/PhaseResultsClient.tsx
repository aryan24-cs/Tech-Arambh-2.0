"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/common/ParticleBackground";
import { Trophy, Terminal, Building2, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ResultType {
  phase: string;
  teamName: string;
  collegeName: string;
  leaderName: string;
}

export default function PhaseResultsClient({ results, phaseName }: { results: ResultType[], phaseName: string }) {
  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  const [delayedSearchTerm, setDelayedSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Debouncing & Throttling (3s delay) inside the background without heavy UI
  useEffect(() => {
    if (!searchTerm && !delayedSearchTerm) return;

    setIsSearching(true);
    const timer = setTimeout(() => {
      setDelayedSearchTerm(searchTerm);
      setIsSearching(false);
    }, 3000); // 3 seconds delay for rate limiting

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredResults = results.filter(r => {
    return r.teamName.toLowerCase().includes(delayedSearchTerm.toLowerCase()) || 
           r.collegeName.toLowerCase().includes(delayedSearchTerm.toLowerCase()) ||
           r.leaderName.toLowerCase().includes(delayedSearchTerm.toLowerCase());
  });

  return (
    <div className="relative pt-32 pb-20 px-4 z-10">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
            <Link href="/results" className="inline-flex items-center gap-2 text-tech-blue hover:text-tech-gold transition-colors tracking-widest text-sm uppercase font-bold group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Phases
            </Link>
        </div>

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
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-white">{phaseName}</span>{" "}
            <span className="text-tech-blue">Selections</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 text-tech-muted tracking-widest uppercase text-sm mt-6"
          >
            <span className="w-12 h-[1px] bg-tech-blue/50" />
            <p className="text-glow-blue">Official Hackathon Results</p>
            <span className="w-12 h-[1px] bg-tech-blue/50" />
          </motion.div>
        </div>

        {/* Action Bar: Search */}
        <div className="flex flex-col gap-8 mb-12 items-center">
            {/* Search Bar */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-md relative"
            >
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-tech-blue opacity-70 group-focus-within:opacity-100 transition-opacity" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search team or college..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full pl-12 pr-12 py-3 bg-tech-gray/60 border border-tech-blue/30 rounded-none text-white placeholder-tech-muted/70 focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue transition-all"
                    />
                    {/* Decorative cyber corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-tech-blue z-10" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-tech-blue z-10" />
                </div>
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]"
            >
                {filteredResults.length > 0 ? (
                filteredResults.map((result, idx) => (
                    <motion.div
                    key={`${result.teamName}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-tech-gray/60 backdrop-blur-md border border-tech-blue/20 p-6 relative group overflow-hidden"
                    >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-tech-blue/10 rounded-bl-full transition-transform group-hover:scale-150 duration-500" />
                    
                    <div className="flex items-start justify-between mb-4">
                        <div className="bg-tech-blue/20 p-3 rounded-lg text-tech-blue relative z-10 group-hover:bg-tech-blue group-hover:text-tech-dark transition-colors duration-300">
                        <Terminal className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] text-tech-gold tracking-widest uppercase font-bold px-3 py-1 bg-tech-gold/10 border border-tech-gold/30">
                        Selected
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest group-hover:text-glow-blue transition-colors relative z-10">
                        {result.teamName}
                    </h3>
                    
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-tech-blue/20 relative z-10">
                        <div className="flex items-center gap-2 text-tech-gold text-sm">
                            <Terminal className="w-4 h-4" />
                            <span className="truncate uppercase tracking-wider text-xs font-bold w-full">Leader: {result.leaderName}</span>
                        </div>
                        <div className="flex items-center gap-2 text-tech-muted text-sm">
                            <Building2 className="w-4 h-4 text-tech-blue" />
                            <span className="truncate uppercase tracking-wider text-xs font-bold leading-relaxed block overflow-hidden">{result.collegeName}</span>
                        </div>
                    </div>
                    
                    {/* Hover visual effect */}
                    <div className="absolute inset-0 border border-tech-blue/0 group-hover:border-tech-blue/50 transition-all duration-300 pointer-events-none" />
                    </motion.div>
                ))
                ) : (
                    <div className="col-span-full py-20 text-center text-tech-muted tracking-widest uppercase border border-tech-blue/10 bg-tech-gray/40 backdrop-blur-md flex flex-col items-center justify-center">
                        <Search className="w-12 h-12 mx-auto mb-4 opacity-50 text-tech-blue" />
                        <p>{isSearching ? "Processing Search..." : "No results found matching your criteria."}</p>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
