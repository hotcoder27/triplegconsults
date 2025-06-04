import { useState, useEffect } from "react"

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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Strategic Planning",
      description: "Comprehensive financial strategies tailored to your unique goals and circumstances.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Risk Management",
      description: "Protect your assets with our proven risk assessment and mitigation strategies.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Growth Focused",
      description: "Maximize your financial potential with our data-driven investment approaches.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Personal Service",
      description: "Dedicated support from experienced professionals who understand your needs.",
    },
  ]

  return (
    <section id="about-section" className="py-16 bg-primary relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Geometric Accents */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent opacity-20"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 3 === 0 ? "rgba(240, 180, 41, 0.8)" : "rgba(255, 255, 255, 0.6)",
              boxShadow: i % 3 === 0 ? "0 0 8px rgba(240, 180, 41, 0.8)" : "0 0 6px rgba(255, 255, 255, 0.6)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `floatParticle ${Math.random() * 15 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
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
              {/* Futuristic Badge */}
              <div
                className="inline-flex items-center px-4 py-2 bg-primary/40 backdrop-blur-md border border-accent/30 text-accent font-medium text-sm mb-6"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
                }}
              >
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Why Choose Us
              </div>

              {/* Futuristic Heading */}
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f0b429 50%, #ffffff 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 40px rgba(240, 180, 41, 0.3)",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                <span>Expert Financial</span>
                <br />
                <span>Guidance You Can Trust</span>
              </h2>

              {/* Description */}
              <p
                className="text-xl text-white/90 mb-8 leading-relaxed"
                style={{
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                }}
              >
                With over two decades of experience, we've helped hundreds of clients achieve their financial dreams.
                Our personalized approach ensures every strategy is tailored to your unique situation.
              </p>

              {/* Futuristic Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group relative p-6 bg-primary/30 backdrop-blur-md border border-accent/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-500 transform hover:-translate-y-1 rounded-lg ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms",
                      boxShadow: "0 0 20px rgba(240, 180, 41, 0.1)",
                    }}
                  >
                    {/* Decorative corner accent */}
                    <div
                      className="absolute top-0 right-0 w-8 h-8 bg-accent/20"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                      }}
                    ></div>

                    <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-white mb-3 text-lg group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Futuristic Visual */}
          <div
            className={`relative transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Visual Container */}
              <div
                className="relative bg-gradient-to-br from-primary to-primary/80 p-8 shadow-2xl rounded-2xl"
                style={{
                  boxShadow: "0 0 40px rgba(240, 180, 41, 0.2)",
                }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  {/* Stats Display */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {[
                      { value: "$2.5B+", label: "Assets Managed" },
                      { value: "500+", label: "Happy Clients" },
                      { value: "23+", label: "Years Experience" },
                      { value: "98%", label: "Success Rate" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="relative text-center p-4 bg-accent/10 backdrop-blur-md border border-accent/20 rounded-lg hover:bg-accent/20 transition-all duration-300"
                        style={{
                          boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                        }}
                      >
                        {/* Decorative corner */}
                        <div
                          className="absolute top-0 left-0 w-6 h-6 bg-accent/30"
                          style={{
                            clipPath:
                              index % 2 === 0 ? "polygon(0 0, 100% 0, 0 100%)" : "polygon(0 0, 100% 0, 100% 100%)",
                          }}
                        ></div>

                        <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                        <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Futuristic Chart Visualization */}
                  <div
                    className="bg-white/20 p-4"
                    style={{
                      clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
                    }}
                  >
                    <div className="flex items-end justify-between h-24 space-x-2">
                      {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                        <div
                          key={index}
                          className="bg-accent rounded-t flex-1"
                          style={{
                            height: `${height}%`,
                            boxShadow: "0 0 10px rgba(240, 180, 41, 0.5)",
                            animation: `growBar 1s ease-out ${index * 200}ms both`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-white/80 text-xs mt-2 text-center">Portfolio Growth Over Time</div>
                  </div>
                </div>

                {/* Futuristic Floating Elements */}
                <div
                  className="absolute -top-4 -right-4 bg-accent p-4 shadow-lg"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                    boxShadow: "0 0 20px rgba(240, 180, 41, 0.4)",
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  <div className="text-primary font-bold text-lg">A+</div>
                  <div className="text-primary/80 text-xs">Rating</div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 bg-white p-4 shadow-lg"
                  style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                    animation: "float 3s ease-in-out infinite 1s",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <div className="text-primary font-semibold text-sm">24/7 Support</div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div
                className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-accent/20 to-primary/20"
                style={{
                  clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for animations */}
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes growBar {
          0% {
            height: 0%;
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default About
