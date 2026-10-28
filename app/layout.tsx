import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuiltPulse — Business setup, PRO & compliance in Dubai",
  description:
    "From business setup to ongoing compliance, BuiltPulse brings the essential services, expertise and support your business needs to move forward in Dubai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hide animated elements until GSAP sets their start state, so nothing flashes before the
            intro. Skipped for reduced motion; the timeout un-hides everything if JS never runs. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('anim-pending');setTimeout(function(){d.classList.remove('anim-pending')},4000)}",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-blue-950">{children}</body>
    </html>
  );
}
