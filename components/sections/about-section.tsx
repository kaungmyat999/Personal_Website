import RadialLinesAnimation from "@/components/radial-lines-animation"

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/50 py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Learn more about my background and experience.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="aspect-square w-full max-w-[500px] mx-auto">
            <RadialLinesAnimation />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p>
              I'm a web developer with a passion for creating beautiful, functional, and user-friendly websites. I
              specialize in front-end development using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
            <p>
              With several years of experience in the industry, I've worked on a variety of projects ranging from small
              business websites to large e-commerce platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
