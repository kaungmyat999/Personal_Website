"use client"

import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Function to handle smooth scrolling when clicking on navigation links
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if the clicked element is a navigation link with a hash
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()

        const targetId = target.getAttribute("href")
        const targetElement = document.querySelector(targetId as string)

        if (targetElement) {
          // Scroll to the target element
          targetElement.scrollIntoView({
            behavior: "smooth",
          })

          // Update the URL hash without causing a page jump
          window.history.pushState(null, "", targetId)
        }
      }
    }

    // Add event listener to handle clicks on navigation links
    document.addEventListener("click", handleNavLinkClick)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleNavLinkClick)
    }
  }, [])

  return null
}
