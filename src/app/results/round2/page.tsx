import Round2ResultsClient from "./Round2ResultsClient";
import round2Data from "@/data/round2-results.json";

export const metadata = {
  title: "Round 2 Results - Tech Aarambh 2.0",
  description:
    "View the official Round 2 results for Tech Aarambh 2.0 hackathon. Check if your team made it through!",
};

export default function Round2ResultsPage() {
  return (
    <main className="min-h-screen bg-tech-dark relative overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />
      <Round2ResultsClient results={round2Data} />
    </main>
  );
}
