"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, CheckCircle } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experienceData = [
    {
      title: "Student Intern",
      company: "Advance Material and Tomography Laboratory",
      period: "Oct 2024 – Present",
      responsibilities: [
        "Processed and managed Nondestructive Testing (NDT) data using the Magnetic Induction Tomography (MIT) method, utilizing Python for data analysis and automation.",
        "Developed simulation models for NDT analysis using COMSOL Multiphysics to support experimental validation and enhance testing accuracy.",
      ],
    },
    {
      title: "Research and Development Staff",
      company: "AMPP University of Sultan Ageng Tirtayasa Student Chapter",
      period: "Oct 2024 – Present",
      responsibilities: [
        "Contributed to the authorship and compilation of a book chapter on corrosion, enhancing the chapter's academic portfolio.",
        "Participated in various inter-university competitions, representing the chapter and developing practical engineering solutions.",
        "Engaged in Student Creativity Program (PKM) activities and community service initiatives to apply technical knowledge for societal benefit.",
      ],
    },
    {
      title: "Member",
      company: "Badminton Club",
      period: "July 2019 – March 2020",
      responsibilities: [
        "Actively participated in weekly training sessions to improve badminton skills and physical fitness.",
        "Developed discipline, time management, and leadership skills through consistent participation in practices and tournaments.",
      ],
    },
    {
      title: "Member",
      company: "Youth Scientific Club",
      period: "Aug 2017 – May 2019",
      responsibilities: [
        "Presented research findings at school science fairs and received positive feedback for critical thinking and presentation skills.",
        "Gained experience in scientific methodologies, data analysis, and effective communication of complex ideas through written reports and presentations.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Experience</h2>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <div className="flex items-center mt-1">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">{item.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">{item.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {item.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
