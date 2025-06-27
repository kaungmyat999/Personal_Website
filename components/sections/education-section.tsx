export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic background and qualifications</p>
        </div>
        <div className="grid gap-8 max-w-3xl mx-auto">
          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div>
              <h3 className="text-xl font-bold">Master of Computer Science</h3>
              <p className="text-primary">University Name</p>
              <p className="text-muted-foreground mt-2">Specialized in Artificial Intelligence and Machine Learning</p>
            </div>
            <div className="mt-4 space-y-2">
              <p>Key achievements:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Graduated with Distinction</li>
                <li>Published research paper on Deep Learning</li>
                <li>Led student research group</li>
              </ul>
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div>
              <h3 className="text-xl font-bold">Bachelor of Engineering</h3>
              <p className="text-primary">University Name</p>
              <p className="text-muted-foreground mt-2">Computer Science and Engineering</p>
            </div>
            <div className="mt-4 space-y-2">
              <p>Key achievements:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>First Class Honours</li>
                <li>Best Final Year Project Award</li>
                <li>Technical Club President</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
