import { useState, useEffect } from "react"
import { logoImg } from "../utils"

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      company: "Johnson & Associates",
      content:
        "The team's expertise in tax planning saved our business over $50,000 last year. Their strategic approach to financial management has been invaluable to our growth.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      company: "Chen Properties",
      content:
        "Professional, knowledgeable, and always available when I need them. They've helped me structure my investments for maximum tax efficiency and growth potential.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Tech Executive",
      company: "InnovateTech",
      content:
        "From retirement planning to investment strategies, they've covered all aspects of my financial life. I finally feel confident about my financial future.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
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
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials-section" className="py-20 bg-white relative overflow-hidden">
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
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

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
            className={`inline-flex items-center px-4 py-2 bg-white backdrop-blur-md border border-accent/30 text-primary font-medium text-sm mb-6 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
              boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
            }}
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Client Success Stories
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
            What Our <span className="text-accent">Clients Say</span>
          </h2>

          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience
            working with us.
          </p>
        </div>

        {/* Futuristic Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative bg-primary p-8 md:p-12 transform transition-all duration-1000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
              boxShadow: "0 0 30px rgba(240, 180, 41, 0.2)",
            }}
          >
            {/* Decorative corner accents */}
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-accent/20"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%)",
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-16 h-16 bg-accent/20"
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 100%)",
              }}
            ></div>

            {/* Futuristic Quote Icon */}
            <div
              className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center text-4xl text-accent font-bold"
              style={{
                clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                background: "rgba(240, 180, 41, 0.1)",
                boxShadow: "0 0 15px rgba(240, 180, 41, 0.3)",
              }}
            >
              "
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              <div className="mb-8">
                <p
                  className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic"
                  style={{
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {testimonials[currentTestimonial].content}
                </p>

                {/* Futuristic Rating Stars */}
                <div className="flex justify-center mb-6 space-x-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 flex items-center justify-center"
                      style={{
                        clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                        background: "rgba(240, 180, 41, 0.2)",
                        boxShadow: "0 0 10px rgba(240, 180, 41, 0.3)",
                      }}
                    >
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div
                  className="w-20 h-20 overflow-hidden border-4 border-accent shadow-lg"
                  style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                    boxShadow: "0 0 20px rgba(240, 180, 41, 0.3)",
                  }}
                >
                  <img
                    src={logoImg || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div
                    className="font-bold text-white text-lg"
                    style={{
                      textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-accent font-medium">{testimonials[currentTestimonial].role}</div>
                  <div className="text-white/80 text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>

            {/* Futuristic Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 transition-all duration-300 ${
                    index === currentTestimonial ? "bg-accent scale-125" : "bg-white/30 hover:bg-white/50"
                  }`}
                  style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                    boxShadow:
                      index === currentTestimonial
                        ? "0 0 15px rgba(240, 180, 41, 0.5)"
                        : "0 0 5px rgba(255, 255, 255, 0.2)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Futuristic Additional Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group p-6 bg-white border border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${800 + index * 200}ms` : "0ms",
                  clipPath: "polygon(0 0, 100% 0, 99% 100%, 1% 100%)",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.1)",
                }}
              >
                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-accent/20"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                  }}
                ></div>

                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 overflow-hidden mr-4"
                    style={{
                      clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                      boxShadow: "0 0 10px rgba(240, 180, 41, 0.2)",
                    }}
                  >
                    <img
                      src={logoImg || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-3">
                  "{testimonial.content.substring(0, 120)}..."
                </p>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className="w-5 h-5 flex items-center justify-center"
                      style={{
                        clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                        background: "rgba(240, 180, 41, 0.1)",
                        boxShadow: "0 0 5px rgba(240, 180, 41, 0.2)",
                      }}
                    >
                      <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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

export default Testimonials
