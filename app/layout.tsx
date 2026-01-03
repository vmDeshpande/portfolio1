import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import AnimatedCursorProvider from "@/components/AnimatedCursorProvider"
import ClientOnlyPets from "@/components/ClientOnlyPets"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vedant Deshpande - Full-Stack Developer",
  description: "Full-stack developer building modern web & AI-powered systems",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AnimatedCursorProvider />
        {children}
        <ClientOnlyPets />
        <Analytics />
      </body>
    </html>
  )
}
