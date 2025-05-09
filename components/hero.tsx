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
      {/* Abstract shapes background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 to-slate-900">
        {/* Animated shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-[15%] left-[10%] w-80 h-80 rounded-full bg-indigo-500 filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute top-[40%] left-[25%] w-72 h-72 rounded-full bg-cyan-400 filter blur-3xl"
        />

        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating shapes */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute top-[15%] right-[20%] w-16 h-16 border-4 border-blue-300/30 rounded-lg"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute top-[30%] left-[15%] w-20 h-20 border-4 border-indigo-300/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute bottom-[25%] right-[30%] w-24 h-24 border-4 border-cyan-300/30 transform rotate-45"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute bottom-[20%] left-[25%] w-12 h-12 bg-blue-500/10 rounded-md"
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
        </div>
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
          {/* Memperbaiki tombol "Learn More" agar lebih terlihat

          // Ubah bagian tombol Learn More dengan mengganti warna dan style agar lebih terlihat */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 border-2 border-white" asChild>
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
