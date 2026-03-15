import fs from "fs";
import path from "path";
import Link from "next/link";
import { Trophy, ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/common/ParticleBackground";

export const metadata = {
  title: "Results - Tech Aarambh 2.0",
  description: "Select a phase to view the hackathon results for Tech Aarambh 2.0.",
};

export default function ResultsPage() {
  const filePath = path.join(process.cwd(), "src", "data", "results.csv");
  let fileContents = "";
  try {
    fileContents = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading results.csv", error);
  }

  const lines = fileContents.split("\n").filter(line => line.trim() !== "");
  
  // Extract unique phases
  const phasesSet = new Set<string>();
  lines.slice(1).forEach(line => {
    const values = line.split(",");
    const phase = values[0]?.trim();
    if (phase) {
      phasesSet.add(phase);
    }
  });

  const phases = Array.from(phasesSet).sort();

  return (
    <main className="min-h-screen bg-tech-dark relative overflow-hidden pt-32 pb-20 px-4">
      <ParticleBackground />
      <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center p-4 mb-6 relative">
            <div className="absolute inset-0 border border-tech-blue/30 rotate-45 animate-spin-slow" />
            <Trophy className="w-12 h-12 text-tech-gold relative z-10" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-glow-blue" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="text-white">Hackathon</span>{" "}
            <span className="text-tech-blue">Results</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-tech-muted tracking-widest uppercase text-sm mt-6">
            <span className="w-12 h-[1px] bg-tech-blue/50" />
            <p className="text-glow-blue">Official Hackathon Selections</p>
            <span className="w-12 h-[1px] bg-tech-blue/50" />
          </div>
        </div>

        {/* Round 2 Results - Highlighted Card */}
        <div className="max-w-2xl mx-auto mb-10">
          <Link href="/results/round2" className="group relative block w-full overflow-hidden p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-gold/30 via-yellow-400/20 to-tech-gold/30 rounded-sm animate-pulse" />
            <div className="bg-tech-gray/80 backdrop-blur-md p-8 md:p-10 flex flex-col justify-center items-center relative overflow-hidden hover:bg-tech-gold/10 transition-colors duration-500 border border-tech-gold/40">
              <div className="absolute inset-0 bg-gradient-to-tr from-tech-gold/0 to-tech-gold/0 group-hover:from-tech-gold/10 group-hover:to-transparent transition-all duration-500" />
              
              {/* Decorative cyber elements */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-tech-gold opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-tech-gold opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-tech-gold opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-tech-gold opacity-70 group-hover:opacity-100 transition-opacity" />

              <span className="text-[10px] text-tech-gold tracking-[0.3em] uppercase font-bold px-4 py-1 bg-tech-gold/10 border border-tech-gold/30 mb-4 relative z-10">
                🔥 Latest Announcement
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest group-hover:text-tech-gold transition-all mb-4 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                Round 2 Results
              </h2>
              
              <p className="text-tech-muted text-sm tracking-wider uppercase mb-4 relative z-10">
                60 Teams Qualified — Check if your team made it!
              </p>

              <div className="flex items-center gap-2 text-tech-gold text-sm tracking-widest uppercase font-bold relative z-10 group-hover:translate-x-2 transition-transform">
                View Round 2 Results <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Phase Selection Results */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-center text-tech-muted tracking-widest uppercase text-xs font-bold mb-6">
            Phase-wise Selection Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.length > 0 ? (
              phases.map((phase, idx) => {
                // Create a URL-friendly slug, e.g., "Phase 1" -> "phase-1"
                const slug = phase.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link key={phase} href={`/results/${slug}`} className="group relative block w-full overflow-hidden tech-border-box p-1">
                    <div className="bg-tech-gray/60 backdrop-blur-md p-8 min-h-[160px] flex flex-col justify-center items-center relative overflow-hidden hover:bg-tech-blue/10 transition-colors duration-500">
                      <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/0 to-tech-blue/0 group-hover:from-tech-blue/5 group-hover:to-transparent transition-all duration-500" />
                      
                      {/* Decorative cyber elements */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tech-blue opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tech-gold opacity-50 group-hover:opacity-100 transition-opacity" />

                      <h2 className="text-3xl font-bold text-white uppercase tracking-widest group-hover:text-glow-blue transition-all mb-4 relative z-10">
                        {phase}
                      </h2>
                      
                      <div className="flex items-center gap-2 text-tech-gold text-sm tracking-widest uppercase font-bold relative z-10 group-hover:translate-x-2 transition-transform">
                        View Results <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full py-12 text-center text-tech-muted tracking-widest uppercase border border-tech-blue/10 bg-tech-gray/40 backdrop-blur-md">
                <p>No results have been announced yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
