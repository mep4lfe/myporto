"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I am a second-year Metallurgical Engineering student at Sultan Ageng Tirtayasa University with a background
            in Mathematics and Natural Sciences. I have a strong interest in material performance and material
            engineering.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I am passionate about expanding my knowledge and skills in understanding how materials function and finding
            innovative solutions to improve the quality and performance of materials in various industrial applications.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
              Material Performance
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
              Engineering Innovation
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
              Research & Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
