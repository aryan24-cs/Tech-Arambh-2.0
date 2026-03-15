import WaitingListClient from "./WaitingListClient";
import waitingListData from "@/data/round2-waiting-list.json";

export const metadata = {
  title: "Round 2 Waiting List - Tech Aarambh 2.0",
  description:
    "View the Round 2 waiting list teams for Tech Aarambh 2.0 hackathon.",
};

export default function Round2WaitingListPage() {
  return (
    <main className="min-h-screen bg-tech-dark relative overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />
      <WaitingListClient results={waitingListData} />
    </main>
  );
}
