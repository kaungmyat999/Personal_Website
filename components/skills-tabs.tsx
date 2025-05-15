"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  description: string
  icon: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Web Development",
    skills: [
      {
        name: "HTML & CSS",
        description: "Creating structured, accessible web content",
        icon: "HTML",
      },
      {
        name: "JavaScript",
        description: "Building interactive web experiences",
        icon: "JS",
      },
      {
        name: "React",
        description: "Creating reusable UI components",
        icon: "⚛️",
      },
      {
        name: "Next.js",
        description: "Building fast, SEO-friendly web applications",
        icon: "N",
      },
      {
        name: "Tailwind CSS",
        description: "Crafting beautiful, responsive designs",
        icon: "TW",
      },
      {
        name: "TypeScript",
        description: "Writing type-safe JavaScript code",
        icon: "TS",
      },
    ],
  },
  {
    name: "Machine Learning",
    skills: [
      {
        name: "Python",
        description: "Building ML models and data analysis",
        icon: "PY",
      },
      {
        name: "TensorFlow",
        description: "Creating and training neural networks",
        icon: "TF",
      },
      {
        name: "scikit-learn",
        description: "Implementing ML algorithms",
        icon: "SK",
      },
      {
        name: "Pandas",
        description: "Data manipulation and analysis",
        icon: "PD",
      },
      {
        name: "NumPy",
        description: "Numerical computing and array operations",
        icon: "NP",
      },
      {
        name: "Jupyter",
        description: "Interactive computing and visualization",
        icon: "JP",
      },
    ],
  },
]

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="md:w-1/3">
        <div className="flex flex-col gap-2">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(index)}
              className={cn(
                "relative px-4 py-3 text-left rounded-lg transition-colors group",
                "hover:text-foreground text-lg font-semibold",
                activeTab === index ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <div
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4/5 rounded-full transition-all",
                  activeTab === index ? "bg-primary" : "bg-transparent group-hover:bg-primary/50",
                )}
              />
              <span className="pl-4">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-background p-4 rounded-md shadow-sm border flex flex-col items-center text-center group hover:border-primary transition-colors"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold">{skill.icon}</span>
              </div>
              <h3 className="font-medium">{skill.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

