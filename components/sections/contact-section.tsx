"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import userProfile from "../../data/userProfile.json"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "setup-required">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          toEmail: userProfile.email
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        })
      } else {
        if (data.requiresSetup) {
          setSubmitStatus("setup-required")
        } else {
          setSubmitStatus("error")
        }
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div 
            ref={formRef}
            className={`transition-all duration-800 delay-100 ${
              formVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input 
                      name="firstName"
                      placeholder="First name" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input 
                      name="lastName"
                      placeholder="Last name" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Input 
                    name="email"
                    placeholder="Email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <Textarea 
                    name="message"
                    placeholder="Your message" 
                    className="min-h-[120px]" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Send className="mr-2 h-4 w-4 animate-pulse" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
                {submitStatus === "success" && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">Failed to send message. Please try again later.</p>
                  </div>
                )}
                {submitStatus === "setup-required" && (
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">Email service not configured. Please contact me directly at {userProfile.email}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          <div 
            ref={contactRef}
            className={`space-y-3 lg:space-y-4 transition-all duration-800 delay-200 ${
              contactVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
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
