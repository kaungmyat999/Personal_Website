import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin } from "lucide-react"
import userProfile from "../../data/userProfile.json"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
              <Input placeholder="Email" type="email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message" className="min-h-[120px]" />
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>
          <div className="space-y-3 lg:space-y-4">
            <Card>
              <CardContent className="p-3 lg:p-4">
                <Link
                  href={`mailto:${userProfile.email}`}
                  className="flex items-center gap-4 hover:bg-accent/50 p-3 rounded-lg transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm truncate">{userProfile.email}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 lg:p-4">
                <Link
                  href={userProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:bg-accent/50 p-3 rounded-lg transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">GitHub</p>
                    <p className="text-muted-foreground text-sm truncate">{userProfile.github}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 lg:p-4">
                <Link
                  href={userProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:bg-accent/50 p-3 rounded-lg transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-muted-foreground text-sm truncate">{userProfile.linkedin}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
