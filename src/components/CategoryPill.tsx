interface Props {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function CategoryPill({ label, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
        active
          ? "bg-primary text-primary-foreground shadow-lg"
          : "bg-accent text-muted-foreground hover:bg-accent/80 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
