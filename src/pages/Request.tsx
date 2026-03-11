import { useState } from "react";
import { Send, Swords, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WEIGHT_CLASSES } from "@/data/fights";
import SectionHeading from "@/components/SectionHeading";

const DREAM_EXAMPLES = [
  { f1: "Jon Jones", f2: "Francis Ngannou", why: "The super fight that never happened" },
  { f1: "Prime GSP", f2: "Khamzat Chimaev", why: "Old school vs new school at 170" },
  { f1: "Islam Makhachev", f2: "Khabib", why: "Teammates — who's really #1?" },
];

export default function Request() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    fighter1: "",
    fighter2: "",
    weightClass: "",
    reason: "",
    notes: "",
  });

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-accent border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Request a Simulation"
          subtitle="Got a dream matchup? Submit it below and we might bring it to life in EA Sports UFC 4."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-8 md:p-12 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Fight Submitted!</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Your matchup request has been received. If it gets picked, you'll see it on the site!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", fighter1: "", fighter2: "", weightClass: "", reason: "", notes: "" });
                    }}
                    className="mt-6 px-6 py-3 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="glass-card p-6 md:p-8 space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Your Name *</label>
                      <input
                        required
                        maxLength={100}
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        required
                        type="email"
                        maxLength={255}
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Fighter 1 *</label>
                      <input
                        required
                        maxLength={100}
                        value={form.fighter1}
                        onChange={(e) => update("fighter1", e.target.value)}
                        placeholder="e.g. Jon Jones"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Fighter 2 *</label>
                      <input
                        required
                        maxLength={100}
                        value={form.fighter2}
                        onChange={(e) => update("fighter2", e.target.value)}
                        placeholder="e.g. Francis Ngannou"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Weight Class *</label>
                    <select
                      required
                      value={form.weightClass}
                      onChange={(e) => update("weightClass", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select weight class</option>
                      {WEIGHT_CLASSES.map((wc) => (
                        <option key={wc} value={wc}>{wc}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Why should this fight happen? *</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={3}
                      value={form.reason}
                      onChange={(e) => update("reason", e.target.value)}
                      placeholder="Tell us what makes this matchup special..."
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Additional Notes</label>
                    <textarea
                      maxLength={500}
                      rows={2}
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      placeholder="Any specific round, finish type, or era you'd like?"
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-colors red-glow"
                  >
                    <Send className="h-4 w-4" /> Submit Request
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                <Swords className="h-4 w-4 text-primary" /> Popular Requests
              </h3>
              <div className="space-y-4">
                {DREAM_EXAMPLES.map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      update("fighter1", ex.f1);
                      update("fighter2", ex.f2);
                    }}
                    className="w-full text-left p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {ex.f1} vs {ex.f2}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{ex.why}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-3">How It Works</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Submit your dream matchup using the form",
                  "We review requests and pick the best ones",
                  "The fight gets simulated in EA Sports UFC 4",
                  "Full cinematic production with commentary & graphics",
                  "Published on the site for everyone to watch",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
