import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const allFights = [
  {
    id: 1,
    title: "Jon Jones vs Francis Ngannou",
    status: "available",
    videoSrc: "https://www.youtube.com/embed/cd5j-xXXv50",
    prediction:
      "Jon Jones wins by decision, using his wrestling advantage to avoid extended striking exchanges and control the fight.",
  },
  {
    id: 2,
    title: "Khabib Nurmagomedov vs Tony Ferguson",
    status: "available",
    videoSrc: "https://www.youtube.com/embed/8nOsnnYAZYs",
    prediction:
      "Khabib wins in Round 2 with a submission, using takedowns and top pressure to neutralize Ferguson.",
  },
  {
    id: 3,
    title: "Amanda Nunes vs Cris Cyborg",
    status: "available",
    videoSrc: "https://www.youtube.com/embed/-LxpkCJcvpo",
    prediction:
      "Amanda Nunes wins in Round 3, using her striking, distance control, and late-round finishing ability.",
  },
  {
    id: 4,
    title: "Georges St-Pierre vs Anderson Silva",
    status: "upcoming",
    videoSrc: null,
    prediction: null,
  },
  {
    id: 5,
    title: "Fedor Emelianenko vs Brock Lesnar",
    status: "upcoming",
    videoSrc: null,
    prediction: null,
  },
  {
    id: 6,
    title: "Brock Lesnar vs Daniel Cormier",
    status: "upcoming",
    videoSrc: null,
    prediction: null,
  },
];

export default function Search() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? allFights.filter((f) =>
        f.title.toLowerCase().includes(query.toLowerCase())
      )
    : allFights;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white pt-24">
      {/* Background gradients matching site style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_#000000_0%,_#120000_18%,_#1a0000_35%,_#111111_70%,_#000000_100%)]" />
      <div className="pointer-events-none absolute top-24 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-red-900/15 blur-3xl" />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[0.06em] leading-none mb-4">
            Search Fights
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Find any simulated or upcoming fight
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-12">
          <SearchIcon
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a fight..."
            className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm pl-12 pr-5 py-4 text-white placeholder-gray-500 text-base focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-16 uppercase tracking-wide">
            No fights found for &quot;{query}&quot;
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((fight) => (
              <div
                key={fight.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/55 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm"
              >
                {fight.status === "available" && fight.videoSrc ? (
                  <iframe
                    src={fight.videoSrc}
                    className="w-full aspect-video bg-black"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full aspect-video bg-[linear-gradient(to_bottom,_#120000_0%,_#2a0000_35%,_#1a1a1a_100%)] flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 text-center px-6">
                      <p className="text-red-500 text-sm font-semibold uppercase tracking-[0.12em]">
                        Simulation in progress
                      </p>
                      <p className="mt-3 text-white text-lg font-bold uppercase tracking-wide">
                        Coming soon
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      {fight.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
                        fight.status === "available"
                          ? "bg-red-600/20 text-red-500"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {fight.status === "available" ? "Watch Now" : "Upcoming"}
                    </span>
                  </div>
                  {fight.prediction && (
                    <>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-red-500 mb-1">
                        Ali&apos;s Prediction
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {fight.prediction}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
