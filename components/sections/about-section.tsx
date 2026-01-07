"use client"

import RadialLinesAnimation from "@/components/radial-lines-animation"
import userProfile from "../../data/userProfile.json"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: animationRef, isVisible: animationVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container space-y-12">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-5000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Learn more about my background and experience.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div 
            ref={animationRef}
            className={`aspect-square w-full max-w-[400px] mx-auto hidden md:block transition-all duration-4000 delay-300 ${
              animationVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <RadialLinesAnimation />
          </div>
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-5000 delay-200 ${
              contentVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-[2.2] whitespace-pre-line">{userProfile.about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
