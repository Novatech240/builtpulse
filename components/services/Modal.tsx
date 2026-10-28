"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "../Icons";
import { Close } from "./icons";

export function Modal({
  open,
  onClose,
  eyebrow,
  title,
  description,
  children,
  footerNote,
  widthClass = "max-w-[944px]",
  primaryLabel = "Book a Call",
  secondaryLabel = "Speak to a Consultant",
  onPrimary,
}: {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footerNote?: ReactNode;
  widthClass?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  /** Runs before the modal closes and the page jumps to the form. */
  onPrimary?: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Entrance: backdrop fades, panel rises. Re-runs each time the modal opens; skipped for reduced motion.
  useGSAP(
    () => {
      if (!open) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo("[data-modal-backdrop]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, ease: "power1.out" });
        gsap.fromTo(
          dialogRef.current,
          { autoAlpha: 0, y: 40, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
        );
      });
      return () => mm.revert();
    },
    { dependencies: [open], scope: rootRef, revertOnUpdate: true }
  );

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div
        data-modal-backdrop
        className="absolute inset-0 bg-[rgba(12,19,51,0.72)] backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className={`relative max-h-[92svh] w-full overflow-y-auto rounded-t-[24px] bg-white px-5 pb-6 pt-7 shadow-[0_40px_100px_-20px_rgba(7,13,34,0.55)] outline-none sm:max-h-[90vh] sm:rounded-[28px] sm:px-10 sm:pb-10 sm:pt-10 ${widthClass}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-neutral-50 text-blue-950 transition hover:bg-neutral-100 sm:right-10 sm:top-10"
        >
          <Close className="h-5 w-5" />
        </button>

        <p className="flex items-center gap-3 pr-14 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-800 sm:text-[12px]">
          <span className="h-[2px] w-5 shrink-0 bg-gold-400" />
          {eyebrow}
        </p>
        <h2 id="modal-title" className="mt-3 pr-14 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-blue-950 sm:text-[32px]">
          {title}
        </h2>
        <p className="mt-3 max-w-[820px] text-[15px] leading-[1.55] text-neutral-600 sm:mt-4 sm:text-[16px]">{description}</p>

        <div className="mt-6 sm:mt-7">{children}</div>

        <div
          className={`mt-6 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-center ${
            footerNote ? "border-t border-neutral-100 pt-6 sm:pt-7" : "sm:justify-end"
          }`}
        >
          {footerNote && <p className="text-[14px] leading-[1.55] text-neutral-600 sm:max-w-[430px] sm:flex-1">{footerNote}</p>}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#audit"
              onClick={onClose}
              className="inline-flex h-[54px] items-center justify-center whitespace-nowrap rounded-full border-[1.5px] border-blue-950 px-7 text-[16px] font-semibold text-blue-950 transition hover:bg-blue-950/5"
            >
              {secondaryLabel}
            </a>
            <a
              href="#audit"
              onClick={() => {
                onPrimary?.();
                onClose();
              }}
              className="inline-flex h-[54px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-gold-400 px-7 text-[16px] font-semibold text-blue-950 transition hover:brightness-[0.97]"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceItem({
  n,
  title,
  desc,
  icon,
}: {
  n: string;
  title: string;
  desc?: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-[14px] border border-neutral-100 p-[18px]">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-gold-50 text-blue-950">{icon}</span>
      <div className="min-w-0">
        <p className="font-mono text-[11px] font-medium tracking-[0.14em] text-blue-800">{n}</p>
        <p className="mt-1.5 text-[16px] font-semibold leading-[1.35] text-blue-950 sm:text-[17px]">{title}</p>
        {desc && <p className="mt-1 text-[14px] leading-[1.5] text-neutral-600 sm:text-[15px]">{desc}</p>}
      </div>
    </div>
  );
}
