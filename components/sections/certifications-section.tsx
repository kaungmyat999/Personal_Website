import certificationsData from "../../data/certifications.json"

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-muted/50 py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Professional certifications and achievements</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {certificationsData.certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:bg-accent/50 transition-all duration-300 w-full md:w-80 lg:w-96"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-primary text-sm mt-1">{cert.provider}</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                Learned end-to-end ML production workflows including deployment strategies, CI/CD pipelines, monitoring, data drift detection, and scalable infrastructure for reliable ML systems.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
