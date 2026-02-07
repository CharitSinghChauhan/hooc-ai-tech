import { Globe } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full absolute top-0 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-0.5">
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-brand-green rounded-sm"></div>
            <div className="w-2 h-2 bg-brand-green/50 rounded-sm"></div>
          </div>
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-brand-green/30 rounded-sm"></div>
            <div className="w-2 h-2 bg-brand-green rounded-sm"></div>
          </div>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">
          hooc.ai
        </span>
      </div>

      <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 gap-8">
        <Link
          href="#benefits"
          className="text-white/80 hover:text-white transition-colors text-sm"
        >
          About Us
        </Link>
        <Link
          href="#references"
          className="text-white/80 hover:text-white transition-colors text-sm"
        >
          What we do
        </Link>
        <Link
          href="#about"
          className="text-white/80 hover:text-white transition-colors text-sm"
        >
          Blogs
        </Link>
        <Link
          href="#about"
          className="text-white/80 hover:text-white transition-colors text-sm"
        >
          Contact us
        </Link>
        <Link
          href="#about"
          className="text-white/80 hover:text-white transition-colors text-sm"
        >
          Projects
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="#contact"
          className="bg-brand-green text-brand-green-foreground px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
}
