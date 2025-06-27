import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import userProfile from '../../data/userProfile'
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted/50 py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p>Feel free to reach out to me through any of the following channels:</p>
            <div className="space-y-4">
              <Link className="flex items-center gap-3" href={"mailto:"+userProfile.email}>
                <Mail className="h-5 w-5 text-primary" />
                <span>{userProfile.email}</span>
              </Link>
              <Link className="flex items-center gap-3" href={userProfile.github}>
                <Github className="h-5 w-5 text-primary" />
                <span>{userProfile.github}</span>
              </Link>
              <Link className="flex items-center gap-3" href={"https://"+userProfile.linkedin}>
                <Linkedin className="h-5 w-5 text-primary" />
                <span>{userProfile.linkedin}</span>
              </Link>
            </div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <form className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full p-2 rounded-md border border-input bg-background"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full p-2 rounded-md border border-input bg-background"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows={4}
                  className="w-full p-2 rounded-md border border-input bg-background resize-none"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
