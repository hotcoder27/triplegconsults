import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const features = [
    {
      icon: "🎯",
      title: "Strategic Planning",
      description: "Comprehensive financial strategies tailored to your unique goals and circumstances.",
    },
    {
      icon: "🛡️",
      title: "Risk Management",
      description: "Protect your assets with our proven risk assessment and mitigation strategies.",
    },
    {
      icon: "📈",
      title: "Growth Focused",
      description: "Maximize your financial potential with our data-driven investment approaches.",
    },
    {
      icon: "🤝",
      title: "Personal Service",
      description: "Dedicated support from experienced professionals who understand your needs.",
    },
  ]

  return (
    <section
      id="about-section"
      className="py-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="relative">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Why Choose Us
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                <span className="text-primary">Expert Financial</span>
                <br />
                <span className="text-primary">
                  Guidance You Can Trust
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over two decades of experience, we've helped hundreds of clients achieve their financial dreams.
                Our personalized approach ensures every strategy is tailored to your unique situation.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/about"
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div
            className={`relative transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  {/* Stats Display */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-600 mb-2">$2.5B+</div>
                      <div className="text-primary text-sm">Assets Managed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-600 mb-2">500+</div>
                      <div className="text-primary text-sm">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-600 mb-2">23+</div>
                      <div className="text-primary text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-600 mb-2">98%</div>
                      <div className="text-primary text-sm">Success Rate</div>
                    </div>
                  </div>

                  {/* Chart Visualization */}
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-end justify-between h-24 space-x-2">
                      {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                        <div
                          key={index}
                          className="bg-accent rounded-t flex-1 animate-pulse"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${index * 200}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-primary text-xs mt-2 text-center">Portfolio Growth Over Time</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-accent rounded-xl p-4 shadow-lg animate-float">
                  <div className="text-white font-bold text-lg">A+</div>
                  <div className="text-white/80 text-xs">Rating</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-float delay-1000">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-gray-800 font-semibold text-sm">24/7 Support</div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
