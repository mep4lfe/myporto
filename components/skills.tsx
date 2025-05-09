"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Palette,
  FileText,
  Cpu,
  Camera,
  PenTool,
  LineChart,
  Microscope,
  FileSpreadsheet,
  Lightbulb,
  Puzzle,
  MessageSquare,
  Languages,
} from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technicalSkills = [
    { name: "Graphic Design", icon: <Palette className="h-6 w-6" /> },
    { name: "Citing", icon: <FileText className="h-6 w-6" /> },
    { name: "Computer Troubleshoot", icon: <Cpu className="h-6 w-6" /> },
    { name: "Photography", icon: <Camera className="h-6 w-6" /> },
    { name: "Engineering Drawing", icon: <PenTool className="h-6 w-6" /> },
    { name: "XRD Data Plotting", icon: <LineChart className="h-6 w-6" /> },
    { name: "Spectroscopy", icon: <Microscope className="h-6 w-6" /> },
    { name: "Microsoft Office", icon: <FileSpreadsheet className="h-6 w-6" /> },
  ]

  const softSkills = [
    { name: "Adaptive", icon: <Lightbulb className="h-6 w-6" /> },
    { name: "Problem Solving", icon: <Puzzle className="h-6 w-6" /> },
    { name: "Communication", icon: <MessageSquare className="h-6 w-6" /> },
  ]

  const languages = [
    { name: "Indonesian", level: "Native", proficiency: 100 },
    { name: "English", level: "Intermediate", proficiency: 70 },
    { name: "Japanese", level: "Beginner", proficiency: 30 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                  >
                    <div className="mr-3 text-blue-600 dark:text-blue-400">{skill.icon}</div>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mt-10 mb-6 text-gray-900 dark:text-white">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                    className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                  >
                    <div className="mr-3 text-blue-600 dark:text-blue-400">{skill.icon}</div>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
                <Languages className="h-5 w-5 mr-2" />
                Languages
              </h3>
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{language.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{language.level}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: inView ? `${language.proficiency}%` : 0 }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Professional Interests</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 mt-0.5">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Material Performance Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 mt-0.5">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Nondestructive Testing (NDT)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 mt-0.5">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Corrosion Prevention & Control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
