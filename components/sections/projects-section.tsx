import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Check out some of my recent work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="border rounded-lg overflow-hidden group">
              <div className="relative">
                <Image
                  src={`/placeholder.svg?height=300&width=500`}
                  alt={`Project ${project}`}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl">Project {project}</h3>
                <p className="text-muted-foreground mt-2">
                  A brief description of this project and the technologies used to build it.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Next.js</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Tailwind</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
