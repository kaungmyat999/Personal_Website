"use client"

import SkillsTabs from "@/components/skills-tabs"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SkillsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I work with</p>
        </div>
        <div 
          ref={contentRef}
          className={`transition-all duration-800 delay-100 ${
            contentVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <SkillsTabs />
        </div>
      </div>
    </section>
  )
}
