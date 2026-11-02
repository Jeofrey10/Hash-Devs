import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Primary font from endcap.design: Hanken Grotesk (weights 400, 500, 600)
const hankenGrotesk = localFont({
  src: [
    {
      path: "./fonts/hanken-grotesk-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/hanken-grotesk-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/hanken-grotesk-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-hanken",
  display: "swap",
});

// Editorial accent serif from endcap.design: Fraunces
const fraunces = localFont({
  src: [
    {
      path: "./fonts/fraunces-normal.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./fonts/fraunces-italic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

// Geist Mono for code/telemetry/numbers
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hash Devs — Digital Agency & Product Studio",
  description:
    "Websites, applications, SEO, Meta ads, and creative design, planned around your business and the people you want to reach.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${hankenGrotesk.variable} ${fraunces.variable} ${geistMono.variable} font-sans bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
