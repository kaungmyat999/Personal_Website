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
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match its display size
    const resizeCanvas = () => {
      if (!containerRef.current) return

      // Get the container dimensions
      const containerWidth = containerRef.current.clientWidth
      const containerHeight = containerRef.current.clientHeight

      // Set canvas size to match container
      canvas.style.width = `${containerWidth}px`
      canvas.style.height = `${containerHeight}px`

      // Set actual canvas dimensions accounting for device pixel ratio
      const dpr = window.devicePixelRatio || 1
      canvas.width = containerWidth * dpr
      canvas.height = containerHeight * dpr

      // Scale context to account for device pixel ratio
      ctx.scale(dpr, dpr)
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
      if (!canvas || !containerRef.current) return

      const containerWidth = containerRef.current.clientWidth
      const containerHeight = containerRef.current.clientHeight

      // Center coordinates
      const centerX = containerWidth / 2
      const centerY = containerHeight / 2

      // Determine radius based on screen size - reduce multipliers to prevent overflow
      const isMobile = window.innerWidth < 768
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024

      let radiusMultiplier = 0.4 // Reduced from 0.45 for desktop
      if (isMobile) {
        radiusMultiplier = 0.35 // Reduced from 0.8 for mobile
      } else if (isTablet) {
        radiusMultiplier = 0.38 // Reduced from 0.7 for tablet
      }

      const maxRadius = Math.min(containerWidth, containerHeight) * radiusMultiplier

      // Clear canvas
      ctx.clearRect(0, 0, containerWidth, containerHeight)

      // Determine the current theme for line color
      // Use resolvedTheme to get the actual theme (system preference included)
      const currentTheme = resolvedTheme || theme
      const lineColor = currentTheme === "dark" ? "#ffffff" : "#000000"

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
          ctx.strokeStyle = lineColor
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
  }, [theme, resolvedTheme])

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="rounded-lg" aria-label="Animated radial lines forming breathing circles" />
    </div>
  )
}
