import { ImageIcon } from "./icons";

/** Gradient card with decorative arcs, standing in for licensed photography. */
export default function ImagePlaceholder({ caption, className = "" }: { caption: string; className?: string }) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#2c4390_0%,#1d2d68_45%,#0e1738_100%)] sm:rounded-[26px] ${className}`}
    >
      <span className="pointer-events-none absolute left-[32%] top-1/2 aspect-square h-[170%] -translate-y-1/2 rounded-full border-[1.5px] border-white/85" />
      <span className="pointer-events-none absolute left-[54%] top-[56%] aspect-square h-[108%] -translate-y-1/2 rounded-full border-[1.5px] border-gold-500/90" />
      <div className="relative flex h-full flex-col items-center justify-center px-8 py-16 text-center text-white">
        <ImageIcon className="h-7 w-7 text-white/90" />
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-[11px]">Image placeholder</p>
        <p className="mt-2.5 max-w-[320px] text-[14px] font-medium leading-[1.45] sm:text-[15px]">{caption}</p>
      </div>
    </div>
  );
}

export function Eyebrow({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "gold" }) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] ${
        tone === "gold" ? "text-gold-500" : "text-blue-800"
      }`}
    >
      <span className="h-[2px] w-5 shrink-0 bg-gold-500" />
      {children}
    </p>
  );
}
