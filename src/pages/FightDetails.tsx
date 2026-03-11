import { useParams, Link } from "react-router-dom";
import { Play, ArrowLeft, Share2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { getFightById, fights } from "@/data/fights";
import FighterStatCard from "@/components/FighterStatCard";
import FightCard from "@/components/FightCard";
import SectionHeading from "@/components/SectionHeading";

export default function FightDetails() {
  const { id } = useParams();
  const fight = getFightById(id || "");

  if (!fight) {
    return (
      <main className="pt-24 pb-16 container mx-auto px-4 text-center">
        <h1 className="font-display text-3xl text-foreground mb-4">Fight Not Found</h1>
        <Link to="/browse" className="text-primary hover:underline">Browse all fights</Link>
      </main>
    );
  }

  const related = fights.filter((f) => f.id !== fight.id && f.category === fight.category).slice(0, 3);

  return (
    <main className="pt-20 pb-16">
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img src={fight.thumbnail} alt={fight.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-10 z-10">
          <Link to="/browse" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Archive
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/30">
              {fight.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase leading-tight mb-2">
              {fight.title}
            </h1>
            <p className="text-muted-foreground max-w-xl">{fight.summary}</p>
          </motion.div>
        </div>
      </section>

      {/* Video Player */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="aspect-video relative bg-card flex items-center justify-center">
            <img src={fight.thumbnail} alt={fight.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative flex flex-col items-center gap-3 z-10">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center red-glow animate-pulse-glow cursor-pointer">
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              </div>
              <p className="text-muted-foreground text-sm">Click to play simulation</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Tale of the Tape */}
        <section>
          <SectionHeading title="Tale of the Tape" subtitle="Fighter comparison breakdown" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FighterStatCard fighter={fight.fighter1} corner="red" />
            <FighterStatCard fighter={fight.fighter2} corner="blue" />
          </div>
        </section>

        {/* Prediction */}
        <section>
          <SectionHeading title="Pre-Fight Analysis" />
          <div className="glass-card p-6 md:p-8">
            <p className="text-foreground leading-relaxed mb-4">
              This is a clash of styles that fans have debated for years. {fight.fighter1.name} brings
              elite {fight.fighter1.style.toLowerCase()} to the table, while {fight.fighter2.name} counters
              with devastating {fight.fighter2.style.toLowerCase()}.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In our EA Sports UFC 4 simulation, we set both fighters to their peak attributes and let
              the AI battle it out over 5 rounds. The result may surprise you — watch the full simulation
              above to see how it plays out.
            </p>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-foreground rounded-lg text-sm font-medium hover:bg-accent/80 transition-colors">
            <Share2 className="h-4 w-4" /> Share
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-foreground rounded-lg text-sm font-medium hover:bg-accent/80 transition-colors">
            <MessageSquare className="h-4 w-4" /> Comments
          </button>
        </div>

        <div className="section-divider" />

        {/* Related */}
        {related.length > 0 && (
          <section>
            <SectionHeading title="Related Simulations" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((f) => (
                <FightCard key={f.id} fight={f} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
