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
    <html lang="en">
      <head>
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
