"use client"

import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import workExperienceData from "../../data/working_experience.json"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

/**
 * Vertical-timeline style work-experience section.
 * • Reads data from /data/working_experience.json
 * • Shows a glowing gradient bar on the left
 * • NO timeline dots (per latest request)
 */
export function WorkExperienceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  // Fallback in case the JSON shape changes
  const experiences =
    (workExperienceData as { workExperience?: any[]; experiences?: any[] }).workExperience ??
    (workExperienceData as { workExperience?: any[]; experiences?: any[] }).experiences ??
    []

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container space-y-12">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and key accomplishments.</p>
        </div>

        <div 
          ref={timelineRef}
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            timelineVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Glowing gradient vertical bar */}
          <div className="pointer-events-none absolute left-4 md:left-8 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary via-primary/60 to-primary/20 shadow-lg shadow-primary/50" />

          <div className="space-y-10">
            {experiences.map((job, index) => (
              <div 
                key={index} 
                className={`relative pl-12 md:pl-20 transition-all duration-700 ${
                  timelineVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{job.position}</CardTitle>
                        <CardDescription className="font-semibold text-primary">{job.company}</CardDescription>
                      </div>

                      <div className="flex flex-col md:items-end gap-1">
                        <Badge variant="secondary" className="w-fit">
                          <Calendar className="mr-1 h-3 w-3" />
                          {job.duration}
                        </Badge>
                        {job.location && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {job.description && <p className="text-muted-foreground">{job.description}</p>}

                    {Array.isArray(job.technologies) && job.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech: string, techIndex: number) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ALSO export as default so both import styles work
export default WorkExperienceSection
