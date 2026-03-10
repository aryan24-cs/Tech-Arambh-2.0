import fs from "fs";
import path from "path";
import PhaseResultsClient from "./PhaseResultsClient";
import { notFound } from "next/navigation";

interface ResultType {
  phase: string;
  teamName: string;
  collegeName: string;
  leaderName: string;
}

export async function generateMetadata({ params }: { params: Promise<{ phaseId: string }> }) {
  const resolvedParams = await params;
  const phaseNameDisplay = resolvedParams.phaseId.replace("-", " ").toUpperCase();
  
  return {
    title: `${phaseNameDisplay} Results - Tech Aarambh 2.0`,
    description: `View the official hackathon selections for ${phaseNameDisplay}.`,
  };
}

export default async function PhasePage({ params }: { params: Promise<{ phaseId: string }> }) {
  const resolvedParams = await params;
  const phaseSlug = resolvedParams.phaseId; // e.g., "phase-1"

  const filePath = path.join(process.cwd(), "src", "data", "results.csv");
  let fileContents = "";
  try {
    fileContents = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading results.csv", error);
    return notFound();
  }

  const lines = fileContents.split("\n").filter(line => line.trim() !== "");
  
  // Skip the header row (index 0)
  const allResults: ResultType[] = lines.slice(1).map(line => {
    const values = line.split(",");
    return {
      phase: values[0]?.trim() || "",
      teamName: values[1]?.trim() || "",
      collegeName: values[2]?.trim() || "",
      leaderName: values[3]?.trim() || "",
    };
  }).filter(r => r.phase && r.teamName);

  // Filter for this specific phase matching the slug
  const phaseResults = allResults.filter(r => 
    r.phase.toLowerCase().replace(/\s+/g, '-') === phaseSlug
  );

  if (phaseResults.length === 0) {
    // If no results match this slug, show a 404
    return notFound();
  }

  const actualPhaseName = phaseResults[0].phase;

  return (
    <main className="min-h-screen bg-tech-dark relative overflow-hidden">
        <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />
        <PhaseResultsClient results={phaseResults} phaseName={actualPhaseName} />
    </main>
  );
}
