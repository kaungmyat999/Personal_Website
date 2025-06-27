import RadialLinesAnimation from "@/components/radial-lines-animation"
import certificates from '../../data/userProfile.json'
export function AboutSection() {
  return (
    <section id="about" className="bg-muted/50 py-8 md:py-12">
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
              Hi, I’m {certificates.name}, a Machine Learning Engineer with a strong foundation in building scalable, data-driven systems. I’m pursuing an M.S. in Computer Science at the University of Colorado Boulder (GPA: 4.0), where I focus on machine learning, deep learning, and big data systems.
            </p>
            <p>
              I’ve applied my skills across impactful projects—from deploying a lung cancer detection model with 99% accuracy to building the Flow State App, a productivity tool for students in Myanmar IDP camps. I also volunteer as a software engineer, improving platforms and tools that serve real-world communities.
            </p>
            <p>
              My toolkit includes Python, PyTorch, TensorFlow, Hugging Face, AWS, and MLOps practices for production-ready ML solutions. I’m passionate about using AI to solve meaningful problems and enjoy working on teams that value innovation, performance, and social impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
