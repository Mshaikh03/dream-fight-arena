import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Jon Jones vs Francis Ngannou",
    videoSrc: "/videos/fight1.mp4",
    prediction:
      "Jon Jones wins by decision, using his wrestling advantage to avoid extended striking exchanges and control the fight. Francis will attempt to knock him out with his insane power punch.",
  },
  {
    id: 2,
    title: "Khabib Nurmagomedov vs Tony Ferguson",
    videoSrc: "/videos/fight2.mp4",
    prediction:
      "Khabib wins in Round 2 with a submission (obviously), using takedowns and top pressure to neutralize Ferguson. Ferguson may land some kicks that knock Khabib down.",
  },
  {
    id: 3,
    title: "Amanda Nunes vs Cris Cyborg",
    videoSrc: "/videos/fight3.mp4",
    prediction:
      "Amanda Nunes wins in Round 3, using her striking, distance control, and late-round finishing ability. Cris will leverage her BJJ and Judo background to exhaust Amanda in an attempt to secure a later-round victory.",
  },
];

const upcomingFights = [
  {
    id: 1,
    title: "Georges St-Pierre vs Anderson Silva",
  },
  {
    id: 2,
    title: "Fedor Emelianenko vs Brock Lesnar",
  },
  {
    id: 3,
    title: "Brock Lesnar vs Daniel Cormier",
  },
];

export default function Index() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleVideos = videos.slice(startIndex, startIndex + 2);

  const handleNext = () => {
    if (startIndex < videos.length - 2) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white pt-24">
      {/* Global subtle gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_#000000_0%,_#120000_18%,_#1a0000_35%,_#111111_70%,_#000000_100%)]" />

      {/* Hero spotlight */}
      <div className="pointer-events-none absolute top-24 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-red-900/15 blur-3xl" />

      {/* Fight section spotlight */}
      <div className="pointer-events-none absolute top-[520px] left-1/2 h-[500px] w-[1100px] -translate-x-1/2 rounded-full bg-red-950/10 blur-3xl" />

      {/* Dark readability overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-[0.06em] leading-none">
              UFC Fight Simulator Hub
            </h1>

            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Watch simulated UFC dream matchups and custom fight
              simulations. Each fight includes analysis, commentary, and
              predictions.
            </p>

            <div className="mt-10">
              <Link
                to="/request"
                className="inline-block rounded-xl bg-red-600 px-8 py-4 text-lg font-medium uppercase tracking-wide transition-colors hover:bg-red-700"
              >
                Request a Fight
              </Link>
            </div>
          </div>
        </section>

        {/* VIDEOS */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Featured Fight Simulations
            </h2>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous fights"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={handleNext}
                disabled={startIndex >= videos.length - 2}
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next fights"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {visibleVideos.map((video) => (
              <div
                key={video.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/55 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm"
              >
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full aspect-video bg-black"
                >
                  <source src={video.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="p-5">
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    {video.title}
                  </h3>

                  <h4 className="mt-4 text-sm font-semibold uppercase tracking-wide text-red-500">
                    Ali&apos;s Prediction
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-gray-300 md:text-base">
                    {video.prediction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UPCOMING FIGHTS */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Upcoming Fights
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {upcomingFights.map((fight) => (
              <div
                key={fight.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/55 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm"
              >
                <div className="relative w-full aspect-video bg-[linear-gradient(to_bottom,_#120000_0%,_#2a0000_35%,_#1a1a1a_100%)] flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative z-10 text-center px-6">
                    <p className="text-red-500 text-sm md:text-base font-semibold uppercase tracking-[0.12em]">
                      Simulation in progress
                    </p>
                    <p className="mt-3 text-white text-lg md:text-xl font-bold uppercase tracking-wide">
                      Coming soon
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    {fight.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}