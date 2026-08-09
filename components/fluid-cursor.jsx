"use client"

import { useEffect, useRef } from "react"

export default function FluidCursor() {
  const canvasRef = useRef(null)
  const initialized = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    // React Strict Mode (on by default in Next.js dev) double-invokes effects.
    // WebGLFluid starts its own render loop/listeners with no teardown API, so a
    // second init on the same canvas creates two competing simulations.
    if (!canvas || initialized.current) return
    initialized.current = true

    let cleanup = () => {}

    import("webgl-fluid").then(({ default: WebGLFluid }) => {
      // Config matches izemx.com's own fluid-cursor setup (read from their page script).
      WebGLFluid(canvas, {
        TRIGGER: "hover",
        IMMEDIATE: false,
        AUTO: false,
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 800,
        // Dissipation moderate again (not extreme) - too fast kills the swirl before
        // curl/vorticity has time to shape it into the characteristic smoke motion.
        // Brightness is controlled via BLOOM_INTENSITY and canvas opacity instead,
        // since those don't affect the fluid's shape, only its visibility.
        DENSITY_DISSIPATION: 4.5,
        VELOCITY_DISSIPATION: 2.5,
        PRESSURE: 0.1,
        PRESSURE_ITERATIONS: 18,
        CURL: 3,
        SPLAT_RADIUS: 0.13,
        SPLAT_FORCE: 4000,
        SHADING: true,
        TRANSPARENT: true,
        // BLOOM:false hangs the renderer in this library build - keep it enabled
        // but push intensity very low instead to avoid the blown-out hot core.
        BLOOM: true,
        BLOOM_INTENSITY: 0.04,
        // No fixed SPLAT_COLOR: soft varied pastel hues instead of one flat tone.
      })

      // Canvas is pointer-events:none so the page stays clickable through it;
      // forward real mousemove events onto it so the sim still reacts to the cursor.
      const OUTSIDE_OPACITY = 0.4
      const INSIDE_SECTION_OPACITY = 0.2

      const forwardMove = (e) => {
        const overSection = !!e.target.closest("section")
        canvas.style.opacity = overSection ? INSIDE_SECTION_OPACITY : OUTSIDE_OPACITY

        canvas.dispatchEvent(
          new MouseEvent("mousemove", {
            clientX: e.clientX,
            clientY: e.clientY,
            bubbles: false,
          })
        )
      }
      window.addEventListener("mousemove", forwardMove)
      cleanup = () => window.removeEventListener("mousemove", forwardMove)
    })

    return () => cleanup()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] h-screen w-screen pointer-events-none transition-opacity duration-300"
      style={{ opacity: 0.4 }}
    />
  )
}
