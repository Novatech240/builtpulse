"use client";
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Page-level animation driven by data attributes inside `children`:
 *   data-hero          — intro sequence on load (in DOM order)
 *   data-reveal        — fade up when scrolled into view (batched, so siblings stagger)
 *   data-count         — number counts up from 0 when scrolled into view
 *   data-parallax="n"  — drifts n% vertically while its section scrolls past
 *
 * Only transforms and opacity are animated. Never put these attributes on an element
 * that already uses a Tailwind transform class — GSAP's inline transform would replace it.
 * With prefers-reduced-motion nothing animates and everything stays visible.
 */
export default function PageMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current!;
      const html = document.documentElement;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = (sel: string) => gsap.utils.toArray<HTMLElement>(sel, root);

        // Hero intro
        const hero = q("[data-hero]");
        if (hero.length) {
          gsap.fromTo(
            hero,
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, delay: 0.1 }
          );
        }

        // The page may already be scrolled when this runs (anchor link, reload, back button).
        // ScrollTrigger won't fire for triggers already passed until the next scroll, so handle
        // those directly: above the viewport → show, inside it → animate now, below → batch.
        const vh = window.innerHeight;
        const top = (el: HTMLElement) => el.getBoundingClientRect().top;
        const bottom = (el: HTMLElement) => el.getBoundingClientRect().bottom;
        const reveal = q("[data-reveal]");
        const enter = { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.09, overwrite: true };
        const above = reveal.filter((el) => bottom(el) <= 0);
        const inView = reveal.filter((el) => bottom(el) > 0 && top(el) < vh * 0.88);
        const below = reveal.filter((el) => !above.includes(el) && !inView.includes(el));

        gsap.set(above, { autoAlpha: 1, y: 0 });
        if (inView.length) gsap.fromTo(inView, { autoAlpha: 0, y: 36 }, { ...enter, delay: 0.1 });
        gsap.set(below, { autoAlpha: 0, y: 36 });
        ScrollTrigger.batch(below, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => gsap.to(batch, enter),
        });

        // Count-up numbers
        const counters = q("[data-count]");
        counters.forEach((el) => {
          if (bottom(el) <= 0) return; // already scrolled past: keep the real value
          const target = Number(el.dataset.count);
          const counter = { v: 0 };
          el.textContent = "0";
          gsap.to(counter, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = String(Math.round(counter.v));
            },
            scrollTrigger: top(el) < vh * 0.92 ? undefined : { trigger: el, start: "top 92%", once: true },
          });
        });

        // Parallax drift
        q("[data-parallax]").forEach((el) => {
          const amount = Number(el.dataset.parallax) || 10;
          gsap.fromTo(
            el,
            { yPercent: -amount },
            {
              yPercent: amount,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          );
        });

        // Webfonts can shift layout after first paint; recompute trigger positions once they load.
        document.fonts?.ready.then(() => ScrollTrigger.refresh());

        // If reverted mid-count (unmount, or reduced motion switched on), restore the real values.
        return () => counters.forEach((el) => (el.textContent = el.dataset.count ?? el.textContent));
      });

      // Initial states are now inline (or skipped for reduced motion) — drop the pre-paint guard.
      html.classList.remove("anim-pending");

      return () => mm.revert();
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
