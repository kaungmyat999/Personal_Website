export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-muted/50 py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Professional certifications and achievements</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:bg-accent/50 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">AWS Certified Solutions Architect</h3>
                <p className="text-primary text-sm mt-1">Amazon Web Services</p>
              </div>
              <span className="text-muted-foreground text-sm">2023</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Professional level certification for designing distributed applications and systems on AWS
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:bg-accent/50 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Google Cloud Professional</h3>
                <p className="text-primary text-sm mt-1">Google Cloud</p>
              </div>
              <span className="text-muted-foreground text-sm">2023</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Expert-level certification in cloud architecture and development
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:bg-accent/50 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Meta Frontend Developer</h3>
                <p className="text-primary text-sm mt-1">Meta</p>
              </div>
              <span className="text-muted-foreground text-sm">2022</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Advanced certification in modern frontend development and React
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:bg-accent/50 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Microsoft Azure Expert</h3>
                <p className="text-primary text-sm mt-1">Microsoft</p>
              </div>
              <span className="text-muted-foreground text-sm">2022</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Expert-level certification in Azure cloud services and solutions
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:bg-accent/50 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">TensorFlow Developer</h3>
                <p className="text-primary text-sm mt-1">Google</p>
              </div>
              <span className="text-muted-foreground text-sm">2022</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Professional certification in building ML models with TensorFlow
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:bg-accent/50 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">Kubernetes Administrator</h3>
                <p className="text-primary text-sm mt-1">Linux Foundation</p>
              </div>
              <span className="text-muted-foreground text-sm">2021</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Certified in managing and deploying containerized applications
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
