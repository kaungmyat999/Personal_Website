import { SkillsGrid } from "@/components/skills-grid"

export function SkillsGridSection() {
  return (
    <section id= 'skills' className="bg-muted/50 py-8 md:py-12">
      <div className="container">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Skills</h2>
          
        </div>
        <SkillsGrid />
      </div>
    </section>
  )
}
