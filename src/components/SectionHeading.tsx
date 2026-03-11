interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = "" }: Props) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>}
      <div className="w-16 h-1 bg-primary rounded-full mt-3" />
    </div>
  );
}
