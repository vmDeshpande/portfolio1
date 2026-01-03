import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import AnimatedCursorProvider from "@/components/AnimatedCursorProvider";
import dynamic from "next/dynamic"
import ClientOnlyPets from "@/components/ClientOnlyPets"
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// const WanderingCat = dynamic(
//   () => import("@/components/WanderingCat.client"),
//   { ssr: false }
// )

export const metadata: Metadata = {
  title: "Vedant Deshpande - Full-Stack Developer",
  description: "Created with v0",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AnimatedCursorProvider />
        {children}
        <ClientOnlyPets />
        <Analytics />
      </body>
    </html>
  );
}
