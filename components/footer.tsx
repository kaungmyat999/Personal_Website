import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import userProfile from "@/data/userProfile.json"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {userProfile.nickName}. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={userProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link
            href={userProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href={`mailto:${userProfile.email}`} className="hover:text-foreground transition-colors">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
