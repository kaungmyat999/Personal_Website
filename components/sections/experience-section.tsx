"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { BriefcaseIcon } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    title: "Senior Web Developer",
    company: "Tech Innovations Inc.",
    period: "Jan 2021 - Present",
    description:
      "Leading the frontend development team in building modern, responsive web applications using React, Next.js, and TypeScript.",
    responsibilities: [
      "Architected and implemented scalable frontend solutions",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with UX/UI designers to create intuitive user experiences",
      "Optimized application performance and accessibility",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained client websites and web applications using JavaScript, React, and CSS frameworks.",
    responsibilities: [
      "Built responsive interfaces for various client projects",
      "Implemented state management solutions using Redux",
      "Integrated RESTful APIs and GraphQL endpoints",
      "Participated in agile development processes",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Creative Web Agency",
    period: "Jun 2016 - Feb 2018",
    description:
      "Assisted in the development of websites for small to medium-sized businesses using HTML, CSS, and JavaScript.",
    responsibilities: [
      "Created and maintained client websites",
      "Implemented responsive designs from Figma mockups",
      "Optimized website performance and SEO",
      "Collaborated with the design team to ensure pixel-perfect implementations",
    ],
  },
]

export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and work history</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-px" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col md:flex-row md:items-center gap-4",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
                onMouseEnter={() => setActiveExperience(index)}
                onMouseLeave={() => setActiveExperience(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -ml-[9px] w-[18px] h-[18px] rounded-full bg-primary border-4 border-background z-10" />

                {/* Date for mobile (always visible) and desktop (alternating sides) */}
                <div className="md:hidden pl-12 text-sm font-medium text-primary">{experience.period}</div>

                {/* Content card */}
                <div
                  className={cn(
                    "w-full md:w-[calc(50%-20px)] pl-12 md:pl-0 transition-all duration-300",
                    activeExperience === index ? "md:scale-105" : "",
                  )}
                >
                  {/* Date for desktop (alternating sides) */}
                  <div className="hidden md:block text-sm font-medium text-primary mb-2">{experience.period}</div>

                  <div className="bg-background rounded-lg p-5 border shadow-sm hover:border-primary transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                        <BriefcaseIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{experience.title}</h3>
                        <p className="text-primary">{experience.company}</p>
                      </div>
                    </div>

                    <p className="mt-3 text-muted-foreground">{experience.description}</p>

                    <div className="mt-4">
                      <p className="font-medium">Key responsibilities:</p>
                      <ul className="mt-2 space-y-1">
                        {experience.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
