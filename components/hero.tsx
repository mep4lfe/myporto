"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Muhamad Eko Prasetio</h1>
          <h2 className="text-xl md:text-2xl font-medium text-blue-200 mb-8">Metallurgical Engineering Student</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Passionate about material performance and engineering innovations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <Link href="#about">
            <ChevronDown className="h-10 w-10 text-white cursor-pointer" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
