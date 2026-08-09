"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function TiltCard({ children, index = 0, className = "" }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 250, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 250, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px - 0.5)
    y.set(py - 0.5)
    ref.current.style.setProperty("--spot-x", `${px * 100}%`)
    ref.current.style.setProperty("--spot-y", `${py * 100}%`)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative ${className}`}
    >
      {/* Cursor-tracked spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit]"
        style={{
          background:
            "radial-gradient(circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(168,85,247,0.25), transparent 60%)",
        }}
      />
      {children}
    </motion.div>
  )
}
