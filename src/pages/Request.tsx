import { useState } from "react";

export default function Request() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    fightRequest: "",
    notes: "",
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary frontend-only success state
    // Next step: connect this form to Formspree or EmailJS
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      fightRequest: "",
      notes: "",
    });
  };

  const inputClass =
    "w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-600";

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Request a Fight
          </h1>
          <p className="mt-4 text-neutral-400 text-base md:text-lg">
            Submit a dream matchup and it may be featured in a future simulation.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-8 text-center">
            <h2 className="text-2xl font-semibold">Request Submitted</h2>
            <p className="mt-3 text-neutral-400">
              Your fight request has been received.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-medium hover:bg-red-700 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="Your email"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Requested Fight
              </label>
              <input
                type="text"
                required
                value={form.fightRequest}
                onChange={(e) => update("fightRequest", e.target.value)}
                placeholder="Example: Jon Jones vs Francis Ngannou"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Additional Notes
              </label>
              <textarea
                rows={4}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Optional notes about the matchup"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 px-6 py-3 font-medium hover:bg-red-700 transition-colors"
            >
              Submit Request
            </button>
          </form>
        )}
      </section>
    </main>
  );
}