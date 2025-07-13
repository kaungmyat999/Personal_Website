import RadialLinesAnimation from "@/components/radial-lines-animation"
import userProfile from "../../data/userProfile.json"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Learn more about my background and experience.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="aspect-square w-full max-w-[500px] mx-auto hidden md:block">
            <RadialLinesAnimation />
          </div>
          <div className="space-y-6">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed whitespace-pre-line">{userProfile.about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
