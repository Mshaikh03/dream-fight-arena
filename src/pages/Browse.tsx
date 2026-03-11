import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { fights, CATEGORIES } from "@/data/fights";
import FightCard from "@/components/FightCard";
import CategoryPill from "@/components/CategoryPill";
import SectionHeading from "@/components/SectionHeading";
import { useSearchParams } from "react-router-dom";

type SortKey = "date" | "views" | "title";

export default function Browse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCat);
  const [sort, setSort] = useState<SortKey>("date");

  const filtered = useMemo(() => {
    let result = fights;
    if (category !== "All") {
      result = result.filter(
        (f) => f.category === category || f.tags.some((t) => t.toLowerCase().includes(category.toLowerCase()))
      );
    }
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (f) =>
          f.title.toLowerCase().includes(q) ||
          f.fighter1.name.toLowerCase().includes(q) ||
          f.fighter2.name.toLowerCase().includes(q) ||
          f.summary.toLowerCase().includes(q)
      );
    }
    if (sort === "views") result = [...result].sort((a, b) => parseInt(b.views) - parseInt(a.views));
    if (sort === "title") result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    return result;
  }, [query, category, sort]);

  const handleCategory = (cat: string) => {
    setCategory(cat);
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Simulation Archive"
          subtitle="Browse every simulated fight. Search, filter, and find your next watch."
        />

        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search fighters, matchups..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-accent border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-accent border border-border rounded-lg px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="date">Newest First</option>
              <option value="views">Most Viewed</option>
              <option value="title">A – Z</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-8">
          {CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              active={category === cat}
              onClick={() => handleCategory(cat)}
            />
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No simulations found.</p>
            <p className="text-sm mt-1">Try adjusting your filters or search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((fight, i) => (
              <motion.div
                key={fight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <FightCard fight={fight} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
