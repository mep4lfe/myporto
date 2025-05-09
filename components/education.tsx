"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      degree: "Bachelor's Degree – Metallurgical Engineering",
      institution: "Sultan Ageng Tirtayasa University",
      period: "Aug 2023 – Present",
      location: "Banten, Indonesia",
    },
    {
      degree: "Senior High School – Mathematics and Natural Science",
      institution: "SMAN 6 Kabupaten Tangerang",
      period: "July 2019 – July 2022",
      location: "Tangerang, Indonesia",
    },
    {
      degree: "Middle High School",
      institution: "SMPN 2 Cisoka",
      period: "July 2016 – July 2019",
      location: "Tangerang, Indonesia",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Education</h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600" />

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:ml-auto md:mr-[50%]" : "md:mr-auto md:ml-[50%]"
                } md:w-[45%] p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md`}
              >
                <div
                  className={`absolute top-6 -mt-1.5 w-3 h-3 rounded-full bg-blue-600 z-10 
  ${index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}
  md:${index % 2 === 0 ? "right-0 translate-x-[calc(50% + 0.5rem)]" : "left-0 -translate-x-[calc(50% + 0.5rem)]"}`}
                />

                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.degree}</h3>
                </div>

                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{item.institution}</p>

                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.period}</span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{item.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
