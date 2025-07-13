"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import userProfile from "../../data/userProfile.json"
import Link from "next/link"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const names = [userProfile.name, userProfile.nickName]

  useEffect(() => {
    if (isPaused) return

    const currentName = names[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentName.length) {
            setDisplayText(currentName.slice(0, displayText.length + 1))
          } else {
            setIsPaused(true)
            setTimeout(() => {
              setIsPaused(false)
              setIsDeleting(true)
            }, 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % names.length)
          }
        }
      },
      isDeleting ? 80 : 120,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, isPaused])

  const isDark =
    resolvedTheme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <section className="min-h-screen flex items-center justify-center py-6 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6 md:space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm{" "}
                <span className={`${isDark ? "text-blue-400" : "text-primary"} transition-colors duration-300`}>
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A passionate web developer specializing in creating beautiful and functional websites.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={"mailto:"+userProfile.email}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in touch
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-6 md:pt-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  alt="Profile"
                  className="object-cover w-full h-full"
                  height={400}
                  src="/images/profile/profile.JPG"
                  width={400}
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
