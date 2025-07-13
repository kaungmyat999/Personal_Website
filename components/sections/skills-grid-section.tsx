import { SkillsGrid } from "@/components/skills-grid"

export function SkillsGridSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </div>
        <SkillsGrid />
      </div>
    </section>
  )
}
