"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import userProfile from "@/data/userProfile.json"

export function HeroSection() {
  const [displayedName, setDisplayedName] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const names = [userProfile.nickName, userProfile.name]
  const currentNameIndex = loopNum % names.length
  const fullName = names[currentNameIndex]

  const typingRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleTyping = () => {
      const currentName = names[currentNameIndex]

      if (!isDeleting) {
        // Typing forward
        setDisplayedName(currentName.substring(0, displayedName.length + 1))

        // If we've typed the full name, start deleting after a pause
        if (displayedName.length === currentName.length) {
          const pauseTime = 1000 // Pause at full name
          setTypingSpeed(pauseTime)
          setIsDeleting(true)
        } else {
          setTypingSpeed(150) // Normal typing speed
        }
      } else {
        // Deleting
        setDisplayedName(currentName.substring(0, displayedName.length - 1))

        // If we've deleted everything, move to next name
        if (displayedName.length === 0) {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
          setTypingSpeed(500) // Pause before typing next name
        } else {
          setTypingSpeed(75) // Faster when deleting
        }
      }
    }

    typingRef.current = setTimeout(handleTyping, typingSpeed)

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current)
    }
  }, [displayedName, isDeleting, loopNum, currentNameIndex])

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="container flex flex-col md:flex-row justify-between items-center md:items-center">
        <div className="space-y-6 md:w-1/2 md:py-20 md:pr-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm{" "}
            <span className="text-primary min-h-[1.5em] inline-block">
              {displayedName}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A passionate web developer specializing in creating beautiful and functional websites.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#projects">View my work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact me</Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href={userProfile.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href={userProfile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href={`mailto:${userProfile.email}`}>
              <Mail className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-full border-4 border-primary/20"
          />
        </div>
      </div>
    </section>
  )
}
