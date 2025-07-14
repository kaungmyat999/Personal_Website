import { Button } from "@/components/ui/button"
import projectsData from "../../data/projects.json"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectsData.projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden group">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center">
                  <div className="text-center p-6">
                    <h4 className="text-lg font-semibold">{project.name}</h4>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl">{project.name}</h3>
                <p className="text-muted-foreground mt-2">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.stack &&
                    project.stack.map((stackName, stackIndex) => (
                      <div
                        key={stackIndex}
                        className="relative overflow-hidden bg-primary/10 text-primary text-xs px-2 py-1 rounded-full group max-w-[120px]"
                      >
                        <span className="block whitespace-nowrap group-hover:animate-marquee transition-transform duration-1000 ease-in-out">
                          {stackName}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
