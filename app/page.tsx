import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { SkillsGridSection } from "@/components/sections/skills-grid-section"
import { EducationSection } from "@/components/sections/education-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        {/* <SkillsSection /> */}
        <SkillsGridSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

