"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Linkedin, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-700 dark:text-gray-300">0851-5758-0667</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-700 dark:text-gray-300">3334230098@unirta.ac.id</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h4>
                    <p className="text-gray-700 dark:text-gray-300">linkedin.com/in/muhepras</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">Tangerang, Banten, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white dark:bg-gray-900"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white dark:bg-gray-900"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white dark:bg-gray-900"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-white dark:bg-gray-900"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>

                {submitSuccess && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-md">
                    Your message has been sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
