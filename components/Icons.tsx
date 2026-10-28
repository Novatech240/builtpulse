import type { SVGProps } from "react";
import Image from "next/image";

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Chevron(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" {...props}>
      <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Shield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 30" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 3 5 6v7.5c0 5.5 4.3 10.3 10 11.5 5.7-1.2 10-6 10-11.5V6l-10-3Z"
        fill="#E1B427"
        stroke="#EED37C"
        strokeWidth="1"
      />
      <path d="m11 15 3 3 5-6" stroke="#121F42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Phone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M4 4h4l2 4-2 1a10 10 0 0 0 3 3l1-2 4 2v4a2 2 0 0 1-2 2A14 14 0 0 1 2 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3 6 7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M10 18s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="10" cy="7" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Clock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 6v4l2.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 22 22" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="3" y="7" width="3" height="12" rx="0.5" />
      <circle cx="4.5" cy="4.5" r="1.6" />
      <path d="M9 7h3v1.7a3.3 3.3 0 0 1 3-1.7c2.5 0 3.5 1.7 3.5 4V19h-3v-6.3c0-1.3-.6-2.1-1.8-2.1-1.1 0-1.7.8-1.7 2.1V19H9V7Z" />
    </svg>
  );
}

export function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 22 22" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 11h2.4l.4-3H13V6c0-.9.3-1.5 1.6-1.5h1.4V2h-2.3c-2.6 0-4 1.4-4 3.8V8H7v3h2.7v9H13v-9Z" />
    </svg>
  );
}

export function YouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 22 22" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20 7.2c-.2-1.1-1-2-2.2-2.2C15.8 4.6 11 4.6 11 4.6s-4.8 0-6.8.4c-1.1.2-2 1-2.2 2.2C1.6 9.2 1.6 11 1.6 11s0 1.8.4 3.8c.2 1.1 1 2 2.2 2.2 2 .4 6.8.4 6.8.4s4.8 0 6.8-.4c1.1-.2 2-1 2.2-2.2.4-2 .4-3.8.4-3.8s0-1.8-.4-3.8ZM9 14V8l5 3-5 3Z" />
    </svg>
  );
}

export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 22 22" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className = "", size = "sm" }: { className?: string; size?: "sm" | "lg" }) {
  const dims = size === "lg" ? { w: 252, h: 75 } : { w: 159, h: 48 };
  return (
    <Image
      src="/brand/builtpulse-logo-white.png"
      alt="BuiltPulse — Real estate consultancy"
      width={dims.w}
      height={dims.h}
      priority
      className={`object-contain ${className}`}
      style={{ width: dims.w, height: dims.h }}
    />
  );
}

export function LogoDark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/builtpulse-logo-white.png"
      alt="BuiltPulse — Real estate consultancy"
      width={159}
      height={48}
      className={`object-contain ${className}`}
    />
  );
}
