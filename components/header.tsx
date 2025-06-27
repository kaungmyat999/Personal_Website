import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import userProfile from "@/data/userProfile.json"

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          {userProfile.nickName}
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
            Education
          </Link>
          <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
