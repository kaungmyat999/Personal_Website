"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Circle {
  rays: number[]
  phase: number
  diameter: number
}

export default function RadialLinesAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match its display size
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize circles with random ray lengths
    const numCircles = 8
    const circles: Circle[] = Array.from({ length: numCircles }, (_, i) => ({
      rays: Array.from({ length: 80 }, () => Math.random() * 0.3 + 0.7), // Random lengths between 0.7 and 1
      phase: (i * Math.PI) / numCircles,
      diameter: 1 - i * 0.1,
    }))

    let animationFrameId: number

    const drawRadialLines = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const centerX = width / 2
      const centerY = height / 2
      const maxRadius = Math.min(width, height) * 0.45

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Update and draw each circle
      circles.forEach((circle) => {
        // Update phase - faster cycles
        circle.phase += 0.04

        // Calculate breathing effect using sine wave
        const breatheFactor = Math.sin(circle.phase) * 0.2 + 0.8 // Oscillates between 0.6 and 1.0

        // Save context state
        ctx.save()
        ctx.translate(centerX, centerY)

        // Draw rays for this circle
        const numRays = circle.rays.length
        for (let i = 0; i < numRays; i++) {
          const angle = (i / numRays) * Math.PI * 2
          const initialLength = circle.rays[i]
          const currentLength = initialLength * breatheFactor * circle.diameter

          // Calculate start and end points
          const startRadius = maxRadius * circle.diameter
          const endRadius = maxRadius * currentLength

          // Set line style - thin lines with theme-aware color
          ctx.strokeStyle = theme === "dark" ? "#ffffff" : "#000000"
          ctx.lineWidth = 0.5

          // Draw the line from the circle's circumference
          ctx.beginPath()
          ctx.moveTo(Math.cos(angle) * startRadius, Math.sin(angle) * startRadius)
          ctx.lineTo(Math.cos(angle) * endRadius, Math.sin(angle) * endRadius)
          ctx.stroke()
        }

        // Restore context state
        ctx.restore()
      })

      // Request next frame
      animationFrameId = requestAnimationFrame(drawRadialLines)
    }

    // Start animation
    drawRadialLines()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-lg"
      aria-label="Animated radial lines forming breathing circles"
    />
  )
}
