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
    <section id="services-section" className="py-16 px-8 bg-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Geometric Accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-accent/20 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/20 opacity-30"></div>
      </div>

      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 3 === 0 ? "rgba(240, 180, 41, 0.6)" : "rgba(0, 0, 0, 0.2)",
              boxShadow: i % 3 === 0 ? "0 0 8px rgba(240, 180, 41, 0.4)" : "0 0 6px rgba(0, 0, 0, 0.1)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `floatParticle ${Math.random() * 15 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 my-2 bg-white backdrop-blur-md border border-accent/30 text-primary font-medium text-sm mb-6 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
              boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
            }}
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Our Expertise
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              background: "linear-gradient(135deg, #000000 0%, #f0b429 50%, #000000 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(240, 180, 41, 0.2)",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <span>Comprehensive</span> Financial Solutions
          </h2>

          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
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
              className={`group relative p-8 bg-white backdrop-blur-md border border-accent/10 hover:border-accent/50 transition-all duration-500 transform hover:-translate-y-2 rounded-lg ${
                currentServiceIndex === index ? "ring-2 ring-accent/30 shadow-lg scale-105" : ""
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{
                transitionDelay: isVisible ? `${600 + index * 200}ms` : "0ms",
                boxShadow:
                  currentServiceIndex === index
                    ? "0 0 30px rgba(240, 180, 41, 0.3)"
                    : "0 0 20px rgba(240, 180, 41, 0.1)",
              }}
            >
              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-12 h-12 bg-accent/20"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}
              ></div>

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 text-accent">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                {/* Learn More Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors duration-300 group-hover:translate-x-2 transform"
                  style={{
                    textShadow: "0 0 10px rgba(240, 180, 41, 0.2)",
                  }}
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
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-accent/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className="bg-gradient-to-r from-primary/5 to-accent/5 border border-accent/20 p-8 md:p-12"
            style={{
              clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
              boxShadow: "0 0 30px rgba(240, 180, 41, 0.2)",
            }}
          >
            <h3
              className="text-3xl font-bold mb-4 text-primary"
              style={{
                textShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
              }}
            >
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our expert team help you achieve your financial goals with personalized strategies and proven results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent text-primary px-8 py-4 font-semibold text-lg max-md:text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                boxShadow: "0 0 25px rgba(240, 180, 41, 0.3)",
              }}
            >
              Start Your Journey
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Add keyframes for particle animation */}
      <style jsx>{`
        @keyframes floatParticle {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
          }
          50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
          }
          75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  )
}

export default Services
