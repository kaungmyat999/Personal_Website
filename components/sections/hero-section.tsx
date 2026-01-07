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
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 })
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

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered])

  useEffect(() => {
    const interval = setInterval(() => {
      setBallPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15
      }))
    }, 8) // ~120fps for smoother movement

    return () => clearInterval(interval)
  }, [mousePosition, isHovered])

  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && (
    resolvedTheme === "dark" ||
    (theme === "system" && resolvedTheme === "dark") ||
    (theme === "system" && !resolvedTheme && 
      (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches))
  )

  return (
    <section 
      className="min-h-screen flex items-center justify-center py-6 md:py-24 lg:py-32 relative overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Moving Picture-like Objects */}
        <div className="absolute top-10 left-0 w-16 h-16 bg-purple-500/20 rounded-lg border-2 border-purple-500/30 animate-move-diagonal" style={{ animationDelay: '0s' }}>
          <div className="w-full h-full rounded-lg bg-purple-500/10 animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-0 w-12 h-12 bg-blue-500/25 rounded-full border-2 border-blue-500/40 animate-move-horizontal" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full rounded-full bg-blue-500/15 animate-ping" />
        </div>
        <div className="absolute bottom-20 left-0 w-20 h-20 bg-green-500/20 rotate-45 border-2 border-green-500/35 animate-move-diagonal-reverse" style={{ animationDelay: '4s' }}>
          <div className="w-full h-full bg-green-500/10 animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-0 w-8 h-8 bg-orange-500/30 rounded-sm border-2 border-orange-500/45 animate-move-vertical" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full rounded-sm bg-orange-500/20 animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 right-0 w-14 h-14 bg-indigo-500/25 rounded-full border-2 border-indigo-500/40 animate-move-horizontal-reverse" style={{ animationDelay: '3s' }}>
          <div className="w-full h-full rounded-full bg-indigo-500/15 animate-ping" />
        </div>
        
        {/* Floating Stars */}
        <div className="absolute top-20 right-1/4 text-yellow-500/30 animate-float-up" style={{ animationDelay: '0s' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/3 text-violet-500/35 animate-float-up" style={{ animationDelay: '2s' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.565c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
        </div>
        <div className="absolute top-1/2 right-1/3 text-cyan-500/30 animate-float-up" style={{ animationDelay: '4s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        {/* Hexagon Shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-rose-500/30 animate-spin-slow" style={{ animationDelay: '1s', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-amber-500/25 animate-spin-slow" style={{ animationDelay: '3s', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        
        {/* Diamond Shapes */}
        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-teal-500/40 animate-pulse-slow transform rotate-45" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/2 right-1/4 w-5 h-5 bg-lime-500/35 animate-pulse-slow transform rotate-45" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-fuchsia-500/40 animate-pulse-slow transform rotate-45" style={{ animationDelay: '4s' }} />
        
        </div>
      
      {/* Custom Cursor with Yellow Radiation */}
      {isHovered && (
        <div 
          className="pointer-events-none fixed z-50"
          style={{ 
            left: ballPosition.x - 20, 
            top: ballPosition.y - 20
          }}
        >
          <div className="relative">
            {/* Radiation glow effect - same yellow colors for both themes */}
            <div className="absolute inset-0 w-10 h-10 bg-yellow-400 rounded-full blur-md animate-pulse" />
            <div className="absolute top-[-2px] left-[-2px] w-14 h-14 bg-yellow-300 rounded-full blur-lg animate-ping" />
            <div className="absolute top-[-4px] left-[-4px] w-18 h-18 bg-yellow-200 rounded-full blur-xl animate-ping" style={{ animationDelay: '0.2s' }} />
            
            {/* Core cursor - yellow for both themes */}
            <div className="absolute top-[8px] left-[8px] w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50">
              <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      )}
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className={`flex flex-col justify-center space-y-6 md:space-y-4 transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in-left opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
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
              <a href="/Kaung_Myat_Kyaw_Resume.pdf" className="text-muted-foreground hover:text-foreground transition-colors" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
            <div className="flex items-center space-x-4 pt-6 md:pt-4">
              <Link href={userProfile.github} target="_blank" rel="noopener noreferrer">

                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-5 w-5" />
                  
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href={userProfile.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href={"mailto:"+userProfile.email}>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
            isLoaded ? 'animate-fade-in-right opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr  to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
