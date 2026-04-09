import { Gamepad2, Film, Mic, Palette, Globe } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const pipeline = [
  { icon: Gamepad2, title: "Gameplay Capture", desc: "Every fight is captured in EA Sports UFC 4 with carefully set fighter attributes, AI difficulty, and match settings." },
  { icon: Film, title: "Video Editing", desc: "Raw footage is edited into a cinematic multi-media experience." },
  { icon: Mic, title: "Commentary & Audio", desc: "Commentary and sound design used to bring each fight to life, creating an immersive viewing experience." },
  { icon: Palette, title: "Graphics & Design", desc: "Custom thumbnails, fighter cards, overlays, stat breakdowns, and branded visuals accompany every release." },
  ];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading
          title="About the Hub"
          subtitle="What UFC Fight Simulator Hub is and why it exists."
        />

        <div className="glass-card p-6 md:p-10 mb-16 space-y-5 text-foreground leading-relaxed">
          <p>
            <strong>UFC Fight Simulator Hub</strong> is a multimedia platform dedicated to
            bringing dream UFC matchups to life. Using EA Sports UFC 4, we simulate the fights fans
            have always wanted to see; from legendary GOAT debates to cross-era clashes.
          </p>
          <p>
            Every video is more than just simulation footage. It's a fully produced piece of content
            featuring cinematic editing, quality graphics, immersive audio design, and
            detailed fight commentary & analysis. The goal is to create an experience that feels like a real broadcast.
          </p>
        </div>

        <SectionHeading title="The Production Pipeline" subtitle="How every simulation goes from idea to your screen" />

        <div className="space-y-4 mb-16">
          {pipeline.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6 flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base uppercase tracking-wider text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-8 text-center">
          <h3 className="font-display text-xl uppercase tracking-wider text-foreground mb-3">
            Dream fights. Simulated.
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Built with passion for MMA and a commitment to quality multimedia production.
          </p>
        </div>
      </div>
    </main>
  );
}
