"use client"

import { motion } from "framer-motion"

// Re-export specific components from framer-motion that you need
export const MotionDiv = motion.div
export const MotionSection = motion.section
export const MotionSpan = motion.span
export const MotionH1 = motion.h1
export const MotionP = motion.p
export const MotionUl = motion.ul
export const MotionLi = motion.li
export const MotionImg = motion.img

// Export animation helpers
export { AnimatePresence } from "framer-motion"

// Export common animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
