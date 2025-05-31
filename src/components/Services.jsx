import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { SERVICES } from "../constants"

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    // Rotate through services for highlighting
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % SERVICES.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="services-section" className="py-6 px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 my-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <span className="w-2 h-2 bg-primary rounded-full bg-accent mr-2 animate-pulse"></span>
            Our Expertise
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-accent">
              Comprehensive
            </span>{" "}
            Financial Solutions
          </h2>

          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            From accounting and tax planning to strategic business advisory, we provide end-to-end financial services
            tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-primary border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                currentServiceIndex === index ? "ring-2 ring-primary/20 shadow-lg scale-105" : ""
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{
                transitionDelay: isVisible ? `${600 + index * 200}ms` : "0ms",
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white leading-relaxed mb-6">{service.description}</p>

                {/* Learn More Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center bg-primary text-white font-semibold hover:text-white/80 transition-colors duration-300 group-hover:translate-x-2 transform"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Financial Future?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our expert team help you achieve your financial goals with personalized strategies and proven results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary text-white from-primary to-primary/90 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
