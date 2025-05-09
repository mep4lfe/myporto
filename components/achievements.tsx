"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Calendar } from "lucide-react"

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievementsData = [
    {
      title: "19th MnM's Student Innovation Forum University of Indonesia",
      position: "Finalist",
      date: "Dec 2024",
    },
    {
      title: "Analytical Chemistry Practicum in Basic Chemistry Laboratory",
      position: "Best Practicum Student",
      date: "Jul 2024",
    },
    {
      title: "National Battery Research Institute – Youth Ideas Competition 2024",
      position: "Part of MetEng team and passed the abstract selection and paper completion",
      date: "Jul 2024",
    },
    {
      title: "District Level National Science Olympiad in Astronomy",
      position: "Participant",
      date: "March 2021",
    },
    {
      title: "District Level National Science Olympiad in Natural Science",
      position: "Participant",
      date: "March 2018",
    },
    {
      title: "District Level National Science Olympiad in Natural Science",
      position: "Participant",
      date: "March 2017",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 pl-9">{achievement.position}</p>

                <div className="flex items-center text-gray-600 dark:text-gray-400 pl-9">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{achievement.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
