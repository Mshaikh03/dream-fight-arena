import { Link } from "react-router-dom";
import { Play, Eye } from "lucide-react";
import type { Fight } from "@/data/fights";

interface Props {
  fight: Fight;
  size?: "sm" | "md" | "lg";
}

export default function FightCard({ fight, size = "md" }: Props) {
  const isLg = size === "lg";

  return (
    <Link
      to={`/fight/${fight.id}`}
      className="group block hover-lift rounded-lg overflow-hidden glass-card"
    >
      <div className={`relative overflow-hidden ${isLg ? "aspect-video" : "aspect-[16/10]"}`}>
        <img
          src={fight.thumbnail}
          alt={fight.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center red-glow">
            <Play className="h-6 w-6 text-primary-foreground ml-0.5" />
          </div>
        </div>
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-primary/90 text-primary-foreground text-xs font-semibold uppercase tracking-wider">
          {fight.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className={`font-display font-bold text-foreground leading-tight ${isLg ? "text-xl" : "text-base"}`}>
          {fight.title}
        </h3>
        {(isLg || size === "md") && (
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{fight.summary}</p>
        )}
        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <span>{fight.date}</span>
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" /> {fight.views}
          </span>
        </div>
      </div>
    </Link>
  );
}
