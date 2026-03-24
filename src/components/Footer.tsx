import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-red-600/30 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        
        <p className="uppercase tracking-wide">
          ITM 445 Project
        </p>

        <p className="uppercase tracking-wide">
          Created by <span className="text-white font-medium">Ali Shaikh, simulations filmed on EA Sports UFC 4 </span>
        </p>

      </div>
    </footer>
  );
}