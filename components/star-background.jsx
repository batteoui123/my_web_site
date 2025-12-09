"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Star = ({ style }) => (
    <motion.div
        className="absolute rounded-full bg-white"
        style={{
            width: Math.random() < 0.5 ? 1 : 2,
            height: Math.random() < 0.5 ? 1 : 2,
            ...style,
        }}
        animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
        }}
    />
)

export default function StarBackground() {
    const [stars, setStars] = useState([])

    useEffect(() => {
        // Generate star positions
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            style: {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
            },
            duration: Math.random() * 20 + 20, // Slow movement duration
            xMove: Math.random() * 50 - 25, // Move slightly left/right
            yMove: Math.random() * 50 - 25, // Move slightly up/down
        }))
        setStars(newStars)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: star.xMove, y: star.yMove }}
                    transition={{
                        duration: star.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="absolute w-full h-full"
                >
                    <Star style={star.style} />
                </motion.div>
            ))}
        </div>
    )
}
