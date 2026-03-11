import { Link } from "react-router-dom";
import { Play, ChevronRight, Swords, Trophy, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fights, getFeaturedFight, WEIGHT_CLASSES } from "@/data/fights";
import FightCard from "@/components/FightCard";
import SectionHeading from "@/components/SectionHeading";

const featured = getFeaturedFight();
const trending = fights.slice(0, 4);
const requested = fights.filter((f) => f.tags.includes("Fan Request")).slice(0, 3);

const weightClassIcons: Record<string, string> = {
  Heavyweight: "💪",
  "Light Heavyweight": "🥊",
  Middleweight: "⚡",
  Welterweight: "🔥",
  Lightweight: "💨",
  Featherweight: "🪶",
  Bantamweight: "🎯",
  "Women's Strawweight": "👊",
  "Women's Flyweight": "✨",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Index() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end">
        <img
          src={featured.thumbnail}
          alt={featured.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative container mx-auto px-4 pb-16 pt-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/30">
              🔥 Fight of the Week
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground uppercase leading-[0.95] mb-4">
              Watch the fights the real world can't make happen.
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              Explore cinematic UFC simulations, dream matchups, rivalries, and fan-requested
              battles — all in one polished multimedia hub.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/fight/${featured.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-colors red-glow"
              >
                <Play className="h-4 w-4" /> Watch Now
              </Link>
              <Link
                to="/request"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-foreground font-display font-bold uppercase tracking-wider rounded-lg border border-border hover:bg-accent/80 transition-colors"
              >
                Request a Fight
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <Link to={`/fight/${featured.id}`} className="block group">
          <div className="glass-card rounded-xl overflow-hidden hover-lift">
            <div className="aspect-video relative">
              <img src={featured.thumbnail} alt={featured.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-card/40 flex items-center justify-center group-hover:bg-card/20 transition-colors">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center red-glow animate-pulse-glow">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-display text-2xl font-bold text-foreground">{featured.title}</h2>
              <p className="text-muted-foreground mt-1">{featured.summary}</p>
            </div>
          </div>
        </Link>
      </section>

      {/* TRENDING */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading title="Trending Simulations" subtitle="The most watched fights this week" className="mb-0" />
          <Link to="/browse" className="hidden md:flex items-center gap-1 text-primary text-sm font-semibold hover:underline">
            View All <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trending.map((fight, i) => (
            <motion.div key={fight.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <FightCard fight={fight} size="sm" />
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* WEIGHT CLASSES */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeading title="Browse by Weight Class" subtitle="Find simulations in your favorite division" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {WEIGHT_CLASSES.map((wc, i) => (
            <motion.div key={wc} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link
                to={`/browse?category=${encodeURIComponent(wc)}`}
                className="glass-card p-5 text-center hover-lift block group"
              >
                <span className="text-2xl mb-2 block">{weightClassIcons[wc] || "🥋"}</span>
                <span className="font-display text-sm uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                  {wc}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* MOST WANTED */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeading title="Most Wanted Matchups" subtitle="Fan-requested battles brought to life" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {requested.map((fight, i) => (
            <motion.div key={fight.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <FightCard fight={fight} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/request"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Swords className="h-4 w-4" /> Submit Your Dream Matchup
          </Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHAT IS THIS */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass-card p-8 md:p-12 rounded-xl max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase mb-6">
            Why Fans Choose the Sim Hub
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: "Dream Fights", desc: "Watch matchups the real UFC can't or won't make happen." },
              { icon: Zap, title: "Cinematic Quality", desc: "Professional editing, commentary, and graphics on every simulation." },
              { icon: Users, title: "Fan-Driven", desc: "Submit your dream matchup and see it brought to life." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
