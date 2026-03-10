import fs from "fs";
import path from "path";
import ResultsClient from "./ResultsClient";

export const metadata = {
  title: "Results - Tech Aarambh 2.0",
  description: "Check out the phase-wise hackathon results for Tech Aarambh 2.0.",
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
  
  // Skip the header row (index 0)
  const results = lines.slice(1).map(line => {
    // Assuming CSV with no commas inside quotes. Simple split.
    const values = line.split(",");
    return {
      phase: values[0]?.trim() || "",
      teamName: values[1]?.trim() || "",
      collegeName: values[2]?.trim() || "",
      leaderName: values[3]?.trim() || "",
    };
  }).filter(r => r.phase && r.teamName);

  return (
    <main className="min-h-screen bg-tech-dark relative overflow-hidden">
        <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />
        <ResultsClient results={results} />
    </main>
  );
}
