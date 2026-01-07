"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import certificationsData from "../../data/certifications.json"

export function CertificationsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  
  const certCount = certificationsData.certifications.length
  const gridClass = certCount === 1 ? "flex justify-center" : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise.
          </p>
        </div>
        <div 
          ref={contentRef}
          className={`${gridClass} max-w-5xl mx-auto transition-all duration-800 delay-100 ${
            contentVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          {certificationsData.certifications.map((cert, index) => (
            <Link key={index} href={cert.path ?? "#"} className="hover:shadow-lg transition-shadow max-w-md">
              <Card className="cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <p className="text-muted-foreground">{cert.provider}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
