import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToSection from "@/components/scroll-to-section"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kaung Myat| Machine Learning Engineer | Software Engineer",
  description: "Personal website and portfolio of Kaung Myat, Machine Learning Engineer, Software Engineer",
  generator: 'v0.dev',
  icons: {
    icon: "/atom.png",
    shortcut: "/atom.png",
    apple: "/atom.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollToSection />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
