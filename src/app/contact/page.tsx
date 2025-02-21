'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }

  const contactInfo = [
    {
      label: "Email",
      value: "mark@purmal.photography",
      icon: "✉️",
    },
    {
      label: "Phone",
      value: "+1 (555) 123-4567",
      icon: "📱",
    },
    {
      label: "Location",
      value: "Aberdeen, Scotland",
      icon: "📍",
    },
  ]

  const socialLinks = [
    {
      platform: "Instagram",
      url: "https://instagram.com/markpurmal",
      icon: "📸",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/markpurmal",
      icon: "💼",
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@markpurmal",
      icon: "🎥",
    },
  ]

  return (
    <main className="min-h-screen pt-32">
      <section ref={contactRef} className="section-padding bg-gradient-to-b from-primary to-dark">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to bring your space to life? Let's discuss your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="text-secondary text-2xl">{info.icon}</div>
                      <div>
                        <p className="text-gray-400">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-secondary transition-colors duration-300"
                    >
                      <span className="text-2xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-dark/50 backdrop-blur-sm p-8 rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  required
                  className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="virtual-tour">360° Virtual Tour</option>
                  <option value="drone">Drone Photography/Videography</option>
                  <option value="fpv">FPV Videos</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  )
} 