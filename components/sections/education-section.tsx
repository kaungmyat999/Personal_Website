"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import educationData from "../../data/education.json"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function EducationSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and educational background.</p>
        </div>
        <div 
          ref={educationRef}
          className={`grid gap-6 max-w-4xl mx-auto transition-all duration-1000 ${
            educationVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {educationData.education.map((edu, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-shadow transition-all duration-700 ${
                educationVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg font-semibold text-muted-foreground">{edu.school}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {edu.duration}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">GPA:</span>
                  <Badge
                    variant="outline"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 font-semibold"
                  >
                    {edu.gpa}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
