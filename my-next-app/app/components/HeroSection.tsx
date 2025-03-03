'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="heading-primary mb-6">
            Transform Your Development
            <span className="text-primary"> Workflow</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="paragraph mb-8 max-w-2xl mx-auto"
          >
            Streamline your development process with our powerful platform.
            Build, test, and deploy faster than ever before.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="button-primary">
              Get Started Free
            </button>
            <button className="button-secondary">
              View Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '50M+', label: 'Lines of Code' },
              { number: '99.9%', label: 'Uptime' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
