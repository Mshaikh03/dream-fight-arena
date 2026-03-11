import type { Fighter } from "@/data/fights";

interface Props {
  fighter: Fighter;
  corner: "red" | "blue";
}

export default function FighterStatCard({ fighter, corner }: Props) {
  const borderColor = corner === "red" ? "border-primary" : "border-blue-500";
  const accentColor = corner === "red" ? "text-primary" : "text-blue-400";

  const stats = [
    { label: "Record", value: fighter.record },
    { label: "Height", value: fighter.height },
    { label: "Weight", value: fighter.weight },
    { label: "Reach", value: fighter.reach },
    { label: "Style", value: fighter.style },
    { label: "Country", value: fighter.country },
  ];

  return (
    <div className={`glass-card p-6 border-t-2 ${borderColor}`}>
      <div className="text-center mb-4">
        <p className={`text-xs uppercase tracking-widest ${accentColor} mb-1`}>
          {corner === "red" ? "Red Corner" : "Blue Corner"}
        </p>
        <h3 className="font-display text-xl font-bold text-foreground">{fighter.name}</h3>
        {fighter.nickname && (
          <p className="text-muted-foreground text-sm italic">"{fighter.nickname}"</p>
        )}
      </div>
      <div className="space-y-3">
        {stats.map((s) => (
          <div key={s.label} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{s.label}</span>
            <span className="text-foreground font-medium">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
