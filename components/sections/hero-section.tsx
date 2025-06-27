import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import userProfile from "../../data/userProfile.json"
export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="container flex flex-col md:flex-row justify-between items-center md:items-center">
        <div className="space-y-6 md:w-1/2 md:py-20 md:pr-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-primary">{userProfile.nickName}</span>
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
            <Link href={"https://" + userProfile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href={"mailto:" + userProfile.email}>
              <Mail className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="/images/profile/profile.JPG"
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
