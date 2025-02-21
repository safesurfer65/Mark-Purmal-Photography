'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [portfolioFilter, setPortfolioFilter] = useState('all')
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredPortfolio = portfolio.filter(item => 
    portfolioFilter === 'all' ? true : item.category === portfolioFilter
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Capturing Reality in
              <span className="text-secondary"> 360°</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Professional virtual tours, drone photography, and FPV videos that bring your space to life
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#portfolio" className="btn btn-primary">
                View Portfolio
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={ref} className="section-padding bg-dark">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Elevate your property showcase with cutting-edge visual technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-primary/20 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="text-secondary text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-gradient-to-b from-dark to-primary">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our latest projects and see how we bring spaces to life
            </p>
            
            {/* Portfolio Filter */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {['all', 'virtual-tour', 'drone', 'fpv'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPortfolioFilter(filter)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    portfolioFilter === filter
                      ? 'bg-secondary text-white'
                      : 'bg-primary/50 text-gray-300 hover:bg-primary'
                  }`}
                >
                  {filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialRef} className="section-padding bg-dark">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What our clients say about our work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm rounded-xl p-6 relative"
              >
                <div className="text-accent text-4xl mb-6">"</div>
                <p className="text-gray-300 mb-6 italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="section-padding bg-gradient-to-b from-primary to-dark">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h2>
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

const services = [
  {
    title: "360° Virtual Tours",
    description: "Immersive virtual experiences that let viewers explore every angle of your space.",
    icon: "🔄",
  },
  {
    title: "Drone Photography",
    description: "Stunning aerial perspectives that showcase your property from unique angles.",
    icon: "🚁",
  },
  {
    title: "FPV Videos",
    description: "Dynamic, cinematic flythrough videos that bring spaces to life.",
    icon: "🎥",
  },
]

const portfolio = [
  {
    title: "Luxury Hotel Virtual Tour",
    description: "Complete 360° virtual tour of a 5-star hotel property",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    category: "virtual-tour",
  },
  {
    title: "Coastal Estate Aerial View",
    description: "Drone photography showcasing a beachfront property",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    category: "drone",
  },
  {
    title: "Restaurant FPV Experience",
    description: "Dynamic FPV flight through a high-end restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    category: "fpv",
  },
  {
    title: "Historic Building Tour",
    description: "Detailed virtual tour of a heritage building",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1",
    category: "virtual-tour",
  },
  {
    title: "Urban Development Aerial",
    description: "Drone footage of a modern urban development project",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    category: "drone",
  },
  {
    title: "Sports Arena FPV",
    description: "High-speed FPV flight through a sports complex",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
    category: "fpv",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    text: "Mark's virtual tours have completely transformed how I showcase properties. The quality and attention to detail are outstanding!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Michael Chen",
    role: "Hotel Manager",
    text: "The drone footage captured our beachfront resort perfectly. It's helped us increase our bookings significantly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Emma Williams",
    role: "Event Coordinator",
    text: "The FPV videos of our venues are breathtaking! They provide an immersive experience that photos simply can't match.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
]

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