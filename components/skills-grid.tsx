"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Code2, Terminal, Brain, Cloud } from "lucide-react"

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning",
    icon: <Brain className="h-5 w-5" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Keras", "NLTK"],
  },
  {
    name: "Cloud & MLOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: ["AWS SageMaker", "Docker", "Kubernetes", "MLflow", "DVC", "Kubeflow", "Jenkins", "GitLab CI"],
  },
  {
    name: "Backend Development",
    icon: <Terminal className="h-5 w-5" />,
    skills: ["Node.js", "Express", "Django", "FastAPI", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
  },
  {
    name: "Frontend Development",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Material UI", "Framer Motion", "Vue.js"],
  },
]

export function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {skillCategories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(index)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
              "hover:text-foreground",
              activeCategory === index ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted",
            )}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skillCategories[activeCategory].skills.map((skill) => (
          <div
            key={skill}
            className="bg-muted/30 border rounded-lg p-4 text-center hover:border-primary hover:bg-accent/30 transition-all duration-300"
          >
            <span className="font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

