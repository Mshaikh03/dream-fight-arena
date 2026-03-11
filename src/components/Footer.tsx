import { Link } from "react-router-dom";
import { Flame, Youtube, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Flame className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold tracking-wider uppercase">
                UFC Fight Sim<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Dream fights. Simulated. The premier destination for cinematic UFC simulations, 
              dream matchups, and fan-requested battles powered by EA Sports UFC 4.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Browse Archive", path: "/browse" },
                { label: "Request a Fight", path: "/request" },
                { label: "About", path: "/about" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              {[Youtube, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mt-8 mb-6" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} UFC Fight Simulator Hub. All simulations created using EA Sports UFC 4. Not affiliated with UFC or EA Sports.
        </p>
      </div>
    </footer>
  );
}
